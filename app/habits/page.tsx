import type { Metadata } from "next";
import { habits } from "@/data/habits";
import HabitList from "@/components/HabitList";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "All Habits",
  description: "Search and filter all habits by category.",
};

export default function HabitsPage() {
  return (
    <div>
      <PageHeader title="All habits" subtitle="Search by name or filter by category." />
      <HabitList habits={habits} />
    </div>
  );
}
