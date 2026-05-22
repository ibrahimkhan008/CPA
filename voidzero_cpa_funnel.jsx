export default function VoidZeroCPAWebsite() {
  const plans = [
    {
      name: 'Basic to Advanced CPA Marketing',
      price: '₹5,000',
      duration: '45 Days Access',
      description: 'Recorded Course Only',
      features: [
        'Beginner to Advanced CPA Training',
        'Recorded Video Modules',
        'Traffic Methods',
        'Landing Page Basics',
        'Monetization Strategies',
      ],
      cta: 'Get Instant Access',
    },
    {
      name: '3 Months Premium Access',
      price: '₹10,000',
      duration: '3 Months',
      description: 'Mentorship + Live Classes',
      badge: 'MOST POPULAR',
      features: [
        'Weekly Live Classes',
        'Personal Mentorship',
        'Premium Community Access',
        'High Earning Method',
        'Live Class Recordings',
      ],
      cta: 'Enroll Now',
      featured: true,
    },
    {
      name: '1 Year Elite Access',
      price: '₹20,000',
      duration: '1 Year',
      description: 'Elite Mentorship',
      badge: 'BEST VALUE',
      features: [
        'Advanced High-Ticket Sales',
        'Automation Setup',
        'Organic Branding',
        'Scaling Frameworks',
        'Advanced CPA Systems',
      ],
      cta: 'Join Elite Program',
    },
  ];

  const learnCards = [
    'Organic Traffic Methods',
    'Instagram Reels',
    'Content Locking',
    'Telegram Monetization',
    'Landing Page Creation',
    'Scaling Systems',
    'Whitehat Arbitrage',
    'CPA Funnel Building',
  ];

  return (
    <div className="min-h-screen bg-white text-black overflow-hidden" style={{ fontFamily: 'Georgia, serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&display=swap');

        * {
          border-radius: 0 !important;
          scroll-behavior: smooth;
        }

        body {
          background: #ffffff;
        }

        .display-font {
          font-family: 'Playfair Display', serif;
        }

        .noise {
          position: absolute;
          inset: 0;
          opacity: 0.02;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        .lines {
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 1px,
            rgba(0,0,0,0.03) 1px,
            rgba(0,0,0,0.03) 2px
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

        .hero-title {
          font-size: clamp(5rem, 16vw, 12rem);
          line-height: 0.85;
          letter-spacing: -0.06em;
        }

        .section-rule {
          height: 4px;
          width: 100%;
          background: #000;
        }

        .card-hover {
          transition: all 100ms linear;
        }

        .card-hover:hover {
          background: #000;
          color: #fff;
        }

        .invert-hover:hover * {
          color: #fff;
          border-color: #fff;
        }

        .btn-primary {
          background: #000;
          color: #fff;
          border: 2px solid #000;
          transition: all 100ms linear;
        }

        .btn-primary:hover {
          background: #fff;
          color: #000;
        }

        .btn-secondary {
          background: transparent;
          color: #000;
          border: 2px solid #000;
          transition: all 100ms linear;
        }

        .btn-secondary:hover {
          background: #000;
          color: #fff;
        }
      `}</style>

      <section className="relative border-b-4 border-black overflow-hidden">
        <div className="noise"></div>
        <div className="lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-24 relative z-10">
          <div className="flex justify-between items-start border-b border-black pb-6 mb-10 text-xs tracking-[0.3em] uppercase">
            <div className="font-bold">VOIDZERO</div>
            <div>CPA Webinar Funnel</div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 border-4 border-black"></div>
                <div className="h-2 w-40 bg-black"></div>
              </div>

              <h1 className="display-font hero-title font-bold uppercase mb-8">
                VOID
                <br />
                ZERO
              </h1>

              <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mb-10 text-neutral-700">
                FREE CPA Affiliate Marketing Webinar — Learn to Build Organic Funnels,
                Generate Daily Commissions & Scale Ethical CPA Systems with Mr. Void.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="btn-primary px-10 py-5 uppercase tracking-[0.2em] text-sm font-semibold">
                  Join Free Webinar →
                </button>

                <button className="btn-secondary px-10 py-5 uppercase tracking-[0.2em] text-sm font-semibold">
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 border-2 border-black p-8 grid-pattern">
              <div className="text-xs uppercase tracking-[0.3em] mb-4">
                Live Metrics
              </div>

              <div className="space-y-8">
                <div>
                  <div className="text-6xl font-bold display-font">1000+</div>
                  <div className="uppercase tracking-[0.2em] text-sm mt-2">
                    Students Trained
                  </div>
                </div>

                <div>
                  <div className="text-6xl font-bold display-font">$50K+</div>
                  <div className="uppercase tracking-[0.2em] text-sm mt-2">
                    Generated Revenue
                  </div>
                </div>

                <div>
                  <div className="text-6xl font-bold display-font">5+</div>
                  <div className="uppercase tracking-[0.2em] text-sm mt-2">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">
            <div className="text-sm uppercase tracking-[0.3em] mb-6">
              Introduction
            </div>

            <h2 className="display-font text-5xl md:text-7xl font-bold leading-none tracking-tight">
              WHAT
              <br />
              IS CPA?
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="border-l-4 border-black pl-8 text-xl leading-relaxed text-neutral-700 mb-12">
              CPA affiliate marketing is a performance-based business model where users
              earn commissions whenever a visitor completes an action like signups,
              app installs, form submissions or purchases.
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {['OGAds', 'AdBlueMedia', 'CPAGrip', 'CPALead'].map((item) => (
                <div
                  key={item}
                  className="border-2 border-black p-8 flex items-center justify-center h-32 card-hover invert-hover"
                >
                  <div className="uppercase tracking-[0.3em] text-sm font-bold">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      <section className="bg-black text-white py-28 px-6 md:px-10 relative overflow-hidden">
        <div className="vertical-lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-end flex-wrap gap-8 mb-16">
            <div>
              <div className="uppercase tracking-[0.3em] text-sm mb-5">
                What You'll Learn
              </div>

              <h2 className="display-font text-5xl md:text-8xl leading-none font-bold">
                BUILD.
                <br />
                SCALE.
                <br />
                MONETIZE.
              </h2>
            </div>

            <div className="max-w-xl text-lg text-neutral-300 leading-relaxed">
              Complete roadmap covering organic CPA traffic, whitehat arbitrage,
              monetization systems and funnel building.
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-white">
            {learnCards.map((item, index) => (
              <div
                key={index}
                className="border border-white p-8 min-h-[220px] flex flex-col justify-between hover:bg-white hover:text-black transition-all duration-100"
              >
                <div className="text-xs tracking-[0.3em] uppercase">Module</div>
                <div className="display-font text-3xl leading-tight">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      <section className="py-24 md:py-32 px-6 md:px-10 grid-pattern">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end flex-wrap gap-8 mb-16">
            <div>
              <div className="uppercase tracking-[0.3em] text-sm mb-5">
                Premium Plans
              </div>

              <h2 className="display-font text-5xl md:text-8xl font-bold leading-none">
                CHOOSE
                <br />
                YOUR PATH
              </h2>
            </div>

            <div className="max-w-lg text-lg leading-relaxed text-neutral-700">
              Learn CPA Affiliate Marketing from beginner to advanced with live
              classes, mentorship and scalable systems.
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`border-2 border-black p-10 relative card-hover invert-hover ${plan.featured ? 'lg:-mt-10 lg:mb-10 bg-black text-white' : 'bg-white text-black'}`}
              >
                {plan.badge && (
                  <div className={`absolute -top-5 left-0 px-5 py-2 border-2 border-black uppercase tracking-[0.2em] text-xs font-bold ${plan.featured ? 'bg-white text-black' : 'bg-black text-white border-white'}`}>
                    {plan.badge}
                  </div>
                )}

                <div className="uppercase tracking-[0.3em] text-xs mb-5">
                  {plan.duration}
                </div>

                <h3 className="display-font text-4xl leading-tight font-bold mb-6">
                  {plan.name}
                </h3>

                <div className="text-6xl display-font font-bold mb-4">
                  {plan.price}
                </div>

                <div className="uppercase tracking-[0.2em] text-sm mb-10 opacity-70">
                  {plan.description}
                </div>

                <div className="space-y-4 border-t-2 border-current pt-8 mb-10">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex gap-4 text-lg leading-relaxed">
                      <span>+</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-5 uppercase tracking-[0.2em] text-sm font-bold border-2 transition-all duration-100 ${plan.featured ? 'bg-white text-black border-white hover:bg-black hover:text-white' : 'bg-black text-white border-black hover:bg-white hover:text-black'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 border-2 border-black p-10 h-full flex flex-col justify-between">
            <div>
              <div className="uppercase tracking-[0.3em] text-sm mb-5">
                Mentor
              </div>

              <h2 className="display-font text-6xl md:text-8xl leading-none font-bold mb-10">
                MR.
                <br />
                VOID
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-neutral-700">
              <p>
                Teaching ethical CPA affiliate marketing systems focused on long-term
                sustainable growth.
              </p>

              <p>
                Helping students and freelancers generate online income using free
                traffic methods, landing pages and monetization funnels.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                ['5+', 'Years Experience'],
                ['$50K+', 'Earnings Generated'],
                ['1000+', 'Students'],
                ['Global', 'International Reach'],
              ].map(([value, label]) => (
                <div key={label} className="border-b-4 border-black pb-8">
                  <div className="display-font text-7xl md:text-8xl font-bold leading-none mb-4">
                    {value}
                  </div>
                  <div className="uppercase tracking-[0.3em] text-sm text-neutral-600">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      <section className="bg-black text-white py-32 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_center,white,transparent_70%)]"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="uppercase tracking-[0.4em] text-sm mb-8">
            Final Call
          </div>

          <h2 className="display-font text-6xl md:text-[10rem] leading-[0.85] tracking-[-0.06em] font-bold mb-10">
            READY TO
            <br />
            FLIP THE
            <br />
            SCRIPT?
          </h2>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-neutral-300 leading-relaxed mb-14">
            Transform your income using ethical CPA affiliate marketing systems,
            webinar funnels and organic scaling strategies.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mb-20">
            <button className="bg-white text-black px-12 py-5 uppercase tracking-[0.2em] text-sm font-bold border-2 border-white hover:bg-black hover:text-white transition-all duration-100">
              Join Free Webinar
            </button>

            <button className="border-2 border-white px-12 py-5 uppercase tracking-[0.2em] text-sm font-bold hover:bg-white hover:text-black transition-all duration-100">
              Book Consultation
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left border-t border-white pt-12">
            <div>
              <div className="uppercase tracking-[0.3em] text-sm mb-6">
                What We Teach
              </div>

              <div className="space-y-4 text-lg text-neutral-300">
                <div>• Organic Traffic</div>
                <div>• Whitehat Arbitrage</div>
                <div>• Funnel Building</div>
                <div>• Scaling Systems</div>
              </div>
            </div>

            <div>
              <div className="uppercase tracking-[0.3em] text-sm mb-6">
                What We Avoid
              </div>

              <div className="space-y-4 text-lg text-neutral-300">
                <div>• Self-clicking</div>
                <div>• Fake methods</div>
                <div>• Botting</div>
                <div>• Blackhat spam</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-black py-10 px-6 md:px-10 text-sm tracking-[0.15em] uppercase flex flex-col md:flex-row gap-4 justify-between">
        <div>VOIDZERO © 2026</div>
        <div>Earnings are not guaranteed. Results vary based on effort and consistency.</div>
      </footer>
    </div>
  );
}
