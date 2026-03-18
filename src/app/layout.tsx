import Script from "next/script";
import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { Loader, Header, CookieCard, FooterCall, Footer } from "./layoutComponent";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best flight booking, cheap flight, TraveloCare.com",
  keywords: "Flight Booking, Cheap Flight, International Flights at Lowest Price, Air Ticket Booking Bookings, cheap flight agency, airoplane reservation, airoplan ticket booking, Cheap flight ticket, traveller agency, Airoplane, cheap flights, airline tickets, plane tickets, cheap airline tickets, flight ticket, cheap flight tickets, flight booking, cheap plane tickets, air tickets, cheap air, cheap air tickets, airline flights, air ticket booking, fly tickets, air line tickets, multi city flights, cheap international flights, book flights online, cheap airline flights",
  description: 'Reserve your cheap airline flights with ReservationKart. Your top traveller agency for airplane reservation and ticket booking. Your go-to traveler agency for affordable air travel. Fly smart, save more!',
  verification: { google: "Rd1Lb2gHLk4aifgluXnh_Pl8CdB8GnAgBLGWd1oNQzA" },

  // ✅ Logo used correctly as Open Graph image (shows on WhatsApp, Facebook etc.)
  openGraph: {
    title: "Best flight booking, cheap flight, TraveloCare.com",
    description: "Reserve your cheap airline flights with TraveloCare.",
    url: "https://www.travelocare.com",
    siteName: "TraveloCare",
    images: [
      {
        url: "https://www.travelocare.com/logo.png", // ✅ must be a full public URL
        width: 800,
        height: 600,
        alt: "TraveloCare Logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best flight booking, cheap flight, TraveloCare.com",
    description: "Reserve your cheap airline flights with TraveloCare.",
    images: ["https://www.travelocare.com/logo.png"], // ✅ full public URL
  },

  // ✅ Canonical is a page URL, never an image path
  alternates: {
    canonical: "https://www.travelocare.com",
  },

  icons: {
    icon: "/logo.png",          // ✅ browser tab icon
    apple: "/logo.png",            // ✅ iOS home screen icon
  },

  // ✅ Fixed: noindex + nofollow was blocking Google from indexing your site!
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <GoogleTagManager gtmId='AW-16615907817' />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16615907817"></Script>
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16615907817');
            `,
          }}
        />
        {/* ✅ google-site-verification handled via metadata.verification above,
            but keeping here as a fallback is also fine */}
        <meta name="google-site-verification" content="Rd1Lb2gHLk4aifgluXnh_Pl8CdB8GnAgBLGWd1oNQzA" />
        <meta charSet="UTF-8" />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=AW-16615907817"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Suspense fallback={<Loader />}>
          <Header />
          {children}
          <CookieCard />
          <FooterCall />
          <Footer />
        </Suspense>

        <Script async src="https://api.cronbot.ai/v1/widgets/app/app_tilrrkroyu43"></Script>
      </body>
    </html>
  );
}