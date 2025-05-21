"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();

  return (
    <Link className={pathname.includes(href) ? "active" : undefined} href={href}>
      {children}
    </Link>
  );
}
