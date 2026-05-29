export default function VoidZeroConsultationPage() {
  const benefits = [
    {
      title: 'CPA Setup Guidance',
      description: 'Step-by-step beginner roadmap for launching CPA systems.',
    },
    {
      title: 'Offer Selection',
      description: 'Learn how to choose profitable and scalable CPA offers.',
    },
    {
      title: 'Landing Page Review',
      description: 'Get direct feedback on your funnel and conversion structure.',
    },
    {
      title: 'Traffic Strategy',
      description: 'Organic Instagram and Telegram growth systems.',
    },
    {
      title: 'WhatsApp Support',
      description: 'Private support access after your consultation session.',
    },
    {
      title: 'Scaling Systems',
      description: 'Understand monetization and long-term scaling frameworks.',
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

        .grid-pattern {
          background-image:
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .section-rule {
          width: 100%;
          height: 4px;
          background: white;
        }
      `}</style>

      <section className="relative overflow-hidden border-b-4 border-white">
        <div className="vertical-lines absolute inset-0" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32 relative z-10">
          <div className="flex justify-between border-b border-white pb-6 mb-16 uppercase tracking-[0.3em] text-xs">
            <div className="font-bold">VoidZero Consultation</div>
            <div>Limited Slots Available</div>
          </div>

          <div className="grid lg:grid-cols-12 gap-14 items-end">
            <div className="lg:col-span-8">
              <div className="uppercase tracking-[0.3em] text-sm mb-6 text-neutral-400">
                1-on-1 CPA Mentorship Session
              </div>

              <h1 className="display-font text-[5rem] md:text-[10rem] leading-[0.82] tracking-[-0.06em] font-bold uppercase mb-10">
                ₹149
                <br />
                PER
                <br />
                SESSION
              </h1>

              <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-neutral-300 mb-12">
                Beginner-focused consultation designed to help you understand CPA funnels,
                organic traffic systems and monetization strategies.
              </p>

              <div className="flex flex-wrap gap-5">
                <button className="bg-white text-black border-2 border-white px-10 py-5 uppercase tracking-[0.25em] text-sm font-bold hover:bg-black hover:text-white transition-all duration-100">
                  Book Session
                </button>

                <button className="border-2 border-white px-10 py-5 uppercase tracking-[0.25em] text-sm font-bold hover:bg-white hover:text-black transition-all duration-100">
                  View Benefits
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 border-2 border-white p-8 grid-pattern">
              <div className="uppercase tracking-[0.3em] text-xs mb-8 text-neutral-400">
                What's Included
              </div>

              <div className="space-y-5 text-lg text-neutral-200">
                <div>+ Beginner CPA Guidance</div>
                <div>+ Offer Suggestions</div>
                <div>+ Funnel Review</div>
                <div>+ WhatsApp Support</div>
                <div>+ Scaling Strategy</div>
                <div>+ Monetization Roadmap</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule" />

      <section className="py-24 md:py-32 px-6 md:px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end flex-wrap gap-8 mb-16">
            <div>
              <div className="uppercase tracking-[0.3em] text-sm mb-5">
                Benefits Grid
              </div>

              <h2 className="display-font text-5xl md:text-8xl leading-none font-bold">
                WHAT YOU
                <br />
                RECEIVE
              </h2>
            </div>

            <div className="max-w-xl text-lg leading-relaxed text-neutral-700">
              Personalized guidance focused on ethical CPA affiliate marketing,
              organic traffic and long-term growth systems.
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-black">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="border border-black p-8 min-h-[280px] flex flex-col justify-between hover:bg-black hover:text-white transition-all duration-100"
              >
                <div className="w-14 h-14 border-2 border-current flex items-center justify-center text-2xl font-bold mb-10">
                  +
                </div>

                <div>
                  <h3 className="display-font text-3xl font-bold leading-tight mb-5">
                    {item.title}
                  </h3>

                  <p className="text-lg leading-relaxed opacity-80">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule bg-black" />

      <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-10">
        <div className="vertical-lines absolute inset-0" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-14 relative z-10">
          <div className="lg:col-span-5">
            <div className="uppercase tracking-[0.3em] text-sm mb-5 text-neutral-400">
              Booking Form
            </div>

            <h2 className="display-font text-5xl md:text-8xl leading-none font-bold mb-10 uppercase">
              BOOK
              <br />
              YOUR
              <br />
              SESSION
            </h2>

            <p className="text-lg leading-relaxed text-neutral-300 max-w-md">
              Fill the consultation form and proceed securely through Razorpay checkout.
            </p>
          </div>

          <div className="lg:col-span-7 border-2 border-white p-10 bg-black/80 backdrop-blur-sm">
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

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                placeholder="Phone Number"
                className="bg-transparent border-b-2 border-white px-2 py-5 outline-none placeholder:text-neutral-500 italic"
              />

              <input
                placeholder="Current CPA Network"
                className="bg-transparent border-b-2 border-white px-2 py-5 outline-none placeholder:text-neutral-500 italic"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <input
                placeholder="Telegram Username (Optional)"
                className="bg-transparent border-b-2 border-white px-2 py-5 outline-none placeholder:text-neutral-500 italic"
              />

              <select className="bg-transparent border-b-2 border-white px-2 py-5 outline-none text-neutral-400">
                <option>Experience Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            <div className="border-t border-white pt-10">
              <div className="flex justify-between items-center flex-wrap gap-8 mb-10">
                <div>
                  <div className="uppercase tracking-[0.2em] text-xs text-neutral-400 mb-2">
                    Consultation Fee
                  </div>

                  <div className="display-font text-6xl font-bold">
                    ₹149
                  </div>
                </div>

                <button className="bg-white text-black border-2 border-white px-10 py-5 uppercase tracking-[0.25em] text-sm font-bold hover:bg-black hover:text-white transition-all duration-100">
                  Pay With Razorpay
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-4 uppercase tracking-[0.2em] text-[11px] text-neutral-400 mb-8">
                <div>UPI Secured</div>
                <div>Encrypted Checkout</div>
                <div>Verified Payment</div>
              </div>

              <div className="border-t border-white pt-6 text-sm leading-relaxed text-neutral-500">
                If the consultation does not meet expectations, additional support guidance will be provided through Telegram and WhatsApp.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule" />

      <section className="bg-white text-black py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto border-4 border-black p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top_center,black,transparent_70%)]" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-14 items-center">
            <div className="lg:col-span-7">
              <div className="uppercase tracking-[0.3em] text-sm mb-5">
                Success Modal Preview
              </div>

              <h2 className="display-font text-5xl md:text-8xl leading-[0.9] font-bold mb-8 uppercase">
                PAYMENT
                <br />
                SUCCESSFUL
              </h2>

              <p className="text-xl leading-relaxed text-neutral-700 max-w-2xl">
                After successful payment verification, users receive private community access and onboarding instructions instantly.
              </p>
            </div>

            <div className="lg:col-span-5 border-2 border-black p-8 bg-white">
              <div className="space-y-8 mb-10">
                <div>
                  <div className="uppercase tracking-[0.2em] text-xs text-neutral-500 mb-2">
                    Private Access
                  </div>

                  <div className="text-lg leading-relaxed">
                    WhatsApp Mentorship Group Link
                  </div>
                </div>

                <div>
                  <div className="uppercase tracking-[0.2em] text-xs text-neutral-500 mb-2">
                    Premium Community
                  </div>

                  <div className="text-lg leading-relaxed">
                    Telegram Premium Access Link
                  </div>
                </div>

                <div>
                  <div className="uppercase tracking-[0.2em] text-xs text-neutral-500 mb-2">
                    Next Steps
                  </div>

                  <div className="text-lg leading-relaxed text-neutral-700">
                    Join the communities, review onboarding instructions and prepare for your consultation session.
                  </div>
                </div>
              </div>

              <button className="w-full bg-black text-white border-2 border-black py-5 uppercase tracking-[0.25em] text-sm font-bold hover:bg-white hover:text-black transition-all duration-100">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
