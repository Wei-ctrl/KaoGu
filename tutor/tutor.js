// Chemistry Tutor: a chat with Claude for the 僑先部 化學 course.
// Calls the Claude API straight from the browser with the student's own API
// key, which stays in this browser's localStorage. The system prompt comes from
// tutor/chemistry-prompt.js (built by scripts/build-tutor-prompt.js).
(function () {
  "use strict";

  var MODELS = [
    { id: "claude-opus-5-5",   name: "Claude Opus 5.5 · best explanations", fallback: true },
    { id: "claude-sonnet-5-5", name: "Claude Sonnet 5.5 · faster, cheaper", fallback: true },
    { id: "claude-haiku-5-5",  name: "Claude Haiku 5.5 · fastest, cheapest", fallback: false }
  ];

  var STARTERS = [
    { label: "Explain a concept", text: "請用簡單的方法解釋：莫耳 (mole) 是什麼？跟質量、粒子數、氣體體積怎麼換算？" },
    { label: "Quiz me", text: "出題考我 Ch2 莫耳的計算，一次一題，答完再給下一題。" },
    { label: "Check my working", text: "幫我檢查這題的計算哪裡錯了：\n題目：\n我的算法：" },
    { label: "Ion & naming drill", text: "考我常見離子和根的符號與中文命名，一次一題。" }
  ];

  var KEY = "kaogu.tutor.key";
  var MODEL = "kaogu.tutor.model";
  var CHAT = "kaogu.tutor.chat";
  var PENDING = "kaogu.tutor.pending";

  function load(k, fallback) {
    try { var v = localStorage.getItem(k); return v == null ? fallback : v; } catch (e) { return fallback; }
  }
  function save(k, v) {
    try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch (e) { /* private mode */ }
  }

  // history: the API messages (assistant turns keep their full content blocks,
  // so replayed thinking stays valid). Each entry also carries `shown` text.
  function loadChat() {
    try { return JSON.parse(load(CHAT, "[]")) || []; } catch (e) { return []; }
  }
  function saveChat(chat) { save(CHAT, JSON.stringify(chat)); }

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  // Small, safe formatter: paragraphs, "- " and "1. " lists, **bold**.
  // Text is escaped first; $…$ maths is left for KaTeX.
  function escape(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function inline(s) {
    return escape(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }
  function formatted(text) {
    var html = "";
    var list = null;
    function close() { if (list) { html += "</" + list + ">"; list = null; } }
    text.split("\n").forEach(function (line) {
      var bullet = line.match(/^\s*[-•*]\s+(.*)$/);
      var num = line.match(/^\s*(\d+)[.)]\s+(.*)$/);
      if (bullet || num) {
        var kind = bullet ? "ul" : "ol";
        if (list !== kind) {
          close();
          html += kind === "ol" && num[1] !== "1" ? '<ol start="' + num[1] + '">' : "<" + kind + ">";
          list = kind;
        }
        html += "<li>" + inline(bullet ? bullet[1] : num[2]) + "</li>";
      } else if (!line.trim()) {
        close();
      } else {
        close();
        html += "<p>" + inline(line) + "</p>";
      }
    });
    close();
    return html;
  }

  function textOf(content) {
    if (typeof content === "string") return content;
    return content.filter(function (b) { return b.type === "text"; })
      .map(function (b) { return b.text; }).join("");
  }

  /* ---------- View ---------- */

  // Returns the tutor view. `h` gives app.js helpers: tpl, typeset, setKeys.
  function render(h) {
    var view = h.tpl("tpl-tutor");
    var setup = view.querySelector(".tutor-setup");
    var keyInput = view.querySelector(".tutor-key");
    var modelSelect = view.querySelector(".tutor-model");
    var chatList = view.querySelector(".chat");
    var starters = view.querySelector(".starters");
    var composer = view.querySelector(".composer");
    var input = view.querySelector(".composer-input");
    var sendBtn = view.querySelector(".composer-send");
    var status = view.querySelector(".tutor-status");

    var chat = loadChat();
    var busy = null;  // the running stream, if any

    MODELS.forEach(function (m) {
      var o = el("option", null, m.name);
      o.value = m.id;
      modelSelect.appendChild(o);
    });
    modelSelect.value = load(MODEL, MODELS[0].id);
    if (!modelSelect.value) modelSelect.value = MODELS[0].id;
    keyInput.value = load(KEY, "");

    function hasKey() { return !!load(KEY, ""); }

    function showSetup(open) {
      setup.hidden = !open;
      if (open) keyInput.focus();
    }

    setup.addEventListener("submit", function (e) {
      e.preventDefault();
      var k = keyInput.value.trim();
      save(KEY, k || null);
      save(MODEL, modelSelect.value);
      showSetup(!k);
      setStatus(k ? "Saved. Key is stored only in this browser." : "");
      if (k) input.focus();
    });
    view.querySelector(".tutor-forget").addEventListener("click", function () {
      save(KEY, null);
      keyInput.value = "";
      setStatus("Key removed from this browser.");
    });
    view.querySelector(".tutor-settings").addEventListener("click", function () { showSetup(setup.hidden); });
    view.querySelector(".tutor-new").addEventListener("click", function () {
      if (busy) busy.abort();
      chat = [];
      saveChat(chat);
      paintAll();
      input.focus();
    });

    function setStatus(text) { status.textContent = text || ""; }

    function bubble(role, text) {
      var li = el("li", "msg msg-" + role);
      li.appendChild(el("p", "msg-who", role === "user" ? "You" : "Tutor"));
      var body = el("div", "msg-body");
      if (role === "user") body.textContent = text;
      else body.innerHTML = formatted(text);
      li.appendChild(body);
      return li;
    }

    function paintAll() {
      chatList.replaceChildren();
      chat.forEach(function (m) { chatList.appendChild(bubble(m.role, m.shown != null ? m.shown : textOf(m.content))); });
      starters.hidden = chat.length > 0;
      h.typeset(chatList);
    }

    STARTERS.forEach(function (s) {
      var b = el("button", "chip", s.label);
      b.type = "button";
      b.addEventListener("click", function () {
        input.value = s.text;
        input.focus();
        autosize();
        if (s.text.indexOf("\n") < 0) send();
      });
      starters.appendChild(b);
    });

    function autosize() {
      input.style.height = "auto";
      input.style.height = Math.min(input.scrollHeight, 240) + "px";
    }
    input.addEventListener("input", autosize);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey && !e.isComposing) { e.preventDefault(); send(); }
    });
    composer.addEventListener("submit", function (e) { e.preventDefault(); busy ? busy.abort() : send(); });

    function send() {
      var text = input.value.trim();
      if (!text || busy) return;
      if (!hasKey()) { showSetup(true); setStatus("Add your Claude API key first."); return; }
      if (!window.Anthropic) { setStatus("The Claude SDK didn't load. Check your connection and reload."); return; }

      input.value = "";
      autosize();
      chat.push({ role: "user", content: text });
      saveChat(chat);
      starters.hidden = true;
      chatList.appendChild(bubble("user", text));
      var reply = bubble("assistant", "");
      reply.classList.add("is-streaming");
      chatList.appendChild(reply);
      reply.scrollIntoView({ block: "end", behavior: "smooth" });
      stream(reply.querySelector(".msg-body"), reply);
    }

    function stream(body, li) {
      var modelId = load(MODEL, MODELS[0].id);
      var model = MODELS.find(function (m) { return m.id === modelId; }) || MODELS[0];
      var client = new window.Anthropic({ apiKey: load(KEY, ""), dangerouslyAllowBrowser: true });

      var params = {
        model: model.id,
        max_tokens: 16000,
        system: window.KAOGU_TUTOR_PROMPT || "You are a patient chemistry tutor.",
        messages: chat.map(function (m) { return { role: m.role, content: m.content }; }),
        thinking: { type: "adaptive" },
        output_config: { effort: "medium" },
        cache_control: { type: "ephemeral" }
      };
      // Server-side fallback: if a safety classifier declines, retry on another model.
      if (model.fallback) {
        params.betas = ["server-side-fallback-2026-07-01"];
        params.fallbacks = "default";
      }

      var text = "";
      var frame = 0;
      sendBtn.textContent = "Stop";
      setStatus("Thinking…");

      busy = client.beta.messages.stream(params);
      busy.on("text", function (delta) {
        text += delta;
        setStatus("");
        if (!frame) frame = requestAnimationFrame(function () {
          frame = 0;
          body.innerHTML = formatted(text);
          li.scrollIntoView({ block: "end" });
        });
      });

      busy.finalMessage().then(function (msg) {
        if (msg.stop_reason === "refusal") {
          finish(text, "The tutor declined to answer this one. Try rephrasing the question.");
          return;
        }
        // Keep the full content (incl. thinking blocks) so the next turn replays it unchanged.
        chat.push({ role: "assistant", content: msg.content, shown: text });
        saveChat(chat);
        finish(text, msg.stop_reason === "max_tokens" ? "The answer was cut off. Ask the tutor to continue." : "");
      }, function (err) {
        var aborted = err && (err.name === "APIUserAbortError" || /abort/i.test(err.message || ""));
        if (aborted && text) {
          chat.push({ role: "assistant", content: text, shown: text });
          saveChat(chat);
          finish(text, "Stopped.");
          return;
        }
        // Drop the unanswered question and put it back in the box to re-send.
        var q = chat.pop();
        saveChat(chat);
        li.previousSibling && li.previousSibling.remove();
        if (!input.value) { input.value = q.content; autosize(); }
        finish(text, aborted ? "Stopped." : errorText(err));
      });

      function finish(final, note) {
        if (frame) cancelAnimationFrame(frame);
        frame = 0;
        busy = null;
        li.classList.remove("is-streaming");
        if (final) { body.innerHTML = formatted(final); h.typeset(body); }
        else li.remove();
        sendBtn.textContent = "Send";
        setStatus(note);
      }
    }

    function errorText(err) {
      var s = err && err.status;
      if (s === 401) return "That API key was rejected. Open Settings and check it.";
      if (s === 403) return "This key isn't allowed to use that model. Try another model in Settings.";
      if (s === 429) return "Rate limited. Wait a moment and try again.";
      if (s === 529 || s >= 500) return "Claude is busy right now. Try again in a moment.";
      if (s === 400 && /credit/i.test(err.message || "")) return "Your API account is out of credit.";
      return "Couldn't reach Claude" + (err && err.message ? ": " + err.message : ".");
    }

    paintAll();
    showSetup(!hasKey());

    // A question handed over from a quiz ("Ask the tutor").
    var pending = null;
    try { pending = sessionStorage.getItem(PENDING); sessionStorage.removeItem(PENDING); } catch (e) { /* ignore */ }
    if (pending) {
      input.value = pending;
      setTimeout(function () { autosize(); hasKey() ? send() : input.focus(); }, 0);
    } else if (hasKey()) {
      setTimeout(function () { input.focus({ preventScroll: true }); }, 0);
    }

    h.setKeys(null);
    return view;
  }

  // Open the tutor with `text` as the next question.
  function ask(text) {
    try { sessionStorage.setItem(PENDING, text); } catch (e) { /* ignore */ }
    location.hash = "#/tutor";
  }

  window.KaoGuTutor = { render: render, ask: ask };
})();
