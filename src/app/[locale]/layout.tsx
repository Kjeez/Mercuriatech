import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Mercuriatech | Premium IT Hardware Distributor in Dubai",
  description:
    "Mercuriatech FZ CO — Your trusted B2B IT hardware distributor based in Dubai Silicon Oasis. Supplying world-class technology solutions across UAE and East Africa from 15+ global brands.",
  keywords: [
    "IT hardware distributor Dubai",
    "B2B technology solutions UAE",
    "Cisco distributor Dubai",
    "HP Dell Lenovo supplier",
    "IT equipment East Africa",
    "Mercuriatech",
    "IFZA Free Zone",
    "Dubai Silicon Oasis",
  ],
  openGraph: {
    title: "Mercuriatech | Premium IT Hardware Distributor in Dubai",
    description:
      "Supplying world-class technology solutions across UAE and East Africa",
    type: "website",
    url: "https://www.mercuriatech.com",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as 'en' | 'sw')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="font-inter antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
