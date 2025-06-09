// src/data/posts.ts
export interface ReactionMap {
  [emoji: string]: number;
}

export interface Comment {
  username: string;
  time: string;
  content: string;
}

export interface Post {
  username: string;
  time: string;
  category: string;
  content: string;
  feeling: string;
  comments: Comment[];
  reactions: ReactionMap;
}

export const dummyPosts: Post[] = [
  {
    username: "SleepyAnteater",
    time: "2025-04-28 20:21",
    category: "#Rant",
    content: "I just pulled 3 all-nighters in a row... midterm fried me. Send help.",
    feeling: "😴 exhausted",
    comments: [
      { username: "StudyBro", time: "2025-04-28 20:31", content: "Same here bro..." },
      { username: "NightOwl", time: "2025-04-28 21:00", content: "You got this!" }
    ],
    reactions: { "❤️": 328, "😊": 92 }
  },
  {
    username: "CoffeeLover123",
    time: "2025-04-28 08:42",
    category: "#Confession",
    content: "Sometimes I sit in Langson just to cry a little and nobody notices.",
    feeling: "🥺 overwhelmed",
    comments: [
        { username: "EmpathicSoul", time: "2025-04-28 09:00", content: "You're not alone 💛" },
        { username: "StudyBro", time: "2025-04-28 20:31", content: "Same here bro..." },
        { username: "NightOwl", time: "2025-04-28 21:00", content: "You got this!" },
        { username: "HiddenKoala", time: "2025-04-28 10:15", content: "I feel you. It's okay to cry sometimes." }
    ],
    reactions: { "💙": 94, "😢": 41 }
  },
  {
    username: "Ano",
    time: "2025-04-27 15:30",
    category: "#Advice",
    content: "Imposter syndrome is real. You're doing great.",
    feeling: "💪 determined",
    comments: [],
    reactions: { "👍": 150, "💡": 75 }
  },
  {
    username: "Ano111",
    time: "2025-06-06 15:30",
    category: "#Advice",
    content: "Test Test Test",
    feeling: "🥺 overwhelmed",
    comments: [],
    reactions: {}
  },
  {
    username: "AnonymousOwl",
    time: "2025-06-07T12:30:00.000Z",
    category: "#Rant",
    content: "Why do professors assign so much homework during finals week?!",
    feeling: "😤 frustrated",
    reactions: { "😄": 3, "😢": 2, "😡": 5 },
    comments: [
      {
        username: "MysteriousBear",
        time: "2025-06-07T13:00:00.000Z",
        content: "Right?? It's like they want us to suffer.",
      },
    ],
  },
  {
    username: "HiddenKoala",
    time: "2025-06-06T09:15:00.000Z",
    category: "#Confession",
    content: "I accidentally submitted the wrong file to Canvas 😭",
    feeling: "😢 sad",
    reactions: { "😄": 1, "😢": 4, "😡": 0 },
    comments: [],
  },
  {
    username: "ShySloth",
    time: "2025-06-05T20:45:00.000Z",
    category: "#Advice",
    content: "Any tips for managing stress before exams?",
    feeling: "😴 exhausted",
    reactions: { "😄": 5, "😢": 1, "😡": 0 },
    comments: [
      {
        username: "AnonymousOwl",
        time: "2025-06-05T21:00:00.000Z",
        content: "Try deep breathing and short walks!",
      },
    ],
  },
  {
    username: "MidtermGhost",
    time: "2025-06-04T16:10:00.000Z",
    category: "#Rant",
    content: "Group projects should be banned. Period.",
    feeling: "😡 frustrated",
    reactions: { "😄": 2, "😢": 0, "😡": 7 },
    comments: [],
  },
  {
    username: "MysteriousBear",
    time: "2025-06-03T14:00:00.000Z",
    category: "#Confession",
    content: "I enjoy online classes more than in-person ones...",
    feeling: "😊 happy",
    reactions: { "😄": 6, "😢": 0, "😡": 0 },
    comments: [],
  },
  {
    username: "FinalsFox",
    time: "2025-06-02T11:45:00.000Z",
    category: "#Advice",
    content: "Don’t pull all-nighters. Your brain needs sleep to work.",
    feeling: "😴 exhausted",
    reactions: { "😄": 2, "😢": 0, "😡": 1 },
    comments: [],
  },
  {
    username: "CaffeineCat",
    time: "2025-06-01T18:22:00.000Z",
    category: "#Rant",
    content: "I drank 4 cups of coffee and still feel nothing.",
    feeling: "😤 frustrated",
    reactions: { "😄": 3, "😢": 1, "😡": 1 },
    comments: [],
  },
  {
    username: "LibraryLlama",
    time: "2025-05-30T09:00:00.000Z",
    category: "#Confession",
    content: "Sometimes I go to the library just to nap. Sorry not sorry.",
    feeling: "😊 happy",
    reactions: { "😄": 4, "😢": 0, "😡": 0 },
    comments: [],
  },
  {
    username: "NightOwl",
    time: "2025-05-28T23:15:00.000Z",
    category: "#Advice",
    content: "Pomodoro method actually helps—25 mins focus, 5 mins rest.",
    feeling: "😴 exhausted",
    reactions: { "😄": 5, "😢": 0, "😡": 0 },
    comments: [],
  },
  {
    username: "SilentPanda",
    time: "2025-05-27T16:40:00.000Z",
    category: "#Confession",
    content: "Sometimes I just stare at my screen for hours doing nothing...",
    feeling: "😢 sad",
    reactions: { "😄": 0, "😢": 6, "😡": 0 },
    comments: [],
  },
];
