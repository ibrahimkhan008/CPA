import type { Metadata } from "next";
import Link from "next/link";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export const metadata: Metadata = {
  title: "VoidZero CPA — Free CPA Affiliate Marketing Webinar",
  description:
    "Learn ethical CPA affiliate marketing with VoidZero. Build organic funnels, generate daily commissions, and scale with free traffic methods. Free webinar with Mr. Void.",
  alternates: { canonical: "https://cpahustler.com" },
  openGraph: {
    title: "VoidZero CPA — Free CPA Affiliate Marketing Webinar",
    description:
      "Learn ethical CPA affiliate marketing with VoidZero. Build organic funnels, generate daily commissions, and scale with free traffic methods.",
    type: "website",
    url: "https://cpahustler.com",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b-4 border-black overflow-hidden">
        <div className="noise"></div>
        <div className="lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 border-4 border-black shrink-0"></div>
                <div className="h-2 w-40 bg-black"></div>
              </div>

              <div className="label-text text-neutral-600 mb-6">
                Free CPA Affiliate Marketing Webinar
              </div>

              <TextHoverEffect text="VOIDZERO" />

              <p className="text-lg md:text-xl leading-relaxed max-w-3xl mt-8 mb-10 text-neutral-700 body-text">
                Learn to Build Organic Funnels, Generate Daily Commissions &amp;
                Scale Ethical CPA Systems with Mr. Void.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/webinar"
                  className="btn-primary px-10 py-5 text-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
                >
                  Join Free Webinar →
                </Link>

                <Link
                  href="/cpa"
                  className="btn-secondary px-10 py-5 text-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
                >
                  What is CPA? →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 border-2 border-black p-8 grid-pattern">
              <div className="label-text text-neutral-600 mb-4">
                Live Metrics
              </div>

              <div className="space-y-8">
                {[
                  ["1000+", "Students Trained"],
                  ["$50K+", "Generated Revenue"],
                  ["5+", "Years Experience"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <div className="display-font text-6xl font-bold">{value}</div>
                    <div className="label-text text-neutral-600 mt-2">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* What is CPA */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">
            <div className="label-text text-neutral-600 mb-6">
              Introduction
            </div>

            <h2 className="display-font text-5xl md:text-7xl font-bold leading-none tracking-tight">
              WHAT
              <br />
              IS CPA?
            </h2>
          </div>

          <div className="lg:col-span-8">
            <PointerHighlight>
              <div className="border-l-4 border-black pl-8 text-lg md:text-xl leading-relaxed text-neutral-700 mb-12 body-text">
                CPA affiliate marketing is a performance-based business model where
                you earn commissions whenever a visitor completes an action —
                signups, app installs, form submissions, or purchases. No product
                inventory needed.
              </div>
            </PointerHighlight>

            <div className="grid md:grid-cols-4 gap-0 border-2 border-black">
              {["OGAds", "AdBlueMedia", "CPAGrip", "CPALead"].map((item) => (
                <div
                  key={item}
                  className="border-r border-black last:border-r-0 p-8 flex items-center justify-center h-32 card-hover"
                >
                  <div className="label-text font-bold">
                    {item}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/cpa"
                className="btn-secondary px-8 py-4 text-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* What You'll Learn */}
      <section className="bg-black text-white py-28 px-6 md:px-10 relative overflow-hidden">
        <div className="vertical-lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-end flex-wrap gap-8 mb-16">
            <div>
              <div className="label-text text-neutral-400 mb-5">
                Curriculum
              </div>

              <h2 className="display-font text-5xl md:text-8xl leading-none font-bold">
                BUILD.
                <br />
                SCALE.
                <br />
                MONETIZE.
              </h2>
            </div>

            <div className="max-w-xl text-lg text-neutral-300 leading-relaxed body-text">
              Complete roadmap covering organic CPA traffic, whitehat arbitrage,
              monetization systems and funnel building.
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white">
            {[
              "Organic Traffic Methods",
              "Instagram Reels",
              "Content Locking",
              "Telegram Monetization",
              "Landing Page Creation",
              "Scaling Systems",
              "Whitehat Arbitrage",
              "CPA Funnel Building",
            ].map((item) => (
              <div
                key={item}
                className="border-r border-b border-white last:border-r-0 md:last:border-r-0 p-8 min-h-[220px] flex flex-col justify-between hover:bg-white hover:text-black transition-all duration-100"
              >
                <div className="label-text text-neutral-400">Module</div>
                <div className="display-font text-3xl leading-tight mt-4">
                  {item}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/curriculum"
              className="btn-primary px-10 py-5 text-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-3"
            >
              View Full Curriculum →
            </Link>
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* Pricing Preview */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end flex-wrap gap-8 mb-16">
            <div>
              <div className="label-text text-neutral-600 mb-5">
                Premium Plans
              </div>

              <h2 className="display-font text-5xl md:text-8xl font-bold leading-none">
                CHOOSE
                <br />
                YOUR PATH
              </h2>
            </div>

            <div className="max-w-lg text-lg leading-relaxed text-neutral-700 body-text">
              Learn CPA Affiliate Marketing from beginner to advanced with live
              classes, mentorship and scalable systems.
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {[
              {
                name: "Basic to Advanced",
                price: "₹5,000",
                duration: "45 Days Access",
                description: "Recorded Course Only",
                badge: null,
                features: [
                  "Beginner to Advanced CPA Training",
                  "Recorded Video Modules",
                  "Traffic Methods",
                  "Landing Page Basics",
                  "Monetization Strategies",
                ],
                cta: "Get Instant Access →",
                href: "/pricing",
                featured: false,
              },
              {
                name: "3 Months Premium",
                price: "₹10,000",
                duration: "3 Months",
                description: "Mentorship + Live Classes",
                badge: "MOST POPULAR",
                features: [
                  "Weekly Live Classes",
                  "Personal Mentorship",
                  "Premium Community Access",
                  "High Earning Method",
                  "Live Class Recordings",
                ],
                cta: "Enroll Now →",
                href: "/pricing",
                featured: true,
              },
              {
                name: "1 Year Elite Access",
                price: "₹20,000",
                duration: "1 Year",
                description: "Elite Mentorship",
                badge: "BEST VALUE",
                features: [
                  "Advanced High-Ticket Sales",
                  "Automation Setup",
                  "Organic Branding",
                  "Scaling Frameworks",
                  "Advanced CPA Systems",
                ],
                cta: "Join Elite Program →",
                href: "/pricing",
                featured: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`border-2 border-black p-10 relative card-hover group ${plan.featured ? "lg:-mt-10 lg:mb-10 bg-black text-white" : "bg-white text-black"}`}
              >
                {plan.badge && (
                  <div
                    className={`absolute -top-5 left-0 px-5 py-2 border-2 border-black label-text font-bold ${plan.featured ? "bg-white text-black" : "bg-black text-white"}`}
                  >
                    {plan.badge}
                  </div>
                )}

                <div className="label-text mb-5">
                  {plan.duration}
                </div>

                <h3 className="display-font text-4xl leading-tight font-bold mb-6">
                  {plan.name}
                </h3>

                <div className="text-6xl display-font font-bold mb-4">
                  {plan.price}
                </div>

                <div className="label-text mb-10 opacity-70">
                  {plan.description}
                </div>

                <div className="space-y-4 border-t-2 border-current pt-8 mb-10">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex gap-4 text-lg leading-relaxed">
                      <span>+</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={plan.href}
                  className={`w-full block text-center py-5 text-sm font-bold border-2 transition-all duration-100 ${plan.featured ? "bg-white text-black border-white hover:bg-black hover:text-white hover:border-black group-hover:bg-black group-hover:text-white group-hover:border-black" : "bg-black text-white border-black hover:bg-neutral-800"} focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-2`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/pricing"
              className="btn-secondary px-8 py-4 text-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
            >
              Compare All Plans →
            </Link>
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* Mentor Section */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 border-2 border-black p-10 flex flex-col gap-10">
            <div>
              <div className="label-text text-neutral-600 mb-5">
                Mentor
              </div>

              <h2 className="display-font text-6xl md:text-8xl leading-none font-bold">
                MR.
                <br />
                VOID
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-neutral-700 body-text">
              <p>
                Teaching ethical CPA affiliate marketing systems focused on
                long-term sustainable growth.
              </p>

              <p>
                Helping students and freelancers generate online income using
                free traffic methods, landing pages and monetization funnels.
              </p>
            </div>

            <Link
              href="/mentor"
              className="btn-secondary px-8 py-4 text-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
            >
              About Mr. Void →
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                ["5+", "Years Experience"],
                ["$50K+", "Earnings Generated"],
                ["1000+", "Students"],
                ["Global", "International Reach"],
              ].map(([value, label]) => (
                <div key={label} className="border-b-4 border-black pb-8">
                  <div className="display-font text-7xl md:text-8xl font-bold leading-none mb-4">
                    {value}
                  </div>
                  <div className="label-text text-neutral-600">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* Final CTA */}
      <section className="bg-black text-white py-32 px-6 md:px-10 relative overflow-hidden">
        <div className="noise"></div>
        <div className="vertical-lines absolute inset-0"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="label-text text-neutral-400 mb-8">
            Final Call
          </div>

          <h2 className="display-font text-6xl md:text-[10rem] leading-[0.85] tracking-[-0.06em] font-bold mb-10">
            READY TO
            <br />
            FLIP THE
            <br />
            SCRIPT?
          </h2>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-neutral-300 leading-relaxed mb-14 body-text">
            Transform your income using ethical CPA affiliate marketing systems,
            webinar funnels and organic scaling strategies.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mb-20">
            <Link
              href="/webinar"
              className="btn-primary px-12 py-5 text-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-3"
            >
              Join Free Webinar →
            </Link>

            <Link
              href="/pricing"
              className="btn-secondary px-12 py-5 text-sm border-white text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-3"
            >
              View Pricing →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left border-t border-white pt-12">
            <div>
              <div className="label-text text-neutral-400 mb-6">
                What We Teach
              </div>

              <div className="space-y-4 text-lg text-neutral-300 body-text">
                {["Organic Traffic", "Whitehat Arbitrage", "Funnel Building", "Scaling Systems"].map(
                  (item) => (
                    <div key={item}>— {item}</div>
                  )
                )}
              </div>
            </div>

            <div>
              <div className="label-text text-neutral-400 mb-6">
                What We Avoid
              </div>

              <div className="space-y-4 text-lg text-neutral-300 body-text">
                {["Self-clicking", "Fake methods", "Botting", "Blackhat spam"].map(
                  (item) => (
                    <div key={item}>— {item}</div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}