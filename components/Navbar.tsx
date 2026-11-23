import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/habits", label: "Habits" },
  { href: "/today", label: "Today" },
  { href: "/habits/new", label: "Add habit" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <nav className="border-b-2 border-ink">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-5">
        <Link href="/" className="text-2xl font-extrabold tracking-tight">Habit Tracker</Link>
        <div className="flex flex-wrap gap-5 font-medium">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="underline-offset-4 hover:underline">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
