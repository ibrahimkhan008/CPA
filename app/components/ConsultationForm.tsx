"use client";

import { useState, useEffect, useRef } from "react";
import SuccessModal from "@/components/ui/SuccessModal";

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  theme?: {
    color?: string;
  };
  modal?: {
    ondismiss?: () => void;
  };
  handler?: (response: RazorpayResponse) => void;
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature?: string;
}

interface RazorpayInstance {
  open: () => void;
  on: (event: string, handler: (...args: unknown[]) => void) => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  experience: string;
  telegram: string;
  network: string;
}

// Input sanitization — strip HTML tags and trim whitespace
function sanitize(value: string): string {
  return value.replace(/<[^>]*>/g, "").trim().slice(0, 500);
}

const CODES: Array<{ code: string; label: string; digits: number }> = [
  { code: "+91", label: "+91 India", digits: 10 },
  { code: "+1", label: "+1 USA / Canada", digits: 10 },
  { code: "+44", label: "+44 UK", digits: 10 },
  { code: "+92", label: "+92 Pakistan", digits: 10 },
  { code: "+880", label: "+880 Bangladesh", digits: 10 },
  { code: "+94", label: "+94 Sri Lanka", digits: 9 },
  { code: "+60", label: "+60 Malaysia", digits: 9 },
  { code: "+65", label: "+65 Singapore", digits: 8 },
  { code: "+66", label: "+66 Thailand", digits: 9 },
  { code: "+62", label: "+62 Indonesia", digits: 11 },
  { code: "+84", label: "+84 Vietnam", digits: 9 },
  { code: "+63", label: "+63 Philippines", digits: 10 },
  { code: "+95", label: "+95 Myanmar", digits: 9 },
  { code: "+856", label: "+856 Laos", digits: 9 },
  { code: "+855", label: "+855 Cambodia", digits: 9 },
  { code: "+673", label: "+673 Brunei", digits: 7 },
  { code: "+82", label: "+82 South Korea", digits: 10 },
  { code: "+81", label: "+81 Japan", digits: 10 },
  { code: "+86", label: "+86 China", digits: 11 },
  { code: "+852", label: "+852 Hong Kong", digits: 8 },
  { code: "+886", label: "+886 Taiwan", digits: 9 },
  { code: "+61", label: "+61 Australia", digits: 9 },
  { code: "+64", label: "+64 New Zealand", digits: 9 },
  { code: "+971", label: "+971 UAE", digits: 9 },
  { code: "+966", label: "+966 Saudi Arabia", digits: 9 },
  { code: "+968", label: "+968 Oman", digits: 8 },
  { code: "+974", label: "+974 Qatar", digits: 8 },
  { code: "+965", label: "+965 Kuwait", digits: 8 },
  { code: "+973", label: "+973 Bahrain", digits: 8 },
  { code: "+961", label: "+961 Lebanon", digits: 8 },
  { code: "+962", label: "+962 Jordan", digits: 9 },
  { code: "+963", label: "+963 Syria", digits: 9 },
  { code: "+20", label: "+20 Egypt", digits: 10 },
  { code: "+216", label: "+216 Tunisia", digits: 8 },
  { code: "+213", label: "+213 Algeria", digits: 9 },
  { code: "+212", label: "+212 Morocco", digits: 9 },
  { code: "+234", label: "+234 Nigeria", digits: 10 },
  { code: "+254", label: "+254 Kenya", digits: 9 },
  { code: "+255", label: "+255 Tanzania", digits: 9 },
  { code: "+256", label: "+256 Uganda", digits: 9 },
  { code: "+27", label: "+27 South Africa", digits: 9 },
  { code: "+33", label: "+33 France", digits: 9 },
  { code: "+49", label: "+49 Germany", digits: 10 },
  { code: "+34", label: "+34 Spain", digits: 9 },
  { code: "+39", label: "+39 Italy", digits: 10 },
  { code: "+31", label: "+31 Netherlands", digits: 9 },
  { code: "+32", label: "+32 Belgium", digits: 9 },
  { code: "+41", label: "+41 Switzerland", digits: 9 },
  { code: "+43", label: "+43 Austria", digits: 10 },
  { code: "+45", label: "+45 Denmark", digits: 8 },
  { code: "+46", label: "+46 Sweden", digits: 9 },
  { code: "+47", label: "+47 Norway", digits: 8 },
  { code: "+358", label: "+358 Finland", digits: 9 },
  { code: "+30", label: "+30 Greece", digits: 10 },
  { code: "+90", label: "+90 Turkey", digits: 10 },
  { code: "+98", label: "+98 Iran", digits: 10 },
  { code: "+93", label: "+93 Afghanistan", digits: 9 },
  { code: "+977", label: "+977 Nepal", digits: 9 },
  { code: "+960", label: "+960 Maldives", digits: 7 },
  { code: "+51", label: "+51 Peru", digits: 9 },
  { code: "+54", label: "+54 Argentina", digits: 10 },
  { code: "+55", label: "+55 Brazil", digits: 11 },
  { code: "+56", label: "+56 Chile", digits: 9 },
  { code: "+57", label: "+57 Colombia", digits: 10 },
  { code: "+52", label: "+52 Mexico", digits: 10 },
  { code: "+53", label: "+53 Cuba", digits: 8 },
];

