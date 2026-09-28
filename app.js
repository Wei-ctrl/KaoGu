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

  var app = document.getElementById("app");
  var backBtn = document.getElementById("back");
  var tplHome = document.getElementById("tpl-home");
  var tplSubject = document.getElementById("tpl-subject");

  function pad(n) { return n < 10 ? "0" + n : String(n); }

  function renderHome() {
    var view = tplHome.content.cloneNode(true);
    var list = view.getElementById("subjects");

    SUBJECTS.forEach(function (s, i) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.className = "card";
      a.href = "#/" + s.id;
      a.innerHTML =
        '<div class="card-top"><span>' + pad(i + 1) + '</span>' +
        '<span class="card-arrow" aria-hidden="true">&rarr;</span></div>' +
        '<div><div class="card-name"></div><div class="card-native"></div></div>';
      a.querySelector(".card-name").textContent = s.name;
      a.querySelector(".card-native").textContent = s.native;
      li.appendChild(a);
      list.appendChild(li);
    });

    app.replaceChildren(view);
    backBtn.hidden = true;
    document.title = "KaoGu";
  }

  function renderSubject(subject) {
    var i = SUBJECTS.indexOf(subject);
    var view = tplSubject.content.cloneNode(true);
    view.querySelector(".index").textContent = pad(i + 1) + " / " + pad(SUBJECTS.length);
    view.querySelector(".title").textContent = subject.name;
    view.querySelector(".native").textContent = subject.native;

    app.replaceChildren(view);
    backBtn.hidden = false;
    document.title = subject.name + " · KaoGu";
  }

  function route() {
    var id = location.hash.replace(/^#\/?/, "");
    var subject = SUBJECTS.find(function (s) { return s.id === id; });
    if (subject) renderSubject(subject);
    else renderHome();
    window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
  }

  backBtn.addEventListener("click", function () { location.hash = "#/"; });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !backBtn.hidden) location.hash = "#/";
  });
  window.addEventListener("hashchange", route);
  route();
})();
