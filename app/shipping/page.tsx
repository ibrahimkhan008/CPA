import type { Metadata } from "next";
import { ShippingClient } from "./components/ShippingClient";

export const metadata: Metadata = {
  title: "Shipping Policy — VoidZero CPA | Digital Delivery",
  description:
    "All VoidZero CPA products are delivered instantly and digitally. No physical shipping applies. Learn about access methods, account setup, and lifetime access.",
  alternates: { canonical: "https://cpahustler.com/shipping" },
  openGraph: {
    title: "Shipping Policy — VoidZero CPA | Digital Delivery",
    description:
      "All VoidZero CPA products are delivered instantly and digitally. No physical shipping applies.",
    type: "website",
    url: "https://cpahustler.com/shipping",
  },
};

export default function ShippingPage() {
  return <ShippingClient />;
}