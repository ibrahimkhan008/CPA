import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "VoidZero CPA — Free Affiliate Marketing Webinar",
  description:
    "Learn CPA affiliate marketing with Mr. Void. Free webinar covering organic funnels, traffic methods, and ethical monetization systems.",
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-black dark:text-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-black dark:focus:bg-black dark:focus:text-white focus:px-6 focus:py-3 focus:uppercase focus:tracking-widest focus:text-sm focus:outline-none"
        >
          Skip to content
        </a>

        <ThemeProvider>
          <Navbar />

          <main id="main-content" className="flex-1">{children}</main>

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
        </ThemeProvider>
      </body>
    </html>
  );
}