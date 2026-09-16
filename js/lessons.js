const WEEK_LESSONS = {
  w1: {
    idea: "A sentence is a complete thought. It starts with a capital — and usually with who.",
    why: "A small first letter looks unfinished. Who before the action makes the meaning clear.",
    rule: "First letter big. Who (or what) before the doing word.",
    steps: [
      "Find the first word. Make its first letter big.",
      "Ask: who is this about?",
      "Put who before the action.",
    ],
    examples: [
      { wrong: "the cat sat down.", right: "The cat sat down.", why: "The is first, so it needs a capital T." },
      { wrong: "sat the cat.", right: "The cat sat.", why: "Who (the cat) comes before the action (sat)." },
    ],
    tasks: {
      story: { title: "Warm up the words", text: "We spell the words first so they are ready to use in a sentence." },
      choose: { title: "Capital — and who first", text: "Big letter at the start. Who before the action." },
      build: { title: "Put the start first", text: "Capital word first. Then who, then what they did." },
      write: { title: "You try it", text: "Write your own sentence. Check: capital, and who before the action?" },
    },
  },
  w2: {
    idea: "A sentence also needs a finish — and it still needs who.",
    why: "Without a stop, ideas crash together. Without who, the thought is unfinished.",
    rule: "A telling sentence ends with a full stop. Who comes before the action.",
    steps: [
      "Say the sentence out loud. When your voice drops, that is the end.",
      "Put a full stop there.",
      "Check who is there before the action. If not, add who.",
    ],
    examples: [
      { wrong: "Mum packed my lunch", right: "Mum packed my lunch.", why: "The thought is finished, so it needs a stop." },
      { wrong: "Packed my lunch.", right: "Mum packed my lunch.", why: "Packed… has no who. Add Mum (or I)." },
    ],
    tasks: {
      story: { title: "Words we need", text: "These short words will sit inside sentences that need a clear ending." },
      spot: { title: "Spot the missing piece", text: "Watch for stops — and missing who." },
      build: { title: "The last tile has the stop", text: "Build who + did, then end with the stop." },
      write: { title: "Two thoughts, two stops", text: "Write two short sentences. Each one gets its own capital and its own full stop." },
    },
  },
  w3: {
    idea: "A clear sentence names who (or what), then what they did. Jobs, groups and animals all count as who.",
    why: "If the doing word comes first, or who is missing, the reader cannot tell the story.",
    rule: "Who → did → what. Spot unfinished lines like Opened the door.",
    steps: [
      "Find who: person, animal, group (Everyone), or job (The nurse).",
      "Find the verb: what did they do?",
      "Put who before the action.",
      "If who is missing, the line is unfinished — add it.",
    ],
    examples: [
      {
        wrong: "the cake ate Mia",
        right: "Mia ate the cake.",
        why: "Mia is the noun (who). ate is the verb. The cake is what came after the action.",
      },
      {
        wrong: "Opened the quiet door.",
        right: "Mum opened the quiet door.",
        why: "Opened… has no who. Put a noun first.",
      },
    ],
    tasks: {
      story: { title: "See who first", text: "Notice different kinds of who: jobs, groups, people, animals." },
      choose: { title: "Who then did — or incomplete?", text: "Pick clear order. Spot unfinished thoughts with no who." },
      build: { title: "Who, then did, then what", text: "Noun first. Verb next. Thing last." },
      expand: { title: "Add the missing who", text: "Finish fragments by putting who first." },
      write: { title: "Tell who did what", text: "Try people, workers, groups, and animals as who." },
    },
  },
  w4: {
    idea: "A question is a sentence that asks. It wants an answer.",
    why: "The question mark tells the reader to lift their voice and to think of a reply.",
    rule: "Many questions start with who, what, where, when, why, how, can, or do. They end with ?",
    steps: [
      "Start with a question word if you can.",
      "Keep who-did-what order after that.",
      "Finish with a question mark, not a full stop.",
    ],
    examples: [
      { wrong: "what time is dinner", right: "What time is dinner?", why: "It asks. It needs a capital and a question mark." },
      { wrong: "Where is my bag.", right: "Where is my bag?", why: "Where asks for a place, so the end mark is ?" },
    ],
    tasks: {
      spell: { title: "Question words", text: "Who, what, where, when, why and how are the keys that open a question." },
      build: { title: "Build a question", text: "Question word first. Question mark on the last tile." },
      fix: { title: "Turn it into a question", text: "If it is asking, it cannot end with a full stop." },
      write: { title: "Ask two things", text: "Write two real questions you could ask a person. Both need ?" },
    },
  },
  w5: {
    idea: "Some everyday words do not look the way they sound. We have to learn their faces.",
    why: "said, they, there, because and friend show up all the time. Wrong spelling makes a good sentence look wobbly.",
    rule: "Tricky words must be remembered, not guessed only from sound.",
    steps: [
      "Look at the whole word. Say it. Cover it. Write it. Check it.",
      "Watch twins: there (a place) is not their (belongs to them).",
      "because has a reason hiding in it: it tells why.",
    ],
    examples: [
      { wrong: "they sed they were going over their", right: "They said they were going over there.", why: "said not sed. there is a place." },
      { wrong: "i like it becos it is fun", right: "I like it because it is fun.", why: "because is the spelling for a reason." },
    ],
    tasks: {
      spell: { title: "Learn the face of the word", text: "These words cheat on sound. Copy them carefully." },
      build: { title: "Use the tricky word", text: "The sentence is only right if the special word is in the right spot." },
      fix: { title: "Hunt the spelling", text: "Find the word that looks wrong. Swap it for the real spelling." },
      write: { title: "Give a reason", text: "Use because to tell why. That is what makes the sentence complete." },
    },
  },
  w6: {
    idea: "Little joining words stick two ideas into one sentence.",
    why: "and adds. but shows a change. so shows a result. The join has to match the meaning.",
    rule: "Pick and, but, or so to match what you mean.",
    steps: [
      "and = plus another idea.",
      "but = the second idea is different or surprising.",
      "so = the second idea happens because of the first.",
    ],
    examples: [
      { wrong: "I wanted to play I had to do jobs", right: "I wanted to play but I had to do jobs.", why: "The second idea is a change, so we use but." },
      { wrong: "It was late we went home", right: "It was late so we went home.", why: "Going home is the result, so we use so." },
    ],
    tasks: {
      spell: { title: "The joining words", text: "and, but, so, because. Tiny words, big jobs." },
      build: { title: "Feel the join", text: "Read it after you build it. Does the joining word match the meaning?" },
      fix: { title: "Choose a better join", text: "Two ideas with no join feel stuck. Put in and, but, or so." },
      write: { title: "Two ideas, one line", text: "Write one sentence with a join. Check that the join is the right kind." },
    },
  },
  w7: {
    idea: "Describing words paint a picture — but who and the action still come first.",
    why: "A pale sentence needs paint. An unfinished one needs who. Do not mix those jobs up.",
    rule: "Adjective before the noun. Who before the verb. Running in the park is not finished.",
    steps: [
      "Find who (or what).",
      "Add a paint word before the noun: tiny, huge, loud, soft.",
      "Keep who before the action.",
      "If who is missing, add it before you paint.",
    ],
    examples: [
      { wrong: "The dog ran in the park.", right: "The brown dog ran in the park.", why: "brown tells us which dog." },
      { wrong: "Running in the park.", right: "The tiny dog was running in the park.", why: "Add who first, then paint if you like." },
    ],
    tasks: {
      story: { title: "Picture words", text: "huge, tiny, loud, quiet, bright — paint beside clear who + did." },
      choose: { title: "Who, paint, action", text: "Keep who first. Spot unfinished thoughts. Put paint before the noun." },
      expand: { title: "Paint — or add who", text: "Add a describing word, or finish a fragment." },
      build: { title: "Slot the describing word in", text: "Paint before the noun; noun before the verb." },
      write: { title: "Describe a place", text: "Two sentences with clear who and at least one paint word." },
    },
  },
  w8: {
    idea: "A paragraph is a group of sentences about one idea. The first sentence tells that idea.",
    why: "If the first sentence is weak (it was stuff), the reader does not know what the paragraph is about.",
    rule: "Start with a topic sentence that names the one thing you will talk about.",
    steps: [
      "Choose one topic: Saturday, the fete, my room.",
      "Write a first sentence that says the topic clearly.",
      "The next sentences must stay on that same topic.",
    ],
    examples: [
      { wrong: "it was stuff", right: "The school fete was busy and fun.", why: "Now we know the topic is the fete." },
      { wrong: "things happened", right: "Saturday is my favourite day.", why: "The whole paragraph can now be about Saturday." },
    ],
    tasks: {
      spell: { title: "Paragraph words", text: "topic, detail, start, finish. These help us talk about the shape of writing." },
      arrange: { title: "Topic first", text: "The sentence that names the whole idea goes in box 1." },
      fix: { title: "Write a strong first sentence", text: "Swap the weak line for a sentence that names the topic." },
      write: { title: "Start a paragraph", text: "Sentence 1 = topic. Sentence 2 = one detail about that topic." },
    },
  },
  w9: {
    idea: "After the topic sentence, the middle sentences add details. They prove or show the idea.",
    why: "A topic with no details is empty. Details answer first, then, after that.",
    rule: "The middle stays on the same topic and adds information, not a new story.",
    steps: [
      "Keep the topic in your head.",
      "Add what happened first.",
      "Add what happened next. Do not jump to a different topic.",
    ],
    examples: [
      { wrong: "Making pancakes is easy. Soccer is loud.", right: "Making pancakes is easy. First we mix flour, milk and eggs.", why: "Soccer is a new topic. Mixing is a real detail." },
      { wrong: "monkeys bananas loud wow", right: "The monkeys jumped around and ate bananas.", why: "A supporting sentence is still a proper sentence." },
    ],
    tasks: {
      spell: { title: "Detail words", text: "first, then, also, after. These words help you add the middle." },
      arrange: { title: "Keep the details together", text: "Topic, then the steps, then a close. Do not let a stray sentence in." },
      fix: { title: "Make the detail a real sentence", text: "Turn the jumble into one clear supporting sentence." },
      write: { title: "Three sentences", text: "1 topic. 2 and 3 details. All about the same trip, game, or job." },
    },
  },
  w10: {
    idea: "The last sentence wraps up the idea. It does not start a new one.",
    why: "If you end with then we had chips, the paragraph runs off the path.",
    rule: "Close with a feeling, a result, or a short “that is why” about the same topic.",
    steps: [
      "Look back at the topic sentence.",
      "Ask: how did it end, or how did I feel?",
      "Write that, and stop. Do not open a new topic.",
    ],
    examples: [
      { wrong: "then we played football and had chips", right: "I loved watching our beans grow.", why: "Football is new. The beans were the topic." },
      { wrong: "later we bought new shoes", right: "I felt brave when I sang my line.", why: "The close matches the concert, not the shops." },
    ],
    tasks: {
      spell: { title: "Ending words", text: "finally, last, proud, felt. Useful for a closing sentence." },
      arrange: { title: "Find the ending", text: "The last box should feel like a full stop for the whole idea." },
      fix: { title: "Write a better ending", text: "Throw out the new topic. Write a close about the same thing." },
      write: { title: "Write and close", text: "A short paragraph that ends with how you felt." },
    },
  },
  w11: {
    idea: "Every sentence in a paragraph must belong. A stray sentence is like a guest at the wrong party.",
    why: "Readers trust you to stay on one idea. A jump to pizza in a bike paragraph breaks that trust.",
    rule: "If a sentence is not about the topic, leave it out.",
    steps: [
      "Read the topic sentence.",
      "Ask each line: is this still about that?",
      "Drop the one that is about something else.",
    ],
    examples: [
      { wrong: "My bike is red. Pizza is my favourite dinner.", right: "My bike is red. I ride it to the shops with Mum.", why: "Pizza is a different topic. Riding belongs." },
      { wrong: "I love reading at night and also soccer is loud", right: "I love reading at night.", why: "Soccer does not belong in a reading sentence." },
    ],
    tasks: {
      spell: { title: "Stay-on-track words", text: "topic, same, instead, paragraph. These help you talk about staying put." },
      arrange: { title: "Drop the stray", text: "Fill only the boxes that belong. Leave the odd sentence unused." },
      fix: { title: "Take out the extra idea", text: "Rewrite one clean sentence. Leave the extra topic on the floor." },
      write: { title: "One topic only", text: "Three sentences. One animal, game, place, person, or food. No jumping." },
    },
  },
  w12: {
    idea: "Now we put it all together: capital, stop, order, join, details, and a close.",
    why: "A paragraph works when every sentence starts right, ends right, and stays on the same idea.",
    rule: "Topic, two details, then a feeling. All about one thing.",
    steps: [
      "Sentence 1 names the topic.",
      "Sentences 2 and 3 add details.",
      "Sentence 4 closes with a feeling or a result.",
      "Check capitals, stops, and spelling of because, said, there, friend.",
    ],
    examples: [
      { wrong: "we went to the beach becos it was hot the waves were huge i felt brave", right: "We went to the beach because it was hot. The waves were huge. I felt brave.", why: "Three sentences, each with a capital and a stop. because is spelled properly." },
      { wrong: "The library is quiet. Soccer is loud. I left.", right: "The library is quiet. I look for animal books. I leave with a story.", why: "All three lines stay on the library." },
    ],
    tasks: {
      spell: { title: "Last spelling stretch", text: "These words have been hiding in your writing all programme. Get their faces right." },
      arrange: { title: "Build the full paragraph", text: "Topic, two details, close. Same order you will use when you write." },
      fix: { title: "Polish", text: "Fix capitals, stops, and the spelling. That is what makes it look finished." },
      write: { title: "Your own paragraph", text: "Four sentences. One memory. Details in the middle. A feeling at the end." },
    },
  },
  w13: {
    idea: "Words have jobs. A noun names who or what. A verb is the action. An adjective paints the noun.",
    why: "When kids know the jobs, they can build longer sentences without the pieces falling in the wrong order.",
    rule: "Adjective (optional) + noun, then verb. Spot unfinished lines with no who.",
    steps: [
      "Circle the noun in your head: who or what?",
      "Find the verb: what happened?",
      "If you use a describing word, park it in front of the noun.",
      "Ask: is who missing? Then rebuild before you polish.",
    ],
    examples: [
      {
        wrong: "landed the busy bee",
        right: "The busy bee landed.",
        why: "busy (adjective) before bee (noun). bee before landed (verb).",
      },
      {
        wrong: "Opened the quiet door.",
        right: "Mum opened the quiet door.",
        why: "No who — unfinished. Add a noun first.",
      },
    ],
    tasks: {
      story: { title: "See the jobs", text: "Read and fill. Notice which gap is noun, verb or adjective." },
      choose: { title: "Name the job", text: "Pick clear who + did. Spot unfinished thoughts." },
      build: { title: "Build the pattern", text: "Adjective + noun + verb in order." },
      write: { title: "Use the pattern", text: "Write with a clear noun, verb, and at least one adjective." },
    },
  },
  w14: {
    idea: "You can open a sentence with When, After, Suddenly or Later — then keep noun and verb in order.",
    why: "Varied openers stop every line starting with I, but the middle of the sentence still needs who-then-did.",
    rule: "Opener first (often with a comma). Then noun + verb as usual.",
    steps: [
      "Choose an opener: When, After, Suddenly, Later, Quietly…",
      "Write the opener, then the noun (who), then the verb (did).",
      "Check you did not flip to Suddenly barked the dog.",
    ],
    examples: [
      {
        wrong: "Suddenly barked the dog.",
        right: "Suddenly the dog barked.",
        why: "After Suddenly, the noun dog still comes before the verb barked.",
      },
      {
        wrong: "I went. I saw. I sat.",
        right: "After lunch I went to the park.",
        why: "One opener makes the start fresher than three bare I sentences.",
      },
    ],
    tasks: {
      story: { title: "Spot the opener", text: "Fill openers and notice noun–verb after them." },
      choose: { title: "Pick a strong start", text: "Choose the opener that still keeps clear order." },
      expand: { title: "Add an opener", text: "Rewrite with When / After / Suddenly at the front." },
      write: { title: "Mix your starts", text: "Use openers — not only I." },
    },
  },
  w15: {
    idea: "Joins like when, while, if and because stick two ideas together. Each idea still needs a noun and a verb.",
    why: "A join is not a pile of words. It is two little sentences sharing one line.",
    rule: "Idea 1 (noun + verb) + join + idea 2 (noun + verb).",
    steps: [
      "Say both ideas out loud as two short sentences.",
      "Pick when (moment), while (same time), if (condition), or because (reason).",
      "Check both sides still have who and did.",
    ],
    examples: [
      {
        wrong: "I ran while the whistle because.",
        right: "I ran when the whistle blew.",
        why: "when joins two clear ideas: I ran / the whistle blew.",
      },
      {
        wrong: "Mum cooked while set the table.",
        right: "Mum cooked while I set the table.",
        why: "The second side needs its own noun: I.",
      },
    ],
    tasks: {
      story: { title: "See the joins", text: "Fill when / while / if / because in real sentences." },
      choose: { title: "Pick the join", text: "Match the join to the meaning." },
      build: { title: "Build both sides", text: "Noun + verb on each side of the join." },
      write: { title: "Join your ideas", text: "Write with when, while, if or because." },
    },
  },
  w16: {
    idea: "Editing starts by asking: is this a full sentence? Then check the capital and the stop.",
    why: "Kids often polish capitals while leaving unfinished thoughts like Running to the park.",
    rule: "A full sentence needs who (or what) and what they did. Then: capital start, full stop end.",
    steps: [
      "Ask: who? what did they do? If either is missing, it is a fragment.",
      "Point to the first letter. Is it big?",
      "Point to the end. Is there a stop?",
      "Rewrite the unfinished piece, then check the gates.",
    ],
    examples: [
      {
        wrong: "Running to the park.",
        right: "I was running to the park.",
        why: "Running… has no who. Add who before the action.",
      },
      {
        wrong: "Because I was tired.",
        right: "I sat down because I was tired.",
        why: "Because… is only a reason. Pair it with a main idea.",
      },
    ],
    tasks: {
      story: { title: "Why we check", text: "Read about finished thoughts and sentence gates." },
      proof: { title: "Find unfinished or broken lines", text: "Name the mistake, tap it, rewrite a full sentence — then read the tip." },
      choose: { title: "Finished or unfinished?", text: "Pick the line that is a full sentence." },
      write: { title: "Write then check", text: "Write, then hunt fragments, capitals and stops." },
    },
  },
  w17: {
    idea: "Fragments hide in three common shapes: no who, no verb, or a hanging When/After/Because.",
    why: "If you only fix spelling, unfinished thoughts stay unfinished.",
    rule: "Rebuild until you can answer who + did. Openers need a main idea after them.",
    steps: [
      "Spot -ing lines with no who (Playing soccer…).",
      "Spot noun phrases with no verb (The tiny frog on the log.).",
      "Spot hanging openers (When the bell rang. / After lunch.).",
      "Rewrite with who + did, then read aloud.",
    ],
    examples: [
      {
        wrong: "The tiny frog on the log.",
        right: "The tiny frog sat on the log.",
        why: "Who is clear, but nothing happens until you add a verb.",
      },
      {
        wrong: "When the bell rang.",
        right: "When the bell rang, we lined up.",
        why: "When… sets the time. Finish with what happened next.",
      },
    ],
    tasks: {
      story: { title: "Missing pieces", text: "Notice what a sentence needs before you fill gaps." },
      proof: { title: "Fix the fragments", text: "Name the gap, tap it, rewrite a full sentence." },
      choose: { title: "Fragment or full sentence?", text: "Pick the line with who and what they did." },
      write: { title: "Write full sentences", text: "Every line needs who + did. No hanging pieces." },
    },
  },
  w18: {
    idea: "A full edit pass stacks every check: unfinished thoughts first, then capitals, stops, tense, spelling.",
    why: "Careless writing often has a fragment and a gate slip in the same line.",
    rule: "Finish the thought → check gates → fix slips → read again.",
    steps: [
      "Pass 1: who + did on every line.",
      "Pass 2: capitals and stops.",
      "Pass 3: tense and trap words.",
      "Pass 4: read out loud. Fix anything your ear catches.",
    ],
    examples: [
      {
        wrong: "Went to the zoo with Mum.",
        right: "I went to the zoo with Mum.",
        why: "The verb is there, but who is missing.",
      },
      {
        wrong: "Because the bus was full.",
        right: "We were late because the bus was full.",
        why: "A reason alone is not a sentence. Add the main idea.",
      },
    ],
    tasks: {
      story: { title: "The edit habit", text: "Learn the order of a full pass." },
      proof: { title: "Mixed mistakes", text: "Fragments and careless slips — name it, tap it, fix it." },
      choose: { title: "Pick the polished line", text: "Choose the sentence that survives every check." },
      write: { title: "Write and edit", text: "Write first. Full edit pass before I'm done." },
    },
  },
};

