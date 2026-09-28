(function () {
  "use strict";

  var SUBJECTS = [
    { id: "guowen",          name: "Guowen",          native: "國文" },
    { id: "english-text",    name: "English Text",    native: "英文 · 閱讀" },
    { id: "english-grammar", name: "English Grammar", native: "英文 · 文法" },
    { id: "maths",           name: "Maths",           native: "數學" },
    { id: "physics",         name: "Physics",         native: "物理" },
    { id: "chemistry",       name: "Chemistry",       native: "化學", lang: "zh-Hant" }
  ];

  // Static sets: KAOGU_DATA[id] = [questions]. Daily sets: KAOGU_SETS[id] lists
  // dates, and data/<id>/<date>.js registers KAOGU_DAILY[id][date] = { questions }.
  var DATA = window.KAOGU_DATA || {};
  var SETS = window.KAOGU_SETS || {};
  var KEYS = ["A", "B", "C", "D", "E", "F"];

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
  function normalize(item) {
    if (!item.stem) return item;
    var letters = Object.keys(item.options);
    var options = letters.map(function (k) { return String(item.options[k]); });

    // Worksheet style puts a shared unit only after the last option ("… (D) 6 克").
    var unit = options[options.length - 1].match(/^[-\d.×⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+\s+(\S+)$/);
    var numeric = /^[-\d.×⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+$/;
    if (unit && options.slice(0, -1).every(function (o) { return numeric.test(o); })) {
      options = options.map(function (o, i) { return i < options.length - 1 ? o + " " + unit[1] : o; });
    }

    return {
      q: item.stem,
      given: item.given,
      tag: item.chapter,
      options: options,
      answer: letters.indexOf(item.answer),
      explain: item.explanation,
      terms: item.key_terms
    };
  }

  /* ---------- Quiz ---------- */

  // Render a sentence, turning each ___ into a blank. If `fill` is given
  // (e.g. "drinks … is drinking"), its parts are written into the blanks.
  function sentenceNodes(q, fill) {
    var parts = q.split("___");
    var answers = fill ? fill.split(" … ") : [];
    var frag = document.createDocumentFragment();
    parts.forEach(function (text, i) {
      frag.appendChild(document.createTextNode(text));
      if (i < parts.length - 1) {
        var b = el("span", "blank" + (fill ? " filled" : ""), fill ? answers[i] : "");
        if (!fill) b.setAttribute("aria-label", "blank");
        frag.appendChild(b);
      }
    });
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
    var feedback = view.querySelector(".feedback");
    var nextBtn = view.querySelector(".next");
    var buttons = [];

    view.querySelector(".quiz-subject").textContent = subject.name;
    view.querySelector(".quiz-count").textContent = pad(state.index + 1) + " / " + pad(total);
    view.querySelector(".progress-bar").style.width = (state.index / total) * 100 + "%";
    if (subject.lang) view.querySelector(".quiz").lang = subject.lang;
    if (item.tag) view.querySelector(".q-tag").textContent = item.tag;
    if (item.given) view.querySelector(".q-given").textContent = item.given;
    if (item.q.length > (subject.lang ? 40 : 90)) sentence.classList.add("long");
    sentence.appendChild(sentenceNodes(item.q));

    item.options.forEach(function (opt, i) {
      var b = el("button", "option");
      b.type = "button";
      b.appendChild(el("span", "option-key", KEYS[i]));
      b.appendChild(el("span", "option-text", opt));
      b.appendChild(el("span", "option-mark"));
      b.addEventListener("click", function () { pick(i); });
      buttons.push(b);
      optionsBox.appendChild(b);
    });

    var isLast = state.index === total - 1;
    nextBtn.textContent = isLast ? "See results" : "Next";
    nextBtn.addEventListener("click", next);

    function pick(i) {
      if (state.picks[state.index] != null) return;
      state.picks[state.index] = i;
      var right = i === item.answer;

      buttons.forEach(function (b, j) {
        b.disabled = true;
        var mark = b.querySelector(".option-mark");
        if (j === item.answer) { b.classList.add("is-correct"); mark.textContent = "✓"; }
        else if (j === i) { b.classList.add("is-wrong"); mark.textContent = "✕"; }
        else b.classList.add("is-dim");
      });

      sentence.replaceChildren(sentenceNodes(item.q, item.options[item.answer]));
      feedback.querySelector(".verdict").textContent = right ? "Correct." : "Not quite.";
      feedback.querySelector(".explain").textContent = item.explain || "";
      if (item.terms && item.terms.length) {
        feedback.querySelector(".terms").textContent = item.terms
          .map(function (t) { return t.zh + " " + t.en; }).join(" · ");
      }
      feedback.hidden = false;
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
      var answered = state.picks[state.index] != null;
      if (!answered) {
        var k = KEYS.indexOf(e.key.toUpperCase());
        if (k < 0) k = parseInt(e.key, 10) - 1;
        if (k >= 0 && k < item.options.length) { e.preventDefault(); pick(k); }
      } else if (e.key === "Enter" && document.activeElement !== nextBtn) {
        e.preventDefault();
        next();
      }
    };

    show(view, subject.name, true);
  }

  function renderResults(subject, questions, state) {
    var view = tpl("tpl-results");
    var total = questions.length;
    var correct = questions.filter(function (q, i) { return state.picks[i] === q.answer; }).length;
    var ratio = correct / total;

    view.querySelector(".index").textContent = subject.name + " · " +
      (state.date ? (state.date === today() ? "Today's set · " : "Latest set · ") + state.date : "Today's set");
    if (subject.lang) view.querySelector(".review").lang = subject.lang;
    view.querySelector(".score").textContent = correct + " / " + total;
    view.querySelector(".score-note").textContent =
      ratio === 1 ? "Perfect. Every answer right." :
      ratio >= 0.8 ? "Great work. Review the few you missed below." :
      ratio >= 0.5 ? "Good effort. Go over the mistakes below." :
      "Keep going. Read through the explanations below.";

    var review = view.querySelector(".review");
    var misses = 0;
    questions.forEach(function (q, i) {
      if (state.picks[i] === q.answer) return;
      misses += 1;
      var li = el("li");
      var qEl = el("p", "r-q");
      qEl.appendChild(sentenceNodes(q.q, q.options[q.answer]));
      var aEl = el("p", "r-a");
      aEl.appendChild(document.createTextNode("Your answer: "));
      aEl.appendChild(el("s", null, q.options[state.picks[i]]));
      aEl.appendChild(document.createTextNode(" · Correct: " + q.options[q.answer]));
      li.appendChild(qEl);
      li.appendChild(aEl);
      if (q.explain) li.appendChild(el("p", "r-x", q.explain));
      review.appendChild(li);
    });

    var title = view.querySelector(".review-title");
    if (misses) title.textContent = "Mistakes (" + misses + ")";
    else { title.remove(); review.remove(); }

    view.querySelector(".retry").addEventListener("click", function () {
      startQuiz(subject, questions, state.date);
    });
    onKey = null;
    show(view, subject.name + " results", true);
  }

  /* ---------- Routing ---------- */

  function route() {
    var id = location.hash.replace(/^#\/?/, "");
    var subject = SUBJECTS.find(function (s) { return s.id === id; });
    if (!subject) renderHome();
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
