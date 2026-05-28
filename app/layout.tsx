import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Script from "next/script";
import { absoluteUrl, siteConfig } from "@/lib/seo";
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

const ogImage = absoluteUrl(siteConfig.socialImage);

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [
    "Carol Monteiro Nails",
    "Carol Monteiro Nails Atibaia",
    "nails em Atibaia",
    "nail designer",
    "nail designer em Atibaia",
    "alongamento de unhas",
    "alongamento de unhas em Atibaia",
    "banho de gel",
    "esmaltação em gel",
    "manicure",
    "manicure em Atibaia",
    "pedicure",
    "plástica dos pés",
    "reconstrução de unha",
    "curso de unhas",
    "curso de unhas em Atibaia",
    "curso de alongamento de unhas",
    "unhas em gel",
    "unhas em gel em Atibaia",
    "blindagem de unhas",
    "nail art",
  ],

  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "x-default": "/",
    },
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

  manifest: "/manifest.webmanifest",

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    images: [
      {
        url: ogImage,
        width: 1920,
        height: 1080,
        alt: `${siteConfig.name} - nails em Atibaia`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    images: [ogImage],
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

  other: {
    "geo.region": "BR-SP",
    "geo.placename": siteConfig.city,
    "business:contact_data:locality": siteConfig.city,
    "business:contact_data:region": siteConfig.region,
    "business:contact_data:country_name": "Brasil",
  },

  category: "beauty",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: siteConfig.themeColor,
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
      <body>
        {children}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${siteConfig.metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${siteConfig.metaPixelId}&ev=PageView&noscript=1" alt="" />`,
          }}
        />
      </body>
    </html>
  );
}
