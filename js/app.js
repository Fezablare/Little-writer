const STORAGE_KEY = "little-writer-progress-v3";

const state = {
  view: "home",
  subject: "writing",
  weekId: null,
  activityId: null,
  scrambleId: null,
  mathId: null,
  questionIndex: 0,
  writeTip: null,
  writeChecked: {},
  writeAttempt: "",
  name: "",
  completed: {},
  progress: {},
  mastery: {},
  drafts: {},
};

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    state.name = saved.name || "";
    state.subject = saved.subject === "maths" ? "maths" : "writing";
    state.completed = saved.completed || {};
    state.progress = saved.progress || {};
    state.mastery = saved.mastery || {};
    state.drafts = saved.drafts || {};
  } catch (error) {
    state.completed = {};
    state.progress = {};
    state.mastery = {};
    state.drafts = {};
  }
}

function save() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      name: state.name,
      subject: state.subject,
      completed: state.completed,
      progress: state.progress,
      mastery: state.mastery,
      drafts: state.drafts,
    })
  );
}

function weekById(id) {
  return CURRICULUM.find((week) => week.id === id);
}

function activityById(week, id) {
  return week.activities.find((activity) => activity.id === id);
}

function layersOf(activity) {
  if (!activity) return null;
  if (activity.kind === "write") return null;
  if (state.mathId || state.scrambleId) return null;
  if (activity.layers) return activity.layers;
  const rounds = activity.rounds || (activity.answer || activity.items || activity.sentences ? [activity] : null);
  if (!rounds) return null;
  return [{ id: "practice", label: "Practice", needCorrect: Math.min(2, rounds.length), rounds }];
}

function roundsOf(activity) {
  const layers = layersOf(activity);
  if (layers) return layers.flatMap((layer) => layer.rounds);
  return activity.rounds || [activity];
}

function masteryState(activityId) {
  if (!state.mastery[activityId]) {
    state.mastery[activityId] = { layer: 0, streak: 0, round: 0 };
  }
  return state.mastery[activityId];
}

function currentLayer(activity) {
  const layers = layersOf(activity);
  if (!layers) return null;
  const m = masteryState(activity.id);
  return layers[Math.min(m.layer, layers.length - 1)];
}

function questionsDone(activity) {
  if (state.completed[activity.id]) return activityQuestionTotal(activity);
  if (activity.kind === "write") {
    return Math.min(state.progress[activity.id] || 0, roundsOf(activity).length);
  }
  const layers = layersOf(activity);
  if (!layers) return 0;
  const m = masteryState(activity.id);
  return Math.min(m.layer, layers.length);
}

function activityQuestionTotal(activity) {
  if (activity.kind === "write") return roundsOf(activity).length;
  const layers = layersOf(activity);
  return layers ? layers.length : roundsOf(activity).length;
}

function weekQuestionsDone(week) {
  return week.activities.reduce((sum, activity) => sum + questionsDone(activity), 0);
}

function weekQuestionTotal(week) {
  return week.activities.reduce((sum, activity) => sum + activityQuestionTotal(activity), 0);
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
  return UNSCRAMBLE.reduce((sum, pack) => sum + questionsDoneFlat(pack), 0);
}

function scrambleTotal() {
  return UNSCRAMBLE.reduce((sum, pack) => sum + roundsOf(pack).length, 0);
}

function questionsDoneFlat(pack) {
  if (state.completed[pack.id]) return roundsOf(pack).length;
  return Math.min(state.progress[pack.id] || 0, roundsOf(pack).length);
}

function currentScramble() {
  return UNSCRAMBLE.find((pack) => pack.id === state.scrambleId);
}

function currentMath() {
  return MATH.find((pack) => pack.id === state.mathId);
}

function isFlatPath() {
  return Boolean(state.scrambleId || state.mathId);
}

function mathDone() {
  return MATH.reduce((sum, pack) => sum + questionsDoneFlat(pack), 0);
}

function mathTotal() {
  return MATH.reduce((sum, pack) => sum + roundsOf(pack).length, 0);
}

function currentActivity() {
  if (state.mathId && state.mathId !== "intro") return currentMath();
  if (state.scrambleId && state.scrambleId !== "intro") return currentScramble();
  const week = weekById(state.weekId);
  return activityById(week, state.activityId);
}

function currentRound() {
  const activity = currentActivity();
  if (isFlatPath() || activity.kind === "write") {
    return roundsOf(activity)[state.questionIndex];
  }
  const layer = currentLayer(activity);
  const m = masteryState(activity.id);
  const rounds = layer.rounds;
  return rounds[m.round % rounds.length];
}

function startQuestion(id) {
  const activity = currentActivity();
  if (isFlatPath() || activity.kind === "write") {
    const total = roundsOf(activity).length;
    if (state.completed[id]) {
      state.questionIndex = 0;
    } else {
      state.questionIndex = Math.min(state.progress[id] || 0, total - 1);
    }
    return;
  }
  masteryState(id);
}

function openActivity(id) {
  state.scrambleId = null;
  state.mathId = null;
  state.activityId = id;
  state.writeTip = null;
  state.writeChecked = {};
  state.writeAttempt = "";
  startQuestion(id);
  state.view = "activity";
  render();
}

function openScramble(id) {
  state.weekId = null;
  state.activityId = null;
  state.mathId = null;
  state.subject = "writing";
  state.scrambleId = id;
  state.view = "activity";
  startQuestion(id);
  render();
}

function openScrambleLesson() {
  state.weekId = null;
  state.activityId = null;
  state.mathId = null;
  state.subject = "writing";
  state.scrambleId = "intro";
  state.view = "lesson";
  render();
}

function openMath(id) {
  state.weekId = null;
  state.activityId = null;
  state.scrambleId = null;
  state.subject = "maths";
  state.mathId = id;
  state.view = "activity";
  startQuestion(id);
  render();
}

function openMathLesson() {
  state.weekId = null;
  state.activityId = null;
  state.scrambleId = null;
  state.subject = "maths";
  state.mathId = "intro";
  state.view = "lesson";
  render();
}

function setSubject(subject) {
  state.subject = subject === "maths" ? "maths" : "writing";
  state.scrambleId = null;
  state.mathId = null;
  state.weekId = null;
  state.activityId = null;
  state.view = "home";
  save();
  render();
}

function openWeek(id, showLesson) {
  state.scrambleId = null;
  state.mathId = null;
  state.subject = "writing";
  state.weekId = id;
  state.view = showLesson === false ? "week" : "lesson";
  render();
}

