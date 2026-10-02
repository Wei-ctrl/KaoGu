// maths daily set for 2026-10-05. See prompts/weekly-routine.md.
(window.KAOGU_DAILY = window.KAOGU_DAILY || {})["maths"] = window.KAOGU_DAILY["maths"] || {};
window.KAOGU_DAILY["maths"]["2026-10-05"] = {
  "exam": "僑先部 數學（第二、三類組）期中模擬考 · Mock (113 format)",
  "questions": [
    {
      "id": "math-2026-10-05-01",
      "chapter": "一、單選題",
      "number": "<1.>",
      "topic": "Exact trig value",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Find $\\sin\\dfrac{7\\pi}{4}$.",
      "options": {
        "1": "$\\frac{\\sqrt{2}}{2}$",
        "2": "$\\frac{-\\sqrt{2}}{2}$",
        "3": "$\\frac{-1}{2}$",
        "4": "$\\frac{-\\sqrt{3}}{2}$",
        "5": "$1$"
      },
      "blanks": null,
      "answer": "2",
      "explanation": "$\\frac{7\\pi}{4}$ is in the 4th quadrant with reference angle $\\frac{\\pi}{4}$; sine is negative there: $-\\frac{\\sqrt{2}}{2}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-05-02",
      "chapter": "一、單選題",
      "number": "<2.>",
      "topic": "Composite function",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $f(x)=2x+1$ and $g\\circ f(x)=6x-1$, find $g(5)$.",
      "options": {
        "1": "$3$",
        "2": "$9$",
        "3": "$29$",
        "4": "$13$",
        "5": "$11$"
      },
      "blanks": null,
      "answer": "5",
      "explanation": "$g(5)=g(f(x))$ where $f(x)=5\\Rightarrow x=2$, so $g(5)=6(2)-1=11$. ($29$ wrongly puts $x=5$ into $6x-1$.)",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-05-03",
      "chapter": "一、單選題",
      "number": "<3.>",
      "topic": "Line equation",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Determine the equation of the line having slope(斜率) $\\frac{-3}{4}$ and passing through the point $(-1,4)$.",
      "options": {
        "1": "$y+4=\\frac{-3}{4}(x-1)$",
        "2": "$y-4=\\frac{-3}{4}(x-1)$",
        "3": "$x+1=\\frac{-3}{4}(y-4)$",
        "4": "$y+1=\\frac{-3}{4}(x-4)$",
        "5": "$y-4=\\frac{-3}{4}(x+1)$"
      },
      "blanks": null,
      "answer": "5",
      "explanation": "Point-slope form $y-y_1=m(x-x_1)$ with $(x_1,y_1)=(-1,4)$: $y-4=\\frac{-3}{4}(x+1)$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-05-04",
      "chapter": "一、單選題",
      "number": "<4.>",
      "topic": "Limit by substitution",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Find $\\displaystyle\\lim_{x\\to 3}\\sqrt{x^3-2x+6}$.",
      "options": {
        "1": "$\\nexists$",
        "2": "$3$",
        "3": "$3\\sqrt{3}$",
        "4": "$9$",
        "5": "$\\sqrt{21}$"
      },
      "blanks": null,
      "answer": "3",
      "explanation": "The function is continuous at $3$: $\\sqrt{27-6+6}=\\sqrt{27}=3\\sqrt{3}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-05-05",
      "chapter": "一、單選題",
      "number": "<5.>",
      "topic": "Limit of a piecewise function",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $f(x)=\\begin{cases}2x-1, & \\text{if } x<3\\\\ x^2-3, & \\text{if } x>3\\end{cases}$, find $\\displaystyle\\lim_{x\\to 3}f(x)$.",
      "options": {
        "1": "$\\nexists$",
        "2": "$3$",
        "3": "$5$",
        "4": "$6$",
        "5": "$9$"
      },
      "blanks": null,
      "answer": "1",
      "explanation": "Left limit $2(3)-1=5$, right limit $9-3=6$. They differ, so the limit does not exist.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-05-06",
      "chapter": "一、單選題",
      "number": "<6.>",
      "topic": "Limit by substitution (trig)",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Find $\\displaystyle\\lim_{x\\to 0}\\frac{2+3x+4\\cos\\left(\\frac{\\pi}{3}+x\\right)}{1+\\sin x}$.",
      "options": {
        "1": "$2$",
        "2": "$4$",
        "3": "$2+2\\sqrt{3}$",
        "4": "$6$",
        "5": "$\\nexists$"
      },
      "blanks": null,
      "answer": "2",
      "explanation": "Substitute $x=0$: $\\dfrac{2+0+4\\cos\\frac{\\pi}{3}}{1+0}=2+4\\cdot\\frac{1}{2}=4$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-05-07",
      "chapter": "一、單選題",
      "number": "<7.>",
      "topic": "Greatest integer limit",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "$[\\![\\cdot]\\!]$ is the greatest integer function, determine $\\displaystyle\\lim_{x\\to 114^-}[\\![x+1]\\!]$.",
      "options": {
        "1": "$113$",
        "2": "$114^-$",
        "3": "$115$",
        "4": "$114$",
        "5": "$\\nexists$"
      },
      "blanks": null,
      "answer": "4",
      "explanation": "For $x$ slightly less than $114$, $x+1$ is slightly less than $115$, so $[\\![x+1]\\!]=114$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-05-08",
      "chapter": "一、單選題",
      "number": "<8.>",
      "topic": "Composite with piecewise",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $f(x)=\\begin{cases}x-2, & \\text{if } x<1\\\\ 3x, & \\text{if } x\\ge 1\\end{cases}$ and $g(x)=x^2+1$, find $g\\circ f(0)=$",
      "options": {
        "1": "$1$",
        "2": "$3$",
        "3": "$5$",
        "4": "$9$",
        "5": "$\\nexists$"
      },
      "blanks": null,
      "answer": "3",
      "explanation": "$0<1$, so $f(0)=0-2=-2$; then $g(-2)=4+1=5$. ($3$ is $f\\circ g(0)=f(1)$.)",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-05-09",
      "chapter": "一、單選題",
      "number": "<9.>",
      "topic": "Slope",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Find the slope of the line that passes through $(3,-4)$ and $(-1,4)$.",
      "options": {
        "1": "$2$",
        "2": "$\\frac{1}{2}$",
        "3": "$0$",
        "4": "$\\frac{-1}{2}$",
        "5": "$-2$"
      },
      "blanks": null,
      "answer": "5",
      "explanation": "$m=\\dfrac{4-(-4)}{-1-3}=\\dfrac{8}{-4}=-2$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-05-10",
      "chapter": "一、單選題",
      "number": "<10.>",
      "topic": "Continuity",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which one of the following options is continuous(連續) at $x=0$? ($[\\![\\cdot]\\!]$ is the greatest integer function.)",
      "options": {
        "1": "$f(x)=\\dfrac{1}{x^3}$",
        "2": "$f(x)=\\sqrt{x-2}$",
        "3": "$f(x)=[\\![x]\\!]$",
        "4": "$f(x)=\\tan x$",
        "5": "$f(x)=\\begin{cases}\\dfrac{\\sin x}{x}, & x\\ne 0\\\\ 0, & x=0\\end{cases}$"
      },
      "blanks": null,
      "answer": "4",
      "explanation": "$\\tan x=\\frac{\\sin x}{\\cos x}$ and $\\cos 0=1\\ne 0$, so it is continuous at $0$. (1),(2) are undefined at $0$; $[\\![x]\\!]$ jumps at $0$; in (5) the limit is $1\\ne f(0)=0$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-05-11",
      "chapter": "一、單選題",
      "number": "<11.>",
      "topic": "Squeeze theorem",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "It is known that $\\sqrt{5+4\\cos x}\\le f(x)\\le |x|+3$ for $-1<x<1$, determine $\\displaystyle\\lim_{x\\to 0}f(x)$.",
      "options": {
        "1": "$3$",
        "2": "$9$",
        "3": "$\\sqrt{5}$",
        "4": "$4$",
        "5": "$\\nexists$"
      },
      "blanks": null,
      "answer": "1",
      "explanation": "Both bounds tend to $3$: $\\sqrt{5+4}=3$ and $0+3=3$. By the squeeze theorem the limit is $3$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-05-12",
      "chapter": "一、單選題",
      "number": "<12.>",
      "topic": "Graph reading: limits",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "The following Figure is the graph of $y=f(x)$, which one of the following options is **correct**?",
      "options": {
        "1": "$\\displaystyle\\lim_{x\\to -1}f(x)$ exists.",
        "2": "$\\displaystyle\\lim_{x\\to 1}f(x)=0$",
        "3": "$\\displaystyle\\lim_{x\\to 1}f(x)=2$",
        "4": "$\\displaystyle\\lim_{x\\to 3^-}f(x)=-\\infty$",
        "5": "$\\forall c\\in(-2,2)$, $\\displaystyle\\lim_{x\\to c}f(x)$ exists."
      },
      "blanks": null,
      "answer": "3",
      "explanation": "Near $x=1$ both sides approach the open circle at $(1,2)$, so the limit is $2$ (the dot $f(1)=0$ doesn't matter). At $x=-1$ the left limit is $3$ and the right limit is $0$; as $x\\to 3^-$ the graph goes to $+\\infty$; (5) fails at $c=-1$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "figure": "<svg viewBox=\"0 0 400 302\" role=\"img\" aria-label=\"Graph of y = f(x): for x &lt; -1 the curve comes in from the left along the horizontal asymptote y = 1 and rises to a filled dot at (-1,3). For -1 &lt; x &lt; 1 a line runs from an open circle at (-1,0) up to an open circle at (1,2); there is a filled dot at (1,0). For 1 &lt; x &lt; 3 the curve leaves (1,2) and rises to +∞ at the vertical asymptote x = 3. For x &gt; 3 the curve comes up from −∞ and approaches y = 0 as x → ∞.\"><line class=\"grid\" x1=\"38\" y1=\"16\" x2=\"38\" y2=\"286\"/><line class=\"grid\" x1=\"74\" y1=\"16\" x2=\"74\" y2=\"286\"/><line class=\"grid\" x1=\"110\" y1=\"16\" x2=\"110\" y2=\"286\"/><line class=\"grid\" x1=\"146\" y1=\"16\" x2=\"146\" y2=\"286\"/><line class=\"grid\" x1=\"182\" y1=\"16\" x2=\"182\" y2=\"286\"/><line class=\"grid\" x1=\"218\" y1=\"16\" x2=\"218\" y2=\"286\"/><line class=\"grid\" x1=\"254\" y1=\"16\" x2=\"254\" y2=\"286\"/><line class=\"grid\" x1=\"290\" y1=\"16\" x2=\"290\" y2=\"286\"/><line class=\"grid\" x1=\"326\" y1=\"16\" x2=\"326\" y2=\"286\"/><line class=\"grid\" x1=\"362\" y1=\"16\" x2=\"362\" y2=\"286\"/><line class=\"grid\" x1=\"20\" y1=\"286\" x2=\"380\" y2=\"286\"/><line class=\"grid\" x1=\"20\" y1=\"250\" x2=\"380\" y2=\"250\"/><line class=\"grid\" x1=\"20\" y1=\"214\" x2=\"380\" y2=\"214\"/><line class=\"grid\" x1=\"20\" y1=\"178\" x2=\"380\" y2=\"178\"/><line class=\"grid\" x1=\"20\" y1=\"142\" x2=\"380\" y2=\"142\"/><line class=\"grid\" x1=\"20\" y1=\"106\" x2=\"380\" y2=\"106\"/><line class=\"grid\" x1=\"20\" y1=\"70\" x2=\"380\" y2=\"70\"/><line class=\"grid\" x1=\"20\" y1=\"34\" x2=\"380\" y2=\"34\"/><line class=\"axis\" x1=\"20\" y1=\"178\" x2=\"380\" y2=\"178\"/><line class=\"axis\" x1=\"182\" y1=\"16\" x2=\"182\" y2=\"286\"/><text x=\"38\" y=\"193\" text-anchor=\"middle\">-4</text><text x=\"74\" y=\"193\" text-anchor=\"middle\">-3</text><text x=\"110\" y=\"193\" text-anchor=\"middle\">-2</text><text x=\"146\" y=\"193\" text-anchor=\"middle\">-1</text><text x=\"218\" y=\"193\" text-anchor=\"middle\">1</text><text x=\"254\" y=\"193\" text-anchor=\"middle\">2</text><text x=\"290\" y=\"193\" text-anchor=\"middle\">3</text><text x=\"326\" y=\"193\" text-anchor=\"middle\">4</text><text x=\"362\" y=\"193\" text-anchor=\"middle\">5</text><text x=\"176\" y=\"290\" text-anchor=\"end\">-3</text><text x=\"176\" y=\"254\" text-anchor=\"end\">-2</text><text x=\"176\" y=\"218\" text-anchor=\"end\">-1</text><text x=\"176\" y=\"146\" text-anchor=\"end\">1</text><text x=\"176\" y=\"110\" text-anchor=\"end\">2</text><text x=\"176\" y=\"74\" text-anchor=\"end\">3</text><text x=\"176\" y=\"38\" text-anchor=\"end\">4</text><line class=\"curve\" stroke-dasharray=\"5 5\" stroke-width=\"1.2\" x1=\"20\" y1=\"142\" x2=\"146\" y2=\"142\"/><line class=\"curve\" stroke-dasharray=\"5 5\" stroke-width=\"1.2\" x1=\"290\" y1=\"16\" x2=\"290\" y2=\"286\"/><path class=\"curve\" d=\"M20.0,138.4 L21.6,138.4 L23.2,138.3 L24.7,138.2 L26.3,138.2 L27.9,138.1 L29.5,138.0 L31.0,137.9 L32.6,137.8 L34.2,137.7 L35.8,137.6 L37.3,137.5 L38.9,137.4 L40.5,137.3 L42.0,137.2 L43.6,137.1 L45.2,137.0 L46.8,136.9 L48.4,136.8 L49.9,136.7 L51.5,136.5 L53.1,136.4 L54.6,136.2 L56.2,136.1 L57.8,136.0 L59.4,135.8 L61.0,135.6 L62.5,135.5 L64.1,135.3 L65.7,135.1 L67.2,134.9 L68.8,134.7 L70.4,134.5 L72.0,134.3 L73.5,134.1 L75.1,133.8 L76.7,133.6 L78.3,133.3 L79.8,133.1 L81.4,132.8 L83.0,132.5 L84.6,132.2 L86.1,131.8 L87.7,131.5 L89.3,131.1 L90.9,130.8 L92.5,130.4 L94.0,129.9 L95.6,129.5 L97.2,129.0 L98.8,128.5 L100.3,128.0 L101.9,127.5 L103.5,126.9 L105.0,126.2 L106.6,125.6 L108.2,124.9 L109.8,124.1 L111.4,123.3 L112.9,122.4 L114.5,121.5 L116.1,120.5 L117.6,119.5 L119.2,118.3 L120.8,117.1 L122.4,115.8 L124.0,114.3 L125.5,112.7 L127.1,111.0 L128.7,109.2 L130.2,107.2 L131.8,104.9 L133.4,102.5 L135.0,99.8 L136.6,96.8 L138.1,93.5 L139.7,89.8 L141.3,85.7 L142.9,81.1 L144.4,75.9 L146.0,70.0\"/><path class=\"curve\" d=\"M146.0,178.0 L146.9,177.1 L147.8,176.2 L148.7,175.3 L149.6,174.4 L150.5,173.5 L151.4,172.6 L152.3,171.7 L153.2,170.8 L154.1,169.9 L155.0,169.0 L155.9,168.1 L156.8,167.2 L157.7,166.3 L158.6,165.4 L159.5,164.5 L160.4,163.6 L161.3,162.7 L162.2,161.8 L163.1,160.9 L164.0,160.0 L164.9,159.1 L165.8,158.2 L166.7,157.3 L167.6,156.4 L168.5,155.5 L169.4,154.6 L170.3,153.7 L171.2,152.8 L172.1,151.9 L173.0,151.0 L173.9,150.1 L174.8,149.2 L175.7,148.3 L176.6,147.4 L177.5,146.5 L178.4,145.6 L179.3,144.7 L180.2,143.8 L181.1,142.9 L182.0,142.0 L182.9,141.1 L183.8,140.2 L184.7,139.3 L185.6,138.4 L186.5,137.5 L187.4,136.6 L188.3,135.7 L189.2,134.8 L190.1,133.9 L191.0,133.0 L191.9,132.1 L192.8,131.2 L193.7,130.3 L194.6,129.4 L195.5,128.5 L196.4,127.6 L197.3,126.7 L198.2,125.8 L199.1,124.9 L200.0,124.0 L200.9,123.1 L201.8,122.2 L202.7,121.3 L203.6,120.4 L204.5,119.5 L205.4,118.6 L206.3,117.7 L207.2,116.8 L208.1,115.9 L209.0,115.0 L209.9,114.1 L210.8,113.2 L211.7,112.3 L212.6,111.4 L213.5,110.5 L214.4,109.6 L215.3,108.7 L216.2,107.8 L217.1,106.9 L218.0,106.0\"/><path class=\"curve\" d=\"M218.0,106.0 L218.9,105.8 L219.8,105.5 L220.7,105.3 L221.5,105.1 L222.4,104.8 L223.3,104.6 L224.2,104.3 L225.1,104.0 L226.0,103.8 L226.9,103.5 L227.8,103.2 L228.6,102.9 L229.5,102.6 L230.4,102.3 L231.3,101.9 L232.2,101.6 L233.1,101.2 L234.0,100.9 L234.8,100.5 L235.7,100.1 L236.6,99.7 L237.5,99.3 L238.4,98.9 L239.3,98.4 L240.2,98.0 L241.0,97.5 L241.9,97.0 L242.8,96.5 L243.7,96.0 L244.6,95.5 L245.5,94.9 L246.4,94.3 L247.3,93.7 L248.1,93.0 L249.0,92.4 L249.9,91.7 L250.8,90.9 L251.7,90.2 L252.6,89.4 L253.5,88.5 L254.3,87.7 L255.2,86.7 L256.1,85.7 L257.0,84.7 L257.9,83.6 L258.8,82.5 L259.7,81.3 L260.6,80.0 L261.4,78.6 L262.3,77.2 L263.2,75.6 L264.1,74.0 L265.0,72.2 L265.9,70.3 L266.8,68.2 L267.6,66.0 L268.5,63.6 L269.4,61.0 L270.3,58.2 L271.2,55.1 L272.1,51.7 L273.0,47.9 L273.8,43.8 L274.7,39.1 L275.6,33.9 L276.5,27.9 L277.4,21.2\"/><path class=\"curve\" d=\"M302.2,283.9 L303.2,276.1 L304.2,269.4 L305.2,263.5 L306.1,258.4 L307.1,253.8 L308.1,249.7 L309.0,246.1 L310.0,242.7 L311.0,239.7 L312.0,237.0 L312.9,234.5 L313.9,232.2 L314.9,230.1 L315.8,228.1 L316.8,226.3 L317.8,224.6 L318.8,223.1 L319.7,221.6 L320.7,220.2 L321.7,218.9 L322.7,217.7 L323.6,216.5 L324.6,215.5 L325.6,214.4 L326.5,213.5 L327.5,212.5 L328.5,211.7 L329.5,210.8 L330.4,210.1 L331.4,209.3 L332.4,208.6 L333.3,207.9 L334.3,207.2 L335.3,206.6 L336.3,206.0 L337.2,205.4 L338.2,204.9 L339.2,204.4 L340.1,203.8 L341.1,203.4 L342.1,202.9 L343.1,202.4 L344.0,202.0 L345.0,201.6 L346.0,201.2 L347.0,200.8 L347.9,200.4 L348.9,200.0 L349.9,199.6 L350.8,199.3 L351.8,199.0 L352.8,198.6 L353.8,198.3 L354.7,198.0 L355.7,197.7 L356.7,197.4 L357.6,197.2 L358.6,196.9 L359.6,196.6 L360.6,196.4 L361.5,196.1 L362.5,195.9 L363.5,195.6 L364.4,195.4 L365.4,195.2 L366.4,195.0 L367.4,194.8 L368.3,194.5 L369.3,194.3 L370.3,194.1 L371.3,194.0 L372.2,193.8 L373.2,193.6 L374.2,193.4 L375.1,193.2 L376.1,193.1 L377.1,192.9 L378.1,192.7 L379.0,192.6 L380.0,192.4\"/><circle class=\"dot\" cx=\"146.0\" cy=\"70.0\" r=\"4.5\"/><circle class=\"dot\" cx=\"218.0\" cy=\"178.0\" r=\"4.5\"/><circle class=\"open\" cx=\"146.0\" cy=\"178.0\" r=\"4.5\"/><circle class=\"open\" cx=\"218.0\" cy=\"106.0\" r=\"4.5\"/><text x=\"376\" y=\"296\" text-anchor=\"end\">Figure</text></svg>"
    },
    {
      "id": "math-2026-10-05-13",
      "chapter": "一、單選題",
      "number": "<13.>",
      "topic": "Graph reading: continuity & asymptotes",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Accept the question <12.>, which one of the following options is **wrong**?",
      "options": {
        "1": "$f$ is left-continuous at $x=-1$.",
        "2": "$f$ is continuous at $x=1$.",
        "3": "$f$ has exactly two horizontal(水平的) asymptotes(漸近線).",
        "4": "$f$ has exactly one vertical(垂直的) asymptote.",
        "5": "$f$ is continuous at $x=0$."
      },
      "blanks": null,
      "answer": "2",
      "explanation": "$\\lim_{x\\to1}f(x)=2$ but $f(1)=0$, so $f$ is not continuous at $1$. The others are true: $\\lim_{x\\to-1^-}f=3=f(-1)$; horizontal asymptotes $y=1$ and $y=0$; one vertical asymptote $x=3$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "figure": "<svg viewBox=\"0 0 400 302\" role=\"img\" aria-label=\"Graph of y = f(x): for x &lt; -1 the curve comes in from the left along the horizontal asymptote y = 1 and rises to a filled dot at (-1,3). For -1 &lt; x &lt; 1 a line runs from an open circle at (-1,0) up to an open circle at (1,2); there is a filled dot at (1,0). For 1 &lt; x &lt; 3 the curve leaves (1,2) and rises to +∞ at the vertical asymptote x = 3. For x &gt; 3 the curve comes up from −∞ and approaches y = 0 as x → ∞.\"><line class=\"grid\" x1=\"38\" y1=\"16\" x2=\"38\" y2=\"286\"/><line class=\"grid\" x1=\"74\" y1=\"16\" x2=\"74\" y2=\"286\"/><line class=\"grid\" x1=\"110\" y1=\"16\" x2=\"110\" y2=\"286\"/><line class=\"grid\" x1=\"146\" y1=\"16\" x2=\"146\" y2=\"286\"/><line class=\"grid\" x1=\"182\" y1=\"16\" x2=\"182\" y2=\"286\"/><line class=\"grid\" x1=\"218\" y1=\"16\" x2=\"218\" y2=\"286\"/><line class=\"grid\" x1=\"254\" y1=\"16\" x2=\"254\" y2=\"286\"/><line class=\"grid\" x1=\"290\" y1=\"16\" x2=\"290\" y2=\"286\"/><line class=\"grid\" x1=\"326\" y1=\"16\" x2=\"326\" y2=\"286\"/><line class=\"grid\" x1=\"362\" y1=\"16\" x2=\"362\" y2=\"286\"/><line class=\"grid\" x1=\"20\" y1=\"286\" x2=\"380\" y2=\"286\"/><line class=\"grid\" x1=\"20\" y1=\"250\" x2=\"380\" y2=\"250\"/><line class=\"grid\" x1=\"20\" y1=\"214\" x2=\"380\" y2=\"214\"/><line class=\"grid\" x1=\"20\" y1=\"178\" x2=\"380\" y2=\"178\"/><line class=\"grid\" x1=\"20\" y1=\"142\" x2=\"380\" y2=\"142\"/><line class=\"grid\" x1=\"20\" y1=\"106\" x2=\"380\" y2=\"106\"/><line class=\"grid\" x1=\"20\" y1=\"70\" x2=\"380\" y2=\"70\"/><line class=\"grid\" x1=\"20\" y1=\"34\" x2=\"380\" y2=\"34\"/><line class=\"axis\" x1=\"20\" y1=\"178\" x2=\"380\" y2=\"178\"/><line class=\"axis\" x1=\"182\" y1=\"16\" x2=\"182\" y2=\"286\"/><text x=\"38\" y=\"193\" text-anchor=\"middle\">-4</text><text x=\"74\" y=\"193\" text-anchor=\"middle\">-3</text><text x=\"110\" y=\"193\" text-anchor=\"middle\">-2</text><text x=\"146\" y=\"193\" text-anchor=\"middle\">-1</text><text x=\"218\" y=\"193\" text-anchor=\"middle\">1</text><text x=\"254\" y=\"193\" text-anchor=\"middle\">2</text><text x=\"290\" y=\"193\" text-anchor=\"middle\">3</text><text x=\"326\" y=\"193\" text-anchor=\"middle\">4</text><text x=\"362\" y=\"193\" text-anchor=\"middle\">5</text><text x=\"176\" y=\"290\" text-anchor=\"end\">-3</text><text x=\"176\" y=\"254\" text-anchor=\"end\">-2</text><text x=\"176\" y=\"218\" text-anchor=\"end\">-1</text><text x=\"176\" y=\"146\" text-anchor=\"end\">1</text><text x=\"176\" y=\"110\" text-anchor=\"end\">2</text><text x=\"176\" y=\"74\" text-anchor=\"end\">3</text><text x=\"176\" y=\"38\" text-anchor=\"end\">4</text><line class=\"curve\" stroke-dasharray=\"5 5\" stroke-width=\"1.2\" x1=\"20\" y1=\"142\" x2=\"146\" y2=\"142\"/><line class=\"curve\" stroke-dasharray=\"5 5\" stroke-width=\"1.2\" x1=\"290\" y1=\"16\" x2=\"290\" y2=\"286\"/><path class=\"curve\" d=\"M20.0,138.4 L21.6,138.4 L23.2,138.3 L24.7,138.2 L26.3,138.2 L27.9,138.1 L29.5,138.0 L31.0,137.9 L32.6,137.8 L34.2,137.7 L35.8,137.6 L37.3,137.5 L38.9,137.4 L40.5,137.3 L42.0,137.2 L43.6,137.1 L45.2,137.0 L46.8,136.9 L48.4,136.8 L49.9,136.7 L51.5,136.5 L53.1,136.4 L54.6,136.2 L56.2,136.1 L57.8,136.0 L59.4,135.8 L61.0,135.6 L62.5,135.5 L64.1,135.3 L65.7,135.1 L67.2,134.9 L68.8,134.7 L70.4,134.5 L72.0,134.3 L73.5,134.1 L75.1,133.8 L76.7,133.6 L78.3,133.3 L79.8,133.1 L81.4,132.8 L83.0,132.5 L84.6,132.2 L86.1,131.8 L87.7,131.5 L89.3,131.1 L90.9,130.8 L92.5,130.4 L94.0,129.9 L95.6,129.5 L97.2,129.0 L98.8,128.5 L100.3,128.0 L101.9,127.5 L103.5,126.9 L105.0,126.2 L106.6,125.6 L108.2,124.9 L109.8,124.1 L111.4,123.3 L112.9,122.4 L114.5,121.5 L116.1,120.5 L117.6,119.5 L119.2,118.3 L120.8,117.1 L122.4,115.8 L124.0,114.3 L125.5,112.7 L127.1,111.0 L128.7,109.2 L130.2,107.2 L131.8,104.9 L133.4,102.5 L135.0,99.8 L136.6,96.8 L138.1,93.5 L139.7,89.8 L141.3,85.7 L142.9,81.1 L144.4,75.9 L146.0,70.0\"/><path class=\"curve\" d=\"M146.0,178.0 L146.9,177.1 L147.8,176.2 L148.7,175.3 L149.6,174.4 L150.5,173.5 L151.4,172.6 L152.3,171.7 L153.2,170.8 L154.1,169.9 L155.0,169.0 L155.9,168.1 L156.8,167.2 L157.7,166.3 L158.6,165.4 L159.5,164.5 L160.4,163.6 L161.3,162.7 L162.2,161.8 L163.1,160.9 L164.0,160.0 L164.9,159.1 L165.8,158.2 L166.7,157.3 L167.6,156.4 L168.5,155.5 L169.4,154.6 L170.3,153.7 L171.2,152.8 L172.1,151.9 L173.0,151.0 L173.9,150.1 L174.8,149.2 L175.7,148.3 L176.6,147.4 L177.5,146.5 L178.4,145.6 L179.3,144.7 L180.2,143.8 L181.1,142.9 L182.0,142.0 L182.9,141.1 L183.8,140.2 L184.7,139.3 L185.6,138.4 L186.5,137.5 L187.4,136.6 L188.3,135.7 L189.2,134.8 L190.1,133.9 L191.0,133.0 L191.9,132.1 L192.8,131.2 L193.7,130.3 L194.6,129.4 L195.5,128.5 L196.4,127.6 L197.3,126.7 L198.2,125.8 L199.1,124.9 L200.0,124.0 L200.9,123.1 L201.8,122.2 L202.7,121.3 L203.6,120.4 L204.5,119.5 L205.4,118.6 L206.3,117.7 L207.2,116.8 L208.1,115.9 L209.0,115.0 L209.9,114.1 L210.8,113.2 L211.7,112.3 L212.6,111.4 L213.5,110.5 L214.4,109.6 L215.3,108.7 L216.2,107.8 L217.1,106.9 L218.0,106.0\"/><path class=\"curve\" d=\"M218.0,106.0 L218.9,105.8 L219.8,105.5 L220.7,105.3 L221.5,105.1 L222.4,104.8 L223.3,104.6 L224.2,104.3 L225.1,104.0 L226.0,103.8 L226.9,103.5 L227.8,103.2 L228.6,102.9 L229.5,102.6 L230.4,102.3 L231.3,101.9 L232.2,101.6 L233.1,101.2 L234.0,100.9 L234.8,100.5 L235.7,100.1 L236.6,99.7 L237.5,99.3 L238.4,98.9 L239.3,98.4 L240.2,98.0 L241.0,97.5 L241.9,97.0 L242.8,96.5 L243.7,96.0 L244.6,95.5 L245.5,94.9 L246.4,94.3 L247.3,93.7 L248.1,93.0 L249.0,92.4 L249.9,91.7 L250.8,90.9 L251.7,90.2 L252.6,89.4 L253.5,88.5 L254.3,87.7 L255.2,86.7 L256.1,85.7 L257.0,84.7 L257.9,83.6 L258.8,82.5 L259.7,81.3 L260.6,80.0 L261.4,78.6 L262.3,77.2 L263.2,75.6 L264.1,74.0 L265.0,72.2 L265.9,70.3 L266.8,68.2 L267.6,66.0 L268.5,63.6 L269.4,61.0 L270.3,58.2 L271.2,55.1 L272.1,51.7 L273.0,47.9 L273.8,43.8 L274.7,39.1 L275.6,33.9 L276.5,27.9 L277.4,21.2\"/><path class=\"curve\" d=\"M302.2,283.9 L303.2,276.1 L304.2,269.4 L305.2,263.5 L306.1,258.4 L307.1,253.8 L308.1,249.7 L309.0,246.1 L310.0,242.7 L311.0,239.7 L312.0,237.0 L312.9,234.5 L313.9,232.2 L314.9,230.1 L315.8,228.1 L316.8,226.3 L317.8,224.6 L318.8,223.1 L319.7,221.6 L320.7,220.2 L321.7,218.9 L322.7,217.7 L323.6,216.5 L324.6,215.5 L325.6,214.4 L326.5,213.5 L327.5,212.5 L328.5,211.7 L329.5,210.8 L330.4,210.1 L331.4,209.3 L332.4,208.6 L333.3,207.9 L334.3,207.2 L335.3,206.6 L336.3,206.0 L337.2,205.4 L338.2,204.9 L339.2,204.4 L340.1,203.8 L341.1,203.4 L342.1,202.9 L343.1,202.4 L344.0,202.0 L345.0,201.6 L346.0,201.2 L347.0,200.8 L347.9,200.4 L348.9,200.0 L349.9,199.6 L350.8,199.3 L351.8,199.0 L352.8,198.6 L353.8,198.3 L354.7,198.0 L355.7,197.7 L356.7,197.4 L357.6,197.2 L358.6,196.9 L359.6,196.6 L360.6,196.4 L361.5,196.1 L362.5,195.9 L363.5,195.6 L364.4,195.4 L365.4,195.2 L366.4,195.0 L367.4,194.8 L368.3,194.5 L369.3,194.3 L370.3,194.1 L371.3,194.0 L372.2,193.8 L373.2,193.6 L374.2,193.4 L375.1,193.2 L376.1,193.1 L377.1,192.9 L378.1,192.7 L379.0,192.6 L380.0,192.4\"/><circle class=\"dot\" cx=\"146.0\" cy=\"70.0\" r=\"4.5\"/><circle class=\"dot\" cx=\"218.0\" cy=\"178.0\" r=\"4.5\"/><circle class=\"open\" cx=\"146.0\" cy=\"178.0\" r=\"4.5\"/><circle class=\"open\" cx=\"218.0\" cy=\"106.0\" r=\"4.5\"/><text x=\"376\" y=\"296\" text-anchor=\"end\">Figure</text></svg>"
    },
    {
      "id": "math-2026-10-05-14",
      "chapter": "一、單選題",
      "number": "<14.>",
      "topic": "Vertical asymptote",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which one of the following options has a vertical asymptote at $x=2$? ($[\\![\\cdot]\\!]$ is the greatest integer function.)",
      "options": {
        "1": "$f(x)=\\dfrac{x-2}{\\sqrt[3]{x}}$",
        "2": "$f(x)=[\\![x-2]\\!]$",
        "3": "$f(x)=\\dfrac{x^2-4}{x-2}$",
        "4": "$f(x)=\\dfrac{\\cos x}{x^2-x-2}$",
        "5": "$f(x)=\\dfrac{x^2-3x+2}{x^2-4}$"
      },
      "blanks": null,
      "answer": "4",
      "explanation": "$x^2-x-2=(x-2)(x+1)$ and $\\cos 2\\ne 0$, so $f\\to\\pm\\infty$ at $2$. (3) and (5) cancel $x-2$ (holes); (1) has its asymptote at $x=0$; (2) only jumps.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-05-15",
      "chapter": "一、單選題",
      "number": "<15.>",
      "topic": "Trig limit",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Find $\\displaystyle\\lim_{x\\to 0}\\frac{1-\\cos 4x}{x\\sin 2x}$.",
      "options": {
        "1": "$0$",
        "2": "$2$",
        "3": "$4$",
        "4": "$8$",
        "5": "$\\nexists$"
      },
      "blanks": null,
      "answer": "3",
      "explanation": "$1-\\cos 4x=2\\sin^2 2x$, so the expression is $\\dfrac{2\\sin^2 2x}{x\\sin 2x}=\\dfrac{2\\sin 2x}{x}\\to 2\\cdot 2=4$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-05-16",
      "chapter": "二、多選題",
      "number": "<16.>",
      "topic": "Limit theory",
      "type": "multi_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which of the following options are **wrong**?",
      "options": {
        "1": "If $\\displaystyle\\lim_{x\\to a}f(x)$ exists, then $f(a)$ is defined.",
        "2": "If $\\displaystyle\\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)=L$, then $\\displaystyle\\lim_{x\\to a}f(x)=L$.",
        "3": "If $f(x)\\le g(x)$ near $a$ and both limits exist, then $\\displaystyle\\lim_{x\\to a}f(x)\\le\\lim_{x\\to a}g(x)$.",
        "4": "$\\displaystyle\\lim_{x\\to 0^-}\\frac{1}{x}=\\infty$",
        "5": "$\\displaystyle\\lim_{x\\to 0}\\frac{|x|}{x}=1$"
      },
      "blanks": null,
      "answer": [
        "1",
        "4",
        "5"
      ],
      "explanation": "(1) ✗ a limit can exist at a hole where $f(a)$ is undefined. (4) ✗ from the left $\\frac{1}{x}\\to-\\infty$. (5) ✗ left limit $-1$, right limit $1$, so it does not exist. (2) and (3) are true.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5
    },
    {
      "id": "math-2026-10-05-17",
      "chapter": "二、多選題",
      "number": "<17.>",
      "topic": "Continuity theory + IVT",
      "type": "multi_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which of the following options are **correct**?",
      "options": {
        "1": "If $f$ is continuous at $x=0$, then $f(0)$ is defined.",
        "2": "If $f(0)$ is defined, then $f$ is continuous at $x=0$.",
        "3": "If $f$ and $g$ are both continuous at $x=0$, then $f\\cdot g$ is continuous at $x=0$.",
        "4": "$f(x)=\\dfrac{1}{x+1}$ is continuous at $x=-1$.",
        "5": "There is a root of the equation $x^3+2x-2=0$ between $0$ and $1$."
      },
      "blanks": null,
      "answer": [
        "1",
        "3",
        "5"
      ],
      "explanation": "(2) ✗ being defined is not enough (the limit must equal $f(0)$). (4) ✗ undefined at $-1$. (5) $f(0)=-2<0$, $f(1)=1>0$, so by the Intermediate Value Theorem there is a root.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5
    },
    {
      "id": "math-2026-10-05-18",
      "chapter": "二、多選題",
      "number": "<18.>",
      "topic": "Rational function: asymptotes",
      "type": "multi_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $f(x)=\\dfrac{x^3-1}{x^2-3x+2}$, which of the following options are **correct**?",
      "options": {
        "1": "$\\displaystyle\\lim_{x\\to 2^+}f(x)=\\infty$",
        "2": "$x=1$ is a vertical(垂直的) asymptote of the graph of $f$.",
        "3": "$x=2$ is a vertical asymptote of the graph of $f$.",
        "4": "$\\displaystyle\\lim_{x\\to 1}f(x)=-3$",
        "5": "$y=x+3$ is an oblique(傾斜的) asymptote of the graph of $f$."
      },
      "blanks": null,
      "answer": [
        "1",
        "3",
        "4",
        "5"
      ],
      "explanation": "$f(x)=\\dfrac{(x-1)(x^2+x+1)}{(x-1)(x-2)}=\\dfrac{x^2+x+1}{x-2}$ for $x\\ne1$: a hole at $x=1$ with limit $\\frac{3}{-1}=-3$, so (2) ✗. At $2^+$: $\\frac{7}{0^+}\\to\\infty$. Division: $\\frac{x^2+x+1}{x-2}=x+3+\\frac{7}{x-2}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5
    },
    {
      "id": "math-2026-10-05-19",
      "chapter": "二、多選題",
      "number": "<19.>",
      "topic": "sin kx / x and x sin(k/x)",
      "type": "multi_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which of the following options are **wrong**?",
      "options": {
        "1": "$\\displaystyle\\lim_{x\\to 0}\\frac{\\sin 6x}{3x}=2$",
        "2": "$\\displaystyle\\lim_{x\\to\\infty}\\frac{\\sin 6x}{3x}=2$",
        "3": "$\\displaystyle\\lim_{x\\to 0}3x\\sin\\frac{6}{x}=0$",
        "4": "$\\displaystyle\\lim_{x\\to\\infty}3x\\sin\\frac{6}{x}=18$",
        "5": "$\\displaystyle\\lim_{x\\to\\infty}\\sin\\frac{6}{x}=1$"
      },
      "blanks": null,
      "answer": [
        "2",
        "5"
      ],
      "explanation": "(2) ✗ $|\\sin 6x|\\le1$ so it is squeezed to $0$. (5) ✗ $\\frac{6}{x}\\to0$ so $\\sin\\frac{6}{x}\\to0$. (4) $3x\\sin\\frac{6}{x}=18\\cdot\\frac{\\sin(6/x)}{6/x}\\to18$. (1), (3) are true.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5
    },
    {
      "id": "math-2026-10-05-20",
      "chapter": "三、選填題",
      "number": "A",
      "topic": "Limit laws",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題均以最簡單分數作答，請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $\\displaystyle\\lim_{x\\to 0}f(x)=-2$ and $\\displaystyle\\lim_{x\\to 0}g(x)=3$; then $\\displaystyle\\lim_{x\\to 0}\\frac{3f(x)+g^2(x)+1}{(g(x)+5)^2}=\\dfrac{\\boxed{20}}{\\boxed{21}\\boxed{22}}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "$\\dfrac{3(-2)+9+1}{(3+5)^2}=\\dfrac{4}{64}=\\dfrac{1}{16}$.",
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
          "v": "1"
        },
        {
          "n": 22,
          "v": "6"
        }
      ]
    },
    {
      "id": "math-2026-10-05-21",
      "chapter": "三、選填題",
      "number": "B",
      "topic": "Trig limit",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題均以最簡單分數作答，請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $f(x)=\\begin{cases}\\dfrac{1-\\cos 5x}{3x^2}, & x\\ne 0\\\\[4pt] \\dfrac{5}{3}, & x=0\\end{cases}$, then $\\displaystyle\\lim_{x\\to 0}f(x)=\\dfrac{\\boxed{23}\\boxed{24}}{\\boxed{25}}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "$\\dfrac{1-\\cos 5x}{x^2}\\to\\dfrac{25}{2}$; divide by $3$: $\\dfrac{25}{6}$. $f(0)$ does not affect the limit.",
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
          "v": "5"
        },
        {
          "n": 25,
          "v": "6"
        }
      ]
    },
    {
      "id": "math-2026-10-05-22",
      "chapter": "三、選填題",
      "number": "C",
      "topic": "Piecewise continuity",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題均以最簡單分數作答，請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $f(x)=\\begin{cases}3x+4, & x\\le -1\\\\ x^2+ax+b, & -1<x<2\\\\ 19, & x\\ge 2\\end{cases}$ is a continuous function, then $2a+b=\\boxed{26}\\boxed{27}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "At $x=-1$: $1-a+b=1\\Rightarrow b=a$. At $x=2$: $4+2a+b=19\\Rightarrow 3a=15$, so $a=b=5$ and $2a+b=15$.",
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
          "v": "5"
        }
      ]
    },
    {
      "id": "math-2026-10-05-23",
      "chapter": "三、選填題",
      "number": "D",
      "topic": "0/0 limit with nested radicals",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題均以最簡單分數作答，請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Evaluate $\\displaystyle\\lim_{x\\to 1}\\frac{\\sqrt[3]{6+\\sqrt{x+3}}-2}{x-1}=\\dfrac{\\boxed{28}}{\\boxed{29}\\boxed{30}}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "Let $u=\\sqrt[3]{6+\\sqrt{x+3}}$ ($u\\to2$). $u^3-8=\\sqrt{x+3}-2=\\dfrac{x-1}{\\sqrt{x+3}+2}$, so $\\dfrac{u-2}{x-1}=\\dfrac{1}{(u^2+2u+4)(\\sqrt{x+3}+2)}\\to\\dfrac{1}{12\\cdot 4}=\\dfrac{1}{48}$.",
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
          "v": "4"
        },
        {
          "n": 30,
          "v": "8"
        }
      ]
    },
    {
      "id": "math-2026-10-05-24",
      "chapter": "三、選填題",
      "number": "E",
      "topic": "Removable discontinuity",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題均以最簡單分數作答，請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $f(x)=\\begin{cases}\\dfrac{x^2+ax+b}{x-3}, & x\\ne 3\\\\[4pt] 7, & x=3\\end{cases}$ is a continuous function, then $a+b=\\boxed{31}\\boxed{32}\\boxed{33}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "The numerator must be $0$ at $3$: $9+3a+b=0$. Then $\\dfrac{x^2+ax+b}{x-3}=x+3+a\\to 6+a=7$, so $a=1$, $b=-12$, $a+b=-11$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "slots": [
        {
          "n": 31,
          "v": "-"
        },
        {
          "n": 32,
          "v": "1"
        },
        {
          "n": 33,
          "v": "1"
        }
      ]
    }
  ]
};
