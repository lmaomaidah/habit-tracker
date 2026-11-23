"use client"; // needs useState for the search box and filter

import { useState } from "react";
import { categories, type Habit } from "@/data/habits";
import HabitCard from "./HabitCard";
import SearchBar from "./SearchBar";
import Select from "./Select";

interface HabitListProps {
  habits: Habit[];
}

export default function HabitList({ habits }: HabitListProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const shown = habits.filter(
    (habit) =>
      habit.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || habit.category === category)
  );

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <SearchBar value={search} onChange={setSearch} />
        <Select value={category} options={categories} placeholder="All categories" onChange={setCategory} />
      </div>

      {shown.length === 0 && <p className="text-ink/70">No habits match your search.</p>}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </div>
    </div>
  );
}
