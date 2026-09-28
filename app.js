(function () {
  "use strict";

  var SUBJECTS = [
    { id: "guowen",          name: "Guowen",          native: "國文" },
    { id: "english-text",    name: "English Text",    native: "英文 · 閱讀" },
    { id: "english-grammar", name: "English Grammar", native: "英文 · 文法" },
    { id: "maths",           name: "Maths",           native: "數學" },
    { id: "physics",         name: "Physics",         native: "物理" },
    { id: "chemistry",       name: "Chemistry",       native: "化學" }
  ];

  var DATA = window.KAOGU_DATA || {};
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

  function startQuiz(subject) {
    var questions = DATA[subject.id];
    var state = { index: 0, picks: [] };
    renderQuestion(subject, questions, state);
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

    view.querySelector(".index").textContent = subject.name + " · Today's set";
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

    view.querySelector(".retry").addEventListener("click", function () { startQuiz(subject); });
    onKey = null;
    show(view, subject.name + " results", true);
  }

  /* ---------- Routing ---------- */

  function route() {
    var id = location.hash.replace(/^#\/?/, "");
    var subject = SUBJECTS.find(function (s) { return s.id === id; });
    if (!subject) renderHome();
    else if (DATA[subject.id] && DATA[subject.id].length) startQuiz(subject);
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
