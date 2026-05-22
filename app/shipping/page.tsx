"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { shippingData } from "@/lib/shippingData";

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b-[3px] border-black dark:border-white py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="display-font text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {shippingData.title}
          </h1>
          <div className="space-y-2 text-sm md:text-base body-text text-muted-foreground">
            <p>Last Updated: {shippingData.lastUpdated}</p>
            <p>Effective Date: {shippingData.effectiveDate}</p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="border-b-2 border-black dark:border-white py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="body-text text-base md:text-lg leading-relaxed">
            {shippingData.introduction}
          </p>
        </div>
      </div>

      {/* Disclaimer Banner */}
      <div className="bg-foreground text-background py-8 md:py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="display-font text-xl md:text-2xl font-bold">
            {shippingData.disclaimer}
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          {shippingData.sections.map((section, index) => (
            <section
              key={index}
              className="border-b-2 border-neutral-200 dark:border-neutral-800 pb-12 last:border-b-0"
            >
              <h2 className="display-font text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                {section.title}
              </h2>

              {"subsections" in section && section.subsections ? (
                <div className="space-y-8">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex}>
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

      {/* Footer CTA */}
      <div className="bg-neutral-100 dark:bg-neutral-900 border-t-2 border-black dark:border-white py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="display-font text-sm md:text-base font-bold uppercase tracking-wider mb-6">
            Questions About Delivery?
          </p>
          <Link href="/consultation">
            <Button size="lg" className="btn-primary">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}