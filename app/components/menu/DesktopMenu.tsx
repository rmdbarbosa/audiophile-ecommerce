import Link from "next/link";
import React from "react";

const links = ["home", "headphones", "speakers", "earphones"];

export default function DesktopMenu() {
  return (
    <ul className="hidden lg:flex gap-6 text-white z-50 uppercase text-xs font-bold tracking-[0.4em]">
      {links.map((link) => (
        <li
          key={link}
          className="cursor-pointer hover:text-orange-400 transition-colors"
        >
          {link === "home" ? (
            <Link href="/">{link}</Link>
          ) : (
            <Link href={`/${link}`}>{link}</Link>
          )}
        </li>
      ))}
    </ul>
  );
}
