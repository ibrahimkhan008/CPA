"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WebinarForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  if (submitted) {
    return (
      <div className="border-2 border-black p-10 text-center">
        <div className="display-font text-4xl font-bold mb-4">You&apos;re In!</div>
        <p className="text-neutral-600 body-text mb-6">
          Check your email for webinar access details. See you in the session!
        </p>
        <button
          type="button"
          onClick={() => router.refresh()}
          className="text-sm underline"
        >
          Register another
        </button>
      </div>
    );
  }

  return (
    <div className="lg:col-span-7 border-2 border-black p-10">
      <div className="label-text text-neutral-600 mb-8">
        Reserve Your Spot
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="name" className="label-text font-bold mb-3 block">
            Full Name<span className="text-black ml-1">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            className="w-full border-2 border-black p-4 text-base focus:outline-none focus:border-[4px] placeholder:text-neutral-400 placeholder:italic bg-white body-text"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="label-text font-bold mb-3 block">
            Email Address<span className="text-black ml-1">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            className="w-full border-2 border-black p-4 text-base focus:outline-none focus:border-[4px] placeholder:text-neutral-400 placeholder:italic bg-white body-text"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="label-text font-bold mb-3 block">
            WhatsApp Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            className="w-full border-2 border-black p-4 text-base focus:outline-none focus:border-[4px] placeholder:text-neutral-400 placeholder:italic bg-white body-text"
          />
        </div>

        <div>
          <label htmlFor="interest" className="label-text font-bold mb-3 block">
            What interests you most?
          </label>
          <select
            id="interest"
            name="interest"
            className="w-full border-2 border-black p-4 text-base focus:outline-none focus:border-[4px] bg-white body-text"
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
        >
          {loading ? "Registering..." : "Register Free →"}
        </button>

        <p className="text-xs text-neutral-500 text-center leading-relaxed">
          No spam. No payment required. We&apos;ll send webinar access details to
          your email.
        </p>
      </form>
    </div>
  );
}