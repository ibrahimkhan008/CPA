export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://cpahustler.com/#organization",
        name: "VoidZero CPA",
        url: "https://cpahustler.com",
        logo: {
          "@type": "ImageObject",
          url: "https://cpahustler.com/logo.png",
        },
        sameAs: [
          "https://t.me/zephrusX",
          "https://wa.me/919521903155",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          availableLanguage: ["English", "Hindi"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://cpahustler.com/#website",
        url: "https://cpahustler.com",
        name: "VoidZero CPA",
        publisher: { "@id": "https://cpahustler.com/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://cpahustler.com/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}