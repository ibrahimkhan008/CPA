import type { Metadata } from "next";
import Link from "next/link";
import ConsultationFormLoader from "../components/ConsultationFormLoader";

export const metadata: Metadata = {
  title: "1-on-1 CPA Consultation — VoidZero",
  description:
    "Book a 1-on-1 CPA mentorship session with Mr. Void. ₹149 per session — beginner guidance, funnel review, traffic strategy, and WhatsApp support.",
};

const benefits = [
  {
    title: "CPA Setup Guidance",
    description:
      "Step-by-step beginner roadmap for launching CPA systems.",
  },
  {
    title: "Offer Selection",
    description:
      "Learn how to choose profitable and scalable CPA offers.",
  },
  {
    title: "Landing Page Review",
    description:
      "Get direct feedback on your funnel and conversion structure.",
  },
  {
    title: "Traffic Strategy",
    description:
      "Organic Instagram and Telegram growth systems.",
  },
  {
    title: "WhatsApp Support",
    description:
      "Private support access after your consultation session.",
  },
  {
    title: "Scaling Systems",
    description:
      "Understand monetization and long-term scaling frameworks.",
  },
];

export default function ConsultationPage() {
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
              Limited Slots Available
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-14 items-end">
            <div className="lg:col-span-8">
              <div className="label-text text-neutral-600 mb-6">
                1-on-1 CPA Mentorship Session
              </div>

              <h1 className="display-font text-[5rem] md:text-[10rem] leading-[0.82] tracking-[-0.06em] font-bold uppercase mb-10">
                ₹149
                <br />
                PER
                <br />
                SESSION
              </h1>

              <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-neutral-700 mb-12 body-text">
                Beginner-focused consultation designed to help you understand
                CPA funnels, organic traffic systems and monetization strategies.
              </p>

              <div className="flex flex-wrap gap-5">
                <a
                  href="#book"
                  className="btn-primary px-10 py-5 text-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
                >
                  Book Session →
                </a>

                <a
                  href="#benefits"
                  className="btn-secondary px-10 py-5 text-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
                >
                  View Benefits →
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 border-2 border-black p-8 grid-pattern">
              <div className="label-text text-neutral-600 mb-8">
                What&apos;s Included
              </div>

              <div className="space-y-5 text-lg text-neutral-700 body-text">
                {[
                  "Beginner CPA Guidance",
                  "Offer Suggestions",
                  "Funnel Review",
                  "WhatsApp Support",
                  "Scaling Strategy",
                  "Monetization Roadmap",
                ].map((item) => (
                  <div key={item}>+ {item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* Benefits */}
      <section
        id="benefits"
        className="py-24 md:py-32 px-6 md:px-10 bg-white text-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end flex-wrap gap-8 mb-16">
            <div>
              <div className="label-text text-neutral-600 mb-5">
                Benefits Grid
              </div>

              <h2 className="display-font text-5xl md:text-8xl leading-none font-bold">
                WHAT YOU
                <br />
                RECEIVE
              </h2>
            </div>

            <div className="max-w-xl text-lg leading-relaxed text-neutral-700 body-text">
              Personalized guidance focused on ethical CPA affiliate marketing,
              organic traffic and long-term growth systems.
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-black">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="border border-black p-8 min-h-[280px] flex flex-col justify-between card-hover"
              >
                <div className="w-14 h-14 border-2 border-black flex items-center justify-center text-2xl font-bold mb-10 self-start">
                  +
                </div>

                <div>
                  <h3 className="display-font text-3xl font-bold leading-tight mb-5">
                    {item.title}
                  </h3>

                  <p className="text-lg leading-relaxed text-neutral-700 body-text">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* Booking Form */}
      <section
        id="book"
        className="relative overflow-hidden py-24 md:py-32 px-6 md:px-10 bg-black text-white"
      >
        <div className="noise"></div>
        <div className="vertical-lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-14 relative z-10">
          <div className="lg:col-span-5">
            <div className="label-text text-neutral-400 mb-5">
              Booking Form
            </div>

            <h2 className="display-font text-5xl md:text-8xl leading-none font-bold mb-10">
              BOOK
              <br />
              YOUR
              <br />
              SESSION
            </h2>

            <p className="text-lg leading-relaxed text-neutral-300 max-w-md mb-10 body-text">
              Fill the consultation form and proceed securely through Razorpay
              checkout.
            </p>

            <div className="space-y-3">
              <div className="label-text text-neutral-500">UPI Secured</div>
              <div className="label-text text-neutral-500">
                Encrypted Checkout
              </div>
              <div className="label-text text-neutral-500">
                Verified Payment
              </div>
            </div>
          </div>

          <ConsultationFormLoader />
        </div>
      </section>

      <div className="section-rule"></div>

      {/* Payment Success Preview */}
      <section className="bg-neutral-50 py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto border-4 border-black p-10 md:p-16 relative overflow-hidden">
          <div className="noise"></div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-14 items-center">
            <div className="lg:col-span-7">
              <div className="label-text text-neutral-600 mb-5">
                After Payment
              </div>

              <h2 className="display-font text-5xl md:text-8xl leading-[0.9] font-bold mb-8">
                PAYMENT
                <br />
                SUCCESSFUL
              </h2>

              <p className="text-xl leading-relaxed text-neutral-700 body-text">
                After successful payment verification, users receive private
                community access and onboarding instructions instantly.
              </p>
            </div>

            <div className="lg:col-span-5 border-2 border-black p-8 bg-white">
              <div className="space-y-8 mb-10">
                {[
                  {
                    label: "Private Access",
                    value: "WhatsApp Mentorship Group Link",
                  },
                  {
                    label: "Premium Community",
                    value: "Telegram Premium Access Link",
                  },
                  {
                    label: "Next Steps",
                    value:
                      "Join the communities, review onboarding instructions and prepare for your session.",
                  },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="label-text text-neutral-500 mb-2">
                      {label}
                    </div>
                    <div className="text-lg leading-relaxed body-text">
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="w-full btn-primary py-5 text-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-2"
              >
                Join Community →
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* Bottom CTA */}
      <section className="py-16 px-6 md:px-10 bg-black text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="display-font text-3xl md:text-4xl font-bold leading-none mb-3">
              Not ready for a paid session?
            </h2>
            <p className="text-neutral-400 body-text">
              Start with the free webinar — no commitment required.
            </p>
          </div>

          <Link
            href="/webinar"
            className="btn-secondary px-10 py-5 text-sm shrink-0 focus-visible:outline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-3"
          >
            Join Free Webinar →
          </Link>
        </div>
      </section>
    </>
  );
}