"use client";

import React, { useRef } from "react";
import type { ComponentProps } from "react";
import { motion, useReducedMotion, useInView } from "motion/react";

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: "Product",
    links: [
      { title: "Features", href: "/#features" },
      { title: "Pricing", href: "/pricing" },
      { title: "Testimonials", href: "/proofs" },
      { title: "Free Webinar", href: "/webinar" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "FAQs", href: "/faq" },
      { title: "About Us", href: "/about" },
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Services", href: "/terms" },
    ],
  },
  {
    label: "Resources",
    links: [
      { title: "Mentor", href: "/mentor" },
      { title: "What is CPA", href: "/cpa" },
      { title: "Curriculum", href: "/curriculum" },
      { title: "Consultation", href: "/consultation" },
    ],
  },
  {
    label: "Connect",
    links: [
      { title: "Facebook", href: "#" },
      { title: "Instagram", href: "#" },
      { title: "YouTube", href: "#" },
      { title: "LinkedIn", href: "#" },
    ],
  },
];

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: React.ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: ViewAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      animate={
        isInView
          ? { filter: "blur(0px)", translateY: 0, opacity: 1 }
          : {}
      }
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Footer() {
  return (
    <footer className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center border-t px-6 py-12 lg:py-16">
      <div className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/20 blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <span className="display-font text-xl font-bold tracking-tight">
            VoidZero
          </span>
          <p className="text-muted-foreground text-sm mt-8 md:mt-0">
            © {new Date().getFullYear()} VoidZero. All rights reserved.
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="label-text text-xs">{section.label}</h3>
                <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="hover:text-foreground transition-all duration-300"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
}