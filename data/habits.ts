// the shape of one habit
export interface Habit {
  id: string;
  name: string;
  category: string;
  description: string;
  timesPerWeek: number;
  streak: number; // days in a row
}

export const categories = ["Health", "Fitness", "Learning", "Mind"];

// each category has its own colour (defined in globals.css)
export const categoryColors: Record<string, string> = {
  Health: "bg-health",
  Fitness: "bg-fitness",
  Learning: "bg-learning",
  Mind: "bg-mind",
};

export const habits: Habit[] = [
  { id: "1", name: "Drink 8 glasses of water", category: "Health", description: "Keep a bottle nearby and refill it through the day.", timesPerWeek: 7, streak: 12 },
  { id: "2", name: "Sleep before midnight", category: "Health", description: "Phone away by 11:30 and lights off by 12.", timesPerWeek: 7, streak: 4 },
  { id: "3", name: "Eat one fruit", category: "Health", description: "An apple, a banana, anything counts.", timesPerWeek: 7, streak: 9 },
  { id: "4", name: "No sugary drinks", category: "Health", description: "Skip soft drinks and packaged juice.", timesPerWeek: 5, streak: 2 },
  { id: "5", name: "Morning walk", category: "Fitness", description: "A 20 minute walk before class.", timesPerWeek: 5, streak: 6 },
  { id: "6", name: "Push-ups", category: "Fitness", description: "Three sets of 15 push-ups.", timesPerWeek: 4, streak: 3 },
  { id: "7", name: "Stretching", category: "Fitness", description: "Ten minutes of stretching after waking up.", timesPerWeek: 7, streak: 15 },
  { id: "8", name: "Take the stairs", category: "Fitness", description: "Use the stairs instead of the lift on campus.", timesPerWeek: 5, streak: 8 },
  { id: "9", name: "Read 10 pages", category: "Learning", description: "Any book that is not a course book.", timesPerWeek: 7, streak: 21 },
  { id: "10", name: "Solve one coding problem", category: "Learning", description: "One easy or medium problem on any practice site.", timesPerWeek: 5, streak: 5 },
  { id: "11", name: "Learn 5 new words", category: "Learning", description: "Write them in a notebook with one example each.", timesPerWeek: 7, streak: 1 },
  { id: "12", name: "Revise class notes", category: "Learning", description: "Go over the day's lecture notes for 15 minutes.", timesPerWeek: 5, streak: 10 },
  { id: "13", name: "Meditate", category: "Mind", description: "Five minutes of quiet breathing.", timesPerWeek: 7, streak: 7 },
  { id: "14", name: "Write a journal entry", category: "Mind", description: "Three lines about how the day went.", timesPerWeek: 7, streak: 0 },
  { id: "15", name: "No phone for the first hour", category: "Mind", description: "Start the morning without social media.", timesPerWeek: 7, streak: 3 },
];

// find one habit by its id (undefined if there is no such habit)
export function getHabit(id: string): Habit | undefined {
  return habits.find((habit) => habit.id === id);
}
