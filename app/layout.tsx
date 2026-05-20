import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToHash from "@/components/hooks/AutoScroll";
import { HeadingAnchor } from "@/components/HeadingAnchor";
import GlobalLoader from "@/components/GlobalLoader";
import { LoadingProvider } from "@/app/providers/LoadingProvider";
import QueryProvider from "@/app/providers/QueryProvider";
import WebVitalsReporter from "@/components/WebVitalsReporter";
import ClientOnlyWidgets from "@/components/ClientOnlyWidgets";
import { getMetadataBase, getSiteUrl, SITE_NAME } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: `${SITE_NAME} | Custom Software & AI Development`,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Techionik builds secure, scalable, and custom software solutions for modern businesses.",
  keywords: [
    "custom software development",
    "AI development company",
    "enterprise software",
    "digital transformation",
    "Techionik",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${SITE_NAME} | Custom Software & AI Development`,
    description:
      "Techionik builds secure, scalable, and custom software solutions for modern businesses.",
    url: getSiteUrl(),
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og/home-og.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} | Custom Software & AI Development`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Custom Software & AI Development`,
    description:
      "Techionik builds secure, scalable, and custom software solutions for modern businesses.",
    images: ["/images/og/home-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TV8VXTVQ');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const THEME_STORAGE_KEY = 'theme-preference';
                const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
                const preferredTheme = savedTheme || 'dark';

                if (preferredTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LoadingProvider>
          <QueryProvider>
          <WebVitalsReporter />
          <GlobalLoader />
          <HeadingAnchor />
          <ScrollToHash />
          <ClientOnlyWidgets />
          <noscript>
            <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-TV8VXTVQ"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
            <Header />
            <main>{children}</main>
            <Footer />
          </QueryProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
