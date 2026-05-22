"use client";

import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { Home } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero section */}
      <section className="flex-1 flex items-center justify-center relative overflow-hidden border-b-4 border-black dark:border-white">
        <div className="noise"></div>
        <div className="lines absolute inset-0 dark:opacity-10"></div>

        <div className="max-w-2xl mx-auto px-6 py-24 relative z-10 text-center">
          <div className="label-text text-neutral-600 dark:text-neutral-400 mb-8">
            Error 404
          </div>

          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Avatar className="w-20 h-20 border-4 border-black dark:border-white">
                  <AvatarFallback className="bg-black dark:bg-white text-white dark:text-black display-font text-4xl">
                    404
                  </AvatarFallback>
                </Avatar>
              </EmptyMedia>

              <EmptyTitle className="display-font text-4xl md:text-6xl font-bold">
                Page Not Found
              </EmptyTitle>

              <EmptyDescription className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 body-text max-w-md">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
              </EmptyDescription>
            </EmptyHeader>

            <EmptyContent>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/">
                  <Button
                    variant="default"
                    size="lg"
                    className="gap-2"
                  >
                    <Home size={16} />
                    Back to Home
                  </Button>
                </Link>
                <Link href="/consultation">
                  <Button
                    variant="outline"
                    size="lg"
                  >
                    Contact Us →
                  </Button>
                </Link>
              </div>
            </EmptyContent>
          </Empty>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* Quick links */}
      <section className="py-16 px-6 md:px-10 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="label-text text-neutral-600 mb-8">Explore Instead</div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { href: "/cpa", label: "What is CPA" },
              { href: "/pricing", label: "Pricing" },
              { href: "/curriculum", label: "Curriculum" },
              { href: "/mentor", label: "Meet the Mentor" },
              { href: "/webinar", label: "Free Webinar" },
              { href: "/faq", label: "FAQ" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="label-text hover:underline py-2 focus-visible:outline focus-visible:outline-3 focus-visible:outline-black dark:focus-visible:outline-white focus-visible:outline-offset-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}