// Replaces the 18-week list with topics. Stay in a topic until it feels easy.
// L() comes from curriculum.js, which must load first.

const PROGRAMME = [
  {
    id: "t-gates",
    week: 1,
    group: "Sentence craft",
    title: "Start and stop",
    focus: "Capital, full stop, question mark, and a capital in a title",
    story: {
      theme: "Lunch questions",
      text: "The Lunch Bag. Mum packed my lunch. What is in the bag? I have a sandwich, an apple and some water. I eat at school. Can I sit with Sam?",
    },
    lesson: {
      idea: "A telling sentence starts big and ends with a stop. A question ends with ?. A title starts with capitals.",
      why: "The reader needs to see where a thought starts, and whether you are telling or asking.",
      rule: "Capital at the start. Full stop to tell. Question mark to ask. Capitals on the main words of a title.",
      steps: [
        "Point to the first letter. Is it big?",
        "If it tells, end with a full stop. If it asks, end with ?",
        "In a title, capital the important words: The Lunch Bag.",
      ],
      examples: [
        { wrong: "mum packed my lunch", right: "Mum packed my lunch.", why: "Finish marks only. The thought is already clear." },
        { wrong: "what is in the bag.", right: "What is in the bag?", why: "It asks, so the end mark is ?." },
      ],
    },
    activities: [
      {
        id: "t-gates-story",
        kind: "story",
        title: "Read: Lunch questions",
        prompt: "Read the story. Notice starts, stops, and the title.",
        layers: L(
          [
            { passage: "{{Mum}} packed my lunch. I eat at {{school}}.", tip: "Mum and I start the sentences, so they are capitals. Each telling sentence ends with a stop." },
            { passage: "What is in the {{bag}}? Can I sit with {{Sam}}?", tip: "These ask, so they end with a question mark." },
          ],
          [
            { passage: "I have a sandwich, an {{apple}} and some water.", tip: "A list can sit inside a sentence. The sentence still starts big and ends with a stop." },
            { passage: "The title is The Lunch {{Bag}}.", tip: "Bag is an important word in the title, so it has a capital." },
          ],
          [{ passage: "{{What}} is for lunch? {{Mum}} packed a sandwich.", tip: "One question. One telling sentence. Different end marks." }]
        ),
      },
      {
        id: "t-gates-choose",
        kind: "choose",
        title: "Tell, ask, or title",
        prompt: "Hunt finish marks. The who and the action are already there.",
        layers: L(
          [
            { question: "Which telling sentence is finished?", choices: ["mum packed lunch.", "Mum packed lunch.", "Mum packed lunch"], answerIndex: 1 },
            { question: "Which is a real question?", choices: ["Where is my bag.", "Where is my bag?", "where is my bag?"], answerIndex: 1 },
          ],
          [
            { question: "Which title is right?", choices: ["the lunch bag", "The Lunch Bag", "The lunch bag"], answerIndex: 1 },
            { question: "Which list sentence is finished?", choices: ["I packed a hat, a coat and a book.", "I packed a hat a coat and a book", "i packed a hat, a coat and a book."], answerIndex: 0 },
          ],
          [{ question: "Best pair?", choices: ["What is for lunch? Mum packed a sandwich.", "what is for lunch. mum packed a sandwich", "What is for lunch. Mum packed a sandwich?"], answerIndex: 0 }]
        ),
      },
      {
        id: "t-gates-write",
        kind: "write",
        title: "Write, then check the marks",
        prompt: "Check: capital start, stop or question mark, who before the action.",
        rounds: [
          { prompt: "Write two telling sentences about lunch.", starters: ["I ate ", "Then I "] },
          { prompt: "Write two questions you could ask at school.", starters: ["What ", "Where "] },
          { prompt: "Write a title and one sentence under it.", starters: ["The ", "I "] },
          { prompt: "Write one sentence that lists three things you packed.", starters: ["I packed "] },
        ],
      },
    ],
  },
  {
    id: "t-who",
    week: 2,
    group: "Sentence craft",
    title: "Who, then did",
    focus: "A full sentence names who before the action",
    story: {
      theme: "Jobs and groups",
      text: "The nurse washed her hands. Everyone cheered at the game. My twin spilled the juice. A bee landed on the flower. The team won. Then I waved to Mum.",
    },
    lesson: {
      idea: "Who can be a person, a job, a group, an animal, or a thing. The action comes after who.",
      why: "Opened the door has no who. The cake ate Mia has who and action in the wrong place.",
      rule: "Who, then did, then what. If who is missing, the line is unfinished.",
      steps: ["Find who.", "Find the action.", "Put who first.", "If who is missing, add a person, group, or animal."],
      examples: [
        { wrong: "The cake ate Mia.", right: "Mia ate the cake.", why: "Wrong job. Mia did the eating." },
        { wrong: "Opened the quiet door.", right: "Mum opened the quiet door.", why: "Unfinished. Add who." },
      ],
    },
    activities: [
      {
        id: "t-who-story",
        kind: "story",
        title: "Read: Jobs and groups",
        prompt: "Read first. Notice different kinds of who.",
        layers: L(
          [
            { passage: "The {{nurse}} washed her hands. {{Everyone}} cheered.", tip: "A job and a group can both be who." },
            { passage: "My {{twin}} spilled the juice. A {{bee}} landed on the flower.", tip: "Who, then the action." },
          ],
          [
            { passage: "The {{team}} won. Then I {{waved}} to Mum.", tip: "Keep who before the action." },
            { passage: "The nurse washed. She {{smiled}}.", tip: "She stands for the nurse. The action still follows who." },
          ],
          [{ passage: "A {{bee}} landed. The {{team}} cheered. I {{waved}}.", tip: "Animal, group, and I are all who." }]
        ),
      },
      {
        id: "t-who-choose",
        kind: "choose",
        title: "Full, flipped, or unfinished",
        prompt: "Pick the line with who before the action.",
        layers: L(
          [
            { question: "Which has who then did?", choices: ["Mia ate the cake.", "The cake ate Mia.", "ate the cake Mia."], answerIndex: 0 },
            { question: "Which is unfinished?", choices: ["The nurse washed her hands.", "Opened the quiet door.", "Everyone cheered."], answerIndex: 1 },
          ],
          [
            { question: "Which keeps who first?", choices: ["jumped the dog.", "The dog jumped.", "The jumped dog."], answerIndex: 1 },
            { question: "Best clear sentence?", choices: ["the juice spilled my twin.", "My twin spilled the juice.", "spilled the juice."], answerIndex: 1 },
          ],
          [{ question: "Which is a full sentence?", choices: ["Cheered at the game.", "The team cheered at the game.", "at the game"], answerIndex: 1 }]
        ),
      },
      {
        id: "t-who-write",
        kind: "write",
        title: "Name who",
        prompt: "Who first, then what they did.",
        rounds: [
          { prompt: "Write about a worker doing something.", starters: ["The nurse ", "The teacher "] },
          { prompt: "Write about a group doing something.", starters: ["Everyone ", "The team "] },
          { prompt: "Write about an animal doing something.", starters: ["A bee ", "The dog "] },
          { prompt: "Turn this into a full sentence: Spilled the juice.", starters: ["My twin "] },
        ],
      },
    ],
  },
  {
    id: "t-joins",
    week: 3,
    group: "Sentence craft",
    title: "Join two ideas",
    focus: "and, but, so — two complete ideas in one sentence",
    story: {
      theme: "Two ideas",
      text: "I wanted to play, but I had to pack. We packed fruit and we packed water. It was late, so we went home. I like swimming, but the water was cold.",
    },
    lesson: {
      idea: "and adds. but shows a change. so shows a result. Each side still needs who and did.",
      why: "A compound sentence is two sentences that can stand alone, stuck with a join.",
      rule: "and, but, or so. A comma often sits before but and so.",
      steps: ["Write the first idea.", "Pick and, but, or so.", "Write a second idea with its own who and did."],
      examples: [
        { wrong: "I wanted to play I had to pack", right: "I wanted to play, but I had to pack.", why: "but is the change." },
        { wrong: "It was late we went home", right: "It was late, so we went home.", why: "so is the result." },
      ],
    },
    activities: [
      {
        id: "t-joins-story",
        kind: "story",
        title: "Read: Two ideas",
        prompt: "Notice the join between two complete ideas.",
        layers: L(
          [
            { passage: "I wanted to play, {{but}} I had to pack.", tip: "but = a change. Both sides have who and did." },
            { passage: "We packed fruit {{and}} we packed water.", tip: "and adds a second idea." },
          ],
          [
            { passage: "It was late, {{so}} we went home.", tip: "so shows the result." },
            { passage: "I like swimming, {{but}} the water was cold.", tip: "The water is who on the second side." },
          ],
          [{ passage: "I was tired, {{so}} I sat down. I smiled, {{and}} Mum smiled too.", tip: "Each join matches its meaning." }]
        ),
      },
      {
        id: "t-joins-choose",
        kind: "choose",
        title: "Pick the join",
        prompt: "Match and, but, or so. Both sides must be complete.",
        layers: L(
          [
            { question: "I wanted to play ___ I had to pack.", choices: ["and", "but", "so"], answerIndex: 1 },
            { question: "It was late ___ we went home.", choices: ["but", "so", "or"], answerIndex: 1 },
          ],
          [
            { question: "Which keeps who on both sides?", choices: ["We packed fruit and we packed water.", "We packed fruit and packed.", "and we packed fruit water"], answerIndex: 0 },
            { question: "Which join fits?", choices: ["I was hungry, so I ate.", "I was hungry, but I ate.", "I was hungry so ate."], answerIndex: 0 },
          ],
          [{ question: "Best compound sentence?", choices: ["I like swimming, but the water was cold.", "I like swimming but cold.", "but the water was cold"], answerIndex: 0 }]
        ),
      },
      {
        id: "t-joins-write",
        kind: "write",
        title: "Two ideas, one line",
        prompt: "Use and, but, or so. Check who on both sides.",
        rounds: [
          { prompt: "Join two ideas with but.", starters: ["I wanted to play, but "] },
          { prompt: "Join two ideas with so.", starters: ["It was late, so "] },
          { prompt: "Join two ideas with and.", starters: ["We packed fruit and "] },
          { prompt: "Write two compound sentences about home.", starters: ["I ", "Mum "] },
        ],
      },
    ],
  },
  {
    id: "t-when",
    week: 4,
    group: "Sentence craft",
    title: "When and while",
    focus: "Time joins — who and did on both sides",
    story: {
      theme: "Two things at once",
      text: "I smiled when Dad came home. Mum cooked while I set the table. We packed while Mum found the keys. We left when the bag was ready.",
    },
    lesson: {
      idea: "when and while join two ideas in time. Do not drop the second who.",
      why: "Mum cooked while set the table is unfinished on the second side.",
      rule: "who + did + when/while + who + did.",
      steps: ["Write the first who and action.", "Add when or while.", "Write the second who and action."],
      examples: [
        { wrong: "Mum cooked while set the table.", right: "Mum cooked while I set the table.", why: "The second side needs who." },
        { wrong: "I smiled when came home.", right: "I smiled when Dad came home.", why: "Who came home?" },
      ],
    },
    activities: [
      {
        id: "t-when-choose",
        kind: "choose",
        title: "Keep the second who",
        prompt: "Both sides need who and did.",
        layers: L(
          [
            { question: "Which is complete?", choices: ["Mum cooked while I set the table.", "Mum cooked while set the table.", "while Mum cooked set"], answerIndex: 0 },
            { question: "Which is missing who after when?", choices: ["I smiled when Dad came home.", "I smiled when came home.", "When Dad came home, I smiled."], answerIndex: 1 },
          ],
          [
            { question: "Best when sentence?", choices: ["We left when the bag was ready.", "We left when ready.", "when the bag we left"], answerIndex: 0 },
            { question: "Best while sentence?", choices: ["I read while Mum cooked.", "I read while cooked.", "while I read Mum"], answerIndex: 0 },
          ],
          [{ question: "Which is unfinished?", choices: ["When the bell rang, we lined up.", "When the bell rang.", "The bell rang."], answerIndex: 1 }]
        ),
      },
      {
        id: "t-when-build",
        kind: "build",
        title: "Build both sides",
        prompt: "Do not drop I, Dad, or Mum on the second side.",
        layers: L(
          [
            { answer: "I smiled when Dad came home.", tiles: ["smiled", "when", "Dad", "came", "home.", "I"] },
            { answer: "Mum cooked while I set the table.", tiles: ["cooked", "while", "I", "set", "the", "table.", "Mum"] },
          ],
          [
            { answer: "We packed while Mum found the keys.", tiles: ["packed", "while", "Mum", "found", "the", "keys.", "We"] },
            { answer: "We left when the bag was ready.", tiles: ["left", "when", "the", "bag", "was", "ready.", "We"] },
          ],
          [{ answer: "When the bell rang we lined up.", tiles: ["the", "bell", "rang", "we", "lined", "up.", "When"] }]
        ),
      },
      {
        id: "t-when-write",
        kind: "write",
        title: "Join in time",
        prompt: "Use when or while. Name who on both sides.",
        rounds: [
          { prompt: "Write one sentence with when.", starters: ["I smiled when "] },
          { prompt: "Write one sentence with while.", starters: ["Mum cooked while "] },
          { prompt: "Write two sentences about a trip. Use when in one.", starters: ["When we arrived, ", "We left when "] },
        ],
      },
    ],
  },
  {
    id: "t-paint",
    week: 5,
    group: "Sentence craft",
    title: "Paint the noun",
    focus: "A describing word sits before the noun. Who still comes before the action",
    story: {
      theme: "A place I can see",
      text: "The park was green and quiet. I saw a tiny bird in the tree. A loud truck rolled past. The soft lamp glowed in my room. The huge wave crashed on the sand.",
    },
    lesson: {
      idea: "A paint word tells size, colour, sound, or feel. It sits just before the noun.",
      why: "The dog ran is true but pale. Running in the park has no who.",
      rule: "Paint word before the noun. Who before the verb.",
      steps: ["Find the noun.", "Add tiny, huge, loud, soft, green, or quiet before it.", "Check who still comes before the action."],
      examples: [
        { wrong: "I saw a bird tiny.", right: "I saw a tiny bird.", why: "tiny paints bird, so it sits before bird." },
        { wrong: "Running in the park.", right: "The brown dog was running in the park.", why: "Add who, then you may paint." },
      ],
    },
    activities: [
      {
        id: "t-paint-choose",
        kind: "choose",
        title: "Paint in the right place",
        prompt: "Keep who first. Put the paint word before the noun.",
        layers: L(
          [
            { question: "Which keeps who then did?", choices: ["The brown dog ran.", "ran the brown dog.", "The dog brown ran."], answerIndex: 0 },
            { question: "Which is unfinished?", choices: ["The tiny bird sang.", "Running in the park.", "A loud truck rolled past."], answerIndex: 1 },
          ],
          [
            { question: "Which paints cleanly?", choices: ["I saw a bird tiny.", "I saw a tiny bird.", "tiny saw I a bird."], answerIndex: 1 },
            { question: "In “The soft lamp glowed”, which word is the noun?", choices: ["soft", "lamp", "glowed"], answerIndex: 1 },
          ],
          [{ question: "Best full sentence?", choices: ["hid the tiny frog.", "The tiny frog hid.", "The frog tiny hid."], answerIndex: 1 }]
        ),
      },
      {
        id: "t-paint-build",
        kind: "build",
        title: "Build paint + noun + verb",
        prompt: "Describing word before the noun. Noun before the verb.",
        layers: L(
          [
            { answer: "The busy bee landed.", tiles: ["landed.", "The", "busy", "bee"] },
            { answer: "A loud truck rolled past.", tiles: ["rolled", "past.", "A", "loud", "truck"] },
          ],
          [
            { answer: "The soft lamp glowed.", tiles: ["glowed.", "The", "soft", "lamp"] },
            { answer: "The huge wave crashed.", tiles: ["crashed.", "The", "huge", "wave"] },
          ],
          [{ answer: "I saw a tiny bird.", tiles: ["saw", "a", "tiny", "bird.", "I"] }]
        ),
      },
      {
        id: "t-paint-write",
        kind: "write",
        title: "Describe a place",
        prompt: "One paint word. Who before the action.",
        rounds: [
          { prompt: "Write two sentences about a park. Paint one noun.", starters: ["The park was ", "I saw a "] },
          { prompt: "Write about your room with a paint word.", starters: ["My room is ", "I have a "] },
          { prompt: "Finish this: Running in the park.", starters: ["The "] },
        ],
      },
    ],
  },
  {
    id: "t-recount",
    week: 6,
    group: "Purpose",
    title: "A little recount",
    focus: "One event: topic, details, close — stay on that event",
    story: {
      theme: "Saturday",
      text: "Saturday is my favourite day. I play outside in the morning. After lunch we visit Grandma. We bake a cake together. I go to bed happy.",
    },
    lesson: {
      idea: "A recount tells what happened, in order, about one event.",
      why: "If sentence two jumps to soccer, the reader loses the Saturday story.",
      rule: "Topic sentence, two details, a close about the same event.",
      steps: ["Name the event first.", "Add what happened, in order.", "End with a feeling or a wrap-up.", "Cut any sentence about a different topic."],
      examples: [
        { wrong: "It was stuff.", right: "Saturday is my favourite day.", why: "The topic sentence names the event." },
        { wrong: "Saturday was fun. Soccer is loud. I went home.", right: "Saturday was fun. I played outside. I went to bed happy.", why: "All three lines stay on Saturday." },
      ],
    },
    activities: [
      {
        id: "t-recount-arrange",
        kind: "arrange",
        title: "Topic, details, close",
        prompt: "Put the recount in order. Stay on one event.",
        layers: L(
          [{ sentences: ["Saturday is my favourite day.", "I play outside in the morning.", "After lunch we visit Grandma.", "I go to bed happy."] }],
          [{ sentences: ["We went to the zoo.", "First we watched the lions.", "Then the monkeys jumped.", "I felt happy on the bus home."] }],
          [{ sentences: ["The school fete was busy.", "I won a prize at the lucky dip.", "We ate hot chips on the grass.", "I hope we have another fete soon."] }]
        ),
      },
      {
        id: "t-recount-choose",
        kind: "choose",
        title: "Stay on the event",
        prompt: "Which paragraph stays on one recount?",
        layers: L(
          [
            { question: "Which stays on Saturday?", choices: ["Saturday was fun. I played outside. I went to bed happy.", "Saturday was fun. Soccer is loud. I left.", "I played. Then soccer. Then the library."], answerIndex: 0 },
            { question: "Which is a topic sentence?", choices: ["It was stuff.", "We went to the zoo.", "Then we walked."], answerIndex: 1 },
          ],
          [
            { question: "Which is a close, not a new topic?", choices: ["I felt happy on the bus home.", "Soccer is my favourite sport.", "The library is quiet."], answerIndex: 0 },
            { question: "Which detail belongs in a zoo recount?", choices: ["Then the monkeys jumped.", "I like my red bike.", "Mum packed a sandwich."], answerIndex: 0 },
          ],
          [{ question: "Best recount shape?", choices: ["We went to the beach. First we swam. I felt brave.", "The beach. Swimming. Also my dog.", "I felt brave. We went. Soccer."], answerIndex: 0 }]
        ),
      },
      {
        id: "t-recount-write",
        kind: "write",
        title: "Write a recount",
        prompt: "Four sentences. One event. Topic, two details, a close.",
        rounds: [
          { prompt: "Write a short recount of a day you remember.", starters: ["Yesterday we ", "First ", "Then ", "I felt "] },
          { prompt: "Write a recount of a game or trip. Stay on that one event.", starters: ["We went ", "First we ", "Then ", "I "] },
        ],
      },
    ],
  },
  {
    id: "t-fact",
    week: 7,
    group: "Purpose",
    title: "Tell a fact",
    focus: "An informative text: heading, facts, no story drift",
    story: {
      theme: "Honey bees",
      text: "Honey Bees. A honey bee is an insect. It has six legs and two wings. Bees collect nectar from flowers. They make honey in the hive. A bee is not a pet story. These are facts.",
    },
    lesson: {
      idea: "Facts tell true information. They do not turn into what I did on Saturday.",
      why: "A reader looking up bees needs facts, not your feelings about the fete.",
      rule: "Title. A fact sentence that names the topic. More facts. No new story.",
      steps: ["Write a title with capitals.", "Say what the thing is.", "Add two facts.", "Do not start a recount in the middle."],
      examples: [
        { wrong: "Bees are nice. Then I went to the park.", right: "A honey bee has six legs. It collects nectar.", why: "Stay on facts about bees." },
        { wrong: "the honey bee", right: "Honey Bees", why: "A title uses capitals on the important words." },
      ],
    },
    activities: [
      {
        id: "t-fact-choose",
        kind: "choose",
        title: "Fact or story drift",
        prompt: "Pick the line that informs. Reject the recount.",
        layers: L(
          [
            { question: "Which is a fact?", choices: ["A honey bee has six legs.", "I chased a bee on Saturday.", "Suddenly I ran."], answerIndex: 0 },
            { question: "Which title fits an informative text?", choices: ["Honey Bees", "my fun day", "Then we left"], answerIndex: 0 },
          ],
          [
            { question: "Which stays on facts about hens?", choices: ["A hen lays eggs. It pecks grain.", "A hen lays eggs. Then I played soccer.", "I love hens. The zoo was fun."], answerIndex: 0 },
            { question: "Which is story drift?", choices: ["Bees live in a hive.", "Then I ate honey on toast with Grandma.", "A hive is the bees' home."], answerIndex: 1 },
          ],
          [{ question: "Best informative pair?", choices: ["Honey Bees. A bee collects nectar from flowers.", "Bees. I went to the park and saw one.", "a bee. it is nice and I ran"], answerIndex: 0 }]
        ),
      },
      {
        id: "t-fact-write",
        kind: "write",
        title: "Write facts",
        prompt: "Title, then facts. No Saturday story in the middle.",
        rounds: [
          { prompt: "Write a title and three facts about an animal.", starters: ["Honey Bees", "A hen is ", "It has ", "It "] },
          { prompt: "Write three facts about a place, with a title.", starters: ["The Library", "The library is ", "People ", "It "] },
        ],
      },
    ],
  },
  {
    id: "t-opinion",
    week: 8,
    group: "Purpose",
    title: "I think, because",
    focus: "An opinion for a reader, with a reason",
    story: {
      theme: "Best lunch",
      text: "I think apples are the best snack. They are sweet and easy to pack. I also think the library is a good place to read. It is quiet. My friend may disagree. That is fine. I still have reasons.",
    },
    lesson: {
      idea: "An opinion says what you think, then why. A reason is not the same as a new story.",
      why: "I like it is thin. I like it because it is quiet gives the reader a reason.",
      rule: "I think… because… One clear opinion. One or two reasons.",
      steps: ["Name your opinion.", "Add because and a reason.", "You may add a second reason.", "Do not jump to a different topic."],
      examples: [
        { wrong: "Apples are good.", right: "I think apples are the best snack because they are easy to pack.", why: "because gives the reason." },
        { wrong: "I like the library. Soccer is loud.", right: "I like the library because it is quiet.", why: "Stay on the opinion." },
      ],
    },
    activities: [
      {
        id: "t-opinion-choose",
        kind: "choose",
        title: "Opinion plus reason",
        prompt: "Which line gives an opinion and a reason?",
        layers: L(
          [
            { question: "Which has a reason?", choices: ["I like apples.", "I like apples because they are sweet.", "Apples."], answerIndex: 1 },
            { question: "Which is an opinion, not only a fact?", choices: ["A bee has six legs.", "I think bees are helpful because they make honey.", "Bees live in a hive."], answerIndex: 1 },
          ],
          [
            { question: "Which stays on one opinion?", choices: ["I think Saturday is best because I see Grandma.", "I think Saturday is best. Soccer is loud. The zoo.", "Saturday. Grandma. Bees."], answerIndex: 0 },
            { question: "Which needs a reason still?", choices: ["I think the park is the best place.", "I think the park is best because it is green and quiet.", "The park has trees."], answerIndex: 0 },
          ],
          [{ question: "Best opinion sentence?", choices: ["I think recess is too short because we are still playing.", "Recess. I played. Then I left.", "because we are still playing"], answerIndex: 0 }]
        ),
      },
      {
        id: "t-opinion-write",
        kind: "write",
        title: "Write your opinion",
        prompt: "I think… because… for a reader who may not agree.",
        rounds: [
          { prompt: "Write your opinion about a snack, with because.", starters: ["I think ", "because "] },
          { prompt: "Write your opinion about a place at school, with two reasons.", starters: ["I think the library ", "It is ", "I also think "] },
          { prompt: "Write an opinion a friend could answer.", starters: ["I think recess ", "because "] },
        ],
      },
    ],
  },
  {
    id: "t-two",
    week: 9,
    group: "Purpose",
    title: "Same idea, two ways",
    focus: "One place as a recount and as facts",
    story: {
      theme: "The park",
      text: "Facts: The park has a slide and a sandpit. Trees give shade. Recount: On Saturday I went to the park. I climbed the slide. I felt glad. Same place. Two jobs.",
    },
    lesson: {
      idea: "The same topic can be facts or a recount. The shape changes. The topic does not.",
      why: "If you mix them, the reader cannot tell if you are informing or telling what happened.",
      rule: "Facts name what is true. A recount names what you did, in order.",
      steps: ["Pick one place.", "Write two facts.", "Write a short recount of a visit.", "Do not mix a feeling into the fact lines."],
      examples: [
        { wrong: "The park has a slide. I felt glad.", right: "The park has a slide. Trees give shade.", why: "Fact lines stay facts." },
        { wrong: "I went to the park. A slide is metal.", right: "I went to the park. I climbed the slide.", why: "Recount lines tell what you did." },
      ],
    },
    activities: [
      {
        id: "t-two-choose",
        kind: "choose",
        title: "Fact line or recount line",
        prompt: "Sort the job of the sentence. Same topic is allowed. Mixed job is not.",
        layers: L(
          [
            { question: "Which is a fact about the park?", choices: ["The park has a slide.", "I climbed the slide.", "I felt glad."], answerIndex: 0 },
            { question: "Which is a recount line?", choices: ["Trees give shade.", "On Saturday I went to the park.", "A park is a place."], answerIndex: 1 },
          ],
          [
            { question: "Which fact list stays facts?", choices: ["The library has quiet corners. It lends books.", "The library has books. I felt calm and then we had soccer.", "I went to the library."], answerIndex: 0 },
            { question: "Which recount stays a recount?", choices: ["I went to the beach. I jumped in the waves.", "I went to the beach. A beach has sand.", "A beach has sand. Waves are water."], answerIndex: 0 },
          ],
          [{ question: "Best split of one topic?", choices: ["Facts: The zoo has lions. Recount: I watched the lions.", "Facts: I felt happy. Recount: A lion has a mane.", "Both: Then I ate lunch and a lion is big."], answerIndex: 0 }]
        ),
      },
      {
        id: "t-two-write",
        kind: "write",
        title: "Write both ways",
        prompt: "Same place. Two facts, then a short recount. Do not mix the jobs.",
        rounds: [
          { prompt: "Write two facts about a park, beach, or library.", starters: ["The park has ", "It "] },
          { prompt: "Now write a three-sentence recount of a visit to that same place.", starters: ["On Saturday I ", "I ", "I felt "] },
        ],
      },
    ],
  },
  {
    id: "t-tie",
    week: 10,
    group: "Purpose",
    title: "Tie the sentences",
    focus: "Pronouns: she, he, it, they, my — and do not repeat the noun every time",
    story: {
      theme: "My twin",
      text: "My twin spilled the juice. She wiped it up. The cup was red. It rolled under the table. Mum smiled. She passed a cloth. They finished the job together.",
    },
    lesson: {
      idea: "After you name who, she, he, it, or they can carry the next sentence.",
      why: "My twin spilled the juice. My twin wiped the juice. My twin smiled. The repeat sounds stuck.",
      rule: "Name who once. Then use a pronoun the reader can match. my / her / his show whose.",
      steps: ["Name the person or thing.", "In the next sentence, try she, he, it, or they.", "Check the reader still knows who it means."],
      examples: [
        { wrong: "My twin spilled the juice. My twin wiped the juice.", right: "My twin spilled the juice. She wiped it up.", why: "She is my twin. It is the juice." },
        { wrong: "The cup rolled. She was red.", right: "The cup rolled. It was red.", why: "It matches the cup, not a person." },
      ],
    },
    activities: [
      {
        id: "t-tie-choose",
        kind: "choose",
        title: "Which pronoun fits?",
        prompt: "The pronoun must match the who you already named.",
        layers: L(
          [
            { question: "My twin spilled the juice. ___ wiped it up.", choices: ["She", "It", "They"], answerIndex: 0 },
            { question: "The cup rolled. ___ was red.", choices: ["She", "It", "They"], answerIndex: 1 },
          ],
          [
            { question: "Mum and I washed up. ___ finished together.", choices: ["She", "It", "We"], answerIndex: 2 },
            { question: "Which pair is tied cleanly?", choices: ["The bee landed. It sat on the flower.", "The bee landed. She was a flower.", "It landed. The bee."], answerIndex: 0 },
          ],
          [{ question: "Which repeats too much?", choices: ["My twin smiled. She waved.", "My twin smiled. My twin waved. My twin sat.", "Mum called. She waved."], answerIndex: 1 }]
        ),
      },
      {
        id: "t-tie-write",
        kind: "write",
        title: "Write, then tie",
        prompt: "Name who in sentence one. Use she, he, it, or they in sentence two.",
        rounds: [
          { prompt: "Write two sentences about a friend. Use a pronoun in the second.", starters: ["My friend ", "She "] },
          { prompt: "Write two sentences about a pet or an object. Use it.", starters: ["The ", "It "] },
          { prompt: "Write three sentences about your family. Use they or we once.", starters: ["Mum ", "We ", "They "] },
        ],
      },
    ],
  },
  {
    id: "t-edit",
    week: 11,
    group: "Edit",
    title: "Edit",
    focus: "Unfinished thoughts, wrong job, then finish marks",
    story: {
      theme: "Careful eyes",
      text: "I wrote about the park. First I checked unfinished thoughts. Running to the park needed a who. Then I checked order. The cake ate Mia was the wrong job. Last I checked capitals and stops.",
    },
    lesson: {
      idea: "Edit in order: unfinished, wrong job, finish marks.",
      why: "If you only add capitals, Running to the park is still unfinished.",
      rule: "One error family at a time. Review week may meet more than one, but name the main one first.",
      steps: ["Ask: who and did?", "Ask: is the order silly?", "Ask: capital, stop, or question mark?", "Read it aloud."],
      examples: [
        { wrong: "Running to the park.", right: "I was running to the park.", why: "Unfinished. Add who." },
        { wrong: "mum packed my lunch", right: "Mum packed my lunch.", why: "Finish marks. The thought was already clear." },
      ],
    },
    activities: [
      {
        id: "t-edit-proof",
        kind: "proof",
        title: "Name the family, then fix",
        prompt: "Unfinished, wrong job, or finish marks. Fix one main problem.",
        layers: L(
          [
            {
              broken: "Eating toast at the table.",
              parts: ["Eating toast at the table."],
              brokenIndex: 0,
              answer: "I was eating toast at the table.",
              answers: ["I was eating toast at the table.", "We were eating toast at the table.", "Mum was eating toast at the table."],
              mustInclude: ["toast"],
              minWords: 5,
              errorChoices: ["Unfinished (no who)", "Wrong job", "Finish marks only"],
              errorIndex: 0,
              guide: "Eating… is only the action. Who was eating?",
              explain: "Add who before the action.",
            },
            {
              broken: "The cake ate Mia.",
              parts: ["The cake ate Mia."],
              brokenIndex: 0,
              answer: "Mia ate the cake.",
              errorChoices: ["Wrong job", "Unfinished", "Finish marks only"],
              errorIndex: 0,
              guide: "Who did the eating? The order is silly.",
              explain: "Mia is who. ate is the action. The cake comes after.",
            },
          ],
          [
            {
              broken: "mum packed my lunch",
              parts: ["mum", "packed", "my", "lunch"],
              brokenIndex: 0,
              answer: "Mum packed my lunch.",
              errorChoices: ["Finish marks", "Unfinished", "Wrong job"],
              errorIndex: 0,
              guide: "Who and did are already there. Check the first letter and the stop.",
              explain: "Capital on Mum and a full stop. Do not rebuild the who.",
            },
            {
              broken: "Because the bus was full.",
              parts: ["Because the bus was full."],
              brokenIndex: 0,
              answer: "We were late because the bus was full.",
              answers: ["We were late because the bus was full.", "I was late because the bus was full.", "The bus was full."],
              mustInclude: ["bus"],
              minWords: 3,
              errorChoices: ["Unfinished (hanging because)", "Finish marks only", "Wrong job"],
              errorIndex: 0,
              guide: "Because… is only a reason. What happened?",
              explain: "Add the main idea, or drop because.",
            },
          ],
          [
            {
              broken: "The busy bee on the flower.",
              parts: ["The busy bee on the flower."],
              brokenIndex: 0,
              answer: "The busy bee landed on the flower.",
              answers: ["The busy bee landed on the flower.", "The busy bee sat on the flower.", "The busy bee flew to the flower."],
              mustInclude: ["bee", "flower"],
              minWords: 5,
              errorChoices: ["Unfinished (no verb)", "Wrong job", "Finish marks only"],
              errorIndex: 0,
              guide: "Who is clear. Nothing happens yet.",
              explain: "Add a verb: landed, sat, or flew.",
            },
          ]
        ),
      },
      {
        id: "t-edit-write",
        kind: "write",
        title: "Write, then edit",
        prompt: "Write first. Then check unfinished, order, and finish marks.",
        rounds: [
          { prompt: "Write three sentences about yesterday. Edit before you finish.", starters: ["Yesterday ", "First ", "I felt "] },
          { prompt: "Turn this into a full sentence, then write one more: Running to the gate.", starters: ["I was ", "Then "] },
        ],
      },
    ],
  },
  {
    id: "s-teams",
    week: 12,
    group: "Spelling",
    title: "Vowel teams",
    focus: "Long vowel spellings: ee, ea, ai, ay, oa",
    story: {
      theme: "Rain and trees",
      text: "The rain fell on the green trees. I will play by the trail. A goat ate leaves near the road. We stayed under the tree until the rain stopped.",
    },
    lesson: {
      idea: "Some long vowel sounds use two letters: rain, tree, play, goat.",
      why: "If you write ran for rain, the word is a different word.",
      rule: "ee or ea for a long e. ai or ay for a long a. oa for a long o in the middle.",
      steps: ["Say the vowel you hear.", "Try the usual team.", "Read the word aloud and check."],
      examples: [
        { wrong: "The ran fell.", right: "The rain fell.", why: "rain uses ai." },
        { wrong: "a green tre", right: "a green tree", why: "tree uses ee." },
      ],
    },
    activities: [
      {
        id: "s-teams-choose",
        kind: "choose",
        title: "Pick the spelling",
        prompt: "Choose the vowel team that matches the word.",
        layers: L(
          [
            { question: "The ___ fell on the trees.", choices: ["rain", "ran", "rane"], answerIndex: 0 },
            { question: "A green ___.", choices: ["tree", "tre", "tray"], answerIndex: 0 },
          ],
          [
            { question: "I will ___ outside.", choices: ["play", "plai", "plee"], answerIndex: 0 },
            { question: "A ___ ate leaves.", choices: ["goat", "gote", "got"], answerIndex: 0 },
          ],
          [{ question: "We ___ under the tree.", choices: ["stayed", "staid", "sted"], answerIndex: 0 }]
        ),
      },
      {
        id: "s-teams-write",
        kind: "write",
        title: "Use a vowel team",
        prompt: "Use rain, tree, play, or goat in a full sentence.",
        rounds: [
          { prompt: "Write two sentences. Use rain in one and tree in the other.", starters: ["The rain ", "The tree "] },
          { prompt: "Write one sentence with play or goat.", starters: ["I will play ", "A goat "] },
        ],
      },
    ],
  },
  {
    id: "s-clusters",
    week: 13,
    group: "Spelling",
    title: "Clusters and silent letters",
    focus: "st, tr, spl at the start; kn and wr with a silent letter",
    story: {
      theme: "A still street",
      text: "I stopped on the street. A truck splashed past. I know a wren sat on the fence. I wrote its name in my book. The knots on the rope were tight.",
    },
    lesson: {
      idea: "Some words start with two or three consonants. Some start with a letter you do not say.",
      why: "know is not no. write is not rite if we are spelling the careful way we read in books.",
      rule: "Say every consonant in stop, tree, and splash. In know and write, the k and w are silent.",
      steps: ["Stretch the start: s-t-op.", "If it is know or write, keep the silent letter.", "Read it back."],
      examples: [
        { wrong: "I no a bird.", right: "I know a bird.", why: "know has a silent k." },
        { wrong: "a truk", right: "a truck", why: "truck keeps the tr cluster and ck." },
      ],
    },
    activities: [
      {
        id: "s-clusters-choose",
        kind: "choose",
        title: "Stretch or silent",
        prompt: "Pick the spelling you would see in a book.",
        layers: L(
          [
            { question: "I ___ on the street.", choices: ["stopped", "stoped", "stopt"], answerIndex: 0 },
            { question: "A ___ went past.", choices: ["truck", "truk", "turck"], answerIndex: 0 },
          ],
          [
            { question: "I ___ a wren.", choices: ["know", "no", "now"], answerIndex: 0 },
            { question: "I ___ its name.", choices: ["wrote", "rote", "wroat"], answerIndex: 0 },
          ],
          [{ question: "The ___ were tight.", choices: ["knots", "nots", "notes"], answerIndex: 0 }]
        ),
      },
      {
        id: "s-clusters-write",
        kind: "write",
        title: "Use the pattern",
        prompt: "Use know or write, and one cluster word like street or truck.",
        rounds: [
          { prompt: "Write two sentences. Use know in one and truck or street in the other.", starters: ["I know ", "A truck "] },
          { prompt: "Write one sentence with wrote.", starters: ["I wrote "] },
        ],
      },
    ],
  },
  {
    id: "s-tricky",
    week: 14,
    group: "Spelling",
    title: "Trap words",
    focus: "High-frequency words that do not match their sound: said, because, friend, they, were",
    story: {
      theme: "What my friend said",
      text: "My friend said we were late because the bus was full. They were kind. I said thank you. We were glad we stayed together.",
    },
    lesson: {
      idea: "Some everyday words must be remembered. Sound is not enough.",
      why: "becos and frend look close, but they are not the spellings we read.",
      rule: "said, because, friend, they, were. Check them slowly.",
      steps: ["Look at the whole word.", "Cover it and try.", "Check friend (ie), because, said, they, were."],
      examples: [
        { wrong: "My frend sed we was late becos…", right: "My friend said we were late because…", why: "Four trap words, remembered not guessed." },
        { wrong: "They was happy.", right: "They were happy.", why: "they goes with were." },
      ],
    },
    activities: [
      {
        id: "s-tricky-choose",
        kind: "choose",
        title: "Pick the book spelling",
        prompt: "Choose the spelling, not the sound-alike.",
        layers: L(
          [
            { question: "My ___ said hello.", choices: ["friend", "frend", "freind"], answerIndex: 0 },
            { question: "I stopped ___ I was tired.", choices: ["because", "becos", "becaus"], answerIndex: 0 },
          ],
          [
            { question: "They ___ happy.", choices: ["were", "was", "wer"], answerIndex: 0 },
            { question: "She ___ we can play.", choices: ["said", "sed", "sayed"], answerIndex: 0 },
          ],
          [{ question: "Best careful line?", choices: ["My friend said they were late because the bus was full.", "My frend sed they was late becos the bus was full.", "My friend say they were late becaus."], answerIndex: 0 }]
        ),
      },
      {
        id: "s-tricky-write",
        kind: "write",
        title: "Use the trap words",
        prompt: "Use friend and because. Spell them the careful way.",
        rounds: [
          { prompt: "Write two sentences. Use friend in one and because in the other.", starters: ["My friend ", "I smiled because "] },
          { prompt: "Write one sentence with said and were.", starters: ["They said "] },
        ],
      },
    ],
  },
  {
    id: "s-morph",
    week: 15,
    group: "Spelling",
    title: "Word families",
    focus: "un- and -ed: unpack, unhappy, played, jumped",
    story: {
      theme: "Unpacking",
      text: "I unpacked my bag. I was unhappy when the zip stuck. Then I played outside. I jumped the puddle. Un- means not, or the reverse. -ed often means it already happened.",
    },
    lesson: {
      idea: "A prefix or suffix changes a word you already know.",
      why: "play and played are a family. un and happy make unhappy.",
      rule: "un- at the start often means not, or undoing. -ed at the end often means past.",
      steps: ["Find the base word: pack, happy, play.", "Add un- or -ed.", "Read the new word."],
      examples: [
        { wrong: "I unpackt my bag.", right: "I unpacked my bag.", why: "-ed on pack. The past is unpacked." },
        { wrong: "I was un happy.", right: "I was unhappy.", why: "un- sticks to happy. It means not happy." },
      ],
    },
    activities: [
      {
        id: "s-morph-choose",
        kind: "choose",
        title: "Build the family",
        prompt: "Pick the word with the prefix or suffix.",
        layers: L(
          [
            { question: "not happy", choices: ["unhappy", "happy", "un happy"], answerIndex: 0 },
            { question: "pack, but in the past, undone", choices: ["unpacked", "unpack", "unpackt"], answerIndex: 0 },
          ],
          [
            { question: "play, already happened", choices: ["played", "plays", "playd"], answerIndex: 0 },
            { question: "jump, already happened", choices: ["jumped", "jumpt", "jumping"], answerIndex: 0 },
          ],
          [{ question: "Which pair is a word family?", choices: ["happy / unhappy", "happy / bee", "play / truck"], answerIndex: 0 }]
        ),
      },
      {
        id: "s-morph-write",
        kind: "write",
        title: "Use un- or -ed",
        prompt: "Use one un- word and one -ed word in full sentences.",
        rounds: [
          { prompt: "Write a sentence with unhappy or unpacked.", starters: ["I unpacked ", "I was unhappy "] },
          { prompt: "Write a sentence with played or jumped.", starters: ["I played ", "I jumped "] },
        ],
      },
    ],
  },
];

CURRICULUM = PROGRAMME;
