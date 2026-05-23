"use client";

import { useState } from "react";
import Link from "next/link";

const filters = ["All", "OGAds", "AdBlueMedia", "Telegram", "Student Proofs"];

const proofs = [
  {
    title: "OGAds Revenue",
    category: "OGAds",
    verified: true,
    height: "h-[420px]",
  },
  {
    title: "Telegram CPA Leads",
    category: "Telegram",
    verified: true,
    height: "h-[340px]",
  },
  {
    title: "Student Commission",
    category: "Student Proofs",
    verified: true,
    height: "h-[500px]",
  },
  {
    title: "AdBlueMedia Earnings",
    category: "AdBlueMedia",
    verified: true,
    height: "h-[360px]",
  },
  {
    title: "Telegram Funnel Results",
    category: "Telegram",
    verified: true,
    height: "h-[440px]",
  },
  {
    title: "Student Growth Metrics",
    category: "Student Proofs",
    verified: true,
    height: "h-[380px]",
  },
  {
    title: "Network Dashboard",
    category: "OGAds",
    verified: true,
    height: "h-[460px]",
  },
  {
    title: "Elite Student Results",
    category: "Student Proofs",
    verified: true,
    height: "h-[340px]",
  },
];

export function ProofsClient() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredProofs =
    activeFilter === "All"
      ? proofs
      : proofs.filter((item) => item.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="relative border-b-4 border-black overflow-hidden">
        <div className="noise"></div>
        <div className="lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32 relative z-10">
          <div className="flex justify-between border-b border-black pb-6 mb-16">
            <Link
              href="/"
              className="label-text font-bold hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-2"
            >
              VoidZero
            </Link>
            <div className="label-text text-neutral-600">
              Verified Results Archive
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-14 items-end">
            <div className="lg:col-span-9">
              <div className="label-text text-neutral-600 mb-6">
                Earnings &amp; Student Results
              </div>

              <h1 className="display-font text-[4.5rem] md:text-[9rem] leading-[0.82] tracking-[-0.06em] font-bold uppercase mb-10">
                REAL
                <br />
                EARNINGS,
                <br />
                REAL RESULTS
              </h1>

              <p className="text-xl md:text-2xl max-w-4xl leading-relaxed text-neutral-700 body-text">
                Explore verified CPA earnings, Telegram growth screenshots,
                network dashboards and student transformation proof galleries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* Filter bar */}
      <section className="sticky top-[73px] z-30 bg-white text-black border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-wrap gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-4 border-2 border-black text-xs font-bold tracking-[0.15em] uppercase transition-all duration-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-2 ${
                activeFilter === filter
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry-style proof gallery */}
      <section className="bg-black text-white py-24 md:py-32 px-6 md:px-10 relative overflow-hidden">
        <div className="vertical-lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="columns-1 md:columns-2 lg:columns-4 gap-8 space-y-8">
            {filteredProofs.map((proof, index) => (
              <div
                key={`${proof.title}-${index}`}
                onClick={() => setSelectedImage(index)}
                className={`break-inside-avoid border-2 border-white overflow-hidden cursor-pointer proof-hover ${proof.height}`}
              >
                <div className="h-full flex flex-col justify-between p-8">
                  <div className="flex justify-between items-start gap-4 mb-10">
                    <div className="label-text border border-white px-4 py-2">
                      {proof.category}
                    </div>

                    {proof.verified && (
                      <div className="label-text border border-white px-4 py-2 text-neutral-400 border-neutral-500">
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

                      <div className="label-text text-neutral-500">
                        Lazy Loaded Image Placeholder
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="display-font text-3xl font-bold leading-tight mb-4">
                      {proof.title}
                    </h3>

                    <div className="label-text text-neutral-500">
                      Click To Preview Fullscreen
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen modal */}
      {selectedImage !== null && filteredProofs[selectedImage] && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center px-6">
          <button
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
            className="absolute top-8 right-8 border-2 border-white w-14 h-14 flex items-center justify-center text-2xl hover:bg-white hover:text-black transition-all duration-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-2"
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
            aria-label="Previous"
            className="absolute left-6 md:left-10 border-2 border-white w-14 h-14 flex items-center justify-center text-2xl hover:bg-white hover:text-black transition-all duration-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-2"
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
            aria-label="Next"
            className="absolute right-6 md:right-10 border-2 border-white w-14 h-14 flex items-center justify-center text-2xl hover:bg-white hover:text-black transition-all duration-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            →
          </button>

          <div className="max-w-5xl w-full border-4 border-white overflow-hidden">
            <div className="aspect-[4/3] flex items-center justify-center border-b-2 border-white bg-white/5">
              <div className="text-center px-10">
                <div className="display-font text-6xl md:text-8xl font-bold leading-none mb-6">
                  Fullscreen
                  <br />
                  Preview
                </div>

                <div className="label-text text-neutral-500">
                  Proof Image Modal Placeholder
                </div>
              </div>
            </div>

            <div className="p-8 flex justify-between items-center flex-wrap gap-6">
              <div>
                <div className="label-text text-neutral-500 mb-2">
                  Current Proof
                </div>

                <div className="display-font text-3xl font-bold leading-none">
                  {filteredProofs[selectedImage].title}
                </div>
              </div>

              <div className="label-text text-neutral-500">
                {selectedImage + 1} / {filteredProofs.length}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="section-rule"></div>

      {/* Final CTA */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-neutral-50">
        <div className="max-w-6xl mx-auto border-4 border-black p-10 md:p-16 text-center">
          <div className="label-text text-neutral-600 mb-6 text-black">
            Start Your Journey
          </div>

          <h2 className="display-font text-5xl md:text-[8rem] leading-[0.85] tracking-[-0.06em] font-bold uppercase mb-10 text-black">
            START YOUR
            <br />
            JOURNEY
          </h2>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-neutral-700 mb-14 body-text">
            Learn ethical CPA marketing systems, build scalable traffic funnels
            and join the VoidZero mentorship ecosystem.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link
              href="/consultation"
              className="btn-primary px-12 py-6 text-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
              style={{ backgroundColor: "#000", color: "#fff", borderColor: "#000" }}
            >
              Go To Consultation →
            </Link>

            <Link
              href="/pricing"
              className="btn-secondary px-12 py-6 text-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
              style={{ backgroundColor: "#000", color: "#fff", borderColor: "#000" }}
            >
              View Plans →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}