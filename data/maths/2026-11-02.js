// maths daily set for 2026-11-02. See prompts/weekly-routine.md.
(window.KAOGU_DAILY = window.KAOGU_DAILY || {})["maths"] = window.KAOGU_DAILY["maths"] || {};
window.KAOGU_DAILY["maths"]["2026-11-02"] = {
  "exam": "僑先部 數學（第二、三類組）期中模擬考 · Mock (114 format)",
  "questions": [
    {
      "id": "math-2026-11-02-01",
      "chapter": "一、單選題",
      "number": "<1.>",
      "topic": "Natural domain",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $f(x)=\\dfrac{2x-3}{\\sqrt{(5-x)(x+1)}}$. Find the natural domain(自然定義域) of $f(x)$.",
      "options": {
        "1": "$[-1,5]$",
        "2": "$(-\\infty,-1)\\cup(5,\\infty)$",
        "3": "$(-1,5)$",
        "4": "$(-5,1)$",
        "5": "$(-\\infty,-1]\\cup[5,\\infty)$"
      },
      "blanks": null,
      "answer": "3",
      "explanation": "The square root is in the denominator, so $(5-x)(x+1)>0$ strictly. The product is positive between the roots: $-1<x<5$. (Brackets would allow a zero denominator.)",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-02-02",
      "chapter": "一、單選題",
      "number": "<2.>",
      "topic": "Piecewise function",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $f(x)=\\begin{cases}\\sqrt{(2x-9)^2}, & \\text{if } x\\ge 1\\\\ 3x+7, & \\text{if } x<1\\end{cases}$. Find $f(3)=$",
      "options": {
        "1": "$-3$",
        "2": "$3$",
        "3": "$9$",
        "4": "$15$",
        "5": "$16$"
      },
      "blanks": null,
      "answer": "2",
      "explanation": "$3\\ge 1$, so $f(3)=\\sqrt{(6-9)^2}=|-3|=3$. A square root is never negative, so $-3$ is wrong; $16$ uses the other piece.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-02-03",
      "chapter": "一、單選題",
      "number": "<3.>",
      "topic": "Composite function",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $f(x)=4x+3$ and $g(x)=x^2-3x+2$. Find $(f\\circ g)(-1)=$",
      "options": {
        "1": "$-1$",
        "2": "$6$",
        "3": "$15$",
        "4": "$27$",
        "5": "$31$"
      },
      "blanks": null,
      "answer": "4",
      "explanation": "$g(-1)=1+3+2=6$, then $f(6)=24+3=27$. ($6$ is $(g\\circ f)(-1)$.)",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-02-04",
      "chapter": "一、單選題",
      "number": "<4.>",
      "topic": "Slope",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Find the slope(斜率) of the line that passes through $(-3,-4)$ and $(5,2)$.",
      "options": {
        "1": "$\\frac{3}{4}$",
        "2": "$\\frac{-3}{4}$",
        "3": "$\\frac{4}{3}$",
        "4": "$\\frac{-4}{3}$",
        "5": "$\\frac{1}{4}$"
      },
      "blanks": null,
      "answer": "1",
      "explanation": "$m=\\dfrac{2-(-4)}{5-(-3)}=\\dfrac{6}{8}=\\dfrac{3}{4}$. ($\\frac{4}{3}$ is run over rise.)",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-02-05",
      "chapter": "一、單選題",
      "number": "<5.>",
      "topic": "Exact trig value",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Find the value of $\\csc\\dfrac{4\\pi}{3}=$",
      "options": {
        "1": "$\\frac{2}{\\sqrt{3}}$",
        "2": "$\\frac{-2}{\\sqrt{3}}$",
        "3": "$-2$",
        "4": "$2$",
        "5": "$\\frac{-\\sqrt{3}}{2}$"
      },
      "blanks": null,
      "answer": "2",
      "explanation": "$\\frac{4\\pi}{3}$ is in the 3rd quadrant with reference angle $\\frac{\\pi}{3}$, so $\\sin\\frac{4\\pi}{3}=\\frac{-\\sqrt{3}}{2}$ and $\\csc\\frac{4\\pi}{3}=\\frac{1}{\\sin}=\\frac{-2}{\\sqrt{3}}$. ($\\frac{-\\sqrt{3}}{2}$ is the sine itself.)",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-02-06",
      "chapter": "一、單選題",
      "number": "<6.>",
      "topic": "Line equation",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which one of the following options is the equation for the line that passes through the point $(-3,2)$ and has slope $\\frac{-2}{5}$?",
      "options": {
        "1": "$y=\\frac{-2}{5}x+\\frac{16}{5}$",
        "2": "$y=\\frac{2}{5}x+\\frac{16}{5}$",
        "3": "$y=\\frac{-5}{2}x-\\frac{11}{2}$",
        "4": "$y=\\frac{-2}{5}x-\\frac{4}{5}$",
        "5": "$y=\\frac{-2}{5}x+\\frac{4}{5}$"
      },
      "blanks": null,
      "answer": "5",
      "explanation": "$y-2=\\frac{-2}{5}(x+3)\\Rightarrow y=\\frac{-2}{5}x-\\frac{6}{5}+2=\\frac{-2}{5}x+\\frac{4}{5}$. ($\\frac{16}{5}$ comes from using $(x-3)$.)",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-02-07",
      "chapter": "一、單選題",
      "number": "<7.>",
      "topic": "Limit by substitution",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Evaluate $\\displaystyle\\lim_{x\\to 3}\\left(\\sqrt{x^2+16}+(2x-9)+\\frac{x-1}{x+2}\\right)=$",
      "options": {
        "1": "$\\frac{2}{5}$",
        "2": "$\\frac{7}{5}$",
        "3": "$\\frac{12}{5}$",
        "4": "$\\frac{17}{5}$",
        "5": "$\\frac{27}{5}$"
      },
      "blanks": null,
      "answer": "3",
      "explanation": "Each part is continuous at $3$: $\\sqrt{25}+(6-9)+\\frac{2}{5}=5-3+\\frac{2}{5}=\\frac{12}{5}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-02-08",
      "chapter": "一、單選題",
      "number": "<8.>",
      "topic": "0/0 limit",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Evaluate $\\displaystyle\\lim_{x\\to 2}\\frac{x^{-2}-\\frac{1}{4}}{x-2}=$",
      "options": {
        "1": "$\\frac{1}{2}$",
        "2": "$\\frac{1}{4}$",
        "3": "$0$",
        "4": "$\\frac{-1}{4}$",
        "5": "$\\frac{-1}{2}$"
      },
      "blanks": null,
      "answer": "4",
      "explanation": "$\\dfrac{\\frac{1}{x^2}-\\frac{1}{4}}{x-2}=\\dfrac{4-x^2}{4x^2(x-2)}=\\dfrac{-(x+2)}{4x^2}\\to\\dfrac{-4}{16}=\\dfrac{-1}{4}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-02-09",
      "chapter": "一、單選題",
      "number": "<9.>",
      "topic": "0/0 limit with nested radicals",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Evaluate $\\displaystyle\\lim_{x\\to 4}\\frac{\\sqrt{7+\\sqrt{x}}-3}{x-4}=$",
      "options": {
        "1": "$\\frac{1}{24}$",
        "2": "$\\frac{1}{12}$",
        "3": "$\\frac{1}{8}$",
        "4": "$\\frac{1}{6}$",
        "5": "$\\frac{1}{4}$"
      },
      "blanks": null,
      "answer": "1",
      "explanation": "Let $u=\\sqrt{7+\\sqrt{x}}\\to 3$. $u^2-9=\\sqrt{x}-2=\\dfrac{x-4}{\\sqrt{x}+2}$, so $\\dfrac{u-3}{x-4}=\\dfrac{1}{(u+3)(\\sqrt{x}+2)}\\to\\dfrac{1}{6\\cdot 4}=\\dfrac{1}{24}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-02-10",
      "chapter": "一、單選題",
      "number": "<10.>",
      "topic": "Odd / even function",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which one of the following options is an **even function**?",
      "options": {
        "1": "$f(x)=x^3-x$",
        "2": "$f(x)=x\\sin x$",
        "3": "$f(x)=x+\\cos x$",
        "4": "$f(x)=x^2+x$",
        "5": "$f(x)=\\tan x$"
      },
      "blanks": null,
      "answer": "2",
      "explanation": "Even means $f(-x)=f(x)$: $(-x)\\sin(-x)=(-x)(-\\sin x)=x\\sin x$. $x^3-x$ and $\\tan x$ are odd; $x+\\cos x$ and $x^2+x$ are neither.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-02-11",
      "chapter": "一、單選題",
      "number": "<11.>",
      "topic": "Greatest integer limit",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Evaluate $\\displaystyle\\lim_{x\\to 2^-}\\frac{[\\![x+4]\\!](x^2-2x)}{x^2+3x-10}=$ ($[\\![\\cdot]\\!]$ is the greatest integer function.)",
      "options": {
        "1": "$0$",
        "2": "$\\frac{2}{7}$",
        "3": "$\\frac{10}{7}$",
        "4": "$\\frac{12}{7}$",
        "5": "$\\frac{-10}{7}$"
      },
      "blanks": null,
      "answer": "3",
      "explanation": "For $x\\to 2^-$, $x+4\\to 6^-$ so $[\\![x+4]\\!]=5$. $\\dfrac{x(x-2)}{(x+5)(x-2)}=\\dfrac{x}{x+5}\\to\\dfrac{2}{7}$. Product: $\\dfrac{10}{7}$. ($\\frac{12}{7}$ uses $6$.)",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-02-12",
      "chapter": "一、單選題",
      "number": "<12.>",
      "topic": "Continuity",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which one of the following options is continuous(連續) at $x=0$? ($[\\![\\cdot]\\!]$ is the greatest integer function.)",
      "options": {
        "1": "$f(x)=\\dfrac{1}{x^2}$",
        "2": "$f(x)=\\sqrt{x-2}$",
        "3": "$f(x)=[\\![x]\\!]$",
        "4": "$f(x)=\\begin{cases}\\dfrac{\\sin x}{x}, & x\\ne 0\\\\ 0, & x=0\\end{cases}$",
        "5": "$f(x)=\\begin{cases}x^2\\sin\\dfrac{1}{x}, & x\\ne 0\\\\ 0, & x=0\\end{cases}$"
      },
      "blanks": null,
      "answer": "5",
      "explanation": "(5): $|x^2\\sin\\frac{1}{x}|\\le x^2\\to 0=f(0)$ (squeeze). (1), (2) are undefined at $0$; $[\\![x]\\!]$ jumps at $0$; in (4) $\\frac{\\sin x}{x}\\to 1\\ne f(0)=0$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-02-13",
      "chapter": "一、單選題",
      "number": "<13.>",
      "topic": "Continuity with trig limits",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $f(x)=\\begin{cases}\\dfrac{(\\sin ax)(\\tan bx)}{2x^2}, & \\text{if } x\\ne 0\\\\[4pt] \\dfrac{5}{2}, & \\text{if } x=0\\end{cases}$ is continuous(連續) on $(-\\infty,\\infty)$. Find $(ab)^2=$",
      "options": {
        "1": "$25$",
        "2": "$5$",
        "3": "$10$",
        "4": "$100$",
        "5": "$\\frac{25}{4}$"
      },
      "blanks": null,
      "answer": "1",
      "explanation": "$\\dfrac{\\sin ax}{x}\\to a$, $\\dfrac{\\tan bx}{x}\\to b$, so the limit is $\\dfrac{ab}{2}$. Continuity: $\\dfrac{ab}{2}=\\dfrac{5}{2}\\Rightarrow ab=5$, $(ab)^2=25$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-02-14",
      "chapter": "一、單選題",
      "number": "<14.>",
      "topic": "Limit at infinity",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Evaluate $\\displaystyle\\lim_{x\\to\\infty}\\frac{(x+3)\\sqrt{16x^2-1}}{(2x+1)(3x-2)}=$",
      "options": {
        "1": "$0$",
        "2": "$\\frac{1}{3}$",
        "3": "$\\frac{4}{3}$",
        "4": "$\\frac{8}{3}$",
        "5": "$\\frac{2}{3}$"
      },
      "blanks": null,
      "answer": "5",
      "explanation": "For large $x$, $\\sqrt{16x^2-1}\\approx 4x$: top $\\approx 4x^2$, bottom $\\approx 6x^2$, so the limit is $\\frac{4}{6}=\\frac{2}{3}$. ($\\frac{8}{3}$ forgets the square root.)",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-02-15",
      "chapter": "一、單選題",
      "number": "<15.>",
      "topic": "Asymptotes",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $f(x)=\\dfrac{x^2+x-2}{x^2-4}$. Which one of the following options is **incorrect**?",
      "options": {
        "1": "$x=2$ is a vertical(垂直的) asymptote(漸近線) of the graph of $f$.",
        "2": "$y=1$ is a horizontal(水平的) asymptote(漸近線) of the graph of $f$.",
        "3": "$f(1)=0$",
        "4": "$x=-2$ is a vertical(垂直的) asymptote(漸近線) of the graph of $f$.",
        "5": "$\\displaystyle\\lim_{x\\to -2}f(x)=\\frac{3}{4}$"
      },
      "blanks": null,
      "answer": "4",
      "explanation": "$f(x)=\\dfrac{(x+2)(x-1)}{(x+2)(x-2)}=\\dfrac{x-1}{x-2}$ for $x\\ne-2$: $x+2$ cancels, so $x=-2$ is a hole (the limit there is $\\frac{3}{4}$), not an asymptote. Only $x=2$ is a vertical asymptote.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-02-16",
      "chapter": "二、多選題",
      "number": "<16.>",
      "topic": "Graph reading",
      "type": "multi_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "For the function $f$ whose graph is as Figure A, which of the following options is/are **correct**?",
      "options": {
        "1": "$\\displaystyle\\lim_{x\\to 0}f(x)=2$",
        "2": "$f$ is continuous at $x=0$.",
        "3": "$\\displaystyle\\lim_{x\\to 2}f(x)$ exists.",
        "4": "$f$ is left-continuous at $x=2$.",
        "5": "$\\displaystyle\\lim_{x\\to 3^-}f(x)=1$"
      },
      "blanks": null,
      "answer": [
        "1",
        "4",
        "5"
      ],
      "explanation": "(1) Both sides approach the open circle $(0,2)$, so the limit is $2$. (2) ✗ $f(0)=1\\ne 2$ (removable discontinuity). (3) ✗ from the left $f\\to 0$, from the right $f\\to 2$. (4) $\\lim_{x\\to2^-}f(x)=0=f(2)$. (5) The last segment ends at the filled dot $(3,1)$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5,
      "figure": "<svg viewBox=\"0 0 380 219\" role=\"img\" aria-label=\"Figure A: a line rises from a filled dot at (-2,0) to an open circle at (0,2); a filled dot at (0,1); a curve falls from the open circle at (0,2) to a filled dot at (2,0); a line falls from an open circle at (2,2) to a filled dot at (3,1).\"><line class=\"grid\" x1=\"58\" y1=\"16\" x2=\"58\" y2=\"203\"/><line class=\"grid\" x1=\"112\" y1=\"16\" x2=\"112\" y2=\"203\"/><line class=\"grid\" x1=\"168\" y1=\"16\" x2=\"168\" y2=\"203\"/><line class=\"grid\" x1=\"222\" y1=\"16\" x2=\"222\" y2=\"203\"/><line class=\"grid\" x1=\"278\" y1=\"16\" x2=\"278\" y2=\"203\"/><line class=\"grid\" x1=\"332\" y1=\"16\" x2=\"332\" y2=\"203\"/><line class=\"grid\" x1=\"30\" y1=\"170\" x2=\"360\" y2=\"170\"/><line class=\"grid\" x1=\"30\" y1=\"115\" x2=\"360\" y2=\"115\"/><line class=\"grid\" x1=\"30\" y1=\"60\" x2=\"360\" y2=\"60\"/><line class=\"axis\" x1=\"30\" y1=\"170\" x2=\"360\" y2=\"170\"/><line class=\"axis\" x1=\"168\" y1=\"16\" x2=\"168\" y2=\"203\"/><text x=\"58\" y=\"186\" text-anchor=\"middle\">-2</text><text x=\"112\" y=\"186\" text-anchor=\"middle\">-1</text><text x=\"222\" y=\"186\" text-anchor=\"middle\">1</text><text x=\"278\" y=\"186\" text-anchor=\"middle\">2</text><text x=\"332\" y=\"186\" text-anchor=\"middle\">3</text><text x=\"160\" y=\"119\" text-anchor=\"end\">1</text><text x=\"160\" y=\"64\" text-anchor=\"end\">2</text><path class=\"curve\" d=\"M57.5,170.0 L60.2,167.2 L63.0,164.5 L65.8,161.8 L68.5,159.0 L71.2,156.2 L74.0,153.5 L76.8,150.8 L79.5,148.0 L82.2,145.2 L85.0,142.5 L87.8,139.8 L90.5,137.0 L93.2,134.2 L96.0,131.5 L98.8,128.8 L101.5,126.0 L104.2,123.2 L107.0,120.5 L109.8,117.8 L112.5,115.0 L115.2,112.2 L118.0,109.5 L120.8,106.8 L123.5,104.0 L126.2,101.2 L129.0,98.5 L131.8,95.8 L134.5,93.0 L137.2,90.2 L140.0,87.5 L142.8,84.8 L145.5,82.0 L148.2,79.2 L151.0,76.5 L153.8,73.8 L156.5,71.0 L159.2,68.2 L162.0,65.5 L164.8,62.7 L167.5,60.0\"/><path class=\"curve\" d=\"M167.5,60.0 L170.2,60.1 L173.0,60.3 L175.8,60.6 L178.5,61.1 L181.2,61.7 L184.0,62.5 L186.8,63.4 L189.5,64.4 L192.2,65.6 L195.0,66.9 L197.8,68.3 L200.5,69.9 L203.2,71.6 L206.0,73.5 L208.8,75.5 L211.5,77.6 L214.2,79.9 L217.0,82.3 L219.8,84.8 L222.5,87.5 L225.2,90.3 L228.0,93.3 L230.8,96.4 L233.5,99.6 L236.2,103.0 L239.0,106.5 L241.8,110.1 L244.5,113.9 L247.2,117.8 L250.0,121.9 L252.8,126.1 L255.5,130.4 L258.2,134.9 L261.0,139.5 L263.8,144.2 L266.5,149.1 L269.2,154.1 L272.0,159.3 L274.8,164.6 L277.5,170.0\"/><path class=\"curve\" d=\"M277.5,60.0 L280.2,62.7 L283.0,65.5 L285.8,68.2 L288.5,71.0 L291.2,73.8 L294.0,76.5 L296.8,79.2 L299.5,82.0 L302.2,84.8 L305.0,87.5 L307.8,90.2 L310.5,93.0 L313.2,95.8 L316.0,98.5 L318.8,101.2 L321.5,104.0 L324.2,106.8 L327.0,109.5 L329.8,112.2 L332.5,115.0\"/><circle class=\"dot\" cx=\"57.5\" cy=\"170.0\" r=\"5\"/><circle class=\"dot\" cx=\"167.5\" cy=\"115.0\" r=\"5\"/><circle class=\"dot\" cx=\"277.5\" cy=\"170.0\" r=\"5\"/><circle class=\"dot\" cx=\"332.5\" cy=\"115.0\" r=\"5\"/><circle class=\"open\" cx=\"167.5\" cy=\"60.0\" r=\"5\"/><circle class=\"open\" cx=\"277.5\" cy=\"60.0\" r=\"5\"/><text x=\"356\" y=\"213\" text-anchor=\"end\">Figure A</text></svg>"
    },
    {
      "id": "math-2026-11-02-17",
      "chapter": "二、多選題",
      "number": "<17.>",
      "topic": "Rational function",
      "type": "multi_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $f(x)=\\dfrac{2x^3}{x^2-x-6}$. Which of the following options is/are **correct**?",
      "options": {
        "1": "$\\displaystyle\\lim_{x\\to -\\infty}f(x)=\\infty$",
        "2": "$\\displaystyle\\lim_{x\\to 3^+}f(x)=\\infty$",
        "3": "$y=2x+2$ is the oblique(傾斜的) asymptote of the graph of $f(x)$.",
        "4": "$y=2x-2$ is the oblique(傾斜的) asymptote of the graph of $f(x)$.",
        "5": "$x=-2$ is a vertical(垂直的) asymptote of the graph of $f(x)$."
      },
      "blanks": null,
      "answer": [
        "2",
        "3",
        "5"
      ],
      "explanation": "Division: $2x^3=(x^2-x-6)(2x+2)+(14x+12)$, so the oblique asymptote is $y=2x+2$. (1) ✗ $f\\approx 2x\\to-\\infty$. (2) near $3^+$ the top is $54>0$ and $(x-3)(x+2)\\to 0^+$, so $f\\to\\infty$. (5) $x^2-x-6=(x-3)(x+2)$ and the top is not $0$ at $-2$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5
    },
    {
      "id": "math-2026-11-02-18",
      "chapter": "二、多選題",
      "number": "<18.>",
      "topic": "Continuity theory + IVT",
      "type": "multi_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which of the following options is/are **correct**? ($[\\![\\cdot]\\!]$ is the greatest integer function.)",
      "options": {
        "1": "If $f$ is continuous at $x=a$, then $\\displaystyle\\lim_{x\\to a}f(x)$ exists.",
        "2": "If $\\displaystyle\\lim_{x\\to a^-}f(x)=f(a)$, then $f$ is continuous at $x=a$.",
        "3": "If $f$ and $g$ are both continuous at $x=1$, then $f\\cdot g$ is continuous at $x=1$.",
        "4": "$f(x)=[\\![x]\\!]$ is continuous at $x=\\frac{3}{2}$.",
        "5": "There is a root of the equation $x^3+x-5=0$ between $1$ and $2$."
      },
      "blanks": null,
      "answer": [
        "1",
        "3",
        "4",
        "5"
      ],
      "explanation": "(2) ✗ a matching left-hand limit only gives left-continuity; the right-hand limit may differ. (4) $[\\![x]\\!]=1$ for all $x$ near $\\frac{3}{2}$. (5) $f(1)=-3<0<5=f(2)$ and polynomials are continuous, so the IVT gives a root.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5
    },
    {
      "id": "math-2026-11-02-19",
      "chapter": "二、多選題",
      "number": "<19.>",
      "topic": "Trig / abs / greatest integer limits",
      "type": "multi_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which of the following options is/are **correct**? ($[\\![\\cdot]\\!]$ is the greatest integer function.)",
      "options": {
        "1": "$\\displaystyle\\lim_{x\\to\\infty}x\\sin\\frac{1}{x}=1$",
        "2": "$\\displaystyle\\lim_{x\\to 0}\\frac{\\sin 4x}{3x}=\\frac{3}{4}$",
        "3": "$\\displaystyle\\lim_{x\\to 0^-}\\frac{|x|}{x}=-1$",
        "4": "$\\displaystyle\\lim_{x\\to 2^+}[\\![x]\\!]=1$",
        "5": "$\\displaystyle\\lim_{x\\to 0}x^2\\cos\\frac{1}{x}=0$"
      },
      "blanks": null,
      "answer": [
        "1",
        "3",
        "5"
      ],
      "explanation": "(1) Let $t=\\frac{1}{x}\\to 0^+$: $\\frac{\\sin t}{t}\\to 1$. (2) ✗ the limit is $\\frac{4}{3}$. (3) for $x<0$, $|x|=-x$. (4) ✗ $[\\![x]\\!]=2$ on $[2,3)$. (5) $|x^2\\cos\\frac{1}{x}|\\le x^2\\to 0$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5
    },
    {
      "id": "math-2026-11-02-20",
      "chapter": "三、選填題",
      "number": "A",
      "topic": "Limit laws",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題均以最簡單分數作答，請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $\\displaystyle\\lim_{x\\to 1}f(x)=-2$、$\\displaystyle\\lim_{x\\to 1}g(x)=3$ and $\\displaystyle\\lim_{x\\to 1}h(x)=5$, then $\\displaystyle\\lim_{x\\to 1}\\left(\\frac{g^2(x)-h(x)}{2f(x)-h(x)}\\right)=\\dfrac{\\boxed{20}\\boxed{21}}{\\boxed{22}}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "$\\dfrac{9-5}{-4-5}=\\dfrac{4}{-9}=\\dfrac{-4}{9}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "slots": [
        {
          "n": 20,
          "v": "-"
        },
        {
          "n": 21,
          "v": "4"
        },
        {
          "n": 22,
          "v": "9"
        }
      ]
    },
    {
      "id": "math-2026-11-02-21",
      "chapter": "三、選填題",
      "number": "B",
      "topic": "Trig value from quadrant",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題均以最簡單分數作答，請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $\\tan x=\\frac{-7}{24}$, for $\\frac{3\\pi}{2}<x<2\\pi$. Find $\\cos x=\\dfrac{\\boxed{23}\\boxed{24}}{\\boxed{25}\\boxed{26}}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "Right triangle $7$, $24$, hypotenuse $25$. In the 4th quadrant cosine is positive (only sine is negative): $\\cos x=\\dfrac{24}{25}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "slots": [
        {
          "n": 23,
          "v": "2"
        },
        {
          "n": 24,
          "v": "4"
        },
        {
          "n": 25,
          "v": "2"
        },
        {
          "n": 26,
          "v": "5"
        }
      ]
    },
    {
      "id": "math-2026-11-02-22",
      "chapter": "三、選填題",
      "number": "C",
      "topic": "Piecewise continuity",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題均以最簡單分數作答，請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $f(x)=\\begin{cases}x-4, & \\text{if } x\\le -3\\\\ x^2+ax+b, & \\text{if } -3<x<1\\\\ 9, & \\text{if } x\\ge 1\\end{cases}$ is continuous on $(-\\infty,\\infty)$, then $2a+b=\\boxed{27}\\boxed{28}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "At $x=-3$: $9-3a+b=-7$. At $x=1$: $1+a+b=9$. So $b-3a=-16$ and $a+b=8$, giving $a=6$, $b=2$, and $2a+b=14$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "slots": [
        {
          "n": 27,
          "v": "1"
        },
        {
          "n": 28,
          "v": "4"
        }
      ]
    },
    {
      "id": "math-2026-11-02-23",
      "chapter": "三、選填題",
      "number": "D",
      "topic": "Trig limit",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題均以最簡單分數作答，請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $f(x)=\\begin{cases}\\dfrac{1-\\cos 6x}{5x^2}, & \\text{if } x\\ne 0\\\\[4pt] \\dfrac{6}{5}, & \\text{if } x=0\\end{cases}$, then $\\displaystyle\\lim_{x\\to 0}f(x)=\\dfrac{\\boxed{29}\\boxed{30}}{\\boxed{31}}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "$\\dfrac{1-\\cos 6x}{x^2}\\to\\dfrac{36}{2}=18$; divide by $5$: $\\dfrac{18}{5}$. The value $f(0)=\\frac{6}{5}$ does not affect the limit.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "slots": [
        {
          "n": 29,
          "v": "1"
        },
        {
          "n": 30,
          "v": "8"
        },
        {
          "n": 31,
          "v": "5"
        }
      ]
    },
    {
      "id": "math-2026-11-02-24",
      "chapter": "三、選填題",
      "number": "E",
      "topic": "Removable discontinuity",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題均以最簡單分數作答，請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $f(x)=\\begin{cases}\\dfrac{2x^2+ax-3}{x+1}, & \\text{if } x\\ne -1\\\\[4pt] b, & \\text{if } x=-1\\end{cases}$. If $f(x)$ is continuous at $x=-1$, then $a+3b=\\boxed{32}\\boxed{33}\\boxed{34}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "The numerator must be $0$ at $-1$: $2-a-3=0\\Rightarrow a=-1$. Then $\\dfrac{(2x-3)(x+1)}{x+1}=2x-3\\to -5=b$. $a+3b=-1-15=-16$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "slots": [
        {
          "n": 32,
          "v": "-"
        },
        {
          "n": 33,
          "v": "1"
        },
        {
          "n": 34,
          "v": "6"
        }
      ]
    }
  ]
};
