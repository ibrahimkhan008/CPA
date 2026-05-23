import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Curriculum — VoidZero CPA",
  description:
    "Explore the full VoidZero CPA curriculum covering organic traffic, funnel building, and monetization systems.",
  alternates: { canonical: "https://cpahustler.com/curriculum" },
  openGraph: {
    title: "Curriculum — VoidZero CPA",
    description:
      "Explore the full VoidZero CPA curriculum covering organic traffic, funnel building, and monetization systems.",
    type: "website",
    url: "https://cpahustler.com/curriculum",
  },
};

const curriculum = [
  {
    module: "01",
    title: "CPA Fundamentals",
    lessons: [
      "What is CPA & how it really works",
      "Choosing the right CPA network",
      "Understanding offer types and verticals",
      "Reading and analyzing offer terms",
      "Setting up your tracking",
    ],
  },
  {
    module: "02",
    title: "Organic Traffic Methods",
    lessons: [
      "Instagram Reels strategy from zero",
      "Telegram channel growth & monetization",
      "Content locking mechanics",
      "Free traffic sources that convert",
      "Building an audience without paid ads",
    ],
  },
  {
    module: "03",
    title: "Landing Page Creation",
    lessons: [
      "Anatomy of a high-converting LP",
      "Copywriting for CPA offers",
      "Design principles for LPs",
      "A/B testing fundamentals",
      "Traffic source compliance",
    ],
  },
  {
    module: "04",
    title: "Scaling Systems",
    lessons: [
      "Finding profitable GEOs",
      "Keyword research for CPA",
      "Automation tools and workflows",
      "Campaign cloning method",
      "Reading analytics for scaling decisions",
    ],
  },
  {
    module: "05",
    title: "Whitehat Arbitrage",
    lessons: [
      "What is whitehat arbitrage",
      "Finding the right traffic sources",
      "Profit margin calculation",
      "Managing ad spend profitably",
      "Scaling arbitrage campaigns",
    ],
  },
  {
    module: "06",
    title: "CPA Funnel Building",
    lessons: [
      "Funnel architecture basics",
      "Pre-lander strategies",
      "A/B testing funnels",
      "Email list building for CPA",
      "Retargeting and warm traffic",
    ],
  },
];

export default function CurriculumPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b-4 border-black overflow-hidden py-20 md:py-32">
        <div className="noise"></div>
        <div className="lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="label-text text-neutral-600 mb-6">Curriculum</div>

          <h1 className="display-font text-6xl md:text-9xl font-bold leading-none tracking-tight mb-8">
            BUILD.
            <br />
            SCALE.
            <br />
            MONETIZE.
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl text-neutral-700 leading-relaxed body-text">
            A complete, structured roadmap covering every skill you need to build
            organic CPA funnels, drive targeted traffic, and scale ethically.
          </p>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* Modules */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 border-2 border-black">
            {curriculum.map(({ module, title, lessons }) => (
              <div
                key={module}
                className="border-r border-b border-black last:border-r-0 md:last:border-r-0 p-8 md:p-12 hover:bg-black hover:text-white transition-all duration-100"
              >
                <div className="display-font text-6xl md:text-7xl font-bold opacity-20 mb-6">
                  {module}
                </div>

                <h3 className="display-font text-2xl md:text-3xl font-bold mb-6">
                  {title}
                </h3>

                <ul className="space-y-3">
                  {lessons.map((lesson) => (
                    <li key={lesson} className="flex gap-4 text-sm leading-relaxed body-text">
                      <span className="shrink-0 mt-1">—</span>
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* Skills covered */}
      <section className="bg-black text-white py-24 md:py-32 px-6 md:px-10 relative overflow-hidden">
        <div className="vertical-lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="label-text text-neutral-400 mb-6">
            Skills Covered
          </div>

          <h2 className="display-font text-5xl md:text-7xl font-bold leading-none tracking-tight mb-16">
            WHAT
            <br />
            YOU&apos;LL GAIN
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white">
            {[
              "Organic Traffic Methods",
              "Instagram Reels Growth",
              "Content Locking",
              "Telegram Monetization",
              "Landing Page Creation",
              "Scaling Frameworks",
              "Whitehat Arbitrage",
              "CPA Funnel Building",
            ].map((item) => (
              <div
                key={item}
                className="border-r border-b border-white last:border-r-0 md:last:border-r-0 p-8 hover:bg-white hover:text-black transition-all duration-100"
              >
                <div className="label-text text-neutral-400 mb-4">Module</div>
                <div className="display-font text-2xl leading-tight">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* CTA */}
      <section className="py-20 px-6 md:px-10 bg-neutral-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="display-font text-4xl md:text-5xl font-bold leading-none mb-3 text-black">
              Start Learning Today
            </h2>
            <p className="text-neutral-600 body-text">
              All plans include lifetime access to the curriculum materials.
            </p>
          </div>

          <Link
            href="/pricing"
            className="btn-primary px-10 py-5 text-sm shrink-0 focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
            style={{ backgroundColor: "#000", color: "#fff", borderColor: "#000" }}
          >
            View Pricing →
          </Link>
        </div>
      </section>
    </>
  );
}