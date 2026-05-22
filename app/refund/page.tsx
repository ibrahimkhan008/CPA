"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { refundData } from "@/lib/refundData";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Critical Warning Header */}
      <div className="bg-foreground text-background border-b-[3px] border-foreground py-8 md:py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="display-font text-lg md:text-2xl font-bold tracking-tight mb-3">
            READ THIS BEFORE PURCHASING
          </p>
          <p className="body-text text-sm md:text-base font-semibold">
            ALL SALES ARE FINAL. NO REFUNDS. NO EXCEPTIONS. NO NEGOTIATION.
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b-[3px] border-foreground py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="display-font text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {refundData.title}
          </h1>
          <div className="space-y-2 text-sm md:text-base body-text text-muted-foreground">
            <p>Last Updated: {refundData.lastUpdated}</p>
            <p>Effective Date: {refundData.effectiveDate}</p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="border-b-2 border-black dark:border-white py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="body-text text-base md:text-lg leading-relaxed font-semibold">
            {refundData.introduction}
          </p>
        </div>
      </div>

      {/* Critical Notice */}
      <div className="bg-foreground text-background py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="display-font text-2xl md:text-3xl font-bold mb-6">
            {refundData.criticalNotice.title}
          </h2>
          <div className="space-y-3">
            {refundData.criticalNotice.content.map((line, index) => (
              <p
                key={index}
                className="body-text text-sm md:text-base leading-relaxed font-semibold"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          {refundData.sections.map((section, index) => (
            <section
              key={index}
              className="border-b-2 border-neutral-200 dark:border-neutral-800 pb-12 last:border-b-0"
            >
              <h2 className="display-font text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                {section.title}
              </h2>

              {/* Handle subsections */}
              {"subsections" in section && section.subsections ? (
                <div className="space-y-8">
                  {section.subsections.map((subsection, subIndex) => (
                    <div
                      key={subIndex}
                      className="border-l-[3px] border-neutral-300 dark:border-neutral-700 pl-6"
                    >
                      <h3 className="display-font text-xl md:text-2xl font-semibold mb-4">
                        {"subtitle" in subsection ? subsection.subtitle : ""}
                      </h3>
                      <div className="space-y-3">
                        {"content" in subsection && Array.isArray(subsection.content)
                          ? subsection.content.map((paragraph: string, pIndex: number) => (
                              <p
                                key={pIndex}
                                className="body-text text-base leading-relaxed"
                              >
                                {paragraph}
                              </p>
                            ))
                          : null}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Handle regular content */
                <div className="space-y-3">
                  {Array.isArray(section.content)
                    ? section.content.map((paragraph: string, pIndex: number) => (
                        <p
                          key={pIndex}
                          className="body-text text-base leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))
                    : null}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      {/* Policy Summary Box */}
      <div className="bg-neutral-100 dark:bg-neutral-900 border-t-[3px] border-b-[3px] border-black dark:border-white py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="display-font text-2xl md:text-3xl font-bold mb-8 text-center">
            {refundData.policySummary.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {refundData.policySummary.points.map((point, index) => (
              <div
                key={index}
                className="body-text text-sm md:text-base leading-relaxed p-4 bg-white dark:bg-black border-2 border-black dark:border-white"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final Acknowledgment */}
      <div className="bg-foreground text-background py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="display-font text-lg md:text-xl font-bold tracking-tight leading-relaxed">
            {refundData.finalAcknowledgment}
          </p>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="border-t-2 border-black dark:border-white py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-100 dark:bg-neutral-900 border-2 border-black dark:border-white p-8">
            <p className="display-font text-sm md:text-base font-bold uppercase tracking-wider mb-4">
              Before You Purchase
            </p>
            <p className="body-text text-base mb-6">
              If you have any questions about this policy or whether a purchase is right for you, contact our team first.
            </p>
            <Link href="/consultation">
              <Button size="lg" className="btn-primary">
                Ask Questions Before Buying
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}