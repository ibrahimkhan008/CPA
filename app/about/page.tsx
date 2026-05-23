import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Mr. Void — VoidZero CPA",
  description:
    "Meet Mr. Void, founder of VoidZero CPA. Learn about his background, results, and approach to ethical CPA affiliate marketing.",
  alternates: { canonical: "https://cpahustler.com/about" },
  openGraph: {
    title: "About Mr. Void — VoidZero CPA",
    description:
      "Meet Mr. Void, founder of VoidZero CPA. Learn about his background, results, and approach to ethical CPA affiliate marketing.",
    type: "website",
    url: "https://cpahustler.com/about",
  },
};

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "$50K+", label: "CPA Earnings" },
  { value: "1000+", label: "Students Mentored" },
  { value: "24/7", label: "Community Support" },
];

const timeline = [
  {
    year: "2021",
    title: "Started CPA Journey",
    description:
      "Began experimenting with affiliate funnels and organic traffic systems.",
  },
  {
    year: "2022",
    title: "Scaled First Profitable Funnels",
    description:
      "Built sustainable CPA systems using Telegram and Instagram growth.",
  },
  {
    year: "2023",
    title: "Built VoidZero Community",
    description:
      "Started mentoring beginners and creating educational content.",
  },
  {
    year: "2024",
    title: "Reached 1000+ Students",
    description:
      "Expanded mentorship and community support for aspiring affiliates.",
  },
];

const trustBadges = [
  "Verified Mentor",
  "1000+ Students",
  "Ethical CPA Systems",
  "Private Community",
  "Organic Traffic Expert",
  "Telegram Premium Access",
];

