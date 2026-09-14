const STORAGE_KEY = "little-writer-progress-v2";

const state = {
  view: "home",
  weekId: null,
  activityId: null,
  scrambleId: null,
  questionIndex: 0,
  name: "",
  completed: {},
  progress: {},
};

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    state.name = saved.name || "";
    state.completed = saved.completed || {};
    state.progress = saved.progress || {};
  } catch (error) {
    state.completed = {};
    state.progress = {};
  }
}

function save() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      name: state.name,
      completed: state.completed,
      progress: state.progress,
    })
  );
}

function weekById(id) {
  return CURRICULUM.find((week) => week.id === id);
}

function activityById(week, id) {
  return week.activities.find((activity) => activity.id === id);
}

function roundsOf(activity) {
  return activity.rounds || [activity];
}

function questionsDone(activity) {
  if (state.completed[activity.id]) return roundsOf(activity).length;
  return Math.min(state.progress[activity.id] || 0, roundsOf(activity).length);
}

function weekQuestionsDone(week) {
  return week.activities.reduce((sum, activity) => sum + questionsDone(activity), 0);
}

function weekQuestionTotal(week) {
  return week.activities.reduce((sum, activity) => sum + roundsOf(activity).length, 0);
}

function doneCount(week) {
  return week.activities.filter((activity) => state.completed[activity.id]).length;
}

function totalDone() {
  return CURRICULUM.reduce((sum, week) => sum + weekQuestionsDone(week), 0);
}

function totalActivities() {
  return CURRICULUM.reduce((sum, week) => sum + weekQuestionTotal(week), 0);
}

function currentWeek() {
  return (
    CURRICULUM.find((week) => doneCount(week) < week.activities.length) ||
    CURRICULUM[CURRICULUM.length - 1]
  );
}

function scrambleDone() {
  return UNSCRAMBLE.reduce((sum, pack) => sum + questionsDone(pack), 0);
}

function scrambleTotal() {
  return UNSCRAMBLE.reduce((sum, pack) => sum + roundsOf(pack).length, 0);
}

function currentScramble() {
  return UNSCRAMBLE.find((pack) => pack.id === state.scrambleId);
}

function currentActivity() {
  if (state.scrambleId) return currentScramble();
  const week = weekById(state.weekId);
  return activityById(week, state.activityId);
}

function currentRound() {
  const activity = currentActivity();
  return roundsOf(activity)[state.questionIndex];
}

function startQuestion(id) {
  const activity = currentActivity();
  const total = roundsOf(activity).length;
  if (state.completed[id]) {
    state.questionIndex = 0;
  } else {
    state.questionIndex = Math.min(state.progress[id] || 0, total - 1);
  }
}

function openActivity(id) {
  state.scrambleId = null;
  state.activityId = id;
  startQuestion(id);
  state.view = "activity";
  render();
}

function openScramble(id) {
  state.weekId = null;
  state.activityId = null;
  state.scrambleId = id;
  state.view = "activity";
  startQuestion(id);
  render();
}

function openScrambleLesson() {
  state.weekId = null;
  state.activityId = null;
  state.scrambleId = "intro";
  state.view = "lesson";
  render();
}

function openWeek(id, showLesson) {
  state.scrambleId = null;
  state.weekId = id;
  state.view = showLesson === false ? "week" : "lesson";
  render();
}

function weekLesson() {
  const week = weekById(state.weekId);
  return WEEK_LESSONS[week.id];
}

