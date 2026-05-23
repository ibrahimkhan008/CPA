import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — VoidZero CPA",
  description:
    "Read the Privacy Policy for VoidZero CPA, operated by Mr. Void / DW Methods.",
  alternates: { canonical: "https://cpahustler.com/privacy" },
  openGraph: {
    title: "Privacy Policy — VoidZero CPA",
    description:
      "Read the Privacy Policy for VoidZero CPA, operated by Mr. Void / DW Methods.",
    type: "website",
    url: "https://cpahustler.com/privacy",
  },
};

export const privacyData = {
  title: "Privacy Policy",
  lastUpdated: "May 22, 2026",
  effectiveDate: "May 22, 2026",

  introduction:
    "At CPA Hustler (cpahustler.com), operated by Mr. Void / DW Methods, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, register for webinars, purchase consultations or courses, or interact with our services.",

  sections: [
    {
      title: "1. Information We Collect",
      subsections: [
        {
          subtitle: "1.1 Personal Information",
          content: [
            "We collect personal information that you voluntarily provide to us when you:",
            "• Register for free webinars or events",
            "• Purchase consultation sessions, courses, or mentorship programs",
            "• Fill out contact forms or inquiry submissions",
            "• Subscribe to newsletters or promotional communications",
            "• Join our WhatsApp, Telegram, or Instagram communities",
            "",
            "Personal information may include:",
            "• Full name",
            "• Email address",
            "• Phone number (including WhatsApp number)",
            "• Telegram username",
            "• Current CPA network affiliation",
            "• CPA experience level",
            "• Payment information (processed by Razorpay)",
            "• Communication preferences",
          ],
        },
        {
          subtitle: "1.2 Automatically Collected Information",
          content: [
            "When you visit our website, we automatically collect certain information about your device and browsing activity:",
            "• IP address and geolocation data",
            "• Browser type and version",
            "• Device information (type, operating system)",
            "• Pages visited and time spent on pages",
            "• Referring website URLs",
            "• Click patterns and navigation paths",
            "• Date and time stamps of visits",
            "",
            "This information is collected through cookies, web beacons, and similar tracking technologies.",
          ],
        },
        {
          subtitle: "1.3 Third-Party Analytics",
          content: [
            "We use third-party analytics services to understand user behavior:",
            "• Google Analytics: Website traffic and user engagement",
            "• Meta Pixel: Advertising performance and conversion tracking",
            "• Razorpay Analytics: Payment success rates and transaction data",
            "",
            "These services may collect and process data according to their own privacy policies.",
          ],
        },
        {
          subtitle: "1.4 Information from Social Media",
          content: [
            "If you interact with us through social media platforms (Instagram, Telegram, WhatsApp, YouTube), we may receive information such as:",
            "• Username and profile information",
            "• Messages and communications",
            "• Engagement data (likes, comments, shares)",
            "",
            "This information is governed by both our Privacy Policy and the respective platform's privacy policy.",
          ],
        },
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "We use your personal information for the following purposes:",
        "",
        "• Service Delivery: Providing access to webinars, consultations, courses, and community groups",
        "• Payment Processing: Processing transactions through Razorpay and maintaining payment records",
        "• Communication: Sending transactional emails, WhatsApp messages, Telegram notifications about your services",
        "• Customer Support: Responding to inquiries, providing technical assistance, and resolving issues",
        "• Marketing: Sending promotional emails about new courses, webinars, offers (with opt-out option)",
        "• Personalization: Customizing content and recommendations based on your interests and experience level",
        "• Analytics: Understanding website usage, improving user experience, and optimizing conversion rates",
        "• Legal Compliance: Complying with legal obligations, preventing fraud, and protecting our rights",
        "• Testimonials: Sharing success stories and earnings proofs (with consent or anonymization)",
        "• Research: Analyzing trends, student performance, and improving educational content",
      ],
    },
    {
      title: "3. Legal Basis for Processing (Indian Law)",
      content: [
        "Under Indian data protection laws, we process your personal information based on:",
        "",
        "• Consent: You have given explicit consent for specific purposes (e.g., marketing communications)",
        "• Contract Performance: Processing is necessary to fulfill our contract with you (delivering courses, consultations)",
        "• Legitimate Interests: Processing is necessary for our legitimate business interests (analytics, fraud prevention)",
        "• Legal Obligation: Processing is required to comply with Indian laws and regulations",
      ],
    },
    {
      title: "4. Information Sharing and Disclosure",
      subsections: [
        {
          subtitle: "4.1 Third-Party Service Providers",
          content: [
            "We share your information with trusted third-party service providers who assist us in operating our business:",
            "",
            "• Payment Processors: Razorpay (for secure payment processing)",
            "• Communication Platforms: WhatsApp, Telegram (for community access and support)",
            "• Email Services: Email service providers (for transactional and marketing emails)",
            "• Analytics Providers: Google Analytics, Meta (for tracking and optimization)",
            "• Hosting Providers: Vercel, VPS providers (for website hosting and infrastructure)",
            "",
            "These providers have access to your information only to perform services on our behalf and are obligated to protect your data.",
          ],
        },
        {
          subtitle: "4.2 Business Transfers",
          content: [
            "If CPA Hustler is involved in a merger, acquisition, sale of assets, or bankruptcy, your personal information may be transferred as part of that transaction.",
            "We will notify you via email or prominent notice on our website before your information becomes subject to a different privacy policy.",
          ],
        },
        {
          subtitle: "4.3 Legal Requirements",
          content: [
            "We may disclose your information if required by law or in response to:",
            "• Court orders, subpoenas, or legal processes",
            "• Government or regulatory authority requests",
            "• Investigations of fraud, security breaches, or illegal activities",
            "• Protection of our rights, property, or safety, or that of others",
          ],
        },
        {
          subtitle: "4.4 With Your Consent",
          content: [
            "We may share your information for other purposes with your explicit consent, such as:",
            "• Featuring your testimonial or success story in marketing materials",
            "• Participating in case studies or research",
            "• Collaborating with affiliate partners or co-instructors",
          ],
        },
      ],
    },
    {
      title: "5. Cookies and Tracking Technologies",
      content: [
        "We use cookies and similar tracking technologies to enhance your browsing experience:",
        "",
        "• Essential Cookies: Required for website functionality (login, payment processing)",
        "• Analytics Cookies: Track website usage and performance (Google Analytics)",
        "• Marketing Cookies: Enable targeted advertising and conversion tracking (Meta Pixel)",
        "• Preference Cookies: Remember your settings and preferences",
        "",
        "You can control cookies through your browser settings. However, disabling cookies may limit website functionality.",
        "",
        "Most browsers accept cookies by default. You can modify your browser settings to:",
        "• Block all cookies",
        "• Accept only first-party cookies",
        "• Receive notifications when cookies are set",
        "• Delete existing cookies",
      ],
    },
    {
      title: "6. Data Security",
      content: [
        "We implement reasonable technical and organizational security measures to protect your personal information:",
        "",
        "• Secure Socket Layer (SSL) encryption for data transmission",
        "• Secure payment processing through PCI-DSS compliant Razorpay",
        "• Password-protected admin systems with role-based access control",
        "• Regular security audits and vulnerability assessments",
        "• Encrypted storage of sensitive data",
        "• Restricted access to personal information on a need-to-know basis",
        "",
        "However, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security of your information.",
        "",
        "You are responsible for maintaining the confidentiality of your account credentials, private group links, and course access.",
      ],
    },
    {
      title: "7. Data Retention",
      content: [
        "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy:",
        "",
        "• Active Accounts: While your account is active and for the duration of your course access period",
        "• Payment Records: 7 years (as required by Indian tax and financial regulations)",
        "• Marketing Data: Until you unsubscribe or request deletion",
        "• Legal Requirements: As required by applicable laws and regulations",
        "",
        "After the retention period, we will securely delete or anonymize your personal information.",
        "",
        "You may request deletion of your account and personal information at any time (subject to legal retention requirements).",
      ],
    },
    {
      title: "8. Your Rights and Choices",
      subsections: [
        {
          subtitle: "8.1 Access and Correction",
          content: [
            "You have the right to:",
            "• Access your personal information we hold",
            "• Request correction of inaccurate or incomplete data",
            "• Update your profile information and preferences",
          ],
        },
        {
          subtitle: "8.2 Deletion",
          content: [
            "You can request deletion of your personal information, subject to:",
            "• Legal obligations to retain certain records (payment data, tax records)",
            "• Ongoing contractual obligations (active course enrollments)",
            "• Legitimate business interests (fraud prevention, dispute resolution)",
          ],
        },
        {
          subtitle: "8.3 Marketing Opt-Out",
          content: [
            "You can opt out of marketing communications at any time by:",
            "• Clicking 'unsubscribe' in promotional emails",
            "• Contacting us directly via WhatsApp or email",
            "• Updating your communication preferences in your account settings",
            "",
            "Note: You cannot opt out of transactional communications related to your purchases or account.",
          ],
        },
        {
          subtitle: "8.4 Data Portability",
          content: [
            "You have the right to request a copy of your personal information in a structured, commonly used, machine-readable format.",
          ],
        },
        {
          subtitle: "8.5 Withdraw Consent",
          content: [
            "Where processing is based on consent, you may withdraw your consent at any time.",
            "Withdrawal does not affect the lawfulness of processing before withdrawal.",
          ],
        },
      ],
    },
    {
      title: "9. Children's Privacy",
      content: [
        "Our services are not intended for individuals under 18 years of age.",
        "We do not knowingly collect personal information from minors without parental consent.",
        "If you are under 18, you may only use our services with the involvement of a parent or legal guardian.",
        "If we become aware that we have collected information from a minor without proper consent, we will take steps to delete that information promptly.",
        "Parents or guardians who believe their child has provided us with personal information should contact us immediately.",
      ],
    },
    {
      title: "10. International Data Transfers",
      content: [
        "Your personal information is primarily stored and processed in India.",
        "If you access our services from outside India, your information may be transferred to and processed in India.",
        "By using our services, you consent to the transfer of your information to India, which may have different data protection laws than your jurisdiction.",
        "We ensure that international transfers comply with applicable data protection regulations.",
      ],
    },
    {
      title: "11. Third-Party Websites and Services",
      content: [
        "Our website may contain links to third-party websites, including:",
        "• CPA Networks (OGAds, AdBlueMedia, CPAGrip, CPALead)",
        "• Social Media Platforms (Instagram, Telegram, WhatsApp, YouTube)",
        "• Payment Processors (Razorpay)",
        "• External resources and tools",
        "",
        "We are not responsible for the privacy practices of these third-party services.",
        "We encourage you to review their privacy policies before providing any personal information.",
        "Your interactions with third-party services are governed solely by their respective policies.",
      ],
    },
    {
      title: "12. California Privacy Rights (CCPA) - If Applicable",
      content: [
        "While CPA Hustler primarily operates in India, if you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA):",
        "",
        "• Right to Know: What personal information we collect, use, and disclose",
        "• Right to Delete: Request deletion of your personal information",
        "• Right to Opt-Out: Opt out of the sale of personal information (we do not sell personal information)",
        "• Right to Non-Discrimination: Not receive discriminatory treatment for exercising your rights",
        "",
        "To exercise these rights, contact us using the information provided in Section 15.",
      ],
    },
    {
      title: "13. Changes to This Privacy Policy",
      content: [
        "We reserve the right to update or modify this Privacy Policy at any time.",
        "Material changes will be communicated via:",
        "• Prominent notice on our website",
        "• Email notification to registered users",
        "• WhatsApp or Telegram announcements",
        "",
        "The 'Last Updated' date at the top of this policy indicates when it was last revised.",
        "Your continued use of our services after changes constitutes acceptance of the updated Privacy Policy.",
        "We encourage you to review this Privacy Policy periodically.",
      ],
    },
    {
      title: "14. Data Protection Officer / Contact",
      content: [
        "For privacy-related questions, concerns, or to exercise your rights, please contact us:",
        "",
        "Privacy Contact:",
        "• Email: privacy@cpahustler.com",
        "• WhatsApp: +91 9098786335",
        "• Telegram: @CPAHustler",
        "• Address: Jharkhand, India",
        "",
        "We will respond to your request within 30 days of receipt.",
        "If you are not satisfied with our response, you have the right to lodge a complaint with the relevant data protection authority in India.",
      ],
    },
    {
      title: "15. Consent",
      content: [
        "By using CPA Hustler's services, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your personal information as described herein.",
        "",
        "If you do not agree with this Privacy Policy, please do not use our services or provide any personal information.",
      ],
    },
  ],

  acknowledgment:
    "BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTOOD THIS PRIVACY POLICY AND CONSENT TO OUR DATA COLLECTION AND PROCESSING PRACTICES.",
};

