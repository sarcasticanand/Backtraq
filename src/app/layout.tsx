import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Backtraq — Home Inspections for Renters & Buyers in Gurgaon & Delhi NCR",
    template: "%s | Backtraq",
  },
  description:
    "Independent home inspections for renters and buyers in Gurgaon & Delhi NCR. 75-point check, photo report in 12 hours. We don't take sides.",
  keywords: ["home inspection", "property inspection", "Gurgaon", "Delhi NCR", "rental inspection", "buyer inspection"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Backtraq",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream text-charcoal antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