const SCRAMBLE_LESSON = {
  idea: "A sentence is not a bag of words. The order is the meaning.",
  why: "If you tap the words in a muddle, the sentence can say the wrong person did the action.",
  rule: "Capital first. Who, then did, then what. Full stop or question mark last.",
  steps: [
    "Find the word with a capital. That is usually first.",
    "Find the action word.",
    "Put the leftover words where they sound like talking, not like a robot.",
    "The tile with . or ? is last.",
  ],
  examples: [
    { wrong: "sat cat The down.", right: "The cat sat down.", why: "The (capital) first. cat is who. sat is the action. down. ends it." },
    { wrong: "cake the ate Mia.", right: "Mia ate the cake.", why: "Mia did the eating. The cake did not eat Mia." },
  ],
};

const MATH_LESSON = {
  idea: "Multiplication is equal groups hiding in everyday things — bikes, eggs, shells.",
  why: "If you only memorise numbers, a forgotten fact has nothing to stand on. A picture of groups always helps you rebuild it.",
  rule: "a × b means a groups of b. The answer is how many altogether.",
  steps: [
    "See it: count equal groups in a little mission (wheels, eggs, shells).",
    "Match it: join the picture to the fact a × b = n.",
    "Hop it: jump along a path by 3s, 4s, 2s, 5s, or 10s — that is the table pattern.",
    "Know it: tap the total in a short story once the picture feels easy.",
  ],
  examples: [
    {
      wrong: "3 × 2 means any numbers that look hard.",
      right: "3 bikes with 2 wheels each → 3 × 2 = 6 wheels.",
      why: "Groups first. The symbol comes after the picture.",
    },
    {
      wrong: "Hop 2, 3, 4, 5…",
      right: "Hop by 2: 2, 4, 6, 8…",
      why: "Each jump is the same size. That jump is the table you are learning.",
    },
  ],
};

