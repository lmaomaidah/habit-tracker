"use client"; // needs useState for the inputs and errors, and an onSubmit handler

import { useState, type FormEvent } from "react";
import { categories } from "@/data/habits";
import Button from "./Button";
import FormField from "./FormField";
import Select from "./Select";

const inputStyle = "w-full rounded-full border-2 border-ink/15 bg-white px-4 py-2.5 outline-none focus:border-ink";

export default function HabitForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [timesPerWeek, setTimesPerWeek] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [savedName, setSavedName] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (name.trim().length < 3) newErrors.name = "Name must be at least 3 characters.";
    if (category === "") newErrors.category = "Please choose a category.";
    const times = Number(timesPerWeek);
    if (!Number.isInteger(times) || times < 1 || times > 7) newErrors.timesPerWeek = "Enter a number from 1 to 7.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // no backend, so just show a message and clear the form
    setSavedName(name);
    setName("");
    setCategory("");
    setTimesPerWeek("");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-md">
      {savedName && (
        <p className="mb-6 rounded-2xl bg-health p-4 font-semibold text-white">Added &quot;{savedName}&quot; to your habits.</p>
      )}

      <FormField label="Habit name" error={errors.name}>
        <input value={name} onChange={(e) => setName(e.target.value)} className={inputStyle} />
      </FormField>

      <FormField label="Category" error={errors.category}>
        <Select value={category} options={categories} placeholder="Choose a category" onChange={setCategory} />
      </FormField>

      <FormField label="Times per week" error={errors.timesPerWeek}>
        <input
          type="number"
          value={timesPerWeek}
          onChange={(e) => setTimesPerWeek(e.target.value)}
          className={inputStyle}
        />
      </FormField>

      <Button type="submit">Add habit</Button>
    </form>
  );
}
