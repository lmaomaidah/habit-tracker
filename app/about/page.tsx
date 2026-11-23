import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description: "What Habit Tracker is and how to use it.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl space-y-4 text-ink/80">
      <PageHeader title="About" subtitle="A small app for keeping track of daily habits." />
      <p>Browse the habit list, open a habit to see its details, and add your own habits with the form.</p>
      <p>On the Today page you tick off what you did, and each ticked habit adds a day to its streak.</p>
      <p>This is a frontend-only project for CS4032 Web Programming. All data is mock data, so nothing is saved.</p>
    </div>
  );
}
