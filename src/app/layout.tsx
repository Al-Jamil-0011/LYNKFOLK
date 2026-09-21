import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/constants";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — Stronger Families. Brighter Futures.`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "A calmer way to understand each other. LYNKFOLK helps parents and teens express their feelings, understand one another, and build stronger connections — with AI as a supportive bridge, not a replacement.",
  keywords: [
    "family wellness",
    "parent teen connection",
    "teen mental health",
    "family emotional wellness",
    "LYNKFOLK",
    "guided conversation",
    "calm guidance",
  ],
  authors: [{ name: "LYNKFOLK" }],
  creator: "LYNKFOLK",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} — Stronger Families. Brighter Futures.`,
    description:
      "A calmer way to understand each other. LYNKFOLK helps parents and teens express their feelings and build stronger connections.",
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — Stronger Families. Brighter Futures.`,
    description:
      "A calmer way to understand each other. LYNKFOLK helps parents and teens express their feelings and build stronger connections.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${lora.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-zinc-900 font-sans selection:bg-[#8a2ce2] selection:text-white">
        {children}
      </body>
    </html>
  );
}
