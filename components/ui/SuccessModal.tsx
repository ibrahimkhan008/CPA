"use client";

import { useEffect, useCallback } from "react";

interface SuccessModalProps {
  telegramLink: string;
  whatsappLink: string;
  onClose: () => void;
}

export default function SuccessModal({ telegramLink, whatsappLink, onClose }: SuccessModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg border-2 border-white bg-black p-10 md:p-14 text-white overflow-y-auto max-h-[90vh]">
        <div className="noise"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center border border-white hover:bg-white hover:text-black transition-all duration-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          aria-label="Close modal"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="1" y1="1" x2="13" y2="13" />
            <line x1="13" y1="1" x2="1" y2="13" />
          </svg>
        </button>

        <div className="relative z-10">
          {/* Checkmark */}
          <div className="mb-8">
            <div
              className="w-16 h-16 border-2 border-white flex items-center justify-center"
              style={{
                animation: "checkmark-draw 0.5s ease forwards 0.2s",
                strokeDasharray: 100,
                strokeDashoffset: 100,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 12 10 18 20 6" />
              </svg>
            </div>
          </div>

          <p className="label-text text-neutral-400 mb-4">Booking Confirmed</p>

          <h1
            id="success-modal-title"
            className="display-font text-5xl md:text-6xl font-bold leading-none tracking-tight mb-6"
          >
            YOU&apos;RE
            <br />
            IN!
          </h1>

          <p className="text-neutral-300 body-text text-lg mb-10">
            Your CPA consultation is booked. Join the community below — we&apos;ll reach out with next steps.
          </p>

          {/* Community links */}
          <div className="space-y-4 mb-10">
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-5 text-sm w-full flex items-center justify-between gap-4 group"
            >
              <span>Join Telegram Group</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
              </svg>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-5 text-sm w-full flex items-center justify-center gap-3"
              style={{ backgroundColor: "#25D366", borderColor: "#25D366" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Join WhatsApp Group</span>
            </a>
          </div>

          {/* Next steps */}
          <div className="border-t border-white/20 pt-8 space-y-4">
            {[
              "Join both communities for full access",
              "You&apos;ll receive session details via email",
              "Bring your questions — Q&amp;A is included",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="label-text text-neutral-500 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-neutral-300 body-text text-base" dangerouslySetInnerHTML={{ __html: step }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes checkmark-draw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}