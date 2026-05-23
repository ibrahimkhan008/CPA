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
      telegram: (form.elements.namedItem("telegram") as HTMLInputElement).value,
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
      <div className="lg:col-span-7 border-4 border-black bg-black" suppressHydrationWarning>
        <div className="p-10">
          <div className="label-text text-neutral-500 mb-6">Loading...</div>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="lg:col-span-7 border-4 border-black bg-black text-white relative overflow-hidden" suppressHydrationWarning>
        <div className="noise"></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-white" />
        <div className="relative z-10 p-10">
          <div className="label-text text-neutral-400 mb-6">Registration Confirmed</div>

          <div className="display-font text-5xl md:text-7xl font-bold tracking-tight leading-none mb-8 text-white">
            YOU&apos;RE IN!
          </div>

          <p className="text-neutral-400 body-text mb-12 text-lg text-neutral-300" suppressHydrationWarning>
            Check your inbox for access details. The session starts soon.
          </p>

          <div className="border-t border-white/20 pt-10" suppressHydrationWarning>
            <div className="grid grid-cols-1 gap-8">
              {[
                { step: "01", text: "Check your inbox for a confirmation email" },
                { step: "02", text: "Join the free webinar at the scheduled time" },
                { step: "03", text: "Bring your questions — live Q&A included" },
              ].map(({ step, text }) => (
                <div key={step} className="flex items-start gap-6">
                  <span className="label-text text-neutral-500 shrink-0">{step}</span>
                  <span className="text-neutral-300 body-text text-base">{text}</span>
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
            className="w-full border-2 border-black p-4 text-base focus:outline-none focus:border-[4px] placeholder:text-neutral-400 placeholder:italic bg-white body-text text-black"
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
            className="w-full border-2 border-black p-4 text-base focus:outline-none focus:border-[4px] placeholder:text-neutral-400 placeholder:italic bg-white body-text text-black"
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
            className="w-full border-2 border-black p-4 text-base focus:outline-none focus:border-[4px] placeholder:text-neutral-400 placeholder:italic bg-white body-text text-black"
            suppressHydrationWarning
          />
        </div>

        <div suppressHydrationWarning>
          <label htmlFor="telegram" className="label-text font-bold mb-3 block" suppressHydrationWarning>
            Telegram Username
          </label>
          <input
            id="telegram"
            name="telegram"
            type="text"
            placeholder="@yourusername"
            className="w-full border-2 border-black p-4 text-base focus:outline-none focus:border-[4px] placeholder:text-neutral-400 placeholder:italic bg-white body-text text-black"
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
            className="w-full border-2 border-black p-4 text-base focus:outline-none focus:border-[4px] bg-white body-text text-black"
            suppressHydrationWarning
          >
            <option value="Free traffic methods">Free traffic methods</option>
            <option value="Landing page creation">Landing page creation</option>
            <option value="Whitehat arbitrage">Whitehat arbitrage</option>
            <option value="Campaign scaling">Campaign scaling</option>
            <option value="All of the above">All of the above</option>
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