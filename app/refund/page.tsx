import type { Metadata } from "next";
import { RefundClient } from "./components/RefundClient";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy — VoidZero CPA",
  description:
    "All VoidZero CPA sales are final and non-refundable. Digital products delivered instantly upon purchase. Read our full refund policy before buying.",
  alternates: { canonical: "https://cpahustler.com/refund" },
  openGraph: {
    title: "Cancellation & Refund Policy — VoidZero CPA",
    description:
      "All VoidZero CPA sales are final and non-refundable. Digital products delivered instantly upon purchase.",
    type: "website",
    url: "https://cpahustler.com/refund",
  },
};

export default function RefundPage() {
  return <RefundClient />;
}