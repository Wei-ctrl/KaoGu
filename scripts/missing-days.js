#!/usr/bin/env node
// List daily sets that still need writing: node scripts/missing-days.js [days=2]
// Checks today and the following days (Taiwan time, UTC+8) for every subject.
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SUBJECTS = ["chemistry", "english-grammar", "english-text"];
const days = Number(process.argv[2] || 2);
const taiwan = (offset) => new Date(Date.now() + 8 * 3600e3 + offset * 86400e3).toISOString().slice(0, 10);

const missing = [];
for (const subject of SUBJECTS) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(__dirname, "..", "data", subject, "index.js"), "utf8"), ctx);
  const have = new Set(ctx.window.KAOGU_SETS[subject]);
  for (let i = 0; i < days; i++) {
    const date = taiwan(i);
    if (!have.has(date)) missing.push({ subject, date });
  }
}
console.log(JSON.stringify(missing, null, 2));
