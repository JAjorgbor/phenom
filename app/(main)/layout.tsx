import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/public/globals.css";
import Header from "@/scaffold/Header";
import Footer from "@/scaffold/Footer";
import Script from "next/script";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s — Phenom",
    default: "Phenom",
  },
  description:
    "PHENOM is a global platform empowering users with limitless financial opportunities, from mobile cryptocurrency mining to monetizing social media for passive income. Explore cutting-edge digital courses and advanced earning models offering daily rewards. Join PHENOM to achieve financial freedom and embrace a life of abundance.",
  twitter: {
    card: "summary_large_image",
    title: {
      template: "%s — Phenom",
      default: "Phenom",
    },
    creator: "@phenom",
    description:
      "PHENOM is a global platform empowering users with limitless financial opportunities, from mobile cryptocurrency mining to monetizing social media for passive income. Explore cutting-edge digital courses and advanced earning models offering daily rewards. Join PHENOM to achieve financial freedom and embrace a life of abundance.",
    images: ["/promo-image.jpg"],
  },

  other: {
    "google-site-verification": "sqsJwdYR5ZIcNWbO7-ebNMCFDOzPgyn4NnaktgI7rWM",
  },
  keywords:
    "financial freedom, cryptocurrency mining, passive income, social media monetization, digital learning, advanced earning models, daily rewards, Phenom platform, phenom, phenomnet",
  openGraph: {
    title: {
      template: "%s — Phenom",
      default: "Phenom",
    },
    description:
      "Phenom is a global platform empowering users with limitless financial opportunities, from mobile cryptocurrency mining to monetizing social media for passive income. Explore cutting-edge digital courses and advanced earning models offering daily rewards. Join PHENOM to achieve financial freedom and embrace a life of abundance.",
    images: [
      {
        url: "/promo-image.jpg",
        width: 1200,
        height: 630,
        alt: `phenom promo image`,
      },
    ],
  },
  // metadataBase: new URL(
  //   process.env.NEXT_PUBLIC_APP_BASE_URL || "https://localhost:3000"
  // ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager Script */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PTZ5J7GK');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PTZ5J7GK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
