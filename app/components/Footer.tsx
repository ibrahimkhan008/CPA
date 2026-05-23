"use client";

import Link from "next/link";
import LogoLoop from "@/components/ui/LogoLoop";
import { Footer } from "@/components/ui/FooterSection";

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
  {
    node: (
      <span className="display-font text-xl font-bold tracking-tight text-foreground dark:text-white px-2">
        MaxBounty
      </span>
    ),
    title: "MaxBounty",
    href: "https://maxbounty.com",
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
            fadeOutColor="rgb(250,250,250)"
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
  { href: "/refund", label: "Refund Policy" },
  { href: "/shipping", label: "Shipping" },
  { href: "/faq", label: "FAQ" },
];

export { Footer } from "@/components/ui/FooterSection";