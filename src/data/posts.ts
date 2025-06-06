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
        { username: "NightOwl", time: "2025-04-28 21:00", content: "You got this!" }],
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
  }
];
