# KaoGu

A minimalist, responsive black-and-white study app.

Subjects: Guowen, English Text, English Grammar, Maths, Physics, Chemistry.

Every subject is multiple choice, one question at a time, 20 questions per day.
English Grammar (tenses) and Chemistry (僑先部 Ch1–Ch2) have content.

## Adding questions

Each subject's questions live in `data/<subject-id>.js`:

```js
{
  q: "She ___ to school every day.",          // ___ marks each blank
  options: ["goes", "is going", "went", "has gone"],
  answer: 0,                                   // index of the correct option
  explain: "Present simple for habits and routines."
}
```

For two blanks, join the parts of each option with ` … `
(e.g. `"drinks … is drinking"`). Load new data files in `index.html`
before `app.js`.

Keyboard: A–D (or 1–4) to answer, Enter for next, Esc to go back.

## Run

No build step. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Daily sets (Chemistry)

Chemistry gets a new set of 20 questions each day:

- `prompts/chemistry.md` — the question-engine prompt used to write each set.
- `data/chemistry/<YYYY-MM-DD>.js` — one day's 20 questions, in the prompt's §7 JSON format.
- `data/chemistry/index.js` — the list of available dates. The app opens the newest
  set dated today or earlier. Days change at midnight Taiwan time (UTC+8).

Sets currently run from 2026-09-28 to 2026-10-05. After the last date the app
keeps showing the newest set (labelled "Latest set") until more are added.

To add a day: write `data/chemistry/<date>.js` (copy an existing file's first two
lines, then paste the generated `{ "questions": [...] }`), add the date to
`index.js`, and run:

```sh
node scripts/check-daily.js chemistry
```

It checks each set has 20 questions with options A–D, a valid answer, an
explanation, no repeated ids or question stems across days, and no answer
letter over 40%.
