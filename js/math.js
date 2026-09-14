function packMath(id, title, level, kind, prompt, rounds) {
  return { id, title, level, kind, prompt, rounds };
}

function groupsRound(groups, size) {
  return {
    groups,
    size,
    label: `${groups} groups of ${size}`,
    product: groups * size,
  };
}

function arrayRound(rows, cols) {
  return {
    rows,
    cols,
    label: `${rows} rows of ${cols}`,
    product: rows * cols,
  };
}

function skipRound(step, sequenceLength, blankIndexes) {
  return {
    start: 0,
    step,
    sequenceLength,
    blankIndexes,
  };
}

function chooseFact(a, b, distractors) {
  const product = a * b;
  const choices = [product, ...distractors].map(String);
  return {
    question: `What is ${a} × ${b}?`,
    choices,
    answerIndex: 0,
  };
}

function shuffleChoices(round) {
  const pairs = round.choices.map((choice, index) => ({ choice, index }));
  for (let i = pairs.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
  }
  const answerIndex = pairs.findIndex((pair) => pair.index === round.answerIndex);
  return {
    question: round.question,
    choices: pairs.map((pair) => pair.choice),
    answerIndex,
  };
}

const MATH = [
  packMath(
    "m-see-2",
    "2s · see it",
    "See it",
    "groups",
    "Make equal groups. Each bowl needs the same number of dots.",
    [
      groupsRound(2, 2),
      groupsRound(3, 2),
      groupsRound(4, 2),
      groupsRound(5, 2),
      groupsRound(6, 2),
      groupsRound(7, 2),
      groupsRound(8, 2),
      groupsRound(2, 3),
      groupsRound(2, 4),
      groupsRound(2, 5),
    ]
  ),
  packMath(
    "m-see-5",
    "5s · see it",
    "See it",
    "array",
    "Fill the grid. Rows across, columns down — that is multiplication.",
    [
      arrayRound(1, 5),
      arrayRound(2, 5),
      arrayRound(3, 5),
      arrayRound(4, 5),
      arrayRound(5, 5),
      arrayRound(2, 4),
      arrayRound(3, 4),
      arrayRound(5, 2),
      arrayRound(5, 3),
      arrayRound(5, 4),
    ]
  ),
  packMath(
    "m-see-10",
    "10s · see it",
    "See it",
    "groups",
    "Make equal groups of 10, or a few groups that make a 10s fact.",
    [
      groupsRound(1, 10),
      groupsRound(2, 10),
      groupsRound(3, 10),
      groupsRound(4, 10),
      groupsRound(5, 10),
      groupsRound(10, 2),
      groupsRound(10, 3),
      groupsRound(2, 5),
      groupsRound(3, 5),
      groupsRound(4, 5),
    ]
  ),
  packMath(
    "m-count-2",
    "2s · count it",
    "Count it",
    "skip",
    "Skip-count by 2. Fill the missing numbers.",
    [
      skipRound(2, 6, [2, 4]),
      skipRound(2, 6, [1, 3]),
      skipRound(2, 7, [2, 5]),
      skipRound(2, 8, [3, 6]),
      skipRound(2, 6, [1, 4]),
      skipRound(2, 8, [2, 4, 6]),
      skipRound(2, 7, [1, 3, 5]),
      skipRound(2, 9, [2, 5, 7]),
    ]
  ),
  packMath(
    "m-count-5",
    "5s · count it",
    "Count it",
    "skip",
    "Skip-count by 5. Fill the missing numbers.",
    [
      skipRound(5, 6, [2, 4]),
      skipRound(5, 6, [1, 3]),
      skipRound(5, 7, [2, 5]),
      skipRound(5, 8, [3, 6]),
      skipRound(5, 6, [1, 4]),
      skipRound(5, 8, [2, 4, 6]),
      skipRound(5, 7, [1, 3, 5]),
      skipRound(5, 9, [2, 5, 7]),
    ]
  ),
  packMath(
    "m-count-10",
    "10s · count it",
    "Count it",
    "skip",
    "Skip-count by 10. Fill the missing numbers.",
    [
      skipRound(10, 6, [2, 4]),
      skipRound(10, 6, [1, 3]),
      skipRound(10, 7, [2, 5]),
      skipRound(10, 8, [3, 6]),
      skipRound(10, 6, [1, 4]),
      skipRound(10, 8, [2, 4, 6]),
      skipRound(10, 7, [1, 3, 5]),
      skipRound(10, 9, [2, 5, 7]),
    ]
  ),
  packMath(
    "m-know-2-5",
    "2s and 5s · know it",
    "Know it",
    "choose",
    "You have seen these facts as groups. Now tap the answer.",
    [
      shuffleChoices(chooseFact(2, 3, ["5", "8"])),
      shuffleChoices(chooseFact(2, 4, ["6", "10"])),
      shuffleChoices(chooseFact(2, 6, ["10", "14"])),
      shuffleChoices(chooseFact(2, 7, ["12", "16"])),
      shuffleChoices(chooseFact(2, 8, ["14", "18"])),
      shuffleChoices(chooseFact(5, 2, ["7", "15"])),
      shuffleChoices(chooseFact(5, 3, ["8", "20"])),
      shuffleChoices(chooseFact(5, 4, ["9", "25"])),
      shuffleChoices(chooseFact(5, 6, ["11", "35"])),
      shuffleChoices(chooseFact(5, 7, ["12", "40"])),
    ]
  ),
  packMath(
    "m-know-10-mix",
    "10s mix · know it",
    "Know it",
    "choose",
    "Mix of 2s, 5s and 10s. Tap the product.",
    [
      shuffleChoices(chooseFact(10, 2, ["12", "30"])),
      shuffleChoices(chooseFact(10, 3, ["13", "40"])),
      shuffleChoices(chooseFact(10, 4, ["14", "50"])),
      shuffleChoices(chooseFact(10, 5, ["15", "60"])),
      shuffleChoices(chooseFact(2, 9, ["16", "20"])),
      shuffleChoices(chooseFact(5, 8, ["13", "45"])),
      shuffleChoices(chooseFact(2, 5, ["7", "15"])),
      shuffleChoices(chooseFact(5, 5, ["10", "30"])),
      shuffleChoices(chooseFact(10, 6, ["16", "70"])),
      shuffleChoices(chooseFact(10, 7, ["17", "80"])),
    ]
  ),
  packMath(
    "m-see-3",
    "3s · see it",
    "See it",
    "array",
    "A new family: 3s. Fill the array, then read the equation.",
    [
      arrayRound(1, 3),
      arrayRound(2, 3),
      arrayRound(3, 3),
      arrayRound(4, 3),
      arrayRound(5, 3),
      arrayRound(3, 2),
      arrayRound(3, 4),
      arrayRound(3, 5),
      arrayRound(6, 3),
      arrayRound(3, 6),
    ]
  ),
];
