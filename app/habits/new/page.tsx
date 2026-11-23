import type { Metadata } from "next";
import HabitForm from "@/components/HabitForm";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Add Habit",
  description: "Add a new habit to track.",
};

export default function NewHabitPage() {
  return (
    <div>
      <PageHeader title="Add a habit" subtitle="Give it a name, a category and a weekly goal." />
      <HabitForm />
    </div>
  );
}
