(function () {
  "use strict";

  var SUBJECTS = [
    { id: "guowen",          name: "Guowen",          native: "國文" },
    { id: "english-text",    name: "English Text",    native: "英文 · 閱讀" },
    { id: "english-grammar", name: "English Grammar", native: "英文 · 文法" },
    { id: "maths",           name: "Maths",           native: "數學", math: true },
    { id: "physics",         name: "Physics",         native: "物理" },
    { id: "chemistry",       name: "Chemistry",       native: "化學", lang: "zh-Hant", tutor: true },
    { id: "tutor",           name: "Chemistry Tutor", native: "化學 · AI 助教" }
  ];

  // Static sets: KAOGU_DATA[id] = [questions]. Daily sets: KAOGU_SETS[id] lists
  // dates, and data/<id>/<date>.js registers KAOGU_DAILY[id][date] = { questions }.
  var DATA = window.KAOGU_DATA || {};
  var SETS = window.KAOGU_SETS || {};
  var KEYS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  var app = document.getElementById("app");
  var backBtn = document.getElementById("back");
  var tpl = function (id) { return document.getElementById(id).content.cloneNode(true); };

  // Keyboard handler for the active screen, replaced on every render.
  var onKey = null;

  function pad(n) { return n < 10 ? "0" + n : String(n); }

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function show(view, title, showBack) {
    app.replaceChildren(view);
    backBtn.hidden = !showBack;
    document.title = title ? title + " · KaoGu" : "KaoGu";
    window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
  }

  /* ---------- Home ---------- */

  function renderHome() {
    var view = tpl("tpl-home");
    var list = view.getElementById("subjects");

    SUBJECTS.forEach(function (s, i) {
      var a = el("a", "card");
      a.href = "#/" + s.id;
      a.innerHTML =
        '<div class="card-top"><span>' + pad(i + 1) + '</span>' +
        '<span class="card-arrow" aria-hidden="true">&rarr;</span></div>' +
        '<div><div class="card-name"></div><div class="card-native"></div></div>';
      a.querySelector(".card-name").textContent = s.name;
      a.querySelector(".card-native").textContent = s.native;
      var li = el("li");
      li.appendChild(a);
      list.appendChild(li);
    });

    onKey = null;
    show(view, "", false);
  }

  /* ---------- Placeholder ---------- */

  function renderComingSoon(subject) {
    var i = SUBJECTS.indexOf(subject);
    var view = tpl("tpl-subject");
    view.querySelector(".index").textContent = pad(i + 1) + " / " + pad(SUBJECTS.length);
    view.querySelector(".title").textContent = subject.name;
    view.querySelector(".native").textContent = subject.native;
    onKey = null;
    show(view, subject.name, true);
  }

  /* ---------- Daily sets ---------- */

  // Daily sets roll over at midnight Taiwan time (UTC+8, no daylight saving).
  function today() {
    return new Date(Date.now() + 8 * 3600 * 1000).toISOString().slice(0, 10);
  }

  // Newest date that is not in the future; falls back to the oldest set.
  function pickDate(dates) {
    var now = today();
    var past = dates.filter(function (d) { return d <= now; });
    return past.length ? past[past.length - 1] : dates[0];
  }

  function loadDaily(subject) {
    var date = pickDate(SETS[subject.id]);
    var daily = window.KAOGU_DAILY && window.KAOGU_DAILY[subject.id];
    if (daily && daily[date]) return Promise.resolve({ date: date, questions: daily[date].questions });

    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = "data/" + subject.id + "/" + date + ".js";
      s.onload = function () {
        var set = window.KAOGU_DAILY && window.KAOGU_DAILY[subject.id] && window.KAOGU_DAILY[subject.id][date];
        set ? resolve({ date: date, questions: set.questions }) : reject(new Error("empty set"));
      };
      s.onerror = function () { reject(new Error("load failed")); };
      document.head.appendChild(s);
    });
  }

  // Accept both the simple format ({ q, options: [], answer: 0, explain }) and
  // the generator format from prompts/*.md ({ stem, options: {A..D}, answer: "A", ... }).
  // Types: single_choice / count_choice (one answer), multi_choice (answer is an
  // array of keys), fill_slots (answer is `slots`: [{ n, v }] one character each).
  function normalize(item) {
    if (item.normalized) return item;
    if (!item.stem) {
      return Object.assign({}, item, { normalized: true, type: "single_choice",
        keys: KEYS.slice(0, item.options.length) });
    }
    var keys = Object.keys(item.options || {});
    var options = keys.map(function (k) { return String(item.options[k]); });

    // Worksheet style puts a shared unit only after the last option ("… (D) 6 克").
    var unit = options.length && options[options.length - 1].match(/^[-\d.×⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+\s+(\S+)$/);
    var numeric = /^[-\d.×⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+$/;
    if (unit && options.slice(0, -1).every(function (o) { return numeric.test(o); })) {
      options = options.map(function (o, i) { return i < options.length - 1 ? o + " " + unit[1] : o; });
    }

    var type = item.type === "multi_choice" || item.type === "fill_slots" ? item.type : "single_choice";
    var answer = type === "multi_choice"
      ? item.answer.map(function (k) { return keys.indexOf(k); }).sort()
      : type === "fill_slots" ? null : keys.indexOf(item.answer);

    return {
      normalized: true,
      type: type,
      q: item.stem,
      given: item.given,
      tag: item.chapter + (item.number ? " · " + item.number : ""),
      keys: keys,
      options: options,
      answer: answer,
      slots: item.slots,
      figure: item.figure,
      points: item.points,
      explain: item.explanation,
      terms: item.key_terms,
      underline: item.underline
    };
  }

  function label(item, i) {
    return /^\d+$/.test(item.keys[i]) ? "(" + item.keys[i] + ")" : item.keys[i];
  }

  // Render $…$ maths with KaTeX when it has loaded; plain text otherwise.
  function typeset(node) {
    if (window.renderMathInElement) {
      window.renderMathInElement(node, {
        delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }],
        throwOnError: false
      });
    }
  }

  function isRight(item, pick) {
    if (pick == null) return false;
    if (item.type === "multi_choice") return pick.join() === item.answer.join();
    if (item.type === "fill_slots") return item.slots.every(function (s, i) { return pick[i] === s.v; });
    return pick === item.answer;
  }

  function answerText(item, pick) {
    if (item.type === "multi_choice") {
      return pick.length ? pick.map(function (i) { return label(item, i); }).join(" ") : "(none)";
    }
    if (item.type === "fill_slots") {
      return item.slots.map(function (s, i) { return "<" + s.n + ".> " + (pick[i] || "·"); }).join("  ");
    }
    return label(item, pick) + " " + item.options[pick];
  }

  function correctText(item) {
    if (item.type === "multi_choice") return answerText(item, item.answer);
    if (item.type === "fill_slots") return answerText(item, item.slots.map(function (s) { return s.v; }));
    return label(item, item.answer) + " " + item.options[item.answer];
  }

  // Plain-text copy of a question and the student's answer, for the tutor.
  function questionText(item, pick) {
    var lines = [];
    if (item.tag) lines.push("（" + item.tag + "）");
    if (item.given) lines.push(item.given);
    lines.push("題目：" + item.q.replace(/\*\*/g, ""));
    if (item.type !== "fill_slots") {
      lines.push("選項：" + item.options.map(function (o, i) { return "(" + item.keys[i] + ") " + o; }).join("  "));
    }
    lines.push("我的答案：" + (pick == null ? "(沒作答)" : answerText(item, pick)));
    lines.push("正確答案：" + correctText(item));
    if (item.explain) lines.push("解析：" + item.explain);
    return lines.join("\n");
  }

  /* ---------- Quiz ---------- */

  // Render a sentence, turning each ___ into a blank. If `fill` is given
  // (e.g. "drinks … is drinking"), its parts are written into the blanks.
  // **word** in a stem becomes bold + underlined (e.g. **correct** / **incorrect**).
  function richText(text) {
    var frag = document.createDocumentFragment();
    text.split("**").forEach(function (part, i) {
      if (!part) return;
      if (i % 2) { var b = el("strong", "key-word"); b.appendChild(el("u", null, part)); frag.appendChild(b); }
      else frag.appendChild(document.createTextNode(part));
    });
    return frag;
  }

  function sentenceNodes(q, fill) {
    var parts = q.split("___");
    var answers = fill ? fill.split(" … ") : [];
    var frag = document.createDocumentFragment();
    parts.forEach(function (text, i) {
      frag.appendChild(richText(text));
      if (i < parts.length - 1) {
        var b = el("span", "blank" + (fill ? " filled" : ""), fill ? answers[i] : "");
        if (!fill) b.setAttribute("aria-label", "blank");
        frag.appendChild(b);
      }
    });
    return frag;
  }

  // Error-picking sentences: underline each option's text and label it with its letter.
  function markedNodes(text, parts, keys) {
    var frag = document.createDocumentFragment();
    var hits = parts.map(function (p, i) { return { at: text.indexOf(p), text: p, key: keys[i] }; })
      .filter(function (h) { return h.at >= 0; })
      .sort(function (a, b) { return a.at - b.at; });
    var pos = 0;
    hits.forEach(function (h) {
      if (h.at < pos) return;
      frag.appendChild(document.createTextNode(text.slice(pos, h.at)));
      var u = el("u", "part", h.text);
      u.appendChild(el("sup", null, h.key));
      frag.appendChild(u);
      pos = h.at + h.text.length;
    });
    frag.appendChild(document.createTextNode(text.slice(pos)));
    return frag;
  }

  function startQuiz(subject, questions, date) {
    var state = { index: 0, picks: [], date: date };
    renderQuestion(subject, questions.map(normalize), state);
  }

  function renderMessage(subject, text) {
    var view = tpl("tpl-subject");
    view.querySelector(".index").textContent = subject.native;
    view.querySelector(".title").textContent = subject.name;
    view.querySelector(".native").remove();
    view.querySelector(".empty").textContent = text;
    onKey = null;
    show(view, subject.name, true);
  }

  function renderQuestion(subject, questions, state) {
    var item = questions[state.index];
    var total = questions.length;
    var view = tpl("tpl-quiz");
    var sentence = view.querySelector(".sentence");
    var optionsBox = view.querySelector(".options");
    var slotsBox = view.querySelector(".slots");
    var feedback = view.querySelector(".feedback");
    var checkBtn = view.querySelector(".check");
    var nextBtn = view.querySelector(".next");
    var buttons = [];
    var selected = [];           // multi_choice: chosen option indexes
    var chars = [];              // fill_slots: typed characters
    var cursor = 0;              // fill_slots: active slot
    var boxes = [];

    view.querySelector(".quiz-subject").textContent = subject.name;
    view.querySelector(".quiz-count").textContent = pad(state.index + 1) + " / " + pad(total);
    view.querySelector(".progress-bar").style.width = (state.index / total) * 100 + "%";
    if (subject.lang) view.querySelector(".quiz").lang = subject.lang;
    if (item.tag) view.querySelector(".q-tag").textContent = item.tag;
    if (item.given) view.querySelector(".q-given").textContent = item.given;
    if (subject.math || item.q.length > (subject.lang ? 40 : 90)) sentence.classList.add("long");
    sentence.appendChild(item.underline ? markedNodes(item.q, item.options, item.keys) : sentenceNodes(item.q));
    if (item.figure) {
      var fig = view.querySelector(".q-figure");
      fig.innerHTML = item.figure;   // trusted SVG from the repo's data files
      fig.hidden = false;
    }

    // Word banks (more than 4 short choices) sit in a compact grid.
    if (item.options.length > 4 && item.options.every(function (o) { return o.length <= 24; })) {
      optionsBox.classList.add("bank");
    }

    item.options.forEach(function (opt, i) {
      var b = el("button", "option");
      b.type = "button";
      b.appendChild(el("span", "option-key", label(item, i)));
      b.appendChild(el("span", "option-text", opt));
      b.appendChild(el("span", "option-mark"));
      b.addEventListener("click", function () { choose(i); });
      buttons.push(b);
      optionsBox.appendChild(b);
    });

    if (item.type === "multi_choice") {
      view.querySelector(".q-hint").textContent = "Select every correct option, then Check.";
      checkBtn.hidden = false;
    }

    if (item.type === "fill_slots") {
      view.querySelector(".q-hint").textContent = "Fill each numbered slot with one digit or a minus sign, then Check.";
      optionsBox.remove();
      slotsBox.hidden = false;
      checkBtn.hidden = false;
      var row = slotsBox.querySelector(".slot-row");
      item.slots.forEach(function (s, i) {
        var box = el("button", "slot");
        box.type = "button";
        box.appendChild(el("span", "slot-char"));
        box.appendChild(el("span", "slot-num", "<" + s.n + ".>"));
        box.addEventListener("click", function () { cursor = i; paint(); });
        boxes.push(box);
        row.appendChild(box);
      });
      slotsBox.querySelectorAll(".key").forEach(function (k) {
        k.addEventListener("click", function () { type(k.dataset.key); });
      });
      paint();
    }

    function paint() {
      boxes.forEach(function (box, i) {
        box.querySelector(".slot-char").textContent = chars[i] || "";
        box.classList.toggle("is-active", i === cursor && !answered());
      });
    }

    function type(k) {
      if (answered()) return;
      if (k === "back") {
        if (!chars[cursor] && cursor > 0) cursor -= 1;
        chars[cursor] = "";
      } else {
        chars[cursor] = k;
        if (cursor < item.slots.length - 1) cursor += 1;
      }
      paint();
    }

    function answered() { return state.picks[state.index] != null; }

    var isLast = state.index === total - 1;
    nextBtn.textContent = isLast ? "See results" : "Next";
    nextBtn.addEventListener("click", next);
    checkBtn.addEventListener("click", check);

    function choose(i) {
      if (answered()) return;
      if (item.type === "multi_choice") {
        var at = selected.indexOf(i);
        if (at >= 0) selected.splice(at, 1); else selected.push(i);
        buttons[i].classList.toggle("is-selected", at < 0);
        buttons[i].setAttribute("aria-pressed", at < 0);
        return;
      }
      finish(i);
    }

    function check() {
      if (answered()) return;
      if (item.type === "multi_choice") finish(selected.slice().sort());
      else finish(item.slots.map(function (s, i) { return chars[i] || ""; }));
    }

    function finish(pick) {
      state.picks[state.index] = pick;
      var right = isRight(item, pick);
      checkBtn.hidden = true;

      if (item.type === "fill_slots") {
        boxes.forEach(function (box, i) {
          box.disabled = true;
          var ok = pick[i] === item.slots[i].v;
          box.classList.add(ok ? "is-ok" : "is-bad");
          if (!ok) box.appendChild(el("span", "slot-fix", item.slots[i].v));
        });
        slotsBox.querySelector(".keypad").hidden = true;
        paint();
      } else {
        var chosen = item.type === "multi_choice" ? pick : [pick];
        var correct = item.type === "multi_choice" ? item.answer : [item.answer];
        buttons.forEach(function (b, j) {
          b.disabled = true;
          b.classList.remove("is-selected");
          var mark = b.querySelector(".option-mark");
          var isAns = correct.indexOf(j) >= 0, isPick = chosen.indexOf(j) >= 0;
          if (isAns) { b.classList.add(isPick ? "is-correct" : "is-missed"); mark.textContent = isPick ? "✓" : "missed"; }
          else if (isPick) { b.classList.add("is-wrong"); mark.textContent = "✕"; }
          else b.classList.add("is-dim");
        });
        if (!item.underline && item.q.indexOf("___") >= 0 && item.type !== "multi_choice") {
          sentence.replaceChildren(sentenceNodes(item.q, item.options[item.answer]));
        }
      }

      feedback.querySelector(".verdict").textContent = right ? "Correct." :
        item.type === "single_choice" ? "Not quite." : "Not quite. Answer: " + correctText(item);
      feedback.querySelector(".explain").textContent = item.explain || "";
      if (item.terms && item.terms.length) {
        feedback.querySelector(".terms").textContent = item.terms
          .map(function (t) { return t.zh + " " + t.en; }).join(" · ");
      }
      if (subject.tutor && window.KaoGuTutor) {
        var askBtn = feedback.querySelector(".ask-tutor");
        askBtn.hidden = false;
        askBtn.addEventListener("click", function () {
          window.KaoGuTutor.ask((right ? "我答對了，但想更了解這一題：" : "我這一題答錯了，請幫我弄懂：") +
            "\n\n" + questionText(item, pick) + "\n\n請告訴我錯在哪裡（如果有），一步一步講解，最後出一題類似的題目給我練習。");
        });
      }
      feedback.hidden = false;
      if (subject.math) typeset(feedback);
      nextBtn.hidden = false;
      document.querySelector(".progress-bar").style.width = ((state.index + 1) / total) * 100 + "%";
      nextBtn.focus({ preventScroll: true });
      nextBtn.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }

    function next() {
      if (isLast) return renderResults(subject, questions, state);
      state.index += 1;
      renderQuestion(subject, questions, state);
    }

    onKey = function (e) {
      if (!answered()) {
        if (item.type === "fill_slots") {
          if (/^[0-9]$/.test(e.key) || e.key === "-") { e.preventDefault(); type(e.key); }
          else if (e.key === "Backspace") { e.preventDefault(); type("back"); }
          else if (e.key === "ArrowLeft") { cursor = Math.max(0, cursor - 1); paint(); }
          else if (e.key === "ArrowRight") { cursor = Math.min(item.slots.length - 1, cursor + 1); paint(); }
          else if (e.key === "Enter") { e.preventDefault(); check(); }
          return;
        }
        if (e.key === "Enter" && item.type === "multi_choice") { e.preventDefault(); check(); return; }
        var k = item.keys.indexOf(e.key.toUpperCase());
        if (k < 0 && /^\d$/.test(e.key) && !/^\d+$/.test(item.keys[0])) k = parseInt(e.key, 10) - 1;
        if (k >= 0 && k < item.options.length) { e.preventDefault(); choose(k); }
      } else if (e.key === "Enter" && document.activeElement !== nextBtn) {
        e.preventDefault();
        next();
      }
    };

    show(view, subject.name, true);
    if (subject.math) typeset(app);
  }

  function renderResults(subject, questions, state) {
    var view = tpl("tpl-results");
    var total = questions.length;
    var correct = questions.filter(function (q, i) { return isRight(q, state.picks[i]); }).length;
    var ratio = correct / total;
    var hasPoints = questions.every(function (q) { return q.points; });

    view.querySelector(".index").textContent = subject.name + " · " +
      (state.date ? (state.date === today() ? "Today's set · " : "Latest set · ") + state.date : "Today's set");
    if (subject.lang) view.querySelector(".review").lang = subject.lang;
    view.querySelector(".score").textContent = correct + " / " + total;
    var note =
      ratio === 1 ? "Perfect. Every answer right." :
      ratio >= 0.8 ? "Great work. Review the few you missed below." :
      ratio >= 0.5 ? "Good effort. Go over the mistakes below." :
      "Keep going. Read through the explanations below.";
    if (hasPoints) {
      var pts = questions.reduce(function (sum, q, i) { return sum + (isRight(q, state.picks[i]) ? q.points : 0); }, 0);
      var max = questions.reduce(function (sum, q) { return sum + q.points; }, 0);
      note = "Mock exam score: " + pts + " / " + max + ". " + note;
    }
    view.querySelector(".score-note").textContent = note;

    var review = view.querySelector(".review");
    var misses = 0;
    questions.forEach(function (q, i) {
      if (isRight(q, state.picks[i])) return;
      misses += 1;
      var li = el("li");
      var qEl = el("p", "r-q");
      if (q.tag) qEl.appendChild(el("span", "r-tag", q.tag + "  "));
      qEl.appendChild(q.type === "single_choice" && q.q.indexOf("___") >= 0
        ? sentenceNodes(q.q, q.options[q.answer]) : sentenceNodes(q.q));
      var aEl = el("p", "r-a");
      aEl.appendChild(document.createTextNode("Your answer: "));
      aEl.appendChild(el("s", null, answerText(q, state.picks[i])));
      aEl.appendChild(document.createTextNode(" · Correct: " + correctText(q)));
      li.appendChild(qEl);
      li.appendChild(aEl);
      if (q.explain) li.appendChild(el("p", "r-x", q.explain));
      review.appendChild(li);
    });

    var title = view.querySelector(".review-title");
    if (misses) title.textContent = "Mistakes (" + misses + ")";
    else { title.remove(); review.remove(); }

    if (misses && subject.tutor && window.KaoGuTutor) {
      var askBtn = view.querySelector(".ask-tutor");
      askBtn.hidden = false;
      askBtn.addEventListener("click", function () {
        var wrong = questions.map(function (q, i) { return isRight(q, state.picks[i]) ? null : questionText(q, state.picks[i]); })
          .filter(Boolean);
        window.KaoGuTutor.ask("我今天的化學練習答錯了 " + wrong.length + " 題。請先找出我錯誤的共同原因，" +
          "再從最重要的觀念開始，一次一題帶我複習：\n\n" +
          wrong.map(function (t, i) { return "【第 " + (i + 1) + " 題】\n" + t; }).join("\n\n"));
      });
    }

    view.querySelector(".retry").addEventListener("click", function () {
      startQuiz(subject, questions, state.date);
    });
    onKey = null;
    show(view, subject.name + " results", true);
    if (subject.math) typeset(app);
  }

  /* ---------- Chemistry Tutor (tutor/tutor.js) ---------- */

  function renderTutor(subject) {
    if (!window.KaoGuTutor) return renderMessage(subject, "The tutor didn't load. Reload the page and try again.");
    var view = window.KaoGuTutor.render({
      tpl: tpl,
      typeset: typeset,
      setKeys: function (fn) { onKey = fn; }
    });
    show(view, subject.name, true);
  }

  /* ---------- Routing ---------- */

  function route() {
    var id = location.hash.replace(/^#\/?/, "");
    var subject = SUBJECTS.find(function (s) { return s.id === id; });
    if (!subject) renderHome();
    else if (subject.id === "tutor") renderTutor(subject);
    else if (SETS[subject.id] && SETS[subject.id].length) {
      loadDaily(subject).then(function (set) {
        if (location.hash.replace(/^#\/?/, "") === subject.id) startQuiz(subject, set.questions, set.date);
      }, function () {
        renderMessage(subject, "Couldn't load today's questions. Check your connection and try again.");
      });
    }
    else if (DATA[subject.id] && DATA[subject.id].length) startQuiz(subject, DATA[subject.id]);
    else renderComingSoon(subject);
  }

  backBtn.addEventListener("click", function () { location.hash = "#/"; });
  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === "Escape" && !backBtn.hidden) { location.hash = "#/"; return; }
    if (onKey) onKey(e);
  });
  window.addEventListener("hashchange", route);
  route();
})();
