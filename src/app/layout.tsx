import type { Metadata } from "next";
import { Inter, Instrument_Serif, Fraunces } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import IntroOverlay from "@/components/IntroOverlay";

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

export const metadata: Metadata = {
  title: {
    default: "L'Atelier d'Or — Petite maison française de lunetterie",
    template: "%s · L'Atelier d'Or",
  },
  description:
    "Petite maison française de lunetterie. Quatre pièces par an. Faites main à Paris, numérotées à la main.",
  metadataBase: new URL("https://latelier-dor.com"),
  openGraph: {
    title: "L'Atelier d'Or",
    description:
      "Entrez dans une vision d'exception. Voyez le monde à votre dimension.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${fraunces.variable} ${instrument.variable}`}
    >
      <body>
        <div data-nouveau>
          <Reveal />
          <IntroOverlay videoSrc="/video/intro.mp4" posterSrc="/video/intro-poster.jpg" />
          <Nav />
          <div className="relative">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
