import type { UserProfile, PracticeSession, UserPerformance, Exercise } from "./Types";

export const mockUser: UserProfile = {
  name: "Benny",
  email: "yoyohoho@hotmail.com",
  communicationGoals: ["Speak Clearly", "Gain Confidence"],
  selfReportedWeaknesses: ["Mumbling", "Stuttering", "Quiet"],
};

export const mockExercises: Exercise[] = [
  {
    id: "small-talk-fluency",
    title: "Small Talk Fluency",
    description:
      "Build ease and natural flow in casual conversation. Practice bridging topics, asking good questions, and exiting gracefully.",
    duration: "90 sec",
    difficulty: "Beginner",
    prompt:
      "Explain what you do for work to someone who has never heard of your field — as if you were talking to a curious stranger at a dinner party.",
  },
  {
    id: "clarity-under-pressure",
    title: "Clarity Under Pressure",
    description:
      "Practice giving a direct, complete answer when you have no time to prepare.",
    duration: "60 sec",
    difficulty: "Intermediate",
    prompt:
      "You have just been asked in a meeting: 'What is the one thing our team should stop doing, and why?' Answer in under a minute.",
  },
  {
    id: "steady-pace",
    title: "Steady Pace",
    description:
      "Learn to hold a comfortable speed from the first sentence to the last, without rushing the ending.",
    duration: "90 sec",
    difficulty: "Beginner",
    prompt:
      "Describe the place where you grew up to someone who has never been there. Keep the same speed throughout.",
  },
  {
    id: "public-speaking-opener",
    title: "Public Speaking Opener",
    description:
      "Practice the first minute of a talk: get attention, state your point, and say what is coming.",
    duration: "2 min",
    difficulty: "Advanced",
    prompt:
      "Give the opening of a five-minute talk on a skill everyone should learn. Hook the audience, then tell them what you will cover.",
  },
  {
    id: "follow-up-questions",
    title: "Follow-Up Questions",
    description:
      "Keep a conversation going by asking questions that build on what the other person said.",
    duration: "60 sec",
    difficulty: "Intermediate",
    prompt:
      "A coworker tells you: 'I just got back from two weeks of hiking in Patagonia.' Ask three follow-up questions out loud, each building on a likely answer to the one before.",
  },
  {
    id: "structured-storytelling",
    title: "Structured Storytelling",
    description:
      "Tell a short story with a clear setup, problem and resolution.",
    duration: "90 sec",
    difficulty: "Intermediate",
    prompt:
      "Tell a short story about a time something went wrong and how you handled it. Give it a clear beginning, middle and end.",
  },
  {
    id: "explaining-ideas",
    title: "Explaining Ideas",
    description:
      "Take something complicated and make it simple, using plain words and one good comparison.",
    duration: "90 sec",
    difficulty: "Intermediate",
    prompt:
      "Explain how a web page gets from the internet to your screen, as if you were talking to a ten-year-old.",
  },
  {
    id: "reducing-filler-words",
    title: "Reducing Filler Words",
    description:
      "Speak on an easy topic while replacing every um, uh and like with a silent pause.",
    duration: "60 sec",
    difficulty: "Beginner",
    prompt:
      "Describe your morning routine from waking up to leaving the house. Aim for zero filler words.",
  },
];

