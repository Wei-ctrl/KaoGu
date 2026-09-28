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
  if (qs.length !== 20) fail(`${date}: expected 20 questions, found ${qs.length}`);
  const letters = { A: 0, B: 0, C: 0, D: 0 };

  qs.forEach((q, i) => {
    const where = `${date} #${i + 1} (${q.id})`;
    if (!q.id) fail(`${where}: missing id`);
    else if (seenIds.has(q.id)) fail(`${where}: id also used on ${seenIds.get(q.id)}`);
    else seenIds.set(q.id, date);
    if (!["single_choice", "count_choice"].includes(q.type)) fail(`${where}: type must be single_choice or count_choice (app is multiple choice only)`);
    if (!q.stem) fail(`${where}: missing stem`);
    else if (seenStems.has(q.stem)) fail(`${where}: same stem as ${seenStems.get(q.stem)}`);
    else seenStems.set(q.stem, where);
    const keys = Object.keys(q.options || {});
    if (keys.join() !== "A,B,C,D") fail(`${where}: options must be exactly A–D`);
    if (keys.some((k) => !String(q.options[k]).trim())) fail(`${where}: empty option`);
    if (new Set(Object.values(q.options || {})).size !== keys.length) fail(`${where}: duplicate options`);
    if (!letters.hasOwnProperty(q.answer)) fail(`${where}: answer must be one of A–D`);
    else letters[q.answer]++;
    if (!q.explanation) fail(`${where}: missing explanation`);
    if (/「?(不是|錯誤|不能|有誤)」?/.test(q.stem) && !/「(不是|錯誤|不能|有誤)」/.test(q.stem)) fail(`${where}: negative word must be wrapped in 「」`);
  });

  const max = Math.max(...Object.values(letters));
  if (qs.length && max / qs.length > 0.4) fail(`${date}: one answer letter is over 40% (${JSON.stringify(letters)})`);
  console.log(`${date}: ${qs.length} questions, answers ${JSON.stringify(letters)}`);
}

if (errors) { console.error(`\n${errors} problem(s) found.`); process.exit(1); }
console.log("All sets valid.");
