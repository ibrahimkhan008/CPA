import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { VercelAnalytics } from "@/components/ui/VercelAnalytics";
import { FooterLogoLoop } from "./components/Footer";
import { Footer } from "./components/Footer";
import { ClickSparkProvider } from "@/components/ui/ClickSparkProvider";
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
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-black dark:text-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-black dark:focus:bg-black dark:focus:text-white focus:px-6 focus:py-3 focus:uppercase focus:tracking-widest focus:text-sm focus:outline-none"
        >
          Skip to content
        </a>

        <ThemeProvider>
          <ClickSparkProvider>
            <Navbar />
            <VercelAnalytics />

            <main id="main-content" className="flex-1">{children}</main>

            <FooterLogoLoop />
            <Footer />
          </ClickSparkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}