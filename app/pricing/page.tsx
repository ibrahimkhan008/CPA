import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — VoidZero CPA",
  description:
    "Choose your VoidZero CPA plan. From 45-day access to 1-year elite mentorship — find the right path for you.",
  alternates: { canonical: "https://cpahustler.com/pricing" },
  openGraph: {
    title: "Pricing — VoidZero CPA",
    description:
      "Choose your VoidZero CPA plan. From 45-day access to 1-year elite mentorship — find the right path for you.",
    type: "website",
    url: "https://cpahustler.com/pricing",
  },
};

const plans = [
  {
    name: "Basic to Advanced CPA Marketing",
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
    featured: false,
  },
  {
    name: "3 Months Premium Access",
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
    featured: false,
  },
];

const faqs = [
  {
    q: "Is this beginner-friendly?",
    a: "Yes. The 45-day plan is designed for complete beginners. You'll go from zero to understanding how CPA funnels work end-to-end.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI, bank transfer, and major credit/debit cards. Payment links are sent after enrollment.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely. You can upgrade at any time. The difference in price is all you pay.",
  },
  {
    q: "Are live classes recorded?",
    a: "Yes. Every live class is recorded and made available within 24 hours so you never miss content.",
  },
  {
    q: "Do you offer refunds?",
    a: "Due to the digital nature of the course, we do not offer refunds after accessing the materials. Please read the full outline before enrolling.",
  },
  {
    q: "Is there a free trial?",
    a: "Join our free webinar to get a complete overview of the program before you decide. No obligation.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b-4 border-black overflow-hidden py-20 md:py-32">
        <div className="noise"></div>
        <div className="lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="label-text text-neutral-600 mb-6">Plans</div>

          <h1 className="display-font text-6xl md:text-9xl font-bold leading-none tracking-tight mb-8">
            CHOOSE
            <br />
            YOUR PATH
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl text-neutral-700 leading-relaxed body-text">
            Learn CPA Affiliate Marketing from beginner to advanced with live
            classes, mentorship, and scalable systems. Pick the plan that fits
            your goals.
          </p>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* Pricing Cards */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => (
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

                <div className="label-text mb-5 opacity-70">
                  {plan.duration}
                </div>

                <h3 className="display-font text-3xl leading-tight font-bold mb-6">
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
                    <div key={feature} className="flex gap-4 text-base leading-relaxed">
                      <span>+</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-5 text-sm font-bold border-2 transition-all duration-100 ${plan.featured ? "bg-white text-black border-white hover:bg-black hover:text-white group-hover:bg-black group-hover:text-white" : "bg-black text-white border-black hover:bg-neutral-800"} focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-2`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* FAQs */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="label-text text-neutral-600 mb-6">
            Common Questions
          </div>

          <h2 className="display-font text-5xl md:text-7xl font-bold leading-none tracking-tight mb-16">
            FAQ
          </h2>

          <div className="grid md:grid-cols-2 gap-0 border-2 border-black">
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className="border-r border-b border-black last:border-r-0 md:last:border-r-0 p-8 card-hover"
              >
                <h3 className="display-font text-xl font-bold mb-4">{q}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed body-text">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* CTA */}
      <section className="bg-black text-white py-20 px-6 md:px-10 relative overflow-hidden">
        <div className="noise"></div>
        <div className="vertical-lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="display-font text-4xl md:text-5xl font-bold leading-none mb-4">
              Still not sure?
            </h2>
            <p className="text-neutral-300 body-text">
              Join the free webinar first — no commitment, no sales pressure.
            </p>
          </div>

          <Link
            href="/webinar"
            className="btn-primary px-10 py-5 text-sm shrink-0 focus-visible:outline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-3"
          >
            Join Free Webinar →
          </Link>

          <Link
            href="/consultation"
            className="btn-secondary px-10 py-5 text-sm shrink-0 border-white text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-3"
          >
            1-on-1 Consultation →
          </Link>
        </div>
      </section>
    </>
  );
}