function weekLesson() {
  const week = weekById(state.weekId);
  return week.lesson || WEEK_LESSONS[week.id];
}

function topicLabel(week) {
  return week.group ? `Topic ${week.week}` : `Week ${week.week}`;
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
  state.mastery = {};
  state.drafts = {};
  state.questionIndex = 0;
  save();
  render();
}

function render() {
  const root = document.getElementById("app");
  if (state.view === "home") {
    root.innerHTML = state.subject === "maths" ? renderMathHome() : renderWritingHome();
  }
  if (state.view === "week") root.innerHTML = renderWeek();
  if (state.view === "lesson") root.innerHTML = renderLesson();
  if (state.view === "activity") root.innerHTML = renderActivity();
  bind();
}

function brandBar(subtitle, markText) {
  return `
    <div class="brand">
      <div class="mark" aria-hidden="true">${escapeHtml(markText || "Lw")}</div>
      <div>
        <strong>Little Writer</strong>
        <small>${escapeHtml(subtitle)}</small>
      </div>
    </div>
  `;
}

function subjectTabs() {
  return `
    <nav class="subject-tabs" aria-label="Subject">
      <button type="button" class="subject-tab ${state.subject === "writing" ? "active" : ""}" data-subject="writing">Writing</button>
      <button type="button" class="subject-tab ${state.subject === "maths" ? "active" : ""}" data-subject="maths">Maths</button>
    </nav>
  `;
}

