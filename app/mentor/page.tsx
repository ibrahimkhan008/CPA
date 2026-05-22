import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Mr. Void — VoidZero CPA",
  description:
    "Meet Mr. Void, founder of VoidZero CPA. Learn about his background, results, and approach to ethical CPA affiliate marketing.",
  alternates: { canonical: "https://cpahustler.com/mentor" },
  openGraph: {
    title: "About Mr. Void — VoidZero CPA",
    description:
      "Meet Mr. Void, founder of VoidZero CPA. Learn about his background, results, and approach to ethical CPA affiliate marketing.",
    type: "website",
    url: "https://cpahustler.com/mentor",
  },
};

const highlights = [
  { value: "5+", label: "Years Experience" },
  { value: "$50K+", label: "Earnings Generated" },
  { value: "1000+", label: "Students Trained" },
  { value: "Global", label: "International Reach" },
];

const values = [
  {
    title: "Ethical Systems",
    body: "All methods taught are whitehat and sustainable. No fake clicks, no bots — just real traffic and real conversions.",
  },
  {
    title: "Long-Term Growth",
    body: "The goal is not a quick win. Mr. Void focuses on building systems that generate consistent, compounding income over time.",
  },
  {
    title: "Practical First",
    body: "Every concept is taught with real campaign walkthroughs. You see exactly how campaigns are built, not just the theory.",
  },
  {
    title: "Community-First",
    body: "Students have access to a private community where they can ask questions, share wins, and get direct feedback.",
  },
];

export default function MentorPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b-4 border-black overflow-hidden py-20 md:py-32">
        <div className="noise"></div>
        <div className="lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-end">
            <div className="lg:col-span-7">
              <div className="label-text text-neutral-600 mb-6">Mentor</div>

              <h1 className="display-font text-6xl md:text-9xl font-bold leading-none tracking-tight mb-8">
                MR.
                <br />
                VOID
              </h1>

              <p className="text-xl md:text-2xl leading-relaxed text-neutral-700 max-w-2xl body-text">
                Teaching ethical CPA affiliate marketing systems focused on
                long-term sustainable growth. Helping students and freelancers
                generate online income using free traffic methods, landing
                pages, and monetization funnels.
              </p>
            </div>

            <div className="lg:col-span-5 border-2 border-black p-10 grid-pattern">
              <div className="label-text text-neutral-600 mb-6">
                By the Numbers
              </div>

              <div className="space-y-10">
                {highlights.map(({ value, label }) => (
                  <div key={label}>
                    <div className="display-font text-7xl font-bold leading-none">
                      {value}
                    </div>
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

      {/* Story */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="label-text text-neutral-600 mb-6">Background</div>

          <h2 className="display-font text-5xl md:text-7xl font-bold leading-none tracking-tight mb-16">
            THE
            <br />
            STORY
          </h2>

          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-neutral-700">
              <p className="body-text">
                Mr. Void started exploring digital marketing in his early days,
                running his first campaigns with zero budget and a lot of trial
                and error. The methods that worked best were always the ones
                that created genuine value — organic traffic, useful content,
                and smart funnel design.
              </p>

              <p className="body-text">
                After years of refining his approach and consistently generating
                results, he built VoidZero CPA to share what actually works. Not
                the hype, not the shortcuts — just a structured, repeatable system
                for building CPA income ethically.
              </p>

              <p className="body-text">
                Today, Mr. Void has trained over 1,000 students across multiple
                countries, generating over $50K in combined revenue for his
                community. The focus remains the same: teach systems, not
                secrets.
              </p>

              <p className="body-text">
                The free webinar is the entry point — no sales pressure, just a
                real walkthrough of the model. From there, students choose their
                path based on how deep they want to go.
              </p>
            </div>

            <div className="lg:col-span-5 border-2 border-black p-10 h-fit">
              <div className="label-text text-neutral-600 mb-6">
                Core Teaching Areas
              </div>

              <div className="space-y-4">
                {[
                  "Organic Traffic Systems",
                  "Instagram & Telegram Growth",
                  "Landing Page Architecture",
                  "Whitehat Arbitrage",
                  "Campaign Scaling",
                  "CPA Funnel Building",
                  "Email List Monetization",
                  "Automation Workflows",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 text-base leading-relaxed border-b border-neutral-200 pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="font-bold">—</span>
                    <span className="body-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* Values */}
      <section className="bg-black text-white py-24 md:py-32 px-6 md:px-10 relative overflow-hidden">
        <div className="vertical-lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="label-text text-neutral-400 mb-6">Values</div>

          <h2 className="display-font text-5xl md:text-7xl font-bold leading-none tracking-tight mb-16">
            HOW MR. VOID
            <br />
            TEACHES
          </h2>

          <div className="grid md:grid-cols-2 gap-0 border-2 border-white">
            {values.map(({ title, body }) => (
              <div
                key={title}
                className="border-r border-b border-white last:border-r-0 md:last:border-r-0 p-10 card-hover"
              >
                <h3 className="display-font text-3xl font-bold mb-4">{title}</h3>
                <p className="text-neutral-300 leading-relaxed body-text">
                  {body}
                </p>
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
            <h2 className="display-font text-4xl md:text-5xl font-bold leading-none mb-3">
              Learn from Mr. Void
            </h2>
            <p className="text-neutral-600 body-text">
              Join the free webinar to get a real look at the system.
            </p>
          </div>

          <Link
            href="/webinar"
            className="btn-primary px-10 py-5 text-sm shrink-0 focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
          >
            Join Free Webinar →
          </Link>
        </div>
      </section>
    </>
  );
}