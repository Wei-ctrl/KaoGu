#!/usr/bin/env node
// Add one day's set: node scripts/add-day.js <subject> <YYYY-MM-DD> <questions.json>
// questions.json is { "questions": [...] } in the same format as the existing files.
// Writes data/<subject>/<date>.js, adds the date to data/<subject>/index.js, then validates.
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { spawnSync } = require("child_process");

const [subject, date, file] = process.argv.slice(2);
if (!subject || !/^\d{4}-\d{2}-\d{2}$/.test(date || "") || !file) {
  console.error("usage: node scripts/add-day.js <subject> <YYYY-MM-DD> <questions.json>");
  process.exit(2);
}
const dir = path.join(__dirname, "..", "data", subject);
const set = JSON.parse(fs.readFileSync(file, "utf8"));
if (!Array.isArray(set.questions)) throw new Error("JSON must be { \"questions\": [...] }");

const key = JSON.stringify(subject);
fs.writeFileSync(path.join(dir, date + ".js"),
  `// ${subject} daily set for ${date}. See prompts/daily-routine.md.\n` +
  `(window.KAOGU_DAILY = window.KAOGU_DAILY || {})[${key}] = window.KAOGU_DAILY[${key}] || {};\n` +
  `window.KAOGU_DAILY[${key}][${JSON.stringify(date)}] = ${JSON.stringify(set, null, 2)};\n`);

const indexFile = path.join(dir, "index.js");
const src = fs.readFileSync(indexFile, "utf8");
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(src, ctx);
const dates = [...new Set([...ctx.window.KAOGU_SETS[subject], date])].sort();
const header = src.slice(0, src.indexOf("(window.KAOGU_SETS"));
fs.writeFileSync(indexFile, header +
  `(window.KAOGU_SETS = window.KAOGU_SETS || {})[${key}] = [\n` +
  dates.map((d) => `  "${d}"`).join(",\n") + "\n];\n");

const check = spawnSync("node", [path.join(__dirname, "check-daily.js"), subject], { stdio: "inherit" });
process.exit(check.status);
