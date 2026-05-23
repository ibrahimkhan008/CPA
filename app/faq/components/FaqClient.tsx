"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const categories = [
  "General",
  "Payment & Pricing",
  "Support & Access",
  "Technical",
];

const faqs = [
  {
    category: "General",
    question: "What is CPA affiliate marketing?",
    answer:
      "CPA (Cost Per Action) affiliate marketing is a business model where you earn commissions whenever users complete actions like app installs, registrations or signups.",
  },
  {
    category: "General",
    question: "Can complete beginners join?",
    answer:
      "Yes. The mentorship and webinar systems are designed specifically for beginners with no prior experience.",
  },
  {
    category: "General",
    question: "Do I need paid ads to start?",
    answer:
      "No. VoidZero focuses heavily on organic traffic systems including Instagram, Telegram and content funnels.",
  },
  {
    category: "General",
    question: "How much can someone realistically earn?",
    answer:
      "Results vary depending on consistency, effort and execution. There are no guaranteed earnings promises.",
  },
  {
    category: "Payment & Pricing",
    question: "What payment methods are accepted?",
    answer:
      "Payments are processed securely through Razorpay with support for UPI, debit cards, credit cards and net banking.",
  },
  {
    category: "Payment & Pricing",
    question: "Is there a refund policy?",
    answer:
      "Refund requests are reviewed individually depending on usage history, access logs and support interaction.",
  },
  {
    category: "Payment & Pricing",
    question: "Do I get lifetime access?",
    answer:
      "Recorded course materials include lifetime access unless otherwise mentioned on the specific plan.",
  },
  {
    category: "Payment & Pricing",
    question: "Can I upgrade my plan later?",
    answer:
      "Yes. Students can upgrade from Basic to Premium or Elite programs later.",
  },
  {
    category: "Support & Access",
    question: "Will I get Telegram access?",
    answer:
      "Yes. Telegram community access is included in eligible mentorship plans.",
  },
  {
    category: "Support & Access",
    question: "How do live mentorship sessions work?",
    answer:
      "Premium and Elite students receive scheduled live sessions, Q&A calls and community discussions.",
  },
  {
    category: "Support & Access",
    question: "How long does support take?",
    answer:
      "Most support requests are answered within standard support hours depending on volume.",
  },
  {
    category: "Support & Access",
    question: "Will I receive webinar replays?",
    answer:
      "Yes. Registered attendees usually receive replay access for a limited time.",
  },
  {
    category: "Technical",
    question: "Do I need a laptop to start?",
    answer:
      "No. Many systems can be started using only a smartphone and internet connection.",
  },
  {
    category: "Technical",
    question: "What tools or software are required?",
    answer:
      "Most beginner systems require only free tools, social media platforms and simple landing page builders.",
  },
  {
    category: "Technical",
    question: "Is technical experience required?",
    answer:
      "No coding or advanced technical knowledge is required to start learning the systems.",
  },
];

export function FaqClient() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [search, setSearch] = useState("");

  const filteredFaqs = useMemo(() => {
    const searchLower = search.toLowerCase();
    if (searchLower) {
      return faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchLower) ||
          faq.answer.toLowerCase().includes(searchLower)
      );
    }
    return faqs.filter((faq) => faq.category === activeCategory);
  }, [activeCategory, search]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b-4 border-white">
        <div className="vertical-lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32 relative z-10">
          <div className="flex justify-between border-b border-white pb-6 mb-16 items-center">
            <Link
              href="/"
              className="label-text font-bold hover:underline text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              VoidZero
            </Link>
            <div className="label-text text-neutral-400">Support Center</div>
          </div>

          <div className="grid lg:grid-cols-12 gap-14 items-end">
            <div className="lg:col-span-8">
              <div className="label-text text-neutral-400 mb-6">
                Frequently Asked Questions
              </div>

              <h1 className="display-font text-[4.5rem] md:text-[9rem] leading-[0.82] tracking-[-0.06em] font-bold uppercase mb-10">
                COMMON
                <br />
                QUESTIONS
              </h1>

              <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-neutral-300 body-text">
                Everything you need to know about CPA affiliate marketing,
                mentorship access, webinar registration and premium programs.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions..."
              className="w-full bg-transparent border-b-2 border-white px-2 py-5 outline-none text-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-white"
            />
          </div>
        </div>
      </section>

      <div className="h-1 bg-white"></div>

      {/* Category filter */}
      <section className="bg-white text-black py-4 px-6 md:px-10 border-b-4 border-black">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 border-2 border-black label-text font-bold transition-all duration-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-2 ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <div className="h-1 bg-white"></div>

      {/* FAQ accordion */}
      <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-10 bg-black">
        <div className="vertical-lines absolute inset-0"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="border border-white">
            {filteredFaqs.length === 0 ? (
              <div className="p-12 text-center text-neutral-400 label-text">
                No questions match your search.
              </div>
            ) : (
              filteredFaqs.map((faq) => (
                <details
                  key={faq.question}
                  className="border-b border-white last:border-b-0 group"
                >
                  <summary className="list-none cursor-pointer p-8 flex justify-between items-center label-text font-bold hover:bg-white hover:text-black transition-all duration-100">
                    <span>{faq.question}</span>
                    <span className="text-xl transition-transform duration-100 group-open:rotate-45 shrink-0 ml-4">
                      +
                    </span>
                  </summary>

                  <div className="px-8 pb-8 text-lg leading-relaxed text-neutral-300 body-text">
                    {faq.answer}
                  </div>
                </details>
              ))
            )}
          </div>
        </div>
      </section>

      <div className="h-1 bg-white"></div>

      {/* CTA */}
      <section className="bg-white text-black py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto border-4 border-black p-10 md:p-16 text-center">
          <div className="label-text text-neutral-600 mb-6">
            Still Have Questions?
          </div>

          <h2 className="display-font text-5xl md:text-[8rem] leading-[0.85] tracking-[-0.06em] font-bold uppercase mb-10">
            LET&apos;S
            <br />
            TALK
          </h2>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-neutral-700 body-text mb-14">
            Reach out directly through Telegram or WhatsApp for support,
            mentorship inquiries or webinar assistance.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link
              href="https://wa.me/919098786335"
              className="btn-primary px-12 py-6 text-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
              style={{ backgroundColor: "#000", color: "#fff", borderColor: "#000" }}
            >
              Contact WhatsApp →
            </Link>

            <Link
              href="https://t.me/cpahustler"
              className="btn-secondary px-12 py-6 text-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
              style={{ backgroundColor: "#000", color: "#fff", borderColor: "#000" }}
            >
              Join Telegram →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}