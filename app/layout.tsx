import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shipsparesworldwide.com"),

  title: {
    default:
      "Marine Masters | Engine Parts, Ship Machinery & Worldwide Ship Spares Supplier",
    template: "%s | Marine Masters",
  },

  description:
    "Marine Masters supplies genuine, OEM, and reconditioned engine parts, ship machinery, ship spare parts, marine equipment, automation systems, and industrial components with worldwide delivery and fast dispatch.",

  keywords: [
    "engine parts",
    "ship machinery",
    "ship spare parts",
    "ship spares",
    "marine engine parts",
    "marine spare parts",
    "marine equipment",
    "engine components",
    "diesel engine parts",
    "auxiliary engine parts",
    "turbocharger parts",
    "marine automation",
    "pumps",
    "compressors",
    "purifiers",
    "separators",
    "heat exchangers",
    "valves",
    "filters",
    "generators",
    "OEM spare parts",
    "genuine spare parts",
    "reconditioned spare parts",
    "industrial machinery",
    "vessel spare parts",
    "ship engine components",
    "worldwide ship spares",
    "global ship machinery supplier",
    "Marine Masters",
  ],

  authors: [
    {
      name: "Marine Masters",
    },
  ],

  creator: "Marine Masters",

  publisher: "Marine Masters",

  category: "Industrial Equipment",

  alternates: {
    canonical: "/",
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

  openGraph: {
    title:
      "Marine Masters | Engine Parts, Ship Machinery & Worldwide Ship Spares",

    description:
      "Trusted worldwide supplier of engine parts, ship machinery, ship spare parts, OEM components, automation systems, and industrial equipment.",

    url: "https://shipsparesworldwide.com",

    siteName: "Marine Masters",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marine Masters",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Marine Masters | Engine Parts & Ship Machinery Worldwide",

    description:
      "Worldwide supplier of engine parts, ship machinery, ship spare parts, OEM equipment, and industrial components.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://shipsparesworldwide.com/#organization",

              name: "Marine Masters",

              url: "https://shipsparesworldwide.com",

              logo: "https://shipsparesworldwide.com/logo.png",

              email: "sales@shipsparesworldwide.com",

              description:
                "Marine Masters is a worldwide supplier of engine parts, ship machinery, ship spare parts, OEM components, industrial equipment, and marine automation systems.",

              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Sales",
                email: "sales@shipsparesworldwide.com",
                areaServed: "Worldwide",
                availableLanguage: ["English"],
              },

              knowsAbout: [
                "Engine Parts",
                "Ship Machinery",
                "Ship Spare Parts",
                "Marine Equipment",
                "OEM Components",
                "Industrial Machinery",
              ],
              

              sameAs: [
                // Add LinkedIn, Facebook, Instagram etc.
              ],
            }),
          }}
        />

        {/* Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "WebSite",

              "@id": "https://shipsparesworldwide.com/#website",

              name: "Marine Masters",

              url: "https://shipsparesworldwide.com",

              description:
                "Worldwide supplier of engine parts, ship machinery, OEM spare parts and industrial equipment.",

              inLanguage: "en",

              publisher: {
                "@type": "Organization",
                name: "Marine Masters",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
