# KaoGu

A minimalist, responsive black-and-white study app.

Subjects: Guowen, English Text, English Grammar, Maths, Physics, Chemistry.

Every subject is multiple choice, one question at a time, 20 questions per day.
English Grammar (tenses) and Chemistry (僑先部 Ch1–Ch2) have content.

Keyboard: A–D (or 1–4) to answer, Enter for next, Esc to go back.

## Daily sets

English Grammar and Chemistry each get a new set of 20 questions every day:

- `data/<subject>/<YYYY-MM-DD>.js` — one day's 20 questions (same JSON format for
  both subjects: `stem`, `options` A–D, `answer` letter, `explanation`).
- `data/<subject>/index.js` — the list of available dates.
- `prompts/chemistry.md` — the question-engine prompt used to write chemistry sets.

English stems mark each blank with `___`; for two or more blanks, join the parts
of each option with ` … ` (e.g. `"drinks … is drinking"`). Each question's
`chapter` (e.g. "Past continuous") is shown above the sentence.

The app opens the newest set dated today or earlier. Days change at midnight
Taiwan time (UTC+8).

Sets currently run from 2026-09-28 to 2026-10-05. After the last date the app
keeps showing the newest set (labelled "Latest set") until more are added.

To add a day: write `data/<subject>/<date>.js` (copy an existing file's first two
lines, then paste the generated `{ "questions": [...] }`), add the date to
`index.js`, and run:

```sh
node scripts/check-daily.js chemistry
node scripts/check-daily.js english-grammar
```

It checks each set has 20 questions with options A–D, a valid answer, an
explanation, options that fill every blank, no repeated ids or question stems
across days, and no answer letter over 40%.
