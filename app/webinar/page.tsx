import type { Metadata } from "next";
import Link from "next/link";
import WebinarForm from "./components/WebinarForm";

export const metadata: Metadata = {
  title: "Free CPA Webinar — VoidZero",
  description:
    "Join the free VoidZero CPA webinar and learn how to build organic funnels, drive traffic, and earn with ethical CPA affiliate marketing.",
  alternates: { canonical: "https://cpahustler.com/webinar" },
  openGraph: {
    title: "Free CPA Webinar — VoidZero",
    description:
      "Join the free VoidZero CPA webinar and learn how to build organic funnels, drive traffic, and earn with ethical CPA affiliate marketing.",
    type: "website",
    url: "https://cpahustler.com/webinar",
  },
};

const webinarTopics = [
  {
    title: "CPA Marketing 101",
    body: "What it is, how the model works, and why it&apos;s one of the most accessible online income paths today.",
  },
  {
    title: "Organic Traffic Blueprint",
    body: "How to drive free, targeted traffic without paid ads using Instagram, Telegram, and content strategies.",
  },
  {
    title: "Funnel Building Basics",
    body: "The structure of a CPA funnel, what a landing page needs, and how to connect it to CPA offers.",
  },
  {
    title: "The VoidZero Method",
    body: "A walkthrough of the exact system Mr. Void uses with students — from first campaign to consistent commissions.",
  },
  {
    title: "Monetization Systems",
    body: "How to set up multiple income streams using CPA offers, email lists, and content locking.",
  },
  {
    title: "Scaling Roadmap",
    body: "How to take a winning campaign, clone it across GEOs, and scale without breaking the bank.",
  },
];

const testimonials = [
  {
    quote:
      "Joined the free webinar on a whim and immediately knew this was different. No hype, just real systems. Enrolled the same week.",
    name: "Arjun M.",
    location: "Mumbai, India",
  },
  {
    quote:
      "The free training alone was more valuable than courses I paid 10x more for. Mr. Void doesn't hold back.",
    name: "Priya S.",
    location: "Bangalore, India",
  },
  {
    quote:
      "Took me 3 weeks from the webinar to my first CPA commission. The live classes sealed it for me.",
    name: "Rahul K.",
    location: "Delhi, India",
  },
];

export default function WebinarPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b-4 border-black overflow-hidden py-20 md:py-32">
        <div className="noise"></div>
        <div className="lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="label-text text-neutral-600 mb-6">
            Free Training
          </div>

          <h1 className="display-font text-6xl md:text-9xl font-bold leading-none tracking-tight mb-8">
            FREE
            <br />
            WEBINAR
          </h1>

          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl text-neutral-700 mb-10 body-text">
            Learn to build organic CPA funnels, drive free traffic, and generate
            commissions — all in one free session with Mr. Void.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#register"
              className="btn-primary px-10 py-5 text-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
            >
              Register Free →
            </a>

            <Link
              href="/pricing"
              className="btn-secondary px-10 py-5 text-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
            >
              View Pricing →
            </Link>
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* What You'll Learn */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="label-text text-neutral-600 mb-6">
            What You&apos;ll Learn
          </div>

          <h2 className="display-font text-5xl md:text-7xl font-bold leading-none tracking-tight mb-16">
            SESSION
            <br />
            BREAKDOWN
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-black">
            {webinarTopics.map(({ title, body }) => (
              <div
                key={title}
                className="border-r border-b border-black last:border-r-0 md:last:border-r-0 p-10 hover:bg-black hover:text-white transition-all duration-100"
              >
                <div className="label-text text-neutral-500 mb-4">Topic</div>
                <h3 className="display-font text-2xl font-bold mb-4">{title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed group-hover:text-neutral-300 body-text">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* Testimonials */}
      <section className="bg-black text-white py-24 md:py-32 px-6 md:px-10 relative overflow-hidden">
        <div className="vertical-lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="label-text text-neutral-400 mb-6">
            From Students
          </div>

          <h2 className="display-font text-5xl md:text-7xl font-bold leading-none tracking-tight mb-16">
            WHAT
            <br />
            THEY SAY
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(({ quote, name, location }) => (
              <div
                key={name}
                className="border-2 border-white p-10 testimonial-card"
              >
                <div className="label-text text-neutral-400 mb-8 text-white">Review</div>

                <blockquote className="display-font text-xl md:text-2xl font-bold leading-tight mb-8 italic text-white">
                  &ldquo;{quote}&rdquo;
                </blockquote>

                <div className="border-t border-white pt-6">
                  <div className="label-text font-bold text-white">
                    {name}
                  </div>
                  <div className="label-text text-neutral-400 mt-1 text-white">
                    {location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* Registration Form */}
      <section id="register" className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="label-text text-neutral-600 mb-6">
              Register
            </div>

            <h2 className="display-font text-5xl md:text-7xl font-bold leading-none tracking-tight mb-8">
              JOIN THE
              <br />
              FREE
              <br />
              SESSION
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
              <p className="body-text">
                No payment required. Just your name, email, and a willingness to
                learn. The webinar is completely free — what you do after is up
                to you.
              </p>

              <div className="border-2 border-black p-8">
                <div className="label-text text-neutral-500 mb-4">
                  Webinar Details
                </div>

                <div className="space-y-4 text-sm body-text">
                  {[
                    ["Format", "Live Online Session"],
                    ["Duration", "90 Minutes + Q&A"],
                    ["Cost", "Completely Free"],
                    ["Host", "Mr. Void"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex gap-4">
                      <span className="label-text shrink-0 w-24">{label}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <WebinarForm />
        </div>
      </section>

      <div className="section-rule"></div>

      {/* Bottom CTA */}
      <section className="py-20 px-6 md:px-10 bg-neutral-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="display-font text-4xl md:text-5xl font-bold leading-none mb-3 text-black">
              Want to skip the webinar?
            </h2>
            <p className="text-neutral-600 body-text text-neutral-600">
              Jump straight to the paid plans and get full access immediately.
            </p>
          </div>

          <Link
            href="/pricing"
            className="btn-secondary px-10 py-5 text-sm shrink-0 focus-visible:outline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-3"
            style={{ backgroundColor: "black", color: "white", borderColor: "black" }}
          >
            View Pricing →
          </Link>
        </div>
      </section>
    </>
  );
}