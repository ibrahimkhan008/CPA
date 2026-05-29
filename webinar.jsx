export default function VoidZeroCPAWebsite() {
  const webinarTopics = [
    'Organic CPA Traffic Methods',
    'Instagram Reels Strategy',
    'Content Locking Funnels',
    'Telegram Monetization',
    'Landing Page Creation',
    'Scaling Systems',
    'Whitehat Arbitrage',
    'Offer Selection Framework',
  ];

  const testimonials = [
    {
      name: 'Aryan K.',
      text: 'Started with zero knowledge and generated my first CPA commissions within weeks.',
    },
    {
      name: 'Rahul M.',
      text: 'The webinar completely changed how I approach organic traffic and CPA funnels.',
    },
    {
      name: 'Sahil V.',
      text: 'Best beginner-friendly breakdown of affiliate marketing I have seen online.',
    },
  ];

  const faqs = [
    {
      question: 'Is the webinar free?',
      answer: 'Yes. The webinar is completely free for all beginners and students.',
    },
    {
      question: 'Do I need investment?',
      answer: 'No paid ads or investment are required to start learning.',
    },
    {
      question: 'Is CPA marketing legal?',
      answer: 'Yes, when implemented ethically and following platform guidelines.',
    },
    {
      question: 'Will I get support?',
      answer: 'Support is available through Telegram and WhatsApp communities.',
    },
    {
      question: 'Is this beginner friendly?',
      answer: 'Absolutely. The webinar is designed for complete beginners.',
    },
  ];

  return (
    <div
      className="min-h-screen bg-white text-black overflow-hidden"
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

        .section-rule {
          width: 100%;
          height: 4px;
          background: black;
        }

        .lines {
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 1px,
            rgba(0,0,0,0.04) 1px,
            rgba(0,0,0,0.04) 2px
          );
          background-size: 100% 4px;
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
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .btn-primary {
          background: black;
          color: white;
          border: 2px solid black;
          transition: all 100ms linear;
        }

        .btn-primary:hover {
          background: white;
          color: black;
        }

        .btn-secondary {
          background: transparent;
          color: black;
          border: 2px solid black;
          transition: all 100ms linear;
        }

        .btn-secondary:hover {
          background: black;
          color: white;
        }
      `}</style>

      <section className="relative border-b-4 border-black overflow-hidden lines">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="flex justify-between border-b border-black pb-6 mb-14 uppercase tracking-[0.3em] text-xs">
            <div className="font-bold">VoidZero Webinar</div>
            <div>Limited Seats</div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="uppercase tracking-[0.3em] text-sm mb-6">
                Free CPA Affiliate Marketing Webinar
              </div>

              <h1 className="display-font text-[4rem] md:text-[9rem] leading-[0.85] tracking-[-0.06em] font-bold uppercase mb-8">
                MASTER
                <br />
                CPA
                <br />
                FUNNELS
              </h1>

              <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-neutral-700 mb-10">
                Learn ethical CPA affiliate marketing systems, organic traffic methods and scalable monetization strategies.
              </p>

              <div className="flex flex-wrap gap-5">
                <button className="btn-primary px-10 py-5 uppercase tracking-[0.2em] text-sm font-bold">
                  Reserve Free Spot
                </button>

                <button className="btn-secondary px-10 py-5 uppercase tracking-[0.2em] text-sm font-bold">
                  Watch Preview
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 border-2 border-black p-8 grid-pattern bg-white">
              <div className="uppercase tracking-[0.3em] text-xs mb-6">
                Webinar Countdown
              </div>

              <div className="grid grid-cols-4 gap-3 mb-8 text-center">
                {['02', '14', '38', '21'].map((item, index) => (
                  <div key={index} className="border-2 border-black p-4">
                    <div className="display-font text-3xl font-bold">{item}</div>
                    <div className="uppercase text-[10px] tracking-[0.2em] mt-2">
                      {['Days', 'Hours', 'Mins', 'Secs'][index]}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-black pt-5 text-neutral-700 leading-relaxed">
                Seats are intentionally limited to maintain live interaction quality.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      <section className="bg-black text-white py-24 md:py-32 px-6 md:px-10 relative overflow-hidden">
        <div className="vertical-lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-end flex-wrap gap-8 mb-14">
            <div>
              <div className="uppercase tracking-[0.3em] text-sm mb-5">
                Live Training Session
              </div>

              <h2 className="display-font text-5xl md:text-8xl leading-none font-bold">
                WATCH
                <br />
                BEFORE
                <br />
                JOINING
              </h2>
            </div>

            <div className="max-w-xl text-lg text-neutral-300 leading-relaxed">
              Watch how complete beginners are generating CPA commissions using organic traffic systems.
            </div>
          </div>

          <div className="border-2 border-white aspect-video overflow-hidden relative">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="CPA Webinar Demo"
              allowFullScreen
            />

            <div className="absolute bottom-0 left-0 right-0 border-t border-white bg-black/90 px-6 py-4 flex justify-between uppercase tracking-[0.2em] text-xs">
              <div>Custom Controls</div>
              <div>Play / Pause / Fullscreen</div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">
            <div className="uppercase tracking-[0.3em] text-sm mb-5">
              Topics Covered
            </div>

            <h2 className="display-font text-5xl md:text-7xl font-bold leading-none">
              WHAT
              <br />
              YOU'LL
              <br />
              LEARN
            </h2>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 border border-black">
            {webinarTopics.map((topic, index) => (
              <div
                key={index}
                className="border border-black p-8 flex items-start gap-5 hover:bg-black hover:text-white transition-all duration-100"
              >
                <div className="w-10 h-10 border-2 border-current flex items-center justify-center shrink-0">
                  +
                </div>

                <div>
                  <div className="uppercase tracking-[0.2em] text-[10px] mb-3 opacity-70">
                    Module {index + 1}
                  </div>

                  <div className="display-font text-2xl leading-tight">
                    {topic}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      <section className="bg-black text-white py-24 md:py-32 px-6 md:px-10 relative overflow-hidden">
        <div className="vertical-lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-14 relative z-10">
          <div className="lg:col-span-5">
            <div className="uppercase tracking-[0.3em] text-sm mb-5">
              Registration Form
            </div>

            <h2 className="display-font text-5xl md:text-7xl font-bold leading-none mb-8">
              RESERVE
              <br />
              YOUR
              <br />
              SPOT
            </h2>

            <p className="text-lg leading-relaxed text-neutral-300">
              Register now to access the live webinar and private community updates.
            </p>
          </div>

          <div className="lg:col-span-7 border-2 border-white p-10">
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
                placeholder="Telegram Username"
                className="bg-transparent border-b-2 border-white px-2 py-5 outline-none placeholder:text-neutral-500 italic"
              />

              <input
                placeholder="WhatsApp Number"
                className="bg-transparent border-b-2 border-white px-2 py-5 outline-none placeholder:text-neutral-500 italic"
              />
            </div>

            <button className="w-full bg-white text-black py-5 uppercase tracking-[0.2em] text-sm font-bold border-2 border-white hover:bg-black hover:text-white transition-all duration-100 mb-6">
              Reserve Free Spot
            </button>

            <div className="uppercase tracking-[0.2em] text-[11px] text-neutral-500">
              Your information remains private and secure.
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      <section className="py-24 md:py-32 px-6 md:px-10 grid-pattern">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="uppercase tracking-[0.3em] text-sm mb-5">
              What Happens Next
            </div>

            <h2 className="display-font text-5xl md:text-8xl leading-none font-bold">
              SIMPLE
              <br />
              3 STEP
              <br />
              FLOW
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 border border-black">
            {[
              ['01', 'Register', 'Reserve your webinar access using the registration form.'],
              ['02', 'Join Community', 'Get Telegram access and webinar reminders instantly.'],
              ['03', 'Apply Systems', 'Implement the strategies taught inside the webinar.'],
            ].map(([num, title, desc]) => (
              <div
                key={num}
                className="border border-black p-10 min-h-[320px] flex flex-col justify-between hover:bg-black hover:text-white transition-all duration-100"
              >
                <div className="display-font text-8xl opacity-20 leading-none">
                  {num}
                </div>

                <div>
                  <h3 className="display-font text-4xl font-bold mb-5">
                    {title}
                  </h3>

                  <p className="text-lg leading-relaxed opacity-80">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      <section className="bg-black text-white py-24 md:py-32 px-6 md:px-10 relative overflow-hidden">
        <div className="vertical-lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-end flex-wrap gap-8 mb-16">
            <div>
              <div className="uppercase tracking-[0.3em] text-sm mb-5">
                Testimonials
              </div>

              <h2 className="display-font text-5xl md:text-8xl font-bold leading-none">
                STUDENT
                <br />
                RESULTS
              </h2>
            </div>

            <div className="uppercase tracking-[0.2em] text-xs text-neutral-400">
              Auto Rotating Carousel
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div key={index} className="border-t-[3px] border-white pt-8">
                <div className="display-font text-8xl opacity-10 leading-none mb-4">
                  “
                </div>

                <p className="text-2xl italic leading-relaxed mb-8 text-neutral-200">
                  {item.text}
                </p>

                <div className="uppercase tracking-[0.3em] text-sm">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="uppercase tracking-[0.3em] text-sm mb-5">
              Frequently Asked Questions
            </div>

            <h2 className="display-font text-5xl md:text-8xl font-bold leading-none">
              FAQ
            </h2>
          </div>

          <div className="border border-black">
            {faqs.map((item, index) => (
              <details key={index} className="border-b border-black">
                <summary className="list-none cursor-pointer p-8 flex justify-between items-center uppercase tracking-[0.15em] text-sm font-bold hover:bg-black hover:text-white transition-all duration-100">
                  {item.question}
                  <span>+</span>
                </summary>

                <div className="px-8 pb-8 text-lg leading-relaxed text-neutral-700">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      <section className="bg-black text-white py-28 md:py-36 px-6 md:px-10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="uppercase tracking-[0.35em] text-sm mb-6">
            Final Registration Call
          </div>

          <h2 className="display-font text-6xl md:text-[10rem] leading-[0.85] tracking-[-0.06em] font-bold mb-10">
            DON'T
            <br />
            MISS
            <br />
            THIS
          </h2>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-neutral-300 leading-relaxed mb-16">
            Join thousands of students learning ethical CPA affiliate marketing systems.
          </p>

          <div className="max-w-4xl mx-auto border-2 border-white p-10 mb-14">
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
                placeholder="Telegram Username"
                className="bg-transparent border-b-2 border-white px-2 py-5 outline-none placeholder:text-neutral-500 italic"
              />

              <input
                placeholder="WhatsApp Number"
                className="bg-transparent border-b-2 border-white px-2 py-5 outline-none placeholder:text-neutral-500 italic"
              />
            </div>

            <button className="w-full bg-white text-black py-5 uppercase tracking-[0.2em] text-sm font-bold border-2 border-white hover:bg-black hover:text-white transition-all duration-100">
              Reserve Free Spot
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 border-t border-white pt-10 uppercase tracking-[0.2em] text-xs text-neutral-400">
            <div>1000+ Students</div>
            <div>Ethical CPA Systems</div>
            <div>Free Live Training</div>
          </div>
        </div>
      </section>
    </div>
  );
}
