function L(warm, practice, boss) {
  return [
    { id: "warm", label: "Warm-up", needCorrect: 2, rounds: warm },
    { id: "practice", label: "Practice", needCorrect: 2, rounds: practice },
    { id: "boss", label: "Boss", needCorrect: 1, rounds: boss },
  ];
}

let CURRICULUM = [
  {
    id: "w1",
    week: 1,
    title: "A sentence needs a start",
    focus: "Capital letters at the beginning",
    story: {
      theme: "My favourite thing",
      text: "I have a cat and a dog. They like to run in the sun. Mum has a hat. Dad sits on the mat. I like my red bike. It is big and fun. Mum and Dad watch me ride. The dog runs with us. My favourite thing is my bike.",
      draftKey: "w1",
      wordBank: ["favourite", "thing", "like", "bike", "cat", "dog", "mum", "dad"],
    },
    activities: [
      {
        id: "w1-story",
        kind: "story",
        title: "Read: My favourite thing",
        prompt: "Read the story. Notice how the words are ordered, then fill the gaps.",
        layers: L(
          [
            {
              passage: "I have a {{cat}}. I also have a {{dog}}. They like to {{run}} in the {{sun}}.",
              tip: "Each sentence starts with a capital (I, They). Who comes first, then what they do: they like to run.",
            },
            {
              passage: "Mum has a {{hat}}. Dad sits on the {{mat}}. The cat does a little {{hop}}.",
              tip: "Names like Mum and Dad start with a capital. Who + has/sits/does + the thing.",
            },
          ],
          [
            {
              passage: "I {{like}} my {{red}} {{bike}}. It is {{big}} and fun.",
              tip: "Who (I) then the action (like). Describing words sit before the noun: red bike, not bike red.",
            },
            {
              passage: "{{Mum}} and {{dad}} watch me. The {{dog}} runs {{with}} us.",
              tip: "A name at the start needs a capital. Who does the action: the dog runs.",
            },
          ],
          [
            {
              passage: "My {{favourite}} {{thing}} is my bike. I {{like}} to ride it {{with}} Mum and Dad.",
              tip: "favourite thing: the describing word comes before the noun. Then who (I) + action (like).",
            },
          ]
        ),
      },
      {
        id: "w1-choose",
        kind: "choose",
        title: "Capital  and who first",
        prompt: "Pick the sentence that starts big and keeps who before the action.",
        layers: L(
          [
            {
              question: "Which one is right?",
              choices: ["the cat sat down.", "The cat sat down.", "the Cat sat down."],
              answerIndex: 1,
            },
            {
              question: "Which has who then did?",
              choices: ["sat the cat.", "The cat sat.", "The sat cat."],
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
              question: "Which keeps who before the action?",
              choices: ["Mia ate the cake.", "The cake ate Mia.", "ate Mia the cake."],
              answerIndex: 0,
            },
          ],
          [
            {
              question: "Best start for a clear sentence?",
              choices: [
                "my favourite thing is my red bike.",
                "My favourite thing is my red bike.",
                "is my favourite thing my red bike.",
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
        prompt: "Tap who first, then the action. Capital on the first word.",
        layers: L(
          [
            { answer: "The cat sat.", tiles: ["sat.", "The", "cat"] },
            { answer: "Mum has a hat.", tiles: ["has", "a", "hat.", "Mum"] },
            { answer: "Dad can hop.", tiles: ["can", "hop.", "Dad"] },
          ],
          [
            { answer: "The cat sat on the mat.", tiles: ["sat", "on", "the", "mat.", "The", "cat"] },
            { answer: "A dog ran in the sun.", tiles: ["ran", "in", "the", "sun.", "A", "dog"] },
            { answer: "I like my red bike.", tiles: ["like", "my", "red", "bike.", "I"] },
          ],
          [
            {
              answer: "My favourite thing is my big bike.",
              tiles: ["is", "my", "big", "bike.", "My", "favourite", "thing"],
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
      text: "Mum packed my lunch. I have a sandwich and an apple. I eat my lunch at school. Then I drink some water. At lunch I sit with Sam. Sam has an apple too. We stop when the bell rings. Then we pack the lunch bag.",
      draftKey: "w2",
      wordBank: ["lunch", "sandwich", "apple", "water", "school", "eat", "drink"],
    },
    activities: [
      {
        id: "w2-story",
        kind: "story",
        title: "Read: Lunch time",
        prompt: "Read the story. Notice how the words are ordered, then fill the gaps.",
        layers: L(
          [
            {
              passage: "Mum packed my {{lunch}}. I have a {{sandwich}} and an {{apple}}.",
              tip: "Who + action + what: Mum packed lunch. A full stop ends each finished thought.",
            },
            {
              passage: "I {{eat}} my lunch at {{school}}. Then I {{drink}} some {{water}}.",
              tip: "Who (I) then the action (eat, drink). Then where or what. Two thoughts = two full stops.",
            },
          ],
          [
            {
              passage: "At lunch I sit with Sam. I {{eat}} my {{sandwich}}. Sam has an {{apple}}.",
              tip: "Action after who: I eat. The thing comes after the action: eat my sandwich.",
            },
            {
              passage: "We {{stop}} when the bell rings. Then we pack the {{lunch}} bag.",
              tip: "lunch bag: the describing word (lunch) sits before the noun (bag). stop is the action.",
            },
          ],
          [
            {
              passage: "Mum {{packed}} my lunch. I {{eat}} the sandwich. I {{drink}} the water. Then we {{stop}}.",
              tip: "Who + action in each sentence. Each thought ends with a full stop before the next capital.",
            },
          ]
        ),
      },
      {
        id: "w2-spot",
        kind: "spot",
        title: "Spot the missing piece",
        prompt: "Tap what is wrong, then type the fix. Watch for stops  and missing who.",
        layers: L(
          [
            {
              parts: ["Mum", "packed", "my", "lunch"],
              brokenIndex: 3,
              fix: "lunch.",
            },
            {
              parts: ["Kicked", "the", "ball."],
              brokenIndex: 0,
              fix: "Sam kicked the ball.",
              explain: "Kicked has no who. Put who first: Sam kicked the ball.",
            },
          ],
          [
            {
              parts: ["i", "can", "hop", "and", "skip."],
              brokenIndex: 0,
              fix: "I",
            },
            {
              parts: ["Packed", "my", "lunch."],
              brokenIndex: 0,
              fix: "Mum packed my lunch.",
              explain: "Packed my lunch is only the action. Add who: Mum packed",
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
        prompt: "Build who + did, then end with the stop tile.",
        layers: L(
          [
            { answer: "I can hop.", tiles: ["can", "hop.", "I"] },
            { answer: "Mum packed lunch.", tiles: ["packed", "lunch.", "Mum"] },
          ],
          [
            { answer: "I can hop on one foot.", tiles: ["can", "hop", "on", "one", "foot.", "I"] },
            { answer: "We had lunch in the sun.", tiles: ["had", "lunch", "in", "the", "sun.", "We"] },
          ],
          [
            {
              answer: "Mum packed my red lunch bag.",
              tiles: ["packed", "my", "red", "lunch", "bag.", "Mum"],
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
      text: "The nurse washed her hands. Everyone cheered at the game. My twin spilled the juice. A bee landed on the flower. Sam kicked the ball. The team won. Then I waved to Mum.",
      draftKey: "w3",
      wordBank: ["nurse", "cheered", "twin", "spilled", "bee", "team", "waved"],
    },
    activities: [
      {
        id: "w3-story",
        kind: "story",
        title: "Read: Someone did something",
        prompt: "Read the story. Notice who comes first, then fill the gaps.",
        layers: L(
          [
            {
              passage: "The {{nurse}} washed her hands. {{Everyone}} cheered at the game.",
              tip: "Who first: the nurse, Everyone. Then the action: washed, cheered.",
            },
            {
              passage: "My {{twin}} spilled the juice. A {{bee}} landed on the flower.",
              tip: "Who (twin, bee) then did (spilled, landed). The thing comes after the action.",
            },
          ],
          [
            {
              passage: "Sam {{kicked}} the ball. The {{team}} won.",
              tip: "Keep who before the action. Not: the ball kicked Sam.",
            },
            {
              passage: "Then I {{waved}} to Mum. The dog {{ran}} home.",
              tip: "I and The dog are who. waved and ran are the doing words.",
            },
          ],
          [
            {
              passage: "The {{nurse}} washed her hands. My {{twin}} spilled the juice. {{Everyone}} cheered.",
              tip: "Different kinds of who: a job (nurse), a person (twin), a group (Everyone).",
            },
          ]
        ),
      },
      {
        id: "w3-choose",
        kind: "choose",
        title: "Who then did â€” or incomplete?",
        prompt: "Pick the line with who before the action. Spot unfinished thoughts too.",
        layers: L(
          [
            {
              question: "Which has who then did?",
              choices: ["Mia ate the cake.", "The cake ate Mia.", "ate Mia the cake."],
              answerIndex: 0,
            },
            {
              question: "Which is a full sentence?",
              choices: ["Kicked the ball.", "Sam kicked the ball.", "the ball"],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "Which keeps who first?",
              choices: ["jumped the dog.", "The dog jumped.", "The jumped dog."],
              answerIndex: 1,
            },
            {
              question: "Which is unfinished (no who)?",
              choices: ["The nurse washed her hands.", "Opened the quiet door.", "Everyone cheered."],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "Best clear sentence?",
              choices: [
                "the juice spilled my twin.",
                "My twin spilled the juice.",
                "spilled the juice my twin.",
              ],
              answerIndex: 1,
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
            { answer: "The nurse washed her hands.", tiles: ["washed", "her", "hands.", "The", "nurse"] },
            { answer: "Everyone cheered.", tiles: ["cheered.", "Everyone"] },
          ],
          [
            { answer: "My twin spilled the juice.", tiles: ["spilled", "the", "juice.", "My", "twin"] },
            { answer: "A bee landed on the flower.", tiles: ["landed", "on", "the", "flower.", "A", "bee"] },
            { answer: "The team won the game.", tiles: ["won", "the", "game.", "The", "team"] },
          ],
          [
            {
              answer: "I waved to Mum after the game.",
              tiles: ["waved", "to", "Mum", "after", "the", "game.", "I"],
            },
          ]
        ),
      },
      {
        id: "w3-expand",
        kind: "expand",
        title: "Add the missing who",
        prompt: "These pieces are unfinished. Add who, then one detail if you can.",
        layers: L(
          [
            {
              seed: "Kicked the red ball.",
              hint: "Who kicked? Put who first. You can keep red.",
              mustInclude: ["kicked", "ball"],
              needCapital: true,
            },
            {
              seed: "Spilled the juice.",
              hint: "Who spilled it? Start with a person.",
              mustInclude: ["spilled", "juice"],
              needCapital: true,
            },
          ],
          [
            {
              seed: "Opened the quiet door.",
              hint: "Who opened it? Keep quiet before door.",
              mustInclude: ["opened", "door"],
              needCapital: true,
            },
            {
              seed: "Cheered at the game.",
              hint: "Who cheered? Try Everyone, We, or The team.",
              mustInclude: ["cheered"],
              needCapital: true,
            },
          ],
          [
            {
              seed: "Waved to Mum.",
              hint: "Add who, and where or when.",
              mustInclude: ["waved", "Mum"],
              needCapital: true,
            },
          ]
        ),
      },
      {
        id: "w3-write",
        kind: "write",
        title: "Tell who did what",
        prompt: "Write sentences about someone doing something. Name who clearly.",
        rounds: [
          {
            prompt: "Write a sentence about a friend or family member doing something.",
            starters: ["My twin ", "My friend ", "Mum "],
          },
          {
            prompt: "Write a sentence about a worker or helper doing something.",
            starters: ["The nurse ", "The teacher ", "The driver "],
          },
          {
            prompt: "Write a sentence about a group doing something.",
            starters: ["Everyone ", "The team ", "We "],
          },
          {
            prompt: "Write a sentence about an animal doing something.",
            starters: ["A bee ", "The dog ", "The bird "],
          },
          {
            prompt: "Write two sentences. In each, say who first, then what they did.",
            starters: ["I ", "Then the "],
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
      text: "What is for lunch? Where is my bag? When can we play? Who has the ball? How do we start? Can I help? Have you seen my hat? Where should I sit?",
      draftKey: "w4",
      wordBank: ["what", "where", "when", "who", "how", "can", "have"],
    },
    activities: [
      {
        id: "w4-story",
        kind: "story",
        title: "Read: Questions I can ask",
        prompt: "Read the story. Notice how the words are ordered, then fill the gaps.",
        layers: L(
          [
            {
              passage: "{{What}} is for lunch? {{Where}} is my bag?",
              tip: "Question words come first (What, Where). The sentence asks, so it ends with ? not a full stop.",
            },
            {
              passage: "{{When}} can we play? {{Who}} has the ball?",
              tip: "Ask-words first: When, Who. Then the rest of the question. End with ?",
            },
          ],
          [
            {
              passage: "{{How}} do we start? {{Can}} I help? {{Have}} you seen my hat?",
              tip: "How / Can / Have open the ask. The action sits after the question word.",
            },
            {
              passage: "{{What}} are you playing? {{Where}} should I sit?",
              tip: "What and Where lead. You are asking, so finish with a question mark.",
            },
          ],
          [
            {
              passage: "{{What}} is for lunch? {{Where}} is my blue bag? {{Can}} I sit with you?",
              tip: "blue bag: describing word before the noun. Question word still comes first in an ask.",
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
      text: "I wore a coat because it was cold. I ate an apple because I was hungry. I was late because the bus was full. I like my friend because she is kind. I like this book because the ending is funny. People were happy because we won.",
      draftKey: "w5",
      wordBank: ["because", "cold", "hungry", "late", "kind", "funny"],
    },
    activities: [
      {
        id: "w5-story",
        kind: "story",
        title: "Read: Because I said so",
        prompt: "Read the story. Notice how the words are ordered, then fill the gaps.",
        layers: L(
          [
            {
              passage: "I wore a coat {{because}} it was {{cold}}.",
              tip: "because joins what happened to why. First the action, then because, then the reason.",
            },
            {
              passage: "I ate an apple {{because}} I was {{hungry}}.",
              tip: "Who + action first. because adds the reason after  not at the very start here.",
            },
          ],
          [
            {
              passage: "I was {{late}} {{because}} the bus was full.",
              tip: "The first part is what happened. because unlocks why. Keep that order.",
            },
            {
              passage: "I like my friend {{because}} she is {{kind}}.",
              tip: "like is the action after who. because explains the feeling with a describing word (kind).",
            },
          ],
          [
            {
              passage: "I like this book {{because}} the ending is {{funny}}. I was late {{because}} the bus was full.",
              tip: "Same pattern twice: idea, then because, then reason. funny describes the ending.",
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
      text: "I wanted to play but I had to pack. We packed fruit and we packed water. It was late so we went home. I like swimming but the water was cold. Today I read a book and I drew a picture. The bag was heavy but I carried it.",
      draftKey: "w6",
      wordBank: ["and", "but", "so", "wanted", "packed", "home"],
    },
    activities: [
      {
        id: "w6-story",
        kind: "story",
        title: "Read: Two ideas, one line",
        prompt: "Read the story. Notice how the words are ordered, then fill the gaps.",
        layers: L(
          [
            {
              passage: "I {{wanted}} to play {{but}} I had to pack.",
              tip: "but joins two ideas that pull different ways. Who + wanted, then but, then the second idea.",
            },
            {
              passage: "It was late {{so}} we went {{home}}.",
              tip: "so shows a result. First what was true, then so, then what we did.",
            },
          ],
          [
            {
              passage: "We {{packed}} fruit {{and}} we packed water.",
              tip: "and sticks two similar ideas together. Who + action stays the same on both sides.",
            },
            {
              passage: "I like swimming {{but}} the water was cold.",
              tip: "but flips the idea. Describing word cold comes after was, telling us about the water.",
            },
          ],
          [
            {
              passage: "Today I read a book {{and}} I drew a picture. It was late {{so}} we went home.",
              tip: "and adds another thing I did. so shows what happened because of that.",
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
      text: "The park was green and quiet. I saw a tiny bird in the tree. My room is small and bright. I have a soft lamp. The animal was huge and grey. The sky was dark and loud. The food was hot and sweet. The wind pushed the trees.",
      draftKey: "w7",
      wordBank: ["green", "quiet", "tiny", "soft", "bright", "huge", "loud"],
    },
    activities: [
      {
        id: "w7-story",
        kind: "story",
        title: "Read: A place I can see",
        prompt: "Read the story. Notice how the words are ordered, then fill the gaps.",
        layers: L(
          [
            {
              passage: "The park was {{green}} and {{quiet}}. I saw a {{tiny}} bird.",
              tip: "Describing words paint the noun: green park, tiny bird. They sit close to what they describe.",
            },
            {
              passage: "My room is {{small}} and {{bright}}. I have a {{soft}} lamp.",
              tip: "small and bright describe the room. soft comes before lamp  adjective before noun.",
            },
          ],
          [
            {
              passage: "The animal was {{huge}} and grey. The sky was {{dark}} and {{loud}}.",
              tip: "huge, dark, loud are describing words after was, telling us what the animal or sky was like.",
            },
            {
              passage: "The food was {{hot}} and sweet. The wind pushed the trees.",
              tip: "hot describes food. Who/what (wind) then action (pushed) then the thing.",
            },
          ],
          [
            {
              passage: "The park was {{green}} and {{quiet}}. I saw a {{tiny}} bird in the tree.",
              tip: "Put the describing word before the noun when it names the thing: tiny bird.",
            },
          ]
        ),
      },
      {
        id: "w7-choose",
        kind: "choose",
        title: "Who, paint, action",
        prompt: "Keep who before the action. Put the describing word before the noun.",
        layers: L(
          [
            {
              question: "Which keeps who then did?",
              choices: ["The brown dog ran.", "ran the brown dog.", "The dog brown ran."],
              answerIndex: 0,
            },
            {
              question: "Which is unfinished (no who)?",
              choices: ["The tiny bird sang.", "Running in the park.", "A loud truck rolled past."],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "In “The soft lamp glowed”, which word is who/what (the noun)?",
              choices: ["soft", "lamp", "glowed"],
              answerIndex: 1,
            },
            {
              question: "Which paints cleanly?",
              choices: ["I saw a bird tiny.", "I saw a tiny bird.", "tiny saw I a bird."],
              answerIndex: 1,
            },
          ],
          [
            {
              question: "Best full sentence?",
              choices: [
                "hid the tiny frog under a leaf.",
                "The tiny frog hid under a leaf.",
                "The frog tiny hid under a leaf.",
              ],
              answerIndex: 1,
            },
          ]
        ),
      },
      {
        id: "w7-expand",
        kind: "expand",
        title: "Paint — or add who",
        prompt: "Add a describing word, or finish an unfinished thought with who.",
        layers: L(
          [
            {
              seed: "The dog ran in the park.",
              hint: "Add a colour or size for the dog. Keep The dog before ran.",
              mustInclude: ["dog"],
              needCapital: true,
            },
            {
              seed: "Running in the park.",
              hint: "Who was running? Add who, then you may add tiny or brown.",
              mustInclude: ["park"],
              needCapital: true,
            },
          ],
          [
            {
              seed: "A car went down the road.",
              hint: "Add red, fast, or huge. Keep A car before went.",
              mustInclude: ["car"],
              needCapital: true,
            },
            {
              seed: "Hit the sand.",
              hint: "Who or what hit? Try The huge wave…",
              mustInclude: ["sand"],
              needCapital: true,
            },
          ],
          [
            {
              seed: "The park was quiet.",
              hint: "Add another describing word and one thing you saw — with who + did.",
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
        prompt: "Build who + paint + action. Describing word before the noun.",
        layers: L(
          [
            {
              answer: "The busy bee landed.",
              tiles: ["landed.", "The", "busy", "bee"],
            },
            {
              answer: "A loud truck rolled past.",
              tiles: ["rolled", "past.", "A", "loud", "truck"],
            },
          ],
          [
            {
              answer: "The soft lamp glowed.",
              tiles: ["glowed.", "The", "soft", "lamp"],
            },
            {
              answer: "A loud bird sat on the fence.",
              tiles: ["sat", "on", "the", "fence.", "A", "loud", "bird"],
            },
          ],
          [
            {
              answer: "The huge wave crashed on the sand.",
              tiles: ["crashed", "on", "the", "sand.", "The", "huge", "wave"],
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
      text: "On the weekend I visited Grandma. The best part was baking. We made a cake together. My favourite sport is soccer. We run on the field. I like the library. There I look for animal books. Then we went to the library again.",
      draftKey: "w8",
      wordBank: ["weekend", "grandma", "visited", "soccer", "library", "detail"],
    },
    activities: [
      {
        id: "w8-story",
        kind: "story",
        title: "Read: My weekend",
        prompt: "Read the story. Notice how the words are ordered, then fill the gaps.",
        layers: L(
          [
            {
              passage: "On the {{weekend}} I {{visited}} Grandma.",
              tip: "Time can come first (On the weekend). Then who (I) and the action (visited).",
            },
            {
              passage: "The best part was baking. We made a {{cake}} together.",
              tip: "Who (We) then action (made) then the thing (cake).",
            },
          ],
          [
            {
              passage: "My favourite sport is {{soccer}}. We run on the field.",
              tip: "Topic sentence names the idea first. Next sentence stays on that topic with who + action.",
            },
            {
              passage: "I like the {{library}}. There I look for animal books.",
              tip: "Name the place, then add a detail that stays in that place.",
            },
          ],
          [
            {
              passage: "On the {{weekend}} I {{visited}} Grandma. Then we went to the {{library}}.",
              tip: "Time + who + action. Then adds the next step in order.",
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
      text: "We went on a trip to the zoo. First we watched the lions. Then we saw the monkeys. First the lions were resting. Then the monkeys jumped for bananas. We packed water. First we ate lunch. Then we walked home.",
      draftKey: "w9",
      wordBank: ["trip", "first", "then", "zoo", "lions", "monkeys"],
    },
    activities: [
      {
        id: "w9-story",
        kind: "story",
        title: "Read: A trip with details",
        prompt: "Read the story. Notice how the words are ordered, then fill the gaps.",
        layers: L(
          [
            {
              passage: "We went on a {{trip}} to the {{zoo}}.",
              tip: "Who (We) + action (went) + where. The topic sentence names the whole trip.",
            },
            {
              passage: "{{First}} we watched the {{lions}}. {{Then}} we saw the {{monkeys}}.",
              tip: "First and Then line up the order. Who + action + what we watched.",
            },
          ],
          [
            {
              passage: "First the lions were resting. Then the {{monkeys}} jumped for bananas.",
              tip: "Then moves the story forward. Who (monkeys) then action (jumped).",
            },
            {
              passage: "We packed water. {{First}} we ate lunch. {{Then}} we walked home.",
              tip: "First / Then keep the steps in time order after the topic.",
            },
          ],
          [
            {
              passage: "We went to the {{zoo}}. {{First}} we watched the {{lions}}. {{Then}} the {{monkeys}} jumped.",
              tip: "Topic first. Detail sentences keep who before the action.",
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
      text: "I made a card for Mum. I used blue paper. I helped Dad wash the car. I felt proud. I made a bird from paper. Then I painted the wings. I felt happy. I felt proud when Mum smiled.",
      draftKey: "w10",
      wordBank: ["made", "card", "paper", "proud", "helped", "felt"],
    },
    activities: [
      {
        id: "w10-story",
        kind: "story",
        title: "Read: Something I made",
        prompt: "Read the story. Notice how the words are ordered, then fill the gaps.",
        layers: L(
          [
            {
              passage: "I {{made}} a {{card}} for Mum. I used blue {{paper}}.",
              tip: "Who (I) then the action (made) then the thing (card). Describing word before the noun: blue paper, not paper blue.",
            },
            {
              passage: "I {{helped}} Dad wash the car. I felt {{proud}}.",
              tip: "Who + action (helped). The last sentence closes with a feeling word after felt.",
            },
          ],
          [
            {
              passage: "I made a bird from paper. Then I painted the wings. I {{felt}} happy.",
              tip: "Same who through the paragraph. felt + feeling finishes the idea.",
            },
            {
              passage: "We {{made}} pancakes. I {{helped}} mix the eggs.",
              tip: "Who + action in both lines. The second sentence stays on the same making topic.",
            },
          ],
          [
            {
              passage: "I {{made}} a {{card}} with gold stars. I {{felt}} {{proud}} when Mum smiled.",
              tip: "Who + made + card. Feeling words come after felt. gold sits before stars.",
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
      text: "The animal I chose is a hen. It lives in our backyard by the fence. It likes warm brown eggs and grain. It pecks and hops all day. I think it is a busy, funny pet. That is why I chose the hen.",
      draftKey: "w11",
      wordBank: ["topic", "hen", "soccer", "library", "grandma", "pancakes"],
    },
    activities: [
      {
        id: "w11-story",
        kind: "story",
        title: "Read: One topic only",
        prompt: "Read the story. Notice how the words are ordered, then fill the gaps.",
        layers: L(
          [
            {
              passage: "The animal I chose is a {{hen}}. It lives in our backyard.",
              tip: "Topic first (the hen). Every next sentence must stay about that same animal.",
            },
            {
              passage: "The game I chose is {{soccer}}. You kick a ball into a net.",
              tip: "Name the topic, then a detail about that game only  not a new topic.",
            },
          ],
          [
            {
              passage: "The place I chose is the {{library}}. It feels calm and happy.",
              tip: "library is the topic noun. Details must stay in that place.",
            },
            {
              passage: "The person I chose is {{Grandma}}. They bake lemon cake with me.",
              tip: "Grandma is the topic. Who does what stays locked on that person.",
            },
          ],
          [
            {
              passage: "I chose {{pancakes}}. They taste sweet with lemon. I eat them on a slow Saturday. No other {{topic}} sneaks in.",
              tip: "One topic only. sweet describes taste; slow describes Saturday  describing word before the noun.",
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
      text: "I remember a hot day at the beach. First we put down a big towel. Then the waves were huge. I felt brave when I jumped in. Later we ate lunch on the sand. I felt happy on the way home.",
      draftKey: "w12",
      wordBank: ["remember", "beach", "library", "brave", "proud", "calm"],
    },
    activities: [
      {
        id: "w12-story",
        kind: "story",
        title: "Read: A day I remember",
        prompt: "Read the story. Notice how the words are ordered, then fill the gaps.",
        layers: L(
          [
            {
              passage: "I {{remember}} a hot day at the {{beach}}.",
              tip: "Who + action (remember) + what. hot day: describing word before the noun.",
            },
            {
              passage: "First we put down a big towel. Then the waves were huge.",
              tip: "First / Then order the day. big towel and huge waves: describing words near the nouns.",
            },
          ],
          [
            {
              passage: "I love the {{library}}. I feel {{calm}} when I leave with a story.",
              tip: "Topic place first. calm is the feeling that closes the idea.",
            },
            {
              passage: "I made a bird from paper. I felt {{proud}} when it stood up.",
              tip: "Who + made + thing. felt + proud ends with how you felt about that same making.",
            },
          ],
          [
            {
              passage: "I {{remember}} the {{beach}}. The waves were huge. I felt {{brave}} when I jumped in.",
              tip: "Topic, detail, feeling. Who before each action. brave describes how I felt.",
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
