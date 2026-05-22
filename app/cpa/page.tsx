import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is CPA? — VoidZero CPA",
  description:
    "Discover what CPA affiliate marketing is, how it works, and which CPA networks you can join to start earning.",
  alternates: { canonical: "https://cpahustler.com/cpa" },
  openGraph: {
    title: "What is CPA? — VoidZero CPA",
    description:
      "Discover what CPA affiliate marketing is, how it works, and which CPA networks you can join to start earning.",
    type: "website",
    url: "https://cpahustler.com/cpa",
  },
};

export default function CPAPage() {
  const networks = [
    {
      name: "OGAds",
      desc: "High-converting offers with reliable payouts since 2011.",
    },
    {
      name: "AdBlueMedia",
      desc: "Global offers spanning dating, finance, and gaming verticals.",
    },
    {
      name: "CPAGrip",
      desc: "Content locking and lead generation offers with fast approval.",
    },
    {
      name: "CPALead",
      desc: "Email submit and sweepstakes offers with strong payouts.",
    },
  ];

  const benefits = [
    {
      title: "No Product Needed",
      body: "You don't manufacture, store, or ship anything. You just drive traffic to offers and earn commissions on completed actions.",
    },
    {
      title: "Low Barrier to Entry",
      body: "All you need is a device, internet connection, and the willingness to learn. No prior experience required.",
    },
    {
      title: "Scalable Income",
      body: "Unlike a 9-to-5, your earnings scale with your traffic. The more quality traffic you drive, the more you earn.",
    },
    {
      title: "Global Reach",
      body: "CPA offers run in virtually every country. You can target GEOs with the best payouts and lowest competition.",
    },
    {
      title: "Performance Transparency",
      body: "Track every click, conversion, and earning in real time. You see exactly what's working and what's not.",
    },
    {
      title: "Multiple Income Streams",
      body: "Once you understand the model, you can run multiple campaigns across different GEOs, verticals, and offers simultaneously.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative border-b-4 border-black overflow-hidden py-20 md:py-32">
        <div className="noise"></div>
        <div className="lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="label-text text-neutral-600 mb-6">
            Introduction
          </div>

          <h1 className="display-font text-6xl md:text-9xl font-bold leading-none tracking-tight mb-8">
            WHAT
            <br />
            IS CPA?
          </h1>

          <div className="max-w-3xl">
            <div className="border-l-4 border-black pl-8 text-lg md:text-xl leading-relaxed text-neutral-700 mb-10 body-text">
              CPA (Cost Per Action) affiliate marketing is a performance-based
              business model where you earn a commission every time a visitor
              completes a specific action — a signup, app install, form
              submission, or purchase.
            </div>

            <p className="text-base text-neutral-600 leading-relaxed mb-6 body-text">
              Unlike traditional e-commerce, you don&apos;t need to create a product,
              manage inventory, or handle customer support. Your job is to drive
              targeted traffic to CPA offers and let the networks handle the rest.
            </p>

            <p className="text-base text-neutral-600 leading-relaxed body-text">
              The action is defined by the advertiser. You earn when the action
              is completed. Simple, transparent, and scalable.
            </p>
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* How It Works */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="label-text text-neutral-600 mb-6">
            The Model
          </div>

          <h2 className="display-font text-5xl md:text-7xl font-bold leading-none tracking-tight mb-16">
            HOW IT
            <br />
            WORKS
          </h2>

          <div className="grid md:grid-cols-4 gap-0 border-2 border-black">
            {[
              {
                step: "01",
                title: "Join a CPA Network",
                body: "Sign up to a CPA network like OGAds, CPAGrip, or AdBlueMedia to access thousands of offers.",
              },
              {
                step: "02",
                title: "Choose an Offer",
                body: "Pick offers that match your audience's GEO, interests, and the traffic source you're using.",
              },
              {
                step: "03",
                title: "Drive Traffic",
                body: "Use organic methods like Instagram Reels, Telegram, content locking, or paid arbitrage to send visitors to the offer.",
              },
              {
                step: "04",
                title: "Earn Commissions",
                body: "Get paid for every completed action. Track your earnings in real time through the network dashboard.",
              },
            ].map(({ step, title, body }) => (
              <div
                key={step}
                className="border-r border-black last:border-r-0 p-8 hover:bg-black hover:text-white transition-all duration-100"
              >
                <div className="display-font text-5xl font-bold mb-6 opacity-30">
                  {step}
                </div>
                <h3 className="display-font text-2xl font-bold mb-4">{title}</h3>
                <p className="text-sm leading-relaxed opacity-70 body-text">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* Benefits */}
      <section className="bg-black text-white py-24 md:py-32 px-6 md:px-10 relative overflow-hidden">
        <div className="vertical-lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="label-text text-neutral-400 mb-6">
            Why CPA?
          </div>

          <h2 className="display-font text-5xl md:text-8xl font-bold leading-none tracking-tight mb-16">
            WHY CHOOSE
            <br />
            CPA?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map(({ title, body }) => (
              <div key={title} className="border-2 border-white p-8 card-hover">
                <div className="label-text text-neutral-400 mb-4">Benefit</div>
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

      {/* CPA Networks */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="label-text text-neutral-600 mb-6">
            Partners
          </div>

          <h2 className="display-font text-5xl md:text-7xl font-bold leading-none tracking-tight mb-16">
            CPA
            <br />
            NETWORKS
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-black">
            {networks.map(({ name, desc }) => (
              <div key={name} className="border-r border-b border-black last:border-r-0 md:last:border-r-0 p-8 card-hover">
                <div className="label-text font-bold mb-4">{name}</div>
                <p className="text-sm text-neutral-600 leading-relaxed body-text">
                  {desc}
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
              Ready to Start?
            </h2>
            <p className="text-neutral-600 body-text">
              Join the free webinar and learn how to build your first CPA funnel.
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