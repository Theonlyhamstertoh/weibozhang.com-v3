"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/ai", label: "AI" },
  { href: "/blogs", label: "Blogs" },
  { href: "/now", label: "Now" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex border-b border-b-neutral-900 flex-wrap items-center justify-between w-full p-3">
      <Link href="/" className="font-weibo text-2xl">
        Weibo
      </Link>

      {/* Desktop nav */}
      <nav className="hidden gap-3 font-medium text-neutral-400  md:flex">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:underline">
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative flex size-8 flex-col items-center justify-center gap-1.5 md:hidden"
        aria-label="Toggle menu"
      >
        <span
          className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Mobile nav */}
      <div
        className={`grid w-full transition-all duration-300 md:hidden ${
          open ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"
        }`}
      >
        <nav className="flex flex-col gap-4 overflow-hidden font-sans text-2xl">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