function renderExamplePairs(examples) {
  return `
    <div class="pairs">
      ${examples
        .map(
          (example) => `
        <div class="pair">
          <p class="bad-line">Not yet: ${escapeHtml(example.wrong)}</p>
          <p class="ok-line">Right: ${escapeHtml(example.right)}</p>
          <p class="why">${escapeHtml(example.why)}</p>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

function renderLessonBody(lesson, heading) {
  return `
    <p class="lede">${escapeHtml(lesson.idea)}</p>
    <p class="hint">${escapeHtml(lesson.why)}</p>
    <div class="rule-box">${escapeHtml(lesson.rule)}</div>
    <h3>How to get it right</h3>
    <ol class="steps">
      ${lesson.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
    </ol>
    <h3>${escapeHtml(heading || "Look at these")}</h3>
    ${renderExamplePairs(lesson.examples)}
  `;
}

function renderLesson() {
  if (state.scrambleId === "intro") {
    return `
      <header class="topbar">
        <button class="ghost" data-action="home">All packs</button>
      </header>
      <section class="hero">
        <p class="crumb">Sentence order</p>
        <h1>Words have to stand in line</h1>
        ${renderLessonBody(SCRAMBLE_LESSON, "What makes the order right")}
        <div class="actions">
          <button class="primary" data-open-scramble="${UNSCRAMBLE[0].id}">Try an easy sentence</button>
        </div>
      </section>
    `;
  }
  const week = weekById(state.weekId);
  const lesson = weekLesson();
  return `
    <header class="topbar">
      <button class="ghost" data-action="home">All weeks</button>
    </header>
    <section class="hero">
      <p class="crumb">Week ${week.week} · lesson</p>
      <h1>${escapeHtml(week.title)}</h1>
      ${renderLessonBody(lesson, "Wrong, then right")}
      <div class="actions">
        <button class="primary" data-action="start-week">Start the tasks</button>
      </div>
    </section>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function normalise(text) {
  return text
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'");
}

function sentencesIn(text) {
  return text
    .split(/[.!?]+/)
    .map((part) => part.trim())
    .filter(Boolean).length;
}

function wordCount(text) {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

function resetAllProgress() {
  const ok = window.confirm(
    "Clear every completed question? The writer's name will stay."
  );
  if (!ok) return;
  state.completed = {};
  state.progress = {};
  state.questionIndex = 0;
  save();
  render();
}

function render() {
  const root = document.getElementById("app");
  if (state.view === "home") root.innerHTML = renderHome();
  if (state.view === "week") root.innerHTML = renderWeek();
  if (state.view === "lesson") root.innerHTML = renderLesson();
  if (state.view === "activity") root.innerHTML = renderActivity();
  bind();
}

function renderHome() {
  const percent = Math.round((totalDone() / totalActivities()) * 100) || 0;
  const next = currentWeek();
  const allDone = totalDone() === totalActivities();
  const greeting = state.name ? `Hi ${escapeHtml(state.name)}.` : "A 12-week writing path.";
  const cta = allDone
    ? `<p class="lede">Every week is done. Open any week to practise again.</p>`
    : `<div class="name-row">
        <button class="primary" data-open-week="${next.id}">Continue week ${next.week}</button>
      </div>
      <p class="hint">${escapeHtml(next.title)} · ${escapeHtml(next.focus)}</p>`;
  return `
    <header class="topbar">
      <div class="brand">
        <div class="mark">Lw</div>
        <div>
          <strong>Little Writer</strong>
          <small>Spelling, sentences, paragraphs</small>
        </div>
      </div>
      <button class="ghost" data-action="reset-all">Reset progress</button>
    </header>
    <section class="hero">
      <p class="crumb">12-week programme</p>
      <h1>${greeting}</h1>
      <p class="lede">
        Short tasks in the 12-week path, plus a big sentence-order game.
        Tap mixed-up words until they make a real sentence. Progress stays on this device.
      </p>
      <div class="name-row">
        <input id="name-input" type="text" maxlength="24" placeholder="Writer's name" value="${escapeHtml(state.name)}" />
        <button class="secondary" data-action="save-name">Save name</button>
      </div>
      ${cta}
      <div class="progress-line"><span style="width:${percent}%"></span></div>
      <p class="hint">${totalDone()} of ${totalActivities()} questions done</p>
    </section>
    <div class="week-grid">
      ${CURRICULUM.map((week) => {
        const done = weekQuestionsDone(week);
        const total = weekQuestionTotal(week);
        const isNext = !allDone && week.id === next.id;
        return `
          <button class="week-card ${isNext ? "current" : ""}" data-open-week="${week.id}">
            <div class="num">Week ${week.week}${isNext ? " · next" : ""}</div>
            <h3>${escapeHtml(week.title)}</h3>
            <p>${escapeHtml(week.focus)}</p>
            <div class="pills">
              ${week.activities
                .map(
                  (activity) =>
                    `<span class="pill ${state.completed[activity.id] ? "done" : ""}"></span>`
                )
                .join("")}
            </div>
            <p class="hint">${done}/${total} questions</p>
          </button>
        `;
      }).join("")}
    </div>
    ${renderScrambleHome()}
  `;
}

function renderScrambleHome() {
  const done = scrambleDone();
  const total = scrambleTotal();
  const next = UNSCRAMBLE.find((pack) => questionsDone(pack) < roundsOf(pack).length) || UNSCRAMBLE[0];
  return `
    <div class="block-title">
      <h2>Sentence order</h2>
      <p>
        Unscramble ${total} sentences, easy to hard. Tap the words until they sound right.
        ${done} of ${total} done.
      </p>
      <div class="name-row" style="margin-top:12px">
        <button class="secondary" data-action="scramble-lesson">How a sentence is ordered</button>
      </div>
    </div>
    <div class="week-grid">
      ${UNSCRAMBLE.map((pack) => {
        const packDone = questionsDone(pack);
        const packTotal = roundsOf(pack).length;
        const isNext = pack.id === next.id && done < total;
        return `
          <button class="week-card ${isNext ? "current" : ""}" data-open-scramble="${pack.id}">
            <div class="num">${pack.level}${isNext ? " · next" : ""}</div>
            <h3>${escapeHtml(pack.title)}</h3>
            <p>10 mixed-up sentences</p>
            <div class="pills">
              ${Array.from({ length: 10 }, (_, index) => `<span class="pill ${index < packDone ? "done" : ""}"></span>`).join("")}
            </div>
            <p class="hint">${packDone}/${packTotal} sentences</p>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function renderWeek() {
  const week = weekById(state.weekId);
  const finished = doneCount(week) === week.activities.length;
  return `
    <header class="topbar">
      <button class="ghost" data-action="home">All weeks</button>
    </header>
    <div class="week-head">
      <p class="crumb">Week ${week.week}</p>
      <h1>${escapeHtml(week.title)}</h1>
      <p class="lede">${escapeHtml(week.focus)}</p>
      ${finished ? `<p class="done-tag">This week is complete</p>` : ""}
      <div class="name-row">
        <button class="secondary" data-action="show-lesson">Show the lesson again</button>
      </div>
    </div>
    <div class="activity-list">
      ${week.activities
        .map((activity, index) => {
          const total = roundsOf(activity).length;
          const done = questionsDone(activity);
          return `
        <button class="activity-card" data-open-activity="${activity.id}">
          <div>
            <div class="kind">Task ${index + 1} · ${activity.kind} · ${done}/${total}</div>
            <h3>${escapeHtml(activity.title)}</h3>
            <p class="hint">${escapeHtml(activity.prompt)}</p>
          </div>
          ${state.completed[activity.id] ? `<span class="done-tag">Done</span>` : `<span class="secondary">Start</span>`}
        </button>
      `;
        })
        .join("")}
    </div>
  `;
}

function renderActivity() {
  const week = state.weekId ? weekById(state.weekId) : null;
  const activity = currentActivity();
  const round = currentRound();
  const total = roundsOf(activity).length;
  const n = state.questionIndex + 1;
  const body = {
    spell: renderSpell,
    build: renderBuild,
    fix: renderFix,
    write: renderWrite,
    arrange: renderArrange,
  }[activity.kind](round);
  const back = state.scrambleId
    ? `<button class="ghost" data-action="home">All sentence packs</button>`
    : `<button class="ghost" data-action="week">Back to week ${week.week}</button>`;

  return `
    <header class="topbar">
      ${back}
    </header>
    <section class="hero">
      <p class="crumb">${state.scrambleId ? `${activity.level} · sentence` : `${activity.kind} · question`} ${n} of ${total}</p>
      <h1>${escapeHtml(activity.title)}</h1>
      <p class="prompt">${escapeHtml(round.prompt || activity.prompt)}</p>
      ${body}
      <div id="feedback"></div>
      <div class="actions">
        <button class="primary" data-action="check">${activity.kind === "write" ? "I'm done" : "Check"}</button>
        <button class="secondary" data-action="reset">Reset</button>
      </div>
    </section>
  `;
}

function renderSpell(round) {
  return `
    <div class="spell-list">
      ${round.items
        .map(
          (item, index) => `
        <label class="spell-row">
          <span>${escapeHtml(item.clue)}</span>
          <input data-spell="${index}" autocomplete="off" spellcheck="false" />
        </label>
      `
        )
        .join("")}
    </div>
  `;
}

function renderBuild(round) {
  let shuffled = [...round.tiles].sort(() => Math.random() - 0.5);
  if (shuffled.join(" ") === round.tiles.join(" ")) {
    shuffled = [...round.tiles].reverse();
  }
  return `
    <p class="hint">Tap a word to add it. Tap your sentence to undo the last word.</p>
    <div class="slots" id="build-slots"></div>
    <div class="tiles" id="build-tiles">
      ${shuffled
        .map((tile) => `<button class="tile" data-tile="${escapeHtml(tile)}">${escapeHtml(tile)}</button>`)
        .join("")}
    </div>
  `;
}

function renderFix(round) {
  return `
    <p class="hint">Broken sentence: <strong>${escapeHtml(round.broken)}</strong></p>
    <textarea class="fix-box" id="fix-input" placeholder="Write the correct sentence"></textarea>
  `;
}

function renderWrite(round) {
  const starters = (round.starters || [])
    .map(
      (starter) =>
        `<button type="button" class="starter" data-starter="${escapeHtml(starter)}">${escapeHtml(starter.trim())}</button>`
    )
    .join("");
  return `
    <div class="starters">${starters}</div>
    <textarea class="write-box" id="write-input" placeholder="Write here"></textarea>
  `;
}

function renderArrange(round) {
  const shuffled = [...round.sentences].sort(() => Math.random() - 0.5);
  const needed = round.answerOrder ? round.answerOrder.length : round.sentences.length;
  return `
    <p class="hint">Tap a sentence, then tap an empty box.</p>
    <div class="slots" id="arrange-slots">
      ${Array.from({ length: needed }, (_, index) => `<button class="slot" data-slot="${index}"></button>`).join("")}
    </div>
    <div class="tiles" id="arrange-tiles">
      ${shuffled
        .map(
          (sentence) =>
            `<button class="tile" data-sentence="${escapeHtml(sentence)}">${escapeHtml(sentence)}</button>`
        )
        .join("")}
    </div>
  `;
}

function setFeedback(ok, message) {
  const node = document.getElementById("feedback");
  node.className = `feedback ${ok ? "ok" : "bad"}`;
  node.textContent = message;
}

function setFeedbackHtml(ok, html) {
  const node = document.getElementById("feedback");
  node.className = `feedback ${ok ? "ok" : "bad"}`;
  node.innerHTML = html;
}

function checkSpell(round) {
  const wrong = [];
  round.items.forEach((item, index) => {
    const value = normalise(document.querySelector(`[data-spell="${index}"]`).value).toLowerCase();
    if (value !== item.answer.toLowerCase()) wrong.push(item.answer);
  });
  if (wrong.length) {
    setFeedback(false, `Not yet. Check: ${wrong.join(", ")}.`);
    return false;
  }
  setFeedback(true, "All of those words are right.");
  return true;
}

function checkBuild(round) {
  const built = [...document.querySelectorAll("#build-slots .tile")].map((node) => node.textContent).join(" ");
  if (normalise(built) !== normalise(round.answer)) {
    setFeedback(false, "The order is not quite right. Undo and try again.");
    return false;
  }
  setFeedback(true, "That sentence is in the right order.");
  return true;
}

function checkFix(round) {
  const value = normalise(document.getElementById("fix-input").value);
  const target = normalise(round.answer);
  if (round.flexible) {
    const words = wordCount(value);
    const hasCapital = /^[A-Z]/.test(value);
    const hasStop = /[.!?]$/.test(value);
    if (words >= 6 && hasCapital && hasStop) {
      setFeedback(true, "That reads like a proper sentence.");
      return true;
    }
    setFeedback(false, "Start with a capital, add a describing word, and finish with a full stop.");
    return false;
  }
  if (value.toLowerCase() === target.toLowerCase()) {
    setFeedback(true, "That's the sentence.");
    return true;
  }
  setFeedback(false, `Aim for: ${round.answer}`);
  return false;
}

function checkWrite(round) {
  const value = normalise(document.getElementById("write-input").value);
  if (wordCount(value) < 2) {
    setFeedback(false, "Have a go first. Write a little, then we will look at a strong example together.");
    return false;
  }
  const model = WRITE_EXAMPLES[round.prompt] || {
    example: round.example || "I like reading with Mum at night.",
    why: "A strong sentence starts with a capital, says one clear idea, and finishes the thought.",
  };
  setFeedbackHtml(
    true,
    `<p>Good try. That is your writing. Look at a strong example and see what is the same, and what you might add next time.</p>
     <p class="compare-yours"><strong>Yours</strong> ${escapeHtml(value)}</p>
     <p class="compare-model"><strong>A strong example</strong> ${escapeHtml(model.example)}</p>
     <p class="why">${escapeHtml(model.why)}</p>`
  );
  return true;
}

function checkArrange(round) {
  const slots = [...document.querySelectorAll("#arrange-slots .slot")].map((slot) => slot.textContent.trim());
  if (slots.some((slot) => !slot)) {
    setFeedback(false, "Fill every box first.");
    return false;
  }
  const target = round.answerOrder || round.sentences;
  if (slots.join("|") !== target.join("|")) {
    setFeedback(false, "Not the right order yet. Topic first, then details.");
    return false;
  }
  setFeedback(true, "That paragraph is in a sensible order.");
  return true;
}

function checkCurrent() {
  const activity = currentActivity();
  const round = currentRound();
  const checkers = {
    spell: checkSpell,
    build: checkBuild,
    fix: checkFix,
    write: checkWrite,
    arrange: checkArrange,
  };
  const ok = checkers[activity.kind](round);
  if (!ok) return;

  const total = roundsOf(activity).length;
  const last = state.questionIndex >= total - 1;
  state.progress[activity.id] = Math.max(state.progress[activity.id] || 0, state.questionIndex + 1);
  if (last) {
    state.completed[activity.id] = true;
  }
  save();

  const actions = document.querySelector(".actions");
  if (!document.querySelector("[data-action='continue']")) {
    const button = document.createElement("button");
    button.className = "primary";
    button.dataset.action = "continue";
    button.textContent = last ? "Continue" : state.scrambleId ? "Next sentence" : "Next question";
    button.onclick = last ? goNext : goNextQuestion;
    actions.appendChild(button);
  }
}

function resetCurrent() {
  render();
}

function goNextQuestion() {
  state.questionIndex += 1;
  render();
}

function goNext() {
  if (state.scrambleId) {
    const index = UNSCRAMBLE.findIndex((pack) => pack.id === state.scrambleId);
    const next = UNSCRAMBLE[index + 1];
    if (next) {
      openScramble(next.id);
      return;
    }
    state.scrambleId = null;
    state.view = "home";
    render();
    return;
  }
  const week = weekById(state.weekId);
  const index = week.activities.findIndex((activity) => activity.id === state.activityId);
  const next = week.activities[index + 1];
  if (next) {
    openActivity(next.id);
    return;
  }
  state.view = "week";
  render();
}

function bind() {
  document.querySelectorAll("[data-open-week]").forEach((button) => {
    button.onclick = () => openWeek(button.dataset.openWeek, true);
  });

  document.querySelectorAll("[data-open-scramble]").forEach((button) => {
    button.onclick = () => openScramble(button.dataset.openScramble);
  });

  document.querySelectorAll("[data-open-activity]").forEach((button) => {
    button.onclick = () => openActivity(button.dataset.openActivity);
  });

  const saveName = document.querySelector("[data-action='save-name']");
  const nameInput = document.getElementById("name-input");
  if (saveName && nameInput) {
    const storeName = () => {
      state.name = nameInput.value.trim();
      save();
      render();
    };
    saveName.onclick = storeName;
    nameInput.onkeydown = (event) => {
      if (event.key === "Enter") storeName();
    };
  }

  const resetAll = document.querySelector("[data-action='reset-all']");
  if (resetAll) resetAll.onclick = resetAllProgress;

  const home = document.querySelector("[data-action='home']");
  if (home)
    home.onclick = () => {
      state.scrambleId = null;
      state.view = "home";
      render();
    };

  const weekBack = document.querySelector("[data-action='week']");
  if (weekBack)
    weekBack.onclick = () => {
      state.view = "week";
      render();
    };

  const startWeek = document.querySelector("[data-action='start-week']");
  if (startWeek)
    startWeek.onclick = () => {
      state.view = "week";
      render();
    };

  const showLesson = document.querySelector("[data-action='show-lesson']");
  if (showLesson)
    showLesson.onclick = () => {
      state.view = "lesson";
      render();
    };

  const scrambleLesson = document.querySelector("[data-action='scramble-lesson']");
  if (scrambleLesson) scrambleLesson.onclick = openScrambleLesson;

  const check = document.querySelector("[data-action='check']");
  if (check) check.onclick = checkCurrent;

  const reset = document.querySelector("[data-action='reset']");
  if (reset) reset.onclick = resetCurrent;

  const cont = document.querySelector("[data-action='continue']");
  if (cont) {
    const activity = state.view === "activity" ? currentActivity() : null;
    const last = activity && state.questionIndex >= roundsOf(activity).length - 1;
    cont.onclick = last ? goNext : goNextQuestion;
  }

  document.querySelectorAll("[data-tile]").forEach((button) => {
    button.onclick = () => {
      if (button.classList.contains("used")) return;
      const slots = document.getElementById("build-slots");
      const tile = document.createElement("button");
      tile.className = "tile";
      tile.textContent = button.dataset.tile;
      tile.onclick = () => {
        slots.removeChild(tile);
        button.classList.remove("used");
      };
      slots.appendChild(tile);
      button.classList.add("used");
    };
  });

  document.querySelectorAll("[data-starter]").forEach((button) => {
    button.onclick = () => {
      const box = document.getElementById("write-input");
      const insert = button.dataset.starter;
      if (!box.value.trim()) {
        box.value = insert;
        box.focus();
        box.setSelectionRange(insert.length, insert.length);
        return;
      }
      const start = box.selectionStart ?? box.value.length;
      const end = box.selectionEnd ?? box.value.length;
      box.value = box.value.slice(0, start) + insert + box.value.slice(end);
      box.focus();
      box.setSelectionRange(start + insert.length, start + insert.length);
    };
  });

  let picked = null;
  document.querySelectorAll("[data-sentence]").forEach((button) => {
    button.onclick = () => {
      picked = button;
      document.querySelectorAll("[data-sentence]").forEach((node) => node.classList.remove("full"));
      button.classList.add("full");
    };
  });
  document.querySelectorAll("[data-slot]").forEach((slot) => {
    slot.onclick = () => {
      if (!picked) {
        if (slot.textContent) {
          const match = [...document.querySelectorAll("[data-sentence]")].find(
            (node) => node.dataset.sentence === slot.textContent && node.classList.contains("used")
          );
          if (match) match.classList.remove("used");
          slot.textContent = "";
          slot.classList.remove("full");
        }
        return;
      }
      slot.textContent = picked.dataset.sentence;
      slot.classList.add("full");
      picked.classList.add("used");
      picked.classList.remove("full");
      picked = null;
    };
  });
}

load();
render();
