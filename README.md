# KaoGu

A minimalist, responsive black-and-white study app.

Subjects: Guowen, English Text, English Grammar, Maths, Physics, Chemistry.

Every subject is multiple choice, one question at a time, 20 questions per day.
English Grammar (tenses), English Text (U3L2) and Chemistry (僑先部 Ch1–Ch2)
have content.

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

## English Text

`data/english-text/<date>.js` follows the unit's exam format and question
counts (22 per set):

| Section | Questions | Choices |
|---|---|---|
| I. Vocabulary | 10 (5 definitions, 5 in context) | word bank A–J |
| II. Idioms & Phrases | 6 | phrase bank A–H |
| III. Error Picking | 3 | the 4 underlined parts A–D |
| IV. Sentence Combining | 3 | clause bank A–E |

Questions mix the unit's two texts, saved in `sources/english-text/`.
Error-picking questions set `"underline": true`; each option must appear
exactly once in the sentence so the app can underline and label it.