// Oldest first. Each session's practiceType is the title of an exercise above.
// The numbers are consistent with the transcript: fillerWordCount counts
// um, uh, like, you know, basically and actually, and speakingPace is the
// transcript's word count divided by the duration in minutes.
export const mockSessions: PracticeSession[] = [
  {
    id: "s1",
    practiceType: "Reducing Filler Words",
    transcript:
      "So, um, my morning routine is, like, pretty simple I guess. I wake up around six thirty and, uh, the first thing I do is check my phone, which I know is bad. Then I, um, get up and make coffee, because basically I can't function without it. After that I, like, take a shower and get dressed, and, you know, that takes maybe twenty minutes. Then, uh, I make breakfast, usually eggs or, um, sometimes just toast if I'm running late. I actually try to eat sitting down but, like, most days I end up eating while I pack my bag. And then, uh, I look for my keys, which, you know, takes way longer than it should. So yeah, basically that's it, and then I leave the house around seven fifteen.",
    duration: 44,
    speakingPace: 181,
    fillerWordCount: 14,
    clarityScore: 4,
    structureScore: 5,
    feedback: {
      didWell: [
        "You covered the whole routine in order, from waking up to leaving the house.",
        "Specific details, such as the times and what you eat, made it easy to picture.",
      ],
      toImprove: [
        "Fourteen filler words in under a minute. Most of them come straight after a connecting word such as 'and' or 'then'.",
        "You spoke well above a comfortable pace, which left you no room to think ahead.",
      ],
      recommendedFocus:
        "Slow down, and when you need a moment to think, stay silent instead of filling the gap.",
    },
    createdAt: "2026-09-22T18:30:00.000Z",
  },
  {
    id: "s2",
    practiceType: "Small Talk Fluency",
    transcript:
      "Oh, so, um, I work in customer research, which basically means I talk to people who use a product and figure out what's confusing for them. So, like, a company might build an app and think it's really easy to use, and then, uh, I sit down with real customers and watch them try it. And, you know, half the time they get stuck on something nobody expected. Then I, um, write up what I saw and share it with the team so they can fix it. It's actually pretty fun because, like, every project is different. One month it's, um, a banking app and the next it's, uh, a grocery delivery thing. I guess the short version is, you know, I help companies understand their customers better. What about you, what do you do?",
    duration: 47,
    speakingPace: 172,
    fillerWordCount: 11,
    clarityScore: 5,
    structureScore: 6,
    feedback: {
      didWell: [
        "You explained the job with an example a stranger could follow, with no jargon.",
        "Ending with a question handed the conversation back, which is what small talk needs.",
      ],
      toImprove: [
        "The one-sentence summary came at the end. Leading with it would help the listener follow the rest.",
        "Fillers cluster at the start of sentences, while you are deciding what to say next.",
      ],
      recommendedFocus:
        "Open with your one-sentence summary, then give the example.",
    },
    createdAt: "2026-09-25T12:15:00.000Z",
  },
  {
    id: "s3",
    practiceType: "Structured Storytelling",
    transcript:
      "Last summer I was supposed to give a presentation to about forty people, and ten minutes before it started my laptop just died. So, um, at first I panicked, because all of my slides were on it. I tried the charger, I tried holding the power button, and, uh, nothing worked. Then I remembered I had emailed an older version of the slides to a coworker, so I, like, ran down the hall and asked to borrow her computer. The slides were, you know, missing the last section, so I had to explain that part from memory. And, um, honestly it went better than I expected, because, you know, I was talking to people instead of reading. Afterwards a few people actually said it was the clearest part. So now I, uh, always keep a backup, and I basically practice the ending without slides.",
    duration: 53,
    speakingPace: 163,
    fillerWordCount: 9,
    clarityScore: 6,
    structureScore: 7,
    feedback: {
      didWell: [
        "The first sentence set up the situation and the problem straight away.",
        "The story had a clear resolution and finished with what you changed afterwards.",
      ],
      toImprove: [
        "The middle rushes through three failed attempts in one breath. Slowing down there would build tension.",
        "Fillers appear at the turning points of the story, where a short silence would have more effect.",
      ],
      recommendedFocus:
        "Mark each turning point in the story with a silent beat before you continue.",
    },
    createdAt: "2026-09-28T19:05:00.000Z",
  },
  {
    id: "s4",
    practiceType: "Explaining Ideas",
    transcript:
      "Okay, so imagine you want to borrow a book from a huge library that is very far away. When you type a website's name, your computer sends a little note asking for that page. The note has to find the right library, so, um, it first asks a kind of phone book where that website lives. Then the note travels through a lot of cables, some of them, uh, under the ocean, until it reaches a big computer called a server. The server finds the page and sends it back in small pieces, like, hundreds of tiny packages. Your computer puts the pieces back together in the right order, and, you know, that is when you see the page. All of that actually happens in about a second. So basically the internet is a very fast delivery service, and, um, your browser is the one opening the boxes.",
    duration: 56,
    speakingPace: 159,
    fillerWordCount: 7,
    clarityScore: 6,
    structureScore: 7,
    feedback: {
      didWell: [
        "One comparison, the library and the note, carried the whole explanation.",
        "Each step followed from the one before, so the order was easy to keep track of.",
      ],
      toImprove: [
        "The closing line swaps the library for a delivery service. Staying with one comparison would be clearer for a ten-year-old.",
        "The words 'server' and 'browser' are used without saying what they are.",
      ],
      recommendedFocus:
        "Pick one comparison and stay with it from the first sentence to the last.",
    },
    createdAt: "2026-10-01T08:40:00.000Z",
  },
  {
    id: "s5",
    practiceType: "Reducing Filler Words",
    transcript:
      "I wake up at six thirty and the first thing I do is drink a glass of water. Then I make coffee and sit by the window for about ten minutes, which is my favorite part of the morning. After that I take a shower and get dressed. I pick my clothes the night before, so, um, that part goes quickly now. Breakfast is usually eggs and toast, and I eat at the table instead of standing at the counter. While I eat I look over my plan for the day, and, uh, I write down the three things that matter most. Then I pack my bag, find my keys, which, you know, I now keep by the door, and check that the stove is off. I actually leave the house at seven fifteen, and, um, most days I am on time.",
    duration: 56,
    speakingPace: 152,
    fillerWordCount: 5,
    clarityScore: 7,
    structureScore: 8,
    feedback: {
      didWell: [
        "Five filler words, down from fourteen the first time you did this exercise.",
        "Short, complete sentences. Each one finished its thought before the next began.",
      ],
      toImprove: [
        "The remaining fillers all follow the word 'and' or 'so'. Try ending the sentence there instead.",
        "The last sentence trails off. Decide on your closing line before you start speaking.",
      ],
      recommendedFocus:
        "Finish each sentence with a full stop, and start the next one fresh.",
    },
    createdAt: "2026-10-04T18:20:00.000Z",
  },
];

export const mockPerformance: UserPerformance = {
  strengths: ["Structure", "Clarity"],
  weaknesses: ["Filler Words", "Speaking Pace"],
  recommendedPractice: "Reducing Filler Words",
};
