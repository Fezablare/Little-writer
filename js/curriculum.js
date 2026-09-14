const CURRICULUM = [
  {
    id: "w1",
    week: 1,
    title: "A sentence needs a start",
    focus: "Capital letters at the beginning",
    activities: [
      {
        id: "w1-spell",
        kind: "spell",
        title: "Spell the little words",
        prompt: "Type each word. Sound it out slowly.",
        rounds: [
          {
            items: [
              { clue: "A pet that meows", answer: "cat" },
              { clue: "A pet that barks", answer: "dog" },
              { clue: "It shines in the sky", answer: "sun" },
              { clue: "You do this with your feet", answer: "run" },
            ],
          },
          {
            items: [
              { clue: "You sit on it", answer: "mat" },
              { clue: "You wear it on your head", answer: "hat" },
              { clue: "A flying mammal", answer: "bat" },
              { clue: "Rest on a chair", answer: "sit" },
            ],
          },
          {
            items: [
              { clue: "You write with it", answer: "pen" },
              { clue: "A colour like a strawberry", answer: "red" },
              { clue: "Not small", answer: "big" },
              { clue: "Jump on one foot", answer: "hop" },
            ],
          },
          {
            items: [
              { clue: "Your mother", answer: "mum" },
              { clue: "Your father", answer: "dad" },
              { clue: "A good time", answer: "fun" },
              { clue: "The opposite of no", answer: "yes" },
            ],
          },
          {
            items: [
              { clue: "A word before a name, like ___ cat", answer: "the" },
              { clue: "Adds another thing", answer: "and" },
              { clue: "You are able to", answer: "can" },
              { clue: "Not in", answer: "out" },
            ],
          },
        ],
      },
      {
        id: "w1-build",
        kind: "build",
        title: "Build a sentence",
        prompt: "Tap the words in order to make a sentence.",
        rounds: [
          { answer: "The cat sat on the mat.", tiles: ["The", "cat", "sat", "on", "the", "mat."] },
          { answer: "A dog ran in the sun.", tiles: ["A", "dog", "ran", "in", "the", "sun."] },
          { answer: "Mum has a red hat.", tiles: ["Mum", "has", "a", "red", "hat."] },
          { answer: "Dad can hop and run.", tiles: ["Dad", "can", "hop", "and", "run."] },
          { answer: "The big pig sat down.", tiles: ["The", "big", "pig", "sat", "down."] },
        ],
      },
      {
        id: "w1-fix",
        kind: "fix",
        title: "Fix the start",
        prompt: "This sentence forgot its capital letter. Write it correctly.",
        rounds: [
          { broken: "the dog ran to the park", answer: "The dog ran to the park." },
          { broken: "my cat likes milk", answer: "My cat likes milk." },
          { broken: "sam sat on the mat", answer: "Sam sat on the mat." },
          { broken: "we can hop in the sun", answer: "We can hop in the sun." },
          { broken: "dad has a big hat", answer: "Dad has a big hat." },
        ],
      },
      {
        id: "w1-write",
        kind: "write",
        title: "Write one sentence",
        prompt: "Write one sentence. Start with a capital and end with a full stop.",
        rounds: [
          { prompt: "Write one sentence about something you like.", starters: ["I like ", "My favourite thing is "], minWords: 4, needCapital: true, needStop: true },
          { prompt: "Write one sentence about an animal.", starters: ["The cat ", "A dog "], minWords: 4, needCapital: true, needStop: true },
          { prompt: "Write one sentence about your family.", starters: ["Mum ", "Dad ", "My sister "], minWords: 4, needCapital: true, needStop: true },
          { prompt: "Write one sentence about outside.", starters: ["The sun ", "I ran "], minWords: 4, needCapital: true, needStop: true },
          { prompt: "Write one sentence about food.", starters: ["I eat ", "My lunch is "], minWords: 4, needCapital: true, needStop: true },
        ],
      },
    ],
  },
  {
    id: "w2",
    week: 2,
    title: "Stop at the end",
    focus: "Full stops",
    activities: [
      {
        id: "w2-spell",
        kind: "spell",
        title: "Short vowel words",
        prompt: "Listen in your head, then type the word.",
        rounds: [
          {
            items: [
              { clue: "You wear it on your head", answer: "hat" },
              { clue: "You sleep in it", answer: "bed" },
              { clue: "A farm animal that oinks", answer: "pig" },
              { clue: "You drink from it", answer: "cup" },
            ],
          },
          {
            items: [
              { clue: "A small insect", answer: "ant" },
              { clue: "Not happy", answer: "sad" },
              { clue: "You do this with a ball", answer: "hit" },
              { clue: "A young dog", answer: "pup" },
            ],
          },
          {
            items: [
              { clue: "A lid for a bottle", answer: "top" },
              { clue: "Not dry", answer: "wet" },
              { clue: "A number after five", answer: "six" },
              { clue: "A baby bear", answer: "cub" },
            ],
          },
          {
            items: [
              { clue: "You cook in it", answer: "pan" },
              { clue: "A colour of grass", answer: "green" },
              { clue: "To finish", answer: "end" },
              { clue: "A place to sit", answer: "log" },
            ],
          },
          {
            items: [
              { clue: "Opposite of go", answer: "stop" },
              { clue: "A meal in the middle of the day", answer: "lunch" },
              { clue: "You pack food in it", answer: "bag" },
              { clue: "Not last", answer: "first" },
            ],
          },
        ],
      },
      {
        id: "w2-build",
        kind: "build",
        title: "Put the full stop on",
        prompt: "Build the sentence. The last tile has the full stop.",
        rounds: [
          { answer: "I can hop on one foot.", tiles: ["I", "can", "hop", "on", "one", "foot."] },
          { answer: "The pig sat in the mud.", tiles: ["The", "pig", "sat", "in", "the", "mud."] },
          { answer: "Mum packed my red bag.", tiles: ["Mum", "packed", "my", "red", "bag."] },
          { answer: "We had lunch in the sun.", tiles: ["We", "had", "lunch", "in", "the", "sun."] },
          { answer: "The pup hid in the bed.", tiles: ["The", "pup", "hid", "in", "the", "bed."] },
        ],
      },
      {
        id: "w2-fix",
        kind: "fix",
        title: "Add the missing stop",
        prompt: "Fix the capital and add a full stop.",
        rounds: [
          { broken: "mum packed my lunch", answer: "Mum packed my lunch." },
          { broken: "the pig is in the mud", answer: "The pig is in the mud." },
          { broken: "i can hop and skip", answer: "I can hop and skip." },
          { broken: "dad sat on the log", answer: "Dad sat on the log." },
          { broken: "we stop at the red light", answer: "We stop at the red light." },
        ],
      },
      {
        id: "w2-write",
        kind: "write",
        title: "Two little sentences",
        prompt: "Write two short sentences. Each one needs a full stop.",
        rounds: [
          { prompt: "Write two short sentences about lunch.", starters: ["I ate ", "Then I "], minWords: 8, minSentences: 2, needCapital: true, needStop: true },
          { prompt: "Write two short sentences about school.", starters: ["I went ", "My teacher "], minWords: 8, minSentences: 2, needCapital: true, needStop: true },
          { prompt: "Write two short sentences about play.", starters: ["I played ", "My friend "], minWords: 8, minSentences: 2, needCapital: true, needStop: true },
          { prompt: "Write two short sentences about home.", starters: ["At home I ", "Mum "], minWords: 8, minSentences: 2, needCapital: true, needStop: true },
          { prompt: "Write two short sentences about a pet.", starters: ["My pet ", "It likes "], minWords: 8, minSentences: 2, needCapital: true, needStop: true },
        ],
      },
    ],
  },
  {
    id: "w3",
    week: 3,
    title: "Who did what",
    focus: "Word order: who + did + what",
    activities: [
      {
        id: "w3-spell",
        kind: "spell",
        title: "Action words",
        prompt: "These words tell us what someone did.",
        rounds: [
          {
            items: [
              { clue: "Move quickly", answer: "run" },
              { clue: "Move in water", answer: "swim" },
              { clue: "Make words with your mouth", answer: "talk" },
              { clue: "Look at words in a book", answer: "read" },
            ],
          },
          {
            items: [
              { clue: "Use your feet to send a ball", answer: "kick" },
              { clue: "Put food in your mouth", answer: "eat" },
              { clue: "Make a picture", answer: "draw" },
              { clue: "Move up with your legs", answer: "jump" },
            ],
          },
          {
            items: [
              { clue: "Hold and move a bag", answer: "carry" },
              { clue: "Look for something", answer: "find" },
              { clue: "Make a sound with your hands", answer: "clap" },
              { clue: "Rest with your eyes shut", answer: "sleep" },
            ],
          },
          {
            items: [
              { clue: "Make food hot", answer: "cook" },
              { clue: "Clean with water", answer: "wash" },
              { clue: "Go by car", answer: "drive" },
              { clue: "Give someone help", answer: "help" },
            ],
          },
          {
            items: [
              { clue: "Open a book and look", answer: "look" },
              { clue: "Use your legs on a bike", answer: "ride" },
              { clue: "Make music with your voice", answer: "sing" },
              { clue: "Put things away", answer: "pack" },
            ],
          },
        ],
      },
      {
        id: "w3-build",
        kind: "build",
        title: "Who, then did, then what",
        prompt: "Start with who. Then the action. Then the rest.",
        rounds: [
          { answer: "Sam kicked the red ball.", tiles: ["Sam", "kicked", "the", "red", "ball."] },
          { answer: "Mia ate the cake.", tiles: ["Mia", "ate", "the", "cake."] },
          { answer: "Dad cooked the fish.", tiles: ["Dad", "cooked", "the", "fish."] },
          { answer: "The bird sang a song.", tiles: ["The", "bird", "sang", "a", "song."] },
          { answer: "Mum read a long book.", tiles: ["Mum", "read", "a", "long", "book."] },
        ],
      },
      {
        id: "w3-fix",
        kind: "fix",
        title: "Unscramble the order",
        prompt: "The words are in the wrong order. Write the sentence so it makes sense.",
        rounds: [
          { broken: "the cake ate Mia", answer: "Mia ate the cake." },
          { broken: "the ball kicked Sam", answer: "Sam kicked the ball." },
          { broken: "the song sang the bird", answer: "The bird sang the song." },
          { broken: "the fish cooked Dad", answer: "Dad cooked the fish." },
          { broken: "a book read Mum", answer: "Mum read a book." },
        ],
      },
      {
        id: "w3-write",
        kind: "write",
        title: "Tell who did what",
        prompt: "Write a sentence about someone doing something.",
        rounds: [
          { prompt: "Write a sentence about a friend or family member doing something.", starters: ["Dad ", "My sister ", "My friend "], minWords: 5, needCapital: true, needStop: true },
          { prompt: "Write a sentence about an animal doing something.", starters: ["The dog ", "A bird "], minWords: 5, needCapital: true, needStop: true },
          { prompt: "Write a sentence about you doing something at school.", starters: ["I ", "We "], minWords: 5, needCapital: true, needStop: true },
          { prompt: "Write a sentence about someone cooking or eating.", starters: ["Mum ", "Grandma "], minWords: 5, needCapital: true, needStop: true },
          { prompt: "Write a sentence about someone playing a game.", starters: ["Sam ", "My brother "], minWords: 5, needCapital: true, needStop: true },
        ],
      },
    ],
  },
  {
    id: "w4",
    week: 4,
    title: "Asking questions",
    focus: "Question marks and question words",
    activities: [
      {
        id: "w4-spell",
        kind: "spell",
        title: "Question words",
        prompt: "These words often start a question.",
        rounds: [
          {
            items: [
              { clue: "Asks for a person", answer: "who" },
              { clue: "Asks for a thing", answer: "what" },
              { clue: "Asks for a place", answer: "where" },
              { clue: "Asks for a time", answer: "when" },
            ],
          },
          {
            items: [
              { clue: "Asks for a reason", answer: "why" },
              { clue: "Asks for a way", answer: "how" },
              { clue: "Asks if something is true", answer: "is" },
              { clue: "Asks if you are able", answer: "can" },
            ],
          },
          {
            items: [
              { clue: "Asks which person", answer: "which" },
              { clue: "A polite question start", answer: "please" },
              { clue: "Asks if you have something", answer: "do" },
              { clue: "Asks about belonging", answer: "whose" },
            ],
          },
          {
            items: [
              { clue: "Not a statement, a ___", answer: "question" },
              { clue: "The mark at the end of a question", answer: "mark" },
              { clue: "To ask for an answer", answer: "ask" },
              { clue: "What you give after a question", answer: "answer" },
            ],
          },
          {
            items: [
              { clue: "Asks about a time of day", answer: "time" },
              { clue: "Asks about a meal", answer: "dinner" },
              { clue: "A friend you might ask", answer: "friend" },
              { clue: "A place you sit at school", answer: "class" },
            ],
          },
        ],
      },
      {
        id: "w4-build",
        kind: "build",
        title: "Build a question",
        prompt: "Questions often start with a question word and end with ?",
        rounds: [
          { answer: "Where is my blue bag?", tiles: ["Where", "is", "my", "blue", "bag?"] },
          { answer: "What time is dinner?", tiles: ["What", "time", "is", "dinner?"] },
          { answer: "Who took the red pen?", tiles: ["Who", "took", "the", "red", "pen?"] },
          { answer: "When can we go home?", tiles: ["When", "can", "we", "go", "home?"] },
          { answer: "Why is the door shut?", tiles: ["Why", "is", "the", "door", "shut?"] },
        ],
      },
      {
        id: "w4-fix",
        kind: "fix",
        title: "Make it a question",
        prompt: "Turn this into a proper question.",
        rounds: [
          { broken: "what time is dinner", answer: "What time is dinner?" },
          { broken: "where is my hat", answer: "Where is my hat?" },
          { broken: "who is at the door", answer: "Who is at the door?" },
          { broken: "can you help me", answer: "Can you help me?" },
          { broken: "why are we late", answer: "Why are we late?" },
        ],
      },
      {
        id: "w4-write",
        kind: "write",
        title: "Ask two questions",
        prompt: "Write questions. Include a question mark.",
        rounds: [
          { prompt: "Write two questions you could ask a friend at school.", starters: ["What ", "Where ", "Do you "], minWords: 8, minSentences: 2, needQuestion: true },
          { prompt: "Write two questions you could ask at home.", starters: ["When ", "Can ", "Who "], minWords: 8, minSentences: 2, needQuestion: true },
          { prompt: "Write two questions about a lost thing.", starters: ["Where is ", "Have you "], minWords: 8, minSentences: 2, needQuestion: true },
          { prompt: "Write two questions about food.", starters: ["What ", "Can we "], minWords: 8, minSentences: 2, needQuestion: true },
          { prompt: "Write two questions about a game.", starters: ["How ", "Who "], minWords: 8, minSentences: 2, needQuestion: true },
        ],
      },
    ],
  },
  {
    id: "w5",
    week: 5,
    title: "Tricky everyday words",
    focus: "Common spelling patterns",
    activities: [
      {
        id: "w5-spell",
        kind: "spell",
        title: "Words we use a lot",
        prompt: "These words do not always sound the way they look. Learn them.",
        rounds: [
          {
            items: [
              { clue: "He ___ hello.", answer: "said" },
              { clue: "Not here, over ___", answer: "there" },
              { clue: "A group of people", answer: "they" },
              { clue: "Gives a reason", answer: "because" },
            ],
          },
          {
            items: [
              { clue: "A friend (not frend)", answer: "friend" },
              { clue: "People (not peple)", answer: "people" },
              { clue: "Would like to", answer: "would" },
              { clue: "Could not, short form", answer: "couldn't" },
            ],
          },
          {
            items: [
              { clue: "Was not, short form", answer: "wasn't" },
              { clue: "Does not, short form", answer: "doesn't" },
              { clue: "A place you go to learn", answer: "school" },
              { clue: "Seven days", answer: "week" },
            ],
          },
          {
            items: [
              { clue: "Opposite of right (direction)", answer: "left" },
              { clue: "Opposite of wrong", answer: "right" },
              { clue: "To own something", answer: "have" },
              { clue: "Past of go", answer: "went" },
            ],
          },
          {
            items: [
              { clue: "Not two, but ___", answer: "one" },
              { clue: "Once more", answer: "again" },
              { clue: "A thought in your head", answer: "idea" },
              { clue: "Very nice to look at", answer: "beautiful" },
            ],
          },
        ],
      },
      {
        id: "w5-build",
        kind: "build",
        title: "Use because",
        prompt: "Build a sentence that gives a reason.",
        rounds: [
          { answer: "I wore a coat because it was cold.", tiles: ["I", "wore", "a", "coat", "because", "it", "was", "cold."] },
          { answer: "They said they were going there.", tiles: ["They", "said", "they", "were", "going", "there."] },
          { answer: "My friend went to school.", tiles: ["My", "friend", "went", "to", "school."] },
          { answer: "People were happy because we won.", tiles: ["People", "were", "happy", "because", "we", "won."] },
          { answer: "I would like a drink please.", tiles: ["I", "would", "like", "a", "drink", "please."] },
        ],
      },
      {
        id: "w5-fix",
        kind: "fix",
        title: "Fix the tricky words",
        prompt: "Correct the spelling and the sentence.",
        rounds: [
          { broken: "they sed they were going over their", answer: "They said they were going over there." },
          { broken: "i like it becos it is fun", answer: "I like it because it is fun." },
          { broken: "my frend went to scool", answer: "My friend went to school." },
          { broken: "peple were waiting over their", answer: "People were waiting over there." },
          { broken: "she sed she would help", answer: "She said she would help." },
        ],
      },
      {
        id: "w5-write",
        kind: "write",
        title: "Give a reason",
        prompt: "Write a sentence that uses because.",
        rounds: [
          { prompt: "Write a sentence that uses because.", starters: ["I like this book because ", "I was happy because "], minWords: 7, needCapital: true, needStop: true, mustInclude: ["because"] },
          { prompt: "Write a sentence about the weather using because.", starters: ["I wore a coat because ", "We stayed in because "], minWords: 7, needCapital: true, needStop: true, mustInclude: ["because"] },
          { prompt: "Write a sentence about a friend using because.", starters: ["I like my friend because ", "We played because "], minWords: 7, needCapital: true, needStop: true, mustInclude: ["because"] },
          { prompt: "Write a sentence about school using because.", starters: ["I was late because ", "I like school because "], minWords: 7, needCapital: true, needStop: true, mustInclude: ["because"] },
          { prompt: "Write a sentence about food using because.", starters: ["I ate it because ", "I do not like it because "], minWords: 7, needCapital: true, needStop: true, mustInclude: ["because"] },
        ],
      },
    ],
  },
  {
    id: "w6",
    week: 6,
    title: "Join two ideas",
    focus: "and, but, so",
    activities: [
      {
        id: "w6-spell",
        kind: "spell",
        title: "Joining words",
        prompt: "These little words stick ideas together.",
        rounds: [
          {
            items: [
              { clue: "Adds another idea", answer: "and" },
              { clue: "Shows a different idea", answer: "but" },
              { clue: "Shows a result", answer: "so" },
              { clue: "Shows a reason", answer: "because" },
            ],
          },
          {
            items: [
              { clue: "Also", answer: "also" },
              { clue: "Next in time", answer: "then" },
              { clue: "If not", answer: "or" },
              { clue: "Even so", answer: "still" },
            ],
          },
          {
            items: [
              { clue: "Two ideas stuck together", answer: "join" },
              { clue: "A complete thought", answer: "sentence" },
              { clue: "A naming word", answer: "noun" },
              { clue: "A doing word", answer: "verb" },
            ],
          },
          {
            items: [
              { clue: "I wanted to play ___ I had jobs.", answer: "but" },
              { clue: "It was late ___ we went home.", answer: "so" },
              { clue: "We packed fruit ___ water.", answer: "and" },
              { clue: "I sat down ___ I was tired.", answer: "because" },
            ],
          },
          {
            items: [
              { clue: "After that", answer: "next" },
              { clue: "At last", answer: "finally" },
              { clue: "In the beginning", answer: "first" },
              { clue: "A second idea", answer: "another" },
            ],
          },
        ],
      },
      {
        id: "w6-build",
        kind: "build",
        title: "Join with and",
        prompt: "Two ideas, one sentence.",
        rounds: [
          { answer: "We packed fruit and we packed water.", tiles: ["We", "packed", "fruit", "and", "we", "packed", "water."] },
          { answer: "I wanted to play but I had jobs.", tiles: ["I", "wanted", "to", "play", "but", "I", "had", "jobs."] },
          { answer: "It was late so we went home.", tiles: ["It", "was", "late", "so", "we", "went", "home."] },
          { answer: "Sam ran and Mia jumped.", tiles: ["Sam", "ran", "and", "Mia", "jumped."] },
          { answer: "The bag was heavy but I carried it.", tiles: ["The", "bag", "was", "heavy", "but", "I", "carried", "it."] },
        ],
      },
      {
        id: "w6-fix",
        kind: "fix",
        title: "Choose a better join",
        prompt: "Rewrite this so it uses and, but, or so.",
        rounds: [
          { broken: "I wanted to play I had to do jobs", answer: "I wanted to play but I had to do jobs." },
          { broken: "it was raining we stayed inside", answer: "It was raining so we stayed inside." },
          { broken: "mum packed grapes mum packed cheese", answer: "Mum packed grapes and Mum packed cheese." },
          { broken: "i was tired i kept walking", answer: "I was tired but I kept walking." },
          { broken: "the bus was full we waited", answer: "The bus was full so we waited." },
        ],
      },
      {
        id: "w6-write",
        kind: "write",
        title: "Two ideas, one line",
        prompt: "Write one sentence that uses and, but, or so.",
        rounds: [
          { prompt: "Write one sentence that uses and or but.", starters: ["I wanted to ", "We went to "], minWords: 8, needCapital: true, needStop: true },
          { prompt: "Write one sentence that uses so.", starters: ["It was late so ", "I was hungry so "], minWords: 8, needCapital: true, needStop: true, mustInclude: ["so"] },
          { prompt: "Write one sentence that uses but.", starters: ["I like swimming but ", "The bag was heavy but "], minWords: 8, needCapital: true, needStop: true, mustInclude: ["but"] },
          { prompt: "Write one sentence that uses and.", starters: ["We packed ", "Mum "], minWords: 8, needCapital: true, needStop: true, mustInclude: ["and"] },
          { prompt: "Write one sentence that joins two things you did today.", starters: ["Today I ", "After school I "], minWords: 8, needCapital: true, needStop: true },
        ],
      },
    ],
  },
  {
    id: "w7",
    week: 7,
    title: "Paint with adjectives",
    focus: "Describing words",
    activities: [
      {
        id: "w7-spell",
        kind: "spell",
        title: "Describing words",
        prompt: "These words tell us more about a thing.",
        rounds: [
          {
            items: [
              { clue: "Not small", answer: "huge" },
              { clue: "Makes a lot of sound", answer: "loud" },
              { clue: "Nice to look at", answer: "pretty" },
              { clue: "Not smooth", answer: "rough" },
            ],
          },
          {
            items: [
              { clue: "Very small", answer: "tiny" },
              { clue: "Not loud", answer: "quiet" },
              { clue: "Not old", answer: "new" },
              { clue: "Not soft", answer: "hard" },
            ],
          },
          {
            items: [
              { clue: "Full of light", answer: "bright" },
              { clue: "Not warm", answer: "cold" },
              { clue: "Nice smell", answer: "sweet" },
              { clue: "Covered in dirt", answer: "muddy" },
            ],
          },
          {
            items: [
              { clue: "Moving fast", answer: "quick" },
              { clue: "Moving slowly", answer: "slow" },
              { clue: "Full of joy", answer: "happy" },
              { clue: "A bit scared", answer: "nervous" },
            ],
          },
          {
            items: [
              { clue: "Shines like gold", answer: "golden" },
              { clue: "Colour of the sky", answer: "blue" },
              { clue: "Colour of grass", answer: "green" },
              { clue: "Very nice", answer: "lovely" },
            ],
          },
        ],
      },
      {
        id: "w7-build",
        kind: "build",
        title: "Add a describing word",
        prompt: "Build a sentence with a clear picture.",
        rounds: [
          { answer: "The tiny frog hid under a leaf.", tiles: ["The", "tiny", "frog", "hid", "under", "a", "leaf."] },
          { answer: "A loud bird sat on the fence.", tiles: ["A", "loud", "bird", "sat", "on", "the", "fence."] },
          { answer: "The huge wave crashed on the sand.", tiles: ["The", "huge", "wave", "crashed", "on", "the", "sand."] },
          { answer: "My soft cat slept on the bed.", tiles: ["My", "soft", "cat", "slept", "on", "the", "bed."] },
          { answer: "The bright sun warmed the path.", tiles: ["The", "bright", "sun", "warmed", "the", "path."] },
        ],
      },
      {
        id: "w7-fix",
        kind: "fix",
        title: "Make it more interesting",
        prompt: "Rewrite this and add at least one describing word.",
        rounds: [
          { broken: "The dog ran in the park.", answer: "The brown dog ran in the park.", flexible: true },
          { broken: "The bird sat in the tree.", answer: "The tiny bird sat in the tree.", flexible: true },
          { broken: "A car went down the road.", answer: "A red car went down the road.", flexible: true },
          { broken: "The cake was on the plate.", answer: "The sweet cake was on the plate.", flexible: true },
          { broken: "Waves hit the sand.", answer: "Huge waves hit the sand.", flexible: true },
        ],
      },
      {
        id: "w7-write",
        kind: "write",
        title: "Describe a place",
        prompt: "Write two sentences. Use at least one describing word.",
        rounds: [
          { prompt: "Write two sentences about a park, beach, or backyard.", starters: ["The park was ", "I saw a "], minWords: 10, minSentences: 2, needCapital: true, needStop: true },
          { prompt: "Write two sentences about your room.", starters: ["My room is ", "I have a "], minWords: 10, minSentences: 2, needCapital: true, needStop: true },
          { prompt: "Write two sentences about a meal.", starters: ["The food was ", "I tasted "], minWords: 10, minSentences: 2, needCapital: true, needStop: true },
          { prompt: "Write two sentences about an animal.", starters: ["The animal was ", "It had "], minWords: 10, minSentences: 2, needCapital: true, needStop: true },
          { prompt: "Write two sentences about the weather.", starters: ["The sky was ", "The wind "], minWords: 10, minSentences: 2, needCapital: true, needStop: true },
        ],
      },
    ],
  },
  {
    id: "w8",
    week: 8,
    title: "A paragraph has a job",
    focus: "Topic sentence first",
    activities: [
      {
        id: "w8-spell",
        kind: "spell",
        title: "Paragraph words",
        prompt: "Useful words for grouping ideas.",
        rounds: [
          {
            items: [
              { clue: "The first sentence often does this", answer: "introduces" },
              { clue: "Another word for idea", answer: "topic" },
              { clue: "Extra information", answer: "detail" },
              { clue: "The last sentence can do this", answer: "finish" },
            ],
          },
          {
            items: [
              { clue: "A group of sentences", answer: "paragraph" },
              { clue: "The main point", answer: "idea" },
              { clue: "To begin", answer: "start" },
              { clue: "To close", answer: "end" },
            ],
          },
          {
            items: [
              { clue: "Saturday and Sunday", answer: "weekend" },
              { clue: "A school fair", answer: "fete" },
              { clue: "Busy and full", answer: "crowded" },
              { clue: "Enjoyable", answer: "fun" },
            ],
          },
          {
            items: [
              { clue: "Grandmother", answer: "grandma" },
              { clue: "The morning", answer: "morning" },
              { clue: "After midday meal", answer: "lunch" },
              { clue: "Feeling glad", answer: "happy" },
            ],
          },
          {
            items: [
              { clue: "The best part", answer: "favourite" },
              { clue: "Outside", answer: "outside" },
              { clue: "A visit", answer: "visit" },
              { clue: "Always", answer: "always" },
            ],
          },
        ],
      },
      {
        id: "w8-arrange",
        kind: "arrange",
        title: "Put the paragraph in order",
        prompt: "A paragraph starts with the main idea. Tap the sentences in the right order.",
        rounds: [
          {
            sentences: [
              "Saturday is my favourite day.",
              "I play outside in the morning.",
              "After lunch we visit Grandma.",
              "I always go to bed happy.",
            ],
          },
          {
            sentences: [
              "The school fete was busy and fun.",
              "I won a prize at the lucky dip.",
              "We ate hot chips on the grass.",
              "I hope we have another fete soon.",
            ],
          },
          {
            sentences: [
              "My bedroom is a quiet place.",
              "I keep my books on a low shelf.",
              "A soft lamp sits by the bed.",
              "I like to read there at night.",
            ],
          },
          {
            sentences: [
              "Soccer is the best game at school.",
              "We run up and down the field.",
              "Sam always passes the ball to me.",
              "I feel proud when we score.",
            ],
          },
          {
            sentences: [
              "Rainy days can still be good.",
              "We bake biscuits in the warm kitchen.",
              "Then we play cards at the table.",
              "The house smells sweet all afternoon.",
            ],
          },
        ],
      },
      {
        id: "w8-fix",
        kind: "fix",
        title: "Write a strong first sentence",
        prompt: "This first sentence is too weak. Rewrite it so it tells the topic clearly.",
        rounds: [
          { broken: "it was stuff", answer: "The school fete was busy and fun." },
          { broken: "things happened", answer: "Saturday is my favourite day." },
          { broken: "it was good", answer: "The library is a quiet, happy place." },
          { broken: "we did things", answer: "Our class grew beans in cups." },
          { broken: "it was ok", answer: "Making pancakes is easy." },
        ],
      },
      {
        id: "w8-write",
        kind: "write",
        title: "Start a paragraph",
        prompt: "Write a topic sentence, then one extra sentence with a detail.",
        rounds: [
          { prompt: "Write a topic sentence about your weekend, then one extra sentence with a detail.", starters: ["On the weekend I ", "The best part was "], minWords: 12, minSentences: 2, needCapital: true, needStop: true },
          { prompt: "Write a topic sentence about school, then one detail.", starters: ["School is ", "In class we "], minWords: 12, minSentences: 2, needCapital: true, needStop: true },
          { prompt: "Write a topic sentence about a sport, then one detail.", starters: ["My favourite sport is ", "We "], minWords: 12, minSentences: 2, needCapital: true, needStop: true },
          { prompt: "Write a topic sentence about a pet or animal, then one detail.", starters: ["My pet is ", "It likes "], minWords: 12, minSentences: 2, needCapital: true, needStop: true },
          { prompt: "Write a topic sentence about a place you like, then one detail.", starters: ["I like going to ", "There I "], minWords: 12, minSentences: 2, needCapital: true, needStop: true },
        ],
      },
    ],
  },
  {
    id: "w9",
    week: 9,
    title: "Add the middle",
    focus: "Supporting sentences",
    activities: [
      {
        id: "w9-spell",
        kind: "spell",
        title: "Detail words",
        prompt: "These words help you add more information.",
        rounds: [
          {
            items: [
              { clue: "Also", answer: "also" },
              { clue: "Next", answer: "then" },
              { clue: "After that", answer: "after" },
              { clue: "For example", answer: "example" },
            ],
          },
          {
            items: [
              { clue: "First", answer: "first" },
              { clue: "Soon", answer: "soon" },
              { clue: "Later", answer: "later" },
              { clue: "Another", answer: "another" },
            ],
          },
          {
            items: [
              { clue: "A place with animals", answer: "zoo" },
              { clue: "A breakfast food", answer: "pancake" },
              { clue: "A kitchen pan", answer: "pan" },
              { clue: "A smell", answer: "smell" },
            ],
          },
          {
            items: [
              { clue: "Mix together", answer: "mix" },
              { clue: "White powder for baking", answer: "flour" },
              { clue: "From a cow", answer: "milk" },
              { clue: "From a hen", answer: "eggs" },
            ],
          },
          {
            items: [
              { clue: "A trip", answer: "trip" },
              { clue: "A detail", answer: "detail" },
              { clue: "Support", answer: "support" },
              { clue: "Middle", answer: "middle" },
            ],
          },
        ],
      },
      {
        id: "w9-arrange",
        kind: "arrange",
        title: "Keep the details together",
        prompt: "Main idea, then details, then a close.",
        rounds: [
          {
            sentences: [
              "Making pancakes is easy.",
              "First we mix flour, milk and eggs.",
              "Then we cook them in a pan.",
              "Soon the kitchen smells wonderful.",
            ],
          },
          {
            sentences: [
              "The zoo was full of noise.",
              "First we watched the lions rest.",
              "Then the monkeys jumped for bananas.",
              "I did not want to leave.",
            ],
          },
          {
            sentences: [
              "Our garden needs care every week.",
              "We water the tomatoes in the morning.",
              "We pull weeds after school.",
              "The plants look greener each day.",
            ],
          },
          {
            sentences: [
              "Catching the bus is a morning job.",
              "I pack my bag the night before.",
              "Then I wait at the stop with Mum.",
              "I am almost never late.",
            ],
          },
          {
            sentences: [
              "Painting a picture takes time.",
              "First I draw the shapes in pencil.",
              "Then I add colour with a brush.",
              "At last the paper looks finished.",
            ],
          },
        ],
      },
      {
        id: "w9-fix",
        kind: "fix",
        title: "This detail jumped in too soon",
        prompt: "Rewrite as one clear supporting sentence.",
        rounds: [
          { broken: "monkeys bananas loud and jumping everywhere wow", answer: "The monkeys jumped around and ate bananas." },
          { broken: "flour milk eggs mix pan hot yum", answer: "First we mix flour, milk and eggs." },
          { broken: "weeds tomatoes water morning green", answer: "We water the tomatoes in the morning." },
          { broken: "bag stop mum wait late never", answer: "Then I wait at the stop with Mum." },
          { broken: "pencil shapes colour brush paper done", answer: "Then I add colour with a brush." },
        ],
      },
      {
        id: "w9-write",
        kind: "write",
        title: "Three sentences",
        prompt: "Write three sentences. Sentence 1: the topic. Sentence 2 and 3: details.",
        rounds: [
          { prompt: "Write three sentences about a trip.", starters: ["We went to ", "First we ", "Then we "], minWords: 18, minSentences: 3, needCapital: true, needStop: true },
          { prompt: "Write three sentences about cooking.", starters: ["We made ", "First we ", "Then we "], minWords: 18, minSentences: 3, needCapital: true, needStop: true },
          { prompt: "Write three sentences about a game.", starters: ["We played ", "First ", "Then "], minWords: 18, minSentences: 3, needCapital: true, needStop: true },
          { prompt: "Write three sentences about a class job.", starters: ["In class we ", "First ", "After that "], minWords: 18, minSentences: 3, needCapital: true, needStop: true },
          { prompt: "Write three sentences about a visit.", starters: ["We visited ", "When we arrived ", "Then "], minWords: 18, minSentences: 3, needCapital: true, needStop: true },
        ],
      },
    ],
  },
  {
    id: "w10",
    week: 10,
    title: "Finish the thought",
    focus: "Closing sentences",
    activities: [
      {
        id: "w10-spell",
        kind: "spell",
        title: "Ending words",
        prompt: "These words often help a paragraph finish.",
        rounds: [
          {
            items: [
              { clue: "In the end", answer: "finally" },
              { clue: "That is why", answer: "so" },
              { clue: "A feeling at the end", answer: "happy" },
              { clue: "Another word for end", answer: "last" },
            ],
          },
          {
            items: [
              { clue: "A close", answer: "close" },
              { clue: "Proud", answer: "proud" },
              { clue: "Loved", answer: "loved" },
              { clue: "Grow", answer: "grow" },
            ],
          },
          {
            items: [
              { clue: "Beans", answer: "beans" },
              { clue: "Shoots", answer: "shoots" },
              { clue: "Watered", answer: "watered" },
              { clue: "Exciting", answer: "exciting" },
            ],
          },
          {
            items: [
              { clue: "Made", answer: "made" },
              { clue: "Used", answer: "used" },
              { clue: "Felt", answer: "felt" },
              { clue: "Finished", answer: "finished" },
            ],
          },
          {
            items: [
              { clue: "Wrap up", answer: "end" },
              { clue: "A feeling", answer: "feeling" },
              { clue: "Remember", answer: "remember" },
              { clue: "Always", answer: "always" },
            ],
          },
        ],
      },
      {
        id: "w10-arrange",
        kind: "arrange",
        title: "Find the ending",
        prompt: "The last sentence should wrap up the idea, not start a new one.",
        rounds: [
          {
            sentences: [
              "Our class grew beans in cups.",
              "We watered them every morning.",
              "Green shoots came up in a week.",
              "It was exciting to watch them grow.",
            ],
          },
          {
            sentences: [
              "I made a card for Mum.",
              "I used blue paper and gold stars.",
              "I wrote a short message inside.",
              "I felt proud when I gave it to her.",
            ],
          },
          {
            sentences: [
              "We built a fort in the lounge.",
              "Chairs held up the blankets.",
              "A torch made a tiny lamp.",
              "I did not want to pack it away.",
            ],
          },
          {
            sentences: [
              "The concert was in the hall.",
              "We practised the song for weeks.",
              "Families sat in long rows.",
              "I felt brave when I sang my line.",
            ],
          },
          {
            sentences: [
              "We painted the fence with Dad.",
              "The brushes dripped white paint.",
              "My shirt got a small splash.",
              "At the end the fence looked new.",
            ],
          },
        ],
      },
      {
        id: "w10-fix",
        kind: "fix",
        title: "Write a better ending",
        prompt: "This ending starts a new topic. Rewrite a closing sentence about the same idea.",
        rounds: [
          { broken: "then we played football and had chips", answer: "I loved watching our beans grow." },
          { broken: "then I wanted pizza and a movie", answer: "I felt proud when I gave Mum the card." },
          { broken: "anyway soccer is my favourite", answer: "I did not want to pack the fort away." },
          { broken: "later we bought new shoes", answer: "I felt brave when I sang my line." },
          { broken: "then we went to the shops", answer: "At the end the fence looked new." },
        ],
      },
      {
        id: "w10-write",
        kind: "write",
        title: "Write and close",
        prompt: "Write a short paragraph. End with how you felt.",
        rounds: [
          { prompt: "Write a short paragraph about something you made. End with how you felt.", starters: ["I made ", "I used ", "At the end I felt "], minWords: 20, minSentences: 3, needCapital: true, needStop: true },
          { prompt: "Write a short paragraph about helping at home. End with how you felt.", starters: ["I helped ", "I ", "I felt "], minWords: 20, minSentences: 3, needCapital: true, needStop: true },
          { prompt: "Write a short paragraph about a game you played. End with how you felt.", starters: ["We played ", "Then ", "I felt "], minWords: 20, minSentences: 3, needCapital: true, needStop: true },
          { prompt: "Write a short paragraph about a class project. End with how you felt.", starters: ["Our class ", "We ", "I felt "], minWords: 20, minSentences: 3, needCapital: true, needStop: true },
          { prompt: "Write a short paragraph about a surprise. End with how you felt.", starters: ["I was surprised when ", "Then ", "I felt "], minWords: 20, minSentences: 3, needCapital: true, needStop: true },
        ],
      },
    ],
  },
  {
    id: "w11",
    week: 11,
    title: "Stay on the topic",
    focus: "Keeping sentences together",
    activities: [
      {
        id: "w11-spell",
        kind: "spell",
        title: "Stay-on-track words",
        prompt: "Type these carefully.",
        rounds: [
          {
            items: [
              { clue: "The main idea", answer: "topic" },
              { clue: "Not this, the other", answer: "instead" },
              { clue: "Still about the same thing", answer: "same" },
              { clue: "A group of sentences", answer: "paragraph" },
            ],
          },
          {
            items: [
              { clue: "Does not belong", answer: "stray" },
              { clue: "Leave out", answer: "leave" },
              { clue: "Together", answer: "together" },
              { clue: "Focus", answer: "focus" },
            ],
          },
          {
            items: [
              { clue: "Bicycle", answer: "bike" },
              { clue: "Head protection", answer: "helmet" },
              { clue: "Shops", answer: "shops" },
              { clue: "Shiny", answer: "shiny" },
            ],
          },
          {
            items: [
              { clue: "Reading", answer: "reading" },
              { clue: "Night", answer: "night" },
              { clue: "Soccer", answer: "soccer" },
              { clue: "Loud", answer: "loud" },
            ],
          },
          {
            items: [
              { clue: "Animal", answer: "animal" },
              { clue: "Lives", answer: "lives" },
              { clue: "Likes", answer: "likes" },
              { clue: "Chose", answer: "chose" },
            ],
          },
        ],
      },
      {
        id: "w11-arrange",
        kind: "arrange",
        title: "Drop the stray sentence",
        prompt: "One sentence does not belong. Put the ones that belong in order. Leave the stray one unused.",
        rounds: [
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
          {
            sentences: [
              "Grandma's kitchen smells like lemon.",
              "She lets me stir the cake mix.",
              "We lick the spoon when she is not looking.",
              "The train was late this morning.",
            ],
            answerOrder: [
              "Grandma's kitchen smells like lemon.",
              "She lets me stir the cake mix.",
              "We lick the spoon when she is not looking.",
            ],
          },
          {
            sentences: [
              "Our henhouse is at the back fence.",
              "The hens lay brown eggs.",
              "I scatter grain every afternoon.",
              "Video games are loud.",
            ],
            answerOrder: [
              "Our henhouse is at the back fence.",
              "The hens lay brown eggs.",
              "I scatter grain every afternoon.",
            ],
          },
        ],
      },
      {
        id: "w11-fix",
        kind: "fix",
        title: "Take out the extra idea",
        prompt: "Rewrite as one sentence. Leave out the extra idea.",
        rounds: [
          { broken: "I love reading at night and also soccer is loud", answer: "I love reading at night." },
          { broken: "my bike is red and pizza is my favourite", answer: "My bike is red." },
          { broken: "the beach was windy and my maths book is missing", answer: "The beach was windy." },
          { broken: "grandma's kitchen smells like lemon and the train was late", answer: "Grandma's kitchen smells like lemon." },
          { broken: "the hens lay brown eggs and video games are loud", answer: "The hens lay brown eggs." },
        ],
      },
      {
        id: "w11-write",
        kind: "write",
        title: "One topic only",
        prompt: "Write three sentences about one topic. Do not change topic.",
        rounds: [
          { prompt: "Write three sentences about one animal. Do not change topic.", starters: ["The animal I chose is ", "It lives ", "It likes to "], minWords: 18, minSentences: 3, needCapital: true, needStop: true },
          { prompt: "Write three sentences about one game. Do not change topic.", starters: ["The game I chose is ", "You ", "I like it because "], minWords: 18, minSentences: 3, needCapital: true, needStop: true },
          { prompt: "Write three sentences about one place. Do not change topic.", starters: ["The place I chose is ", "There I ", "It feels "], minWords: 18, minSentences: 3, needCapital: true, needStop: true },
          { prompt: "Write three sentences about one person. Do not change topic.", starters: ["The person I chose is ", "They ", "I like them because "], minWords: 18, minSentences: 3, needCapital: true, needStop: true },
          { prompt: "Write three sentences about one food. Do not change topic.", starters: ["The food I chose is ", "It tastes ", "I eat it when "], minWords: 18, minSentences: 3, needCapital: true, needStop: true },
        ],
      },
    ],
  },
  {
    id: "w12",
    week: 12,
    title: "A whole little paragraph",
    focus: "Put it all together",
    activities: [
      {
        id: "w12-spell",
        kind: "spell",
        title: "Last spelling stretch",
        prompt: "A mix of useful words from the whole programme.",
        rounds: [
          {
            items: [
              { clue: "People (not peple)", answer: "people" },
              { clue: "A friend (not frend)", answer: "friend" },
              { clue: "Beautiful (not beatiful)", answer: "beautiful" },
              { clue: "Because (not becos)", answer: "because" },
            ],
          },
          {
            items: [
              { clue: "They said (not sed)", answer: "said" },
              { clue: "Over there (not their)", answer: "there" },
              { clue: "Would", answer: "would" },
              { clue: "School", answer: "school" },
            ],
          },
          {
            items: [
              { clue: "Paragraph", answer: "paragraph" },
              { clue: "Sentence", answer: "sentence" },
              { clue: "Question", answer: "question" },
              { clue: "Favourite", answer: "favourite" },
            ],
          },
          {
            items: [
              { clue: "Finally", answer: "finally" },
              { clue: "Instead", answer: "instead" },
              { clue: "Always", answer: "always" },
              { clue: "Remember", answer: "remember" },
            ],
          },
          {
            items: [
              { clue: "Library", answer: "library" },
              { clue: "Animals", answer: "animals" },
              { clue: "Librarian", answer: "librarian" },
              { clue: "Story", answer: "story" },
            ],
          },
        ],
      },
      {
        id: "w12-arrange",
        kind: "arrange",
        title: "Build the full paragraph",
        prompt: "Topic, two details, then a close.",
        rounds: [
          {
            sentences: [
              "The library is a quiet, happy place.",
              "I look for books about animals.",
              "Sometimes the librarian helps me choose.",
              "I always leave with a new story.",
            ],
          },
          {
            sentences: [
              "I remember a hot day at the beach.",
              "First we put down a big towel.",
              "Then the waves were huge.",
              "I felt brave when I jumped in.",
            ],
          },
          {
            sentences: [
              "Grandma's lemon cake is the best.",
              "The kitchen smells sweet and bright.",
              "She lets me stir until it is smooth.",
              "I always ask for a second slice.",
            ],
          },
          {
            sentences: [
              "Our henhouse sits by the back fence.",
              "The hens fuss and peck at grain.",
              "I collect the warm brown eggs.",
              "I feel useful when the basket is full.",
            ],
          },
          {
            sentences: [
              "Rainy Saturdays can be the nicest.",
              "We bake biscuits and play cards.",
              "The windows steam up while we talk.",
              "I go to bed warm and full.",
            ],
          },
        ],
      },
      {
        id: "w12-fix",
        kind: "fix",
        title: "Polish this paragraph",
        prompt: "Fix capitals, full stops, and spelling.",
        rounds: [
          { broken: "we went to the beach becos it was hot the waves were huge i felt brave", answer: "We went to the beach because it was hot. The waves were huge. I felt brave." },
          { broken: "the library is quiet i look for animal books i leave with a story", answer: "The library is quiet. I look for animal books. I leave with a story." },
          { broken: "my frend sed we should go over their", answer: "My friend said we should go over there." },
          { broken: "grandma's cake is beatiful i stir it i ask for more", answer: "Grandma's cake is beautiful. I stir it. I ask for more." },
          { broken: "peple were happy becos we won the game", answer: "People were happy because we won the game." },
        ],
      },
      {
        id: "w12-write",
        kind: "write",
        title: "Your own paragraph",
        prompt: "Write a paragraph of 4 sentences. Start with the topic, add two details, and finish with a feeling.",
        rounds: [
          { prompt: "Write a paragraph of 4 sentences about a day you remember.", starters: ["I remember ", "First ", "Then ", "I felt "], minWords: 28, minSentences: 4, needCapital: true, needStop: true },
          { prompt: "Write a paragraph of 4 sentences about a place you love.", starters: ["I love ", "There I ", "I also ", "I feel "], minWords: 28, minSentences: 4, needCapital: true, needStop: true },
          { prompt: "Write a paragraph of 4 sentences about making something.", starters: ["I made ", "I used ", "Then I ", "I felt "], minWords: 28, minSentences: 4, needCapital: true, needStop: true },
          { prompt: "Write a paragraph of 4 sentences about a person who helps you.", starters: ["Someone who helps me is ", "They ", "One day ", "I feel "], minWords: 28, minSentences: 4, needCapital: true, needStop: true },
          { prompt: "Write a paragraph of 4 sentences about an animal.", starters: ["The animal I chose is ", "It lives ", "It likes ", "I think "], minWords: 28, minSentences: 4, needCapital: true, needStop: true },
        ],
      },
    ],
  },
];
