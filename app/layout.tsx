import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CosmicAnalyticsProvider } from "cosmic-analytics";
import Navbar from "@/app/components/Navbar";

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
  return (
    <html lang="en" className={primaryFont.className}>
      <body className="antialiased">
        <main className="min-h-screen">
          <CosmicAnalyticsProvider>
            <Navbar />
            {children}
          </CosmicAnalyticsProvider>
        </main>
      </body>
    </html>
  );
}