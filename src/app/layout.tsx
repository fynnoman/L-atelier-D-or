import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
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
    default: "L'Atelier d'Or — Une petite maison française",
    template: "%s · L'Atelier d'Or",
  },
  description:
    "Une petite maison française de lunetterie. Quatre pièces, un an. Fait main à Paris, présenté sur rendez-vous.",
  metadataBase: new URL("https://latelier-dor.com"),
  openGraph: {
    title: "L'Atelier d'Or — Une petite maison française",
    description:
      "Entrez dans une vision d'exception. Voyez le monde à votre dimension.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} ${instrument.variable}`}>
      <body>
        <div data-nouveau>
          <Reveal />
          <Nav />
          <div className="relative">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
