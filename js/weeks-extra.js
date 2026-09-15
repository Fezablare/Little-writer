const EXTRA_WEEKS = [
  {
    id: "w13",
    week: 13,
    title: "Noun, verb, adjective",
    focus: "Who / action / describing word — and where each sits",
    story: {
      theme: "Building a clear sentence",
      text: "The tiny frog jumped over the log. Sam kicked the red ball into the net. A huge wave hit the rocks. The soft rug felt warm under my feet. The quiet library held a tiny book. The noisy truck rolled past the school.",
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
              passage: "The {{tiny}} frog {{jumped}} over the log.",
              tip: "tiny = adjective (describes). frog = noun (who/what). jumped = verb (action). Adjective before noun; noun before verb.",
            },
          ],
          [
            {
              passage: "Sam {{kicked}} the {{red}} ball into the net.",
              tip: "Sam = noun (who). kicked = verb. red = adjective before the noun ball.",
            },
            {
              passage: "A {{huge}} wave {{hit}} the rocks.",
              tip: "huge paints wave (adjective before noun). hit is the verb after the noun.",
            },
          ],
          [
            {
              passage: "The {{quiet}} library {{held}} a {{tiny}} book.",
              tip: "Each adjective sits next to its noun. The verb follows who/what is doing something.",
            },
          ]
        ),
      },
      {
        id: "w13-choose",
        kind: "choose",
        title: "Name the job of the word",
        prompt: "Pick the sentence where noun, verb and adjective are in sensible places.",
        layers: L(
          [
            {
              question: "Which keeps adjective before the noun?",
              choices: ["I saw a bird tiny.", "I saw a tiny bird.", "tiny saw I a bird."],
              answerIndex: 1,
            },
            {
              question: "Which has who then action?",
              choices: ["kicked Sam the ball.", "Sam kicked the ball.", "the ball Sam kicked."],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "In “The huge dog ran”, which word is the verb (action)?",
              choices: ["huge", "dog", "ran"],
              answerIndex: 2,
            },
            {
              question: "In “The soft rug felt warm”, which word is the adjective?",
              choices: ["rug", "soft", "felt"],
              answerIndex: 1,
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
            { answer: "The tiny frog jumped.", tiles: ["The", "tiny", "frog", "jumped."] },
            { answer: "Sam kicked the red ball.", tiles: ["Sam", "kicked", "the", "red", "ball."] },
          ],
          [
            { answer: "A huge wave hit the rocks.", tiles: ["A", "huge", "wave", "hit", "the", "rocks."] },
            { answer: "The soft rug felt warm.", tiles: ["The", "soft", "rug", "felt", "warm."] },
          ],
          [
            {
              answer: "The quiet library held a tiny book.",
              tiles: ["The", "quiet", "library", "held", "a", "tiny", "book."],
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
            starters: ["The tiny ", "A huge "],
          },
          {
            prompt: "Write one sentence about a person (noun) doing something (verb).",
            starters: ["Sam ", "Mum ", "My friend "],
          },
          {
            prompt: "Write one sentence that paints a thing: adjective + noun + verb.",
            starters: ["The soft ", "The noisy "],
          },
          {
            prompt: "Write two sentences. In each, name the noun and the verb in your head first.",
            starters: ["The ", "Then the "],
          },
          {
            prompt: "Write two sentences about an animal. Put a describing word before the animal noun.",
            starters: ["The tiny ", "A huge "],
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
                "the dog Suddenly barked.",
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
                "I clapped. I stood. I cheered.",
              ],
              answerIndex: 0,
            },
            {
              question: "Which is right?",
              choices: ["Slowly I walked home.", "Slowly walked I home.", "home I walked Slowly."],
              answerIndex: 0,
            },
          ],
          [
            {
              question: "Best pair?",
              choices: [
                "I woke up. I ate toast. I left.",
                "When I woke up, I ate toast. Later I left for school.",
                "Ate toast when I woke up later left.",
              ],
              answerIndex: 1,
            },
          ]
        ),
      },
      {
        id: "w14-expand",
        kind: "expand",
        title: "Add an opener",
        prompt: "Rewrite with a time or how opener. Keep noun before verb.",
        layers: L(
          [
            {
              seed: "I packed my bag.",
              hint: "Try After breakfast or When the bell rang at the front.",
              mustInclude: ["I"],
              needCapital: true,
            },
            {
              seed: "We ran to the oval.",
              hint: "Try Suddenly or After lunch at the start.",
              mustInclude: ["ran"],
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
              seed: "The dog barked.",
              hint: "Start with Suddenly. Keep The dog before barked.",
              mustInclude: ["dog"],
              needCapital: true,
            },
          ],
          [
            {
              seed: "We walked home.",
              hint: "Start with After the game and add one detail.",
              mustInclude: ["After"],
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
        prompt: "Which join fits — and keeps the sentence clear?",
        layers: L(
          [
            {
              question: "I put on a coat ___ it was cold.",
              choices: ["while", "because", "if"],
              answerIndex: 1,
            },
            {
              question: "Mum read ___ I drew.",
              choices: ["while", "because", "Suddenly"],
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
              question: "___ it is sunny, we eat outside.",
              choices: ["While", "If", "Because"],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "Best sentence?",
              choices: [
                "I ran when the whistle blew.",
                "I ran while the whistle because.",
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
        prompt: "Keep noun + verb on each side of the join.",
        layers: L(
          [
            { answer: "I smiled when Dad came home.", tiles: ["I", "smiled", "when", "Dad", "came", "home."] },
            { answer: "Mum cooked while I set the table.", tiles: ["Mum", "cooked", "while", "I", "set", "the", "table."] },
          ],
          [
            { answer: "If it rains we stay inside.", tiles: ["If", "it", "rains", "we", "stay", "inside."] },
            { answer: "I stopped because I was tired.", tiles: ["I", "stopped", "because", "I", "was", "tired."] },
          ],
          [
            {
              answer: "When the film started we sat still.",
              tiles: ["When", "the", "film", "started", "we", "sat", "still."],
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
    focus: "Proofread capitals and full stops",
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
        title: "Find the capital or stop",
        prompt: "Name the mistake, tap the broken bit, type the fixed sentence.",
        layers: L(
          [
            {
              broken: "mum packed my lunch.",
              parts: ["mum", "packed", "my", "lunch."],
              brokenIndex: 0,
              answer: "Mum packed my lunch.",
              errorChoices: ["Missing capital", "Wrong tense", "Missing full stop"],
              errorIndex: 0,
              explain: "The first word needs a capital. Mum is also a name, so it stays big.",
            },
            {
              broken: "The dog ran home",
              parts: ["The", "dog", "ran", "home"],
              brokenIndex: 3,
              answer: "The dog ran home.",
              errorChoices: ["Missing capital", "Missing full stop", "Wrong spelling"],
              errorIndex: 1,
              explain: "A telling sentence needs a full stop to show the thought is finished.",
            },
          ],
          [
            {
              broken: "we played soccer after school.",
              parts: ["we", "played", "soccer", "after", "school."],
              brokenIndex: 0,
              answer: "We played soccer after school.",
              errorChoices: ["Missing capital", "Wrong tense", "Missing question mark"],
              errorIndex: 0,
              explain: "Even short words like We need a capital when they open the sentence.",
            },
            {
              broken: "Sam kicked the ball",
              parts: ["Sam", "kicked", "the", "ball"],
              brokenIndex: 3,
              answer: "Sam kicked the ball.",
              errorChoices: ["Missing capital", "Missing full stop", "Wrong join"],
              errorIndex: 1,
              explain: "Sam already has a capital. The missing piece is the stop at the end.",
            },
          ],
          [
            {
              broken: "i like my red bike",
              parts: ["i", "like", "my", "red", "bike"],
              brokenIndex: 0,
              answer: "I like my red bike.",
              errorChoices: ["Missing capital and full stop", "Wrong tense", "Wrong adjective order"],
              errorIndex: 0,
              explain: "I needs a capital, and the sentence still needs a full stop. Fix both gates.",
            },
          ]
        ),
      },
      {
        id: "w16-choose",
        kind: "choose",
        title: "Which sentence is finished?",
        prompt: "Pick the sentence with a proper capital and stop.",
        layers: L(
          [
            {
              question: "Which is right?",
              choices: ["the cat sat.", "The cat sat.", "The cat sat"],
              answerIndex: 1,
            },
            {
              question: "Which is right?",
              choices: ["We ran home.", "we ran home.", "We ran home"],
              answerIndex: 0,
            },
          ],
          [
            {
              question: "Which is right?",
              choices: ["dad cooked fish.", "Dad cooked fish", "Dad cooked fish."],
              answerIndex: 2,
            },
            {
              question: "Which is right?",
              choices: ["I can hop.", "i can hop.", "I can hop"],
              answerIndex: 0,
            },
          ],
          [
            {
              question: "Which pair is fully finished?",
              choices: [
                "I sat down. Then I read.",
                "I sat down then I read",
                "i sat down. then I read.",
              ],
              answerIndex: 0,
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
    title: "Check spelling and tense",
    focus: "Proofread tricky words and past/present",
    story: {
      theme: "Yesterday or today",
      text: "Yesterday we went to the park. My friend said it was fun. I stopped because I was tired. They were happy on the grass. Today I walk to school. Yesterday I went with Mum. My friend said we should go again. We went because it looked fun.",
      draftKey: "w17",
      wordBank: ["said", "friend", "because", "went", "was", "were"],
    },
    activities: [
      {
        id: "w17-story",
        kind: "story",
        title: "Read: Yesterday or today",
        prompt: "Read the story. Watch tense and tricky spellings.",
        layers: L(
          [
            {
              passage: "Yesterday we {{went}} to the park. My {{friend}} {{said}} it was fun.",
              tip: "Yesterday pairs with past verbs: went, said.",
            },
            {
              passage: "I stopped {{because}} I {{was}} tired. They {{were}} happy.",
              tip: "was for one, were for more than one. because needs careful spelling.",
            },
          ],
          [
            {
              passage: "Today I walk to school. Yesterday I {{went}} with Mum.",
              tip: "Keep the tense steady inside one past idea.",
            },
            {
              passage: "My friend {{said}} we should go. We went {{because}} it looked fun.",
              tip: "said and because are common careless spellings.",
            },
          ],
          [
            {
              passage: "Yesterday my {{friend}} {{said}} we {{were}} late {{because}} the bus was full.",
              tip: "One past story: said, were, was, because — matching the time.",
            },
          ]
        ),
      },
      {
        id: "w17-proof",
        kind: "proof",
        title: "Find spelling or tense slips",
        prompt: "Name the mistake, tap it, write the fixed sentence.",
        layers: L(
          [
            {
              broken: "My frend said we can play.",
              parts: ["My", "frend", "said", "we", "can", "play."],
              brokenIndex: 1,
              answer: "My friend said we can play.",
              errorChoices: ["Wrong spelling", "Missing capital", "Wrong tense"],
              errorIndex: 0,
              explain: "friend has ie in the middle: f-r-i-e-n-d.",
            },
            {
              broken: "We go to the beach yesterday.",
              parts: ["We", "go", "to", "the", "beach", "yesterday."],
              brokenIndex: 1,
              answer: "We went to the beach yesterday.",
              errorChoices: ["Wrong tense", "Missing full stop", "Wrong adjective"],
              errorIndex: 0,
              explain: "Yesterday means past time, so use went, not go.",
            },
          ],
          [
            {
              broken: "I stopped becos I was tired.",
              parts: ["I", "stopped", "becos", "I", "was", "tired."],
              brokenIndex: 2,
              answer: "I stopped because I was tired.",
              errorChoices: ["Wrong spelling", "Missing capital", "Wrong opener"],
              errorIndex: 0,
              explain: "because is be-cause — not the short form becos.",
            },
            {
              broken: "They was happy after the game.",
              parts: ["They", "was", "happy", "after", "the", "game."],
              brokenIndex: 1,
              answer: "They were happy after the game.",
              errorChoices: ["Wrong tense helper", "Missing stop", "Wrong spelling of happy"],
              errorIndex: 0,
              explain: "They is more than one, so use were, not was.",
            },
          ],
          [
            {
              broken: "Yesterday my friend say we were late.",
              parts: ["Yesterday", "my", "friend", "say", "we", "were", "late."],
              brokenIndex: 3,
              answer: "Yesterday my friend said we were late.",
              errorChoices: ["Wrong tense", "Missing capital", "Wrong join"],
              errorIndex: 0,
              explain: "In the past, say becomes said.",
            },
          ]
        ),
      },
      {
        id: "w17-choose",
        kind: "choose",
        title: "Pick the careful sentence",
        prompt: "Which sentence has the right spelling and tense?",
        layers: L(
          [
            {
              question: "Which is right?",
              choices: [
                "Yesterday we go to the shop.",
                "Yesterday we went to the shop.",
                "Yesterday we goed to the shop.",
              ],
              answerIndex: 1,
            },
            {
              question: "Which is right?",
              choices: [
                "My frend said hello.",
                "My friend said hello.",
                "My friend say hello yesterday.",
              ],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "Which is right?",
              choices: ["They was tired.", "They were tired.", "They is tired yesterday."],
              answerIndex: 1,
            },
            {
              question: "Which is right?",
              choices: [
                "I stopped becos I was full.",
                "I stopped because I was full.",
                "I stop because I were full.",
              ],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "Best past sentence?",
              choices: [
                "Yesterday my friend said we were late because the bus was full.",
                "Yesterday my friend say we was late becos the bus were full.",
                "Yesterday my frend said we was late because the bus was full.",
              ],
              answerIndex: 0,
            },
          ]
        ),
      },
      {
        id: "w17-write",
        kind: "write",
        title: "Write in one tense",
        prompt: "Stay in the past. Spell friend, said, because carefully.",
        rounds: [
          {
            prompt: "Write two past-tense sentences about yesterday. Use went or said.",
            starters: ["Yesterday I went ", "My friend said "],
          },
          {
            prompt: "Write one sentence with because about something that already happened.",
            starters: ["I stopped because ", "We left because "],
          },
          {
            prompt: "Write two sentences about a friend. Use friend and said correctly.",
            starters: ["My friend ", "Then they said "],
          },
          {
            prompt: "Write two sentences using were or was correctly.",
            starters: ["I was ", "They were "],
          },
          {
            prompt: "Write three past sentences about a trip. Keep the tense steady.",
            starters: ["Yesterday we went ", "First we ", "We were "],
          },
        ],
      },
    ],
  },
  {
    id: "w18",
    week: 18,
    title: "The full edit pass",
    focus: "Proofread mixed careless mistakes",
    story: {
      theme: "Polish the page",
      text: "I wrote about a trip to the zoo. First I check capitals. Next I check stops. Then I fix spelling. I look for wrong tense words. When I fix a line, I read it out loud. I check friend and because. I check, I fix, then I read again.",
      draftKey: "w18",
      wordBank: ["check", "fix", "capital", "stop", "tense", "spelling"],
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
              passage: "First I {{check}} capitals. Next I {{check}} stops. Then I {{fix}} spelling.",
              tip: "Edit order: gates first, then spelling and tense.",
            },
            {
              passage: "I look for wrong {{tense}}. I look for missing {{capital}} letters.",
              tip: "Careless writing often slips on tense and capitals together.",
            },
          ],
          [
            {
              passage: "When I {{fix}} a line, I read it out loud. A missing {{stop}} is easier to hear.",
              tip: "Reading aloud catches what your eye skips.",
            },
            {
              passage: "I {{check}} friend and because. Those {{spelling}} traps appear a lot.",
              tip: "Keep a short list of trap words and check them every time.",
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
        prompt: "Any careless slip can hide here. Name it, tap it, fix it.",
        layers: L(
          [
            {
              broken: "after lunch we runned to the oval.",
              parts: ["after", "lunch", "we", "runned", "to", "the", "oval."],
              brokenIndex: 0,
              answer: "After lunch we ran to the oval.",
              errorChoices: ["Missing capital (and wrong tense)", "Missing full stop only", "Wrong adjective"],
              errorIndex: 0,
              explain: "After needs a capital, and the past of run is ran, not runned.",
            },
            {
              broken: "My friend say we can go",
              parts: ["My", "friend", "say", "we", "can", "go"],
              brokenIndex: 2,
              answer: "My friend said we can go.",
              errorChoices: ["Wrong tense", "Missing capital", "Wrong spelling of friend"],
              errorIndex: 0,
              explain: "If the talking already happened, use said. Add the full stop when you rewrite.",
            },
          ],
          [
            {
              broken: "they was tired becos the walk was long.",
              parts: ["they", "was", "tired", "becos", "the", "walk", "was", "long."],
              brokenIndex: 0,
              answer: "They were tired because the walk was long.",
              errorChoices: ["Capital, were, and because", "Only a missing stop", "Wrong opener"],
              errorIndex: 0,
              explain: "They needs a capital, were matches they, and because is the full spelling.",
            },
            {
              broken: "When the bell ring we line up.",
              parts: ["When", "the", "bell", "ring", "we", "line", "up."],
              brokenIndex: 3,
              answer: "When the bell rang we lined up.",
              errorChoices: ["Wrong tense", "Missing capital", "Missing question mark"],
              errorIndex: 0,
              explain: "Keep the whole sentence in the past if the moment is over: rang, lined.",
            },
          ],
          [
            {
              broken: "yesterday i go to see my frend",
              parts: ["yesterday", "i", "go", "to", "see", "my", "frend"],
              brokenIndex: 0,
              answer: "Yesterday I went to see my friend.",
              errorChoices: ["Capitals, tense, spelling, and stop", "Only spelling", "Only a missing stop"],
              errorIndex: 0,
              explain: "A full edit pass fixes Yesterday, I, went, friend, and the final full stop together.",
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
              question: "Which is right?",
              choices: [
                "after lunch we runned outside",
                "After lunch we ran outside.",
                "After lunch we run outside",
              ],
              answerIndex: 1,
            },
            {
              question: "Which is right?",
              choices: [
                "My frend say we was late.",
                "My friend said we were late.",
                "my friend said we were late",
              ],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "Which is right?",
              choices: [
                "I stopped because I was tired.",
                "I stopped becos I were tired.",
                "i stopped because I was tired",
              ],
              answerIndex: 0,
            },
            {
              question: "Which is right?",
              choices: [
                "When the bell rang, we lined up.",
                "When the bell ring, we line up yesterday.",
                "when the bell rang we lined up",
              ],
              answerIndex: 0,
            },
          ],
          [
            {
              question: "Best edited lines?",
              choices: [
                "Yesterday I went to see my friend. We were happy because the sun was out.",
                "yesterday i go to see my frend we was happy becos the sun was out",
                "Yesterday I go to see my friend. We was happy because the sun was out.",
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
            prompt: "Write three sentences about yesterday. Then edit capitals, stops, tense, and spelling.",
            starters: ["Yesterday ", "First ", "We were "],
          },
          {
            prompt: "Write three sentences about a friend. Edit friend, said, and because if you use them.",
            starters: ["My friend ", "They said ", "I smiled because "],
          },
          {
            prompt: "Write three sentences about school. Use one opener like When or After, then edit.",
            starters: ["When the bell rang, ", "After lunch, ", "I "],
          },
          {
            prompt: "Write a short paragraph (4 sentences) about a trip. Full edit pass.",
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
