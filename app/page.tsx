import type { Metadata } from "next";
import { habits } from "@/data/habits";
import Button from "@/components/Button";
import HabitCard from "@/components/HabitCard";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Home | Habit Tracker", // the layout's title template skips the home page, so write it out
  description: "Build better habits by checking them off every day.",
};

export default function HomePage() {
  return (
    <div>
      <PageHeader
        title="Build better habits, one day at a time"
        subtitle="Pick a few habits, check them off every day and watch your streaks grow."
      />

      <div className="mb-10 flex flex-wrap gap-3">
        <Button href="/today">Check off today</Button>
        <Button href="/habits">Browse habits</Button>
      </div>

      <h2 className="mb-4 text-2xl font-bold">Longest streaks</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[...habits].sort((a, b) => b.streak - a.streak).slice(0, 3).map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </div>
    </div>
  );
}