export default function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    experience: "",
    telegram: "",
    network: "",
  });
  const [step, setStep] = useState<"form" | "processing" | "success" | "cancelled">("form");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [inviteLinks, setInviteLinks] = useState<{ telegram: string; whatsapp: string } | null>(null);
  const razorpayLoaded = useRef(false);
  const orderIdRef = useRef<string>("");
  const sanitizedAmountRef = useRef<number>(49900);

  const requiredDigits = CODES.find((c) => c.code === formData.countryCode)?.digits ?? 10;

  // Load Razorpay script
  useEffect(() => {
    if (razorpayLoaded.current) return;
    razorpayLoaded.current = true;

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      phone: e.target.value.replace(/\D/g, "").slice(0, requiredDigits),
    }));
    setError(null);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCode = e.target.value;
    const newDigits = CODES.find((c) => c.code === newCode)?.digits ?? 10;
    setFormData((prev) => ({
      ...prev,
      countryCode: newCode,
      phone: prev.phone.replace(/\D/g, "").slice(0, newDigits),
    }));
    setError(null);
  };
  const pollForConfirmation = async (orderId: string) => {
    const maxAttempts = 30; // 30 attempts × 2s = 60s max wait
    let attempts = 0;

    const poll = async (): Promise<boolean> => {
      attempts++;
      try {
        const res = await fetch("/api/consultation/status", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // SECURITY FIX: Include email to prove ownership of the booking.
          // The /api/consultation/status endpoint now requires email to return invite links
          // and payment status, preventing an attacker from enumerating arbitrary orders.
          body: JSON.stringify({ razorpayOrderId: orderId, email: formData.email }),
        });

        if (res.ok) {
          const data = await res.json();
          if (data.confirmed) {
            setInviteLinks({
              telegram: data.inviteLink || "#",
              whatsapp: data.whatsappLink,
            });
            setStep("success");
            return true;
          }
          if (data.cancelled) {
            setError("Payment was not completed. Your details were saved — fill in the form and try again.");
            setStep("form");
            return false;
          }
        }
      } catch {
        // Continue polling
      }

      if (attempts >= maxAttempts) {
        setError("Payment received but booking confirmation is taking longer. Please contact support with your payment ID.");
        setStep("form");
        return false;
      }

      // Wait 2 seconds before next poll
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return poll();
    };

    return poll();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.fullName || !formData.email || !formData.phone || !formData.experience) {
      setError("Please fill in all required fields.");
      return;
    }

    if (formData.phone.length !== requiredDigits) {
      setError("Phone must be " + requiredDigits + " digits for " + formData.countryCode + ". You entered " + formData.phone.length + " digits.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const fullPhone = formData.countryCode + formData.phone;
    setLoading(true);

    try {
      // SECURITY FIX: Verify public key is present before any payment flow.
      // If missing in production, fail immediately — do NOT silently fall back to a test key.
      if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID) {
        throw new Error("Payment configuration error. Please refresh the page or contact support.");
      }

      const sanitized = {
        fullName: sanitize(formData.fullName),
        email: formData.email.toLowerCase().trim(),
        phone: formData.phone,
        countryCode: formData.countryCode,
        experience: formData.experience,
        telegram: sanitize(formData.telegram),
        network: sanitize(formData.network),
      };

      // Create Razorpay order
      const res = await fetch("/api/consultation/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sanitized),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to create payment order");
      }

      // SECURITY FIX: Amount comes from SERVER — client receives it in the response.
      // Never trust hardcoded amounts in client-side code.
      const { orderId, amount } = await res.json();
      orderIdRef.current = orderId;

      // amount from server is in paise (Razorpay format); fallback to ₹499 in paise
      sanitizedAmountRef.current = amount ?? 49900;

      // Wait for Razorpay script
      let razorpayReady = false;
      for (let i = 0; i < 20; i++) {
        if (typeof window.Razorpay !== "undefined") {
          razorpayReady = true;
          break;
        }
        await new Promise((resolve) => setTimeout(resolve, 200));
      }

      if (!razorpayReady) {
        throw new Error("Payment gateway failed to load. Please check your connection and try again.");
      }

      setStep("processing");

      // Open Razorpay modal
      const rzp = new window.Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: sanitizedAmountRef.current,
        currency: "INR",
        name: "VoidZero CPA",
        description: "1-on-1 CPA Consultation Session",
        order_id: orderId,
        prefill: {
          name: sanitized.fullName,
          email: sanitized.email,
          contact: fullPhone,
        },
        theme: {
          color: "#000000",
        },
        modal: {
          ondismiss: async () => {
            await fetch("/api/consultation/cancel", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpayOrderId: orderIdRef.current,
                fullName: sanitized.fullName,
                email: sanitized.email,
                phone: fullPhone,
                experience: sanitized.experience,
                telegram: sanitized.telegram,
                network: sanitized.network,
              }),
            });
            setStep("cancelled");
            setLoading(false);
          },
        },
      });

      rzp.on("payment.failed", () => {
        setError("Payment failed. Please try again or contact support.");
        setStep("form");
        setLoading(false);
      });

      rzp.open();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStep("form");
    } finally {
      setLoading(false);
    }
  };

  // Watch for payment completion via Razorpay redirect
  useEffect(() => {
    if (step !== "processing") return;

    const checkPayment = () => {
      pollForConfirmation(orderIdRef.current);
    };

    // Small delay to let Razorpay modal fully close
    const timer = setTimeout(checkPayment, 1500);
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <>
      {step === "success" && inviteLinks && (
        <SuccessModal
          telegramLink={inviteLinks.telegram}
          whatsappLink={inviteLinks.whatsapp}
          onClose={() => setStep("form")}
        />
      )}

      <form onSubmit={handleSubmit} className="lg:col-span-7 border-2 border-white p-10">
        {step === "cancelled" && (
          <div className="mb-8 p-6 border border-neutral-500 text-neutral-300 body-text">
            <p>Payment was cancelled. Your form data has been saved — fill in the form and try again.</p>
          </div>
        )}

        {error && (
          <div className="mb-8 p-6 border border-red-500 text-red-400 body-text" role="alert">
            {error}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="fullName" className="label-text text-neutral-400 mb-2 block">
              Full Name <span className="text-white">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Your name"
              autoComplete="name"
              value={formData.fullName}
              onChange={handleChange}
              disabled={loading || step === "processing"}
              className="w-full bg-transparent border-b-2 border-white p-2 pb-4 outline-none placeholder:text-neutral-500 placeholder:italic focus:border-[3px] focus:outline-none body-text disabled:opacity-50"
              required
              maxLength={200}
            />
          </div>

          <div>
            <label htmlFor="email" className="label-text text-neutral-400 mb-2 block">
              Email Address <span className="text-white">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              disabled={loading || step === "processing"}
              className="w-full bg-transparent border-b-2 border-white p-2 pb-4 outline-none placeholder:text-neutral-500 placeholder:italic focus:border-[3px] focus:outline-none body-text disabled:opacity-50"
              required
              maxLength={320}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="phone" className="label-text text-neutral-400 mb-2 block">
              Phone Number <span className="text-white">*</span>
            </label>
            <div className="flex gap-2 items-center">
              <select
                id="countryCode"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleCountryChange}
                disabled={loading || step === "processing"}
                className="bg-black border-b-2 border-white p-2 pb-4 outline-none text-white body-text appearance-none cursor-pointer disabled:opacity-50"
              >
                {CODES.map((c) => (
                  <option key={c.code} value={c.code} className="bg-black">{c.label}</option>
                ))}
              </select>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                placeholder={requiredDigits + " digits"}
                autoComplete="tel"
                value={formData.phone}
                onChange={handlePhoneChange}
                disabled={loading || step === "processing"}
                className="w-full bg-transparent border-b-2 border-white p-2 pb-4 outline-none placeholder:text-neutral-500 focus:border-[3px] focus:outline-none body-text disabled:opacity-50"
                required
                maxLength={11}
              />
            </div>
          </div>

          <div>
            <label htmlFor="experience" className="label-text text-neutral-400 mb-2 block">
              Experience Level <span className="text-white">*</span>
            </label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              disabled={loading || step === "processing"}
              className="w-full bg-black border-b-2 border-white p-2 pb-4 outline-none focus:border-[3px] focus:outline-none text-white body-text appearance-none cursor-pointer disabled:opacity-50"
              required
            >
              <option value="" className="bg-black text-neutral-400" disabled>Select level</option>
              <option value="beginner" className="bg-black text-white">Beginner</option>
              <option value="intermediate" className="bg-black text-white">Intermediate</option>
              <option value="advanced" className="bg-black text-white">Advanced</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div>
            <label htmlFor="telegram" className="label-text text-neutral-400 mb-2 block">
              Telegram Username <span className="text-neutral-500">(optional)</span>
            </label>
            <input
              id="telegram"
              name="telegram"
              type="text"
              placeholder="@username"
              autoComplete="off"
              value={formData.telegram}
              onChange={handleChange}
              disabled={loading || step === "processing"}
              className="w-full bg-transparent border-b-2 border-white p-2 pb-4 outline-none placeholder:text-neutral-500 placeholder:italic focus:border-[3px] focus:outline-none body-text disabled:opacity-50"
              maxLength={100}
            />
          </div>

          <div>
            <label htmlFor="network" className="label-text text-neutral-400 mb-2 block">
              Current CPA Network <span className="text-neutral-500">(optional)</span>
            </label>
            <input
              id="network"
              name="network"
              type="text"
              placeholder="e.g. OGAds, CPAGrip"
              value={formData.network}
              onChange={handleChange}
              disabled={loading || step === "processing"}
              className="w-full bg-transparent border-b-2 border-white p-2 pb-4 outline-none placeholder:text-neutral-500 placeholder:italic focus:border-[3px] focus:outline-none body-text disabled:opacity-50"
              maxLength={200}
            />
          </div>
        </div>

        <div className="border-t border-white pt-10">
          <div className="flex justify-between items-center flex-wrap gap-8 mb-10">
            <div>
              <div className="label-text text-neutral-400 mb-2">Consultation Fee</div>
              <div className="display-font text-6xl font-bold">₹{((sanitizedAmountRef.current ?? 49900) / 100).toFixed(0)}</div>
            </div>

            <button
              type="submit"
              disabled={loading || step === "processing"}
              className="btn-primary px-10 py-5 text-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating Order..." : step === "processing" ? "Processing..." : "Pay With Razorpay →"}
            </button>
          </div>

          <div className="border-t border-white pt-6 text-sm leading-relaxed text-neutral-500 body-text">
            If the consultation does not meet expectations, additional support guidance will be provided through Telegram and WhatsApp.
          </div>
        </div>
      </form>
    </>
  );
}