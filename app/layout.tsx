import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Verta Limited | Licensed Lotto Memberships in Germany - Trusted & Secure",
  description:
    "Verta Limited delivers fully licensed, transparent, and secure lotto memberships compliant with German regulations. Join 12,000+ verified members with 24/7 support and 99.3% satisfaction.",
  keywords: [
    "lotto membership Germany",
    "licensed lotto",
    "German lottery",
    "secure lotto membership",
    "verified lotto",
    "Verta Limited",
    "compliant lottery membership",
  ],
  authors: [{ name: "Verta Limited" }],
  creator: "Verta Limited",
  publisher: "Verta Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vertalimited.com",
    siteName: "Verta Limited",
    title: "Verta Limited | Licensed Lotto Memberships in Germany",
    description:
      "Join 12,000+ verified members with fully licensed, secure lotto memberships in Germany. 24/7 support and 99.3% client satisfaction.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verta Limited | Licensed Lotto Memberships in Germany",
    description:
      "Join 12,000+ verified members with fully licensed, secure lotto memberships in Germany. 24/7 support and 99.3% client satisfaction.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://vertalimited.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
