import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { categoryColors, getHabit, habits } from "@/data/habits";
import Badge from "@/components/Badge";
import Button from "@/components/Button";

// build a page for every habit id ahead of time
export function generateStaticParams() {
  return habits.map((habit) => ({ id: habit.id }));
}

// "7" reads better as "every day", and 1 should not say "1 times"
function goalText(timesPerWeek: number): string {
  if (timesPerWeek === 7) return "every day";
  if (timesPerWeek === 1) return "once a week";
  return `${timesPerWeek} times a week`;
}

export async function generateMetadata({ params }: PageProps<"/habits/[id]">): Promise<Metadata> {
  const { id } = await params;
  const habit = getHabit(id);
  return {
    title: habit ? habit.name : "Habit not found",
    description: habit ? habit.description : "This habit does not exist.",
  };
}

export default async function HabitDetailPage({ params }: PageProps<"/habits/[id]">) {
  const { id } = await params;
  const habit = getHabit(id);

  if (!habit) notFound(); // unknown id shows app/not-found.tsx

  return (
    <div className="max-w-2xl">
      <div className={`${categoryColors[habit.category]} mb-8 rounded-3xl p-6 text-white sm:p-10`}>
        <div className="mb-10 flex items-start justify-between gap-4">
          <div>
            <h1 className="mb-3 text-4xl font-extrabold leading-tight tracking-tight">{habit.name}</h1>
            <Badge label={habit.category} />
          </div>
          <Image src={`/images/${habit.category.toLowerCase()}.svg`} alt="" width={72} height={72} />
        </div>
        <p>
          <span className="text-8xl font-extrabold leading-none">{habit.streak}</span>
          <span className="ml-3 text-xl text-white/80">day streak</span>
        </p>
      </div>
      <p className="mb-2 text-lg">{habit.description}</p>
      <p className="mb-8 text-lg text-ink/70">Goal: {goalText(habit.timesPerWeek)}</p>
      <Button href="/habits">Back to habits</Button>
    </div>
  );
}
