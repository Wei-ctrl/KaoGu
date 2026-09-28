# KaoGu

A minimalist, responsive black-and-white study app.

Subjects: Guowen, English Text, English Grammar, Maths, Physics, Chemistry.

Every subject is multiple choice, one question at a time, 20 questions per day.
English Grammar (tenses) is the first subject with content.

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
