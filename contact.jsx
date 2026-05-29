export default function VoidZeroContactPage() {
  const contactMethods = [
    {
      title: 'Instagram',
      handle: '@voidzero.in',
      description: 'Follow for updates, reels and CPA content.',
      button: 'Open Instagram',
    },
    {
      title: 'Telegram',
      handle: 't.me/voidzero',
      description: 'Join the official VoidZero community channel.',
      button: 'Join Community',
    },
    {
      title: 'WhatsApp',
      handle: '+91 00000 00000',
      description: 'Direct support and mentorship communication.',
      button: 'Start Chat',
    },
    {
      title: 'Email',
      handle: 'support@voidzero.in',
      description: 'Official support and partnership inquiries.',
      button: 'Send Email',
    },
  ];

  const socialLinks = [
    'Instagram',
    'Telegram',
    'WhatsApp',
    'YouTube',
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
            rgba(0,0,0,0.05) 1px,
            rgba(0,0,0,0.05) 2px
          );
          background-size: 4px 100%;
        }

        .section-rule {
          width: 100%;
          height: 4px;
          background: black;
        }

        .glow-hover {
          transition: all 150ms linear;
        }

        .glow-hover:hover {
          box-shadow: 0 0 40px rgba(0,0,0,0.2);
          transform: translateY(-4px);
        }
      `}</style>

      <section className="relative overflow-hidden border-b-4 border-black lines">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
          <div className="flex justify-between border-b border-black pb-6 mb-16 uppercase tracking-[0.3em] text-xs">
            <div className="font-bold">VoidZero Contact</div>
            <div>Support Available</div>
          </div>

          <div className="grid lg:grid-cols-12 gap-14 items-end">
            <div className="lg:col-span-8">
              <div className="uppercase tracking-[0.3em] text-sm mb-6 text-neutral-500">
                Contact & Support
              </div>

              <h1 className="display-font text-[5rem] md:text-[10rem] leading-[0.82] tracking-[-0.06em] font-bold uppercase mb-10">
                GET IN
                <br />
                TOUCH
              </h1>

              <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-neutral-700 mb-12">
                Reach out for mentorship support, collaboration inquiries,
                webinar access or CPA guidance through any official VoidZero channel.
              </p>
            </div>

            <div className="lg:col-span-4 border-2 border-black p-8 bg-white">
              <div className="uppercase tracking-[0.3em] text-xs mb-8 text-neutral-500">
                Support Hours
              </div>

              <div className="space-y-6">
                <div>
                  <div className="uppercase tracking-[0.2em] text-[11px] text-neutral-500 mb-2">
                    Monday - Friday
                  </div>
                  <div className="display-font text-3xl font-bold">
                    10 AM — 8 PM
                  </div>
                </div>

                <div>
                  <div className="uppercase tracking-[0.2em] text-[11px] text-neutral-500 mb-2">
                    Weekend Support
                  </div>
                  <div className="display-font text-3xl font-bold">
                    Limited Access
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule" />

      <section className="py-24 md:py-32 px-6 md:px-10 bg-black text-white relative overflow-hidden">
        <div className="vertical-lines absolute inset-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-end flex-wrap gap-8 mb-16">
            <div>
              <div className="uppercase tracking-[0.3em] text-sm mb-5 text-neutral-400">
                Contact Methods
              </div>

              <h2 className="display-font text-5xl md:text-8xl leading-none font-bold uppercase">
                REACH US
                <br />
                ANYTIME
              </h2>
            </div>

            <div className="max-w-xl text-lg leading-relaxed text-neutral-300">
              Choose your preferred support platform and connect directly with the VoidZero team.
            </div>
          </div>

          <div className="grid md:grid-cols-2 border border-white">
            {contactMethods.map((item, index) => (
              <div
                key={index}
                className="border border-white p-10 min-h-[320px] flex flex-col justify-between hover:bg-white hover:text-black transition-all duration-100 glow-hover"
              >
                <div>
                  <div className="uppercase tracking-[0.2em] text-[11px] opacity-60 mb-6">
                    Official Contact
                  </div>

                  <h3 className="display-font text-5xl font-bold leading-none mb-6">
                    {item.title}
                  </h3>

                  <div className="text-xl mb-6 font-semibold">
                    {item.handle}
                  </div>

                  <p className="text-lg leading-relaxed opacity-80 max-w-md">
                    {item.description}
                  </p>
                </div>

                <button className="mt-10 border-2 border-current px-8 py-5 uppercase tracking-[0.25em] text-sm font-bold hover:bg-black hover:text-white transition-all duration-100">
                  {item.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule bg-white" />

      <section className="py-24 md:py-32 px-6 md:px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5">
            <div className="uppercase tracking-[0.3em] text-sm mb-5 text-neutral-500">
              Contact Form
            </div>

            <h2 className="display-font text-5xl md:text-8xl leading-none font-bold uppercase mb-10">
              SEND A
              <br />
              MESSAGE
            </h2>

            <p className="text-xl leading-relaxed text-neutral-700 max-w-md">
              Fill the form below and the support team will respond as soon as possible.
            </p>
          </div>

          <div className="lg:col-span-7 border-2 border-black p-10">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                placeholder="Full Name"
                className="border-b-2 border-black bg-transparent px-2 py-5 outline-none placeholder:text-neutral-400 italic"
              />

              <input
                placeholder="Email Address"
                className="border-b-2 border-black bg-transparent px-2 py-5 outline-none placeholder:text-neutral-400 italic"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows={7}
              className="w-full border-2 border-black bg-transparent p-6 outline-none placeholder:text-neutral-400 italic mb-10 resize-none"
            />

            <button className="w-full bg-black text-white border-2 border-black py-5 uppercase tracking-[0.25em] text-sm font-bold hover:bg-white hover:text-black transition-all duration-100">
              Submit Message
            </button>
          </div>
        </div>
      </section>

      <div className="section-rule" />

      <section className="bg-black text-white py-24 md:py-32 px-6 md:px-10 relative overflow-hidden">
        <div className="vertical-lines absolute inset-0" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="uppercase tracking-[0.3em] text-sm mb-5 text-neutral-400">
            Social Links
          </div>

          <h2 className="display-font text-5xl md:text-[9rem] leading-[0.85] tracking-[-0.06em] font-bold uppercase mb-16">
            CONNECT
            <br />
            EVERYWHERE
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((item, index) => (
              <button
                key={index}
                className="border-2 border-white min-h-[180px] text-2xl md:text-3xl uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all duration-100 glow-hover"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
