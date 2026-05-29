import { useEffect, useState } from 'react';

export default function VoidZeroHomepage() {
  const [countdown, setCountdown] = useState({
    days: 2,
    hours: 14,
    minutes: 38,
    seconds: 21,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => ({
        ...prev,
        seconds: prev.seconds > 0 ? prev.seconds - 1 : 59,
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const learnCards = [
    {
      title: 'Organic Traffic Methods',
      desc: 'Build free scalable traffic systems.',
    },
    {
      title: 'Instagram Reels',
      desc: 'Short-form viral content strategies.',
    },
    {
      title: 'Content Locking',
      desc: 'Ethical monetization systems.',
    },
    {
      title: 'Telegram Monetization',
      desc: 'Grow and monetize communities.',
    },
    {
      title: 'Landing Pages',
      desc: 'Conversion-focused funnel creation.',
    },
    {
      title: 'Scaling Systems',
      desc: 'Advanced growth frameworks.',
    },
    {
      title: 'Whitehat Arbitrage',
      desc: 'Safe and sustainable methods.',
    },
    {
      title: 'CPA Funnel Building',
      desc: 'Complete funnel architecture.',
    },
  ];

  const socialCards = [
    'Instagram',
    'Telegram',
    'WhatsApp',
    'YouTube',
  ];

  const proofCards = [
    'OGAds Revenue',
    'Telegram Leads',
    'Student Results',
    'AdBlueMedia Earnings',
    'CPA Dashboard',
    'Premium Student Wins',
  ];

  return (
    <div
      className="min-h-screen bg-black text-white overflow-hidden"
      style={{ fontFamily: 'Georgia, serif' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&display=swap');

        * {
          border-radius: 0 !important;
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        .display-font {
          font-family: 'Playfair Display', serif;
        }

        .hero-gradient {
          background:
            radial-gradient(circle at top left, rgba(255,255,255,0.12), transparent 40%),
            radial-gradient(circle at bottom right, rgba(255,255,255,0.08), transparent 40%),
            linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%);
          animation: pulseBg 8s ease-in-out infinite alternate;
        }

        @keyframes pulseBg {
          from {
            filter: brightness(1);
          }
          to {
            filter: brightness(1.1);
          }
        }

        .glass {
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.12);
        }

        .section-rule {
          height: 4px;
          width: 100%;
          background: white;
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

        .card-hover {
          transition: all 150ms linear;
        }

        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 40px rgba(255,255,255,0.08);
        }

        .ticker {
          animation: tickerMove 20s linear infinite;
        }

        @keyframes tickerMove {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <section className="relative overflow-hidden border-b-4 border-white hero-gradient">
        <div className="vertical-lines absolute inset-0" />

        <div className="absolute top-24 left-10 glass px-6 py-4 hidden lg:block">
          <div className="uppercase tracking-[0.2em] text-[11px] text-neutral-400 mb-2">
            Live Revenue
          </div>
          <div className="display-font text-4xl font-bold">
            $12,480
          </div>
        </div>

        <div className="absolute bottom-24 right-10 glass px-6 py-4 hidden lg:block">
          <div className="uppercase tracking-[0.2em] text-[11px] text-neutral-400 mb-2">
            Student Earnings
          </div>
          <div className="display-font text-4xl font-bold">
            ₹8.2L+
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32 relative z-10">
          <div className="flex justify-between border-b border-white pb-6 mb-16 uppercase tracking-[0.3em] text-xs">
            <div className="font-bold">VOIDZERO</div>
            <div>CPA Affiliate Ecosystem</div>
          </div>

          <div className="grid lg:grid-cols-12 gap-14 items-end">
            <div className="lg:col-span-8">
              <div className="uppercase tracking-[0.3em] text-sm mb-6 text-neutral-400">
                Free Webinar + Mentorship Funnel
              </div>

              <h1 className="display-font text-[4.5rem] md:text-[10rem] leading-[0.82] tracking-[-0.06em] font-bold uppercase mb-10">
                FLIP
                <br />
                THE
                <br />
                SCRIPT
              </h1>

              <p className="text-xl md:text-2xl leading-relaxed max-w-4xl text-neutral-300 mb-14">
                Learn ethical CPA affiliate marketing, build organic funnels,
                generate commissions and scale sustainable traffic systems with Mr. Void.
              </p>

              <div className="flex flex-wrap gap-5 mb-16">
                <button className="bg-white text-black border-2 border-white px-10 py-5 uppercase tracking-[0.25em] text-sm font-bold hover:bg-black hover:text-white transition-all duration-100">
                  Join Webinar
                </button>

                <button className="border-2 border-white px-10 py-5 uppercase tracking-[0.25em] text-sm font-bold hover:bg-white hover:text-black transition-all duration-100">
                  Watch Demo
                </button>

                <button className="glass px-10 py-5 uppercase tracking-[0.25em] text-sm font-bold hover:bg-white hover:text-black transition-all duration-100">
                  Book Consultation
                </button>
              </div>

              <div className="grid grid-cols-4 max-w-2xl gap-4">
                {[
                  [countdown.days, 'Days'],
                  [countdown.hours, 'Hours'],
                  [countdown.minutes, 'Minutes'],
                  [countdown.seconds, 'Seconds'],
                ].map(([value, label], index) => (
                  <div key={index} className="glass p-5 text-center">
                    <div className="display-font text-4xl font-bold mb-2">
                      {value}
                    </div>

                    <div className="uppercase tracking-[0.2em] text-[10px] text-neutral-400">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 glass p-8">
              <div className="uppercase tracking-[0.3em] text-xs mb-6 text-neutral-400">
                Live Metrics
              </div>

              <div className="space-y-8">
                <div>
                  <div className="display-font text-6xl font-bold mb-2">
                    1000+
                  </div>
                  <div className="uppercase tracking-[0.2em] text-xs text-neutral-400">
                    Students Enrolled
                  </div>
                </div>

                <div>
                  <div className="display-font text-6xl font-bold mb-2">
                    $50K+
                  </div>
                  <div className="uppercase tracking-[0.2em] text-xs text-neutral-400">
                    Generated Earnings
                  </div>
                </div>

                <div>
                  <div className="display-font text-6xl font-bold mb-2">
                    5+
                  </div>
                  <div className="uppercase tracking-[0.2em] text-xs text-neutral-400">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black border-b-4 border-black overflow-hidden py-6">
        <div className="ticker whitespace-nowrap flex gap-20 uppercase tracking-[0.3em] text-sm font-bold">
          <span>1000+ Students Enrolled</span>
          <span>OGAds</span>
          <span>AdBlueMedia</span>
          <span>CPAGrip</span>
          <span>CPALead</span>
          <span>132 Students Joined This Month</span>
          <span>1000+ Students Enrolled</span>
          <span>OGAds</span>
          <span>AdBlueMedia</span>
          <span>CPAGrip</span>
        </div>
      </section>

      <section className="bg-white text-black py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">
            <div className="uppercase tracking-[0.3em] text-sm mb-5 text-neutral-500">
              Introduction
            </div>

            <h2 className="display-font text-5xl md:text-8xl leading-none font-bold uppercase">
              WHAT IS
              <br />
              CPA?
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="border-l-4 border-black pl-8 text-xl leading-relaxed text-neutral-700 mb-14">
              CPA affiliate marketing is a performance-based model where users earn commissions whenever visitors complete actions like app installs, form submissions or signups.
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-14">
              {[
                'Low Startup Cost',
                'Organic Traffic Friendly',
                'Scalable Monetization',
              ].map((item, index) => (
                <div
                  key={index}
                  className="border-2 border-black p-8 min-h-[240px] flex flex-col justify-between hover:bg-black hover:text-white transition-all duration-100"
                >
                  <div className="text-6xl font-bold">0{index + 1}</div>
                  <div className="display-font text-3xl font-bold leading-tight">
                    {item}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['OGAds', 'AdBlueMedia', 'CPAGrip', 'CPALead'].map((item) => (
                <div
                  key={item}
                  className="border-2 border-black h-32 flex items-center justify-center uppercase tracking-[0.25em] text-sm font-bold hover:bg-black hover:text-white transition-all duration-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule" />

      <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-10">
        <div className="vertical-lines absolute inset-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-end flex-wrap gap-8 mb-16">
            <div>
              <div className="uppercase tracking-[0.3em] text-sm mb-5 text-neutral-400">
                Video Demo
              </div>

              <h2 className="display-font text-5xl md:text-8xl leading-none font-bold uppercase">
                WATCH
                <br />
                BEFORE
                <br />
                JOINING
              </h2>
            </div>
          </div>

          <div className="border-4 border-white aspect-video relative overflow-hidden glass">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-white/5 to-transparent">
              <button className="w-28 h-28 border-4 border-white rounded-full flex items-center justify-center text-4xl hover:bg-white hover:text-black transition-all duration-100">
                ▶
              </button>
            </div>

            <div className="absolute top-6 left-6 border border-white px-5 py-2 uppercase tracking-[0.2em] text-xs">
              Watch Before Joining
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule" />

      <section className="bg-white text-black py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="uppercase tracking-[0.3em] text-sm mb-5 text-neutral-500">
              Social Ecosystem
            </div>

            <h2 className="display-font text-5xl md:text-8xl leading-none font-bold uppercase">
              CONNECT
              <br />
              EVERYWHERE
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialCards.map((item, index) => (
              <div
                key={index}
                className="glass border-2 border-black text-black p-8 min-h-[320px] flex flex-col justify-between card-hover hover:bg-black hover:text-white"
              >
                <div>
                  <div className="uppercase tracking-[0.2em] text-[11px] opacity-60 mb-5">
                    Official Channel
                  </div>

                  <div className="display-font text-5xl font-bold leading-none mb-8">
                    {item}
                  </div>

                  <p className="text-lg leading-relaxed opacity-80">
                    Daily CPA content, mentorship updates and community support.
                  </p>
                </div>

                <button className="mt-10 border-2 border-current py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-white hover:text-black transition-all duration-100">
                  Explore
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule bg-white" />

      <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-10 bg-black">
        <div className="vertical-lines absolute inset-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-end flex-wrap gap-8 mb-16">
            <div>
              <div className="uppercase tracking-[0.3em] text-sm mb-5 text-neutral-400">
                What You'll Learn
              </div>

              <h2 className="display-font text-5xl md:text-8xl leading-none font-bold uppercase">
                BUILD.
                <br />
                SCALE.
                <br />
                MONETIZE.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-white">
            {learnCards.map((item, index) => (
              <div
                key={index}
                className="border border-white p-8 min-h-[260px] flex flex-col justify-between hover:bg-white hover:text-black transition-all duration-100"
              >
                <div className="text-5xl mb-8">+</div>

                <div>
                  <div className="display-font text-3xl font-bold leading-tight mb-4">
                    {item.title}
                  </div>

                  <div className="text-neutral-400 text-lg leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule" />

      <section className="bg-white text-black py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 border-4 border-black aspect-[4/5] flex items-center justify-center">
            <div className="text-center">
              <div className="display-font text-7xl font-bold leading-none mb-6">
                MR.
                <br />
                VOID
              </div>

              <div className="uppercase tracking-[0.2em] text-xs text-neutral-500">
                Mentor Photo Placeholder
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="uppercase tracking-[0.3em] text-sm mb-5 text-neutral-500">
              Meet The Mentor
            </div>

            <h2 className="display-font text-5xl md:text-8xl leading-none font-bold uppercase mb-10">
              SAY HI
              <br />
              TO MR.
              <br />
              VOID 👋
            </h2>

            <p className="text-xl leading-relaxed text-neutral-700 mb-10 max-w-3xl">
              Teaching ethical CPA affiliate marketing systems focused on organic traffic, scalable funnels and sustainable long-term growth.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                ['5+', 'Years'],
                ['$50K+', 'Revenue'],
                ['1000+', 'Students'],
              ].map(([value, label], index) => (
                <div key={index} className="border-b-4 border-black pb-6">
                  <div className="display-font text-5xl font-bold mb-2">
                    {value}
                  </div>

                  <div className="uppercase tracking-[0.2em] text-xs text-neutral-500">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass border-2 border-black p-8 text-lg leading-relaxed text-neutral-700">
              VoidZero exists to help beginners learn ethical CPA systems without fake promises, blackhat spam or unrealistic shortcuts.
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule bg-black" />

      <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-10">
        <div className="vertical-lines absolute inset-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-end flex-wrap gap-8 mb-16">
            <div>
              <div className="uppercase tracking-[0.3em] text-sm mb-5 text-neutral-400">
                Earnings Proofs
              </div>

              <h2 className="display-font text-5xl md:text-8xl leading-none font-bold uppercase">
                REAL
                <br />
                RESULTS
              </h2>
            </div>

            <button className="border-2 border-white px-10 py-5 uppercase tracking-[0.2em] text-sm font-bold hover:bg-white hover:text-black transition-all duration-100">
              View All Proofs
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proofCards.map((item, index) => (
              <div
                key={index}
                className="glass border-2 border-white aspect-[4/5] p-8 flex flex-col justify-between card-hover"
              >
                <div className="uppercase tracking-[0.2em] text-[11px] border border-white px-4 py-2 inline-block">
                  Verified
                </div>

                <div className="text-center">
                  <div className="display-font text-4xl font-bold leading-none mb-5">
                    Proof
                    <br />
                    Preview
                  </div>

                  <div className="uppercase tracking-[0.2em] text-[11px] text-neutral-400">
                    Thumbnail Placeholder
                  </div>
                </div>

                <div>
                  <div className="display-font text-3xl font-bold leading-tight mb-3">
                    {item}
                  </div>

                  <div className="uppercase tracking-[0.2em] text-[11px] text-neutral-400">
                    Click To Expand
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule" />

      <section className="bg-white text-black py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto border-4 border-black p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top_center,black,transparent_70%)]" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-14 items-center">
            <div className="lg:col-span-7">
              <div className="uppercase tracking-[0.3em] text-sm mb-5 text-neutral-500">
                Webinar Registration
              </div>

              <h2 className="display-font text-5xl md:text-[8rem] leading-[0.85] tracking-[-0.06em] font-bold uppercase mb-10">
                JOIN THE
                <br />
                NEXT LIVE
                <br />
                WEBINAR
              </h2>

              <p className="text-xl leading-relaxed text-neutral-700 max-w-2xl">
                Limited seats available. Join the live webinar and learn ethical CPA systems step-by-step.
              </p>
            </div>

            <div className="lg:col-span-5 border-2 border-black p-8 bg-white">
              <div className="space-y-6 mb-10">
                <input placeholder="Full Name" className="w-full border-b-2 border-black px-2 py-5 outline-none" />
                <input placeholder="Email Address" className="w-full border-b-2 border-black px-2 py-5 outline-none" />
                <input placeholder="WhatsApp Number" className="w-full border-b-2 border-black px-2 py-5 outline-none" />
              </div>

              <div className="border-t border-black pt-8">
                <div className="uppercase tracking-[0.2em] text-[11px] text-neutral-500 mb-5">
                  132 Students Registered This Month
                </div>

                <button className="w-full bg-black text-white border-2 border-black py-5 uppercase tracking-[0.25em] text-sm font-bold hover:bg-white hover:text-black transition-all duration-100">
                  Reserve Free Spot
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule bg-black" />

      <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-10">
        <div className="vertical-lines absolute inset-0" />

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-10">
          <div className="border-2 border-red-500 p-10 glass">
            <div className="uppercase tracking-[0.3em] text-sm mb-8 text-red-400">
              What We DON'T Teach
            </div>

            <div className="space-y-6 text-2xl">
              {[
                'Blackhat Spam',
                'Botting',
                'Fake Traffic',
                'Self Clicking',
                'Fraudulent Methods',
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <span className="text-red-500">✕</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 border-green-500 p-10 glass">
            <div className="uppercase tracking-[0.3em] text-sm mb-8 text-green-400">
              What We DO Teach
            </div>

            <div className="space-y-6 text-2xl">
              {[
                'Organic Traffic',
                'Whitehat Arbitrage',
                'Scalable Funnels',
                'Community Building',
                'Sustainable Monetization',
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <span className="text-green-500">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule" />

      <section className="bg-white text-black py-28 md:py-40 px-6 md:px-10 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="uppercase tracking-[0.4em] text-sm mb-8 text-neutral-500">
            Final CTA
          </div>

          <h2 className="display-font text-6xl md:text-[10rem] leading-[0.82] tracking-[-0.06em] font-bold uppercase mb-12">
            READY TO
            <br />
            FLIP THE
            <br />
            SCRIPT?
          </h2>

          <p className="text-xl md:text-3xl max-w-4xl mx-auto leading-relaxed text-neutral-700 mb-16">
            Join thousands of aspiring affiliate marketers learning ethical CPA systems, organic traffic methods and scalable monetization frameworks.
          </p>

          <button className="bg-black text-white border-2 border-black px-14 py-6 uppercase tracking-[0.25em] text-sm font-bold hover:bg-white hover:text-black transition-all duration-100 mb-16">
            Join Free Webinar
          </button>

          <div className="flex flex-wrap justify-center gap-4 uppercase tracking-[0.2em] text-xs text-neutral-500">
            <div className="border border-black px-5 py-3">1000+ Students</div>
            <div className="border border-black px-5 py-3">Verified Proofs</div>
            <div className="border border-black px-5 py-3">Ethical Methods</div>
            <div className="border border-black px-5 py-3">Premium Community</div>
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-white py-16 px-6 md:px-10 bg-black text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="display-font text-4xl font-bold mb-5">
              VOIDZERO
            </div>

            <p className="text-neutral-400 leading-relaxed">
              Ethical CPA affiliate marketing education ecosystem.
            </p>
          </div>

          <div>
            <div className="uppercase tracking-[0.2em] text-xs mb-5 text-neutral-500">
              Pages
            </div>

            <div className="space-y-3 text-lg">
              <div>/about</div>
              <div>/plans</div>
              <div>/proofs</div>
              <div>/consultation</div>
            </div>
          </div>

          <div>
            <div className="uppercase tracking-[0.2em] text-xs mb-5 text-neutral-500">
              Socials
            </div>

            <div className="space-y-3 text-lg">
              <div>Instagram</div>
              <div>Telegram</div>
              <div>WhatsApp</div>
              <div>YouTube</div>
            </div>
          </div>

          <div>
            <div className="uppercase tracking-[0.2em] text-xs mb-5 text-neutral-500">
              Legal
            </div>

            <p className="text-neutral-400 leading-relaxed text-sm">
              Earnings are not guaranteed. Results vary depending on effort, skill and consistency.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-6 text-sm uppercase tracking-[0.15em] text-neutral-500">
          <div>CPAHUSTLER © 2026</div>
          <div>Built For Ethical CPA Growth</div>
        </div>
      </footer>
    </div>
  );
}
