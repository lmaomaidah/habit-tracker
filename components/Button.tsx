import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string; // if given, the button is a link
  type?: "button" | "submit";
}

const style = "inline-block rounded-full bg-ink px-5 py-2.5 font-semibold text-white hover:bg-ink/80";

export default function Button({ children, href, type = "button" }: ButtonProps) {
  if (href) {
    return <Link href={href} className={style}>{children}</Link>;
  }
  return <button type={type} className={style}>{children}</button>;
}
