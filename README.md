# KaoGu

A minimalist, responsive black-and-white study app.

Subjects: Guowen, English Text, English Grammar, Maths, Physics, Chemistry.

Every subject is multiple choice, one question at a time, 20 questions per day.
English Grammar (tenses), English Text (U3L2), Maths (僑先部 期中模擬考) and
Chemistry (僑先部 Ch1–Ch2) have content.

Keyboard: A–D (or 1–4) to answer, Enter for next, Esc to go back.

## Chemistry Tutor

`#/tutor` is a personal AI tutor for 僑先部 化學 (Ch1–Ch2), powered by Claude.
Open **Chemistry Tutor** on the home screen, paste a Claude API key from
console.anthropic.com (saved only in this browser's localStorage and sent only to
Anthropic's API), and ask anything: explain a concept, quiz me one question at a
time, or check my working. The chat is kept in the browser until **New chat**.

- After answering a Chemistry question, **Ask the tutor about this question**
  sends the question, your answer, the key and explanation to the tutor.
- The results screen has **Go over mistakes with the tutor** for the whole set.
- Settings picks the model: Claude Opus 5.5 (default), Sonnet 5.5 or Haiku 5.5.

The system prompt is `prompts/tutor.md` plus §2, §4 and §5 of
`prompts/chemistry.md` (topic map, answer-key conventions, reference data), so
the tutor follows the same conventions as the daily sets. After editing either
file, run `node scripts/build-tutor-prompt.js` to regenerate
`tutor/chemistry-prompt.js`. The Anthropic TypeScript SDK is vendored as a
browser bundle in `vendor/anthropic/`.

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

## Weekly generation

Questions are generated in bulk once a week and loaded one day at a time. A
scheduled Claude run every Sunday evening (Taiwan time) follows
`prompts/weekly-routine.md`: `node scripts/missing-days.js` lists what is
missing from that day through the next Sunday (a set per day for Chemistry,
English Grammar and English Text; one Maths mock paper per week, dated Monday),
each set is added with `node scripts/add-day.js <subject> <date> <questions.json>`
(which validates), and the week is pushed in one commit.

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

## Maths

`data/maths/<date>.js` is a mock paper in the 僑先部 數學（第二、三類組）期中模擬考
format (`sources/maths/midterm-mock-format.md`): 15 單選 + 4 多選 + 5 選填 =
24 questions, scored 60 / 20 / 20 (all-or-nothing per question).

- `type: "single_choice"` — options `"1"`–`"5"`, `answer` is one key.
- `type: "multi_choice"` — `answer` is an array of keys; select, then Check.
- `type: "fill_slots"` — `slots: [{ "n": 20, "v": "-" }, …]`, one digit or minus
  per slot, shown as `\boxed{20}` in the stem; answered with an on-screen keypad.
- `figure` holds an inline SVG for graph-reading questions; `points` gives the
  mock-exam score shown on the results screen.
- Maths is written as `$…$` LaTeX and rendered with KaTeX (vendored in
  `vendor/katex/`, so it works offline). `**word**` renders bold + underlined.
