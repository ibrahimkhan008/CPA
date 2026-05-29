export default function VoidZeroPlansPage() {
  const plans = [
    {
      name: 'Basic',
      price: '₹5,000',
      badge: 'Recorded Course Only',
      button: 'Get Instant Access',
      highlight: false,
      gold: false,
      features: [
        'Recorded CPA Course',
        'Beginner Funnel Training',
        'Telegram Community Access',
        'Basic Traffic Methods',
        'Lifetime Video Access',
      ],
    },
    {
      name: '3 Months Premium',
      price: '₹10,000',
      badge: 'Most Popular 🔥',
      button: 'Enroll Now',
      highlight: true,
      gold: false,
      features: [
        'Everything in Basic',
        '3 Months Mentorship',
        'Private WhatsApp Group',
        'Weekly Live Sessions',
        'Advanced CPA Systems',
        'Landing Page Reviews',
        'Priority Support',
      ],
    },
    {
      name: '1 Year Elite',
      price: '₹20,000',
      badge: 'Best Value 👑',
      button: 'Join Elite Program',
      highlight: false,
      gold: true,
      features: [
        'Everything in Premium',
        '1 Year Elite Access',
        'Direct Mentorship',
        'Advanced Scaling Systems',
        'Private Elite Community',
        'Priority Calls & Reviews',
        'Monetization Roadmaps',
        'Exclusive Strategies',
      ],
    },
  ];

  const comparisonFeatures = [
    ['Recorded Course', '✓', '✓', '✓'],
    ['Telegram Community', '✓', '✓', '✓'],
    ['WhatsApp Support', '✕', '✓', '✓'],
    ['Weekly Live Sessions', '✕', '✓', '✓'],
    ['Direct Mentorship', '✕', '✕', '✓'],
    ['Advanced Scaling Systems', '✕', '✓', '✓'],
    ['Priority Support', '✕', '✓', '✓'],
    ['Elite Community', '✕', '✕', '✓'],
  ];

  const testimonials = [
    'Generated my first CPA commissions within weeks.',
    'Finally understood organic traffic systems clearly.',
    'The mentorship and community changed everything.',
  ];

  const faqs = [
    {
      question: 'Do I get lifetime access?',
      answer: 'Yes. Recorded course access remains available permanently.',
    },
    {
      question: 'Is support included?',
      answer: 'Support depends on the selected plan level.',
    },
    {
      question: 'Can beginners join?',
      answer: 'Absolutely. All plans are beginner friendly.',
    },
    {
      question: 'Are refunds available?',
      answer: 'Refunds are reviewed depending on the situation and support history.',
    },
  ];

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
          backdrop-filter: blur(16px);
        }

        .card-hover {
          transition: all 150ms linear;
        }

        .card-hover:hover {
          transform: translateY(-6px);
        }

        .premium-glow {
          box-shadow: 0 0 60px rgba(255,255,255,0.12);
        }

        .gold-accent {
          border-color: #d4af37 !important;
          color: #f5d76e;
        }
      `}</style>

      <section className="relative overflow-hidden border-b-4 border-white">
        <div className="vertical-lines absolute inset-0" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32 relative z-10">
          <div className="flex justify-between border-b border-white pb-6 mb-16 uppercase tracking-[0.3em] text-xs">
            <div className="font-bold">VoidZero Plans</div>
            <div>Premium CPA Mentorship</div>
          </div>

          <div className="grid lg:grid-cols-12 gap-14 items-end">
            <div className="lg:col-span-8">
              <div className="uppercase tracking-[0.3em] text-sm mb-6 text-neutral-400">
                Choose Your Plan
              </div>

              <h1 className="display-font text-[4.5rem] md:text-[9rem] leading-[0.82] tracking-[-0.06em] font-bold uppercase mb-10">
                CHOOSE
                <br />
                YOUR CPA
                <br />
                GROWTH PATH 🚀
              </h1>

              <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-neutral-300 mb-12">
                Beginner-friendly mentorship programs designed to help you learn CPA marketing, organic traffic and scalable monetization systems.
              </p>

              <div className="flex flex-wrap gap-5">
                <button className="bg-white text-black border-2 border-white px-10 py-5 uppercase tracking-[0.25em] text-sm font-bold hover:bg-black hover:text-white transition-all duration-100">
                  Enroll Now
                </button>

                <button className="border-2 border-white px-10 py-5 uppercase tracking-[0.25em] text-sm font-bold hover:bg-white hover:text-black transition-all duration-100">
                  Contact WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule" />

      <section className="py-24 md:py-32 px-6 md:px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`border-4 p-10 min-h-[780px] flex flex-col justify-between card-hover ${
                  plan.highlight
                    ? 'border-black bg-black text-white premium-glow scale-[1.02]'
                    : plan.gold
                    ? 'border-[#d4af37] text-black'
                    : 'border-black bg-white text-black'
                }`}
              >
                <div>
                  <div
                    className={`inline-block px-5 py-2 border uppercase tracking-[0.2em] text-[11px] mb-10 ${
                      plan.gold ? 'gold-accent' : ''
                    }`}
                  >
                    {plan.badge}
                  </div>

                  <h2 className="display-font text-5xl font-bold leading-none mb-6">
                    {plan.name}
                  </h2>

                  <div className="display-font text-6xl font-bold mb-10">
                    {plan.price}
                  </div>

                  <div className="space-y-5 mb-14">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-4 text-lg"
                      >
                        <div>✓</div>
                        <div>{feature}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  className={`w-full border-2 py-5 uppercase tracking-[0.25em] text-sm font-bold transition-all duration-100 ${
                    plan.highlight
                      ? 'border-white hover:bg-white hover:text-black'
                      : plan.gold
                      ? 'border-[#d4af37] hover:bg-[#d4af37] hover:text-black'
                      : 'border-black bg-black text-white hover:bg-white hover:text-black'
                  }`}
                >
                  {plan.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule bg-black" />

      <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-10">
        <div className="vertical-lines absolute inset-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="uppercase tracking-[0.3em] text-sm mb-5 text-neutral-400">
              Comparison Table
            </div>

            <h2 className="display-font text-5xl md:text-8xl leading-none font-bold uppercase">
              COMPARE
              <br />
              PLANS
            </h2>
          </div>

          <div className="overflow-x-auto border border-white">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white uppercase tracking-[0.2em] text-xs">
                  <th className="p-6">Feature</th>
                  <th className="p-6">Basic</th>
                  <th className="p-6">Premium</th>
                  <th className="p-6">Elite</th>
                </tr>
              </thead>

              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/20 hover:bg-white hover:text-black transition-all duration-100"
                  >
                    <td className="p-6 text-lg">{row[0]}</td>
                    <td className="p-6 text-xl">{row[1]}</td>
                    <td className="p-6 text-xl">{row[2]}</td>
                    <td className="p-6 text-xl">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="section-rule" />

      <section className="bg-white text-black py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end flex-wrap gap-8 mb-16">
            <div>
              <div className="uppercase tracking-[0.3em] text-sm mb-5 text-neutral-500">
                Trust & Proof
              </div>

              <h2 className="display-font text-5xl md:text-8xl leading-none font-bold uppercase">
                REAL
                <br />
                RESULTS
              </h2>
            </div>

            <div className="text-right">
              <div className="display-font text-6xl font-bold mb-3">
                132+
              </div>

              <div className="uppercase tracking-[0.2em] text-xs text-neutral-500">
                Students Enrolled This Month
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="border-2 border-black p-10 min-h-[260px] flex flex-col justify-between hover:bg-black hover:text-white transition-all duration-100"
              >
                <div className="display-font text-7xl opacity-20 leading-none mb-8">
                  “
                </div>

                <p className="text-2xl leading-relaxed italic">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="glass border-4 border-black p-10 md:p-16 text-center">
            <div className="uppercase tracking-[0.3em] text-sm mb-6 text-neutral-500">
              Payment Proof Counter
            </div>

            <div className="display-font text-6xl md:text-8xl font-bold mb-8">
              5,000+
            </div>

            <div className="text-xl text-neutral-700">
              Successful Payments Processed Through Razorpay
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule bg-black" />

      <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-10">
        <div className="vertical-lines absolute inset-0" />

        <div className="max-w-6xl mx-auto relative z-10 border-4 border-white p-10 md:p-16 glass">
          <div className="grid lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-5">
              <div className="uppercase tracking-[0.3em] text-sm mb-5 text-neutral-400">
                Purchase Flow
              </div>

              <h2 className="display-font text-5xl md:text-7xl leading-none font-bold uppercase mb-10">
                COMPLETE
                <br />
                YOUR
                <br />
                ENROLLMENT
              </h2>
            </div>

            <div className="lg:col-span-7 border-2 border-white p-10 bg-black/50">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  placeholder="Full Name"
                  className="bg-transparent border-b-2 border-white px-2 py-5 outline-none placeholder:text-neutral-500 italic"
                />

                <input
                  placeholder="Email Address"
                  className="bg-transparent border-b-2 border-white px-2 py-5 outline-none placeholder:text-neutral-500 italic"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <input
                  placeholder="Phone Number"
                  className="bg-transparent border-b-2 border-white px-2 py-5 outline-none placeholder:text-neutral-500 italic"
                />

                <select className="bg-transparent border-b-2 border-white px-2 py-5 outline-none text-neutral-400">
                  <option>Select Plan</option>
                  <option>Basic - ₹5,000</option>
                  <option>Premium - ₹10,000</option>
                  <option>Elite - ₹20,000</option>
                </select>
              </div>

              <div className="border-t border-white pt-10">
                <div className="flex justify-between items-center flex-wrap gap-8 mb-10">
                  <div>
                    <div className="uppercase tracking-[0.2em] text-xs text-neutral-400 mb-2">
                      Dynamic Pricing
                    </div>

                    <div className="display-font text-6xl font-bold">
                      ₹10,000
                    </div>
                  </div>

                  <button className="bg-white text-black border-2 border-white px-10 py-5 uppercase tracking-[0.25em] text-sm font-bold hover:bg-black hover:text-white transition-all duration-100">
                    Pay With Razorpay
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-4 uppercase tracking-[0.2em] text-[11px] text-neutral-400">
                  <div>UPI Secured</div>
                  <div>Encrypted Checkout</div>
                  <div>Verified Payment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule" />

      <section className="bg-white text-black py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="uppercase tracking-[0.3em] text-sm mb-5 text-neutral-500">
              FAQ Section
            </div>

            <h2 className="display-font text-5xl md:text-8xl leading-none font-bold uppercase">
              PLAN
              <br />
              QUESTIONS
            </h2>
          </div>

          <div className="border border-black">
            {faqs.map((item, index) => (
              <details key={index} className="border-b border-black">
                <summary className="list-none cursor-pointer p-8 flex justify-between items-center uppercase tracking-[0.12em] text-sm font-bold hover:bg-black hover:text-white transition-all duration-100">
                  {item.question}
                  <span className="text-xl">+</span>
                </summary>

                <div className="px-8 pb-8 text-lg leading-relaxed text-neutral-700">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule bg-black" />

      <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-10">
        <div className="vertical-lines absolute inset-0" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="uppercase tracking-[0.3em] text-sm mb-6 text-neutral-400">
            Final CTA
          </div>

          <h2 className="display-font text-5xl md:text-[9rem] leading-[0.85] tracking-[-0.06em] font-bold uppercase mb-12">
            READY TO
            <br />
            SCALE?
          </h2>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-neutral-300 mb-16">
            Join the VoidZero mentorship ecosystem and start building sustainable CPA systems today.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <button className="bg-white text-black border-2 border-white px-12 py-6 uppercase tracking-[0.25em] text-sm font-bold hover:bg-black hover:text-white transition-all duration-100">
              Contact WhatsApp
            </button>

            <button className="border-2 border-white px-12 py-6 uppercase tracking-[0.25em] text-sm font-bold hover:bg-white hover:text-black transition-all duration-100">
              +91 95219 03155
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
