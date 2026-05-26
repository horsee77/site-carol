import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://carolmonteironails.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Carol Monteiro Nails | Nail Designer",
    template: "%s | Carol Monteiro Nails",
  },

  description:
    "Carol Monteiro Nails é um espaço especializado em alongamento, banho de gel, esmaltação em gel, manicure, pedicure, plástica dos pés, reconstrução de unha e cursos profissionais.",

  keywords: [
    "Carol Monteiro Nails",
    "nail designer",
    "alongamento de unhas",
    "banho de gel",
    "esmaltação em gel",
    "manicure",
    "pedicure",
    "plástica dos pés",
    "reconstrução de unha",
    "curso de unhas",
    "unhas em gel",
  ],

  authors: [{ name: "Carol Monteiro Nails" }],
  creator: "Carol Monteiro Nails",
  publisher: "Carol Monteiro Nails",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      {
        url: "/assets/icon-site.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/assets/icon-site.svg",
    apple: "/assets/icon-site.svg",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Carol Monteiro Nails",
    title: "Carol Monteiro Nails | Nail Designer",
    description:
      "Unhas elegantes, atendimento cuidadoso e acabamento impecável para realçar sua beleza em cada detalhe.",
    images: [
      {
        url: "/assets/og/carol-monteiro-nails.jpg",
        width: 1200,
        height: 630,
        alt: "Carol Monteiro Nails - Nail Designer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Carol Monteiro Nails | Nail Designer",
    description:
      "Alongamento, banho de gel, esmaltação em gel, manicure, pedicure e cursos profissionais.",
    images: ["/assets/og/carol-monteiro-nails.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "beauty",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#eee2d4",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
