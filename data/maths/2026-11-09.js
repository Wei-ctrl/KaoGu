// maths daily set for 2026-11-09. See prompts/weekly-routine.md.
(window.KAOGU_DAILY = window.KAOGU_DAILY || {})["maths"] = window.KAOGU_DAILY["maths"] || {};
window.KAOGU_DAILY["maths"]["2026-11-09"] = {
  "exam": "僑先部 數學（第二、三類組）期中模擬考 · Mock (113 format)",
  "questions": [
    {
      "id": "math-2026-11-09-01",
      "chapter": "一、單選題",
      "number": "<1.>",
      "topic": "Exact trig value",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Find $\\tan\\dfrac{2\\pi}{3}$.",
      "options": {
        "1": "$\\sqrt{3}$",
        "2": "$-\\sqrt{3}$",
        "3": "$\\frac{1}{\\sqrt{3}}$",
        "4": "$\\frac{-1}{\\sqrt{3}}$",
        "5": "$-1$"
      },
      "blanks": null,
      "answer": "2",
      "explanation": "$\\frac{2\\pi}{3}$ is in the 2nd quadrant with reference angle $\\frac{\\pi}{3}$; tangent is negative there: $-\\tan\\frac{\\pi}{3}=-\\sqrt{3}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-09-02",
      "chapter": "一、單選題",
      "number": "<2.>",
      "topic": "Composite function",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $f(x)=3x-2$ and $g\\circ f(x)=6x+1$, find $g(4)$.",
      "options": {
        "1": "$7$",
        "2": "$10$",
        "3": "$11$",
        "4": "$13$",
        "5": "$25$"
      },
      "blanks": null,
      "answer": "4",
      "explanation": "$g(4)$ needs $f(x)=4$: $3x-2=4\\Rightarrow x=2$, so $g(4)=g(f(2))=6\\cdot 2+1=13$. ($25$ is $6\\cdot4+1$, which wrongly puts $4$ into $g\\circ f$.)",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-09-03",
      "chapter": "一、單選題",
      "number": "<3.>",
      "topic": "Line equation",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Determine the equation of the line having slope(斜率) $\\frac{-2}{3}$ and passing through the point $(4,-1)$.",
      "options": {
        "1": "$y+1=\\frac{-2}{3}(x-4)$",
        "2": "$y-1=\\frac{-2}{3}(x+4)$",
        "3": "$x+1=\\frac{-2}{3}(y-4)$",
        "4": "$y-4=\\frac{-2}{3}(x+1)$",
        "5": "$y+1=\\frac{3}{2}(x-4)$"
      },
      "blanks": null,
      "answer": "1",
      "explanation": "Point-slope form $y-y_0=m(x-x_0)$ with $(x_0,y_0)=(4,-1)$: $y-(-1)=\\frac{-2}{3}(x-4)$, i.e. $y+1=\\frac{-2}{3}(x-4)$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-09-04",
      "chapter": "一、單選題",
      "number": "<4.>",
      "topic": "Limit by substitution",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Find $\\displaystyle\\lim_{x\\to 2}\\sqrt{x^3+3x+2}$.",
      "options": {
        "1": "$\\nexists$",
        "2": "$2$",
        "3": "$4$",
        "4": "$2\\sqrt{2}$",
        "5": "$16$"
      },
      "blanks": null,
      "answer": "3",
      "explanation": "The function is continuous at $2$: $\\sqrt{8+6+2}=\\sqrt{16}=4$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-09-05",
      "chapter": "一、單選題",
      "number": "<5.>",
      "topic": "Limit of a piecewise function",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $f(x)=\\begin{cases}x^2-1, & \\text{if } x<2\\\\ 2x-1, & \\text{if } x>2\\end{cases}$, find $\\displaystyle\\lim_{x\\to 2}f(x)$.",
      "options": {
        "1": "$\\nexists$",
        "2": "$7$",
        "3": "$5$",
        "4": "$4$",
        "5": "$3$"
      },
      "blanks": null,
      "answer": "5",
      "explanation": "Left: $2^2-1=3$. Right: $2\\cdot2-1=3$. Both one-sided limits are $3$, so the limit is $3$ (even though $f(2)$ is undefined).",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-09-06",
      "chapter": "一、單選題",
      "number": "<6.>",
      "topic": "Limit by substitution (trig)",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Find $\\displaystyle\\lim_{x\\to 0}\\frac{5-2x+6\\cos\\left(\\frac{\\pi}{6}+x\\right)}{1+\\tan x}$.",
      "options": {
        "1": "$5$",
        "2": "$8$",
        "3": "$5+3\\sqrt{3}$",
        "4": "$3\\sqrt{3}$",
        "5": "$\\nexists$"
      },
      "blanks": null,
      "answer": "3",
      "explanation": "Everything is continuous at $0$: $\\dfrac{5-0+6\\cos\\frac{\\pi}{6}}{1+0}=5+6\\cdot\\frac{\\sqrt{3}}{2}=5+3\\sqrt{3}$. ($8$ uses $\\sin\\frac{\\pi}{6}=\\frac{1}{2}$ by mistake.)",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-09-07",
      "chapter": "一、單選題",
      "number": "<7.>",
      "topic": "Greatest integer limit",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "$[\\![\\cdot]\\!]$ is the greatest integer function, determine $\\displaystyle\\lim_{x\\to 116^+}[\\![x-3]\\!]$.",
      "options": {
        "1": "$112$",
        "2": "$113$",
        "3": "$113^+$",
        "4": "$114$",
        "5": "$\\nexists$"
      },
      "blanks": null,
      "answer": "2",
      "explanation": "For $x$ slightly more than $116$, $x-3$ is slightly more than $113$, so $[\\![x-3]\\!]=113$. A limit is a number, so $113^+$ is not an answer.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-09-08",
      "chapter": "一、單選題",
      "number": "<8.>",
      "topic": "Composite with piecewise",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $f(x)=\\begin{cases}x+3, & \\text{if } x<1\\\\ x^2, & \\text{if } x\\ge 1\\end{cases}$ and $g(x)=2x-5$, find $g\\circ f(2)=$",
      "options": {
        "1": "$3$",
        "2": "$5$",
        "3": "$0$",
        "4": "$-1$",
        "5": "$\\nexists$"
      },
      "blanks": null,
      "answer": "1",
      "explanation": "$2\\ge 1$, so $f(2)=2^2=4$, then $g(4)=8-5=3$. ($5$ uses the other piece: $f(2)=5$.)",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-09-09",
      "chapter": "一、單選題",
      "number": "<9.>",
      "topic": "Slope",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Find the slope of the line that passes through $(-2,7)$ and $(4,-5)$.",
      "options": {
        "1": "$2$",
        "2": "$\\frac{1}{2}$",
        "3": "$\\frac{-1}{2}$",
        "4": "$-2$",
        "5": "$0$"
      },
      "blanks": null,
      "answer": "4",
      "explanation": "$m=\\dfrac{-5-7}{4-(-2)}=\\dfrac{-12}{6}=-2$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-09-10",
      "chapter": "一、單選題",
      "number": "<10.>",
      "topic": "Continuity",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which one of the following options is continuous(連續) at $x=0$?",
      "options": {
        "1": "$f(x)=\\dfrac{1}{x^2-x}$",
        "2": "$f(x)=\\sqrt{x-1}$",
        "3": "$f(x)=\\begin{cases}\\dfrac{x}{|x|}, & x\\ne 0\\\\ 0, & x=0\\end{cases}$",
        "4": "$f(x)=\\sec x$",
        "5": "$f(x)=\\begin{cases}\\dfrac{1-\\cos x}{x^2}, & x\\ne 0\\\\ 1, & x=0\\end{cases}$"
      },
      "blanks": null,
      "answer": "4",
      "explanation": "$\\sec x=\\frac{1}{\\cos x}$ and $\\cos 0=1\\ne 0$, so $\\sec x$ is continuous at $0$. (1), (2) are undefined at $0$; in (3) the one-sided limits are $-1$ and $1$; in (5) the limit is $\\frac{1}{2}\\ne f(0)=1$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-09-11",
      "chapter": "一、單選題",
      "number": "<11.>",
      "topic": "Squeeze theorem",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "It is known that $2\\cos x\\le f(x)\\le x^2+2$ for $-1<x<1$, determine $\\displaystyle\\lim_{x\\to 0}f(x)$.",
      "options": {
        "1": "$0$",
        "2": "$1$",
        "3": "$3$",
        "4": "$\\nexists$",
        "5": "$2$"
      },
      "blanks": null,
      "answer": "5",
      "explanation": "Both bounds tend to $2$ as $x\\to 0$ ($2\\cos 0=2$ and $0+2=2$), so by the squeeze theorem $\\lim_{x\\to 0}f(x)=2$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-09-12",
      "chapter": "一、單選題",
      "number": "<12.>",
      "topic": "Graph reading: limits",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "The following Figure is the graph of $y=f(x)$, which one of the following options is **correct**?",
      "options": {
        "1": "$\\displaystyle\\lim_{x\\to -2^+}f(x)=\\infty$",
        "2": "$\\displaystyle\\lim_{x\\to 1}f(x)=3$",
        "3": "$\\displaystyle\\lim_{x\\to -\\infty}f(x)=0$",
        "4": "$\\displaystyle\\lim_{x\\to -2}f(x)=0$",
        "5": "$\\displaystyle\\lim_{x\\to 3}f(x)=1$"
      },
      "blanks": null,
      "answer": "5",
      "explanation": "Both sides of $x=3$ approach the open circle $(3,1)$, so the limit is $1$ (the dot $f(3)=-1$ doesn't count). (1) ✗ from the right $f\\to 0$. (2) ✗ left limit $3$, right limit $1$. (3) ✗ the left branch levels off at $y=-1$. (4) ✗ from the left $f\\to+\\infty$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "figure": "<svg viewBox=\"0 0 400 302\" role=\"img\" aria-label=\"Graph of y = f(x): for x &lt; -2 the curve approaches the horizontal asymptote y = -1 on the left and rises to +∞ at the vertical asymptote x = -2. For -2 &lt; x ≤ 1 a line rises from an open circle at (-2,0) to a filled dot at (1,3). For 1 &lt; x &lt; 3 a horizontal segment at y = 1 runs from an open circle at (1,1) to an open circle at (3,1); a filled dot at (3,-1). For x &gt; 3 the curve rises from the open circle at (3,1) and approaches the horizontal asymptote y = 3 as x → ∞.\"><line class=\"grid\" x1=\"38\" y1=\"16\" x2=\"38\" y2=\"286\"/><line class=\"grid\" x1=\"74\" y1=\"16\" x2=\"74\" y2=\"286\"/><line class=\"grid\" x1=\"110\" y1=\"16\" x2=\"110\" y2=\"286\"/><line class=\"grid\" x1=\"146\" y1=\"16\" x2=\"146\" y2=\"286\"/><line class=\"grid\" x1=\"182\" y1=\"16\" x2=\"182\" y2=\"286\"/><line class=\"grid\" x1=\"218\" y1=\"16\" x2=\"218\" y2=\"286\"/><line class=\"grid\" x1=\"254\" y1=\"16\" x2=\"254\" y2=\"286\"/><line class=\"grid\" x1=\"290\" y1=\"16\" x2=\"290\" y2=\"286\"/><line class=\"grid\" x1=\"326\" y1=\"16\" x2=\"326\" y2=\"286\"/><line class=\"grid\" x1=\"362\" y1=\"16\" x2=\"362\" y2=\"286\"/><line class=\"grid\" x1=\"20\" y1=\"286\" x2=\"380\" y2=\"286\"/><line class=\"grid\" x1=\"20\" y1=\"250\" x2=\"380\" y2=\"250\"/><line class=\"grid\" x1=\"20\" y1=\"214\" x2=\"380\" y2=\"214\"/><line class=\"grid\" x1=\"20\" y1=\"178\" x2=\"380\" y2=\"178\"/><line class=\"grid\" x1=\"20\" y1=\"142\" x2=\"380\" y2=\"142\"/><line class=\"grid\" x1=\"20\" y1=\"106\" x2=\"380\" y2=\"106\"/><line class=\"grid\" x1=\"20\" y1=\"70\" x2=\"380\" y2=\"70\"/><line class=\"grid\" x1=\"20\" y1=\"34\" x2=\"380\" y2=\"34\"/><line class=\"axis\" x1=\"20\" y1=\"178\" x2=\"380\" y2=\"178\"/><line class=\"axis\" x1=\"182\" y1=\"16\" x2=\"182\" y2=\"286\"/><text x=\"38\" y=\"193\" text-anchor=\"middle\">-4</text><text x=\"74\" y=\"193\" text-anchor=\"middle\">-3</text><text x=\"110\" y=\"193\" text-anchor=\"middle\">-2</text><text x=\"146\" y=\"193\" text-anchor=\"middle\">-1</text><text x=\"218\" y=\"193\" text-anchor=\"middle\">1</text><text x=\"254\" y=\"193\" text-anchor=\"middle\">2</text><text x=\"290\" y=\"193\" text-anchor=\"middle\">3</text><text x=\"326\" y=\"193\" text-anchor=\"middle\">4</text><text x=\"362\" y=\"193\" text-anchor=\"middle\">5</text><text x=\"176\" y=\"290\" text-anchor=\"end\">-3</text><text x=\"176\" y=\"254\" text-anchor=\"end\">-2</text><text x=\"176\" y=\"218\" text-anchor=\"end\">-1</text><text x=\"176\" y=\"146\" text-anchor=\"end\">1</text><text x=\"176\" y=\"110\" text-anchor=\"end\">2</text><text x=\"176\" y=\"74\" text-anchor=\"end\">3</text><text x=\"176\" y=\"38\" text-anchor=\"end\">4</text><line class=\"curve\" stroke-dasharray=\"5 5\" stroke-width=\"1.2\" x1=\"20\" y1=\"214\" x2=\"110\" y2=\"214\"/><line class=\"curve\" stroke-dasharray=\"5 5\" stroke-width=\"1.2\" x1=\"110\" y1=\"16\" x2=\"110\" y2=\"286\"/><line class=\"curve\" stroke-dasharray=\"5 5\" stroke-width=\"1.2\" x1=\"290\" y1=\"70\" x2=\"380\" y2=\"70\"/><path class=\"curve\" d=\"M20.0,199.6 L21.4,199.4 L22.8,199.1 L24.2,198.9 L25.5,198.7 L26.9,198.4 L28.3,198.1 L29.7,197.9 L31.1,197.6 L32.5,197.3 L33.9,197.0 L35.2,196.7 L36.6,196.3 L38.0,196.0 L39.4,195.6 L40.8,195.3 L42.2,194.9 L43.6,194.5 L44.9,194.1 L46.3,193.6 L47.7,193.2 L49.1,192.7 L50.5,192.2 L51.9,191.7 L53.3,191.2 L54.6,190.6 L56.0,190.0 L57.4,189.4 L58.8,188.7 L60.2,188.0 L61.6,187.2 L63.0,186.4 L64.4,185.6 L65.7,184.7 L67.1,183.8 L68.5,182.8 L69.9,181.7 L71.3,180.5 L72.7,179.3 L74.1,177.9 L75.4,176.5 L76.8,174.9 L78.2,173.2 L79.6,171.4 L81.0,169.3 L82.4,167.1 L83.8,164.6 L85.1,161.9 L86.5,158.8 L87.9,155.3 L89.3,151.4 L90.7,146.9 L92.1,141.7 L93.5,135.7 L94.8,128.5 L96.2,119.9 L97.6,109.3 L99.0,96.2 L100.4,79.2 L101.8,56.5 L103.2,24.5\"/><path class=\"curve\" d=\"M110.0,178.0 L112.7,175.3 L115.4,172.6 L118.1,169.9 L120.8,167.2 L123.5,164.5 L126.2,161.8 L128.9,159.1 L131.6,156.4 L134.3,153.7 L137.0,151.0 L139.7,148.3 L142.4,145.6 L145.1,142.9 L147.8,140.2 L150.5,137.5 L153.2,134.8 L155.9,132.1 L158.6,129.4 L161.3,126.7 L164.0,124.0 L166.7,121.3 L169.4,118.6 L172.1,115.9 L174.8,113.2 L177.5,110.5 L180.2,107.8 L182.9,105.1 L185.6,102.4 L188.3,99.7 L191.0,97.0 L193.7,94.3 L196.4,91.6 L199.1,88.9 L201.8,86.2 L204.5,83.5 L207.2,80.8 L209.9,78.1 L212.6,75.4 L215.3,72.7 L218.0,70.0\"/><path class=\"curve\" d=\"M218.0,142.0 L221.6,142.0 L225.2,142.0 L228.8,142.0 L232.4,142.0 L236.0,142.0 L239.6,142.0 L243.2,142.0 L246.8,142.0 L250.4,142.0 L254.0,142.0 L257.6,142.0 L261.2,142.0 L264.8,142.0 L268.4,142.0 L272.0,142.0 L275.6,142.0 L279.2,142.0 L282.8,142.0 L286.4,142.0 L290.0,142.0\"/><path class=\"curve\" d=\"M290.0,142.0 L292.2,137.8 L294.5,134.0 L296.8,130.6 L299.0,127.6 L301.2,124.9 L303.5,122.4 L305.8,120.1 L308.0,118.0 L310.2,116.1 L312.5,114.3 L314.8,112.7 L317.0,111.1 L319.2,109.7 L321.5,108.4 L323.8,107.2 L326.0,106.0 L328.2,104.9 L330.5,103.9 L332.8,102.9 L335.0,102.0 L337.2,101.1 L339.5,100.3 L341.8,99.5 L344.0,98.8 L346.2,98.1 L348.5,97.4 L350.8,96.8 L353.0,96.2 L355.2,95.6 L357.5,95.0 L359.8,94.5 L362.0,94.0 L364.2,93.5 L366.5,93.0 L368.8,92.6 L371.0,92.2 L373.2,91.7 L375.5,91.3 L377.8,90.9 L380.0,90.6\"/><circle class=\"dot\" cx=\"218.0\" cy=\"70.0\" r=\"4.5\"/><circle class=\"dot\" cx=\"290.0\" cy=\"214.0\" r=\"4.5\"/><circle class=\"open\" cx=\"110.0\" cy=\"178.0\" r=\"4.5\"/><circle class=\"open\" cx=\"218.0\" cy=\"142.0\" r=\"4.5\"/><circle class=\"open\" cx=\"290.0\" cy=\"142.0\" r=\"4.5\"/><text x=\"376\" y=\"296\" text-anchor=\"end\">Figure</text></svg>"
    },
    {
      "id": "math-2026-11-09-13",
      "chapter": "一、單選題",
      "number": "<13.>",
      "topic": "Graph reading: continuity & asymptotes",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Accept the question <12.>, which one of the following options is **wrong**?",
      "options": {
        "1": "$f$ is continuous at $x=3$.",
        "2": "$f$ is continuous at $x=0$.",
        "3": "$f$ is left-continuous at $x=1$.",
        "4": "$f$ has exactly two horizontal(水平的) asymptotes(漸近線).",
        "5": "$x=-2$ is a vertical(垂直的) asymptote of the graph of $f$."
      },
      "blanks": null,
      "answer": "1",
      "explanation": "$\\lim_{x\\to3}f(x)=1$ but $f(3)=-1$, so $f$ is not continuous at $3$. The others are true: near $0$ the graph is the line $y=x+2$; $\\lim_{x\\to1^-}f=3=f(1)$; horizontal asymptotes $y=-1$ and $y=3$; $f\\to+\\infty$ as $x\\to-2^-$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "figure": "<svg viewBox=\"0 0 400 302\" role=\"img\" aria-label=\"Graph of y = f(x): for x &lt; -2 the curve approaches the horizontal asymptote y = -1 on the left and rises to +∞ at the vertical asymptote x = -2. For -2 &lt; x ≤ 1 a line rises from an open circle at (-2,0) to a filled dot at (1,3). For 1 &lt; x &lt; 3 a horizontal segment at y = 1 runs from an open circle at (1,1) to an open circle at (3,1); a filled dot at (3,-1). For x &gt; 3 the curve rises from the open circle at (3,1) and approaches the horizontal asymptote y = 3 as x → ∞.\"><line class=\"grid\" x1=\"38\" y1=\"16\" x2=\"38\" y2=\"286\"/><line class=\"grid\" x1=\"74\" y1=\"16\" x2=\"74\" y2=\"286\"/><line class=\"grid\" x1=\"110\" y1=\"16\" x2=\"110\" y2=\"286\"/><line class=\"grid\" x1=\"146\" y1=\"16\" x2=\"146\" y2=\"286\"/><line class=\"grid\" x1=\"182\" y1=\"16\" x2=\"182\" y2=\"286\"/><line class=\"grid\" x1=\"218\" y1=\"16\" x2=\"218\" y2=\"286\"/><line class=\"grid\" x1=\"254\" y1=\"16\" x2=\"254\" y2=\"286\"/><line class=\"grid\" x1=\"290\" y1=\"16\" x2=\"290\" y2=\"286\"/><line class=\"grid\" x1=\"326\" y1=\"16\" x2=\"326\" y2=\"286\"/><line class=\"grid\" x1=\"362\" y1=\"16\" x2=\"362\" y2=\"286\"/><line class=\"grid\" x1=\"20\" y1=\"286\" x2=\"380\" y2=\"286\"/><line class=\"grid\" x1=\"20\" y1=\"250\" x2=\"380\" y2=\"250\"/><line class=\"grid\" x1=\"20\" y1=\"214\" x2=\"380\" y2=\"214\"/><line class=\"grid\" x1=\"20\" y1=\"178\" x2=\"380\" y2=\"178\"/><line class=\"grid\" x1=\"20\" y1=\"142\" x2=\"380\" y2=\"142\"/><line class=\"grid\" x1=\"20\" y1=\"106\" x2=\"380\" y2=\"106\"/><line class=\"grid\" x1=\"20\" y1=\"70\" x2=\"380\" y2=\"70\"/><line class=\"grid\" x1=\"20\" y1=\"34\" x2=\"380\" y2=\"34\"/><line class=\"axis\" x1=\"20\" y1=\"178\" x2=\"380\" y2=\"178\"/><line class=\"axis\" x1=\"182\" y1=\"16\" x2=\"182\" y2=\"286\"/><text x=\"38\" y=\"193\" text-anchor=\"middle\">-4</text><text x=\"74\" y=\"193\" text-anchor=\"middle\">-3</text><text x=\"110\" y=\"193\" text-anchor=\"middle\">-2</text><text x=\"146\" y=\"193\" text-anchor=\"middle\">-1</text><text x=\"218\" y=\"193\" text-anchor=\"middle\">1</text><text x=\"254\" y=\"193\" text-anchor=\"middle\">2</text><text x=\"290\" y=\"193\" text-anchor=\"middle\">3</text><text x=\"326\" y=\"193\" text-anchor=\"middle\">4</text><text x=\"362\" y=\"193\" text-anchor=\"middle\">5</text><text x=\"176\" y=\"290\" text-anchor=\"end\">-3</text><text x=\"176\" y=\"254\" text-anchor=\"end\">-2</text><text x=\"176\" y=\"218\" text-anchor=\"end\">-1</text><text x=\"176\" y=\"146\" text-anchor=\"end\">1</text><text x=\"176\" y=\"110\" text-anchor=\"end\">2</text><text x=\"176\" y=\"74\" text-anchor=\"end\">3</text><text x=\"176\" y=\"38\" text-anchor=\"end\">4</text><line class=\"curve\" stroke-dasharray=\"5 5\" stroke-width=\"1.2\" x1=\"20\" y1=\"214\" x2=\"110\" y2=\"214\"/><line class=\"curve\" stroke-dasharray=\"5 5\" stroke-width=\"1.2\" x1=\"110\" y1=\"16\" x2=\"110\" y2=\"286\"/><line class=\"curve\" stroke-dasharray=\"5 5\" stroke-width=\"1.2\" x1=\"290\" y1=\"70\" x2=\"380\" y2=\"70\"/><path class=\"curve\" d=\"M20.0,199.6 L21.4,199.4 L22.8,199.1 L24.2,198.9 L25.5,198.7 L26.9,198.4 L28.3,198.1 L29.7,197.9 L31.1,197.6 L32.5,197.3 L33.9,197.0 L35.2,196.7 L36.6,196.3 L38.0,196.0 L39.4,195.6 L40.8,195.3 L42.2,194.9 L43.6,194.5 L44.9,194.1 L46.3,193.6 L47.7,193.2 L49.1,192.7 L50.5,192.2 L51.9,191.7 L53.3,191.2 L54.6,190.6 L56.0,190.0 L57.4,189.4 L58.8,188.7 L60.2,188.0 L61.6,187.2 L63.0,186.4 L64.4,185.6 L65.7,184.7 L67.1,183.8 L68.5,182.8 L69.9,181.7 L71.3,180.5 L72.7,179.3 L74.1,177.9 L75.4,176.5 L76.8,174.9 L78.2,173.2 L79.6,171.4 L81.0,169.3 L82.4,167.1 L83.8,164.6 L85.1,161.9 L86.5,158.8 L87.9,155.3 L89.3,151.4 L90.7,146.9 L92.1,141.7 L93.5,135.7 L94.8,128.5 L96.2,119.9 L97.6,109.3 L99.0,96.2 L100.4,79.2 L101.8,56.5 L103.2,24.5\"/><path class=\"curve\" d=\"M110.0,178.0 L112.7,175.3 L115.4,172.6 L118.1,169.9 L120.8,167.2 L123.5,164.5 L126.2,161.8 L128.9,159.1 L131.6,156.4 L134.3,153.7 L137.0,151.0 L139.7,148.3 L142.4,145.6 L145.1,142.9 L147.8,140.2 L150.5,137.5 L153.2,134.8 L155.9,132.1 L158.6,129.4 L161.3,126.7 L164.0,124.0 L166.7,121.3 L169.4,118.6 L172.1,115.9 L174.8,113.2 L177.5,110.5 L180.2,107.8 L182.9,105.1 L185.6,102.4 L188.3,99.7 L191.0,97.0 L193.7,94.3 L196.4,91.6 L199.1,88.9 L201.8,86.2 L204.5,83.5 L207.2,80.8 L209.9,78.1 L212.6,75.4 L215.3,72.7 L218.0,70.0\"/><path class=\"curve\" d=\"M218.0,142.0 L221.6,142.0 L225.2,142.0 L228.8,142.0 L232.4,142.0 L236.0,142.0 L239.6,142.0 L243.2,142.0 L246.8,142.0 L250.4,142.0 L254.0,142.0 L257.6,142.0 L261.2,142.0 L264.8,142.0 L268.4,142.0 L272.0,142.0 L275.6,142.0 L279.2,142.0 L282.8,142.0 L286.4,142.0 L290.0,142.0\"/><path class=\"curve\" d=\"M290.0,142.0 L292.2,137.8 L294.5,134.0 L296.8,130.6 L299.0,127.6 L301.2,124.9 L303.5,122.4 L305.8,120.1 L308.0,118.0 L310.2,116.1 L312.5,114.3 L314.8,112.7 L317.0,111.1 L319.2,109.7 L321.5,108.4 L323.8,107.2 L326.0,106.0 L328.2,104.9 L330.5,103.9 L332.8,102.9 L335.0,102.0 L337.2,101.1 L339.5,100.3 L341.8,99.5 L344.0,98.8 L346.2,98.1 L348.5,97.4 L350.8,96.8 L353.0,96.2 L355.2,95.6 L357.5,95.0 L359.8,94.5 L362.0,94.0 L364.2,93.5 L366.5,93.0 L368.8,92.6 L371.0,92.2 L373.2,91.7 L375.5,91.3 L377.8,90.9 L380.0,90.6\"/><circle class=\"dot\" cx=\"218.0\" cy=\"70.0\" r=\"4.5\"/><circle class=\"dot\" cx=\"290.0\" cy=\"214.0\" r=\"4.5\"/><circle class=\"open\" cx=\"110.0\" cy=\"178.0\" r=\"4.5\"/><circle class=\"open\" cx=\"218.0\" cy=\"142.0\" r=\"4.5\"/><circle class=\"open\" cx=\"290.0\" cy=\"142.0\" r=\"4.5\"/><text x=\"376\" y=\"296\" text-anchor=\"end\">Figure</text></svg>"
    },
    {
      "id": "math-2026-11-09-14",
      "chapter": "一、單選題",
      "number": "<14.>",
      "topic": "Vertical asymptote",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which one of the following options has a vertical asymptote at $x=3$? ($[\\![\\cdot]\\!]$ is the greatest integer function.)",
      "options": {
        "1": "$f(x)=\\dfrac{x^2-9}{x-3}$",
        "2": "$f(x)=[\\![x-3]\\!]$",
        "3": "$f(x)=\\dfrac{x+3}{x^2-2x-3}$",
        "4": "$f(x)=\\dfrac{x^2-4x+3}{x^2-9}$",
        "5": "$f(x)=\\dfrac{\\sin(x-3)}{x-3}$"
      },
      "blanks": null,
      "answer": "3",
      "explanation": "$x^2-2x-3=(x-3)(x+1)$ and the top is $6\\ne0$ at $x=3$, so $f\\to\\pm\\infty$ there. (1) and (4) cancel $x-3$ (holes); (2) only jumps; (5) tends to $1$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-09-15",
      "chapter": "一、單選題",
      "number": "<15.>",
      "topic": "Trig limit",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Find $\\displaystyle\\lim_{x\\to 0}\\frac{1-\\cos 4x}{x\\sin 6x}$.",
      "options": {
        "1": "$\\frac{2}{3}$",
        "2": "$\\frac{4}{3}$",
        "3": "$\\frac{3}{2}$",
        "4": "$\\frac{8}{3}$",
        "5": "$2$"
      },
      "blanks": null,
      "answer": "2",
      "explanation": "$1-\\cos 4x\\approx\\frac{(4x)^2}{2}=8x^2$ and $x\\sin 6x\\approx 6x^2$, so the limit is $\\frac{8}{6}=\\frac{4}{3}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-11-09-16",
      "chapter": "二、複選題",
      "number": "<16.>",
      "topic": "Limit theory",
      "type": "multi_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將正確答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which of the following options are **wrong**?",
      "options": {
        "1": "If $\\displaystyle\\lim_{x\\to a}f(x)=L$, then $\\displaystyle\\lim_{x\\to a^-}f(x)=L$.",
        "2": "If $f(a)=L$, then $\\displaystyle\\lim_{x\\to a}f(x)=L$.",
        "3": "If $\\displaystyle\\lim_{x\\to a}f(x)$ and $\\displaystyle\\lim_{x\\to a}g(x)$ both exist, then $\\displaystyle\\lim_{x\\to a}\\big(f(x)+g(x)\\big)$ exists.",
        "4": "$\\displaystyle\\lim_{x\\to 0}\\frac{|x|}{x}=1$",
        "5": "$\\displaystyle\\lim_{x\\to 0^-}\\frac{1}{x}=-\\infty$"
      },
      "blanks": null,
      "answer": [
        "2",
        "4"
      ],
      "explanation": "(2) ✗ the value $f(a)$ says nothing about nearby values, e.g. a jump at $a$. (4) ✗ from the right the quotient is $1$, from the left $-1$, so the limit does not exist. (1), (3), (5) are true.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5
    },
    {
      "id": "math-2026-11-09-17",
      "chapter": "二、複選題",
      "number": "<17.>",
      "topic": "Continuity theory + IVT",
      "type": "multi_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將正確答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which of the following options are **correct**?",
      "options": {
        "1": "If $f$ is continuous on $[a,b]$ and $f(a)<k<f(b)$, then $f(c)=k$ for some $c$ in $(a,b)$.",
        "2": "If $f$ and $g$ are both continuous at $x=a$, then $\\dfrac{f}{g}$ is continuous at $x=a$.",
        "3": "$f(x)=|x|$ is continuous at $x=0$.",
        "4": "$f(x)=\\dfrac{1}{x-1}$ is continuous on $[2,3]$.",
        "5": "There is a root of the equation $x^3+2x+1=0$ between $0$ and $1$."
      },
      "blanks": null,
      "answer": [
        "1",
        "3",
        "4"
      ],
      "explanation": "(1) is the Intermediate Value Theorem. (2) ✗ it fails when $g(a)=0$. (3) $|x|\\to 0=f(0)$. (4) the only problem point is $x=1$, outside $[2,3]$. (5) ✗ $x^3+2x+1\\ge 1>0$ on $[0,1]$ ($f(0)=1$, $f(1)=4$, and $f$ is increasing), so there is no root.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5
    },
    {
      "id": "math-2026-11-09-18",
      "chapter": "二、複選題",
      "number": "<18.>",
      "topic": "Rational function: asymptotes",
      "type": "multi_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將正確答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $f(x)=\\dfrac{x^3+8}{x^2-1}$, which of the following options are **correct**?",
      "options": {
        "1": "$\\displaystyle\\lim_{x\\to -1^+}f(x)=\\infty$",
        "2": "$\\displaystyle\\lim_{x\\to 1^+}f(x)=\\infty$",
        "3": "$y=x$ is an oblique(傾斜的) asymptote of the graph of $f$.",
        "4": "$\\displaystyle\\lim_{x\\to -\\infty}f(x)=-\\infty$",
        "5": "$x=-2$ is a vertical(垂直的) asymptote of the graph of $f$."
      },
      "blanks": null,
      "answer": [
        "2",
        "3",
        "4"
      ],
      "explanation": "(1) ✗ at $-1^+$ we have $x^2<1$, so the bottom $\\to 0^-$ while the top $\\to 7$: $f\\to-\\infty$. (2) $\\frac{9}{0^+}\\to\\infty$. (3) $x^3+8=(x^2-1)x+(x+8)$, so the oblique asymptote is $y=x$. (4) $f\\approx x\\to-\\infty$. (5) ✗ $f(-2)=0$, a zero, not an asymptote.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5
    },
    {
      "id": "math-2026-11-09-19",
      "chapter": "二、複選題",
      "number": "<19.>",
      "topic": "sin kx / x and x sin(k/x)",
      "type": "multi_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將正確答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which of the following options are **wrong**?",
      "options": {
        "1": "$\\displaystyle\\lim_{x\\to 0}\\frac{\\sin 5x}{3x}=\\frac{5}{3}$",
        "2": "$\\displaystyle\\lim_{x\\to\\infty}\\frac{\\sin 5x}{3x}=\\frac{5}{3}$",
        "3": "$\\displaystyle\\lim_{x\\to 0}3x\\sin\\frac{5}{x}=15$",
        "4": "$\\displaystyle\\lim_{x\\to\\infty}3x\\sin\\frac{5}{x}=15$",
        "5": "$\\displaystyle\\lim_{x\\to\\infty}\\cos\\frac{5}{x}=1$"
      },
      "blanks": null,
      "answer": [
        "2",
        "3"
      ],
      "explanation": "(2) ✗ $|\\sin 5x|\\le 1$, so $\\frac{\\sin 5x}{3x}$ is squeezed to $0$. (3) ✗ $|3x\\sin\\frac{5}{x}|\\le 3|x|\\to 0$. (1) $\\frac{5}{3}\\cdot\\frac{\\sin 5x}{5x}\\to\\frac{5}{3}$; (4) $15\\cdot\\frac{\\sin(5/x)}{5/x}\\to 15$; (5) $\\frac{5}{x}\\to 0$ and $\\cos 0=1$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5
    },
    {
      "id": "math-2026-11-09-20",
      "chapter": "三、選填題",
      "number": "A",
      "topic": "Limit laws",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題的答案，均以最簡單分數作答，劃填至答案卡上指定的題號內，否則不予計分)",
      "stem": "If $\\displaystyle\\lim_{x\\to 2}f(x)=3$ and $\\displaystyle\\lim_{x\\to 2}g(x)=-1$; then $\\displaystyle\\lim_{x\\to 2}\\frac{f^2(x)-4g(x)}{3f(x)+g(x)}=\\dfrac{\\boxed{20}\\boxed{21}}{\\boxed{22}}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "$\\dfrac{9-4(-1)}{9+(-1)}=\\dfrac{13}{8}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "slots": [
        {
          "n": 20,
          "v": "1"
        },
        {
          "n": 21,
          "v": "3"
        },
        {
          "n": 22,
          "v": "8"
        }
      ]
    },
    {
      "id": "math-2026-11-09-21",
      "chapter": "三、選填題",
      "number": "B",
      "topic": "Trig limit",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題的答案，均以最簡單分數作答，劃填至答案卡上指定的題號內，否則不予計分)",
      "stem": "If $f(x)=\\begin{cases}\\dfrac{1-\\cos 7x}{4x^2}, & x\\ne 0\\\\[4pt] \\dfrac{7}{4}, & x=0\\end{cases}$, then $\\displaystyle\\lim_{x\\to 0}f(x)=\\dfrac{\\boxed{23}\\boxed{24}}{\\boxed{25}}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "$\\dfrac{1-\\cos 7x}{x^2}\\to\\dfrac{49}{2}$; divide by $4$: $\\dfrac{49}{8}$. The value $f(0)=\\frac{7}{4}$ does not affect the limit.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "slots": [
        {
          "n": 23,
          "v": "4"
        },
        {
          "n": 24,
          "v": "9"
        },
        {
          "n": 25,
          "v": "8"
        }
      ]
    },
    {
      "id": "math-2026-11-09-22",
      "chapter": "三、選填題",
      "number": "C",
      "topic": "Piecewise continuity",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題的答案，均以最簡單分數作答，劃填至答案卡上指定的題號內，否則不予計分)",
      "stem": "If $f(x)=\\begin{cases}2x+1, & x\\le -2\\\\ x^2+ax+b, & -2<x<1\\\\ 9, & x\\ge 1\\end{cases}$ is a continuous function, then $2a+b=\\boxed{26}\\boxed{27}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "At $x=-2$: $4-2a+b=-3$. At $x=1$: $1+a+b=9$. So $b-2a=-7$ and $a+b=8$, giving $a=5$, $b=3$, and $2a+b=13$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "slots": [
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
      "id": "math-2026-11-09-23",
      "chapter": "三、選填題",
      "number": "D",
      "topic": "0/0 limit with nested radicals",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題的答案，均以最簡單分數作答，劃填至答案卡上指定的題號內，否則不予計分)",
      "stem": "Evaluate $\\displaystyle\\lim_{x\\to 1}\\frac{\\sqrt{8+\\sqrt{x}}-3}{x-1}=\\dfrac{\\boxed{28}}{\\boxed{29}\\boxed{30}}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "Let $u=\\sqrt{8+\\sqrt{x}}\\to 3$. $u^2-9=\\sqrt{x}-1=\\dfrac{x-1}{\\sqrt{x}+1}$, so $\\dfrac{u-3}{x-1}=\\dfrac{1}{(u+3)(\\sqrt{x}+1)}\\to\\dfrac{1}{6\\cdot 2}=\\dfrac{1}{12}$.",
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
          "v": "1"
        },
        {
          "n": 30,
          "v": "2"
        }
      ]
    },
    {
      "id": "math-2026-11-09-24",
      "chapter": "三、選填題",
      "number": "E",
      "topic": "Removable discontinuity",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題的答案，均以最簡單分數作答，劃填至答案卡上指定的題號內，否則不予計分)",
      "stem": "If $f(x)=\\begin{cases}\\dfrac{x^2+ax+b}{x+4}, & x\\ne -4\\\\[4pt] -1, & x=-4\\end{cases}$ is a continuous function, then $a+b=\\boxed{31}\\boxed{32}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "The top must be $0$ at $-4$, so $x^2+ax+b=(x+4)(x+k)$ and $f(x)=x+k$ for $x\\ne-4$. Continuity: $-4+k=-1\\Rightarrow k=3$. So $x^2+ax+b=(x+4)(x+3)=x^2+7x+12$: $a=7$, $b=12$, $a+b=19$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "slots": [
        {
          "n": 31,
          "v": "1"
        },
        {
          "n": 32,
          "v": "9"
        }
      ]
    }
  ]
};
