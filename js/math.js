function packMath(id, title, level, kind, prompt, rounds, track) {
  return { id, title, level, kind, prompt, rounds, track: track || "times" };
}

function shuffleList(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function sumRound(a, b) {
  return { a, b, answer: a + b };
}

function sceneRound(story, groups, size, item, wrongTotals) {
  const product = groups * size;
  const choices = shuffleList([String(product), ...wrongTotals.map(String)]);
  return { story, groups, size, item, product, choices };
}

function matchRound(story, groups, size, item, wrongFacts) {
  const product = groups * size;
  const answerFact = `${groups} × ${size} = ${product}`;
  const facts = shuffleList([answerFact, ...wrongFacts]);
  return { story, groups, size, item, product, facts, answerFact };
}

function pathRound(step, pads) {
  return { step, pads, item: "stone" };
}

function storyChoose(question, a, b, distractors) {
  const product = a * b;
  const choices = shuffleList([String(product), ...distractors.map(String)]);
  return {
    question,
    choices,
    answerIndex: choices.indexOf(String(product)),
  };
}

const MATH = [
  packMath(
    "m-bikes-see",
    "Bikes · see it",
    "See it",
    "scene",
    "Count the wheels. Equal groups hide inside everyday things.",
    [
      sceneRound("2 bikes in the shed. Each bike has 2 wheels.", 2, 2, "wheel", [3, 5]),
      sceneRound("3 bikes by the fence. Each bike has 2 wheels.", 3, 2, "wheel", [4, 8]),
      sceneRound("4 bikes at the park. Each bike has 2 wheels.", 4, 2, "wheel", [6, 10]),
      sceneRound("5 bikes in a race. Each bike has 2 wheels.", 5, 2, "wheel", [7, 12]),
      sceneRound("6 scooters. Each scooter has 2 wheels.", 6, 2, "wheel", [8, 14]),
      sceneRound("2 carts. Each cart has 4 wheels.", 2, 4, "wheel", [6, 10]),
      sceneRound("3 carts. Each cart has 4 wheels.", 3, 4, "wheel", [10, 16]),
      sceneRound("2 bikes and… wait — how many wheels on 7 bikes?", 7, 2, "wheel", [12, 16]),
    ]
  ),
  packMath(
    "m-farm-see",
    "Farm · see it",
    "See it",
    "scene",
    "Nests, legs, and eggs — count the equal groups on the farm.",
    [
      sceneRound("2 nests. Each nest has 5 eggs.", 2, 5, "egg", [8, 12]),
      sceneRound("3 nests. Each nest has 5 eggs.", 3, 5, "egg", [12, 20]),
      sceneRound("4 nests. Each nest has 5 eggs.", 4, 5, "egg", [15, 25]),
      sceneRound("5 nests. Each nest has 5 eggs.", 5, 5, "egg", [20, 30]),
      sceneRound("2 dogs. Each dog has 4 legs.", 2, 4, "leg", [6, 10]),
      sceneRound("3 dogs. Each dog has 4 legs.", 3, 4, "leg", [10, 16]),
      sceneRound("1 tray. The tray holds 10 eggs.", 1, 10, "egg", [5, 12]),
      sceneRound("2 trays. Each tray holds 10 eggs.", 2, 10, "egg", [12, 30]),
    ]
  ),
  packMath(
    "m-beach-match",
    "Beach · match it",
    "See it",
    "match",
    "Look at the buckets of shells. Tap the fact that matches the picture.",
    [
      matchRound("3 buckets. Each bucket has 2 shells.", 3, 2, "shell", [
        "2 × 3 = 6",
        "4 × 2 = 8",
        "3 × 3 = 9",
      ]),
      matchRound("4 buckets. Each bucket has 2 shells.", 4, 2, "shell", [
        "2 × 4 = 8",
        "3 × 2 = 6",
        "5 × 2 = 10",
      ]),
      matchRound("2 buckets. Each bucket has 5 shells.", 2, 5, "shell", [
        "5 × 2 = 10",
        "3 × 5 = 15",
        "2 × 4 = 8",
      ]),
      matchRound("3 buckets. Each bucket has 5 shells.", 3, 5, "shell", [
        "5 × 3 = 15",
        "2 × 5 = 10",
        "4 × 5 = 20",
      ]),
      matchRound("4 buckets. Each bucket has 5 shells.", 4, 5, "shell", [
        "5 × 4 = 20",
        "3 × 5 = 15",
        "4 × 2 = 8",
      ]),
      matchRound("2 buckets. Each bucket has 10 shells.", 2, 10, "shell", [
        "10 × 2 = 20",
        "2 × 5 = 10",
        "3 × 10 = 30",
      ]),
      matchRound("3 buckets. Each bucket has 10 shells.", 3, 10, "shell", [
        "10 × 3 = 30",
        "2 × 10 = 20",
        "5 × 5 = 25",
      ]),
      matchRound("5 little piles. Each pile has 2 shells.", 5, 2, "shell", [
        "2 × 5 = 10",
        "5 × 3 = 15",
        "4 × 2 = 8",
      ]),
    ]
  ),
  packMath(
    "m-hop-2",
    "2s · hop it",
    "Count it",
    "path",
    "Hop along the stones. Each hop is +2.",
    [
      pathRound(2, [0, 2, null, 6, null, 10]),
      pathRound(2, [0, null, 4, null, 8, 10]),
      pathRound(2, [2, 4, null, 8, null, 12]),
      pathRound(2, [0, 2, 4, null, null, 10]),
      pathRound(2, [0, null, null, 6, 8, 10]),
      pathRound(2, [4, null, 8, null, 12, 14]),
      pathRound(2, [0, 2, null, null, 8, null, 12]),
      pathRound(2, [2, null, 6, 8, null, 12]),
    ]
  ),
  packMath(
    "m-hop-5",
    "5s · hop it",
    "Count it",
    "path",
    "Hop along the stones. Each hop is +5.",
    [
      pathRound(5, [0, 5, null, 15, null, 25]),
      pathRound(5, [0, null, 10, null, 20, 25]),
      pathRound(5, [5, 10, null, 20, null, 30]),
      pathRound(5, [0, 5, 10, null, null, 25]),
      pathRound(5, [0, null, null, 15, 20, 25]),
      pathRound(5, [10, null, 20, null, 30, 35]),
      pathRound(5, [0, 5, null, null, 20, null, 30]),
      pathRound(5, [5, null, 15, 20, null, 30]),
    ]
  ),
  packMath(
    "m-hop-10",
    "10s · hop it",
    "Count it",
    "path",
    "Hop along the stones. Each hop is +10.",
    [
      pathRound(10, [0, 10, null, 30, null, 50]),
      pathRound(10, [0, null, 20, null, 40, 50]),
      pathRound(10, [10, 20, null, 40, null, 60]),
      pathRound(10, [0, 10, 20, null, null, 50]),
      pathRound(10, [0, null, null, 30, 40, 50]),
      pathRound(10, [20, null, 40, null, 60, 70]),
      pathRound(10, [0, 10, null, null, 40, null, 60]),
      pathRound(10, [10, null, 30, 40, null, 60]),
    ]
  ),
  packMath(
    "m-know-story",
    "2s & 5s · know it",
    "Know it",
    "choose",
    "You have seen these as bikes, eggs and shells. Tap how many altogether.",
    [
      storyChoose("3 bikes. Each has 2 wheels. How many wheels?", 3, 2, [5, 8]),
      storyChoose("4 bikes. Each has 2 wheels. How many wheels?", 4, 2, [6, 10]),
      storyChoose("6 bikes. Each has 2 wheels. How many wheels?", 6, 2, [10, 14]),
      storyChoose("2 nests with 5 eggs each. How many eggs?", 2, 5, [7, 15]),
      storyChoose("3 nests with 5 eggs each. How many eggs?", 3, 5, [8, 20]),
      storyChoose("4 nests with 5 eggs each. How many eggs?", 4, 5, [9, 25]),
      storyChoose("5 dogs with 4 legs each. How many legs?", 5, 4, [9, 24]),
      storyChoose("7 pairs of socks. How many socks?", 7, 2, [9, 16]),
      storyChoose("8 hands. How many fingers if each hand has 5?", 8, 5, [13, 45]),
      storyChoose("5 bags with 2 apples each. How many apples?", 5, 2, [7, 12]),
    ]
  ),
  packMath(
    "m-know-mix",
    "Mix · know it",
    "Know it",
    "choose",
    "2s, 5s and 10s mixed into little stories. Tap the total.",
    [
      storyChoose("2 boxes with 10 pencils each. How many pencils?", 2, 10, [12, 30]),
      storyChoose("3 boxes with 10 pencils each. How many pencils?", 3, 10, [13, 40]),
      storyChoose("4 packs of 10 stickers. How many stickers?", 4, 10, [14, 50]),
      storyChoose("5 packs of 10 stickers. How many stickers?", 5, 10, [15, 60]),
      storyChoose("9 bikes with 2 wheels each. How many wheels?", 9, 2, [11, 20]),
      storyChoose("8 buckets with 5 shells each. How many shells?", 8, 5, [13, 45]),
      storyChoose("2 hands with 5 fingers each. How many fingers?", 2, 5, [7, 15]),
      storyChoose("5 rows of 5 seats. How many seats?", 5, 5, [10, 30]),
      storyChoose("6 trays of 10 muffins. How many muffins?", 6, 10, [16, 70]),
      storyChoose("7 trays of 10 muffins. How many muffins?", 7, 10, [17, 80]),
    ]
  ),
  packMath(
    "m-spiders-see",
    "Spiders · see it",
    "See it",
    "scene",
    "A new family: 3s. Spiders and stools — count the equal groups.",
    [
      sceneRound("1 stool. The stool has 3 legs.", 1, 3, "leg", [2, 4]),
      sceneRound("2 stools. Each stool has 3 legs.", 2, 3, "leg", [5, 9]),
      sceneRound("3 stools. Each stool has 3 legs.", 3, 3, "leg", [6, 12]),
      sceneRound("4 stools. Each stool has 3 legs.", 4, 3, "leg", [10, 15]),
      sceneRound("5 stools. Each stool has 3 legs.", 5, 3, "leg", [12, 18]),
      sceneRound("2 triangles. Each triangle has 3 sides.", 2, 3, "side", [5, 8]),
      sceneRound("3 triangles. Each triangle has 3 sides.", 3, 3, "side", [6, 12]),
      sceneRound("3 packs of 4 crayons. How many crayons? (picture shows 3 groups of 4)", 3, 4, "crayon", [7, 14]),
    ]
  ),
  packMath(
    "m-add-two",
    "2-digit sums",
    "Add",
    "sum",
    "Add the two numbers. Type the total. Use paper if you like.",
    [
      sumRound(12, 34),
      sumRound(21, 45),
      sumRound(30, 25),
      sumRound(41, 22),
      sumRound(53, 14),
      sumRound(60, 18),
      sumRound(15, 23),
      sumRound(33, 44),
      sumRound(28, 47),
      sumRound(39, 56),
      sumRound(47, 38),
      sumRound(56, 29),
      sumRound(68, 17),
      sumRound(79, 15),
      sumRound(85, 26),
      sumRound(94, 18),
      sumRound(45, 37),
      sumRound(63, 28),
      sumRound(74, 19),
      sumRound(52, 49),
    ],
    "add"
  ),
  packMath(
    "m-add-bigger",
    "Bigger sums",
    "Add",
    "sum",
    "2-digit and 3-digit numbers. Line up the ones, tens and hundreds.",
    [
      sumRound(123, 45),
      sumRound(156, 78),
      sumRound(234, 67),
      sumRound(345, 89),
      sumRound(208, 54),
      sumRound(419, 36),
      sumRound(275, 48),
      sumRound(362, 59),
      sumRound(201, 198),
      sumRound(325, 147),
      sumRound(456, 278),
      sumRound(512, 389),
      sumRound(634, 157),
      sumRound(708, 246),
      sumRound(150, 250),
      sumRound(333, 222),
      sumRound(405, 195),
      sumRound(520, 180),
      sumRound(448, 276),
      sumRound(567, 189),
    ],
    "add"
  ),
];
