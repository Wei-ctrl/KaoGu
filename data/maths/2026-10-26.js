// maths daily set for 2026-10-26. See prompts/weekly-routine.md.
(window.KAOGU_DAILY = window.KAOGU_DAILY || {})["maths"] = window.KAOGU_DAILY["maths"] || {};
window.KAOGU_DAILY["maths"]["2026-10-26"] = {
  "exam": "僑先部 數學（第二、三類組）期中模擬考 · Mock (113 format)",
  "questions": [
    {
      "id": "math-2026-10-26-01",
      "chapter": "一、單選題",
      "number": "<1.>",
      "topic": "Exact trig value",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Find $\\cos\\dfrac{5\\pi}{3}$.",
      "options": {
        "1": "$\\frac{-1}{2}$",
        "2": "$\\frac{1}{2}$",
        "3": "$\\frac{\\sqrt{3}}{2}$",
        "4": "$\\frac{-\\sqrt{3}}{2}$",
        "5": "$\\sqrt{3}$"
      },
      "blanks": null,
      "answer": "2",
      "explanation": "$\\frac{5\\pi}{3}$ is in the 4th quadrant with reference angle $\\frac{\\pi}{3}$; cosine is positive there: $\\cos\\frac{\\pi}{3}=\\frac{1}{2}$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-26-02",
      "chapter": "一、單選題",
      "number": "<2.>",
      "topic": "Composite function",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $f(x)=4x+3$ and $g\\circ f(x)=8x+1$, find $g(11)$.",
      "options": {
        "1": "$9$",
        "2": "$13$",
        "3": "$17$",
        "4": "$45$",
        "5": "$89$"
      },
      "blanks": null,
      "answer": "3",
      "explanation": "$f(x)=11\\Rightarrow x=2$, so $g(11)=g(f(2))=8(2)+1=17$. ($89$ wrongly puts $x=11$ into $8x+1$.)",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-26-03",
      "chapter": "一、單選題",
      "number": "<3.>",
      "topic": "Line equation",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Determine the equation of the line having slope(斜率) $\\frac{2}{3}$ and passing through the point $(-3,1)$.",
      "options": {
        "1": "$y+1=\\frac{2}{3}(x-3)$",
        "2": "$y-1=\\frac{2}{3}(x-3)$",
        "3": "$x+3=\\frac{2}{3}(y-1)$",
        "4": "$y-1=\\frac{2}{3}(x+3)$",
        "5": "$y+3=\\frac{2}{3}(x-1)$"
      },
      "blanks": null,
      "answer": "4",
      "explanation": "Point-slope form $y-y_1=m(x-x_1)$ with $(x_1,y_1)=(-3,1)$: $y-1=\\frac{2}{3}(x+3)$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-26-04",
      "chapter": "一、單選題",
      "number": "<4.>",
      "topic": "Limit by substitution",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Find $\\displaystyle\\lim_{x\\to 1}\\sqrt{x^3+5x+10}$.",
      "options": {
        "1": "$\\nexists$",
        "2": "$2$",
        "3": "$4$",
        "4": "$16$",
        "5": "$\\sqrt{10}$"
      },
      "blanks": null,
      "answer": "3",
      "explanation": "The function is continuous at $1$: $\\sqrt{1+5+10}=\\sqrt{16}=4$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-26-05",
      "chapter": "一、單選題",
      "number": "<5.>",
      "topic": "Limit of a piecewise function",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $f(x)=\\begin{cases}x^2+1, & \\text{if } x<2\\\\ 3x-1, & \\text{if } x>2\\end{cases}$, find $\\displaystyle\\lim_{x\\to 2}f(x)$.",
      "options": {
        "1": "$\\nexists$",
        "2": "$3$",
        "3": "$4$",
        "4": "$5$",
        "5": "$6$"
      },
      "blanks": null,
      "answer": "4",
      "explanation": "Left limit $2^2+1=5$, right limit $3(2)-1=5$. Both sides agree, so the limit is $5$ even though $f(2)$ is undefined.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-26-06",
      "chapter": "一、單選題",
      "number": "<6.>",
      "topic": "Limit by substitution (trig)",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Find $\\displaystyle\\lim_{x\\to 0}\\frac{1+2x+6\\sin\\left(\\frac{\\pi}{6}+x\\right)}{2\\cos x}$.",
      "options": {
        "1": "$1$",
        "2": "$2$",
        "3": "$3$",
        "4": "$\\frac{1+3\\sqrt{3}}{2}$",
        "5": "$\\nexists$"
      },
      "blanks": null,
      "answer": "2",
      "explanation": "Substitute $x=0$: $\\dfrac{1+0+6\\sin\\frac{\\pi}{6}}{2}=\\dfrac{1+3}{2}=2$. (Option (4) uses $\\cos\\frac{\\pi}{6}$ by mistake.)",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-26-07",
      "chapter": "一、單選題",
      "number": "<7.>",
      "topic": "Greatest integer limit",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "$[\\![\\cdot]\\!]$ is the greatest integer function, determine $\\displaystyle\\lim_{x\\to 115^-}[\\![x-2]\\!]$.",
      "options": {
        "1": "$112$",
        "2": "$113$",
        "3": "$112^-$",
        "4": "$114$",
        "5": "$\\nexists$"
      },
      "blanks": null,
      "answer": "1",
      "explanation": "For $x$ slightly less than $115$, $x-2$ is slightly less than $113$, so $[\\![x-2]\\!]=112$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-26-08",
      "chapter": "一、單選題",
      "number": "<8.>",
      "topic": "Composite with piecewise",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $f(x)=\\begin{cases}2x+1, & \\text{if } x<0\\\\ x^2-3, & \\text{if } x\\ge 0\\end{cases}$ and $g(x)=3x-2$, find $g\\circ f(-1)=$",
      "options": {
        "1": "$-9$",
        "2": "$-5$",
        "3": "$-1$",
        "4": "$1$",
        "5": "$\\nexists$"
      },
      "blanks": null,
      "answer": "2",
      "explanation": "$-1<0$, so $f(-1)=-2+1=-1$; then $g(-1)=-3-2=-5$. ($-9$ is $f\\circ g(-1)=f(-5)$.)",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-26-09",
      "chapter": "一、單選題",
      "number": "<9.>",
      "topic": "Slope",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Find the slope of the line that passes through $(-1,-3)$ and $(3,5)$.",
      "options": {
        "1": "$-2$",
        "2": "$\\frac{-1}{2}$",
        "3": "$\\frac{1}{2}$",
        "4": "$2$",
        "5": "$1$"
      },
      "blanks": null,
      "answer": "4",
      "explanation": "$m=\\dfrac{5-(-3)}{3-(-1)}=\\dfrac{8}{4}=2$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-26-10",
      "chapter": "一、單選題",
      "number": "<10.>",
      "topic": "Continuity",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which one of the following options is continuous(連續) at $x=0$?",
      "options": {
        "1": "$f(x)=\\dfrac{1}{x^2+x}$",
        "2": "$f(x)=\\sqrt{x-4}$",
        "3": "$f(x)=\\begin{cases}\\dfrac{|x|}{x}, & x\\ne 0\\\\ 1, & x=0\\end{cases}$",
        "4": "$f(x)=\\csc x$",
        "5": "$f(x)=\\begin{cases}x^2\\sin\\left(\\dfrac{1}{x}\\right), & x\\ne 0\\\\ 0, & x=0\\end{cases}$"
      },
      "blanks": null,
      "answer": "5",
      "explanation": "(5): $-x^2\\le x^2\\sin\\frac{1}{x}\\le x^2$, so the limit is $0=f(0)$ (squeeze theorem). (1), (2), (4) are undefined at $0$; in (3) the left limit is $-1\\ne f(0)$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-26-11",
      "chapter": "一、單選題",
      "number": "<11.>",
      "topic": "Squeeze theorem",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "It is known that $\\sqrt{16-x^2}\\le f(x)\\le x^2+4$ for $-1<x<1$, determine $\\displaystyle\\lim_{x\\to 0}f(x)$.",
      "options": {
        "1": "$4$",
        "2": "$16$",
        "3": "$2$",
        "4": "$0$",
        "5": "$\\nexists$"
      },
      "blanks": null,
      "answer": "1",
      "explanation": "Both bounds tend to $4$: $\\sqrt{16}=4$ and $0+4=4$. By the squeeze theorem the limit is $4$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-26-12",
      "chapter": "一、單選題",
      "number": "<12.>",
      "topic": "Graph reading: limits",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "The following Figure is the graph of $y=f(x)$, which one of the following options is **correct**?",
      "options": {
        "1": "$\\displaystyle\\lim_{x\\to -1}f(x)=3$",
        "2": "$\\displaystyle\\lim_{x\\to 1}f(x)$ exists.",
        "3": "$\\displaystyle\\lim_{x\\to 3^-}f(x)=-\\infty$",
        "4": "$\\displaystyle\\lim_{x\\to -\\infty}f(x)=0$",
        "5": "$\\forall c\\in(0,2)$, $\\displaystyle\\lim_{x\\to c}f(x)$ exists."
      },
      "blanks": null,
      "answer": "3",
      "explanation": "Left of $x=3$ the graph falls to $-\\infty$. (1) ✗ both sides approach the open circle $(-1,1)$, so the limit is $1$ (the dot $f(-1)=3$ doesn't count). (2) ✗ left limit $3$, right limit $-\\frac{1}{2}$. (4) ✗ the left branch levels off at $y=2$. (5) ✗ fails at $c=1$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "figure": "<svg viewBox=\"0 0 400 302\" role=\"img\" aria-label=\"Graph of y = f(x): for x &lt; -1 the curve approaches the horizontal asymptote y = 2 on the left and falls to an open circle at (-1,1); a filled dot at (-1,3). For -1 &lt; x ≤ 1 a line rises from the open circle at (-1,1) to a filled dot at (1,3). For 1 &lt; x &lt; 3 the curve starts at an open circle at (1,-0.5) and falls to −∞ at the vertical asymptote x = 3. For x &gt; 3 the curve comes down from +∞ and approaches y = 0 as x → ∞.\"><line class=\"grid\" x1=\"38\" y1=\"16\" x2=\"38\" y2=\"286\"/><line class=\"grid\" x1=\"74\" y1=\"16\" x2=\"74\" y2=\"286\"/><line class=\"grid\" x1=\"110\" y1=\"16\" x2=\"110\" y2=\"286\"/><line class=\"grid\" x1=\"146\" y1=\"16\" x2=\"146\" y2=\"286\"/><line class=\"grid\" x1=\"182\" y1=\"16\" x2=\"182\" y2=\"286\"/><line class=\"grid\" x1=\"218\" y1=\"16\" x2=\"218\" y2=\"286\"/><line class=\"grid\" x1=\"254\" y1=\"16\" x2=\"254\" y2=\"286\"/><line class=\"grid\" x1=\"290\" y1=\"16\" x2=\"290\" y2=\"286\"/><line class=\"grid\" x1=\"326\" y1=\"16\" x2=\"326\" y2=\"286\"/><line class=\"grid\" x1=\"362\" y1=\"16\" x2=\"362\" y2=\"286\"/><line class=\"grid\" x1=\"20\" y1=\"286\" x2=\"380\" y2=\"286\"/><line class=\"grid\" x1=\"20\" y1=\"250\" x2=\"380\" y2=\"250\"/><line class=\"grid\" x1=\"20\" y1=\"214\" x2=\"380\" y2=\"214\"/><line class=\"grid\" x1=\"20\" y1=\"178\" x2=\"380\" y2=\"178\"/><line class=\"grid\" x1=\"20\" y1=\"142\" x2=\"380\" y2=\"142\"/><line class=\"grid\" x1=\"20\" y1=\"106\" x2=\"380\" y2=\"106\"/><line class=\"grid\" x1=\"20\" y1=\"70\" x2=\"380\" y2=\"70\"/><line class=\"grid\" x1=\"20\" y1=\"34\" x2=\"380\" y2=\"34\"/><line class=\"axis\" x1=\"20\" y1=\"178\" x2=\"380\" y2=\"178\"/><line class=\"axis\" x1=\"182\" y1=\"16\" x2=\"182\" y2=\"286\"/><text x=\"38\" y=\"193\" text-anchor=\"middle\">-4</text><text x=\"74\" y=\"193\" text-anchor=\"middle\">-3</text><text x=\"110\" y=\"193\" text-anchor=\"middle\">-2</text><text x=\"146\" y=\"193\" text-anchor=\"middle\">-1</text><text x=\"218\" y=\"193\" text-anchor=\"middle\">1</text><text x=\"254\" y=\"193\" text-anchor=\"middle\">2</text><text x=\"290\" y=\"193\" text-anchor=\"middle\">3</text><text x=\"326\" y=\"193\" text-anchor=\"middle\">4</text><text x=\"362\" y=\"193\" text-anchor=\"middle\">5</text><text x=\"176\" y=\"290\" text-anchor=\"end\">-3</text><text x=\"176\" y=\"254\" text-anchor=\"end\">-2</text><text x=\"176\" y=\"218\" text-anchor=\"end\">-1</text><text x=\"176\" y=\"146\" text-anchor=\"end\">1</text><text x=\"176\" y=\"110\" text-anchor=\"end\">2</text><text x=\"176\" y=\"74\" text-anchor=\"end\">3</text><text x=\"176\" y=\"38\" text-anchor=\"end\">4</text><line class=\"curve\" stroke-dasharray=\"5 5\" stroke-width=\"1.2\" x1=\"20\" y1=\"106\" x2=\"146\" y2=\"106\"/><line class=\"curve\" stroke-dasharray=\"5 5\" stroke-width=\"1.2\" x1=\"290\" y1=\"16\" x2=\"290\" y2=\"286\"/><path class=\"curve\" d=\"M20.0,107.8 L21.6,107.8 L23.2,107.8 L24.7,107.9 L26.3,107.9 L27.9,108.0 L29.5,108.0 L31.0,108.0 L32.6,108.1 L34.2,108.1 L35.8,108.2 L37.3,108.2 L38.9,108.3 L40.5,108.3 L42.0,108.4 L43.6,108.4 L45.2,108.5 L46.8,108.6 L48.4,108.6 L49.9,108.7 L51.5,108.7 L53.1,108.8 L54.6,108.9 L56.2,108.9 L57.8,109.0 L59.4,109.1 L61.0,109.2 L62.5,109.3 L64.1,109.4 L65.7,109.4 L67.2,109.5 L68.8,109.6 L70.4,109.7 L72.0,109.9 L73.5,110.0 L75.1,110.1 L76.7,110.2 L78.3,110.3 L79.8,110.5 L81.4,110.6 L83.0,110.8 L84.6,110.9 L86.1,111.1 L87.7,111.2 L89.3,111.4 L90.9,111.6 L92.5,111.8 L94.0,112.0 L95.6,112.2 L97.2,112.5 L98.8,112.7 L100.3,113.0 L101.9,113.3 L103.5,113.6 L105.0,113.9 L106.6,114.2 L108.2,114.6 L109.8,114.9 L111.4,115.3 L112.9,115.8 L114.5,116.2 L116.1,116.7 L117.6,117.3 L119.2,117.8 L120.8,118.5 L122.4,119.1 L124.0,119.8 L125.5,120.6 L127.1,121.5 L128.7,122.4 L130.2,123.4 L131.8,124.5 L133.4,125.8 L135.0,127.1 L136.6,128.6 L138.1,130.2 L139.7,132.1 L141.3,134.1 L142.9,136.4 L144.4,139.0 L146.0,142.0\"/><path class=\"curve\" d=\"M146.0,142.0 L146.9,141.1 L147.8,140.2 L148.7,139.3 L149.6,138.4 L150.5,137.5 L151.4,136.6 L152.3,135.7 L153.2,134.8 L154.1,133.9 L155.0,133.0 L155.9,132.1 L156.8,131.2 L157.7,130.3 L158.6,129.4 L159.5,128.5 L160.4,127.6 L161.3,126.7 L162.2,125.8 L163.1,124.9 L164.0,124.0 L164.9,123.1 L165.8,122.2 L166.7,121.3 L167.6,120.4 L168.5,119.5 L169.4,118.6 L170.3,117.7 L171.2,116.8 L172.1,115.9 L173.0,115.0 L173.9,114.1 L174.8,113.2 L175.7,112.3 L176.6,111.4 L177.5,110.5 L178.4,109.6 L179.3,108.7 L180.2,107.8 L181.1,106.9 L182.0,106.0 L182.9,105.1 L183.8,104.2 L184.7,103.3 L185.6,102.4 L186.5,101.5 L187.4,100.6 L188.3,99.7 L189.2,98.8 L190.1,97.9 L191.0,97.0 L191.9,96.1 L192.8,95.2 L193.7,94.3 L194.6,93.4 L195.5,92.5 L196.4,91.6 L197.3,90.7 L198.2,89.8 L199.1,88.9 L200.0,88.0 L200.9,87.1 L201.8,86.2 L202.7,85.3 L203.6,84.4 L204.5,83.5 L205.4,82.6 L206.3,81.7 L207.2,80.8 L208.1,79.9 L209.0,79.0 L209.9,78.1 L210.8,77.2 L211.7,76.3 L212.6,75.4 L213.5,74.5 L214.4,73.6 L215.3,72.7 L216.2,71.8 L217.1,70.9 L218.0,70.0\"/><path class=\"curve\" d=\"M218.0,196.0 L218.9,196.2 L219.8,196.5 L220.7,196.7 L221.5,196.9 L222.4,197.2 L223.3,197.4 L224.2,197.7 L225.1,198.0 L226.0,198.2 L226.9,198.5 L227.8,198.8 L228.6,199.1 L229.5,199.4 L230.4,199.7 L231.3,200.1 L232.2,200.4 L233.1,200.8 L234.0,201.1 L234.8,201.5 L235.7,201.9 L236.6,202.3 L237.5,202.7 L238.4,203.1 L239.3,203.6 L240.2,204.0 L241.0,204.5 L241.9,205.0 L242.8,205.5 L243.7,206.0 L244.6,206.5 L245.5,207.1 L246.4,207.7 L247.3,208.3 L248.1,209.0 L249.0,209.6 L249.9,210.3 L250.8,211.1 L251.7,211.8 L252.6,212.6 L253.5,213.5 L254.3,214.3 L255.2,215.3 L256.1,216.3 L257.0,217.3 L257.9,218.4 L258.8,219.5 L259.7,220.7 L260.6,222.0 L261.4,223.4 L262.3,224.8 L263.2,226.4 L264.1,228.0 L265.0,229.8 L265.9,231.7 L266.8,233.8 L267.6,236.0 L268.5,238.4 L269.4,241.0 L270.3,243.8 L271.2,246.9 L272.1,250.3 L273.0,254.1 L273.8,258.2 L274.7,262.9 L275.6,268.1 L276.5,274.1 L277.4,280.8\"/><path class=\"curve\" d=\"M298.9,33.1 L300.0,48.0 L301.0,60.2 L302.0,70.2 L303.1,78.7 L304.1,85.9 L305.1,92.2 L306.1,97.6 L307.2,102.4 L308.2,106.7 L309.2,110.5 L310.2,113.9 L311.3,117.0 L312.3,119.8 L313.3,122.4 L314.3,124.7 L315.4,126.9 L316.4,128.9 L317.4,130.7 L318.4,132.4 L319.5,134.0 L320.5,135.5 L321.5,136.9 L322.5,138.2 L323.6,139.4 L324.6,140.5 L325.6,141.6 L326.6,142.6 L327.7,143.6 L328.7,144.5 L329.7,145.4 L330.8,146.2 L331.8,147.0 L332.8,147.7 L333.8,148.4 L334.9,149.1 L335.9,149.8 L336.9,150.4 L337.9,151.0 L339.0,151.5 L340.0,152.1 L341.0,152.6 L342.0,153.1 L343.1,153.6 L344.1,154.0 L345.1,154.5 L346.1,154.9 L347.2,155.3 L348.2,155.7 L349.2,156.1 L350.2,156.5 L351.3,156.8 L352.3,157.2 L353.3,157.5 L354.3,157.9 L355.4,158.2 L356.4,158.5 L357.4,158.8 L358.5,159.1 L359.5,159.3 L360.5,159.6 L361.5,159.9 L362.6,160.1 L363.6,160.4 L364.6,160.6 L365.6,160.9 L366.7,161.1 L367.7,161.3 L368.7,161.5 L369.7,161.7 L370.8,162.0 L371.8,162.2 L372.8,162.4 L373.8,162.5 L374.9,162.7 L375.9,162.9 L376.9,163.1 L377.9,163.3 L379.0,163.4 L380.0,163.6\"/><circle class=\"dot\" cx=\"146.0\" cy=\"70.0\" r=\"4.5\"/><circle class=\"dot\" cx=\"218.0\" cy=\"70.0\" r=\"4.5\"/><circle class=\"open\" cx=\"146.0\" cy=\"142.0\" r=\"4.5\"/><circle class=\"open\" cx=\"218.0\" cy=\"196.0\" r=\"4.5\"/><text x=\"376\" y=\"296\" text-anchor=\"end\">Figure</text></svg>"
    },
    {
      "id": "math-2026-10-26-13",
      "chapter": "一、單選題",
      "number": "<13.>",
      "topic": "Graph reading: continuity & asymptotes",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Accept the question <12.>, which one of the following options is **wrong**?",
      "options": {
        "1": "$f$ is continuous at $x=-1$.",
        "2": "$f$ is left-continuous at $x=1$.",
        "3": "$f$ has exactly two horizontal(水平的) asymptotes(漸近).",
        "4": "$f$ has exactly one vertical(垂直的) asymptote.",
        "5": "$\\displaystyle\\lim_{x\\to\\infty}f(x)=0$"
      },
      "blanks": null,
      "answer": "1",
      "explanation": "$\\lim_{x\\to-1}f(x)=1$ but $f(-1)=3$, so $f$ is not continuous at $-1$. The others are true: $\\lim_{x\\to1^-}f=3=f(1)$; horizontal asymptotes $y=2$ and $y=0$; one vertical asymptote $x=3$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "figure": "<svg viewBox=\"0 0 400 302\" role=\"img\" aria-label=\"Graph of y = f(x): for x &lt; -1 the curve approaches the horizontal asymptote y = 2 on the left and falls to an open circle at (-1,1); a filled dot at (-1,3). For -1 &lt; x ≤ 1 a line rises from the open circle at (-1,1) to a filled dot at (1,3). For 1 &lt; x &lt; 3 the curve starts at an open circle at (1,-0.5) and falls to −∞ at the vertical asymptote x = 3. For x &gt; 3 the curve comes down from +∞ and approaches y = 0 as x → ∞.\"><line class=\"grid\" x1=\"38\" y1=\"16\" x2=\"38\" y2=\"286\"/><line class=\"grid\" x1=\"74\" y1=\"16\" x2=\"74\" y2=\"286\"/><line class=\"grid\" x1=\"110\" y1=\"16\" x2=\"110\" y2=\"286\"/><line class=\"grid\" x1=\"146\" y1=\"16\" x2=\"146\" y2=\"286\"/><line class=\"grid\" x1=\"182\" y1=\"16\" x2=\"182\" y2=\"286\"/><line class=\"grid\" x1=\"218\" y1=\"16\" x2=\"218\" y2=\"286\"/><line class=\"grid\" x1=\"254\" y1=\"16\" x2=\"254\" y2=\"286\"/><line class=\"grid\" x1=\"290\" y1=\"16\" x2=\"290\" y2=\"286\"/><line class=\"grid\" x1=\"326\" y1=\"16\" x2=\"326\" y2=\"286\"/><line class=\"grid\" x1=\"362\" y1=\"16\" x2=\"362\" y2=\"286\"/><line class=\"grid\" x1=\"20\" y1=\"286\" x2=\"380\" y2=\"286\"/><line class=\"grid\" x1=\"20\" y1=\"250\" x2=\"380\" y2=\"250\"/><line class=\"grid\" x1=\"20\" y1=\"214\" x2=\"380\" y2=\"214\"/><line class=\"grid\" x1=\"20\" y1=\"178\" x2=\"380\" y2=\"178\"/><line class=\"grid\" x1=\"20\" y1=\"142\" x2=\"380\" y2=\"142\"/><line class=\"grid\" x1=\"20\" y1=\"106\" x2=\"380\" y2=\"106\"/><line class=\"grid\" x1=\"20\" y1=\"70\" x2=\"380\" y2=\"70\"/><line class=\"grid\" x1=\"20\" y1=\"34\" x2=\"380\" y2=\"34\"/><line class=\"axis\" x1=\"20\" y1=\"178\" x2=\"380\" y2=\"178\"/><line class=\"axis\" x1=\"182\" y1=\"16\" x2=\"182\" y2=\"286\"/><text x=\"38\" y=\"193\" text-anchor=\"middle\">-4</text><text x=\"74\" y=\"193\" text-anchor=\"middle\">-3</text><text x=\"110\" y=\"193\" text-anchor=\"middle\">-2</text><text x=\"146\" y=\"193\" text-anchor=\"middle\">-1</text><text x=\"218\" y=\"193\" text-anchor=\"middle\">1</text><text x=\"254\" y=\"193\" text-anchor=\"middle\">2</text><text x=\"290\" y=\"193\" text-anchor=\"middle\">3</text><text x=\"326\" y=\"193\" text-anchor=\"middle\">4</text><text x=\"362\" y=\"193\" text-anchor=\"middle\">5</text><text x=\"176\" y=\"290\" text-anchor=\"end\">-3</text><text x=\"176\" y=\"254\" text-anchor=\"end\">-2</text><text x=\"176\" y=\"218\" text-anchor=\"end\">-1</text><text x=\"176\" y=\"146\" text-anchor=\"end\">1</text><text x=\"176\" y=\"110\" text-anchor=\"end\">2</text><text x=\"176\" y=\"74\" text-anchor=\"end\">3</text><text x=\"176\" y=\"38\" text-anchor=\"end\">4</text><line class=\"curve\" stroke-dasharray=\"5 5\" stroke-width=\"1.2\" x1=\"20\" y1=\"106\" x2=\"146\" y2=\"106\"/><line class=\"curve\" stroke-dasharray=\"5 5\" stroke-width=\"1.2\" x1=\"290\" y1=\"16\" x2=\"290\" y2=\"286\"/><path class=\"curve\" d=\"M20.0,107.8 L21.6,107.8 L23.2,107.8 L24.7,107.9 L26.3,107.9 L27.9,108.0 L29.5,108.0 L31.0,108.0 L32.6,108.1 L34.2,108.1 L35.8,108.2 L37.3,108.2 L38.9,108.3 L40.5,108.3 L42.0,108.4 L43.6,108.4 L45.2,108.5 L46.8,108.6 L48.4,108.6 L49.9,108.7 L51.5,108.7 L53.1,108.8 L54.6,108.9 L56.2,108.9 L57.8,109.0 L59.4,109.1 L61.0,109.2 L62.5,109.3 L64.1,109.4 L65.7,109.4 L67.2,109.5 L68.8,109.6 L70.4,109.7 L72.0,109.9 L73.5,110.0 L75.1,110.1 L76.7,110.2 L78.3,110.3 L79.8,110.5 L81.4,110.6 L83.0,110.8 L84.6,110.9 L86.1,111.1 L87.7,111.2 L89.3,111.4 L90.9,111.6 L92.5,111.8 L94.0,112.0 L95.6,112.2 L97.2,112.5 L98.8,112.7 L100.3,113.0 L101.9,113.3 L103.5,113.6 L105.0,113.9 L106.6,114.2 L108.2,114.6 L109.8,114.9 L111.4,115.3 L112.9,115.8 L114.5,116.2 L116.1,116.7 L117.6,117.3 L119.2,117.8 L120.8,118.5 L122.4,119.1 L124.0,119.8 L125.5,120.6 L127.1,121.5 L128.7,122.4 L130.2,123.4 L131.8,124.5 L133.4,125.8 L135.0,127.1 L136.6,128.6 L138.1,130.2 L139.7,132.1 L141.3,134.1 L142.9,136.4 L144.4,139.0 L146.0,142.0\"/><path class=\"curve\" d=\"M146.0,142.0 L146.9,141.1 L147.8,140.2 L148.7,139.3 L149.6,138.4 L150.5,137.5 L151.4,136.6 L152.3,135.7 L153.2,134.8 L154.1,133.9 L155.0,133.0 L155.9,132.1 L156.8,131.2 L157.7,130.3 L158.6,129.4 L159.5,128.5 L160.4,127.6 L161.3,126.7 L162.2,125.8 L163.1,124.9 L164.0,124.0 L164.9,123.1 L165.8,122.2 L166.7,121.3 L167.6,120.4 L168.5,119.5 L169.4,118.6 L170.3,117.7 L171.2,116.8 L172.1,115.9 L173.0,115.0 L173.9,114.1 L174.8,113.2 L175.7,112.3 L176.6,111.4 L177.5,110.5 L178.4,109.6 L179.3,108.7 L180.2,107.8 L181.1,106.9 L182.0,106.0 L182.9,105.1 L183.8,104.2 L184.7,103.3 L185.6,102.4 L186.5,101.5 L187.4,100.6 L188.3,99.7 L189.2,98.8 L190.1,97.9 L191.0,97.0 L191.9,96.1 L192.8,95.2 L193.7,94.3 L194.6,93.4 L195.5,92.5 L196.4,91.6 L197.3,90.7 L198.2,89.8 L199.1,88.9 L200.0,88.0 L200.9,87.1 L201.8,86.2 L202.7,85.3 L203.6,84.4 L204.5,83.5 L205.4,82.6 L206.3,81.7 L207.2,80.8 L208.1,79.9 L209.0,79.0 L209.9,78.1 L210.8,77.2 L211.7,76.3 L212.6,75.4 L213.5,74.5 L214.4,73.6 L215.3,72.7 L216.2,71.8 L217.1,70.9 L218.0,70.0\"/><path class=\"curve\" d=\"M218.0,196.0 L218.9,196.2 L219.8,196.5 L220.7,196.7 L221.5,196.9 L222.4,197.2 L223.3,197.4 L224.2,197.7 L225.1,198.0 L226.0,198.2 L226.9,198.5 L227.8,198.8 L228.6,199.1 L229.5,199.4 L230.4,199.7 L231.3,200.1 L232.2,200.4 L233.1,200.8 L234.0,201.1 L234.8,201.5 L235.7,201.9 L236.6,202.3 L237.5,202.7 L238.4,203.1 L239.3,203.6 L240.2,204.0 L241.0,204.5 L241.9,205.0 L242.8,205.5 L243.7,206.0 L244.6,206.5 L245.5,207.1 L246.4,207.7 L247.3,208.3 L248.1,209.0 L249.0,209.6 L249.9,210.3 L250.8,211.1 L251.7,211.8 L252.6,212.6 L253.5,213.5 L254.3,214.3 L255.2,215.3 L256.1,216.3 L257.0,217.3 L257.9,218.4 L258.8,219.5 L259.7,220.7 L260.6,222.0 L261.4,223.4 L262.3,224.8 L263.2,226.4 L264.1,228.0 L265.0,229.8 L265.9,231.7 L266.8,233.8 L267.6,236.0 L268.5,238.4 L269.4,241.0 L270.3,243.8 L271.2,246.9 L272.1,250.3 L273.0,254.1 L273.8,258.2 L274.7,262.9 L275.6,268.1 L276.5,274.1 L277.4,280.8\"/><path class=\"curve\" d=\"M298.9,33.1 L300.0,48.0 L301.0,60.2 L302.0,70.2 L303.1,78.7 L304.1,85.9 L305.1,92.2 L306.1,97.6 L307.2,102.4 L308.2,106.7 L309.2,110.5 L310.2,113.9 L311.3,117.0 L312.3,119.8 L313.3,122.4 L314.3,124.7 L315.4,126.9 L316.4,128.9 L317.4,130.7 L318.4,132.4 L319.5,134.0 L320.5,135.5 L321.5,136.9 L322.5,138.2 L323.6,139.4 L324.6,140.5 L325.6,141.6 L326.6,142.6 L327.7,143.6 L328.7,144.5 L329.7,145.4 L330.8,146.2 L331.8,147.0 L332.8,147.7 L333.8,148.4 L334.9,149.1 L335.9,149.8 L336.9,150.4 L337.9,151.0 L339.0,151.5 L340.0,152.1 L341.0,152.6 L342.0,153.1 L343.1,153.6 L344.1,154.0 L345.1,154.5 L346.1,154.9 L347.2,155.3 L348.2,155.7 L349.2,156.1 L350.2,156.5 L351.3,156.8 L352.3,157.2 L353.3,157.5 L354.3,157.9 L355.4,158.2 L356.4,158.5 L357.4,158.8 L358.5,159.1 L359.5,159.3 L360.5,159.6 L361.5,159.9 L362.6,160.1 L363.6,160.4 L364.6,160.6 L365.6,160.9 L366.7,161.1 L367.7,161.3 L368.7,161.5 L369.7,161.7 L370.8,162.0 L371.8,162.2 L372.8,162.4 L373.8,162.5 L374.9,162.7 L375.9,162.9 L376.9,163.1 L377.9,163.3 L379.0,163.4 L380.0,163.6\"/><circle class=\"dot\" cx=\"146.0\" cy=\"70.0\" r=\"4.5\"/><circle class=\"dot\" cx=\"218.0\" cy=\"70.0\" r=\"4.5\"/><circle class=\"open\" cx=\"146.0\" cy=\"142.0\" r=\"4.5\"/><circle class=\"open\" cx=\"218.0\" cy=\"196.0\" r=\"4.5\"/><text x=\"376\" y=\"296\" text-anchor=\"end\">Figure</text></svg>"
    },
    {
      "id": "math-2026-10-26-14",
      "chapter": "一、單選題",
      "number": "<14.>",
      "topic": "Vertical asymptote",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which one of the following options has a vertical asymptote at $x=-1$? ($[\\![\\cdot]\\!]$ is the greatest integer function.)",
      "options": {
        "1": "$f(x)=\\dfrac{x+1}{\\sqrt[3]{x}}$",
        "2": "$f(x)=\\dfrac{\\sin x}{x^2+3x+2}$",
        "3": "$f(x)=[\\![x+1]\\!]$",
        "4": "$f(x)=\\dfrac{x^2-1}{x+1}$",
        "5": "$f(x)=\\dfrac{x^2+4x+3}{x^2-1}$"
      },
      "blanks": null,
      "answer": "2",
      "explanation": "$x^2+3x+2=(x+1)(x+2)$ and $\\sin(-1)\\ne 0$, so $f\\to\\pm\\infty$ at $-1$. (4) and (5) cancel $x+1$ (holes); (1) has its asymptote at $x=0$; (3) only jumps.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-26-15",
      "chapter": "一、單選題",
      "number": "<15.>",
      "topic": "Trig limit",
      "type": "single_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Find $\\displaystyle\\lim_{x\\to 0}\\frac{1-\\cos 6x}{x\\sin 3x}$.",
      "options": {
        "1": "$0$",
        "2": "$2$",
        "3": "$3$",
        "4": "$6$",
        "5": "$\\nexists$"
      },
      "blanks": null,
      "answer": "4",
      "explanation": "$1-\\cos 6x=2\\sin^2 3x$, so the expression is $\\dfrac{2\\sin^2 3x}{x\\sin 3x}=\\dfrac{2\\sin 3x}{x}\\to 2\\cdot 3=6$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4
    },
    {
      "id": "math-2026-10-26-16",
      "chapter": "二、複選題",
      "number": "<16.>",
      "topic": "Limit theory",
      "type": "multi_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將正確答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which of the following options are **wrong**?",
      "options": {
        "1": "If $f(a)$ is undefined, then $\\displaystyle\\lim_{x\\to a}f(x)$ does not exist.",
        "2": "If $\\displaystyle\\lim_{x\\to a}f(x)=L$, then $\\displaystyle\\lim_{x\\to a^+}f(x)=L$.",
        "3": "If $\\displaystyle\\lim_{x\\to a}\\big(f(x)+g(x)\\big)$ exists, then $\\displaystyle\\lim_{x\\to a}f(x)$ and $\\displaystyle\\lim_{x\\to a}g(x)$ both exist.",
        "4": "$\\displaystyle\\lim_{x\\to 0^+}\\frac{1}{x}=-\\infty$",
        "5": "$\\displaystyle\\lim_{x\\to 0^+}\\sqrt{x}=0$"
      },
      "blanks": null,
      "answer": [
        "1",
        "3",
        "4"
      ],
      "explanation": "(1) ✗ a limit can exist at a hole. (3) ✗ e.g. $f=\\frac{1}{x}$, $g=-\\frac{1}{x}$: the sum's limit is $0$, but neither limit exists. (4) ✗ from the right $\\frac{1}{x}\\to+\\infty$. (2) and (5) are true.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5
    },
    {
      "id": "math-2026-10-26-17",
      "chapter": "二、複選題",
      "number": "<17.>",
      "topic": "Continuity theory + IVT",
      "type": "multi_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將正確答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which of the following options are **correct**?",
      "options": {
        "1": "If $f$ is continuous on $[a,b]$ and $f(a)f(b)<0$, then $f(c)=0$ for some $c$ in $(a,b)$.",
        "2": "If $\\displaystyle\\lim_{x\\to 0}f(x)$ exists, then $f(0)=\\displaystyle\\lim_{x\\to 0}f(x)$.",
        "3": "$f(x)=\\sqrt{x}$ is continuous at $x=4$.",
        "4": "$f(x)=\\dfrac{1}{x^2-4}$ is continuous at $x=2$.",
        "5": "There is a root of the equation $x^3-4x+1=0$ between $1$ and $2$."
      },
      "blanks": null,
      "answer": [
        "1",
        "3",
        "5"
      ],
      "explanation": "(1) is the Intermediate Value Theorem. (2) ✗ $f(0)$ may be undefined or different. (4) ✗ undefined at $2$. (5) $f(1)=-2<0$, $f(2)=1>0$, so by the IVT there is a root.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5
    },
    {
      "id": "math-2026-10-26-18",
      "chapter": "二、複選題",
      "number": "<18.>",
      "topic": "Rational function: asymptotes",
      "type": "multi_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將正確答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "If $f(x)=\\dfrac{x^3+1}{x^2-4}$, which of the following options are **correct**?",
      "options": {
        "1": "$\\displaystyle\\lim_{x\\to 2^+}f(x)=\\infty$",
        "2": "$\\displaystyle\\lim_{x\\to -2^+}f(x)=\\infty$",
        "3": "$x=2$ is a vertical(垂直的) asymptote of the graph of $f$.",
        "4": "$y=x+1$ is an oblique(傾斜的) asymptote of the graph of $f$.",
        "5": "$x=-1$ is a vertical asymptote of the graph of $f$."
      },
      "blanks": null,
      "answer": [
        "1",
        "2",
        "3"
      ],
      "explanation": "At $2^+$: $\\frac{9}{0^+}\\to\\infty$. At $-2^+$: $x^2<4$ so the bottom $\\to 0^-$, top $=-7$, so $\\frac{-7}{0^-}\\to+\\infty$. Division: $x^3+1=(x^2-4)x+(4x+1)$, so the oblique asymptote is $y=x$. $f(-1)=0$, so $x=-1$ is not an asymptote.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5
    },
    {
      "id": "math-2026-10-26-19",
      "chapter": "二、複選題",
      "number": "<19.>",
      "topic": "sin kx / x and x sin(k/x)",
      "type": "multi_choice",
      "difficulty": 2,
      "chain_id": null,
      "given": "(請將正確答案填入答案卡內，注意題號不要劃錯!!)",
      "stem": "Which of the following options are **wrong**?",
      "options": {
        "1": "$\\displaystyle\\lim_{x\\to 0}\\frac{\\sin 4x}{2x}=\\frac{1}{2}$",
        "2": "$\\displaystyle\\lim_{x\\to\\infty}\\frac{\\sin 4x}{2x}=2$",
        "3": "$\\displaystyle\\lim_{x\\to 0}2x\\sin\\frac{4}{x}=0$",
        "4": "$\\displaystyle\\lim_{x\\to\\infty}2x\\sin\\frac{4}{x}=8$",
        "5": "$\\displaystyle\\lim_{x\\to\\infty}\\sin\\frac{4}{x}=0$"
      },
      "blanks": null,
      "answer": [
        "1",
        "2"
      ],
      "explanation": "(1) ✗ $\\frac{\\sin 4x}{2x}=2\\cdot\\frac{\\sin 4x}{4x}\\to 2$. (2) ✗ $|\\sin 4x|\\le 1$, so it is squeezed to $0$. (3) true by squeeze; (4) $2x\\sin\\frac{4}{x}=8\\cdot\\frac{\\sin(4/x)}{4/x}\\to 8$; (5) true.",
      "key_terms": [],
      "trap_tags": [],
      "points": 5
    },
    {
      "id": "math-2026-10-26-20",
      "chapter": "三、選填題",
      "number": "A",
      "topic": "Limit laws",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題的答案，均以最簡單分數作答，劃填至答案卡上指定的題號內，否則不予計分)",
      "stem": "If $\\displaystyle\\lim_{x\\to 1}f(x)=2$ and $\\displaystyle\\lim_{x\\to 1}g(x)=-3$; then $\\displaystyle\\lim_{x\\to 1}\\frac{f(x)g(x)+4}{g^2(x)-f(x)}=\\dfrac{\\boxed{20}\\boxed{21}}{\\boxed{22}}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "$\\dfrac{2(-3)+4}{9-2}=\\dfrac{-2}{7}$.",
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
          "v": "2"
        },
        {
          "n": 22,
          "v": "7"
        }
      ]
    },
    {
      "id": "math-2026-10-26-21",
      "chapter": "三、選填題",
      "number": "B",
      "topic": "Trig limit",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題的答案，均以最簡單分數作答，劃填至答案卡上指定的題號內，否則不予計分)",
      "stem": "If $f(x)=\\begin{cases}\\dfrac{1-\\cos 3x}{4x^2}, & x\\ne 0\\\\[4pt] \\dfrac{3}{4}, & x=0\\end{cases}$, then $\\displaystyle\\lim_{x\\to 0}f(x)=\\dfrac{\\boxed{23}}{\\boxed{24}}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "$\\dfrac{1-\\cos 3x}{x^2}\\to\\dfrac{9}{2}$; divide by $4$: $\\dfrac{9}{8}$. $f(0)$ does not affect the limit.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "slots": [
        {
          "n": 23,
          "v": "9"
        },
        {
          "n": 24,
          "v": "8"
        }
      ]
    },
    {
      "id": "math-2026-10-26-22",
      "chapter": "三、選填題",
      "number": "C",
      "topic": "Piecewise continuity",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題的答案，均以最簡單分數作答，劃填至答案卡上指定的題號內，否則不予計分)",
      "stem": "If $f(x)=\\begin{cases}2x+3, & x\\le -1\\\\ x^2+ax+b, & -1<x<2\\\\ 16, & x\\ge 2\\end{cases}$ is a continuous function, then $2a+b=\\boxed{25}\\boxed{26}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "At $x=-1$: $1-a+b=1\\Rightarrow b=a$. At $x=2$: $4+2a+b=16\\Rightarrow 3a=12$, so $a=b=4$ and $2a+b=12$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "slots": [
        {
          "n": 25,
          "v": "1"
        },
        {
          "n": 26,
          "v": "2"
        }
      ]
    },
    {
      "id": "math-2026-10-26-23",
      "chapter": "三、選填題",
      "number": "D",
      "topic": "0/0 limit with nested radicals",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題的答案，均以最簡單分數作答，劃填至答案卡上指定的題號內，否則不予計分)",
      "stem": "Evaluate $\\displaystyle\\lim_{x\\to 2}\\frac{\\sqrt{2+\\sqrt{x+2}}-2}{x-2}=\\dfrac{\\boxed{27}}{\\boxed{28}\\boxed{29}}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "Rationalise twice: $\\dfrac{\\sqrt{2+\\sqrt{x+2}}-2}{x-2}=\\dfrac{\\sqrt{x+2}-2}{(x-2)(\\sqrt{2+\\sqrt{x+2}}+2)}=\\dfrac{1}{(\\sqrt{x+2}+2)(\\sqrt{2+\\sqrt{x+2}}+2)}\\to\\dfrac{1}{4\\cdot 4}=\\dfrac{1}{16}$.",
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
          "v": "1"
        },
        {
          "n": 29,
          "v": "6"
        }
      ]
    },
    {
      "id": "math-2026-10-26-24",
      "chapter": "三、選填題",
      "number": "E",
      "topic": "Removable discontinuity",
      "type": "fill_slots",
      "difficulty": 2,
      "chain_id": null,
      "given": "(各題的答案，均以最簡單分數作答，劃填至答案卡上指定的題號內，否則不予計分)",
      "stem": "If $f(x)=\\begin{cases}\\dfrac{x^2+ax+b}{x+1}, & x\\ne -1\\\\[4pt] 4, & x=-1\\end{cases}$ is a continuous function, then $a+b=\\boxed{30}\\boxed{31}$",
      "options": null,
      "blanks": null,
      "answer": null,
      "explanation": "The numerator must be $0$ at $-1$: $1-a+b=0$. Then $\\dfrac{x^2+ax+b}{x+1}=x+(a-1)\\to -1+a-1=a-2=4$, so $a=6$, $b=5$, $a+b=11$.",
      "key_terms": [],
      "trap_tags": [],
      "points": 4,
      "slots": [
        {
          "n": 30,
          "v": "1"
        },
        {
          "n": 31,
          "v": "1"
        }
      ]
    }
  ]
};
