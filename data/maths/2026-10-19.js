// maths daily set for 2026-10-19. See prompts/weekly-routine.md.
(window.KAOGU_DAILY = window.KAOGU_DAILY || {})["maths"] = window.KAOGU_DAILY["maths"] || {};
window.KAOGU_DAILY["maths"]["2026-10-19"] = {
  "exam": "僑先部 數學（第二、三類組）期中模擬考 · Mock (114 format)",
  "questions": [
    {
      "id": "math-2026-10-19-01",
      "chapter": "一、單選題",
      "number": "<1.>",
      "topic": "Natural domain",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $f(x)=\\dfrac{x+4}{\\sqrt{(x+3)(x-2)}}$. Find the natural domain(自然定義域) of $f(x)$.",
      "options": {
        "1": "$(-\\infty,-3]\\cup[2,\\infty)$",
        "2": "$(-\\infty,-3)\\cup(2,\\infty)$",
        "3": "$(-3,2)$",
        "4": "$[-3,2]$",
        "5": "$(-\\infty,-2)\\cup(3,\\infty)$"
      },
      "blanks": null,
      "answer": "2",
      "explanation": "The square root is in the denominator, so $(x+3)(x-2)>0$ strictly: outside the roots, $x<-3$ or $x>2$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-19-02",
      "chapter": "一、單選題",
      "number": "<2.>",
      "topic": "Piecewise function",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $f(x)=\\begin{cases}\\sqrt{(3x-7)^2}, & \\text{if } x\\ge 1\\\\ 2x+5, & \\text{if } x<1\\end{cases}$. Find $f(2)=$",
      "options": {
        "1": "$-1$",
        "2": "$1$",
        "3": "$3$",
        "4": "$9$",
        "5": "$13$"
      },
      "blanks": null,
      "answer": "2",
      "explanation": "$2\\ge 1$, so $f(2)=\\sqrt{(6-7)^2}=|-1|=1$. ($9$ wrongly uses the other piece.)",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-19-03",
      "chapter": "一、單選題",
      "number": "<3.>",
      "topic": "Composite function",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $f(x)=2x-5$ and $g(x)=x^2+x-1$. Find $(f\\circ g)(2)=$",
      "options": {
        "1": "$-1$",
        "2": "$1$",
        "3": "$5$",
        "4": "$9$",
        "5": "$15$"
      },
      "blanks": null,
      "answer": "3",
      "explanation": "$g(2)=4+2-1=5$, then $f(5)=10-5=5$. ($-1$ is $(g\\circ f)(2)$.)",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-19-04",
      "chapter": "一、單選題",
      "number": "<4.>",
      "topic": "Slope",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Find the slope(斜率) of the line that passes through $(4,-3)$ and $(-2,6)$.",
      "options": {
        "1": "$\\frac{-3}{2}$",
        "2": "$\\frac{3}{2}$",
        "3": "$\\frac{-2}{3}$",
        "4": "$\\frac{2}{3}$",
        "5": "$\\frac{-1}{2}$"
      },
      "blanks": null,
      "answer": "1",
      "explanation": "$m=\\dfrac{6-(-3)}{-2-4}=\\dfrac{9}{-6}=\\dfrac{-3}{2}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-19-05",
      "chapter": "一、單選題",
      "number": "<5.>",
      "topic": "Exact trig value",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Find the value of $\\tan\\dfrac{5\\pi}{6}=$",
      "options": {
        "1": "$\\sqrt{3}$",
        "2": "$-\\sqrt{3}$",
        "3": "$\\frac{1}{\\sqrt{3}}$",
        "4": "$\\frac{-1}{\\sqrt{3}}$",
        "5": "$-1$"
      },
      "blanks": null,
      "answer": "4",
      "explanation": "$\\frac{5\\pi}{6}$ is in the 2nd quadrant with reference angle $\\frac{\\pi}{6}$; tangent is negative there: $-\\tan\\frac{\\pi}{6}=\\frac{-1}{\\sqrt{3}}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-19-06",
      "chapter": "一、單選題",
      "number": "<6.>",
      "topic": "Line equation",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which one of the following options is the equation for the line that passes through the point $(2,-5)$ and has slope $\\frac{3}{4}$?",
      "options": {
        "1": "$y=\\frac{3}{4}x-\\frac{13}{2}$",
        "2": "$y=\\frac{3}{4}x-\\frac{7}{2}$",
        "3": "$y=\\frac{4}{3}x-\\frac{23}{3}$",
        "4": "$y=\\frac{-3}{4}x-\\frac{7}{2}$",
        "5": "$y=\\frac{3}{4}x+\\frac{13}{2}$"
      },
      "blanks": null,
      "answer": "1",
      "explanation": "$y+5=\\frac{3}{4}(x-2)\\Rightarrow y=\\frac{3}{4}x-\\frac{3}{2}-5=\\frac{3}{4}x-\\frac{13}{2}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-19-07",
      "chapter": "一、單選題",
      "number": "<7.>",
      "topic": "Limit by substitution",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Evaluate $\\displaystyle\\lim_{x\\to 2}\\left(\\sqrt{x^2+5}+(3x-4)+\\frac{x+1}{2x+1}\\right)=$",
      "options": {
        "1": "$\\frac{3}{5}$",
        "2": "$\\frac{13}{5}$",
        "3": "$\\frac{23}{5}$",
        "4": "$\\frac{28}{5}$",
        "5": "$\\frac{33}{5}$"
      },
      "blanks": null,
      "answer": "4",
      "explanation": "Each part is continuous at $2$: $\\sqrt{9}+(6-4)+\\frac{3}{5}=3+2+\\frac{3}{5}=\\frac{28}{5}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-19-08",
      "chapter": "一、單選題",
      "number": "<8.>",
      "topic": "0/0 limit",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Evaluate $\\displaystyle\\lim_{x\\to 1}\\frac{x^{-3}-1}{x-1}=$",
      "options": {
        "1": "$3$",
        "2": "$1$",
        "3": "$0$",
        "4": "$-1$",
        "5": "$-3$"
      },
      "blanks": null,
      "answer": "5",
      "explanation": "$\\dfrac{\\frac{1}{x^3}-1}{x-1}=\\dfrac{1-x^3}{x^3(x-1)}=\\dfrac{-(x^2+x+1)}{x^3}\\to\\dfrac{-3}{1}=-3$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-19-09",
      "chapter": "一、單選題",
      "number": "<9.>",
      "topic": "0/0 limit with nested radicals",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Evaluate $\\displaystyle\\lim_{x\\to 9}\\frac{\\sqrt[3]{5+\\sqrt{x}}-2}{x-9}=$",
      "options": {
        "1": "$\\frac{1}{72}$",
        "2": "$\\frac{1}{36}$",
        "3": "$\\frac{1}{24}$",
        "4": "$\\frac{1}{12}$",
        "5": "$\\frac{1}{6}$"
      },
      "blanks": null,
      "answer": "1",
      "explanation": "Let $u=\\sqrt[3]{5+\\sqrt{x}}\\to 2$. $u^3-8=\\sqrt{x}-3=\\dfrac{x-9}{\\sqrt{x}+3}$, so $\\dfrac{u-2}{x-9}=\\dfrac{1}{(u^2+2u+4)(\\sqrt{x}+3)}\\to\\dfrac{1}{12\\cdot 6}=\\dfrac{1}{72}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-19-10",
      "chapter": "一、單選題",
      "number": "<10.>",
      "topic": "Odd / even function",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which one of the following options is an **even function**?",
      "options": {
        "1": "$f(x)=x^3+x$",
        "2": "$f(x)=x^2+2x$",
        "3": "$f(x)=x|x|$",
        "4": "$f(x)=\\cos x+x^2$",
        "5": "$f(x)=\\frac{x+1}{x-1}$"
      },
      "blanks": null,
      "answer": "4",
      "explanation": "Even means $f(-x)=f(x)$: $\\cos(-x)+(-x)^2=\\cos x+x^2$. $x^3+x$ and $x|x|$ are odd; the others are neither.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-19-11",
      "chapter": "一、單選題",
      "number": "<11.>",
      "topic": "Greatest integer limit",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Evaluate $\\displaystyle\\lim_{x\\to 3^-}\\frac{[\\![x+3]\\!](x^2-3x)}{x^2+x-12}=$ ($[\\![\\cdot]\\!]$ is the greatest integer function.)",
      "options": {
        "1": "$0$",
        "2": "$\\frac{3}{7}$",
        "3": "$\\frac{15}{7}$",
        "4": "$\\frac{18}{7}$",
        "5": "$\\frac{-15}{7}$"
      },
      "blanks": null,
      "answer": "3",
      "explanation": "For $x\\to 3^-$, $x+3\\to 6^-$ so $[\\![x+3]\\!]=5$. $\\dfrac{x(x-3)}{(x+4)(x-3)}=\\dfrac{x}{x+4}\\to\\dfrac{3}{7}$. Product: $\\dfrac{15}{7}$. ($\\frac{18}{7}$ uses $6$.)",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-19-12",
      "chapter": "一、單選題",
      "number": "<12.>",
      "topic": "Continuity",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which one of the following options is continuous(連續) at $x=0$? ($[\\![\\cdot]\\!]$ is the greatest integer function.)",
      "options": {
        "1": "$f(x)=\\dfrac{1}{x}$",
        "2": "$f(x)=\\sqrt{x-3}$",
        "3": "$f(x)=[\\![x]\\!]+1$",
        "4": "$f(x)=\\cot x$",
        "5": "$f(x)=\\begin{cases}\\dfrac{1-\\cos x}{x}, & x\\ne 0\\\\ 0, & x=0\\end{cases}$"
      },
      "blanks": null,
      "answer": "5",
      "explanation": "(5): $\\dfrac{1-\\cos x}{x}=\\dfrac{1-\\cos x}{x^2}\\cdot x\\to\\frac{1}{2}\\cdot 0=0=f(0)$. (1), (2), (4) are undefined at $0$; $[\\![x]\\!]+1$ jumps at $0$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-19-13",
      "chapter": "一、單選題",
      "number": "<13.>",
      "topic": "Continuity with trig limits",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $f(x)=\\begin{cases}\\dfrac{(\\sin ax)(\\tan bx)}{4x^2}, & \\text{if } x\\ne 0\\\\[4pt] \\dfrac{3}{2}, & \\text{if } x=0\\end{cases}$ is continuous(連續) on $(-\\infty,\\infty)$. Find $(ab)^2=$",
      "options": {
        "1": "$6$",
        "2": "$9$",
        "3": "$36$",
        "4": "$\\frac{3}{8}$",
        "5": "$\\frac{9}{64}$"
      },
      "blanks": null,
      "answer": "3",
      "explanation": "$\\dfrac{\\sin ax}{x}\\to a$, $\\dfrac{\\tan bx}{x}\\to b$, so the limit is $\\dfrac{ab}{4}$. Continuity: $\\dfrac{ab}{4}=\\dfrac{3}{2}\\Rightarrow ab=6$, $(ab)^2=36$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-19-14",
      "chapter": "一、單選題",
      "number": "<14.>",
      "topic": "Limit at infinity",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Evaluate $\\displaystyle\\lim_{x\\to\\infty}\\frac{(2x-1)\\sqrt{9x^2+4}}{(x+3)(4x-1)}=$",
      "options": {
        "1": "$0$",
        "2": "$\\frac{1}{2}$",
        "3": "$\\frac{3}{2}$",
        "4": "$3$",
        "5": "$\\infty$"
      },
      "blanks": null,
      "answer": "3",
      "explanation": "For large $x$, $\\sqrt{9x^2+4}\\approx 3x$: top $\\approx 6x^2$, bottom $\\approx 4x^2$, so the limit is $\\frac{6}{4}=\\frac{3}{2}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-19-15",
      "chapter": "一、單選題",
      "number": "<15.>",
      "topic": "Asymptotes",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $f(x)=\\dfrac{x^2-x-6}{x^2-9}$. Which one of the following options is **incorrect**?",
      "options": {
        "1": "$x=3$ is a vertical(垂直的) asymptote(漸近線) of the graph of $f$.",
        "2": "$y=1$ is a horizontal(水平的) asymptote(漸近線) of the graph of $f$.",
        "3": "$x=-3$ is a vertical(垂直的) asymptote(漸近線) of the graph of $f$.",
        "4": "$f(-2)=0$",
        "5": "$\\displaystyle\\lim_{x\\to 3}f(x)=\\frac{5}{6}$"
      },
      "blanks": null,
      "answer": "1",
      "explanation": "$f(x)=\\dfrac{(x-3)(x+2)}{(x-3)(x+3)}=\\dfrac{x+2}{x+3}$ for $x\\ne3$: $x-3$ cancels, so $x=3$ is a hole, not an asymptote. Only $x=-3$ is a vertical asymptote.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-19-16",
      "chapter": "二、多選題",
      "number": "<16.>",
      "topic": "Graph reading",
      "type": "multi_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "For the function $f$ whose graph is as Figure A, which of the following options is/are **correct**?",
      "options": {
        "1": "$\\displaystyle\\lim_{x\\to 0^-}f(x)=0$",
        "2": "$\\displaystyle\\lim_{x\\to 0}f(x)=2$",
        "3": "$f$ is continuous at $x=0$.",
        "4": "$\\displaystyle\\lim_{x\\to 2^+}f(x)=1$",
        "5": "$f$ is right-continuous at $x=2$."
      },
      "blanks": null,
      "answer": [
        "1",
        "4"
      ],
      "explanation": "(1) From the left the graph approaches the open circle $(0,0)$. (2) ✗ both sides approach $0$, so the limit is $0$. (3) ✗ $f(0)=2\\ne 0$. (4) From the right the segment starts at the open circle $(2,1)$. (5) ✗ $f(2)=2\\ne\\lim_{x\\to2^+}f(x)=1$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5,
      "figure": "<svg viewBox=\"0 0 380 219\" role=\"img\" aria-label=\"Figure A: a line falls from a filled dot at (-2,2) to an open circle at (0,0); a filled dot at (0,2); a curve rises from the open circle at (0,0) to a filled dot at (2,2); a horizontal segment runs from an open circle at (2,1) to a filled dot at (3,1).\"><line class=\"grid\" x1=\"58\" y1=\"16\" x2=\"58\" y2=\"203\"/><line class=\"grid\" x1=\"112\" y1=\"16\" x2=\"112\" y2=\"203\"/><line class=\"grid\" x1=\"168\" y1=\"16\" x2=\"168\" y2=\"203\"/><line class=\"grid\" x1=\"222\" y1=\"16\" x2=\"222\" y2=\"203\"/><line class=\"grid\" x1=\"278\" y1=\"16\" x2=\"278\" y2=\"203\"/><line class=\"grid\" x1=\"332\" y1=\"16\" x2=\"332\" y2=\"203\"/><line class=\"grid\" x1=\"30\" y1=\"170\" x2=\"360\" y2=\"170\"/><line class=\"grid\" x1=\"30\" y1=\"115\" x2=\"360\" y2=\"115\"/><line class=\"grid\" x1=\"30\" y1=\"60\" x2=\"360\" y2=\"60\"/><line class=\"axis\" x1=\"30\" y1=\"170\" x2=\"360\" y2=\"170\"/><line class=\"axis\" x1=\"168\" y1=\"16\" x2=\"168\" y2=\"203\"/><text x=\"58\" y=\"186\" text-anchor=\"middle\">-2</text><text x=\"112\" y=\"186\" text-anchor=\"middle\">-1</text><text x=\"222\" y=\"186\" text-anchor=\"middle\">1</text><text x=\"278\" y=\"186\" text-anchor=\"middle\">2</text><text x=\"332\" y=\"186\" text-anchor=\"middle\">3</text><text x=\"160\" y=\"119\" text-anchor=\"end\">1</text><text x=\"160\" y=\"64\" text-anchor=\"end\">2</text><path class=\"curve\" d=\"M57.5,60.0 L60.2,62.7 L63.0,65.5 L65.8,68.2 L68.5,71.0 L71.2,73.8 L74.0,76.5 L76.8,79.2 L79.5,82.0 L82.2,84.7 L85.0,87.5 L87.8,90.2 L90.5,93.0 L93.2,95.7 L96.0,98.5 L98.8,101.2 L101.5,104.0 L104.2,106.8 L107.0,109.5 L109.8,112.2 L112.5,115.0 L115.2,117.7 L118.0,120.5 L120.8,123.2 L123.5,126.0 L126.2,128.8 L129.0,131.5 L131.8,134.2 L134.5,137.0 L137.2,139.8 L140.0,142.5 L142.8,145.2 L145.5,148.0 L148.2,150.7 L151.0,153.5 L153.8,156.2 L156.5,159.0 L159.2,161.8 L162.0,164.5 L164.8,167.2 L167.5,170.0\"/><path class=\"curve\" d=\"M167.5,170.0 L170.2,169.9 L173.0,169.7 L175.8,169.4 L178.5,168.9 L181.2,168.3 L184.0,167.5 L186.8,166.6 L189.5,165.6 L192.2,164.4 L195.0,163.1 L197.8,161.7 L200.5,160.1 L203.2,158.4 L206.0,156.5 L208.8,154.5 L211.5,152.4 L214.2,150.1 L217.0,147.7 L219.8,145.2 L222.5,142.5 L225.2,139.7 L228.0,136.7 L230.8,133.6 L233.5,130.4 L236.2,127.0 L239.0,123.5 L241.8,119.9 L244.5,116.1 L247.2,112.2 L250.0,108.1 L252.8,103.9 L255.5,99.6 L258.2,95.1 L261.0,90.5 L263.8,85.8 L266.5,80.9 L269.2,75.9 L272.0,70.7 L274.8,65.4 L277.5,60.0\"/><path class=\"curve\" d=\"M277.5,115.0 L305.0,115.0 L332.5,115.0\"/><circle class=\"dot\" cx=\"57.5\" cy=\"60.0\" r=\"5\"/><circle class=\"dot\" cx=\"167.5\" cy=\"60.0\" r=\"5\"/><circle class=\"dot\" cx=\"277.5\" cy=\"60.0\" r=\"5\"/><circle class=\"dot\" cx=\"332.5\" cy=\"115.0\" r=\"5\"/><circle class=\"open\" cx=\"167.5\" cy=\"170.0\" r=\"5\"/><circle class=\"open\" cx=\"277.5\" cy=\"115.0\" r=\"5\"/><text x=\"356\" y=\"213\" text-anchor=\"end\">Figure A</text></svg>"
    },
    {
      "id": "math-2026-10-19-17",
      "chapter": "二、多選題",
      "number": "<17.>",
      "topic": "Rational function",
      "type": "multi_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $f(x)=\\dfrac{3x^3}{x^2+x-2}$. Which of the following options is/are **correct**?",
      "options": {
        "1": "$\\displaystyle\\lim_{x\\to\\infty}f(x)=\\infty$",
        "2": "$\\displaystyle\\lim_{x\\to -\\infty}f(x)=-\\infty$",
        "3": "$y=3x-3$ is the oblique(傾斜的) asymptote of the graph of $f(x)$.",
        "4": "$y=3x+3$ is the oblique(傾斜的) asymptote of the graph of $f(x)$.",
        "5": "$x=-1$ is a vertical(垂直的) asymptote of the graph of $f(x)$."
      },
      "blanks": null,
      "answer": [
        "1",
        "2",
        "3"
      ],
      "explanation": "Division: $3x^3=(x^2+x-2)(3x-3)+(9x-6)$, so the oblique asymptote is $y=3x-3$. $f\\approx 3x$ for large $|x|$. $x^2+x-2=(x-1)(x+2)$, so the vertical asymptotes are $x=1$ and $x=-2$, not $x=-1$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5
    },
    {
      "id": "math-2026-10-19-18",
      "chapter": "二、多選題",
      "number": "<18.>",
      "topic": "Continuity theory + IVT",
      "type": "multi_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which of the following options is/are **correct**? ($[\\![\\cdot]\\!]$ is the greatest integer function.)",
      "options": {
        "1": "If $f$ is continuous at $x=a$, then $\\displaystyle\\lim_{x\\to a^+}f(x)=f(a)$.",
        "2": "If $\\displaystyle\\lim_{x\\to 0}f(x)=f(0)$, then $f$ is continuous at $x=0$.",
        "3": "If $f$ and $g$ are both continuous at $x=0$, then $f-g$ is continuous at $x=0$.",
        "4": "$f(x)=[\\![x]\\!]$ is continuous at $x=\\frac{1}{2}$.",
        "5": "There is a root of the equation $x^4-x-3=0$ between $0$ and $1$."
      },
      "blanks": null,
      "answer": [
        "1",
        "2",
        "3",
        "4"
      ],
      "explanation": "(4) $[\\![x]\\!]=0$ for all $x$ near $\\frac{1}{2}$, so it is continuous there. (5) ✗ $f(0)=-3$ and $f(1)=-3$ have the same sign, and in fact $x^4-x-3<0$ on all of $[0,1]$, so there is no root.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5
    },
    {
      "id": "math-2026-10-19-19",
      "chapter": "二、多選題",
      "number": "<19.>",
      "topic": "Trig / abs / greatest integer limits",
      "type": "multi_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which of the following options is/are **correct**? ($[\\![\\cdot]\\!]$ is the greatest integer function.)",
      "options": {
        "1": "$\\displaystyle\\lim_{x\\to\\infty}\\frac{\\sin 5x}{3x}=0$",
        "2": "$\\displaystyle\\lim_{x\\to 0}5x\\sin\\frac{1}{3x}=\\frac{5}{3}$",
        "3": "$\\displaystyle\\lim_{x\\to 0^+}\\frac{|x|}{\\sin x}=1$",
        "4": "$\\displaystyle\\lim_{x\\to 1^-}x[\\![x]\\!]=0$",
        "5": "$\\displaystyle\\lim_{x\\to 0^-}\\frac{[\\![x]\\!]}{x}=-\\infty$"
      },
      "blanks": null,
      "answer": [
        "1",
        "3",
        "4"
      ],
      "explanation": "(2) ✗ $|5x\\sin\\frac{1}{3x}|\\le 5|x|\\to 0$. (3) for $x>0$, $\\frac{x}{\\sin x}\\to 1$. (4) $[\\![x]\\!]=0$ on $[0,1)$. (5) ✗ for $-1\\le x<0$, $[\\![x]\\!]=-1$, so $\\frac{-1}{x}\\to+\\infty$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5
    },
    {
      "id": "math-2026-10-19-20",
      "chapter": "三、選填題",
      "number": "A",
      "topic": "Limit laws",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題均以最簡單分數作答，請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $\\displaystyle\\lim_{x\\to 2}f(x)=3$、$\\displaystyle\\lim_{x\\to 2}g(x)=-1$ and $\\displaystyle\\lim_{x\\to 2}h(x)=4$, then $\\displaystyle\\lim_{x\\to 2}\\left(\\frac{f^2(x)-5h(x)}{2h(x)-g(x)}\\right)=\\dfrac{\\boxed{20}\\boxed{21}\\boxed{22}}{\\boxed{23}}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "$\\dfrac{9-20}{8-(-1)}=\\dfrac{-11}{9}$.",
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
          "v": "1"
        },
        {
          "n": 22,
          "v": "1"
        },
        {
          "n": 23,
          "v": "9"
        }
      ]
    },
    {
      "id": "math-2026-10-19-21",
      "chapter": "三、選填題",
      "number": "B",
      "topic": "Trig value from quadrant",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題均以最簡單分數作答，請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $\\tan x=\\frac{8}{15}$, for $\\pi<x<\\frac{3\\pi}{2}$. Find $\\cos x=\\dfrac{\\boxed{24}\\boxed{25}\\boxed{26}}{\\boxed{27}\\boxed{28}}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "Right triangle $8$, $15$, hypotenuse $17$. In the 3rd quadrant cosine is negative: $\\cos x=\\dfrac{-15}{17}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "slots": [
        {
          "n": 24,
          "v": "-"
        },
        {
          "n": 25,
          "v": "1"
        },
        {
          "n": 26,
          "v": "5"
        },
        {
          "n": 27,
          "v": "1"
        },
        {
          "n": 28,
          "v": "7"
        }
      ]
    },
    {
      "id": "math-2026-10-19-22",
      "chapter": "三、選填題",
      "number": "C",
      "topic": "Piecewise continuity",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題均以最簡單分數作答，請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $f(x)=\\begin{cases}3x+1, & \\text{if } x\\le -2\\\\ x^2+ax+b, & \\text{if } -2<x<1\\\\ 7, & \\text{if } x\\ge 1\\end{cases}$ is continuous on $(-\\infty,\\infty)$, then $2a+b=\\boxed{29}\\boxed{30}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "At $x=-2$: $4-2a+b=-5$. At $x=1$: $1+a+b=7$. So $b-2a=-9$ and $a+b=6$, giving $a=5$, $b=1$, and $2a+b=11$.",
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
          "v": "1"
        }
      ]
    },
    {
      "id": "math-2026-10-19-23",
      "chapter": "三、選填題",
      "number": "D",
      "topic": "Trig limit",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題均以最簡單分數作答，請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $f(x)=\\begin{cases}\\dfrac{1-\\cos 5x}{6x^2}, & \\text{if } x\\ne 0\\\\[4pt] \\dfrac{5}{6}, & \\text{if } x=0\\end{cases}$, then $\\displaystyle\\lim_{x\\to 0}f(x)=\\dfrac{\\boxed{31}\\boxed{32}}{\\boxed{33}\\boxed{34}}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "$\\dfrac{1-\\cos 5x}{x^2}\\to\\dfrac{25}{2}$; divide by $6$: $\\dfrac{25}{12}$. The value $f(0)=\\frac{5}{6}$ does not affect the limit.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "slots": [
        {
          "n": 31,
          "v": "2"
        },
        {
          "n": 32,
          "v": "5"
        },
        {
          "n": 33,
          "v": "1"
        },
        {
          "n": 34,
          "v": "2"
        }
      ]
    },
    {
      "id": "math-2026-10-19-24",
      "chapter": "三、選填題",
      "number": "E",
      "topic": "Removable discontinuity",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題均以最簡單分數作答，請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $f(x)=\\begin{cases}\\dfrac{x^2+ax-12}{x-2}, & \\text{if } x\\ne 2\\\\[4pt] b, & \\text{if } x=2\\end{cases}$. If $f(x)$ is continuous at $x=2$, then $a+3b=\\boxed{35}\\boxed{36}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "The numerator must be $0$ at $2$: $4+2a-12=0\\Rightarrow a=4$. Then $\\dfrac{(x+6)(x-2)}{x-2}=x+6\\to 8=b$. $a+3b=4+24=28$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "slots": [
        {
          "n": 35,
          "v": "2"
        },
        {
          "n": 36,
          "v": "8"
        }
      ]
    }
  ]
};
