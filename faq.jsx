import { useMemo, useState } from 'react';

export default function VoidZeroFAQPage() {
  const [activeCategory, setActiveCategory] = useState('General');
  const [search, setSearch] = useState('');

  const categories = [
    'General',
    'Payment & Pricing',
    'Support & Access',
    'Technical',
  ];

  const faqs = [
    {
      category: 'General',
      question: 'What is CPA affiliate marketing?',
      answer:
        'CPA (Cost Per Action) affiliate marketing is a business model where you earn commissions whenever users complete actions like app installs, registrations or signups.',
    },
    {
      category: 'General',
      question: 'Can complete beginners join?',
      answer:
        'Yes. The mentorship and webinar systems are designed specifically for beginners with no prior experience.',
    },
    {
      category: 'General',
      question: 'Do I need paid ads to start?',
      answer:
        'No. VoidZero focuses heavily on organic traffic systems including Instagram, Telegram and content funnels.',
    },
    {
      category: 'General',
      question: 'How much can someone realistically earn?',
      answer:
        'Results vary depending on consistency, effort and execution. There are no guaranteed earnings promises.',
    },
    {
      category: 'Payment & Pricing',
      question: 'What payment methods are accepted?',
      answer:
        'Payments are processed securely through Razorpay with support for UPI, debit cards, credit cards and net banking.',
    },
    {
      category: 'Payment & Pricing',
      question: 'Is there a refund policy?',
      answer:
        'Refund requests are reviewed individually depending on usage history, access logs and support interaction.',
    },
    {
      category: 'Payment & Pricing',
      question: 'Do I get lifetime access?',
      answer:
        'Recorded course materials include lifetime access unless otherwise mentioned on the specific plan.',
    },
    {
      category: 'Payment & Pricing',
      question: 'Can I upgrade my plan later?',
      answer:
        'Yes. Students can upgrade from Basic to Premium or Elite programs later.',
    },
    {
      category: 'Support & Access',
      question: 'Will I get Telegram access?',
      answer:
        'Yes. Telegram community access is included in eligible mentorship plans.',
    },
    {
      category: 'Support & Access',
      question: 'How do live mentorship sessions work?',
      answer:
        'Premium and Elite students receive scheduled live sessions, Q&A calls and community discussions.',
    },
    {
      category: 'Support & Access',
      question: 'How long does support take?',
      answer:
        'Most support requests are answered within standard support hours depending on volume.',
    },
    {
      category: 'Support & Access',
      question: 'Will I receive webinar replays?',
      answer:
        'Yes. Registered attendees usually receive replay access for a limited time.',
    },
    {
      category: 'Technical',
      question: 'Do I need a laptop to start?',
      answer:
        'No. Many systems can be started using only a smartphone and internet connection.',
    },
    {
      category: 'Technical',
      question: 'What tools or software are required?',
      answer:
        'Most beginner systems require only free tools, social media platforms and simple landing page builders.',
    },
    {
      category: 'Technical',
      question: 'Is technical experience required?',
      answer:
        'No coding or advanced technical knowledge is required to start learning the systems.',
    },
  ];

  const filteredFaqs = useMemo(() => {
    return faqs.filter(
      (faq) =>
        faq.category === activeCategory &&
        faq.question.toLowerCase().includes(search.toLowerCase())
    );
  }, [activeCategory, search]);

  return (
    <div
      className="min-h-screen bg-black text-white overflow-hidden"
      style={{ fontFamily: 'Georgia, serif' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&display=swap');

        * {
          border-radius: 0 !important;
          box-sizing: border-box;
        }

        .display-font {
          font-family: 'Playfair Display', serif;
        }

        .vertical-lines {
          background-image: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 1px,
            rgba(255,255,255,0.05) 1px,
            rgba(255,255,255,0.05) 2px
          );
          background-size: 4px 100%;
        }

        .section-rule {
          width: 100%;
          height: 4px;
          background: white;
        }

        .glass {
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(14px);
        }
      `}</style>

      <section className="relative overflow-hidden border-b-4 border-white">
        <div className="vertical-lines absolute inset-0" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32 relative z-10">
          <div className="flex justify-between border-b border-white pb-6 mb-16 uppercase tracking-[0.3em] text-xs">
            <div className="font-bold">VoidZero FAQ</div>
            <div>Support Center</div>
          </div>

          <div className="grid lg:grid-cols-12 gap-14 items-end">
            <div className="lg:col-span-8">
              <div className="uppercase tracking-[0.3em] text-sm mb-6 text-neutral-400">
                Frequently Asked Questions
              </div>

              <h1 className="display-font text-[4.5rem] md:text-[9rem] leading-[0.82] tracking-[-0.06em] font-bold uppercase mb-10">
                COMMON
                <br />
                QUESTIONS
              </h1>

              <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-neutral-300">
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
              className="w-full bg-transparent border-b-2 border-white px-2 py-5 outline-none text-xl placeholder:text-neutral-500"
            />
          </div>
        </div>
      </section>

      <div className="section-rule" />

      <section className="bg-white text-black py-12 px-6 md:px-10 sticky top-0 z-30 border-b-4 border-black">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-4 border-2 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-100 ${
                activeCategory === category
                  ? 'bg-black text-white border-black'
                  : 'border-black hover:bg-black hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-10">
        <div className="vertical-lines absolute inset-0" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="border border-white">
            {filteredFaqs.map((faq, index) => (
              <details
                key={index}
                className="border-b border-white group"
              >
                <summary className="list-none cursor-pointer p-8 flex justify-between items-center uppercase tracking-[0.12em] text-sm font-bold hover:bg-white hover:text-black transition-all duration-100">
                  {faq.question}

                  <span className="text-xl transition-transform duration-100 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="px-8 pb-8 text-lg leading-relaxed text-neutral-300">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule" />

      <section className="bg-white text-black py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto border-4 border-black p-10 md:p-16 text-center">
          <div className="uppercase tracking-[0.3em] text-sm mb-6 text-neutral-500">
            Still Have Questions?
          </div>

          <h2 className="display-font text-5xl md:text-[8rem] leading-[0.85] tracking-[-0.06em] font-bold uppercase mb-10">
            LET'S
            <br />
            TALK
          </h2>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-neutral-700 mb-14">
            Reach out directly through Telegram or WhatsApp for support,
            mentorship inquiries or webinar assistance.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-black text-white border-2 border-black px-12 py-6 uppercase tracking-[0.25em] text-sm font-bold hover:bg-white hover:text-black transition-all duration-100">
              Contact WhatsApp
            </button>

            <button className="border-2 border-black px-12 py-6 uppercase tracking-[0.25em] text-sm font-bold hover:bg-black hover:text-white transition-all duration-100">
              Join Telegram
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}