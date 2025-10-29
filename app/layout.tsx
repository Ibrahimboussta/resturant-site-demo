import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import { CosmicAnalyticsProvider } from "cosmic-analytics";
import Navbar from "@/app/components/Navbar";
import Analytics from '@/app/components/Analytics';

const primaryFont = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

// Change the title and description to your own.
export const metadata: Metadata = {
  title: "Click & Serve | Digital Services for Restaurants & Hotels",
  description: "Professional digital services for restaurants and hotels. Web design, online ordering, social media management, and digital marketing solutions.",
};

export default function RootLayout({
  children,
  
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en" className={primaryFont.className}>
      <body className="antialiased">
        <main className="min-h-screen">
          <CosmicAnalyticsProvider>
            {GA_ID && (
              <>
                <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
                <Script
                  id="gtag-init"
                  strategy="afterInteractive"
                  dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}', { page_path: window.location.pathname });`,
                  }}
                />
                <Analytics />
              </>
            )}

            <Navbar />
            {children}
          </CosmicAnalyticsProvider>
        </main>
      </body>
    </html>
  );
}