function L(warm, practice, boss) {
  return [
    { id: "warm", label: "Warm-up", needCorrect: 2, rounds: warm },
    { id: "practice", label: "Practice", needCorrect: 2, rounds: practice },
    { id: "boss", label: "Boss", needCorrect: 1, rounds: boss },
  ];
}

const CURRICULUM = [
  {
    id: "w1",
    week: 1,
    title: "A sentence needs a start",
    focus: "Capital letters at the beginning",
    story: {
      theme: "My favourite thing",
      draftKey: "w1",
      wordBank: ["favourite", "thing", "like", "bike", "cat", "dog", "mum", "dad"],
    },
    activities: [
      {
        id: "w1-story",
        kind: "story",
        title: "Read: My favourite thing",
        prompt: "Read the story. Type the missing words in the gaps.",
        layers: L(
          [
            {
              passage: "I have a {{cat}}. I also have a {{dog}}. They like to {{run}} in the {{sun}}.",
            },
            {
              passage: "Mum has a {{hat}}. Dad sits on the {{mat}}. The cat does a little {{hop}}.",
            },
          ],
          [
            {
              passage: "I {{like}} my {{red}} {{bike}}. It is {{big}} and fun.",
            },
            {
              passage: "{{Mum}} and {{dad}} watch me. The {{dog}} runs {{with}} us.",
            },
          ],
          [
            {
              passage: "My {{favourite}} {{thing}} is my bike. I {{like}} to ride it {{with}} Mum and Dad.",
            },
          ]
        ),
      },
      {
        id: "w1-choose",
        kind: "choose",
        title: "Pick the capital start",
        prompt: "Which sentence starts the right way?",
        layers: L(
          [
            {
              question: "Which one is right?",
              choices: ["the cat sat down.", "The cat sat down.", "the Cat sat down."],
              answerIndex: 1,
            },
            {
              question: "Which one is right?",
              choices: ["mum has a hat.", "Mum has a hat.", "mUm has a hat."],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "Which one is right?",
              choices: ["i like my bike.", "I like my bike.", "I Like my bike."],
              answerIndex: 1,
            },
            {
              question: "Which one is right?",
              choices: ["dad can hop.", "Dad can hop.", "DAD can hop."],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "Which one starts my favourite-thing story right?",
              choices: [
                "my favourite thing is my red bike.",
                "My favourite thing is my red bike.",
                "my Favourite thing is my red bike.",
              ],
              answerIndex: 1,
            },
          ]
        ),
      },
      {
        id: "w1-build",
        kind: "build",
        title: "Build a sentence",
        prompt: "Tap the words in order. Capital first.",
        layers: L(
          [
            { answer: "The cat sat.", tiles: ["The", "cat", "sat."] },
            { answer: "Mum has a hat.", tiles: ["Mum", "has", "a", "hat."] },
            { answer: "Dad can hop.", tiles: ["Dad", "can", "hop."] },
          ],
          [
            { answer: "The cat sat on the mat.", tiles: ["The", "cat", "sat", "on", "the", "mat."] },
            { answer: "A dog ran in the sun.", tiles: ["A", "dog", "ran", "in", "the", "sun."] },
            { answer: "I like my red bike.", tiles: ["I", "like", "my", "red", "bike."] },
          ],
          [
            {
              answer: "My favourite thing is my big bike.",
              tiles: ["My", "favourite", "thing", "is", "my", "big", "bike."],
            },
          ]
        ),
      },
      {
        id: "w1-write",
        kind: "write",
        title: "Write about your favourite thing",
        prompt: "Write sentences for this week's story.",
        rounds: [
          {
            prompt: "Write one sentence about something you like.",
            starters: ["I like ", "My favourite thing is "],
          },
          {
            prompt: "Write one sentence about an animal.",
            starters: ["The cat ", "A dog "],
          },
          {
            prompt: "Write one sentence about your family.",
            starters: ["Mum ", "Dad ", "My sister "],
          },
          {
            prompt: "Write one sentence about outside.",
            starters: ["The sun ", "I ran "],
          },
          {
            prompt: "Write one sentence about food.",
            starters: ["I eat ", "My lunch is "],
          },
        ],
      },
    ],
  },
  {
    id: "w2",
    week: 2,
    title: "Stop at the end",
    focus: "Full stops",
    story: {
      theme: "Lunch time",
      draftKey: "w2",
      wordBank: ["lunch", "sandwich", "apple", "water", "school", "eat", "drink"],
    },
    activities: [
      {
        id: "w2-story",
        kind: "story",
        title: "Read: Lunch time",
        prompt: "Read the story. Type the missing words in the gaps.",
        layers: L(
          [
            {
              passage: "Mum packed my {{lunch}}. I have a {{sandwich}} and an {{apple}}.",
            },
            {
              passage: "I {{eat}} my lunch at {{school}}. Then I {{drink}} some {{water}}.",
            },
          ],
          [
            {
              passage: "At lunch I sit with Sam. I {{eat}} my {{sandwich}}. Sam has an {{apple}}.",
            },
            {
              passage: "We {{stop}} when the bell rings. Then we pack the {{lunch}} bag.",
            },
          ],
          [
            {
              passage: "Mum {{packed}} my lunch. I {{eat}} the sandwich. I {{drink}} the water. Then we {{stop}}.",
            },
          ]
        ),
      },
      {
        id: "w2-spot",
        kind: "spot",
        title: "Spot the missing stop",
        prompt: "Tap what is wrong, then type the fix.",
        layers: L(
          [
            {
              parts: ["Mum", "packed", "my", "lunch"],
              brokenIndex: 3,
              fix: "lunch.",
            },
            {
              parts: ["The", "pig", "is", "in", "the", "mud"],
              brokenIndex: 5,
              fix: "mud.",
            },
          ],
          [
            {
              parts: ["i", "can", "hop", "and", "skip."],
              brokenIndex: 0,
              fix: "I",
            },
            {
              parts: ["Dad", "sat", "on", "the", "log"],
              brokenIndex: 4,
              fix: "log.",
            },
          ],
          [
            {
              parts: ["we", "stop", "at", "the", "red", "light"],
              brokenIndex: 0,
              fix: "We stop at the red light.",
            },
          ]
        ),
      },
      {
        id: "w2-build",
        kind: "build",
        title: "Put the full stop on",
        prompt: "Build the sentence. The last tile has the full stop.",
        layers: L(
          [
            { answer: "I can hop.", tiles: ["I", "can", "hop."] },
            { answer: "Mum packed lunch.", tiles: ["Mum", "packed", "lunch."] },
          ],
          [
            { answer: "I can hop on one foot.", tiles: ["I", "can", "hop", "on", "one", "foot."] },
            { answer: "We had lunch in the sun.", tiles: ["We", "had", "lunch", "in", "the", "sun."] },
          ],
          [
            {
              answer: "Mum packed my red lunch bag.",
              tiles: ["Mum", "packed", "my", "red", "lunch", "bag."],
            },
          ]
        ),
      },
      {
        id: "w2-write",
        kind: "write",
        title: "Write about lunch",
        prompt: "Two short sentences. Each needs a full stop.",
        rounds: [
          { prompt: "Write two short sentences about lunch.", starters: ["I ate ", "Then I "] },
          { prompt: "Write two short sentences about school.", starters: ["I went ", "My teacher "] },
          { prompt: "Write two short sentences about play.", starters: ["I played ", "My friend "] },
          { prompt: "Write two short sentences about home.", starters: ["At home I ", "Mum "] },
          { prompt: "Write two short sentences about a pet.", starters: ["My pet ", "It likes "] },
        ],
      },
    ],
  },
  {
    id: "w3",
    week: 3,
    title: "Who did what",
    focus: "Word order: who + did + what",
    story: {
      theme: "Someone did something",
      draftKey: "w3",
      wordBank: ["kicked", "jumped", "cooked", "played", "sister", "friend", "ball"],
    },
    activities: [
      {
        id: "w3-story",
        kind: "story",
        title: "Read: Someone did something",
        prompt: "Read the story. Type the missing words in the gaps.",
        layers: L(
          [
            {
              passage: "Sam {{kicked}} the {{ball}}. Mia {{jumped}} up high.",
            },
            {
              passage: "Dad {{cooked}} the fish. Mum {{read}} a book.",
            },
          ],
          [
            {
              passage: "My {{sister}} {{kicked}} the red ball. My {{friend}} {{played}} too.",
            },
            {
              passage: "The dog {{jumped}} over the log. Then it {{ran}} home.",
            },
          ],
          [
            {
              passage: "My sister {{kicked}} the ball. Dad {{cooked}} dinner. I {{played}} with my friend.",
            },
          ]
        ),
      },
      {
        id: "w3-build",
        kind: "build",
        title: "Who, then did, then what",
        prompt: "Start with who. Then the action. Then the rest.",
        layers: L(
          [
            { answer: "Mia ate the cake.", tiles: ["Mia", "ate", "the", "cake."] },
            { answer: "Sam kicked the ball.", tiles: ["Sam", "kicked", "the", "ball."] },
          ],
          [
            { answer: "Sam kicked the red ball.", tiles: ["Sam", "kicked", "the", "red", "ball."] },
            { answer: "Dad cooked the fish.", tiles: ["Dad", "cooked", "the", "fish."] },
            { answer: "Mum read a long book.", tiles: ["Mum", "read", "a", "long", "book."] },
          ],
          [
            {
              answer: "My sister kicked the red ball.",
              tiles: ["My", "sister", "kicked", "the", "red", "ball."],
            },
          ]
        ),
      },
      {
        id: "w3-expand",
        kind: "expand",
        title: "Add one detail",
        prompt: "Make the sentence fuller with one extra detail.",
        layers: L(
          [
            {
              seed: "Sam kicked the ball.",
              hint: "Add a colour or size word.",
              mustInclude: ["ball"],
              needCapital: true,
            },
            {
              seed: "Mia ate the cake.",
              hint: "Add a word like sweet or big.",
              mustInclude: ["cake"],
              needCapital: true,
            },
          ],
          [
            {
              seed: "Dad cooked the fish.",
              hint: "Add where or how.",
              mustInclude: ["fish"],
              needCapital: true,
            },
            {
              seed: "The bird sang a song.",
              hint: "Add a describing word for the bird or song.",
              mustInclude: ["sang"],
              needCapital: true,
            },
          ],
          [
            {
              seed: "Mum read a book.",
              hint: "Add two details: what kind of book, and where.",
              mustInclude: ["book"],
              needCapital: true,
            },
          ]
        ),
      },
      {
        id: "w3-write",
        kind: "write",
        title: "Tell who did what",
        prompt: "Write sentences about someone doing something.",
        rounds: [
          {
            prompt: "Write a sentence about a friend or family member doing something.",
            starters: ["Dad ", "My sister ", "My friend "],
          },
          {
            prompt: "Write a sentence about an animal doing something.",
            starters: ["The dog ", "A bird "],
          },
          {
            prompt: "Write a sentence about you doing something at school.",
            starters: ["I ", "We "],
          },
          {
            prompt: "Write a sentence about someone cooking or eating.",
            starters: ["Mum ", "Grandma "],
          },
          {
            prompt: "Write a sentence about someone playing a game.",
            starters: ["Sam ", "My brother "],
          },
        ],
      },
    ],
  },
  {
    id: "w4",
    week: 4,
    title: "Asking questions",
    focus: "Question marks and question words",
    story: {
      theme: "Questions I can ask",
      draftKey: "w4",
      wordBank: ["what", "where", "when", "who", "how", "can", "have"],
    },
    activities: [
      {
        id: "w4-story",
        kind: "story",
        title: "Read: Questions I can ask",
        prompt: "Read the story. Type the missing words in the gaps.",
        layers: L(
          [
            {
              passage: "{{What}} is for lunch? {{Where}} is my bag?",
            },
            {
              passage: "{{When}} can we play? {{Who}} has the ball?",
            },
          ],
          [
            {
              passage: "{{How}} do we start? {{Can}} I help? {{Have}} you seen my hat?",
            },
            {
              passage: "{{What}} are you playing? {{Where}} should I sit?",
            },
          ],
          [
            {
              passage: "{{What}} is for lunch? {{Where}} is my blue bag? {{Can}} I sit with you?",
            },
          ]
        ),
      },
      {
        id: "w4-choose",
        kind: "choose",
        title: "Pick the real question",
        prompt: "Which line asks and ends with ?",
        layers: L(
          [
            {
              question: "Which is a proper question?",
              choices: ["What time is dinner.", "What time is dinner?", "what time is dinner"],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "Which is a proper question?",
              choices: ["Where is my bag?", "Where is my bag.", "where is my bag?"],
              answerIndex: 0,
            },
            {
              question: "Which is a proper question?",
              choices: ["Can you help me.", "can you help me?", "Can you help me?"],
              answerIndex: 2,
            },
          ],
          [
            {
              question: "Which asks two clear questions?",
              choices: [
                "What are you playing. Do you want to sit.",
                "What are you playing? Do you want to sit with me?",
                "what are you playing? do you want to sit with me?",
              ],
              answerIndex: 1,
            },
          ]
        ),
      },
      {
        id: "w4-build",
        kind: "build",
        title: "Build a question",
        prompt: "Question word first. Question mark last.",
        layers: L(
          [
            { answer: "Where is my bag?", tiles: ["Where", "is", "my", "bag?"] },
            { answer: "What time is dinner?", tiles: ["What", "time", "is", "dinner?"] },
          ],
          [
            { answer: "Who took the red pen?", tiles: ["Who", "took", "the", "red", "pen?"] },
            { answer: "When can we go home?", tiles: ["When", "can", "we", "go", "home?"] },
          ],
          [{ answer: "Why is the door shut?", tiles: ["Why", "is", "the", "door", "shut?"] }]
        ),
      },
      {
        id: "w4-write",
        kind: "write",
        title: "Ask two questions",
        prompt: "Write questions you could really ask.",
        rounds: [
          {
            prompt: "Write two questions you could ask a friend at school.",
            starters: ["What ", "Where ", "Do you "],
          },
          {
            prompt: "Write two questions you could ask at home.",
            starters: ["When ", "Can ", "Who "],
          },
          {
            prompt: "Write two questions about a lost thing.",
            starters: ["Where is ", "Have you "],
          },
          { prompt: "Write two questions about food.", starters: ["What ", "Can we "] },
          { prompt: "Write two questions about a game.", starters: ["How ", "Who "] },
        ],
      },
    ],
  },
  {
    id: "w5",
    week: 5,
    title: "Tricky everyday words",
    focus: "Common spelling patterns",
    story: {
      theme: "Because I said so",
      draftKey: "w5",
      wordBank: ["because", "cold", "hungry", "late", "kind", "funny"],
    },
    activities: [
      {
        id: "w5-story",
        kind: "story",
        title: "Read: Because I said so",
        prompt: "Read the story. Type the missing words in the gaps.",
        layers: L(
          [
            {
              passage: "I wore a coat {{because}} it was {{cold}}.",
            },
            {
              passage: "I ate an apple {{because}} I was {{hungry}}.",
            },
          ],
          [
            {
              passage: "I was {{late}} {{because}} the bus was full.",
            },
            {
              passage: "I like my friend {{because}} she is {{kind}}.",
            },
          ],
          [
            {
              passage: "I like this book {{because}} the ending is {{funny}}. I was late {{because}} the bus was full.",
            },
          ]
        ),
      },
      {
        id: "w5-spot",
        kind: "spot",
        title: "Spot the tricky spelling",
        prompt: "Tap the wrong word, then type the fix.",
        layers: L(
          [
            { parts: ["They", "sed", "hello."], brokenIndex: 1, fix: "said" },
            { parts: ["Go", "over", "their."], brokenIndex: 2, fix: "there." },
          ],
          [
            { parts: ["I", "like", "it", "becos", "it", "is", "fun."], brokenIndex: 3, fix: "because" },
            { parts: ["My", "frend", "went", "home."], brokenIndex: 1, fix: "friend" },
          ],
          [
            {
              parts: ["Peple", "were", "happy", "because", "we", "won."],
              brokenIndex: 0,
              fix: "People",
            },
          ]
        ),
      },
      {
        id: "w5-build",
        kind: "build",
        title: "Use because",
        prompt: "Build a sentence that gives a reason.",
        layers: L(
          [
            {
              answer: "I like it because it is fun.",
              tiles: ["I", "like", "it", "because", "it", "is", "fun."],
            },
          ],
          [
            {
              answer: "I wore a coat because it was cold.",
              tiles: ["I", "wore", "a", "coat", "because", "it", "was", "cold."],
            },
            {
              answer: "They said they were going there.",
              tiles: ["They", "said", "they", "were", "going", "there."],
            },
          ],
          [
            {
              answer: "People were happy because we won.",
              tiles: ["People", "were", "happy", "because", "we", "won."],
            },
          ]
        ),
      },
      {
        id: "w5-write",
        kind: "write",
        title: "Give a reason",
        prompt: "Write sentences that use because.",
        rounds: [
          {
            prompt: "Write a sentence that uses because.",
            starters: ["I like this book because ", "I was happy because "],
          },
          {
            prompt: "Write a sentence about the weather using because.",
            starters: ["I wore a coat because ", "We stayed in because "],
          },
          {
            prompt: "Write a sentence about a friend using because.",
            starters: ["I like my friend because ", "We played because "],
          },
          {
            prompt: "Write a sentence about school using because.",
            starters: ["I was late because ", "I like school because "],
          },
          {
            prompt: "Write a sentence about food using because.",
            starters: ["I ate it because ", "I do not like it because "],
          },
        ],
      },
    ],
  },
  {
    id: "w6",
    week: 6,
    title: "Join two ideas",
    focus: "and, but, so",
    story: {
      theme: "Two ideas, one line",
      draftKey: "w6",
      wordBank: ["and", "but", "so", "wanted", "packed", "home"],
    },
    activities: [
      {
        id: "w6-story",
        kind: "story",
        title: "Read: Two ideas, one line",
        prompt: "Read the story. Type the missing words in the gaps.",
        layers: L(
          [
            {
              passage: "I {{wanted}} to play {{but}} I had to pack.",
            },
            {
              passage: "It was late {{so}} we went {{home}}.",
            },
          ],
          [
            {
              passage: "We {{packed}} fruit {{and}} we packed water.",
            },
            {
              passage: "I like swimming {{but}} the water was cold.",
            },
          ],
          [
            {
              passage: "Today I read a book {{and}} I drew a picture. It was late {{so}} we went home.",
            },
          ]
        ),
      },
      {
        id: "w6-choose",
        kind: "choose",
        title: "Choose the join",
        prompt: "Which joining word fits the meaning?",
        layers: L(
          [
            {
              question: "I wanted to play ___ I had jobs.",
              choices: ["and", "but", "so"],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "It was late ___ we went home.",
              choices: ["but", "so", "and"],
              answerIndex: 1,
            },
            {
              question: "We packed fruit ___ we packed water.",
              choices: ["and", "but", "so"],
              answerIndex: 0,
            },
          ],
          [
            {
              question: "The bag was heavy ___ I carried it.",
              choices: ["so", "and", "but"],
              answerIndex: 2,
            },
          ]
        ),
      },
      {
        id: "w6-build",
        kind: "build",
        title: "Join two ideas",
        prompt: "Build one sentence with and, but, or so.",
        layers: L(
          [
            {
              answer: "Sam ran and Mia jumped.",
              tiles: ["Sam", "ran", "and", "Mia", "jumped."],
            },
          ],
          [
            {
              answer: "I wanted to play but I had jobs.",
              tiles: ["I", "wanted", "to", "play", "but", "I", "had", "jobs."],
            },
            {
              answer: "It was late so we went home.",
              tiles: ["It", "was", "late", "so", "we", "went", "home."],
            },
          ],
          [
            {
              answer: "The bag was heavy but I carried it.",
              tiles: ["The", "bag", "was", "heavy", "but", "I", "carried", "it."],
            },
          ]
        ),
      },
      {
        id: "w6-write",
        kind: "write",
        title: "Two ideas, one line",
        prompt: "Write sentences that join two ideas.",
        rounds: [
          { prompt: "Write one sentence that uses and or but.", starters: ["I wanted to ", "We went to "] },
          {
            prompt: "Write one sentence that uses so.",
            starters: ["It was late so ", "I was hungry so "],
          },
          {
            prompt: "Write one sentence that uses but.",
            starters: ["I like swimming but ", "The bag was heavy but "],
          },
          { prompt: "Write one sentence that uses and.", starters: ["We packed ", "Mum "] },
          {
            prompt: "Write one sentence that joins two things you did today.",
            starters: ["Today I ", "After school I "],
          },
        ],
      },
    ],
  },
  {
    id: "w7",
    week: 7,
    title: "Paint with adjectives",
    focus: "Describing words",
    story: {
      theme: "A place I can see",
      draftKey: "w7",
      wordBank: ["green", "quiet", "tiny", "soft", "bright", "huge", "loud"],
    },
    activities: [
      {
        id: "w7-story",
        kind: "story",
        title: "Read: A place I can see",
        prompt: "Read the story. Type the missing words in the gaps.",
        layers: L(
          [
            {
              passage: "The park was {{green}} and {{quiet}}. I saw a {{tiny}} bird.",
            },
            {
              passage: "My room is {{small}} and {{bright}}. I have a {{soft}} lamp.",
            },
          ],
          [
            {
              passage: "The animal was {{huge}} and grey. The sky was {{dark}} and {{loud}}.",
            },
            {
              passage: "The food was {{hot}} and sweet. The wind pushed the trees.",
            },
          ],
          [
            {
              passage: "The park was {{green}} and {{quiet}}. I saw a {{tiny}} bird in the tree.",
            },
          ]
        ),
      },
      {
        id: "w7-expand",
        kind: "expand",
        title: "Paint the sentence",
        prompt: "Add a describing word to the short sentence.",
        layers: L(
          [
            {
              seed: "The dog ran in the park.",
              hint: "Add a colour or size for the dog.",
              mustInclude: ["dog"],
              needCapital: true,
            },
            {
              seed: "The bird sat in the tree.",
              hint: "Add tiny, loud, or pretty.",
              mustInclude: ["bird"],
              needCapital: true,
            },
          ],
          [
            {
              seed: "A car went down the road.",
              hint: "Add red, fast, or huge.",
              mustInclude: ["car"],
              needCapital: true,
            },
            {
              seed: "Waves hit the sand.",
              hint: "Add huge or cold.",
              mustInclude: ["waves"],
              needCapital: true,
            },
          ],
          [
            {
              seed: "The park was quiet.",
              hint: "Add another describing word and one thing you saw.",
              mustInclude: ["park"],
              needCapital: true,
            },
          ]
        ),
      },
      {
        id: "w7-build",
        kind: "build",
        title: "Add a describing word",
        prompt: "Build a sentence with a clear picture.",
        layers: L(
          [
            {
              answer: "The tiny frog hid.",
              tiles: ["The", "tiny", "frog", "hid."],
            },
          ],
          [
            {
              answer: "The tiny frog hid under a leaf.",
              tiles: ["The", "tiny", "frog", "hid", "under", "a", "leaf."],
            },
            {
              answer: "A loud bird sat on the fence.",
              tiles: ["A", "loud", "bird", "sat", "on", "the", "fence."],
            },
          ],
          [
            {
              answer: "The huge wave crashed on the sand.",
              tiles: ["The", "huge", "wave", "crashed", "on", "the", "sand."],
            },
          ]
        ),
      },
      {
        id: "w7-write",
        kind: "write",
        title: "Describe a place",
        prompt: "Write two sentences. Use describing words.",
        rounds: [
          {
            prompt: "Write two sentences about a park, beach, or backyard.",
            starters: ["The park was ", "I saw a "],
          },
          { prompt: "Write two sentences about your room.", starters: ["My room is ", "I have a "] },
          { prompt: "Write two sentences about a meal.", starters: ["The food was ", "I tasted "] },
          {
            prompt: "Write two sentences about an animal.",
            starters: ["The animal was ", "It had "],
          },
          { prompt: "Write two sentences about the weather.", starters: ["The sky was ", "The wind "] },
        ],
      },
    ],
  },
  {
    id: "w8",
    week: 8,
    title: "A paragraph has a job",
    focus: "Topic sentence first",
    story: {
      theme: "My weekend",
      draftKey: "w8",
      wordBank: ["weekend", "grandma", "visited", "soccer", "library", "detail"],
    },
    activities: [
      {
        id: "w8-story",
        kind: "story",
        title: "Read: My weekend",
        prompt: "Read the story. Type the missing words in the gaps.",
        layers: L(
          [
            {
              passage: "On the {{weekend}} I {{visited}} Grandma.",
            },
            {
              passage: "The best part was baking. We made a {{cake}} together.",
            },
          ],
          [
            {
              passage: "My favourite sport is {{soccer}}. We run on the field.",
            },
            {
              passage: "I like the {{library}}. There I look for animal books.",
            },
          ],
          [
            {
              passage: "On the {{weekend}} I {{visited}} Grandma. Then we went to the {{library}}.",
            },
          ]
        ),
      },
      {
        id: "w8-choose",
        kind: "choose",
        title: "Pick the strong topic sentence",
        prompt: "Which first sentence names the topic clearly?",
        layers: L(
          [
            {
              question: "Which is a strong start?",
              choices: ["it was stuff", "The school fete was busy and fun.", "things happened"],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "Which is a strong start?",
              choices: ["things happened", "Saturday is my favourite day.", "it was ok"],
              answerIndex: 1,
            },
            {
              question: "Which is a strong start?",
              choices: ["we did things", "Making pancakes is easy.", "it was good"],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "Best topic sentence for a weekend paragraph?",
              choices: [
                "On the weekend I visited Grandma.",
                "stuff happened",
                "then we had chips",
              ],
              answerIndex: 0,
            },
          ]
        ),
      },
      {
        id: "w8-arrange",
        kind: "arrange",
        title: "Topic first",
        prompt: "Put the paragraph in order. Topic sentence first.",
        layers: L(
          [
            {
              sentences: [
                "Saturday is my favourite day.",
                "I play outside in the morning.",
                "After lunch we visit Grandma.",
                "I always go to bed happy.",
              ],
            },
          ],
          [
            {
              sentences: [
                "The school fete was busy and fun.",
                "I won a prize at the lucky dip.",
                "We ate hot chips on the grass.",
                "I hope we have another fete soon.",
              ],
            },
          ],
          [
            {
              sentences: [
                "My bedroom is a quiet place.",
                "I keep my books on a low shelf.",
                "A soft lamp sits by the bed.",
                "I like to read there at night.",
              ],
            },
          ]
        ),
      },
      {
        id: "w8-write",
        kind: "write",
        title: "Start a paragraph",
        prompt: "Topic sentence, then a detail.",
        rounds: [
          {
            prompt: "Write a topic sentence about your weekend, then one extra sentence with a detail.",
            starters: ["On the weekend I ", "The best part was "],
          },
          {
            prompt: "Write a topic sentence about school, then one detail.",
            starters: ["School is ", "In class we "],
          },
          {
            prompt: "Write a topic sentence about a sport, then one detail.",
            starters: ["My favourite sport is ", "We "],
          },
          {
            prompt: "Write a topic sentence about a pet or animal, then one detail.",
            starters: ["My pet is ", "It likes "],
          },
          {
            prompt: "Write a topic sentence about a place you like, then one detail.",
            starters: ["I like going to ", "There I "],
          },
        ],
      },
    ],
  },
  {
    id: "w9",
    week: 9,
    title: "Add the middle",
    focus: "Supporting sentences",
    story: {
      theme: "A trip with details",
      draftKey: "w9",
      wordBank: ["trip", "first", "then", "zoo", "lions", "monkeys"],
    },
    activities: [
      {
        id: "w9-story",
        kind: "story",
        title: "Read: A trip with details",
        prompt: "Read the story. Type the missing words in the gaps.",
        layers: L(
          [
            {
              passage: "We went on a {{trip}} to the {{zoo}}.",
            },
            {
              passage: "{{First}} we watched the {{lions}}. {{Then}} we saw the {{monkeys}}.",
            },
          ],
          [
            {
              passage: "First the lions were resting. Then the {{monkeys}} jumped for bananas.",
            },
            {
              passage: "We packed water. {{First}} we ate lunch. {{Then}} we walked home.",
            },
          ],
          [
            {
              passage: "We went to the {{zoo}}. {{First}} we watched the {{lions}}. {{Then}} the {{monkeys}} jumped.",
            },
          ]
        ),
      },
      {
        id: "w9-expand",
        kind: "expand",
        title: "Turn a jumble into a detail",
        prompt: "Write one clear supporting sentence.",
        layers: L(
          [
            {
              seed: "The monkeys jumped.",
              hint: "Add what they ate or where.",
              mustInclude: ["monkeys"],
              needCapital: true,
            },
          ],
          [
            {
              seed: "First we mixed.",
              hint: "Add flour, milk or eggs.",
              mustInclude: ["First"],
              needCapital: true,
            },
            {
              seed: "Then we cooked them.",
              hint: "Add in a pan.",
              mustInclude: ["Then"],
              needCapital: true,
            },
          ],
          [
            {
              seed: "We went to the zoo.",
              hint: "Add what you saw first.",
              mustInclude: ["zoo"],
              needCapital: true,
            },
          ]
        ),
      },
      {
        id: "w9-arrange",
        kind: "arrange",
        title: "Keep the details together",
        prompt: "Main idea, then details, then a close.",
        layers: L(
          [
            {
              sentences: [
                "Making pancakes is easy.",
                "First we mix flour, milk and eggs.",
                "Then we cook them in a pan.",
                "Soon the kitchen smells wonderful.",
              ],
            },
          ],
          [
            {
              sentences: [
                "The zoo was full of noise.",
                "First we watched the lions rest.",
                "Then the monkeys jumped for bananas.",
                "I did not want to leave.",
              ],
            },
          ],
          [
            {
              sentences: [
                "Our garden needs care every week.",
                "We water the tomatoes in the morning.",
                "We pull weeds after school.",
                "The plants look greener each day.",
              ],
            },
          ]
        ),
      },
      {
        id: "w9-write",
        kind: "write",
        title: "Three sentences",
        prompt: "Topic, then two details.",
        rounds: [
          {
            prompt: "Write three sentences about a trip.",
            starters: ["We went to ", "First we ", "Then we "],
          },
          {
            prompt: "Write three sentences about cooking.",
            starters: ["We made ", "First we ", "Then we "],
          },
          { prompt: "Write three sentences about a game.", starters: ["We played ", "First ", "Then "] },
          {
            prompt: "Write three sentences about a class job.",
            starters: ["In class we ", "First ", "After that "],
          },
          {
            prompt: "Write three sentences about a visit.",
            starters: ["We visited ", "When we arrived ", "Then "],
          },
        ],
      },
    ],
  },
  {
    id: "w10",
    week: 10,
    title: "Finish the thought",
    focus: "Closing sentences",
    story: {
      theme: "Something I made",
      draftKey: "w10",
      wordBank: ["made", "card", "paper", "proud", "helped", "felt"],
    },
    activities: [
      {
        id: "w10-story",
        kind: "story",
        title: "Read: Something I made",
        prompt: "Read the story. Type the missing words in the gaps.",
        layers: L(
          [
            {
              passage: "I {{made}} a {{card}} for Mum. I used blue {{paper}}.",
            },
            {
              passage: "I {{helped}} Dad wash the car. I felt {{proud}}.",
            },
          ],
          [
            {
              passage: "I made a bird from paper. Then I painted the wings. I {{felt}} happy.",
            },
            {
              passage: "We {{made}} pancakes. I {{helped}} mix the eggs.",
            },
          ],
          [
            {
              passage: "I {{made}} a {{card}} with gold stars. I {{felt}} {{proud}} when Mum smiled.",
            },
          ]
        ),
      },
      {
        id: "w10-choose",
        kind: "choose",
        title: "Pick the closing sentence",
        prompt: "Which ending wraps up the same topic?",
        layers: L(
          [
            {
              question: "Topic: growing beans. Which close fits?",
              choices: [
                "Then we played football and had chips.",
                "I loved watching our beans grow.",
                "Pizza is my favourite dinner.",
              ],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "Topic: a card for Mum. Which close fits?",
              choices: [
                "I felt proud when I gave it to her.",
                "Then I wanted pizza and a movie.",
                "Soccer is loud.",
              ],
              answerIndex: 0,
            },
          ],
          [
            {
              question: "Topic: singing in a concert. Which close fits?",
              choices: [
                "Later we bought new shoes.",
                "I felt brave when I sang my line.",
                "Then we went to the shops.",
              ],
              answerIndex: 1,
            },
          ]
        ),
      },
      {
        id: "w10-arrange",
        kind: "arrange",
        title: "Find the ending",
        prompt: "The last sentence should wrap up the idea.",
        layers: L(
          [
            {
              sentences: [
                "Our class grew beans in cups.",
                "We watered them every morning.",
                "Green shoots came up in a week.",
                "It was exciting to watch them grow.",
              ],
            },
          ],
          [
            {
              sentences: [
                "I made a card for Mum.",
                "I used blue paper and gold stars.",
                "I wrote a short message inside.",
                "I felt proud when I gave it to her.",
              ],
            },
          ],
          [
            {
              sentences: [
                "The concert was in the hall.",
                "We practised the song for weeks.",
                "Families sat in long rows.",
                "I felt brave when I sang my line.",
              ],
            },
          ]
        ),
      },
      {
        id: "w10-write",
        kind: "write",
        title: "Write and close",
        prompt: "Write a short paragraph. End with how you felt.",
        rounds: [
          {
            prompt: "Write a short paragraph about something you made. End with how you felt.",
            starters: ["I made ", "I used ", "At the end I felt "],
          },
          {
            prompt: "Write a short paragraph about helping at home. End with how you felt.",
            starters: ["I helped ", "I ", "I felt "],
          },
          {
            prompt: "Write a short paragraph about a game you played. End with how you felt.",
            starters: ["We played ", "Then ", "I felt "],
          },
          {
            prompt: "Write a short paragraph about a class project. End with how you felt.",
            starters: ["Our class ", "We ", "I felt "],
          },
          {
            prompt: "Write a short paragraph about a surprise. End with how you felt.",
            starters: ["I was surprised when ", "Then ", "I felt "],
          },
        ],
      },
    ],
  },
  {
    id: "w11",
    week: 11,
    title: "Stay on the topic",
    focus: "Keeping sentences together",
    story: {
      theme: "One topic only",
      draftKey: "w11",
      wordBank: ["topic", "hen", "soccer", "library", "grandma", "pancakes"],
    },
    activities: [
      {
        id: "w11-story",
        kind: "story",
        title: "Read: One topic only",
        prompt: "Read the story. Type the missing words in the gaps.",
        layers: L(
          [
            {
              passage: "The animal I chose is a {{hen}}. It lives in our backyard.",
            },
            {
              passage: "The game I chose is {{soccer}}. You kick a ball into a net.",
            },
          ],
          [
            {
              passage: "The place I chose is the {{library}}. It feels calm and happy.",
            },
            {
              passage: "The person I chose is {{Grandma}}. They bake lemon cake with me.",
            },
          ],
          [
            {
              passage: "I chose {{pancakes}}. They taste sweet with lemon. I eat them on a slow Saturday. No other {{topic}} sneaks in.",
            },
          ]
        ),
      },
      {
        id: "w11-spot",
        kind: "spot",
        title: "Cut the stray idea",
        prompt: "Tap the extra idea, then type the clean sentence.",
        layers: L(
          [
            {
              parts: ["I", "love", "reading", "at", "night", "and", "also", "soccer", "is", "loud."],
              brokenIndex: 5,
              fix: "I love reading at night.",
            },
          ],
          [
            {
              parts: ["My", "bike", "is", "red", "and", "pizza", "is", "my", "favourite."],
              brokenIndex: 4,
              fix: "My bike is red.",
            },
          ],
          [
            {
              parts: ["The", "beach", "was", "windy", "and", "my", "maths", "book", "is", "missing."],
              brokenIndex: 4,
              fix: "The beach was windy.",
            },
          ]
        ),
      },
      {
        id: "w11-arrange",
        kind: "arrange",
        title: "Drop the stray sentence",
        prompt: "Put the sentences that belong. Leave the stray unused.",
        layers: L(
          [
            {
              sentences: [
                "My bike is red and shiny.",
                "I ride it to the shops with Mum.",
                "We always wear our helmets.",
                "Pizza is my favourite dinner.",
              ],
              answerOrder: [
                "My bike is red and shiny.",
                "I ride it to the shops with Mum.",
                "We always wear our helmets.",
              ],
            },
          ],
          [
            {
              sentences: [
                "I love reading at night.",
                "My lamp makes a warm circle of light.",
                "The cat curls up on the quilt.",
                "Soccer practice is on Thursday.",
              ],
              answerOrder: [
                "I love reading at night.",
                "My lamp makes a warm circle of light.",
                "The cat curls up on the quilt.",
              ],
            },
          ],
          [
            {
              sentences: [
                "The beach was windy and bright.",
                "We jumped over the cold waves.",
                "Sand stuck to our wet legs.",
                "My maths book is in my bag.",
              ],
              answerOrder: [
                "The beach was windy and bright.",
                "We jumped over the cold waves.",
                "Sand stuck to our wet legs.",
              ],
            },
          ]
        ),
      },
      {
        id: "w11-write",
        kind: "write",
        title: "One topic only",
        prompt: "Three sentences. Do not change topic.",
        rounds: [
          {
            prompt: "Write three sentences about one animal. Do not change topic.",
            starters: ["The animal I chose is ", "It lives ", "It likes to "],
          },
          {
            prompt: "Write three sentences about one game. Do not change topic.",
            starters: ["The game I chose is ", "You ", "I like it because "],
          },
          {
            prompt: "Write three sentences about one place. Do not change topic.",
            starters: ["The place I chose is ", "There I ", "It feels "],
          },
          {
            prompt: "Write three sentences about one person. Do not change topic.",
            starters: ["The person I chose is ", "They ", "I like them because "],
          },
          {
            prompt: "Write three sentences about one food. Do not change topic.",
            starters: ["The food I chose is ", "It tastes ", "I eat it when "],
          },
        ],
      },
    ],
  },
  {
    id: "w12",
    week: 12,
    title: "A whole little paragraph",
    focus: "Put it all together",
    story: {
      theme: "A day I remember",
      draftKey: "w12",
      wordBank: ["remember", "beach", "library", "brave", "proud", "calm"],
    },
    activities: [
      {
        id: "w12-story",
        kind: "story",
        title: "Read: A day I remember",
        prompt: "Read the story. Type the missing words in the gaps.",
        layers: L(
          [
            {
              passage: "I {{remember}} a hot day at the {{beach}}.",
            },
            {
              passage: "First we put down a big towel. Then the waves were huge.",
            },
          ],
          [
            {
              passage: "I love the {{library}}. I feel {{calm}} when I leave with a story.",
            },
            {
              passage: "I made a bird from paper. I felt {{proud}} when it stood up.",
            },
          ],
          [
            {
              passage: "I {{remember}} the {{beach}}. The waves were huge. I felt {{brave}} when I jumped in.",
            },
          ]
        ),
      },
      {
        id: "w12-arrange",
        kind: "arrange",
        title: "Build the full paragraph",
        prompt: "Topic, two details, then a close.",
        layers: L(
          [
            {
              sentences: [
                "The library is a quiet, happy place.",
                "I look for books about animals.",
                "Sometimes the librarian helps me choose.",
                "I always leave with a new story.",
              ],
            },
          ],
          [
            {
              sentences: [
                "I remember a hot day at the beach.",
                "First we put down a big towel.",
                "Then the waves were huge.",
                "I felt brave when I jumped in.",
              ],
            },
          ],
          [
            {
              sentences: [
                "Rainy Saturdays can be the nicest.",
                "We bake biscuits and play cards.",
                "The windows steam up while we talk.",
                "I go to bed warm and full.",
              ],
            },
          ]
        ),
      },
      {
        id: "w12-spot",
        kind: "spot",
        title: "Polish the paragraph",
        prompt: "Tap the broken bit, then type the fix.",
        layers: L(
          [
            {
              parts: ["we", "went", "to", "the", "beach", "becos", "it", "was", "hot."],
              brokenIndex: 0,
              fix: "We went to the beach because it was hot.",
            },
          ],
          [
            {
              parts: ["my", "frend", "sed", "we", "should", "go", "over", "their."],
              brokenIndex: 0,
              fix: "My friend said we should go over there.",
            },
          ],
          [
            {
              parts: ["peple", "were", "happy", "becos", "we", "won."],
              brokenIndex: 0,
              fix: "People were happy because we won.",
            },
          ]
        ),
      },
      {
        id: "w12-write",
        kind: "write",
        title: "Your own paragraph",
        prompt: "Four sentences. Topic, details, feeling.",
        rounds: [
          {
            prompt: "Write a paragraph of 4 sentences about a day you remember.",
            starters: ["I remember ", "First ", "Then ", "I felt "],
          },
          {
            prompt: "Write a paragraph of 4 sentences about a place you love.",
            starters: ["I love ", "There I ", "I also ", "I feel "],
          },
          {
            prompt: "Write a paragraph of 4 sentences about making something.",
            starters: ["I made ", "I used ", "Then I ", "I felt "],
          },
          {
            prompt: "Write a paragraph of 4 sentences about a person who helps you.",
            starters: ["Someone who helps me is ", "They ", "One day ", "I feel "],
          },
          {
            prompt: "Write a paragraph of 4 sentences about an animal.",
            starters: ["The animal I chose is ", "It lives ", "It likes ", "I think "],
          },
        ],
      },
    ],
  },
];
