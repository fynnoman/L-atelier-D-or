import type { Metadata } from "next";
import { Inter, Instrument_Serif, Fraunces } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import IntroOverlay from "@/components/IntroOverlay";
import StructuredData, {
  organizationJsonLd,
  websiteJsonLd,
} from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://laterlierdor-fynn-schulzs-projects.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "L'Atelier d'Or — Petite maison française de lunetterie",
    template: "%s · L'Atelier d'Or",
  },
  description:
    "Petite maison française de lunetterie. Édition brève, numérotée à la main.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "L'Atelier d'Or",
    description:
      "Entrez dans une vision d'exception. Voyez le monde à votre dimension.",
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "L'Atelier d'Or",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "L'Atelier d'Or",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L'Atelier d'Or",
    description: "Petite maison française de lunetterie. Édition brève.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${fraunces.variable} ${instrument.variable}`}
    >
      <body>
        <StructuredData data={organizationJsonLd(siteUrl)} />
        <StructuredData data={websiteJsonLd(siteUrl)} />
        <div data-nouveau>
          <Reveal />
          <IntroOverlay
            videoSrc="/video/hero.mp4"
            posterSrc="/video/hero-poster.jpg"
            dismissAt={10}
          />
          <Nav />
          <div className="relative">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
