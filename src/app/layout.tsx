import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getLocalBusinessSchema } from "@/lib/jsonld";
import { SITE_URL, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hypnoterapeut & NLP Terapeut i Odense | Kristian GG",
    template: "%s | Kristian GG",
  },
  description:
    "Professionel hypnose og NLP terapi i Odense og online. Hjælp til stress, angst, depression og personlig udvikling. Book din første session i dag.",
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    locale: "da_DK",
    type: "website",
    siteName: BUSINESS.fullName,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <head>
        <JsonLd data={getLocalBusinessSchema()} />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
