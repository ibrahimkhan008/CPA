import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { VercelAnalytics } from "@/components/ui/VercelAnalytics";
import { FooterLogoLoop } from "./components/Footer";
import { Footer } from "./components/Footer";
import { ClickSparkProvider } from "@/components/ui/ClickSparkProvider";
import { OrganizationJsonLd } from "@/components/ui/OrganizationJsonLd";
import { VercelSpeedInsights } from "@/components/ui/VercelSpeedInsights";
import { ToastProvider } from "@/components/ui/toast";
import { DevBanner } from "@/components/ui/DevBanner";
import { DevAgentation } from "@/components/ui/DevAgentation";
import { ClarityProvider } from "@/components/ui/ClarityProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "VoidZero CPA — Free Affiliate Marketing Webinar",
  description:
    "Learn CPA affiliate marketing with Mr. Void. Free webinar covering organic funnels, traffic methods, and ethical monetization systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-black dark:text-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-black dark:focus:bg-black dark:focus:text-white focus:px-6 focus:py-3 focus:uppercase focus:tracking-widest focus:text-sm focus:outline-none"
        >
          Skip to content
        </a>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MMVHCZ7Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ThemeProvider>
          <ToastProvider>
            <DevBanner />
            <DevAgentation />
            <ClickSparkProvider>
              <OrganizationJsonLd />
              <VercelSpeedInsights />
              <ClarityProvider />
              <Script id="gtm-script" strategy="afterInteractive">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MMVHCZ7Q');`}
              </Script>
              <Navbar />
              <VercelAnalytics />

              <main id="main-content" className="flex-1">{children}</main>

              <FooterLogoLoop />
              <Footer />
            </ClickSparkProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}