const impactStories = [
  {
    before: "No affiliate knowledge",
    after: "Built first CPA funnel within weeks",
  },
  {
    before: "Struggling with traffic",
    after: "Generated consistent organic leads",
  },
  {
    before: "No monetization strategy",
    after: "Scaled Telegram-based CPA systems",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b-4 border-black overflow-hidden">
        <div className="noise"></div>
        <div className="lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32 relative z-10">
          <div className="flex justify-between border-b border-black pb-6 mb-16">
            <Link
              href="/"
              className="label-text font-bold hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-2"
            >
              VoidZero
            </Link>
            <div className="label-text text-neutral-600">
              Official Mentor Profile
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-14 items-center">
            <div className="lg:col-span-7">
              <div className="label-text text-neutral-600 mb-6">
                Meet The Mentor
              </div>

              <h1 className="display-font text-[4.5rem] md:text-[9rem] leading-[0.82] tracking-[-0.06em] font-bold uppercase mb-10">
                SAY HI
                <br />
                TO MR.
                <br />
                VOID
              </h1>

              <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-neutral-700 body-text">
                Helping beginners learn ethical CPA affiliate marketing, organic
                traffic systems and sustainable monetization strategies.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="border-4 border-black aspect-[4/5] grid-pattern flex items-center justify-center overflow-hidden">
                <div className="text-center p-10">
                  <div className="display-font text-6xl font-bold mb-4">
                    MR.
                    <br />
                    VOID
                  </div>

                  <div className="label-text text-neutral-500">
                    Mentor Photo Placeholder
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* Stats */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="label-text text-neutral-600 mb-5">Stats &amp; Impact</div>

            <h2 className="display-font text-5xl md:text-8xl leading-none font-bold uppercase">
              THE
              <br />
              NUMBERS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-black">
            {stats.map((item) => (
              <div
                key={item.label}
                className="border border-black p-10 text-center min-h-[280px] flex flex-col justify-center card-hover"
              >
                <div className="display-font text-6xl md:text-7xl font-bold mb-6">
                  {item.value}
                </div>

                <div className="label-text opacity-70">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* Mission */}
      <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-10 bg-black text-white">
        <div className="noise"></div>
        <div className="vertical-lines absolute inset-0"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="label-text text-neutral-400 mb-5">
              Mission Statement
            </div>

            <h2 className="display-font text-5xl md:text-8xl leading-none font-bold uppercase mb-10">
              WHY
              <br />
              VOIDZERO
              <br />
              EXISTS
            </h2>
          </div>

          <div className="border-2 border-white p-10 md:p-16">
            <p className="text-xl md:text-2xl leading-relaxed text-neutral-200 mb-10 body-text">
              VoidZero was created to simplify affiliate marketing for beginners
              who feel overwhelmed by fake promises, misleading strategies and
              complicated systems.
            </p>

            <p className="text-xl md:text-2xl leading-relaxed text-neutral-300 mb-10 body-text">
              The goal is to teach ethical CPA marketing methods using organic
              traffic, Telegram communities and scalable funnel systems that can
              be understood even by complete beginners.
            </p>

            <p className="text-xl md:text-2xl leading-relaxed text-neutral-400 body-text">
              Instead of shortcuts and unrealistic hype, the focus remains on
              consistency, community support and sustainable online income
              strategies.
            </p>
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* Timeline */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end flex-wrap gap-8 mb-20">
            <div>
              <div className="label-text text-neutral-600 mb-5">
                Journey Timeline
              </div>

              <h2 className="display-font text-5xl md:text-8xl leading-none font-bold uppercase">
                THE
                <br />
                JOURNEY
              </h2>
            </div>
          </div>

          <div className="border-l-4 border-black ml-4 md:ml-10">
            {timeline.map((item, index) => (
              <div key={item.year} className="relative pl-10 md:pl-16 pb-20 last:pb-0">
                <div className="absolute -left-[18px] top-2 w-8 h-8 bg-black" />

                <div className="label-text text-neutral-600 mb-4 text-black">{item.year}</div>

                <h3 className="display-font text-4xl md:text-5xl font-bold mb-6 leading-none text-black">
                  {item.title}
                </h3>

                <p className="text-xl leading-relaxed text-neutral-700 max-w-3xl body-text">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* Transformations */}
      <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-10 bg-black text-white">
        <div className="vertical-lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-end flex-wrap gap-8 mb-16">
            <div>
              <div className="label-text text-neutral-400 mb-5">
                Student Impact
              </div>

              <h2 className="display-font text-5xl md:text-8xl leading-none font-bold uppercase">
                REAL
                <br />
                TRANSFORMATIONS
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border-2 border-white">
            {impactStories.map((item) => (
              <div
                key={item.before}
                className="border border-white p-10 min-h-[320px] flex flex-col justify-between card-hover"
              >
                <div>
                  <div className="label-text text-neutral-500 mb-5">Before</div>

                  <div className="display-font text-3xl font-bold leading-tight mb-10">
                    {item.before}
                  </div>

                  <div className="label-text text-neutral-500 mb-5">After</div>

                  <div className="display-font text-4xl font-bold leading-tight">
                    {item.after}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* Trust & CTA */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="label-text text-neutral-600 mb-5">
              Why Trust Us
            </div>

            <h2 className="display-font text-5xl md:text-8xl leading-none font-bold uppercase text-black">
              TRUST &amp;
              <br />
              PROOF
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-black mb-20">
            {trustBadges.map((item) => (
              <div
                key={item}
                className="border border-black min-h-[220px] flex items-center justify-center text-center p-8 card-hover text-black"
              >
                <div>
                  <div className="text-5xl mb-6 font-bold">+</div>

                  <div className="display-font text-3xl font-bold leading-tight">
                    {item}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-4 border-black p-10 md:p-16 text-center">
            <div className="label-text text-neutral-600 mb-6">
              Final CTA
            </div>

            <h2 className="display-font text-5xl md:text-[8rem] leading-[0.85] tracking-[-0.06em] font-bold uppercase mb-10 text-black">
              JOIN THE
              <br />
              COMMUNITY
            </h2>

            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-neutral-700 mb-14 body-text">
              Connect with thousands of aspiring affiliate marketers learning
              ethical CPA systems and scalable traffic strategies.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link
                href="/webinar"
                className="btn-primary px-12 py-6 text-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
                style={{ backgroundColor: "#000", color: "#fff", borderColor: "#000" }}
              >
                Join Free Webinar →
              </Link>

              <Link
                href="/consultation"
                className="btn-secondary px-12 py-6 text-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
                style={{ backgroundColor: "#000", color: "#fff", borderColor: "#000" }}
              >
                Book Consultation →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}