import { useState } from 'react';

export default function VoidZeroProofsPage() {
  const filters = [
    'All',
    'OGAds',
    'AdBlueMedia',
    'Telegram',
    'Student Proofs',
  ];

  const proofs = [
    {
      title: 'OGAds Revenue',
      category: 'OGAds',
      verified: true,
      height: 'h-[420px]',
    },
    {
      title: 'Telegram CPA Leads',
      category: 'Telegram',
      verified: true,
      height: 'h-[340px]',
    },
    {
      title: 'Student Commission',
      category: 'Student Proofs',
      verified: true,
      height: 'h-[500px]',
    },
    {
      title: 'AdBlueMedia Earnings',
      category: 'AdBlueMedia',
      verified: true,
      height: 'h-[360px]',
    },
    {
      title: 'Telegram Funnel Results',
      category: 'Telegram',
      verified: true,
      height: 'h-[440px]',
    },
    {
      title: 'Student Growth Metrics',
      category: 'Student Proofs',
      verified: true,
      height: 'h-[380px]',
    },
    {
      title: 'Network Dashboard',
      category: 'OGAds',
      verified: true,
      height: 'h-[460px]',
    },
    {
      title: 'Elite Student Results',
      category: 'Student Proofs',
      verified: true,
      height: 'h-[340px]',
    },
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredProofs =
    activeFilter === 'All'
      ? proofs
      : proofs.filter((item) => item.category === activeFilter);

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

        .proof-hover {
          transition: all 150ms linear;
        }

        .proof-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 40px rgba(255,255,255,0.08);
        }
      `}</style>

      <section className="relative overflow-hidden border-b-4 border-white">
        <div className="vertical-lines absolute inset-0" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32 relative z-10">
          <div className="flex justify-between border-b border-white pb-6 mb-16 uppercase tracking-[0.3em] text-xs">
            <div className="font-bold">VoidZero Proofs</div>
            <div>Verified Results Archive</div>
          </div>

          <div className="grid lg:grid-cols-12 gap-14 items-end">
            <div className="lg:col-span-9">
              <div className="uppercase tracking-[0.3em] text-sm mb-6 text-neutral-400">
                Earnings & Student Results
              </div>

              <h1 className="display-font text-[4.5rem] md:text-[9rem] leading-[0.82] tracking-[-0.06em] font-bold uppercase mb-10">
                REAL
                <br />
                EARNINGS,
                <br />
                REAL RESULTS
              </h1>

              <p className="text-xl md:text-2xl max-w-4xl leading-relaxed text-neutral-300">
                Explore verified CPA earnings, Telegram growth screenshots,
                network dashboards and student transformation proof galleries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule" />

      <section className="py-12 px-6 md:px-10 bg-white text-black sticky top-0 z-30 border-b-4 border-black">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-4 border-2 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-100 ${
                activeFilter === filter
                  ? 'bg-black text-white border-black'
                  : 'border-black hover:bg-black hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-black py-24 md:py-32 px-6 md:px-10 relative overflow-hidden">
        <div className="vertical-lines absolute inset-0" />

        <div className="max-w-7xl mx-auto relative z-10 columns-1 md:columns-2 lg:columns-4 gap-8 space-y-8">
          {filteredProofs.map((proof, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`break-inside-avoid border-2 border-white overflow-hidden cursor-pointer glass proof-hover ${proof.height}`}
            >
              <div className="h-full flex flex-col justify-between p-8 bg-gradient-to-b from-white/5 to-white/0">
                <div className="flex justify-between items-start gap-4 mb-10">
                  <div className="uppercase tracking-[0.2em] text-[11px] border border-white px-4 py-2">
                    {proof.category}
                  </div>

                  {proof.verified && (
                    <div className="border border-white px-4 py-2 text-[11px] uppercase tracking-[0.2em]">
                      ✓ Verified
                    </div>
                  )}
                </div>

                <div className="flex-1 flex items-center justify-center border-2 border-dashed border-white/20 mb-10">
                  <div className="text-center px-6">
                    <div className="display-font text-3xl md:text-4xl font-bold leading-none mb-4">
                      Proof
                      <br />
                      Preview
                    </div>

                    <div className="uppercase tracking-[0.2em] text-[11px] text-neutral-400">
                      Lazy Loaded Image Placeholder
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="display-font text-3xl font-bold leading-tight mb-4">
                    {proof.title}
                  </h3>

                  <div className="uppercase tracking-[0.2em] text-[11px] text-neutral-400">
                    Click To Preview Fullscreen
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center px-6">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 border-2 border-white w-14 h-14 flex items-center justify-center text-2xl hover:bg-white hover:text-black transition-all duration-100"
          >
            ×
          </button>

          <button
            onClick={() =>
              setSelectedImage(
                selectedImage === 0
                  ? filteredProofs.length - 1
                  : selectedImage - 1
              )
            }
            className="absolute left-6 md:left-10 border-2 border-white w-14 h-14 flex items-center justify-center text-2xl hover:bg-white hover:text-black transition-all duration-100"
          >
            ←
          </button>

          <button
            onClick={() =>
              setSelectedImage(
                selectedImage === filteredProofs.length - 1
                  ? 0
                  : selectedImage + 1
              )
            }
            className="absolute right-6 md:right-10 border-2 border-white w-14 h-14 flex items-center justify-center text-2xl hover:bg-white hover:text-black transition-all duration-100"
          >
            →
          </button>

          <div className="max-w-5xl w-full border-4 border-white glass overflow-hidden">
            <div className="aspect-[4/3] flex items-center justify-center border-b border-white bg-white/5">
              <div className="text-center px-10">
                <div className="display-font text-6xl md:text-8xl font-bold leading-none mb-6">
                  Fullscreen
                  <br />
                  Preview
                </div>

                <div className="uppercase tracking-[0.2em] text-xs text-neutral-400">
                  Proof Image Modal Placeholder
                </div>
              </div>
            </div>

            <div className="p-8 flex justify-between items-center flex-wrap gap-6">
              <div>
                <div className="uppercase tracking-[0.2em] text-[11px] text-neutral-400 mb-2">
                  Current Proof
                </div>

                <div className="display-font text-3xl font-bold leading-none">
                  {filteredProofs[selectedImage]?.title}
                </div>
              </div>

              <div className="uppercase tracking-[0.2em] text-xs text-neutral-400">
                {selectedImage + 1} / {filteredProofs.length}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="section-rule" />

      <section className="bg-white text-black py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto border-4 border-black p-10 md:p-16 text-center">
          <div className="uppercase tracking-[0.3em] text-sm mb-6 text-neutral-500">
            Final CTA
          </div>

          <h2 className="display-font text-5xl md:text-[8rem] leading-[0.85] tracking-[-0.06em] font-bold uppercase mb-10">
            START YOUR
            <br />
            JOURNEY
          </h2>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-neutral-700 mb-14">
            Learn ethical CPA marketing systems, build scalable traffic funnels and join the VoidZero mentorship ecosystem.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-black text-white border-2 border-black px-12 py-6 uppercase tracking-[0.25em] text-sm font-bold hover:bg-white hover:text-black transition-all duration-100">
              Go To Consultation
            </button>

            <button className="border-2 border-black px-12 py-6 uppercase tracking-[0.25em] text-sm font-bold hover:bg-black hover:text-white transition-all duration-100">
              View Plans
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