const WRITE_EXAMPLES = {
  "Write one sentence about something you like.": {
    example: "I like riding my bike to the park with Mum.",
    why: "It starts with a capital I. It tells one clear idea. It finishes with a full stop.",
    tip: "Start with I like or My favourite thing is. End with a full stop.",
  },
  "Write one sentence about an animal.": {
    example: "The cat slept on the warm mat.",
    why: "The is a capital first word. We know who (the cat) and what they did (slept).",
    tip: "The is a capital first word. We know who (the cat) and what they did (slept).",
  },
  "Write one sentence about your family.": {
    example: "Dad cooked fish for dinner.",
    why: "Dad is a name so it has a capital. The sentence says who did what.",
    tip: "Dad is a name so it has a capital. The sentence says who did what.",
  },
  "Write one sentence about outside.": {
    example: "The sun felt hot on my face.",
    why: "It starts with The. It paints one picture and then stops.",
    tip: "It starts with The. It paints one picture and then stops.",
  },
  "Write one sentence about food.": {
    example: "I eat apples after school.",
    why: "One thought, a capital at the start, and a full stop at the end.",
    tip: "One thought, a capital at the start, and a full stop at the end.",
  },
  "Write two short sentences about lunch.": {
    example: "I ate a cheese sandwich. Then I drank some water.",
    why: "Two thoughts. Each one starts with a capital and ends with a full stop.",
    tip: "Two thoughts. Each one starts with a capital and ends with a full stop.",
  },
  "Write two short sentences about school.": {
    example: "I went into class. My teacher read a story.",
    why: "Two finished sentences, not one long run-on line.",
    tip: "Two finished sentences, not one long run-on line.",
  },
  "Write two short sentences about play.": {
    example: "I played soccer with Sam. My friend passed the ball.",
    why: "Each sentence is a complete thought with its own stop.",
    tip: "Each sentence is a complete thought with its own stop.",
  },
  "Write two short sentences about home.": {
    example: "At home I unpacked my bag. Mum asked about my day.",
    why: "Two sentences. Two capitals. Two full stops.",
    tip: "Two sentences. Two capitals. Two full stops.",
  },
  "Write two short sentences about a pet.": {
    example: "My pet is a small dog. It likes to run in the yard.",
    why: "Both sentences stay on the pet. Each one ends cleanly.",
    tip: "Both sentences stay on the pet. Each one ends cleanly.",
  },
  "Write a sentence about a friend or family member doing something.": {
    example: "My sister kicked the red ball.",
    why: "Who (my sister) comes first, then the action (kicked), then what.",
    tip: "Who (my sister) comes first, then the action (kicked), then what.",
  },
  "Write a sentence about an animal doing something.": {
    example: "The dog jumped over the log.",
    why: "The animal is first. Then the action. Then the rest.",
    tip: "The animal is first. Then the action. Then the rest.",
  },
  "Write a sentence about you doing something at school.": {
    example: "I read a book on the mat.",
    why: "I is who. Read is the action. The rest tells where.",
    tip: "I is who. Read is the action. The rest tells where.",
  },
  "Write a sentence about someone cooking or eating.": {
    example: "Mum cooked rice in a big pan.",
    why: "Mum did the cooking. The sentence says who, did, and what.",
    tip: "Mum did the cooking. The sentence says who, did, and what.",
  },
  "Write a sentence about someone playing a game.": {
    example: "Sam kicked the ball into the net.",
    why: "Sam is who. Kicked is the action. The rest tells what happened.",
    tip: "Sam is who. Kicked is the action. The rest tells what happened.",
  },
  "Write two questions you could ask a friend at school.": {
    example: "What are you playing at lunch? Do you want to sit with me?",
    why: "Both lines ask. Both start with a capital and end with a question mark.",
    tip: "Both lines ask. Both start with a capital and end with a question mark.",
  },
  "Write two questions you could ask at home.": {
    example: "When is dinner? Can I help set the table?",
    why: "Question words first. Question marks last.",
    tip: "Question words first. Question marks last.",
  },
  "Write two questions about a lost thing.": {
    example: "Where is my blue bag? Have you seen my hat?",
    why: "These ask for an answer, so they cannot end with a full stop.",
    tip: "These ask for an answer, so they cannot end with a full stop.",
  },
  "Write two questions about food.": {
    example: "What is for lunch? Can we have fruit?",
    why: "Two asks. Two question marks.",
    tip: "Two asks. Two question marks.",
  },
  "Write two questions about a game.": {
    example: "How do we start? Who has the ball?",
    why: "How and who open questions. The ? shows we want an answer.",
    tip: "How and who open questions. The ? shows we want an answer.",
  },
  "Write a sentence that uses because.": {
    example: "I like this book because the ending is funny.",
    why: "because joins the idea to the reason. The sentence still needs a capital and a stop.",
    tip: "because joins the idea to the reason. The sentence still needs a capital and a stop.",
  },
  "Write a sentence about the weather using because.": {
    example: "I wore a coat because it was cold.",
    why: "The first part is what happened. because tells why.",
    tip: "The first part is what happened. because tells why.",
  },
  "Write a sentence about a friend using because.": {
    example: "I like my friend because she is kind.",
    why: "because gives the reason. That is what makes the sentence feel finished.",
    tip: "because gives the reason. That is what makes the sentence feel finished.",
  },
  "Write a sentence about school using because.": {
    example: "I was late because the bus was full.",
    why: "Two ideas, joined by because, in one sentence.",
    tip: "Two ideas, joined by because, in one sentence.",
  },
  "Write a sentence about food using because.": {
    example: "I ate the apple because I was hungry.",
    why: "because answers why. The spelling is because, not becos.",
    tip: "because answers why. The spelling is because, not becos.",
  },
  "Write one sentence that uses and or but.": {
    example: "I wanted to play but I had to pack my bag.",
    why: "but shows a change. The two ideas sit in one sentence.",
    tip: "but shows a change. The two ideas sit in one sentence.",
  },
  "Write one sentence that uses so.": {
    example: "It was late so we went home.",
    why: "so shows a result. Going home happened because it was late.",
    tip: "so shows a result. Going home happened because it was late.",
  },
  "Write one sentence that uses but.": {
    example: "I like swimming but the water was cold.",
    why: "but tells us the second idea is different or surprising.",
    tip: "but tells us the second idea is different or surprising.",
  },
  "Write one sentence that uses and.": {
    example: "We packed fruit and we packed water.",
    why: "and adds a second idea of the same kind.",
    tip: "and adds a second idea of the same kind.",
  },
  "Write one sentence that joins two things you did today.": {
    example: "Today I read a book and I drew a picture.",
    why: "and sticks two things you did into one line.",
    tip: "and sticks two things you did into one line.",
  },
  "Write two sentences about a park, beach, or backyard.": {
    example: "The park was green and quiet. I saw a tiny bird in the tree.",
    why: "tiny and green are describing words. Two sentences, two stops.",
    tip: "tiny and green are describing words. Two sentences, two stops.",
  },
  "Write two sentences about your room.": {
    example: "My room is small and bright. I have a soft lamp by the bed.",
    why: "small, bright and soft help the reader see the room.",
    tip: "small, bright and soft help the reader see the room.",
  },
  "Write two sentences about a meal.": {
    example: "The food was hot and sweet. I tasted the soup first.",
    why: "hot and sweet paint the meal. Each sentence is complete.",
    tip: "hot and sweet paint the meal. Each sentence is complete.",
  },
  "Write two sentences about an animal.": {
    example: "The animal was huge and grey. It had a long trunk.",
    why: "huge and long are describing words sitting near the thing they describe.",
    tip: "huge and long are describing words sitting near the thing they describe.",
  },
  "Write two sentences about the weather.": {
    example: "The sky was dark and loud. The wind pushed the trees.",
    why: "dark and loud help us feel the weather, not just name it.",
    tip: "dark and loud help us feel the weather, not just name it.",
  },
  "Write a topic sentence about your weekend, then one extra sentence with a detail.": {
    example: "On the weekend I visited Grandma. The best part was baking lemon cake.",
    why: "Sentence 1 names the topic (the weekend visit). Sentence 2 adds one detail.",
    tip: "Sentence 1 names the topic (the weekend visit). Sentence 2 adds one detail.",
  },
  "Write a topic sentence about school, then one detail.": {
    example: "School is busy on Friday. In class we practised a song for assembly.",
    why: "The first sentence tells the topic. The second stays on school.",
    tip: "The first sentence tells the topic. The second stays on school.",
  },
  "Write a topic sentence about a sport, then one detail.": {
    example: "My favourite sport is soccer. We run up and down the field.",
    why: "Soccer is the topic. Running is a detail about that sport, not a new idea.",
    tip: "Soccer is the topic. Running is a detail about that sport, not a new idea.",
  },
  "Write a topic sentence about a pet or animal, then one detail.": {
    example: "My pet is a red hen. It likes to peck grain by the fence.",
    why: "The hen is the topic. Pecking grain is a detail about the hen.",
    tip: "The hen is the topic. Pecking grain is a detail about the hen.",
  },
  "Write a topic sentence about a place you like, then one detail.": {
    example: "I like going to the library. There I look for animal books.",
    why: "The library is named first. The next sentence stays in that place.",
    tip: "The library is named first. The next sentence stays in that place.",
  },
  "Write three sentences about a trip.": {
    example: "We went to the zoo. First we watched the lions rest. Then the monkeys jumped for bananas.",
    why: "Sentence 1 is the topic. 2 and 3 are details. Nothing about a different day sneaks in.",
    tip: "Sentence 1 is the topic. 2 and 3 are details. Nothing about a different day sneaks in.",
  },
  "Write three sentences about cooking.": {
    example: "We made pancakes. First we mixed flour, milk and eggs. Then we cooked them in a pan.",
    why: "Topic, then two steps. All about pancakes.",
    tip: "Topic, then two steps. All about pancakes.",
  },
  "Write three sentences about a game.": {
    example: "We played soccer at lunch. First Sam passed the ball. Then I kicked it in.",
    why: "The game is the topic. The next two lines are what happened in that game.",
    tip: "The game is the topic. The next two lines are what happened in that game.",
  },
  "Write three sentences about a class job.": {
    example: "In class we packed the book box. First we stacked the readers. After that we carried it to the shelf.",
    why: "One job. Two details about that same job.",
    tip: "One job. Two details about that same job.",
  },
  "Write three sentences about a visit.": {
    example: "We visited Grandma after school. When we arrived she had cake ready. Then we sat in the warm kitchen.",
    why: "The visit is the topic. The other sentences stay in Grandma's house.",
    tip: "The visit is the topic. The other sentences stay in Grandma's house.",
  },
  "Write a short paragraph about something you made. End with how you felt.": {
    example: "I made a card for Mum. I used blue paper and gold stars. At the end I felt proud.",
    why: "The last sentence closes the idea with a feeling. It does not start a new topic.",
    tip: "The last sentence closes the idea with a feeling. It does not start a new topic.",
  },
  "Write a short paragraph about helping at home. End with how you felt.": {
    example: "I helped Dad wash the car. I held the hose and rubbed the doors. I felt useful when it looked new.",
    why: "Same topic all the way. The feeling finishes the thought.",
    tip: "Same topic all the way. The feeling finishes the thought.",
  },
  "Write a short paragraph about a game you played. End with how you felt.": {
    example: "We played soccer on the oval. Then Sam passed the ball to me. I felt happy when we scored.",
    why: "The close is about the game, not about dinner or something else.",
    tip: "The close is about the game, not about dinner or something else.",
  },
  "Write a short paragraph about a class project. End with how you felt.": {
    example: "Our class grew beans in cups. We watered them every morning. I felt excited when the shoots came up.",
    why: "Topic, detail, feeling. All about the beans.",
    tip: "Topic, detail, feeling. All about the beans.",
  },
  "Write a short paragraph about a surprise. End with how you felt.": {
    example: "I was surprised when Mum packed a picnic. Then we ate by the river. I felt lucky all afternoon.",
    why: "The last line wraps up the surprise. It does not jump to a new story.",
    tip: "The last line wraps up the surprise. It does not jump to a new story.",
  },
  "Write three sentences about one animal. Do not change topic.": {
    example: "The animal I chose is a hen. It lives in our backyard. It likes to peck grain.",
    why: "Every sentence is about the hen. Pizza or soccer would be a stray idea.",
    tip: "Every sentence is about the hen. Pizza or soccer would be a stray idea.",
  },
  "Write three sentences about one game. Do not change topic.": {
    example: "The game I chose is soccer. You kick a ball into a net. I like it because we run together.",
    why: "All three lines stay on soccer.",
    tip: "All three lines stay on soccer.",
  },
  "Write three sentences about one place. Do not change topic.": {
    example: "The place I chose is the library. There I look for quiet corners. It feels calm and happy.",
    why: "The library is the only topic.",
    tip: "The library is the only topic.",
  },
  "Write three sentences about one person. Do not change topic.": {
    example: "The person I chose is Grandma. They bake lemon cake with me. I like them because they listen.",
    why: "Grandma stays the topic from start to finish.",
    tip: "Grandma stays the topic from start to finish.",
  },
  "Write three sentences about one food. Do not change topic.": {
    example: "The food I chose is pancakes. It tastes sweet with lemon. I eat it when we have a slow Saturday.",
    why: "Pancakes only. No extra idea about a different meal.",
    tip: "Pancakes only. No extra idea about a different meal.",
  },
  "Write a paragraph of 4 sentences about a day you remember.": {
    example: "I remember a hot day at the beach. First we put down a big towel. Then the waves were huge. I felt brave when I jumped in.",
    why: "Topic, two details, a feeling. Capitals and stops on every sentence.",
    tip: "Topic, two details, a feeling. Capitals and stops on every sentence.",
  },
  "Write a paragraph of 4 sentences about a place you love.": {
    example: "I love the library. There I look for animal books. I also sit in the quiet corner. I feel calm when I leave with a story.",
    why: "Four sentences. One place. A close that matches the topic.",
    tip: "Four sentences. One place. A close that matches the topic.",
  },
  "Write a paragraph of 4 sentences about making something.": {
    example: "I made a bird from paper. I used scissors and glue. Then I painted the wings blue. I felt proud when it stood up.",
    why: "The feeling at the end belongs to the making, not to a new topic.",
    tip: "The feeling at the end belongs to the making, not to a new topic.",
  },
  "Write a paragraph of 4 sentences about a person who helps you.": {
    example: "Someone who helps me is Dad. They pack my lunch in the morning. One day they waited with me for the bus. I feel safe when they are nearby.",
    why: "All four sentences stay on Dad. The last line is a feeling.",
    tip: "All four sentences stay on Dad. The last line is a feeling.",
  },
  "Write a paragraph of 4 sentences about an animal.": {
    example: "The animal I chose is a hen. It lives by the back fence. It likes warm brown eggs and grain. I think it is a busy, funny pet.",
    why: "One animal for the whole paragraph. Topic, details, a close.",
    tip: "One animal for the whole paragraph. Topic, details, a close.",
  },
  "Write one sentence with an adjective before a noun, then a verb.": {
    example: "The tiny frog jumped over the log.",
    why: "tiny (adjective) sits before frog (noun). jumped is the verb after the noun.",
    tip: "Pattern: The + adjective + noun + verb…",
  },
  "Write one sentence about a person (noun) doing something (verb).": {
    example: "Sam kicked the red ball.",
    why: "Sam is the noun. kicked is the verb. red paints ball.",
    tip: "Name who, then what they did.",
  },
  "Write one sentence that paints a thing: adjective + noun + verb.": {
    example: "The noisy truck rolled past the school.",
    why: "noisy before truck. rolled is the action.",
    tip: "Paint the noun, then give it a verb.",
  },
  "Write two sentences. In each, name the noun and the verb in your head first.": {
    example: "The huge dog ran. Then Mum called my name.",
    why: "Each sentence has a clear who and a clear action.",
    tip: "Say who + did before you write.",
  },
  "Write two sentences about an animal. Put a describing word before the animal noun.": {
    example: "The tiny ant crossed the path. A huge bird watched from the fence.",
    why: "tiny and huge sit before their nouns.",
    tip: "adjective + animal + verb.",
  },
  "Write two sentences about morning. Start one with When or After.": {
    example: "When I woke up, I stretched. After breakfast I packed my bag.",
    why: "Openers first; then noun + verb still in order.",
    tip: "Try When or After — not only I.",
  },
  "Write two sentences about play. Start one with Suddenly or Later.": {
    example: "Suddenly the whistle blew. Later we walked back to class.",
    why: "Fresh starts, clear who/what after the opener.",
    tip: "Suddenly / Later, then noun + verb.",
  },
  "Write two sentences about school. Start one with After or When.": {
    example: "After lunch we lined up. When the bell rang, we went inside.",
    why: "Time openers, then we + verb.",
    tip: "Keep we/I before the action.",
  },
  "Write two sentences about home. Start one with Quietly or Outside.": {
    example: "Quietly I opened the door. Outside the wind felt cold.",
    why: "How/where openers still need noun then verb.",
    tip: "Quietly / Outside + who + did.",
  },
  "Write three sentences about a trip. Use two different openers.": {
    example: "When we arrived, we unpacked. Later we walked to the beach. Suddenly the sky went dark.",
    why: "Mixed openers; each line still has noun + verb.",
    tip: "Use at least two different starters.",
  },
  "Write one sentence using when.": {
    example: "I smiled when Dad came home.",
    why: "Two ideas joined: I smiled / Dad came home.",
    tip: "noun + verb + when + noun + verb.",
  },
  "Write one sentence using while.": {
    example: "Mum cooked while I set the table.",
    why: "while means at the same time. Both sides have who + did.",
    tip: "Do not drop the second noun.",
  },
  "Write one sentence using if.": {
    example: "If it rains, we stay inside.",
    why: "if sets a condition, then the result.",
    tip: "If + idea, then noun + verb.",
  },
  "Write one sentence using because.": {
    example: "I wore a coat because it was cold.",
    why: "because adds the reason after the first idea.",
    tip: "Spell because in full.",
  },
  "Write two sentences. Use when in one and because in the other.": {
    example: "When the film started, we sat still. I was happy because the ending was funny.",
    why: "Two different joins, each with clear noun–verb pairs.",
    tip: "One when sentence, one because sentence.",
  },
  "Write two short sentences about lunch. Check capitals and stops.": {
    example: "I ate a cheese sandwich. Then I drank some water.",
    why: "Both lines start big and end with a stop.",
    tip: "Proofread the gates before I'm done.",
  },
  "Write two short sentences about play. Check every start and end.": {
    example: "We played soccer. My friend passed the ball.",
    why: "Capitals and stops on both.",
    tip: "Point to first letter and last mark.",
  },
  "Write two short sentences about home. No missing stops.": {
    example: "At home I unpacked my bag. Mum asked about my day.",
    why: "Each thought finishes cleanly.",
    tip: "No line left without a stop.",
  },
  "Write three sentences about school. Proofread the gates.": {
    example: "At school we lined up. Then we read on the mat. I finished my book.",
    why: "Three capitals. Three stops.",
    tip: "Count the stops — one per sentence.",
  },
  "Write two sentences about a pet. Capital + stop on both.": {
    example: "My pet is a small dog. It likes to run in the yard.",
    why: "Gates fixed on both lines.",
    tip: "Capital + stop checklist.",
  },
  "Write two past-tense sentences about yesterday. Use went or said.": {
    example: "Yesterday I went to the park. My friend said it was fun.",
    why: "Past time matches went and said.",
    tip: "No go/say with yesterday.",
  },
  "Write one sentence with because about something that already happened.": {
    example: "I stopped because I was tired.",
    why: "Past verbs + because spelled in full.",
    tip: "because, not becos.",
  },
  "Write two sentences about a friend. Use friend and said correctly.": {
    example: "My friend sat with me. Then they said we should play.",
    why: "friend and said spelled carefully.",
    tip: "ie in friend; said in the past.",
  },
  "Write two sentences using were or was correctly.": {
    example: "I was hungry. They were ready to eat.",
    why: "was for one; were for more than one.",
    tip: "They were, not they was.",
  },
  "Write three past sentences about a trip. Keep the tense steady.": {
    example: "Yesterday we went to the zoo. First we watched the lions. We were happy on the bus home.",
    why: "All past: went, watched, were.",
    tip: "Stay in yesterday’s tense.",
  },
  "Write three sentences about yesterday. Then edit capitals, stops, tense, and spelling.": {
    example: "Yesterday we went to the beach. First we put down a towel. We were glad because the sun was out.",
    why: "Edited gates, tense and because.",
    tip: "Write, then full edit pass.",
  },
  "Write three sentences about a friend. Edit friend, said, and because if you use them.": {
    example: "My friend came over. They said we could draw. I smiled because it was quiet.",
    why: "Trap words checked.",
    tip: "Slow-check friend / said / because.",
  },
  "Write three sentences about school. Use one opener like When or After, then edit.": {
    example: "When the bell rang, we lined up. After lunch we read. I packed my bag.",
    why: "Opener plus clean gates.",
    tip: "Opener, then edit every line.",
  },
  "Write a short paragraph (4 sentences) about a trip. Full edit pass.": {
    example: "Yesterday we went to the zoo. First we watched the lions. Then the monkeys jumped. I felt happy on the way home.",
    why: "Topic, details, feeling — all edited.",
    tip: "Four sentences. One slow proofread.",
  },
  "Write four sentences about a game. Edit every line before you finish.": {
    example: "We played soccer. When Sam passed the ball, I kicked it. My friend cheered. I was proud we scored.",
    why: "Openers, tense and gates checked.",
    tip: "Do not tap I'm done until you re-read.",
  },
};
