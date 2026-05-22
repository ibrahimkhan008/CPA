import type { Metadata } from "next";
import { FaqClient } from "./components/FaqClient";

export const metadata: Metadata = {
  title: "FAQ — VoidZero CPA | Common Questions Answered",
  description:
    "Frequently asked questions about CPA affiliate marketing, VoidZero courses, mentorship access, webinar registration, and pricing.",
  alternates: { canonical: "https://cpahustler.com/faq" },
  openGraph: {
    title: "FAQ — VoidZero CPA | Common Questions Answered",
    description:
      "Frequently asked questions about CPA affiliate marketing, VoidZero courses, mentorship access, webinar registration, and pricing.",
    type: "website",
    url: "https://cpahustler.com/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is CPA affiliate marketing?", acceptedAnswer: { "@type": "Answer", text: "CPA (Cost Per Action) affiliate marketing is a business model where you earn commissions whenever users complete actions like app installs, registrations or signups." } },
    { "@type": "Question", name: "Can complete beginners join?", acceptedAnswer: { "@type": "Answer", text: "Yes. The mentorship and webinar systems are designed specifically for beginners with no prior experience." } },
    { "@type": "Question", name: "Do I need paid ads to start?", acceptedAnswer: { "@type": "Answer", text: "No. VoidZero focuses heavily on organic traffic systems including Instagram, Telegram and content funnels." } },
    { "@type": "Question", name: "How much can someone realistically earn?", acceptedAnswer: { "@type": "Answer", text: "Results vary depending on consistency, effort and execution. There are no guaranteed earnings promises." } },
    { "@type": "Question", name: "What payment methods are accepted?", acceptedAnswer: { "@type": "Answer", text: "Payments are processed securely through Razorpay with support for UPI, debit cards, credit cards and net banking." } },
    { "@type": "Question", name: "Is there a refund policy?", acceptedAnswer: { "@type": "Answer", text: "Refund requests are reviewed individually depending on usage history, access logs and support interaction." } },
    { "@type": "Question", name: "Do I get lifetime access?", acceptedAnswer: { "@type": "Answer", text: "Recorded course materials include lifetime access unless otherwise mentioned on the specific plan." } },
    { "@type": "Question", name: "Can I upgrade my plan later?", acceptedAnswer: { "@type": "Answer", text: "Yes. Students can upgrade from Basic to Premium or Elite programs later." } },
    { "@type": "Question", name: "Will I get Telegram access?", acceptedAnswer: { "@type": "Answer", text: "Yes. Telegram community access is included in eligible mentorship plans." } },
    { "@type": "Question", name: "How do live mentorship sessions work?", acceptedAnswer: { "@type": "Answer", text: "Premium and Elite students receive scheduled live sessions, Q&A calls and community discussions." } },
    { "@type": "Question", name: "How long does support take?", acceptedAnswer: { "@type": "Answer", text: "Most support requests are answered within standard support hours depending on volume." } },
    { "@type": "Question", name: "Will I receive webinar replays?", acceptedAnswer: { "@type": "Answer", text: "Yes. Registered attendees usually receive replay access for a limited time." } },
    { "@type": "Question", name: "Do I need a laptop to start?", acceptedAnswer: { "@type": "Answer", text: "No. Many systems can be started using only a smartphone and internet connection." } },
    { "@type": "Question", name: "What tools or software are required?", acceptedAnswer: { "@type": "Answer", text: "Most beginner systems require only free tools, social media platforms and simple landing page builders." } },
    { "@type": "Question", name: "Is technical experience required?", acceptedAnswer: { "@type": "Answer", text: "No coding or advanced technical knowledge is required to start learning the systems." } },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqClient />
    </>
  );
}