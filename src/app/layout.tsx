import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Background } from "@/components/background";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yunjoarchive.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "yunjoarchive",
    template: "%s · yunjoarchive",
  },
  description: "윤조아카이브 - 수제 도자기 포트폴리오",
  keywords: ["수공예", "핸드메이드", "핸드메이드 도자기", "수제 도자기", "도자기", "세라믹", "윤조아카이브"],
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  authors: [{ name: "yunjoarchive" }],
  creator: "yunjoarchive",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: BASE_URL,
    siteName: "yunjoarchive",
    title: "yunjoarchive",
    description: "윤조아카이브 - 수제 도자기 포트폴리오",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "yunjoarchive - 핸드메이드 도자기 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "yunjoarchive",
    description: "윤조아카이브 - 수제 도자기 포트폴리오",
    images: ["/hero.jpg"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "장윤정",
    alternateName: "yunjoarchive",
    url: BASE_URL,
    email: "yunjoarchive@naver.com",
    brand: { "@type": "Brand", name: "yunjoarchive" },
    sameAs: [
      "https://instagram.com/yunjoarchive",
      "https://smartstore.naver.com/yunjoarchive",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "yunjoarchive",
    alternateName: "윤조아카이브",
    description: "윤조아카이브 - 수제 도자기 포트폴리오",
    url: BASE_URL,
    email: "yunjoarchive@naver.com",
    image: `${BASE_URL}/hero.jpg`,
    founder: { "@type": "Person", name: "장윤정" },
    sameAs: [
      "https://instagram.com/yunjoarchive",
      "https://smartstore.naver.com/yunjoarchive",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "수제 도자기",
      url: "https://smartstore.naver.com/yunjoarchive",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${dmSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden bg-background text-foreground selection:bg-neutral-900 selection:text-white">
        <Background />
        {children}
      </body>
    </html>
  );
}
