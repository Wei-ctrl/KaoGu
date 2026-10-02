#!/usr/bin/env node
// Validate daily question sets: node scripts/check-daily.js [subject]
// Checks every date (no repeated ids or stems across days) in data/<subject>/index.js against prompts/<subject>.md §7–§8 rules.
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const subject = process.argv[2] || "chemistry";
const dir = path.join(__dirname, "..", "data", subject);
const ctx = { window: {} };
vm.createContext(ctx);

const run = (file) => vm.runInContext(fs.readFileSync(file, "utf8"), ctx, { filename: file });
run(path.join(dir, "index.js"));
const dates = ctx.window.KAOGU_SETS[subject];
let errors = 0;
const fail = (msg) => { errors++; console.error("✕ " + msg); };

if (!Array.isArray(dates) || !dates.length) fail("index.js lists no dates");
const sorted = [...dates].sort();
if (sorted.join() !== dates.join()) fail("index.js dates are not sorted oldest first");
if (new Set(dates).size !== dates.length) fail("index.js has duplicate dates");

const seenIds = new Map();
const seenStems = new Map();
for (const date of dates) {
  const file = path.join(dir, date + ".js");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) { fail(`${date}: bad date format`); continue; }
  if (!fs.existsSync(file)) { fail(`${date}: missing ${path.relative(process.cwd(), file)}`); continue; }
  run(file);
  const set = (ctx.window.KAOGU_DAILY[subject] || {})[date];
  if (!set || !Array.isArray(set.questions)) { fail(`${date}: file does not register a questions array`); continue; }

  const qs = set.questions;
  const expected = { "english-text": 22, maths: 24 }[subject] || 20;
  if (qs.length !== expected) fail(`${date}: expected ${expected} questions, found ${qs.length}`);
  const letters_ = {};
  let singles = 0;

  qs.forEach((q, i) => {
    const where = `${date} #${i + 1} (${q.id})`;
    if (!q.id) fail(`${where}: missing id`);
    else if (seenIds.has(q.id)) fail(`${where}: id also used on ${seenIds.get(q.id)}`);
    else seenIds.set(q.id, date);
    if (!q.stem) fail(`${where}: missing stem`);
    else {
      // Maths papers reuse generic stems ("Which of the following options are **wrong**?"),
      // so there a repeat means the same stem with the same options.
      const key = subject === "maths" ? q.stem + JSON.stringify(q.options) + JSON.stringify(q.slots || null) : q.stem;
      if (seenStems.has(key)) fail(`${where}: same question as ${seenStems.get(key)}`);
      else seenStems.set(key, where);
    }
    const keys = Object.keys(q.options || {});
    if (q.type === "fill_slots") {
      // 選填: numbered one-character slots, each shown as \boxed{n} in the stem.
      if (q.options) fail(`${where}: fill_slots questions have no options`);
      if (!Array.isArray(q.slots) || !q.slots.length) fail(`${where}: fill_slots needs a slots array`);
      else q.slots.forEach((sl) => {
        if (!/^[0-9-]$/.test(String(sl.v))) fail(`${where}: slot <${sl.n}.> must hold one digit or "-"`);
        if (!q.stem.includes(`\\boxed{${sl.n}}`)) fail(`${where}: stem is missing \\boxed{${sl.n}}`);
      });
    } else {
      // A–D normally; word banks up to A–J; maths papers number options (1)–(5).
      const letters = "ABCDEFGHIJ".slice(0, keys.length).split("").join();
      const digits = "123456789".slice(0, keys.length).split("").join();
      if (keys.length < 4 || keys.length > 10 || (keys.join() !== letters && keys.join() !== digits))
        fail(`${where}: options must be lettered from A or numbered from 1 (4–10 choices)`);
      if (keys.some((k) => !String(q.options[k]).trim())) fail(`${where}: empty option`);
      if (new Set(Object.values(q.options || {})).size !== keys.length) fail(`${where}: duplicate options`);
      if (q.type === "multi_choice") {
        if (!Array.isArray(q.answer) || !q.answer.length || q.answer.some((k) => !keys.includes(k)))
          fail(`${where}: multi_choice answer must be a non-empty array of option keys`);
      } else if (!["single_choice", "count_choice"].includes(q.type)) {
        fail(`${where}: unknown type ${q.type}`);
      } else if (!keys.includes(q.answer)) {
        fail(`${where}: answer must be one of the option keys`);
      } else {
        letters_[q.answer] = (letters_[q.answer] || 0) + 1;
        singles++;
      }
    }
    if (!q.explanation) fail(`${where}: missing explanation`);
    const blanks = (q.stem || "").split("___").length - 1;
    if (blanks) Object.values(q.options || {}).forEach((o) => {
      if (String(o).split(" … ").length !== blanks) fail(`${where}: option "${o}" doesn't fill ${blanks} blank(s)`);
    });
    if (q.underline) Object.values(q.options || {}).forEach((o) => {
      if (q.stem.split(o).length !== 2) fail(`${where}: underlined part "${o}" must appear exactly once in the stem`);
    });
    if (/「?(不是|錯誤|不能|有誤)」?/.test(q.stem) && !/「(不是|錯誤|不能|有誤)」/.test(q.stem)) fail(`${where}: negative word must be wrapped in 「」`);
  });

  const max = Math.max(0, ...Object.values(letters_));
  if (singles && max / singles > 0.4) fail(`${date}: one answer key is over 40% of single-answer questions (${JSON.stringify(letters_)})`);
  console.log(`${date}: ${qs.length} questions, single answers ${JSON.stringify(letters_)}`);
}

if (errors) { console.error(`\n${errors} problem(s) found.`); process.exit(1); }
console.log("All sets valid.");
