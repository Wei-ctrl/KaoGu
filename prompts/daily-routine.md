# Daily question routine

A scheduled Claude session runs this every evening (Taiwan time). It writes any
missing daily sets for **today and tomorrow** so the next day's questions are
ready before midnight, then pushes them. If nothing is missing it stops without
committing, so runs cost almost nothing while pre-written sets remain.

The app is multiple choice only. Never change app code (`index.html`, `app.js`,
`styles.css`) in this routine; only add data files.

## Steps

1. Work on branch `claude/keen-feynman-fp236t`:
   `git fetch origin claude/keen-feynman-fp236t && git checkout claude/keen-feynman-fp236t && git pull --ff-only origin claude/keen-feynman-fp236t`
2. `node scripts/missing-days.js` lists `{ subject, date }` pairs still needed.
   If it prints `[]`, stop here: nothing to do.
3. For each missing pair, oldest date first:
   - Read the subject's spec below, and skim the subject's three newest files in
     `data/<subject>/` to match the format exactly and avoid repeating their
     questions (same idea with new numbers or wording is fine for chemistry; see
     rules).
   - Write the set to a scratch file as `{ "questions": [...] }` (English Text
     also has a `"unit"` string).
   - Recompute every answer yourself before saving (arithmetic, grammar, word
     choice). Exactly one option must be correct.
   - Run `node scripts/add-day.js <subject> <date> <file.json>`. It writes the
     data file, adds the date to `data/<subject>/index.js`, and validates. Fix
     anything it reports and run it again until it prints `All sets valid.`
4. Commit only `data/`: `git add data && git commit -m "Add daily sets for <dates>"`
   (list subjects and dates in the body), then
   `git push origin claude/keen-feynman-fp236t`. If the push is rejected,
   `git pull --rebase origin claude/keen-feynman-fp236t` and push again.

## Shared question format

Every question object has: `id` (unique across all days, e.g.
`gen-2026-10-06-01`), `chapter`, `topic`, `type` (`single_choice` or
`count_choice`), `difficulty` (1–3), `chain_id` (or null), `given` (or null),
`stem`, `options` (`{"A": …, "B": …}`), `blanks` (null), `answer` (a letter),
`explanation`, `key_terms` (array), `trap_tags` (array).

- English blanks are written `___`. For two or more blanks, each option joins
  its parts with ` … ` (space, ellipsis, space), one part per blank.
- `given` is shown above the question: 原子量 lines for chemistry, section
  instructions for English Text.

## Chemistry (`chemistry`, 20 per day)

Follow `prompts/chemistry.md` (the question-engine prompt) for style, answer-key
conventions, distractors and self-checks, with these fixed settings:

- Types: only `single_choice` and `count_choice`, options exactly A–D.
- Mix per day: 3 × Ch1-元素符號, 3 × Ch1-物質的分類, 3 × Ch1-化合物,
  3 × Ch2-1 原子量和分子量, 4 × Ch2-2 莫耳, 4 × Ch2-3 化學式, in that order.
  At most one 承上題 pair per day; keep the pair adjacent.
- Correct answers: exactly 5 each of A, B, C, D, with no letter used more
  than twice in a row. Keep ascending order for numeric options; if an
  explanation names options by letter, don't reorder them afterwards.
- Never reuse a stem from any earlier day (the validator rejects exact
  repeats). Vary substances and numbers.

## English Grammar (`english-grammar`, 20 per day)

Tense practice, one blank sentence per question, options exactly A–D. Use these
`chapter` names and counts each day, in this order:

| chapter | count |
|---|---|
| Present simple | 2 |
| Present continuous | 2 |
| State verbs | 1 |
| Past simple | 2 |
| Past continuous | 2 |
| Present perfect | 2 |
| Present perfect vs past simple | 1 |
| Present perfect continuous | 1 |
| Past perfect | 1 |
| Past perfect continuous | 1 |
| Future: will / going to | 2 |
| Future continuous / future perfect | 1 |
| Time clauses & conditionals | 1 |
| Used to | 1 |

- `topic` is `"Tenses"`, `type` `single_choice`, `difficulty` 1.
- Each sentence must have exactly one correct answer in standard English. Add
  time words or context (yesterday, since, right now, by next June…) so no
  second option could also be right, including American usage
  (e.g. avoid "Did you ever…" vs "Have you ever…" traps).
- Explanation: one sentence naming the tense and the clue.
- Correct answers: exactly 5 each of A–D, shuffled, never the same letter
  twice in a row.

## English Text (`english-text`, 22 per day)

Source texts live in `sources/english-text/`. Use the **newest** file there
(highest unit number or most recently added); it contains the unit's reading
texts and a model exam. Mix all of that unit's texts in every section. Match
the model exam's sections and question counts exactly (for U3L2: 22 questions):

| chapter | count | options |
|---|---|---|
| I. Vocabulary | 10: 5 definitions (no blank) then 5 context sentences with `___` | one shared 10-word bank A–J, each word the answer exactly once |
| II. Idioms & Phrases | 6 context sentences with `___` | one shared 8-phrase bank A–H (6 answers, 2 distractors) |
| III. Error Picking | 3 sentences based on the texts, each with one grammar error | the 4 marked parts A–D; set `"underline": true` |
| IV. Sentence Combining | 3 sentences with `___` | one shared 5-clause bank A–E (3 answers, 2 distractors) |

- `given` holds the section instruction: "Choose the correct word for the
  definition or context." / "Choose the BEST answer for the context." /
  "Choose the incorrect part." / "Choose one to make the sentence complete."
- `topic` is the unit title; add `"unit"` at the top level of the JSON.
- Vocabulary and phrases must come from the texts, and each explanation quotes
  where it appears. Pick a different selection from recent days where the
  texts allow it; write new context sentences every day.
- Error picking: each option's text must appear exactly once in the sentence.
- Every blank must accept only one bank item.
