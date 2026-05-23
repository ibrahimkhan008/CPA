"use client";

import { useState, useEffect } from "react";

export default function WebinarForm() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      interest: (form.elements.namedItem("interest") as HTMLSelectElement).value,
    };

    try {
      const res = await fetch("/api/webinar-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!mounted) {
    return (
      <div className="lg:col-span-7 border-2 border-black p-10" suppressHydrationWarning>
        <div className="label-text text-neutral-600 mb-8" suppressHydrationWarning>
          Reserve Your Spot
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="lg:col-span-7 border-2 border-black p-10 text-center bg-white text-black relative overflow-hidden">
        <div className="noise"></div>
        <div className="absolute top-0 left-0 right-0 h-2 bg-black" />
        <div className="relative z-10">
          <div className="display-font text-5xl md:text-6xl font-bold mb-4 text-black" suppressHydrationWarning>
            You're In!
          </div>

          <p className="text-neutral-600 body-text mb-10 text-lg text-black" suppressHydrationWarning>
            Check your email for webinar access details. See you in the session!
          </p>

          <div className="border-t border-black pt-8" suppressHydrationWarning>
            <p className="label-text text-neutral-500 mb-6">What to do next</p>
            <div className="grid grid-cols-1 gap-4 text-left">
              {[
                "Check your inbox for a confirmation email",
                "Join the free webinar at the scheduled time",
                "Bring your questions — live Q&amp;A included",
              ].map((step) => (
                <div key={step} className="flex gap-4 text-base text-neutral-700 body-text">
                  <span className="text-black font-bold">→</span>
                  <span dangerouslySetInnerHTML={{ __html: step }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:col-span-7 border-2 border-black p-10" suppressHydrationWarning>
      <div className="label-text text-neutral-600 mb-8" suppressHydrationWarning>
        Reserve Your Spot
      </div>

      <form onSubmit={handleSubmit} className="space-y-8" suppressHydrationWarning>
        <div suppressHydrationWarning>
          <label htmlFor="name" className="label-text font-bold mb-3 block" suppressHydrationWarning>
            Full Name<span className="text-black ml-1">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            className="w-full border-2 border-black p-4 text-base focus:outline-none focus:border-[4px] placeholder:text-neutral-400 placeholder:italic bg-white body-text"
            required
            suppressHydrationWarning
          />
        </div>

        <div suppressHydrationWarning>
          <label htmlFor="email" className="label-text font-bold mb-3 block" suppressHydrationWarning>
            Email Address<span className="text-black ml-1">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            className="w-full border-2 border-black p-4 text-base focus:outline-none focus:border-[4px] placeholder:text-neutral-400 placeholder:italic bg-white body-text"
            required
            suppressHydrationWarning
          />
        </div>

        <div suppressHydrationWarning>
          <label htmlFor="phone" className="label-text font-bold mb-3 block" suppressHydrationWarning>
            WhatsApp Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            className="w-full border-2 border-black p-4 text-base focus:outline-none focus:border-[4px] placeholder:text-neutral-400 placeholder:italic bg-white body-text"
            suppressHydrationWarning
          />
        </div>

        <div suppressHydrationWarning>
          <label htmlFor="interest" className="label-text font-bold mb-3 block" suppressHydrationWarning>
            What interests you most?
          </label>
          <select
            id="interest"
            name="interest"
            className="w-full border-2 border-black p-4 text-base focus:outline-none focus:border-[4px] bg-white body-text"
            suppressHydrationWarning
          >
            <option>Free traffic methods</option>
            <option>Landing page creation</option>
            <option>Whitehat arbitrage</option>
            <option>Campaign scaling</option>
            <option>All of the above</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full btn-primary py-5 text-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3 disabled:opacity-50 disabled:cursor-not-allowed"
          suppressHydrationWarning
        >
          {loading ? "Registering..." : "Register Free →"}
        </button>

        <p className="text-xs text-neutral-500 text-center leading-relaxed" suppressHydrationWarning>
          No spam. No payment required. We&apos;ll send webinar access details to
          your email.
        </p>
      </form>
    </div>
  );
}