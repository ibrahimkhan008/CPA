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
  experience: string;
  telegram: string;
  network: string;
}

export default function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    telegram: "",
    network: "",
  });
  const [step, setStep] = useState<"form" | "processing" | "success" | "cancelled">("form");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [inviteLinks, setInviteLinks] = useState<{ telegram: string; whatsapp: string } | null>(null);
  const [cancelledData, setCancelledData] = useState<{
    fullName: string;
    email: string;
    phoneNumber: string;
    experienceLevel: string;
    telegramUsername: string | null;
    currentCpaNetwork: string | null;
  } | null>(null);
  const razorpayLoaded = useRef(false);
  const orderIdRef = useRef<string>("");

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

  // Poll for payment confirmation from webhook
  const pollForConfirmation = async (orderId: string) => {
    const maxAttempts = 30; // 30 attempts × 2s = 60s max wait
    let attempts = 0;

    const poll = async (): Promise<boolean> => {
      attempts++;
      try {
        const res = await fetch("/api/consultation/status", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ razorpayOrderId: orderId }),
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
            // User cancelled — restore their form data so they don't have to re-fill
            setFormData((prev) => ({
              ...prev,
              fullName: prev.fullName || "",
              email: prev.email || "",
            }));
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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      // Create Razorpay order
      const res = await fetch("/api/consultation/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to create payment order");
      }

      const { orderId } = await res.json();
      orderIdRef.current = orderId;

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
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_StKEZVEnDgNJ7c",
        amount: 49900,
        currency: "INR",
        name: "VoidZero CPA",
        description: "1-on-1 CPA Consultation Session",
        order_id: orderId,
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#000000",
        },
        modal: {
          ondismiss: async () => {
            setStep("cancelled");
            setLoading(false);
            // Notify backend to mark the pending order as cancelled and send Telegram alert
            try {
              await fetch("/api/consultation/cancel", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ razorpayOrderId: orderIdRef.current }),
              });
            } catch {
              // Non-fatal — user sees the cancelled state anyway
            }
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
      // After Razorpay closes, start polling for webhook confirmation
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
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="phone" className="label-text text-neutral-400 mb-2 block">
              Phone Number <span className="text-white">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              disabled={loading || step === "processing"}
              className="w-full bg-transparent border-b-2 border-white p-2 pb-4 outline-none placeholder:text-neutral-500 placeholder:italic focus:border-[3px] focus:outline-none body-text disabled:opacity-50"
              required
            />
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
            />
          </div>
        </div>

        <div className="border-t border-white pt-10">
          <div className="flex justify-between items-center flex-wrap gap-8 mb-10">
            <div>
              <div className="label-text text-neutral-400 mb-2">Consultation Fee</div>
              <div className="display-font text-6xl font-bold">₹499</div>
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