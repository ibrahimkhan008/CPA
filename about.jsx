export default function VoidZeroAboutPage() {
  const stats = [
    {
      value: '5+',
      label: 'Years Experience',
    },
    {
      value: '$50K+',
      label: 'CPA Earnings',
    },
    {
      value: '1000+',
      label: 'Students Mentored',
    },
    {
      value: '24/7',
      label: 'Community Support',
    },
  ];

  const timeline = [
    {
      year: '2021',
      title: 'Started CPA Journey',
      description: 'Began experimenting with affiliate funnels and organic traffic systems.',
    },
    {
      year: '2022',
      title: 'Scaled First Profitable Funnels',
      description: 'Built sustainable CPA systems using Telegram and Instagram growth.',
    },
    {
      year: '2023',
      title: 'Built VoidZero Community',
      description: 'Started mentoring beginners and creating educational content.',
    },
    {
      year: '2024',
      title: 'Reached 1000+ Students',
      description: 'Expanded mentorship and community support for aspiring affiliates.',
    },
  ];

  const trustBadges = [
    'Verified Mentor',
    '1000+ Students',
    'Ethical CPA Systems',
    'Private Community',
    'Organic Traffic Expert',
    'Telegram Premium Access',
  ];

  const impactStories = [
    {
      before: 'No affiliate knowledge',
      after: 'Built first CPA funnel within weeks',
    },
    {
      before: 'Struggling with traffic',
      after: 'Generated consistent organic leads',
    },
    {
      before: 'No monetization strategy',
      after: 'Scaled Telegram-based CPA systems',
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

        .glass {
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.15);
        }

        .section-rule {
          width: 100%;
          height: 4px;
          background: white;
        }

        .card-hover {
          transition: all 150ms linear;
        }

        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 40px rgba(255,255,255,0.08);
        }
      `}</style>

      <section className="relative overflow-hidden border-b-4 border-white">
        <div className="vertical-lines absolute inset-0" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32 relative z-10">
          <div className="flex justify-between border-b border-white pb-6 mb-16 uppercase tracking-[0.3em] text-xs">
            <div className="font-bold">VoidZero About</div>
            <div>Official Mentor Profile</div>
          </div>

          <div className="grid lg:grid-cols-12 gap-14 items-center">
            <div className="lg:col-span-7">
              <div className="uppercase tracking-[0.3em] text-sm mb-6 text-neutral-400">
                Meet The Mentor
              </div>

              <h1 className="display-font text-[4.5rem] md:text-[9rem] leading-[0.82] tracking-[-0.06em] font-bold uppercase mb-10">
                SAY HI
                <br />
                TO MR.
                <br />
                VOID 👋
              </h1>

              <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-neutral-300">
                Helping beginners learn ethical CPA affiliate marketing,
                organic traffic systems and sustainable monetization strategies.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="border-4 border-white aspect-[4/5] bg-white/5 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="display-font text-6xl font-bold mb-4">
                    MR.
                    <br />
                    VOID
                  </div>

                  <div className="uppercase tracking-[0.25em] text-xs text-neutral-400">
                    Mentor Photo Placeholder
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule" />

      <section className="bg-white text-black py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="uppercase tracking-[0.3em] text-sm mb-5 text-neutral-500">
              Stats & Impact
            </div>

            <h2 className="display-font text-5xl md:text-8xl leading-none font-bold uppercase">
              THE
              <br />
              NUMBERS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-black">
            {stats.map((item, index) => (
              <div
                key={index}
                className="border border-black p-10 text-center min-h-[280px] flex flex-col justify-center hover:bg-black hover:text-white transition-all duration-100"
              >
                <div className="display-font text-6xl md:text-7xl font-bold mb-6">
                  {item.value}
                </div>

                <div className="uppercase tracking-[0.2em] text-sm opacity-70">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule bg-black" />

      <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-10">
        <div className="vertical-lines absolute inset-0" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="uppercase tracking-[0.3em] text-sm mb-5 text-neutral-400">
              Mission Statement
            </div>

            <h2 className="display-font text-5xl md:text-8xl leading-none font-bold uppercase mb-10">
              WHY
              <br />
              VOIDZERO
              <br />
              EXISTS
            </h2>
          </div>

          <div className="glass p-10 md:p-16 card-hover">
            <p className="text-xl md:text-2xl leading-relaxed text-neutral-200 mb-10">
              VoidZero was created to simplify affiliate marketing for beginners who feel overwhelmed by fake promises, misleading strategies and complicated systems.
            </p>

            <p className="text-xl md:text-2xl leading-relaxed text-neutral-300 mb-10">
              The goal is to teach ethical CPA marketing methods using organic traffic, Telegram communities and scalable funnel systems that can be understood even by complete beginners.
            </p>

            <p className="text-xl md:text-2xl leading-relaxed text-neutral-400">
              Instead of shortcuts and unrealistic hype, the focus remains on consistency, community support and sustainable online income strategies.
            </p>
          </div>
        </div>
      </section>

      <div className="section-rule" />

      <section className="bg-white text-black py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end flex-wrap gap-8 mb-20">
            <div>
              <div className="uppercase tracking-[0.3em] text-sm mb-5 text-neutral-500">
                Journey Timeline
              </div>

              <h2 className="display-font text-5xl md:text-8xl leading-none font-bold uppercase">
                THE
                <br />
                JOURNEY
              </h2>
            </div>
          </div>

          <div className="border-l-4 border-black ml-4 md:ml-10">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative pl-10 md:pl-16 pb-20"
              >
                <div className="absolute -left-[18px] top-2 w-8 h-8 bg-black border-4 border-white" />

                <div className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-4">
                  {item.year}
                </div>

                <h3 className="display-font text-4xl md:text-5xl font-bold mb-6 leading-none">
                  {item.title}
                </h3>

                <p className="text-xl leading-relaxed text-neutral-700 max-w-3xl">
                  {item.description}
                </p>
              </div>
            ))}
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
                Student Impact
              </div>

              <h2 className="display-font text-5xl md:text-8xl leading-none font-bold uppercase">
                REAL
                <br />
                TRANSFORMATIONS
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 border border-white">
            {impactStories.map((item, index) => (
              <div
                key={index}
                className="border border-white p-10 min-h-[320px] flex flex-col justify-between hover:bg-white hover:text-black transition-all duration-100 card-hover"
              >
                <div>
                  <div className="uppercase tracking-[0.2em] text-xs opacity-60 mb-5">
                    Before
                  </div>

                  <div className="display-font text-3xl font-bold leading-tight mb-10">
                    {item.before}
                  </div>

                  <div className="uppercase tracking-[0.2em] text-xs opacity-60 mb-5">
                    After
                  </div>

                  <div className="display-font text-4xl font-bold leading-tight">
                    {item.after}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule" />

      <section className="bg-white text-black py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="uppercase tracking-[0.3em] text-sm mb-5 text-neutral-500">
              Why Trust Us
            </div>

            <h2 className="display-font text-5xl md:text-8xl leading-none font-bold uppercase">
              TRUST &
              <br />
              PROOF
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-black mb-20">
            {trustBadges.map((item, index) => (
              <div
                key={index}
                className="border border-black min-h-[220px] flex items-center justify-center text-center p-8 hover:bg-black hover:text-white transition-all duration-100"
              >
                <div>
                  <div className="text-5xl mb-6">✓</div>

                  <div className="display-font text-3xl font-bold leading-tight">
                    {item}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-4 border-black p-10 md:p-16 text-center">
            <div className="uppercase tracking-[0.3em] text-sm mb-6 text-neutral-500">
              Final CTA
            </div>

            <h2 className="display-font text-5xl md:text-[8rem] leading-[0.85] tracking-[-0.06em] font-bold uppercase mb-10">
              JOIN THE
              <br />
              COMMUNITY
            </h2>

            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-neutral-700 mb-14">
              Connect with thousands of aspiring affiliate marketers learning ethical CPA systems and scalable traffic strategies.
            </p>

            <button className="bg-black text-white border-2 border-black px-12 py-6 uppercase tracking-[0.25em] text-sm font-bold hover:bg-white hover:text-black transition-all duration-100">
              Join VoidZero
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
