import type { Metadata } from "next";
import { habits } from "@/data/habits";
import PageHeader from "@/components/PageHeader";
import TodayList from "@/components/TodayList";

export const metadata: Metadata = {
  title: "Today",
  description: "Check off the habits you did today.",
};

export default function TodayPage() {
  return (
    <div>
      <PageHeader title="Today" subtitle="Tick each habit you did today to grow its streak." />
      <TodayList habits={habits} />
    </div>
  );
}
