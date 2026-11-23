import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Habit Tracker", template: "%s | Habit Tracker" },
  description: "Track your daily habits and build streaks.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <Navbar />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