function renderExamplePairs(examples) {
  return `
    <div class="pairs">
      ${examples
        .map(
          (example) => `
        <div class="pair">
          <p class="ok-line">${escapeHtml(example.right)}</p>
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
  if (state.mathId === "intro") {
    return `
      <header class="topbar">
        <button class="ghost" data-action="home">All maths packs</button>
      </header>
      <section class="hero">
        <p class="crumb">Times tables · lesson</p>
        <h1>Equal groups</h1>
        ${renderLessonBody(MATH_LESSON, "Picture first")}
        <div class="actions">
          <button class="primary" data-open-math="${MATH[0].id}">Start with bikes</button>
        </div>
      </section>
    `;
  }
  if (state.scrambleId === "intro") {
    return `
      <header class="topbar">
        <button class="ghost" data-action="home">All sentence packs</button>
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
  const story = week.story ? renderStoryCard(week, "You will read this story, fill the spelling gaps, then practise and write.") : "";
  return `
    <header class="topbar">
      <button class="ghost" data-action="home">All topics</button>
    </header>
    <section class="hero">
      <p class="crumb">${topicLabel(week)} · lesson</p>
      <h1>${escapeHtml(week.title)}</h1>
      ${story}
      ${renderLessonBody(lesson, "A clear example")}
      <div class="actions">
        <button class="primary" data-action="start-week">Start the tasks</button>
      </div>
    </section>
  `;
}

function renderWritingHome() {
  const percent = Math.round((totalDone() / totalActivities()) * 100) || 0;
  const next = currentWeek();
  const allDone = totalDone() === totalActivities();
  const greeting = state.name ? `Hi ${escapeHtml(state.name)}.` : "Writing topics, not a calendar.";
  const cta = allDone
    ? `<p class="lede">Every topic is done. Open any topic to practise again.</p>`
    : `<div class="name-row">
        <button class="primary" data-open-week="${next.id}">Continue ${escapeHtml(next.title)}</button>
      </div>
      <p class="hint">${escapeHtml(next.focus)}</p>`;
  return `
    <header class="topbar">
      ${brandBar("Topics for writing and spelling")}
      <button class="ghost" data-action="reset-all">Reset progress</button>
    </header>
    ${subjectTabs()}
    <section class="hero">
      <p class="crumb">Topics · stay until it feels easy</p>
      <h1>${greeting}</h1>
      <p class="lede">
        Sentence craft, then writing for a purpose, then a short spelling path.
        Stay in a topic as long as you need. Progress stays on this device.
      </p>
      <div class="name-row">
        <input id="name-input" type="text" maxlength="24" placeholder="Writer's name" value="${escapeHtml(state.name)}" />
        <button class="secondary" data-action="save-name">Save name</button>
      </div>
      ${cta}
      <div class="progress-line"><span style="width:${percent}%"></span></div>
      <p class="hint">${totalDone()} of ${totalActivities()} steps done</p>
    </section>
    ${renderTopicSections(next, allDone)}
    ${renderScrambleHome()}
  `;
}

function renderMathHome() {
  const done = mathDone();
  const total = mathTotal();
  const timesPacks = MATH.filter((pack) => pack.track !== "add");
  const addPacks = MATH.filter((pack) => pack.track === "add");
  const next = MATH.find((pack) => questionsDoneFlat(pack) < roundsOf(pack).length) || MATH[0];
  const greeting = state.name ? `Hi ${escapeHtml(state.name)}.` : "Maths practice.";
  const percent = Math.round((done / total) * 100) || 0;
  const addDone = addPacks.reduce((sum, pack) => sum + questionsDoneFlat(pack), 0);
  const addTotal = addPacks.reduce((sum, pack) => sum + roundsOf(pack).length, 0);

  function packCards(packs) {
    return packs
      .map((pack) => {
        const packDone = questionsDoneFlat(pack);
        const packTotal = roundsOf(pack).length;
        const isNext = pack.id === next.id && done < total;
        return `
          <button class="week-card ${isNext ? "current" : ""}" data-open-math="${pack.id}">
            <div class="num">${escapeHtml(pack.level)}${isNext ? " · next" : ""}</div>
            <h3>${escapeHtml(pack.title)}</h3>
            <p>${packTotal} questions</p>
            <div class="pills">
              ${Array.from({ length: packTotal }, (_, index) => `<span class="pill ${index < packDone ? "done" : ""}"></span>`).join("")}
            </div>
            <p class="hint">${packDone}/${packTotal} done</p>
          </button>
        `;
      })
      .join("");
  }

  return `
    <header class="topbar">
      ${brandBar("Times tables & adding", "×")}
      <button class="ghost" data-action="reset-all">Reset progress</button>
    </header>
    ${subjectTabs()}
    <section class="hero">
      <p class="crumb">Maths · multiplication & addition</p>
      <h1>${greeting}</h1>
      <p class="lede">
        Short times-tables missions, plus a separate adding practice for 2- and 3-digit sums.
        No timers — clear first, fast later.
      </p>
      <div class="name-row">
        <button class="primary" data-action="math-lesson">How multiplication works</button>
        <button class="secondary" data-open-math="${next.id}">Continue ${escapeHtml(next.title)}</button>
      </div>
      <div class="progress-line"><span style="width:${percent}%"></span></div>
      <p class="hint">${done} of ${total} questions done</p>
    </section>
    <div class="block-title">
      <h2>Times tables missions</h2>
      <p>3s and 4s first, then 2s, 5s and 10s. See the groups, match the fact, hop the path, then know the total.</p>
    </div>
    <div class="week-grid">
      ${packCards(timesPacks)}
    </div>
    <div class="block-title">
      <h2>Addition practice</h2>
      <p>
        Keep addition warm while you learn multiplication. Type the total for each sum.
        ${addDone} of ${addTotal} done.
      </p>
    </div>
    <div class="week-grid">
      ${packCards(addPacks)}
    </div>
  `;
}

function renderTopicSections(next, allDone) {
  const groups = [];
  CURRICULUM.forEach((week) => {
    const name = week.group || "Writing";
    let group = groups.find((item) => item.name === name);
    if (!group) {
      group = { name, weeks: [] };
      groups.push(group);
    }
    group.weeks.push(week);
  });
  return groups
    .map((group) => {
      const cards = group.weeks
        .map((week) => {
          const done = weekQuestionsDone(week);
          const total = weekQuestionTotal(week);
          const isNext = !allDone && week.id === next.id;
          return `
          <button class="week-card ${isNext ? "current" : ""}" data-open-week="${week.id}">
            <div class="num">${topicLabel(week)}${isNext ? " · next" : ""}</div>
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
            <p class="hint">${done}/${total} steps</p>
          </button>`;
        })
        .join("");
      return `
        <div class="block-title">
          <h2>${escapeHtml(group.name)}</h2>
        </div>
        <div class="week-grid">${cards}</div>`;
    })
    .join("");
}

function renderScrambleHome() {
  const done = scrambleDone();
  const total = scrambleTotal();
  const next =
    UNSCRAMBLE.find((pack) => questionsDoneFlat(pack) < roundsOf(pack).length) || UNSCRAMBLE[0];
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
        const packDone = questionsDoneFlat(pack);
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
  const draftRaw = state.drafts[week.id];
  const draft = Array.isArray(draftRaw) ? draftRaw.filter(Boolean).join("\n\n") : draftRaw;
  return `
    <header class="topbar">
      <button class="ghost" data-action="home">All topics</button>
    </header>
    <div class="week-head">
      <p class="crumb">${topicLabel(week)} · ${escapeHtml(week.group || "Writing")}</p>
      <h1>${escapeHtml(week.title)}</h1>
      <p class="lede">${escapeHtml(week.focus)}</p>
      ${week.story ? renderStoryCard(week, "Read this story first. Then open Read to fill the gaps.") : ""}
      ${finished ? `<p class="done-tag">This topic is complete</p>` : ""}
      <div class="name-row">
        <button class="secondary" data-action="show-lesson">Show the lesson again</button>
      </div>
    </div>
    ${
      draft
        ? `<section class="draft-strip">
            <strong>Your writing in this topic</strong>
            <p>${escapeHtml(draft)}</p>
          </section>`
        : ""
    }
    <div class="activity-list">
      ${week.activities
        .map((activity, index) => {
          const total = activityQuestionTotal(activity);
          const done = questionsDone(activity);
          const layers = layersOf(activity);
          const label = layers
            ? `${done}/${total} layers`
            : `${done}/${total}`;
          return `
        <button class="activity-card" data-open-activity="${activity.id}">
          <div>
            <div class="kind">Task ${index + 1} · ${activity.kind} · ${label}</div>
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

function layerChip(activity) {
  const layers = layersOf(activity);
  if (!layers || isFlatPath()) return "";
  const m = masteryState(activity.id);
  const layer = layers[Math.min(m.layer, layers.length - 1)];
  return `
    <div class="layer-chip">
      <span>${escapeHtml(layer.label)}</span>
      <span>${m.streak}/${layer.needCorrect} correct</span>
    </div>
  `;
}

function renderActivity() {
  const week = state.weekId ? weekById(state.weekId) : null;
  const activity = currentActivity();
  const round = currentRound();
  const body = {
    spell: renderSpell,
    story: renderStory,
    build: renderBuild,
    fix: renderFix,
    write: renderWrite,
    arrange: renderArrange,
    choose: renderChoose,
    spot: renderSpot,
    proof: renderProof,
    expand: renderExpand,
    groups: renderGroups,
    array: renderArray,
    skip: renderSkip,
    scene: renderScene,
    match: renderMatch,
    path: renderPath,
    sum: renderSum,
  }[activity.kind](round);

  let crumb;
  if (state.mathId) {
    const total = roundsOf(activity).length;
    crumb = `${activity.level} · ${state.questionIndex + 1} of ${total}`;
  } else if (state.scrambleId) {
    const total = roundsOf(activity).length;
    crumb = `${activity.level} · sentence ${state.questionIndex + 1} of ${total}`;
  } else if (activity.kind === "write") {
    const total = roundsOf(activity).length;
    crumb = `write · ${state.questionIndex + 1} of ${total}`;
  } else {
    const layers = layersOf(activity);
    const m = masteryState(activity.id);
    const layer = layers[Math.min(m.layer, layers.length - 1)];
    crumb = `${activity.kind} · ${layer.label}`;
  }

  let back;
  if (state.mathId) {
    back = `<button class="ghost" data-action="home">All maths packs</button>`;
  } else if (state.scrambleId) {
    back = `<button class="ghost" data-action="home">All sentence packs</button>`;
  } else {
    back = `<button class="ghost" data-action="week">Back to ${escapeHtml(week.title)}</button>`;
  }

  const tip =
    activity.kind === "write" && state.writeTip
      ? `<div class="tip-box"><strong>Tip</strong> ${escapeHtml(state.writeTip)}</div>`
      : "";

  return `
    <header class="topbar">
      ${back}
    </header>
    <section class="hero">
      <p class="crumb">${crumb}</p>
      <h1>${escapeHtml(activity.title)}</h1>
      ${layerChip(activity)}
      <p class="prompt">${escapeHtml(round.prompt || activity.prompt)}</p>
      ${tip}
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

function renderStoryCard(week, note) {
  if (!week.story) return "";
  const body = week.story.text
    ? `<div class="story-body">${escapeHtml(week.story.text)}</div>`
    : "";
  const footer = note ? `<p class="story-note">${escapeHtml(note)}</p>` : "";
  return `<div class="story-card">
      <div class="story-label">This week's story</div>
      <h2>${escapeHtml(week.story.theme)}</h2>
      ${body}
      ${footer}
    </div>`;
}

function storyBlanks(passage) {
  const blanks = [];
  const html = escapeHtml(passage).replace(/\{\{([^}]+)\}\}/g, (_, word) => {
    const index = blanks.length;
    blanks.push(word);
    const width = Math.max(3, Math.min(14, word.length + 1));
    return `<input class="story-blank" data-blank="${index}" size="${width}" autocomplete="off" spellcheck="false" aria-label="missing word ${index + 1}" />`;
  });
  return { blanks, html };
}

function renderStory(round) {
  const week = state.weekId ? weekById(state.weekId) : null;
  const { blanks, html } = storyBlanks(round.passage);
  const bank = [...blanks].sort(() => Math.random() - 0.5);
  const tip = round.tip
    ? `<div class="tip-box"><strong>How this sentence is built</strong> ${escapeHtml(round.tip)}</div>`
    : "";
  const fullStory =
    week && week.story && week.story.text
      ? `<div class="story-read">
          <div class="story-label">Read first</div>
          <h2>${escapeHtml(week.story.theme)}</h2>
          <div class="story-body">${escapeHtml(week.story.text)}</div>
        </div>`
      : "";
  return `
    ${fullStory}
    <p class="hint">Say the story out loud. Then fill each gap from the word box.</p>
    ${tip}
    <div class="story-bank">
      <strong>Word box</strong>
      <div class="story-bank-words">
        ${bank.map((word) => `<span class="story-chip">${escapeHtml(word)}</span>`).join("")}
      </div>
    </div>
    <div class="story-passage">${html}</div>
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

function renderChoose(round) {
  return `
    <p class="hint">${escapeHtml(round.question || "Tap the best answer.")}</p>
    <div class="choice-list">
      ${round.choices
        .map(
          (choice, index) => `
        <button type="button" class="choice" data-choice="${index}">${escapeHtml(choice)}</button>
      `
        )
        .join("")}
    </div>
  `;
}

function renderSpot(round) {
  const parts = round.parts || [];
  return `
    <p class="hint">Tap the part that is wrong, then type the fix.</p>
    <div class="spot-parts">
      ${parts
        .map(
          (part, index) => `
        <button type="button" class="spot-part" data-spot="${index}">${escapeHtml(part)}</button>
      `
        )
        .join("")}
    </div>
    <textarea class="fix-box" id="spot-fix" placeholder="Type the fixed word or sentence"></textarea>
  `;
}

function renderProof(round) {
  const parts = round.parts || [];
  const errorChoices = (round.errorChoices || [])
    .map(
      (choice, index) => `
      <button type="button" class="choice" data-choice="${index}">${escapeHtml(choice)}</button>
    `
    )
    .join("");
  return `
    <p class="hint">Read carefully. Name the mistake, tap the broken bit, then write a full sentence.</p>
    <p class="proof-broken"><strong>Broken:</strong> ${escapeHtml(round.broken)}</p>
    ${
      round.guide
        ? `<div class="tip-box"><strong>Before you fix</strong> ${escapeHtml(round.guide)}</div>`
        : ""
    }
    ${
      errorChoices
        ? `<p class="hint">What kind of mistake is this?</p><div class="choice-list proof-errors">${errorChoices}</div>`
        : ""
    }
    <div class="spot-parts">
      ${parts
        .map(
          (part, index) => `
        <button type="button" class="spot-part" data-spot="${index}">${escapeHtml(part)}</button>
      `
        )
        .join("")}
    </div>
    <textarea class="fix-box" id="spot-fix" placeholder="Type the fixed full sentence"></textarea>
  `;
}

function renderExpand(round) {
  return `
    <p class="hint">Start: <strong>${escapeHtml(round.seed)}</strong></p>
    <p class="hint">${escapeHtml(round.hint || "Add one detail to make a fuller sentence.")}</p>
    <textarea class="write-box" id="expand-input" placeholder="Write the longer sentence">${escapeHtml(round.seed)}</textarea>
  `;
}

function renderGroups(round) {
  const total = round.groups * round.size;
  return `
    <p class="hint">Goal: <strong>${escapeHtml(round.label)}</strong> · ${total} dots in all.</p>
    <p class="hint">Tap a bowl, then tap Add dot. Each bowl needs ${round.size}.</p>
    <div class="math-groups" id="math-groups" data-groups="${round.groups}" data-size="${round.size}">
      ${Array.from({ length: round.groups }, (_, index) => `
        <button type="button" class="math-bowl" data-bowl="${index}" aria-label="Group ${index + 1}">
          <span class="math-bowl-label">Group ${index + 1}</span>
          <div class="math-dots" data-dots="${index}"></div>
          <span class="math-bowl-count"><span data-count="${index}">0</span> / ${round.size}</span>
        </button>
      `).join("")}
    </div>
    <div class="math-tools">
      <button type="button" class="secondary" data-action="add-dot">Add dot</button>
      <button type="button" class="ghost" data-action="clear-bowl">Clear bowl</button>
    </div>
    <p class="math-equation" id="math-equation" hidden></p>
  `;
}

function renderArray(round) {
  const cells = round.rows * round.cols;
  return `
    <p class="hint">Goal: <strong>${escapeHtml(round.label)}</strong> · fill all ${cells} cells.</p>
    <p class="hint">Tap empty cells to fill them. Tap a filled cell to empty it.</p>
    <div class="math-array" id="math-array" style="--cols:${round.cols}" data-rows="${round.rows}" data-cols="${round.cols}">
      ${Array.from({ length: cells }, (_, index) => `
        <button type="button" class="math-cell" data-cell="${index}" aria-pressed="false"></button>
      `).join("")}
    </div>
    <p class="hint"><span id="array-filled">0</span> / ${cells} filled</p>
    <p class="math-equation" id="math-equation" hidden></p>
  `;
}

function renderSkip(round) {
  const values = Array.from({ length: round.sequenceLength }, (_, index) => round.start + index * round.step);
  const blankSet = new Set(round.blankIndexes);
  const answers = round.blankIndexes.map((index) => String(values[index]));
  const bank = [...answers].sort(() => Math.random() - 0.5);
  let blankOrdinal = 0;
  const line = values
    .map((value, index) => {
      if (!blankSet.has(index)) {
        return `<span class="skip-num">${value}</span>`;
      }
      const ord = blankOrdinal;
      blankOrdinal += 1;
      return `<input class="story-blank skip-blank" data-skip="${ord}" size="3" inputmode="numeric" autocomplete="off" spellcheck="false" aria-label="missing number ${ord + 1}" />`;
    })
    .join('<span class="skip-sep">,</span>');
  return `
    <p class="hint">Count up by ${round.step}. Tap a number chip or type in the gaps.</p>
    <div class="story-bank">
      <strong>Number box</strong>
      <div class="story-bank-words">
        ${bank.map((word) => `<span class="story-chip">${escapeHtml(word)}</span>`).join("")}
      </div>
    </div>
    <div class="skip-line">${line}</div>
  `;
}

function renderTokenGroup(groups, size, item) {
  return `
    <div class="math-groups scene-groups">
      ${Array.from({ length: groups }, (_, index) => `
        <div class="math-bowl scene-bowl">
          <span class="math-bowl-label">Group ${index + 1}</span>
          <div class="math-dots">
            ${Array.from({ length: size }, () => `<span class="math-token" title="${escapeHtml(item)}">${escapeHtml(item)}</span>`).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderScene(round) {
  return `
    <div class="scene-story">${escapeHtml(round.story)}</div>
    <p class="hint">Count the equal groups of <strong>${escapeHtml(round.item)}s</strong>. How many altogether?</p>
    ${renderTokenGroup(round.groups, round.size, round.item)}
    <div class="choice-list scene-choices">
      ${round.choices
        .map(
          (choice, index) => `
        <button type="button" class="choice" data-choice="${index}">${escapeHtml(choice)}</button>
      `
        )
        .join("")}
    </div>
    <p class="math-equation" id="math-equation" hidden></p>
  `;
}

function renderMatch(round) {
  return `
    <div class="scene-story">${escapeHtml(round.story)}</div>
    <p class="hint">Look at the picture. Tap the fact that matches these equal groups.</p>
    ${renderTokenGroup(round.groups, round.size, round.item)}
    <div class="choice-list match-facts">
      ${round.facts
        .map(
          (fact, index) => `
        <button type="button" class="choice match-fact" data-fact="${index}">${escapeHtml(fact)}</button>
      `
        )
        .join("")}
    </div>
    <p class="math-equation" id="math-equation" hidden></p>
  `;
}

function renderPath(round) {
  const knownIndex = round.pads.findIndex((pad) => pad !== null);
  const known = round.pads[knownIndex];
  const expected = round.pads.map((_, index) => known + (index - knownIndex) * round.step);
  const blankAnswers = round.pads
    .map((pad, index) => (pad === null ? String(expected[index]) : null))
    .filter((value) => value !== null);
  const bank = [...blankAnswers].sort(() => Math.random() - 0.5);
  let blankOrdinal = 0;
  const stones = round.pads
    .map((pad, index) => {
      if (pad !== null) {
        return `<div class="path-stone filled"><span>${pad}</span></div>`;
      }
      const ord = blankOrdinal;
      blankOrdinal += 1;
      return `<div class="path-stone blank"><input class="story-blank skip-blank path-blank" data-skip="${ord}" size="3" inputmode="numeric" autocomplete="off" spellcheck="false" aria-label="stone ${index + 1}" /></div>`;
    })
    .join('<span class="path-hop" aria-hidden="true">→</span>');
  return `
    <p class="hint">Each hop adds <strong>${round.step}</strong>. Fill the empty stones.</p>
    <div class="story-bank">
      <strong>Number box</strong>
      <div class="story-bank-words">
        ${bank.map((word) => `<span class="story-chip">${escapeHtml(word)}</span>`).join("")}
      </div>
    </div>
    <div class="path-track" data-step="${round.step}">${stones}</div>
  `;
}

function renderSum(round) {
  return `
    <p class="hint">Add the numbers. Type the total in the box.</p>
    <div class="sum-card" aria-label="${round.a} plus ${round.b}">
      <div class="sum-line">${round.a}</div>
      <div class="sum-line"><span class="sum-plus">+</span>${round.b}</div>
      <div class="sum-rule" aria-hidden="true"></div>
      <label class="sum-label" for="sum-answer">Total</label>
      <input id="sum-answer" class="sum-answer" type="text" inputmode="numeric" autocomplete="off" spellcheck="false" placeholder="?" aria-label="type the total" />
    </div>
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
    <textarea class="write-box" id="write-input" placeholder="Write here">${escapeHtml(state.writeAttempt || "")}</textarea>
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

function checkStory(round) {
  const { blanks } = storyBlanks(round.passage);
  const wrong = [];
  blanks.forEach((answer, index) => {
    const input = document.querySelector(`[data-blank="${index}"]`);
    const value = normalise(input ? input.value : "").toLowerCase();
    if (value !== answer.toLowerCase()) wrong.push(answer);
  });
  if (wrong.length) {
    setFeedback(false, `Not yet. Look again for: ${wrong.join(", ")}.`);
    return false;
  }
  setFeedback(true, "Yes — you read it and spelled the missing words.");
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

function checkChoose(round) {
  const selected = document.querySelector(".choice.selected");
  if (!selected) {
    setFeedback(false, "Tap one answer first.");
    return false;
  }
  const index = Number(selected.dataset.choice);
  if (index !== round.answerIndex) {
    setFeedback(false, "Not that one. Look again at the rule from the lesson.");
    return false;
  }
  setFeedback(true, "Yes — that matches the rule.");
  return true;
}

function checkSpot(round) {
  const selected = document.querySelector(".spot-part.selected");
  if (!selected) {
    setFeedback(false, "Tap the broken part first.");
    return false;
  }
  const index = Number(selected.dataset.spot);
  if (index !== round.brokenIndex) {
    setFeedback(false, "That part is fine. Tap the bit that looks wrong.");
    return false;
  }
  const value = normalise(document.getElementById("spot-fix").value);
  if (value.toLowerCase() !== normalise(round.fix).toLowerCase()) {
    setFeedback(false, `Almost. Aim for: ${round.fix}`);
    return false;
  }
  if (round.explain) {
    setFeedbackHtml(
      true,
      `<p>You spotted it and fixed it.</p>
       <div class="tip-box"><strong>Why it matters</strong> ${escapeHtml(round.explain)}</div>`
    );
  } else {
    setFeedback(true, "You spotted it and fixed it.");
  }
  return true;
}

function checkProof(round) {
  if (round.errorChoices && round.errorIndex != null) {
    const errorPick = document.querySelector(".proof-errors .choice.selected");
    if (!errorPick) {
      setFeedback(false, "First tap what kind of mistake it is.");
      return false;
    }
    if (Number(errorPick.dataset.choice) !== round.errorIndex) {
      setFeedback(false, "Not that kind of mistake. Look for unfinished thoughts, missing who/verb, capitals, or stops.");
      return false;
    }
  }
  const selected = document.querySelector(".spot-part.selected");
  if (!selected) {
    setFeedback(false, "Tap the broken bit.");
    return false;
  }
  if (Number(selected.dataset.spot) !== round.brokenIndex) {
    setFeedback(false, "That bit is fine. Tap the part that needs fixing.");
    return false;
  }
  const value = normalise(document.getElementById("spot-fix").value);
  const accepted = (round.answers || [round.answer || round.fix || ""])
    .filter(Boolean)
    .map((item) => normalise(item).toLowerCase());
  let ok = accepted.includes(value.toLowerCase());
  if (!ok && round.mustInclude) {
    const hasWords = round.mustInclude.every((word) =>
      value.toLowerCase().includes(String(word).toLowerCase())
    );
    const longEnough = wordCount(value) >= (round.minWords || 3);
    const gated = /^[A-Z]/.test(value) && /[.!?]$/.test(value);
    ok = hasWords && longEnough && gated;
  }
  if (!ok) {
    setFeedback(false, `Almost. Aim for something like: ${round.answer || round.fix}`);
    return false;
  }
  const model = round.answer || round.fix || accepted[0];
  setFeedbackHtml(
    true,
    `<p>Nice editing. You made a full, clear sentence.</p>
     <p class="compare-model"><strong>One good fix</strong> ${escapeHtml(model)}</p>
     <div class="tip-box"><strong>Remember</strong> ${escapeHtml(round.explain)}</div>`
  );
  return true;
}

function checkExpand(round) {
  const value = normalise(document.getElementById("expand-input").value);
  const seed = normalise(round.seed);
  if (wordCount(value) < wordCount(seed) + 1) {
    setFeedback(false, "Add at least one extra detail word.");
    return false;
  }
  if (round.mustInclude) {
    const missing = round.mustInclude.filter(
      (word) => !value.toLowerCase().includes(word.toLowerCase())
    );
    if (missing.length) {
      setFeedback(false, `Try to include: ${missing.join(", ")}.`);
      return false;
    }
  }
  if (round.needCapital && !/^[A-Z]/.test(value)) {
    setFeedback(false, "Start with a capital letter.");
    return false;
  }
  setFeedback(true, "Nice — that sentence has more detail now.");
  return true;
}

function showMathEquation(a, b, product) {
  const node = document.getElementById("math-equation");
  if (!node) return;
  node.hidden = false;
  node.textContent = `${a} × ${b} = ${product}`;
}

function checkGroups(round) {
  const root = document.getElementById("math-groups");
  if (!root) return false;
  const counts = Array.from({ length: round.groups }, (_, index) =>
    root.querySelector(`[data-dots="${index}"]`).querySelectorAll(".math-dot").length
  );
  const uneven = counts.some((count) => count !== round.size);
  const total = counts.reduce((sum, count) => sum + count, 0);
  if (uneven || total !== round.product) {
    setFeedback(false, `Each group needs ${round.size} dots. You want ${round.groups} equal groups.`);
    return false;
  }
  showMathEquation(round.groups, round.size, round.product);
  setFeedback(true, `${round.label} is ${round.product}. So ${round.groups} × ${round.size} = ${round.product}.`);
  return true;
}

function checkArray(round) {
  const filled = document.querySelectorAll(".math-cell.filled").length;
  const need = round.rows * round.cols;
  if (filled !== need) {
    setFeedback(false, `Fill every cell. You need ${need} in the grid.`);
    return false;
  }
  showMathEquation(round.rows, round.cols, round.product);
  setFeedback(true, `${round.label} is ${round.product}. So ${round.rows} × ${round.cols} = ${round.product}.`);
  return true;
}

function checkSkip(round) {
  const values = Array.from({ length: round.sequenceLength }, (_, index) => round.start + index * round.step);
  const wrong = [];
  round.blankIndexes.forEach((index, ordinal) => {
    const input = document.querySelector(`[data-skip="${ordinal}"]`);
    const value = normalise(input ? input.value : "");
    if (value !== String(values[index])) wrong.push(String(values[index]));
  });
  if (wrong.length) {
    setFeedback(false, `Not yet. Look again for: ${wrong.join(", ")}.`);
    return false;
  }
  setFeedback(true, `Yes — that is counting by ${round.step}.`);
  return true;
}

function checkScene(round) {
  const selected = document.querySelector(".scene-choices .choice.selected");
  if (!selected) {
    setFeedback(false, "Tap how many altogether.");
    return false;
  }
  if (selected.textContent.trim() !== String(round.product)) {
    setFeedback(false, `Count again: ${round.groups} groups of ${round.size}.`);
    return false;
  }
  showMathEquation(round.groups, round.size, round.product);
  const eq = document.getElementById("math-equation");
  if (eq) eq.classList.add("reveal");
  setFeedback(
    true,
    `${round.groups} groups of ${round.size} ${round.item}s is ${round.product}. So ${round.groups} × ${round.size} = ${round.product}.`
  );
  return true;
}

function checkMatch(round) {
  const selected = document.querySelector(".match-fact.selected");
  if (!selected) {
    setFeedback(false, "Tap the fact that matches the picture.");
    return false;
  }
  if (selected.textContent.trim() !== round.answerFact) {
    setFeedback(false, "Count the groups again, then match who × size.");
    return false;
  }
  showMathEquation(round.groups, round.size, round.product);
  const eq = document.getElementById("math-equation");
  if (eq) eq.classList.add("reveal");
  setFeedback(true, `Yes — that picture is ${round.answerFact}.`);
  return true;
}

function checkPath(round) {
  const knownIndex = round.pads.findIndex((pad) => pad !== null);
  const known = round.pads[knownIndex];
  const expected = round.pads.map((_, index) => known + (index - knownIndex) * round.step);
  const wrong = [];
  let ordinal = 0;
  round.pads.forEach((pad, index) => {
    if (pad !== null) return;
    const input = document.querySelector(`[data-skip="${ordinal}"]`);
    const value = normalise(input ? input.value : "");
    if (value !== String(expected[index])) wrong.push(String(expected[index]));
    else if (input) input.closest(".path-stone")?.classList.add("correct");
    ordinal += 1;
  });
  if (wrong.length) {
    setFeedback(false, `Hop by ${round.step}. Missing: ${wrong.join(", ")}.`);
    return false;
  }
  setFeedback(true, `Nice hopping — each jump was +${round.step}.`);
  return true;
}

function checkSum(round) {
  const input = document.getElementById("sum-answer");
  const raw = input ? input.value.trim() : "";
  if (!raw) {
    setFeedback(false, "Type the total first.");
    return false;
  }
  if (!/^\d+$/.test(raw)) {
    setFeedback(false, "Use digits only for the total.");
    return false;
  }
  const value = Number(raw);
  if (value !== round.answer) {
    setFeedback(false, `Not yet. Check ones, then tens${round.a >= 100 || round.b >= 100 ? ", then hundreds" : ""}.`);
    return false;
  }
  setFeedback(true, `Yes — ${round.a} + ${round.b} = ${round.answer}.`);
  return true;
}

function coachChecks(value) {
  return [
    { id: "capital", label: "Starts with a capital letter", ok: /^[A-Z]/.test(value) },
    { id: "idea", label: "Says one clear idea", ok: wordCount(value) >= 3 },
    { id: "end", label: "Ends the thought (. ! or ?)", ok: /[.!?]$/.test(value) },
  ];
}

function checkWrite(round) {
  const value = normalise(document.getElementById("write-input").value);
  state.writeAttempt = value;
  if (wordCount(value) < 2) {
    setFeedback(false, "Have a go first. Write a little, then we will look at a strong example together.");
    return false;
  }

  if (state.weekId) {
    let slots = state.drafts[state.weekId];
    if (!Array.isArray(slots)) {
      slots = typeof slots === "string" && slots ? [slots] : [];
    }
    slots[state.questionIndex] = value;
    state.drafts[state.weekId] = slots;
    save();
  }

  const model = WRITE_EXAMPLES[round.prompt] || {
    example: round.example || "I like reading with Mum at night.",
    why: "A strong sentence starts with a capital, says one clear idea, and finishes the thought.",
    tip: "Say your sentence out loud. Does it start big and finish cleanly?",
  };

  const checks = coachChecks(value);
  const checklist = checks
    .map(
      (check) => `
      <label class="coach-check">
        <input type="checkbox" data-coach="${check.id}" ${state.writeChecked[check.id] ? "checked" : ""} />
        <span>${escapeHtml(check.label)}${check.ok ? "" : " — look at the example"}</span>
      </label>`
    )
    .join("");

  setFeedbackHtml(
    true,
    `<p>Good try. Compare your writing with a strong example.</p>
     <p class="compare-yours"><strong>Yours</strong> ${escapeHtml(value)}</p>
     <p class="compare-model"><strong>A strong example</strong> ${escapeHtml(model.example)}</p>
     <p class="why">${escapeHtml(model.why)}</p>
     <div class="coach-list">${checklist}</div>`
  );
  state.writeTip = model.tip || model.why;
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

function advanceMastery(activity) {
  const layers = layersOf(activity);
  const m = masteryState(activity.id);
  const layer = layers[m.layer];
  m.streak += 1;
  m.round = (m.round + 1) % layer.rounds.length;

  if (m.streak >= layer.needCorrect) {
    if (m.layer >= layers.length - 1) {
      state.completed[activity.id] = true;
      save();
      return { done: true, unlocked: false, layerLabel: layer.label };
    }
    m.layer += 1;
    m.streak = 0;
    m.round = 0;
    save();
    return { done: false, unlocked: true, layerLabel: layers[m.layer].label };
  }
  save();
  return { done: false, unlocked: false, layerLabel: layer.label };
}

function failMastery(activity) {
  const m = masteryState(activity.id);
  m.streak = 0;
  save();
}

function checkCurrent() {
  const activity = currentActivity();
  const round = currentRound();
  const checkers = {
    spell: checkSpell,
    story: checkStory,
    build: checkBuild,
    fix: checkFix,
    write: checkWrite,
    arrange: checkArrange,
    choose: checkChoose,
    spot: checkSpot,
    proof: checkProof,
    expand: checkExpand,
    groups: checkGroups,
    array: checkArray,
    skip: checkSkip,
    scene: checkScene,
    match: checkMatch,
    path: checkPath,
    sum: checkSum,
  };
  const ok = checkers[activity.kind](round);
  if (!ok) {
    if (!isFlatPath() && activity.kind !== "write" && layersOf(activity)) {
      failMastery(activity);
      const chip = document.querySelector(".layer-chip");
      if (chip) {
        const layer = currentLayer(activity);
        const m = masteryState(activity.id);
        chip.innerHTML = `<span>${escapeHtml(layer.label)}</span><span>${m.streak}/${layer.needCorrect} correct</span>`;
      }
    }
    return;
  }

  const actions = document.querySelector(".actions");
  if (document.querySelector("[data-action='continue']")) return;

  if (isFlatPath() || activity.kind === "write") {
    const total = roundsOf(activity).length;
    const last = state.questionIndex >= total - 1;
    state.progress[activity.id] = Math.max(state.progress[activity.id] || 0, state.questionIndex + 1);
    if (last) state.completed[activity.id] = true;
    save();

    if (activity.kind === "write") {
      const tipBtn = document.createElement("button");
      tipBtn.className = "secondary";
      tipBtn.dataset.action = "write-tip";
      tipBtn.textContent = "Try again with a tip";
      tipBtn.onclick = () => {
        state.writeChecked = {};
        if (!document.querySelector(".tip-box") && state.writeTip) {
          const tipBox = document.createElement("div");
          tipBox.className = "tip-box";
          tipBox.innerHTML = `<strong>Tip</strong> ${escapeHtml(state.writeTip)}`;
          const prompt = document.querySelector(".hero .prompt");
          if (prompt) prompt.after(tipBox);
        }
        const feedback = document.getElementById("feedback");
        if (feedback) {
          feedback.className = "feedback";
          feedback.innerHTML = "";
        }
        tipBtn.remove();
        document.querySelector("[data-action='continue']")?.remove();
        const box = document.getElementById("write-input");
        if (box) {
          box.value = state.writeAttempt || box.value;
          box.focus();
        }
      };
      actions.appendChild(tipBtn);
    }

    const button = document.createElement("button");
    button.className = "primary";
    button.dataset.action = "continue";
    button.textContent = last
      ? "Continue"
      : state.mathId
        ? "Next question"
        : state.scrambleId
          ? "Next sentence"
          : "Next question";
    button.onclick = last ? goNext : goNextQuestion;
    actions.appendChild(button);
    return;
  }

  const result = advanceMastery(activity);
  const button = document.createElement("button");
  button.className = "primary";
  button.dataset.action = "continue";
  if (result.done) {
    button.textContent = "Continue";
    button.onclick = goNext;
  } else if (result.unlocked) {
    setFeedback(true, `Layer cleared. Next up: ${result.layerLabel}.`);
    button.textContent = `Start ${result.layerLabel}`;
    button.onclick = () => render();
  } else {
    button.textContent = "Next";
    button.onclick = () => render();
  }
  actions.appendChild(button);

  const chip = document.querySelector(".layer-chip");
  if (chip && !result.done) {
    const layer = currentLayer(activity);
    const m = masteryState(activity.id);
    chip.innerHTML = `<span>${escapeHtml(layer.label)}</span><span>${m.streak}/${layer.needCorrect} correct</span>`;
  }
}

function resetCurrent() {
  state.writeTip = null;
  state.writeChecked = {};
  state.writeAttempt = "";
  render();
}

function goNextQuestion() {
  state.questionIndex += 1;
  state.writeTip = null;
  state.writeChecked = {};
  state.writeAttempt = "";
  render();
}

function goNext() {
  if (state.mathId) {
    const index = MATH.findIndex((pack) => pack.id === state.mathId);
    const next = MATH[index + 1];
    if (next) {
      openMath(next.id);
      return;
    }
    state.mathId = null;
    state.subject = "maths";
    state.view = "home";
    render();
    return;
  }
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
  document.querySelectorAll("[data-subject]").forEach((button) => {
    button.onclick = () => setSubject(button.dataset.subject);
  });

  document.querySelectorAll("[data-open-week]").forEach((button) => {
    button.onclick = () => openWeek(button.dataset.openWeek, true);
  });

  document.querySelectorAll("[data-open-scramble]").forEach((button) => {
    button.onclick = () => openScramble(button.dataset.openScramble);
  });

  document.querySelectorAll("[data-open-math]").forEach((button) => {
    button.onclick = () => openMath(button.dataset.openMath);
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
      state.mathId = null;
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

  const mathLesson = document.querySelector("[data-action='math-lesson']");
  if (mathLesson) mathLesson.onclick = openMathLesson;

  const check = document.querySelector("[data-action='check']");
  if (check) check.onclick = checkCurrent;

  const reset = document.querySelector("[data-action='reset']");
  if (reset) reset.onclick = resetCurrent;

  const cont = document.querySelector("[data-action='continue']");
  if (cont) {
    const activity = state.view === "activity" ? currentActivity() : null;
    if (activity && (isFlatPath() || activity.kind === "write")) {
      const last = state.questionIndex >= roundsOf(activity).length - 1;
      cont.onclick = last ? goNext : goNextQuestion;
    }
  }

  document.querySelectorAll("[data-coach]").forEach((box) => {
    box.onchange = () => {
      state.writeChecked[box.dataset.coach] = box.checked;
    };
  });

  document.querySelectorAll("[data-choice]").forEach((button) => {
    button.onclick = () => {
      document.querySelectorAll("[data-choice]").forEach((node) => node.classList.remove("selected"));
      button.classList.add("selected");
    };
  });

  document.querySelectorAll("[data-fact]").forEach((button) => {
    button.onclick = () => {
      document.querySelectorAll("[data-fact]").forEach((node) => node.classList.remove("selected"));
      button.classList.add("selected");
    };
  });

  const sumAnswer = document.getElementById("sum-answer");
  if (sumAnswer) {
    sumAnswer.focus();
    sumAnswer.onkeydown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        checkCurrent();
      }
    };
  }

  document.querySelectorAll(".story-chip").forEach((chip) => {
    chip.onclick = () => {
      const blankSel = document.querySelector(".skip-blank") ? ".skip-blank" : ".story-blank";
      const empty = [...document.querySelectorAll(blankSel)].find((input) => !input.value.trim());
      const target = empty || document.activeElement;
      if (target && target.classList && (target.classList.contains("story-blank") || target.classList.contains("skip-blank"))) {
        target.value = chip.textContent;
        target.focus();
      } else if (empty) {
        empty.value = chip.textContent;
        empty.focus();
      }
    };
  });

  document.querySelectorAll("[data-spot]").forEach((button) => {
    button.onclick = () => {
      document.querySelectorAll("[data-spot]").forEach((node) => node.classList.remove("selected"));
      button.classList.add("selected");
    };
  });

  let selectedBowl = 0;
  const bowls = document.querySelectorAll("[data-bowl]");
  bowls.forEach((bowl) => {
    bowl.onclick = () => {
      bowls.forEach((node) => node.classList.remove("selected"));
      bowl.classList.add("selected");
      selectedBowl = Number(bowl.dataset.bowl);
    };
  });
  if (bowls[0]) bowls[0].classList.add("selected");

  const addDot = document.querySelector("[data-action='add-dot']");
  if (addDot) {
    addDot.onclick = () => {
      const root = document.getElementById("math-groups");
      if (!root) return;
      const size = Number(root.dataset.size);
      const dots = root.querySelector(`[data-dots="${selectedBowl}"]`);
      const countNode = root.querySelector(`[data-count="${selectedBowl}"]`);
      if (dots.querySelectorAll(".math-dot").length >= size) return;
      const dot = document.createElement("span");
      dot.className = "math-dot";
      dots.appendChild(dot);
      countNode.textContent = String(dots.querySelectorAll(".math-dot").length);
    };
  }

  const clearBowl = document.querySelector("[data-action='clear-bowl']");
  if (clearBowl) {
    clearBowl.onclick = () => {
      const root = document.getElementById("math-groups");
      if (!root) return;
      const dots = root.querySelector(`[data-dots="${selectedBowl}"]`);
      const countNode = root.querySelector(`[data-count="${selectedBowl}"]`);
      dots.innerHTML = "";
      countNode.textContent = "0";
    };
  }

  document.querySelectorAll("[data-cell]").forEach((cell) => {
    cell.onclick = () => {
      cell.classList.toggle("filled");
      cell.setAttribute("aria-pressed", cell.classList.contains("filled") ? "true" : "false");
      const filled = document.querySelectorAll(".math-cell.filled").length;
      const counter = document.getElementById("array-filled");
      if (counter) counter.textContent = String(filled);
    };
  });

  document.querySelectorAll("[data-tile]").forEach((button) => {
    button.onclick = () => {
      if (button.classList.contains("used")) return;
      const slots = document.getElementById("build-slots");
      if (!slots) return;
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
