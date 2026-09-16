const EXTRA_WEEKS = [
  {
    id: "w13",
    week: 13,
    title: "Noun, verb, adjective",
    focus: "Who / action / describing word — and where each sits",
    story: {
      theme: "Building a clear sentence",
      text: "The busy bee landed on a flower. The nurse washed her hands. My twin spilled the juice. A loud truck rolled past the school. The soft lamp glowed. Everyone cheered at the game.",
      draftKey: "w13",
      wordBank: ["noun", "verb", "adjective", "who", "action", "describe"],
    },
    activities: [
      {
        id: "w13-story",
        kind: "story",
        title: "Read: Building a clear sentence",
        prompt: "Read the story. Notice noun, verb and adjective places, then fill the gaps.",
        layers: L(
          [
            {
              passage: "The {{noun}} is who or what. The {{verb}} is the action. An {{adjective}} describes the noun.",
              tip: "Order to remember: adjective (optional) + noun, then verb, then the rest.",
            },
            {
              passage: "The {{busy}} bee {{landed}} on a flower.",
              tip: "busy = adjective. bee = noun (who). landed = verb. Adjective before noun; noun before verb.",
            },
          ],
          [
            {
              passage: "The {{nurse}} washed her hands. My {{twin}} spilled the juice.",
              tip: "nurse and twin are who (nouns). washed and spilled are verbs.",
            },
            {
              passage: "A {{loud}} truck {{rolled}} past the school.",
              tip: "loud paints truck. rolled is the action after the noun.",
            },
          ],
          [
            {
              passage: "The {{soft}} lamp {{glowed}}. {{Everyone}} cheered at the game.",
              tip: "Different who types: a thing (lamp), a group (Everyone).",
            },
          ]
        ),
      },
      {
        id: "w13-choose",
        kind: "choose",
        title: "Name the job of the word",
        prompt: "Pick clear who + did. Spot unfinished thoughts and wrong jobs.",
        layers: L(
          [
            {
              question: "Which keeps adjective before the noun?",
              choices: ["I saw a bird tiny.", "I saw a tiny bird.", "tiny saw I a bird."],
              answerIndex: 1,
            },
            {
              question: "Which has who then action?",
              choices: ["washed the nurse her hands.", "The nurse washed her hands.", "hands washed the nurse."],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "In “The busy bee landed”, which word is the noun (who/what)?",
              choices: ["busy", "bee", "landed"],
              answerIndex: 1,
            },
            {
              question: "Which is incomplete (no who)?",
              choices: ["Opened the quiet door.", "Mum opened the quiet door.", "The quiet door slammed."],
              answerIndex: 0,
            },
          ],
          [
            {
              question: "Best full pattern?",
              choices: [
                "The noisy truck rolled past.",
                "truck The noisy rolled past.",
                "rolled The noisy truck past.",
              ],
              answerIndex: 0,
            },
          ]
        ),
      },
      {
        id: "w13-build",
        kind: "build",
        title: "Build: adjective + noun + verb",
        prompt: "Tap in order. Describing word before the noun. Noun before the verb.",
        layers: L(
          [
            { answer: "The busy bee landed.", tiles: ["landed.", "The", "busy", "bee"] },
            { answer: "My twin spilled the juice.", tiles: ["spilled", "the", "juice.", "My", "twin"] },
          ],
          [
            { answer: "A loud truck rolled past.", tiles: ["rolled", "past.", "A", "loud", "truck"] },
            { answer: "The soft lamp glowed.", tiles: ["glowed.", "The", "soft", "lamp"] },
          ],
          [
            {
              answer: "The quiet nurse washed her hands.",
              tiles: ["washed", "her", "hands.", "The", "quiet", "nurse"],
            },
          ]
        ),
      },
      {
        id: "w13-write",
        kind: "write",
        title: "Write with clear parts",
        prompt: "Use a describing word before a noun, and a clear action verb.",
        rounds: [
          {
            prompt: "Write one sentence with an adjective before a noun, then a verb.",
            starters: ["The busy ", "A loud "],
          },
          {
            prompt: "Write one sentence about a worker (noun) doing something (verb).",
            starters: ["The nurse ", "The teacher "],
          },
          {
            prompt: "Write one sentence that paints a thing: adjective + noun + verb.",
            starters: ["The soft ", "The noisy "],
          },
          {
            prompt: "Write two sentences. Try one person and one group as who.",
            starters: ["My twin ", "Everyone "],
          },
          {
            prompt: "Write two sentences about an animal. Put a describing word before the animal noun.",
            starters: ["The busy ", "A tiny "],
          },
        ],
      },
    ],
  },
  {
    id: "w14",
    week: 14,
    title: "Start in a new way",
    focus: "Varied sentence openers — still keep noun then verb",
    story: {
      theme: "How the day began",
      text: "When the bell rang, we lined up. After lunch we played. Suddenly the dog barked. Later we went outside. After school I packed my bag. When Mum called, I ran. Quietly I opened the door. When the rain stopped, we ran outside.",
      draftKey: "w14",
      wordBank: ["when", "after", "suddenly", "later", "quietly", "outside"],
    },
    activities: [
      {
        id: "w14-story",
        kind: "story",
        title: "Read: How the day began",
        prompt: "Read the story. Notice openers, then noun + verb after them.",
        layers: L(
          [
            {
              passage: "{{When}} the bell rang, we lined up. {{After}} lunch we played.",
              tip: "Opener first (When / After). Then the noun (we) and the verb (lined / played).",
            },
            {
              passage: "{{Suddenly}} the dog barked. {{Later}} we went {{outside}}.",
              tip: "Suddenly / Later tell when. After the opener, keep who + action.",
            },
          ],
          [
            {
              passage: "{{After}} school I packed my bag. {{When}} Mum called, I ran.",
              tip: "A comma often follows a front opener. Then noun + verb as usual.",
            },
            {
              passage: "{{Quietly}} I opened the door. {{Later}} I told Dad.",
              tip: "How-words like Quietly can open. I (noun) still comes before opened (verb).",
            },
          ],
          [
            {
              passage: "{{When}} the rain stopped, we ran {{outside}}. {{Suddenly}} the sun came out.",
              tip: "Mix openers so not every line starts with I — but never lose noun-before-verb.",
            },
          ]
        ),
      },
      {
        id: "w14-choose",
        kind: "choose",
        title: "Pick the strong opener",
        prompt: "Which sentence opens freshly and still has clear noun + verb?",
        layers: L(
          [
            {
              question: "Which works best?",
              choices: [
                "I went to the park. I saw a bird. I sat down.",
                "After lunch I went to the park.",
                "went I to the park after lunch.",
              ],
              answerIndex: 1,
            },
            {
              question: "Which keeps noun then verb after the opener?",
              choices: [
                "Suddenly barked the dog.",
                "Suddenly the dog barked.",
                "Suddenly barked.",
              ],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "Which opener works best?",
              choices: [
                "When the film ended we clapped.",
                "we clapped When the film ended.",
                "When the film ended clapped.",
              ],
              answerIndex: 0,
            },
            {
              question: "Which is unfinished after the opener?",
              choices: ["After lunch we played.", "After lunch played.", "Slowly I walked home."],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "Best pair?",
              choices: [
                "I woke up. I ate toast. I left.",
                "When I woke up, I ate toast. Later I left for school.",
                "When I woke up. Later left.",
              ],
              answerIndex: 1,
            },
          ]
        ),
      },
      {
        id: "w14-expand",
        kind: "expand",
        title: "Add an opener — keep who",
        prompt: "Rewrite with a time or how opener. Keep who before the verb. Fix unfinished seeds.",
        layers: L(
          [
            {
              seed: "I packed my bag.",
              hint: "Try After breakfast or When the bell rang at the front.",
              mustInclude: ["I"],
              needCapital: true,
            },
            {
              seed: "Suddenly barked.",
              hint: "Add who after Suddenly (the dog, Mum, a bird…).",
              mustInclude: ["Suddenly"],
              needCapital: true,
            },
          ],
          [
            {
              seed: "I opened the present.",
              hint: "Start with When Mum smiled or Carefully.",
              mustInclude: ["opened"],
              needCapital: true,
            },
            {
              seed: "After lunch played.",
              hint: "Who played? Add we / I / the team after After lunch.",
              mustInclude: ["After", "lunch"],
              needCapital: true,
            },
          ],
          [
            {
              seed: "When the bell rang.",
              hint: "Finish: what did we do? Keep who + did after the comma.",
              mustInclude: ["When", "bell"],
              needCapital: true,
            },
          ]
        ),
      },
      {
        id: "w14-write",
        kind: "write",
        title: "Write with openers",
        prompt: "Use When, After, Suddenly or Later — keep who before the action.",
        rounds: [
          {
            prompt: "Write two sentences about morning. Start one with When or After.",
            starters: ["When I woke up, ", "After breakfast, "],
          },
          {
            prompt: "Write two sentences about play. Start one with Suddenly or Later.",
            starters: ["Suddenly ", "Later "],
          },
          {
            prompt: "Write two sentences about school. Start one with After or When.",
            starters: ["After lunch, ", "When the bell rang, "],
          },
          {
            prompt: "Write two sentences about home. Start one with Quietly or Outside.",
            starters: ["Quietly ", "Outside "],
          },
          {
            prompt: "Write three sentences about a trip. Use two different openers.",
            starters: ["When we arrived, ", "Later ", "Suddenly "],
          },
        ],
      },
    ],
  },
  {
    id: "w15",
    week: 15,
    title: "Join with when and while",
    focus: "Conjunctions that show time — two ideas, clear nouns and verbs",
    story: {
      theme: "Two things at once",
      text: "I smiled when Dad came home. Mum cooked while I set the table. If it rains, we stay in. I like cocoa because it is warm. We packed while Mum found the keys. We left when the bag was ready. I will help if you ask. When the film started, we sat still.",
      draftKey: "w15",
      wordBank: ["when", "while", "if", "because", "and", "but"],
    },
    activities: [
      {
        id: "w15-story",
        kind: "story",
        title: "Read: Two things at once",
        prompt: "Read the story. Watch how joins sit between two noun–verb ideas.",
        layers: L(
          [
            {
              passage: "I smiled {{when}} Dad came home. Mum cooked {{while}} I set the table.",
              tip: "when / while join two mini-sentences. Each side still has a noun and a verb.",
            },
            {
              passage: "{{If}} it rains, we stay in. I like cocoa {{because}} it is warm.",
              tip: "If sets a condition. because gives a reason after the first idea.",
            },
          ],
          [
            {
              passage: "We packed {{while}} Mum found the keys. We left {{when}} the bag was ready.",
              tip: "while = same time. when = at that moment. Noun + verb on both sides.",
            },
            {
              passage: "I will help {{if}} you ask. I stopped {{because}} I was tired.",
              tip: "Keep who before the verb even after the join word.",
            },
          ],
          [
            {
              passage: "{{When}} the film started, we sat still {{and}} we listened.",
              tip: "You can stack joins. Every chunk still needs its noun and verb.",
            },
          ]
        ),
      },
      {
        id: "w15-choose",
        kind: "choose",
        title: "Pick the right join",
        prompt: "Which join fits — and keeps who + did on both sides?",
        layers: L(
          [
            {
              question: "I put on a coat ___ it was cold.",
              choices: ["while", "because", "if"],
              answerIndex: 1,
            },
            {
              question: "Which keeps who on both sides?",
              choices: [
                "Mum cooked while I set the table.",
                "Mum cooked while set the table.",
                "while Mum cooked set I.",
              ],
              answerIndex: 0,
            },
          ],
          [
            {
              question: "We clap ___ the song ends.",
              choices: ["when", "if", "but"],
              answerIndex: 0,
            },
            {
              question: "Which is missing who after when?",
              choices: [
                "I smiled when Dad came home.",
                "I smiled when came home.",
                "When Dad came home, I smiled.",
              ],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "Best sentence?",
              choices: [
                "I ran when the whistle blew.",
                "I ran when blew.",
                "When blew whistle I ran the.",
              ],
              answerIndex: 0,
            },
          ]
        ),
      },
      {
        id: "w15-build",
        kind: "build",
        title: "Build a joined sentence",
        prompt: "Keep noun + verb on each side of the join. Do not drop the second who.",
        layers: L(
          [
            { answer: "I smiled when Dad came home.", tiles: ["smiled", "when", "Dad", "came", "home.", "I"] },
            { answer: "Mum cooked while I set the table.", tiles: ["cooked", "while", "I", "set", "the", "table.", "Mum"] },
          ],
          [
            { answer: "If it rains we stay inside.", tiles: ["it", "rains", "we", "stay", "inside.", "If"] },
            { answer: "We packed while Mum found the keys.", tiles: ["packed", "while", "Mum", "found", "the", "keys.", "We"] },
          ],
          [
            {
              answer: "When the film started we sat still.",
              tiles: ["the", "film", "started", "we", "sat", "still.", "When"],
            },
          ]
        ),
      },
      {
        id: "w15-write",
        kind: "write",
        title: "Join your ideas",
        prompt: "Use when, while, if or because. Check noun then verb on both sides.",
        rounds: [
          { prompt: "Write one sentence using when.", starters: ["I smiled when ", "We left when "] },
          { prompt: "Write one sentence using while.", starters: ["Mum cooked while ", "I read while "] },
          { prompt: "Write one sentence using if.", starters: ["If it rains, ", "If I finish early, "] },
          { prompt: "Write one sentence using because.", starters: ["I wore a coat because ", "I was happy because "] },
          {
            prompt: "Write two sentences. Use when in one and because in the other.",
            starters: ["When ", "I ... because "],
          },
        ],
      },
    ],
  },
  {
    id: "w16",
    week: 16,
    title: "Check the gates",
    focus: "Capitals, stops — and spot unfinished thoughts",
    story: {
      theme: "Careful eyes",
      text: "I wrote two sentences about lunch. Then I looked with careful eyes. Every sentence needs a capital start. Every telling sentence needs a stop. I check the first letter. Then I check the last mark. Mum said to fix my work. I found a missing stop and fixed it.",
      draftKey: "w16",
      wordBank: ["capital", "stop", "start", "end", "check", "fix"],
    },
    activities: [
      {
        id: "w16-story",
        kind: "story",
        title: "Read: Careful eyes",
        prompt: "Read the story. Then fill the gaps about checking your work.",
        layers: L(
          [
            {
              passage: "Every sentence needs a {{capital}} {{start}}. Every telling sentence needs a {{stop}}.",
              tip: "First proofread pass: capital at the start, full stop at the end.",
            },
            {
              passage: "I {{check}} the first letter. Then I {{check}} the last mark.",
              tip: "Slow down. Look at the gates of the sentence.",
            },
          ],
          [
            {
              passage: "Mum said to {{fix}} my work. I look for a missing {{stop}}.",
              tip: "A missing stop is a common careless slip.",
            },
            {
              passage: "Names need a {{capital}} too. Sam and Mia always {{start}} big.",
              tip: "Names stay capital even in the middle of a sentence.",
            },
          ],
          [
            {
              passage: "I {{check}} capitals. I {{check}} stops. Then I {{fix}} what looks wrong.",
              tip: "Proofreading is a habit: check, then fix.",
            },
          ]
        ),
      },
      {
        id: "w16-proof",
        kind: "proof",
        title: "Find unfinished or broken lines",
        prompt: "Name the mistake, tap it, rewrite as a full sentence.",
        layers: L(
          [
            {
              broken: "mum packed my lunch.",
              parts: ["mum", "packed", "my", "lunch."],
              brokenIndex: 0,
              answer: "Mum packed my lunch.",
              errorChoices: ["Missing capital", "Incomplete sentence", "Missing full stop"],
              errorIndex: 0,
              guide: "This line already has who (mum) and did (packed). Check the first letter.",
              explain: "The first word needs a capital. Mum is also a name, so it stays big.",
            },
            {
              broken: "Eating toast at the table.",
              parts: ["Eating toast at the table."],
              brokenIndex: 0,
              answer: "I was eating toast at the table.",
              answers: [
                "I was eating toast at the table.",
                "We were eating toast at the table.",
                "Mum was eating toast at the table.",
              ],
              mustInclude: ["toast"],
              minWords: 5,
              errorChoices: ["Incomplete sentence (no who)", "Missing full stop", "Wrong spelling"],
              errorIndex: 0,
              guide: "Eating… names an action. Who was eating?",
              explain: "Add who before the -ing action: I was eating… / We were eating…",
            },
          ],
          [
            {
              broken: "The dog ran home",
              parts: ["The", "dog", "ran", "home"],
              brokenIndex: 3,
              answer: "The dog ran home.",
              errorChoices: ["Missing full stop", "Incomplete sentence", "Missing capital"],
              errorIndex: 0,
              guide: "Who and did are here. What is missing at the end?",
              explain: "A telling sentence needs a full stop to show the thought is finished.",
            },
            {
              broken: "Opened the lunch bag.",
              parts: ["Opened the lunch bag."],
              brokenIndex: 0,
              answer: "Mum opened the lunch bag.",
              answers: [
                "Mum opened the lunch bag.",
                "I opened the lunch bag.",
                "Dad opened the lunch bag.",
                "Sam opened the lunch bag.",
              ],
              mustInclude: ["opened", "bag"],
              minWords: 4,
              errorChoices: ["Incomplete sentence (no who)", "Missing capital", "Wrong tense"],
              errorIndex: 0,
              guide: "This starts with the verb. Ask: who opened?",
              explain: "Opened the lunch bag has the action but no who. Put a noun first.",
            },
          ],
          [
            {
              broken: "Because I was tired.",
              parts: ["Because I was tired."],
              brokenIndex: 0,
              answer: "I sat down because I was tired.",
              answers: [
                "I sat down because I was tired.",
                "I stopped because I was tired.",
                "I went to bed because I was tired.",
                "I was tired.",
              ],
              mustInclude: ["tired"],
              minWords: 3,
              errorChoices: ["Incomplete sentence (hanging because)", "Missing capital", "Wrong spelling"],
              errorIndex: 0,
              guide: "Because… is only a reason. Pair it with a main idea: who did what because…",
              explain: "Because I was tired cannot stand alone. Add the main action, or drop because and say I was tired.",
            },
          ]
        ),
      },
      {
        id: "w16-choose",
        kind: "choose",
        title: "Finished or unfinished?",
        prompt: "Pick the line that is a full sentence.",
        layers: L(
          [
            {
              question: "Which is a full sentence?",
              choices: ["Running to school.", "I was running to school.", "to school running"],
              answerIndex: 1,
            },
            {
              question: "Which is a full sentence?",
              choices: ["The cat sat.", "Sat on the mat.", "the cat sat."],
              answerIndex: 0,
            },
          ],
          [
            {
              question: "Which is a full sentence?",
              choices: ["Kicked the ball.", "Sam kicked the ball.", "the red ball"],
              answerIndex: 1,
            },
            {
              question: "Which is a full sentence?",
              choices: ["Because it was cold.", "I wore a coat because it was cold.", "because cold"],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "Which is finished and complete?",
              choices: [
                "When the bell rang.",
                "When the bell rang, we lined up.",
                "lined up when",
              ],
              answerIndex: 1,
            },
          ]
        ),
      },
      {
        id: "w16-write",
        kind: "write",
        title: "Write, then check the gates",
        prompt: "Write carefully. Check capital and stop on every sentence.",
        rounds: [
          { prompt: "Write two short sentences about lunch. Check capitals and stops.", starters: ["I ate ", "Then I "] },
          { prompt: "Write two short sentences about play. Check every start and end.", starters: ["We played ", "My friend "] },
          { prompt: "Write two short sentences about home. No missing stops.", starters: ["At home I ", "Mum "] },
          { prompt: "Write three sentences about school. Proofread the gates.", starters: ["At school ", "Then ", "I "] },
          { prompt: "Write two sentences about a pet. Capital + stop on both.", starters: ["My pet ", "It "] },
        ],
      },
    ],
  },
  {
    id: "w17",
    week: 17,
    title: "Finish the thought",
    focus: "Turn sentence fragments into full sentences",
    story: {
      theme: "Missing pieces",
      text: "Running is not enough on its own. Who was running? The tiny frog on the log needs a verb. When the bell rang is only half a thought. Because I was tired needs a main action. A full sentence has who and what they did.",
      draftKey: "w17",
      wordBank: ["who", "verb", "missing", "finish", "thought", "sentence"],
    },
    activities: [
      {
        id: "w17-story",
        kind: "story",
        title: "Read: Missing pieces",
        prompt: "Read the story. Notice what a sentence needs before you fill gaps.",
        layers: L(
          [
            {
              passage: "A full sentence needs {{who}} and a {{verb}}. A piece with only the action is not finished.",
              tip: "Ask: who? what did they do? If either answer is missing, it is a fragment.",
            },
            {
              passage: "Running is not enough. {{Who}} was running? Add the person, then the action.",
              tip: "-ing lines often hide a missing who.",
            },
          ],
          [
            {
              passage: "The tiny frog on the log needs a {{verb}}. Try sat, jumped or slept.",
              tip: "A noun phrase alone is not a sentence until something happens.",
            },
            {
              passage: "{{When}} the bell rang is only half a thought. Finish with what happened next.",
              tip: "When / After / Because openers need a main idea after them.",
            },
          ],
          [
            {
              passage: "I {{finish}} the thought. Then the {{sentence}} has who and did.",
              tip: "Edit habit: if it cannot answer who + did, rebuild it.",
            },
          ]
        ),
      },
      {
        id: "w17-proof",
        kind: "proof",
        title: "Fix the fragments",
        prompt: "These lines are unfinished. Name the gap, tap it, rewrite a full sentence.",
        layers: L(
          [
            {
              broken: "Playing cards on the rug.",
              parts: ["Playing cards on the rug."],
              brokenIndex: 0,
              answer: "We were playing cards on the rug.",
              answers: [
                "We were playing cards on the rug.",
                "I was playing cards on the rug.",
                "They were playing cards on the rug.",
              ],
              mustInclude: ["playing", "cards"],
              minWords: 5,
              errorChoices: ["Incomplete sentence (no who)", "Missing full stop", "Wrong spelling"],
              errorIndex: 0,
              guide: "Playing… names an action. Who was playing?",
              explain: "Add a who before the -ing action: We were playing…",
            },
            {
              broken: "The busy bee on the flower.",
              parts: ["The busy bee on the flower."],
              brokenIndex: 0,
              answer: "The busy bee landed on the flower.",
              answers: [
                "The busy bee landed on the flower.",
                "The busy bee sat on the flower.",
                "The busy bee flew to the flower.",
              ],
              mustInclude: ["bee", "flower"],
              minWords: 5,
              errorChoices: ["Incomplete sentence (no verb)", "Missing capital", "Wrong adjective order"],
              errorIndex: 0,
              guide: "We have who (the busy bee) but nothing happens. Add a verb.",
              explain: "A noun phrase needs an action: landed, sat, flew…",
            },
          ],
          [
            {
              broken: "When the bell rang.",
              parts: ["When the bell rang."],
              brokenIndex: 0,
              answer: "When the bell rang, we lined up.",
              answers: [
                "When the bell rang, we lined up.",
                "When the bell rang, we went inside.",
                "When the bell rang, I packed my bag.",
                "The bell rang.",
              ],
              mustInclude: ["bell"],
              minWords: 3,
              errorChoices: ["Incomplete sentence (hanging when)", "Missing capital", "Wrong tense"],
              errorIndex: 0,
              guide: "When… sets the time. What happened then?",
              explain: "Finish the opener: When the bell rang, we lined up. Or make a short main sentence: The bell rang.",
            },
            {
              broken: "After lunch.",
              parts: ["After lunch."],
              brokenIndex: 0,
              answer: "After lunch we played outside.",
              answers: [
                "After lunch we played outside.",
                "After lunch I read a book.",
                "After lunch we lined up.",
                "We played after lunch.",
              ],
              mustInclude: ["lunch"],
              minWords: 3,
              errorChoices: ["Incomplete sentence (hanging after)", "Missing full stop", "Wrong spelling"],
              errorIndex: 0,
              guide: "After lunch tells when — not what anyone did.",
              explain: "Add who + did after the time: After lunch we played…",
            },
          ],
          [
            {
              broken: "My friend on the bus.",
              parts: ["My friend on the bus."],
              brokenIndex: 0,
              answer: "My friend sat on the bus.",
              answers: [
                "My friend sat on the bus.",
                "My friend waved on the bus.",
                "My friend was on the bus.",
                "My friend rode on the bus.",
              ],
              mustInclude: ["friend", "bus"],
              minWords: 5,
              errorChoices: ["Incomplete sentence (no verb)", "Missing capital", "Wrong spelling of friend"],
              errorIndex: 0,
              guide: "Who is clear. What did your friend do?",
              explain: "Add a verb between friend and the place: sat / waved / rode…",
            },
          ]
        ),
      },
      {
        id: "w17-choose",
        kind: "choose",
        title: "Fragment or full sentence?",
        prompt: "Pick the line that has who and what they did.",
        layers: L(
          [
            {
              question: "Which is a full sentence?",
              choices: ["Playing soccer after school.", "We were playing soccer after school.", "after school playing"],
              answerIndex: 1,
            },
            {
              question: "Which is a full sentence?",
              choices: ["The tiny frog on the log.", "The tiny frog sat on the log.", "on the log"],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "Which is a full sentence?",
              choices: ["When the bell rang.", "When the bell rang, we lined up.", "When the bell"],
              answerIndex: 1,
            },
            {
              question: "Which is a full sentence?",
              choices: ["After lunch.", "After lunch we played.", "After"],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "Which finishes the thought?",
              choices: [
                "My friend on the bus.",
                "My friend sat on the bus.",
                "friend bus",
              ],
              answerIndex: 1,
            },
          ]
        ),
      },
      {
        id: "w17-write",
        kind: "write",
        title: "Write full sentences",
        prompt: "Every line needs who and what they did. No hanging pieces.",
        rounds: [
          {
            prompt: "Write two sentences about play. Make sure each has who + did.",
            starters: ["We played ", "My friend "],
          },
          {
            prompt: "Fix this idea into a full sentence, then write one more: Running to school.",
            starters: ["I was running ", "Then I "],
          },
          {
            prompt: "Write two sentences using When or After — finish both sides.",
            starters: ["When the bell rang, ", "After lunch "],
          },
          {
            prompt: "Write two sentences about a friend. No missing verbs.",
            starters: ["My friend ", "Then they "],
          },
          {
            prompt: "Write three full sentences about yesterday. Check each has who + did.",
            starters: ["Yesterday I ", "First we ", "We "],
          },
        ],
      },
    ],
  },
  {
    id: "w18",
    week: 18,
    title: "The full edit pass",
    focus: "Fragments, gates, and mixed careless slips",
    story: {
      theme: "Polish the page",
      text: "I wrote about a trip to the zoo. First I check for unfinished thoughts. Does every line have who and did? Next I check capitals and stops. Then I fix spelling. When I fix a line, I read it out loud. I check, I fix, then I read again.",
      draftKey: "w18",
      wordBank: ["check", "fix", "who", "verb", "stop", "finish"],
    },
    activities: [
      {
        id: "w18-story",
        kind: "story",
        title: "Read: Polish the page",
        prompt: "Read the story about a full edit pass.",
        layers: L(
          [
            {
              passage: "First I {{check}} for unfinished thoughts. Does every line have {{who}} and a verb?",
              tip: "Edit order: finish fragments first, then gates and spelling.",
            },
            {
              passage: "Next I {{check}} capitals and {{stop}}s. Then I {{fix}} what still looks wrong.",
              tip: "Careless writing often has a fragment and a missing stop together.",
            },
          ],
          [
            {
              passage: "When I {{fix}} a line, I read it out loud. A missing {{who}} is easier to hear.",
              tip: "Reading aloud catches pieces that are not full sentences.",
            },
            {
              passage: "I {{check}} hanging When and Because. Those openers need a {{finish}}.",
              tip: "If the line only sets time or reason, rebuild it.",
            },
          ],
          [
            {
              passage: "I {{check}}, I {{fix}}, then I read again. That is a full edit pass.",
              tip: "One slow pass beats three rushed glances.",
            },
          ]
        ),
      },
      {
        id: "w18-proof",
        kind: "proof",
        title: "Mixed proofreading",
        prompt: "Fragments and careless slips mix here. Name it, tap it, fix it.",
        layers: L(
          [
            {
              broken: "Went to the zoo with Mum.",
              parts: ["Went to the zoo with Mum."],
              brokenIndex: 0,
              answer: "I went to the zoo with Mum.",
              answers: [
                "I went to the zoo with Mum.",
                "We went to the zoo with Mum.",
                "Sam went to the zoo with Mum.",
              ],
              mustInclude: ["went", "zoo"],
              minWords: 5,
              errorChoices: ["Incomplete sentence (no who)", "Missing full stop", "Wrong spelling"],
              errorIndex: 0,
              guide: "The action is clear. Who went?",
              explain: "Start with who: I went… / We went… A past verb still needs a subject.",
            },
            {
              broken: "after lunch we runned to the oval.",
              parts: ["after", "lunch", "we", "runned", "to", "the", "oval."],
              brokenIndex: 0,
              answer: "After lunch we ran to the oval.",
              errorChoices: ["Missing capital (and wrong tense)", "Incomplete sentence", "Wrong adjective"],
              errorIndex: 0,
              guide: "This one has who + did, but the start and the verb need care.",
              explain: "After needs a capital, and the past of run is ran, not runned.",
            },
          ],
          [
            {
              broken: "Eating lunch under the tree.",
              parts: ["Eating lunch under the tree."],
              brokenIndex: 0,
              answer: "We were eating lunch under the tree.",
              answers: [
                "We were eating lunch under the tree.",
                "I was eating lunch under the tree.",
                "Mum was eating lunch under the tree.",
              ],
              mustInclude: ["eating", "lunch"],
              minWords: 5,
              errorChoices: ["Incomplete sentence (no who)", "Missing capital", "Wrong tense"],
              errorIndex: 0,
              guide: "Eating… is an -ing piece. Add who was eating.",
              explain: "Turn the fragment into who + was/were + eating…",
            },
            {
              broken: "My friend say we can go",
              parts: ["My", "friend", "say", "we", "can", "go"],
              brokenIndex: 2,
              answer: "My friend said we can go.",
              errorChoices: ["Wrong tense", "Incomplete sentence", "Missing capital"],
              errorIndex: 0,
              guide: "Who and idea are here. Check the verb and the end stop.",
              explain: "If the talking already happened, use said. Add the full stop when you rewrite.",
            },
          ],
          [
            {
              broken: "Because the bus was full.",
              parts: ["Because the bus was full."],
              brokenIndex: 0,
              answer: "We were late because the bus was full.",
              answers: [
                "We were late because the bus was full.",
                "I was late because the bus was full.",
                "They waited because the bus was full.",
                "The bus was full.",
              ],
              mustInclude: ["bus"],
              minWords: 3,
              errorChoices: ["Incomplete sentence (hanging because)", "Missing capital", "Wrong spelling"],
              errorIndex: 0,
              guide: "Because… gives a reason. What happened because of it?",
              explain: "Add the main idea first, or drop because: The bus was full.",
            },
          ]
        ),
      },
      {
        id: "w18-choose",
        kind: "choose",
        title: "Pick the polished line",
        prompt: "Which sentence would survive a careful edit pass?",
        layers: L(
          [
            {
              question: "Which is a full, careful sentence?",
              choices: [
                "Went to the zoo with Mum.",
                "I went to the zoo with Mum.",
                "to the zoo with Mum",
              ],
              answerIndex: 1,
            },
            {
              question: "Which is right?",
              choices: [
                "after lunch we runned outside",
                "After lunch we ran outside.",
                "After lunch we run outside",
              ],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "Which is a full sentence?",
              choices: [
                "Eating lunch under the tree.",
                "We were eating lunch under the tree.",
                "under the tree eating",
              ],
              answerIndex: 1,
            },
            {
              question: "Which is right?",
              choices: [
                "Because the bus was full.",
                "We were late because the bus was full.",
                "because bus full",
              ],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "Best edited line?",
              choices: [
                "When the bell rang, we lined up.",
                "When the bell rang.",
                "when the bell rang we lined up",
              ],
              answerIndex: 0,
            },
          ]
        ),
      },
      {
        id: "w18-write",
        kind: "write",
        title: "Write and edit",
        prompt: "Write, then do a full edit pass before I'm done.",
        rounds: [
          {
            prompt: "Write three sentences about yesterday. Check each has who + did, then edit.",
            starters: ["Yesterday ", "First ", "We were "],
          },
          {
            prompt: "Turn this fragment into a full sentence, then write two more: Running to the gate.",
            starters: ["I was running ", "Then ", "We "],
          },
          {
            prompt: "Write three sentences about school. Use one opener like When or After, then edit.",
            starters: ["When the bell rang, ", "After lunch, ", "I "],
          },
          {
            prompt: "Write a short paragraph (4 sentences) about a trip. No unfinished thoughts.",
            starters: ["Yesterday we went ", "First ", "Then ", "I felt "],
          },
          {
            prompt: "Write four sentences about a game. Edit every line before you finish.",
            starters: ["We played ", "When ", "My friend ", "I was "],
          },
        ],
      },
    ],
  },
];

EXTRA_WEEKS.forEach((week) => CURRICULUM.push(week));