function SectionContent({
  section,
}: {
  section: (typeof privacyData.sections)[number];
}) {
  if ("subsections" in section && section.subsections) {
    return (
      <div className="space-y-8">
        {(section as { subsections: { subtitle: string; content: string[] }[] }).subsections.map((sub) => (
          <div key={sub.subtitle}>
            <h3 className="display-font text-xl md:text-2xl font-bold mb-4 text-black">
              {sub.subtitle}
            </h3>
            <div className="space-y-3">
              {sub.content.map((para, i) => (
                <p
                  key={i}
                  className={`body-text text-lg leading-relaxed text-neutral-700 ${para === "" ? "h-4" : ""}`}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {("content" in section ? section.content : []).map((para, i) => (
        <p
          key={i}
          className={`body-text text-lg leading-relaxed text-neutral-700 ${para === "" ? "h-4" : ""}`}
        >
          {para}
        </p>
      ))}
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b-4 border-black overflow-hidden">
        <div className="noise"></div>
        <div className="lines absolute inset-0"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32 relative z-10">
          <div className="flex justify-between border-b border-black pb-6 mb-16 items-center">
            <Link
              href="/"
              className="label-text font-bold hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-2"
            >
              VoidZero
            </Link>
            <div className="label-text text-neutral-600">
              Last Updated: {privacyData.lastUpdated}
            </div>
          </div>

          <div className="max-w-4xl">
            <div className="label-text text-neutral-600 mb-6 text-black">Legal</div>

            <h1 className="display-font text-[4.5rem] md:text-[9rem] leading-[0.82] tracking-[-0.06em] font-bold uppercase mb-10">
              {privacyData.title}
            </h1>

            <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-neutral-700 body-text">
              {privacyData.introduction}
            </p>
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* Content */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="label-text text-neutral-600 mb-6 text-black">Contents</div>
              <div className="border-2 border-black p-8 bg-white">
                <nav aria-label="Privacy policy table of contents">
                  <ul className="space-y-3 list-none p-0 m-0">
                    {privacyData.sections.map((section) => (
                      <li key={section.title}>
                        <a
                          href={`#${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          className="label-text hover:underline block py-1 focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-2"
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-0">
              {privacyData.sections.map((section) => (
                <div
                  key={section.title}
                  id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                  className="border-b border-neutral-200 py-12 first:pt-0"
                >
                  <h2 className="display-font text-2xl md:text-4xl font-bold mb-6 leading-tight text-black">
                    {section.title}
                  </h2>
                  <SectionContent section={section} />
                </div>
              ))}

              {/* Acknowledgment */}
              <div className="border-2 border-black p-10 mt-12 bg-black text-white">
                <div className="label-text text-neutral-400 mb-6">
                  Important Notice
                </div>
                <p className="text-xl leading-relaxed body-text">
                  {privacyData.acknowledgment}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule"></div>

      {/* CTA */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="label-text text-neutral-600 mb-6 text-black">Questions?</div>
          <h2 className="display-font text-4xl md:text-6xl font-bold mb-8">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-neutral-700 body-text mb-10">
            For questions about this Privacy Policy, contact us directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/consultation"
              className="btn-primary px-10 py-5 text-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
            >
              Book Consultation →
            </Link>
            <Link
              href="/"
              className="btn-secondary px-10 py-5 text-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
            >
              Back to Home →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}