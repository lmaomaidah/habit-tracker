import Image from "next/image";
import Link from "next/link";
import { categoryColors, type Habit } from "@/data/habits";
import Badge from "./Badge";

interface HabitCardProps {
  habit: Habit;
}

export default function HabitCard({ habit }: HabitCardProps) {
  return (
    <Link
      href={`/habits/${habit.id}`}
      className={`${categoryColors[habit.category]} flex flex-col justify-between gap-8 rounded-3xl p-5 text-white outline-offset-4 focus-visible:outline-4 focus-visible:outline-ink motion-safe:transition-transform motion-safe:hover:-rotate-1`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="mb-2 text-xl font-bold leading-tight">{habit.name}</h2>
          <Badge label={habit.category} />
        </div>
        <Image src={`/images/${habit.category.toLowerCase()}.svg`} alt="" width={44} height={44} />
      </div>
      <p>
        <span className="text-6xl font-extrabold leading-none">{habit.streak}</span>
        <span className="ml-2 text-white/80">day streak</span>
      </p>
    </Link>
  );
}
