"use client";

import Link from "next/link";
import LogoLoop from "@/components/ui/LogoLoop";

const networkLogos = [
  {
    node: (
      <span className="display-font text-xl font-bold tracking-tight text-foreground dark:text-white px-2">
        OGAds
      </span>
    ),
    title: "OGAds",
    href: "https://ogads.com",
  },
  {
    node: (
      <span className="display-font text-xl font-bold tracking-tight text-foreground dark:text-white px-2">
        AdBlueMedia
      </span>
    ),
    title: "AdBlueMedia",
    href: "https://adbluemedia.com",
  },
  {
    node: (
      <span className="display-font text-xl font-bold tracking-tight text-foreground dark:text-white px-2">
        CPAGrip
      </span>
    ),
    title: "CPAGrip",
    href: "https://cpagrip.com",
  },
  {
    node: (
      <span className="display-font text-xl font-bold tracking-tight text-foreground dark:text-white px-2">
        CPALead
      </span>
    ),
    title: "CPALead",
    href: "https://cpalead.com",
  },
];

export function FooterLogoLoop() {
  return (
    <div className="border-t border-b border-black dark:border-white py-10 px-6 md:px-10 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="label-text text-neutral-500 dark:text-neutral-400 mb-8 text-center">
          Trusted CPA Networks
        </div>
        <div className="relative">
          <LogoLoop
            logos={networkLogos}
            speed={60}
            direction="right"
            logoHeight={48}
            gap={64}
            pauseOnHover
            fadeOut
            scaleOnHover
            ariaLabel="Trusted CPA networks"
            className="overflow-x-hidden"
          />
        </div>
      </div>
    </div>
  );
}

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/cpa", label: "What is CPA" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/pricing", label: "Pricing" },
  { href: "/mentor", label: "Mentor" },
  { href: "/consultation", label: "Consultation" },
  { href: "/webinar", label: "Free Webinar" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/faq", label: "FAQ" },
];

export function Footer() {
  return (
    <>
      <footer className="border-t-4 border-black dark:border-white py-10 px-6 md:px-10 text-sm tracking-[0.15em] uppercase">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between">
          <div>VoidZero © 2026</div>
          <div className="flex flex-wrap gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-black dark:focus-visible:outline-white focus-visible:outline-offset-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-4 text-xs text-neutral-500 tracking-wide">
          Earnings are not guaranteed. Results vary based on effort and consistency.
        </div>
      </footer>
    </>
  );
}