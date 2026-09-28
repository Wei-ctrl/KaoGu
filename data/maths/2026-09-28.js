// Maths mock paper in the 僑先部 期中模擬考 format (sources/maths/midterm-mock-format.md):
// 15 單選 + 4 多選 + 5 選填 = 24 questions, slots <20.>–<34.>. $…$ is rendered with KaTeX.
(window.KAOGU_DAILY = window.KAOGU_DAILY || {})["maths"] = window.KAOGU_DAILY["maths"] || {};
window.KAOGU_DAILY["maths"]["2026-09-28"] = {
  "exam": "僑先部 數學（第二、三類組）期中模擬考 · Mock",
  "questions": [
    {
      "id": "math-mock-01",
      "chapter": "一、單選題",
      "number": "<1.>",
      "topic": "Natural domain",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $f(x)=\\dfrac{2x+1}{\\sqrt{(x+2)(4-x)}}$. Find the natural domain(自然定義域) of $f(x)$.",
      "options": {
        "1": "$(-\\infty,-2]\\cup[4,\\infty)$",
        "2": "$(-\\infty,-2)\\cup(4,\\infty)$",
        "3": "$(-2,4)$",
        "4": "$[-2,4]$",
        "5": "$(-\\infty,-4)\\cup(2,\\infty)$"
      },
      "blanks": null,
      "answer": "3",
      "explanation": "The square root is in the denominator, so we need $(x+2)(4-x)>0$ (strictly). The product is positive between the roots: $-2<x<4$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-mock-02",
      "chapter": "一、單選題",
      "number": "<2.>",
      "topic": "Piecewise function",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $f(x)=\\begin{cases}\\sqrt{(2x-5)^2}, & \\text{if } x\\ge 0\\\\ x+6, & \\text{if } x<0\\end{cases}$. Find $f(1)=$",
      "options": {
        "1": "$-3$",
        "2": "$-1$",
        "3": "$1$",
        "4": "$3$",
        "5": "$7$"
      },
      "blanks": null,
      "answer": "4",
      "explanation": "$1\\ge 0$, so use the first piece: $\\sqrt{(2-5)^2}=|-3|=3$. Remember $\\sqrt{a^2}=|a|$, not $a$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-mock-03",
      "chapter": "一、單選題",
      "number": "<3.>",
      "topic": "Composite function",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $f(x)=3x+2$ and $g(x)=x^2-4x+1$. Find $(f\\circ g)(3)=$",
      "options": {
        "1": "$-4$",
        "2": "$-2$",
        "3": "$4$",
        "4": "$11$",
        "5": "$78$"
      },
      "blanks": null,
      "answer": "1",
      "explanation": "$g(3)=9-12+1=-2$, then $f(-2)=3(-2)+2=-4$. ($78$ is $(g\\circ f)(3)$.)",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-mock-04",
      "chapter": "一、單選題",
      "number": "<4.>",
      "topic": "Slope",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Find the slope(斜率) of the line that passes through $(-2,5)$ and $(6,-1)$.",
      "options": {
        "1": "$\\frac{3}{4}$",
        "2": "$\\frac{-4}{3}$",
        "3": "$\\frac{-3}{4}$",
        "4": "$\\frac{4}{3}$",
        "5": "$\\frac{-3}{2}$"
      },
      "blanks": null,
      "answer": "3",
      "explanation": "$m=\\dfrac{-1-5}{6-(-2)}=\\dfrac{-6}{8}=\\dfrac{-3}{4}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-mock-05",
      "chapter": "一、單選題",
      "number": "<5.>",
      "topic": "Exact trig value",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Find the value of $\\sec\\dfrac{5\\pi}{6}=$",
      "options": {
        "1": "$\\frac{-2}{\\sqrt{3}}$",
        "2": "$\\frac{2}{\\sqrt{3}}$",
        "3": "$\\frac{-\\sqrt{3}}{2}$",
        "4": "$-2$",
        "5": "$\\frac{-1}{2}$"
      },
      "blanks": null,
      "answer": "1",
      "explanation": "$\\cos\\dfrac{5\\pi}{6}=-\\dfrac{\\sqrt{3}}{2}$ (2nd quadrant), so $\\sec\\dfrac{5\\pi}{6}=\\dfrac{1}{\\cos}=\\dfrac{-2}{\\sqrt{3}}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-mock-06",
      "chapter": "一、單選題",
      "number": "<6.>",
      "topic": "Line equation",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which one of the following options is the equation for the line that passes through the point $(4,-1)$ and has slope $\\frac{3}{2}$?",
      "options": {
        "1": "$y=\\frac{2}{3}x-\\frac{11}{3}$",
        "2": "$y=\\frac{3}{2}x-5$",
        "3": "$y=\\frac{-3}{2}x+5$",
        "4": "$y=\\frac{3}{2}x-7$",
        "5": "$y=\\frac{3}{2}x+7$"
      },
      "blanks": null,
      "answer": "4",
      "explanation": "Point-slope form: $y+1=\\frac{3}{2}(x-4)\\Rightarrow y=\\frac{3}{2}x-6-1=\\frac{3}{2}x-7$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-mock-07",
      "chapter": "一、單選題",
      "number": "<7.>",
      "topic": "Limit by substitution",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Evaluate $\\displaystyle\\lim_{x\\to 2}\\left(\\sqrt{x^2+2x+1}+(3x-8)+\\frac{x+4}{3x+4}\\right)=$",
      "options": {
        "1": "$\\frac{3}{5}$",
        "2": "$\\frac{8}{5}$",
        "3": "$\\frac{13}{5}$",
        "4": "$\\frac{-2}{5}$",
        "5": "$\\frac{18}{5}$"
      },
      "blanks": null,
      "answer": "2",
      "explanation": "Every part is continuous at $x=2$, so substitute: $\\sqrt{9}+(6-8)+\\frac{6}{10}=3-2+\\frac{3}{5}=\\frac{8}{5}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-mock-08",
      "chapter": "一、單選題",
      "number": "<8.>",
      "topic": "0/0 limit",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Evaluate $\\displaystyle\\lim_{x\\to 2}\\frac{x^{-1}-\\frac{1}{2}}{x-2}=$",
      "options": {
        "1": "$\\frac{1}{4}$",
        "2": "$\\frac{-1}{4}$",
        "3": "$\\frac{1}{2}$",
        "4": "$\\frac{-1}{2}$",
        "5": "$0$"
      },
      "blanks": null,
      "answer": "2",
      "explanation": "$\\dfrac{\\frac{1}{x}-\\frac{1}{2}}{x-2}=\\dfrac{\\frac{2-x}{2x}}{x-2}=\\dfrac{-1}{2x}\\to\\dfrac{-1}{4}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-mock-09",
      "chapter": "一、單選題",
      "number": "<9.>",
      "topic": "0/0 limit with nested radicals",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Evaluate $\\displaystyle\\lim_{x\\to 9}\\frac{\\sqrt{1+\\sqrt{x}}-2}{x-9}=$",
      "options": {
        "1": "$\\frac{1}{4}$",
        "2": "$\\frac{1}{6}$",
        "3": "$\\frac{1}{12}$",
        "4": "$\\frac{1}{24}$",
        "5": "$\\frac{1}{48}$"
      },
      "blanks": null,
      "answer": "4",
      "explanation": "Rationalise twice: $\\dfrac{\\sqrt{1+\\sqrt{x}}-2}{x-9}=\\dfrac{\\sqrt{x}-3}{(x-9)(\\sqrt{1+\\sqrt{x}}+2)}=\\dfrac{1}{(\\sqrt{x}+3)(\\sqrt{1+\\sqrt{x}}+2)}\\to\\dfrac{1}{6\\cdot 4}=\\dfrac{1}{24}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-mock-10",
      "chapter": "一、單選題",
      "number": "<10.>",
      "topic": "Odd / even function",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which one of the following options is an **odd function**?",
      "options": {
        "1": "$f(x)=x^2+3$",
        "2": "$f(x)=x^3+1$",
        "3": "$f(x)=|x|-2$",
        "4": "$f(x)=\\frac{x}{1+x}$",
        "5": "$f(x)=x^3-x$"
      },
      "blanks": null,
      "answer": "5",
      "explanation": "Odd means $f(-x)=-f(x)$: $(-x)^3-(-x)=-(x^3-x)$. $x^2+3$ and $|x|-2$ are even; the others are neither.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-mock-11",
      "chapter": "一、單選題",
      "number": "<11.>",
      "topic": "Greatest integer limit",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Evaluate $\\displaystyle\\lim_{x\\to 3^-}\\frac{[\\![x+1]\\!](x^2-3x)}{x^2+2x-15}=$ ($[\\![\\cdot]\\!]$ is the greatest integer function.)",
      "options": {
        "1": "$0$",
        "2": "$\\frac{3}{8}$",
        "3": "$\\frac{-9}{8}$",
        "4": "$\\frac{9}{8}$",
        "5": "$\\frac{3}{2}$"
      },
      "blanks": null,
      "answer": "4",
      "explanation": "For $x\\to 3^-$, $x+1\\to 4^-$ so $[\\![x+1]\\!]=3$. $\\dfrac{x(x-3)}{(x+5)(x-3)}=\\dfrac{x}{x+5}\\to\\dfrac{3}{8}$. Product: $3\\cdot\\dfrac{3}{8}=\\dfrac{9}{8}$. ($\\frac{3}{2}$ uses $[\\![x+1]\\!]=4$.)",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-mock-12",
      "chapter": "一、單選題",
      "number": "<12.>",
      "topic": "Continuity",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which one of the following options is continuous(連續) at $x=0$?",
      "options": {
        "1": "$f(x)=\\dfrac{1}{x^2}$",
        "2": "$f(x)=\\sqrt{x-1}$",
        "3": "$f(x)=\\begin{cases}\\dfrac{x}{|x|}, & x\\ne 0\\\\ 0, & x=0\\end{cases}$",
        "4": "$f(x)=\\cot x$",
        "5": "$f(x)=\\begin{cases}x\\sin\\left(\\dfrac{1}{x}\\right), & x\\ne 0\\\\ 0, & x=0\\end{cases}$"
      },
      "blanks": null,
      "answer": "5",
      "explanation": "(5): $-|x|\\le x\\sin\\frac{1}{x}\\le|x|$, so the limit is $0=f(0)$ by the squeeze theorem. (1), (2), (4) are not defined at $0$; (3) jumps from $-1$ to $1$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-mock-13",
      "chapter": "一、單選題",
      "number": "<13.>",
      "topic": "Continuity with trig limits",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $f(x)=\\begin{cases}\\dfrac{(\\sin ax)(\\tan bx)}{3x^2}, & \\text{if } x\\ne 0\\\\[4pt] \\dfrac{1}{2}, & \\text{if } x=0\\end{cases}$ is continuous(連續) on $(-\\infty,\\infty)$. Find $(ab)^2=$",
      "options": {
        "1": "$\\frac{9}{4}$",
        "2": "$\\frac{3}{2}$",
        "3": "$\\frac{1}{4}$",
        "4": "$\\frac{3}{4}$",
        "5": "$0$"
      },
      "blanks": null,
      "answer": "1",
      "explanation": "$\\dfrac{\\sin ax}{x}\\to a$ and $\\dfrac{\\tan bx}{x}\\to b$, so the limit is $\\dfrac{ab}{3}$. Continuity: $\\dfrac{ab}{3}=\\dfrac{1}{2}\\Rightarrow ab=\\dfrac{3}{2}$, $(ab)^2=\\dfrac{9}{4}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-mock-14",
      "chapter": "一、單選題",
      "number": "<14.>",
      "topic": "Limit at infinity",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Evaluate $\\displaystyle\\lim_{x\\to\\infty}\\frac{(3x-1)\\sqrt{x^2+1}}{(x+2)(2x-5)}=$",
      "options": {
        "1": "$0$",
        "2": "$\\frac{3}{2}$",
        "3": "$3$",
        "4": "$6$",
        "5": "$\\infty$"
      },
      "blanks": null,
      "answer": "2",
      "explanation": "For large $x$, $\\sqrt{x^2+1}\\approx x$, so the top $\\approx 3x^2$ and the bottom $\\approx 2x^2$: limit $\\dfrac{3}{2}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-mock-15",
      "chapter": "一、單選題",
      "number": "<15.>",
      "topic": "Asymptotes",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $f(x)=\\dfrac{x^2-5x+6}{x^2-x-2}$. Which one of the following options is **incorrect**?",
      "options": {
        "1": "$y=1$ is a horizontal(水平的) asymptote(漸近線) of the graph of $f$.",
        "2": "$x=-1$ is a vertical(垂直的) asymptote(漸近線) of the graph of $f$.",
        "3": "$x=2$ is a vertical(垂直的) asymptote(漸近線) of the graph of $f$.",
        "4": "$f(3)=0$",
        "5": "$\\displaystyle\\lim_{x\\to 2}f(x)=\\frac{-1}{3}$"
      },
      "blanks": null,
      "answer": "3",
      "explanation": "$f(x)=\\dfrac{(x-2)(x-3)}{(x-2)(x+1)}=\\dfrac{x-3}{x+1}$ for $x\\ne 2$. $x-2$ cancels, so $x=2$ is a hole, not a vertical asymptote. Only $x=-1$ is.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-mock-16",
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
        "3": "$\\displaystyle\\lim_{x\\to 1^+}f(x)=1$",
        "4": "$f$ is left-continuous at $x=1$.",
        "5": "$\\displaystyle\\lim_{x\\to 1}f(x)$ exists."
      },
      "blanks": null,
      "answer": [
        "1",
        "4"
      ],
      "explanation": "(1) Both sides approach the open circle at $(0,2)$. (2) ✗ $f(0)=1\\ne 2$. (3) ✗ from the right the graph starts at the open circle $(1,0)$, so the limit is $0$. (4) $\\lim_{x\\to1^-}f(x)=1=f(1)$. (5) ✗ left limit $1$, right limit $0$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5,
      "figure": "<svg viewBox=\"0 0 360 260\" role=\"img\" aria-label=\"Figure A: a line from a filled dot at (-2,0) up to an open circle at (0,2); a filled dot at (0,1); a curve from the open circle at (0,2) down to a filled dot at (1,1); an open circle at (1,0) with a line rising to a filled dot at (3,2).\"><line class=\"grid\" x1=\"55.0\" y1=\"20.0\" x2=\"55.0\" y2=\"240.00000000000003\"/><line class=\"grid\" x1=\"105.0\" y1=\"20.0\" x2=\"105.0\" y2=\"240.00000000000003\"/><line class=\"grid\" x1=\"155.0\" y1=\"20.0\" x2=\"155.0\" y2=\"240.00000000000003\"/><line class=\"grid\" x1=\"205.0\" y1=\"20.0\" x2=\"205.0\" y2=\"240.00000000000003\"/><line class=\"grid\" x1=\"255.0\" y1=\"20.0\" x2=\"255.0\" y2=\"240.00000000000003\"/><line class=\"grid\" x1=\"305.0\" y1=\"20.0\" x2=\"305.0\" y2=\"240.00000000000003\"/><line class=\"grid\" x1=\"30.0\" y1=\"230.0\" x2=\"330.0\" y2=\"230.0\"/><line class=\"grid\" x1=\"30.0\" y1=\"180.0\" x2=\"330.0\" y2=\"180.0\"/><line class=\"grid\" x1=\"30.0\" y1=\"130.0\" x2=\"330.0\" y2=\"130.0\"/><line class=\"grid\" x1=\"30.0\" y1=\"80.0\" x2=\"330.0\" y2=\"80.0\"/><line class=\"grid\" x1=\"30.0\" y1=\"30.000000000000007\" x2=\"330.0\" y2=\"30.000000000000007\"/><line class=\"axis\" x1=\"30.0\" y1=\"180.0\" x2=\"330.0\" y2=\"180.0\"/><line class=\"axis\" x1=\"155.0\" y1=\"20.0\" x2=\"155.0\" y2=\"240.00000000000003\"/><text x=\"55.0\" y=\"196.0\" text-anchor=\"middle\">-2</text><text x=\"105.0\" y=\"196.0\" text-anchor=\"middle\">-1</text><text x=\"205.0\" y=\"196.0\" text-anchor=\"middle\">1</text><text x=\"255.0\" y=\"196.0\" text-anchor=\"middle\">2</text><text x=\"305.0\" y=\"196.0\" text-anchor=\"middle\">3</text><text x=\"147.0\" y=\"234.0\" text-anchor=\"end\">-1</text><text x=\"147.0\" y=\"134.0\" text-anchor=\"end\">1</text><text x=\"147.0\" y=\"84.0\" text-anchor=\"end\">2</text><text x=\"147.0\" y=\"34.00000000000001\" text-anchor=\"end\">3</text><text x=\"326.0\" y=\"174.0\" text-anchor=\"end\">x</text><text x=\"161.0\" y=\"30.0\">y</text><path class=\"curve\" d=\"M55.0,180.0 L57.5,177.5 L60.0,175.0 L62.5,172.5 L65.0,170.0 L67.5,167.5 L70.0,165.0 L72.5,162.5 L75.0,160.0 L77.5,157.5 L80.0,155.0 L82.5,152.5 L85.0,150.0 L87.5,147.5 L90.0,145.0 L92.5,142.5 L95.0,140.0 L97.5,137.5 L100.0,135.0 L102.5,132.5 L105.0,130.0 L107.5,127.5 L110.0,125.0 L112.5,122.5 L115.0,120.0 L117.5,117.5 L120.0,115.0 L122.5,112.5 L125.0,110.0 L127.5,107.5 L130.0,105.0 L132.5,102.5 L135.0,100.0 L137.5,97.5 L140.0,95.0 L142.5,92.5 L145.0,90.0 L147.5,87.5 L150.0,85.0 L152.5,82.5 L155.0,80.0\"/><path class=\"curve\" d=\"M155.0,80.0 L156.2,80.0 L157.5,80.1 L158.8,80.3 L160.0,80.5 L161.2,80.8 L162.5,81.1 L163.8,81.5 L165.0,82.0 L166.2,82.5 L167.5,83.1 L168.8,83.8 L170.0,84.5 L171.2,85.3 L172.5,86.1 L173.8,87.0 L175.0,88.0 L176.2,89.0 L177.5,90.1 L178.8,91.3 L180.0,92.5 L181.2,93.8 L182.5,95.1 L183.8,96.5 L185.0,98.0 L186.2,99.5 L187.5,101.1 L188.8,102.8 L190.0,104.5 L191.2,106.3 L192.5,108.1 L193.8,110.0 L195.0,112.0 L196.2,114.0 L197.5,116.1 L198.8,118.3 L200.0,120.5 L201.2,122.8 L202.5,125.1 L203.8,127.5 L205.0,130.0\"/><path class=\"curve\" d=\"M205.0,180.0 L207.5,177.5 L210.0,175.0 L212.5,172.5 L215.0,170.0 L217.5,167.5 L220.0,165.0 L222.5,162.5 L225.0,160.0 L227.5,157.5 L230.0,155.0 L232.5,152.5 L235.0,150.0 L237.5,147.5 L240.0,145.0 L242.5,142.5 L245.0,140.0 L247.5,137.5 L250.0,135.0 L252.5,132.5 L255.0,130.0 L257.5,127.5 L260.0,125.0 L262.5,122.5 L265.0,120.0 L267.5,117.5 L270.0,115.0 L272.5,112.5 L275.0,110.0 L277.5,107.5 L280.0,105.0 L282.5,102.5 L285.0,100.0 L287.5,97.5 L290.0,95.0 L292.5,92.5 L295.0,90.0 L297.5,87.5 L300.0,85.0 L302.5,82.5 L305.0,80.0\"/><circle class=\"dot\" cx=\"55.0\" cy=\"180.0\" r=\"5\"/><circle class=\"dot\" cx=\"155.0\" cy=\"130.0\" r=\"5\"/><circle class=\"dot\" cx=\"205.0\" cy=\"130.0\" r=\"5\"/><circle class=\"dot\" cx=\"305.0\" cy=\"80.0\" r=\"5\"/><circle class=\"open\" cx=\"155.0\" cy=\"80.0\" r=\"5\"/><circle class=\"open\" cx=\"205.0\" cy=\"180.0\" r=\"5\"/><text x=\"330\" y=\"250\" text-anchor=\"end\">Figure A</text></svg>"
    },
    {
      "id": "math-mock-17",
      "chapter": "二、多選題",
      "number": "<17.>",
      "topic": "Rational function",
      "type": "multi_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $f(x)=\\dfrac{3x^3}{x^2-x-2}$. Which of the following options is/are **correct**?",
      "options": {
        "1": "$\\displaystyle\\lim_{x\\to\\infty}f(x)=\\infty$",
        "2": "$\\displaystyle\\lim_{x\\to -\\infty}f(x)=\\infty$",
        "3": "$y=3x+3$ is the oblique(傾斜的) asymptote of the graph of $f(x)$.",
        "4": "$y=3x$ is the oblique(傾斜的) asymptote of the graph of $f(x)$.",
        "5": "$x=2$ is a vertical(垂直的) asymptote of the graph of $f(x)$."
      },
      "blanks": null,
      "answer": [
        "1",
        "3",
        "5"
      ],
      "explanation": "Long division: $3x^3=(x^2-x-2)(3x+3)+(9x+6)$, so the oblique asymptote is $y=3x+3$. $f\\approx 3x$ for large $|x|$: $+\\infty$ as $x\\to\\infty$, $-\\infty$ as $x\\to-\\infty$. $x^2-x-2=(x-2)(x+1)$ and the top is $24\\ne 0$ at $x=2$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5
    },
    {
      "id": "math-mock-18",
      "chapter": "二、多選題",
      "number": "<18.>",
      "topic": "Continuity theory + IVT",
      "type": "multi_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which of the following options is/are **correct**?",
      "options": {
        "1": "If $f$ is continuous at $x=a$, then $\\displaystyle\\lim_{x\\to a}f(x)=f(a)$.",
        "2": "If $\\displaystyle\\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)$, then $f$ is continuous at $x=a$.",
        "3": "If $f$ and $g$ are both continuous at $x=0$, then $f+g$ is continuous at $x=0$.",
        "4": "$f(x)=|x|$ is continuous at $x=0$.",
        "5": "The equation $x^3-3x+1=0$ has no root between $0$ and $1$."
      },
      "blanks": null,
      "answer": [
        "1",
        "3",
        "4"
      ],
      "explanation": "(2) ✗ equal one-sided limits only mean the limit exists; $f(a)$ may be different or undefined. (5) ✗ $f(0)=1>0$ and $f(1)=-1<0$, so by the Intermediate Value Theorem there is a root in $(0,1)$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5
    },
    {
      "id": "math-mock-19",
      "chapter": "二、多選題",
      "number": "<19.>",
      "topic": "Trig / abs / greatest integer limits",
      "type": "multi_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which of the following options is/are **correct**? ($[\\![\\cdot]\\!]$ is the greatest integer function.)",
      "options": {
        "1": "$\\displaystyle\\lim_{x\\to\\infty}\\frac{\\sin 3x}{4x}=0$",
        "2": "$\\displaystyle\\lim_{x\\to 0}\\frac{\\sin 3x}{4x}=\\frac{3}{4}$",
        "3": "$\\displaystyle\\lim_{x\\to 0^+}\\frac{\\sin x}{|x|}=-1$",
        "4": "$\\displaystyle\\lim_{x\\to 2^-}\\frac{[\\![x]\\!]}{x}=1$",
        "5": "$\\displaystyle\\lim_{x\\to\\infty}x\\sin\\frac{1}{x}=1$"
      },
      "blanks": null,
      "answer": [
        "1",
        "2",
        "5"
      ],
      "explanation": "(1) $|\\sin 3x|\\le 1$ so it is squeezed to $0$. (2) $\\frac{3}{4}\\cdot\\frac{\\sin 3x}{3x}\\to\\frac{3}{4}$. (3) ✗ for $x>0$, $|x|=x$, limit $1$. (4) ✗ for $1\\le x<2$, $[\\![x]\\!]=1$, so the limit is $\\frac{1}{2}$. (5) let $t=\\frac{1}{x}\\to 0^+$: $\\frac{\\sin t}{t}\\to 1$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5
    },
    {
      "id": "math-mock-20",
      "chapter": "三、選填題",
      "number": "A",
      "topic": "Limit laws",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題均以最簡單分數作答，請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $\\displaystyle\\lim_{x\\to 3}f(x)=2$、$\\displaystyle\\lim_{x\\to 3}g(x)=3$ and $\\displaystyle\\lim_{x\\to 3}h(x)=-1$, then $\\displaystyle\\lim_{x\\to 3}\\left(\\frac{f^2(x)+3h(x)-2g(x)}{f(x)g(x)-2}\\right)=\\dfrac{\\boxed{20}\\boxed{21}}{\\boxed{22}}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "Limit laws: $\\dfrac{2^2+3(-1)-2(3)}{2\\cdot 3-2}=\\dfrac{4-3-6}{4}=\\dfrac{-5}{4}$.",
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
          "v": "5"
        },
        {
          "n": 22,
          "v": "4"
        }
      ]
    },
    {
      "id": "math-mock-21",
      "chapter": "三、選填題",
      "number": "B",
      "topic": "Trig value from quadrant",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題均以最簡單分數作答，請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $\\tan x=\\frac{-5}{12}$, for $\\frac{\\pi}{2}<x<\\pi$. Find $\\cos x=\\dfrac{\\boxed{23}\\boxed{24}\\boxed{25}}{\\boxed{26}\\boxed{27}}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "Right triangle with sides $5$, $12$, hypotenuse $13$. In the 2nd quadrant cosine is negative: $\\cos x=\\dfrac{-12}{13}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "slots": [
        {
          "n": 23,
          "v": "-"
        },
        {
          "n": 24,
          "v": "1"
        },
        {
          "n": 25,
          "v": "2"
        },
        {
          "n": 26,
          "v": "1"
        },
        {
          "n": 27,
          "v": "3"
        }
      ]
    },
    {
      "id": "math-mock-22",
      "chapter": "三、選填題",
      "number": "C",
      "topic": "Piecewise continuity",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題均以最簡單分數作答，請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $f(x)=\\begin{cases}3x+2, & \\text{if } x\\le -1\\\\ x^2+ax+b, & \\text{if } -1<x<1\\\\ 9, & \\text{if } x\\ge 1\\end{cases}$ is continuous on $(-\\infty,\\infty)$, then $2a+b=\\boxed{28}\\boxed{29}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "At $x=-1$: $1-a+b=3(-1)+2=-1$. At $x=1$: $1+a+b=9$. So $b-a=-2$ and $a+b=8$, giving $a=5$, $b=3$, and $2a+b=13$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "slots": [
        {
          "n": 28,
          "v": "1"
        },
        {
          "n": 29,
          "v": "3"
        }
      ]
    },
    {
      "id": "math-mock-23",
      "chapter": "三、選填題",
      "number": "D",
      "topic": "Trig limit",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題均以最簡單分數作答，請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $f(x)=\\begin{cases}\\dfrac{1-\\cos 3x}{7x^2}, & \\text{if } x\\ne 0\\\\[4pt] \\dfrac{3}{7}, & \\text{if } x=0\\end{cases}$, then $\\displaystyle\\lim_{x\\to 0}f(x)=\\dfrac{\\boxed{30}}{\\boxed{31}\\boxed{32}}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "$1-\\cos 3x=2\\sin^2\\frac{3x}{2}$, so $\\dfrac{1-\\cos 3x}{x^2}\\to\\dfrac{9}{2}$. Divide by $7$: $\\dfrac{9}{14}$. The value $f(0)=\\frac{3}{7}$ does not affect the limit.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "slots": [
        {
          "n": 30,
          "v": "9"
        },
        {
          "n": 31,
          "v": "1"
        },
        {
          "n": 32,
          "v": "4"
        }
      ]
    },
    {
      "id": "math-mock-24",
      "chapter": "三、選填題",
      "number": "E",
      "topic": "Removable discontinuity",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題均以最簡單分數作答，請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Assume that $f(x)=\\begin{cases}\\dfrac{3x^2+ax-6}{x-2}, & \\text{if } x\\ne 2\\\\[4pt] b, & \\text{if } x=2\\end{cases}$. If $f(x)$ is continuous at $x=2$, then $a+3b=\\boxed{33}\\boxed{34}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "The denominator $\\to 0$, so the numerator must too: $12+2a-6=0\\Rightarrow a=-3$. Then $\\dfrac{3(x-2)(x+1)}{x-2}=3(x+1)\\to 9=b$. $a+3b=-3+27=24$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "slots": [
        {
          "n": 33,
          "v": "2"
        },
        {
          "n": 34,
          "v": "4"
        }
      ]
    }
  ]
};
