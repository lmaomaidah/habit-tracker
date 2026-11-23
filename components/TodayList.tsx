"use client"; // needs useState to remember which habits are checked off

import { useState } from "react";
import { categoryColors, type Habit } from "@/data/habits";

interface TodayListProps {
  habits: Habit[];
}

export default function TodayList({ habits }: TodayListProps) {
  const [done, setDone] = useState<string[]>([]); // ids of habits done today

  function toggle(id: string) {
    if (done.includes(id)) {
      setDone(done.filter((doneId) => doneId !== id));
    } else {
      setDone([...done, id]);
    }
  }

  return (
    <div>
      <p className="mb-6 text-2xl font-bold">{done.length} of {habits.length} done today</p>

      <ul className="space-y-2">
        {habits.map((habit) => {
          const checked = done.includes(habit.id);
          // a checked row fills with its category colour
          const rowStyle = checked ? `${categoryColors[habit.category]} text-white` : "bg-white";
          return (
            <li key={habit.id}>
              <label className={`${rowStyle} flex cursor-pointer items-center justify-between gap-3 rounded-2xl p-4 transition-colors`}>
                <span className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggle(habit.id)}
                    className="size-5 accent-ink"
                  />
                  <span className="font-medium">{habit.name}</span>
                </span>
                {/* checking a habit adds one day to its streak */}
                <span className="shrink-0 text-2xl font-extrabold">{habit.streak + (checked ? 1 : 0)}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
