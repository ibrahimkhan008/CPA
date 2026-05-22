import type { Metadata } from "next";
import { ProofsClient } from "./components/ProofsClient";

export const metadata: Metadata = {
  title: "Proofs & Results — VoidZero CPA | Verified Earnings",
  description:
    "Explore verified CPA earnings screenshots, student results, and network dashboards from VoidZero CPA students and Mr. Void.",
  alternates: { canonical: "https://cpahustler.com/proofs" },
  openGraph: {
    title: "Proofs & Results — VoidZero CPA | Verified Earnings",
    description:
      "Explore verified CPA earnings screenshots, student results, and network dashboards from VoidZero CPA students and Mr. Void.",
    type: "website",
    url: "https://cpahustler.com/proofs",
  },
};

export default function ProofsPage() {
  return <ProofsClient />;
}