"use client";

import { MoonSolid, SunSolid } from "@mynaui/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/ai", label: "AI" },
  { href: "/blog", label: "Blogs" },
  { href: "/now", label: "Now" },
  { href: "/weibo-zhang-resume.pdf", label: "Resume" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setDark(false);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <header className="flex  flex-wrap items-center justify-between w-full p-5">
      <Link href="/" className="font-weibo text-2xl">
        Weibo
      </Link>

      {/* Desktop nav */}
      <nav className="hidden gap-3 font-extrabold tracking-tighter text-foreground md:flex items-center">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:underline">
            {link.label}
          </Link>
        ))}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="ml-2 p-1 hover:opacity-70 transition-opacity"
        >
          {dark ? (
            <SunSolid className="size-5" />
          ) : (
            <MoonSolid className="size-5" />
          )}
        </button>
      </nav>

      {/* Mobile toggle + hamburger */}
      <div className="flex items-center gap-2 md:hidden">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-1 hover:opacity-70 transition-opacity"
        >
          {dark ? (
            <SunSolid className="size-5" />
          ) : (
            <MoonSolid className="size-5" />
          )}
        </button>
        <button
          onClick={() => setOpen(!open)}
          className="relative flex size-8 flex-col items-center justify-center gap-1.5"
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
      </div>

      {/* Mobile nav */}
      <div
        className={` pb-6 grid w-full transition-all duration-300 md:hidden ${
          open ? "border-b grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"
        }`}
      >
        <nav className="flex flex-col font-extrabold tracking-tighter gap-4 overflow-hidden font-sans text-2xl">
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
