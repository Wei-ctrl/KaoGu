#!/usr/bin/env node
// List sets that still need writing: node scripts/missing-days.js [days=8]
// Looks at today and the following days (Taiwan time, UTC+8). Daily subjects need
// a set for every date; maths gets one mock paper per week, dated each Monday.
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const DAILY = ["chemistry", "english-grammar", "english-text"];
const WEEKLY = ["maths"];
const days = Number(process.argv[2] || 8);
const taiwan = (offset) => new Date(Date.now() + 8 * 3600e3 + offset * 86400e3);
const ymd = (d) => d.toISOString().slice(0, 10);

function have(subject) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(__dirname, "..", "data", subject, "index.js"), "utf8"), ctx);
  return new Set(ctx.window.KAOGU_SETS[subject]);
}

const missing = [];
for (const subject of DAILY) {
  const got = have(subject);
  for (let i = 0; i < days; i++) if (!got.has(ymd(taiwan(i)))) missing.push({ subject, date: ymd(taiwan(i)) });
}
for (const subject of WEEKLY) {
  const got = have(subject);
  for (let i = 0; i < days; i++) {
    const d = taiwan(i);
    if (d.getUTCDay() === 1 && !got.has(ymd(d))) missing.push({ subject, date: ymd(d) });
  }
}
missing.sort((a, b) => a.date.localeCompare(b.date) || a.subject.localeCompare(b.subject));
console.log(JSON.stringify(missing, null, 2));
