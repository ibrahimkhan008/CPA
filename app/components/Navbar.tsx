"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/cpa", label: "What is CPA" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/pricing", label: "Pricing" },
  { href: "/mentor", label: "Mentor" },
  { href: "/about", label: "About" },
  { href: "/proofs", label: "Proofs" },
  { href: "/consultation", label: "Consultation" },
  { href: "/webinar", label: "Free Webinar" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b-4 border-black sticky top-0 bg-white dark:bg-black z-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="label-text font-bold hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-2"
        >
          VoidZero
        </Link>

        {/* Right side: theme toggle + hamburger */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            className="flex flex-col gap-[5px] p-2 focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-2"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-[2px] bg-black dark:bg-white transition-all duration-100 ${open ? "w-6 translate-y-[7px] rotate-45" : "w-6"}`}
            />
            <span
              className={`block h-[2px] bg-black dark:bg-white transition-all duration-100 ${open ? "opacity-0 w-0" : "w-6"}`}
            />
            <span
              className={`block h-[2px] bg-black dark:bg-white transition-all duration-100 ${open ? "w-6 -translate-y-[7px] -rotate-45" : "w-4"}`}
            />
          </button>
        </div>
      </div>

      {/* Dropdown — full navigation */}
      <div
        className={`overflow-hidden border-t-2 border-black dark:border-white ${open ? "max-h-[800px]" : "max-h-0"}`}
      >
        <nav
          className="px-6 py-4 bg-white dark:bg-black"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1 list-none p-0 m-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-2 label-text border-b border-neutral-100 dark:border-neutral-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-black dark:focus-visible:outline-white focus-visible:outline-offset-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/webinar"
                onClick={() => setOpen(false)}
                className="block text-center py-4 bg-black dark:bg-white text-white dark:text-black label-text font-bold border-2 border-black dark:border-white hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all duration-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-black dark:focus-visible:outline-white focus-visible:outline-offset-2"
              >
                Join Free Webinar →
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}