import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: {
    default: "L’Atelier d’Or — Maison de lunetterie française",
    template: "%s · L’Atelier d’Or",
  },
  description:
    "Une vision d’exception. Quatre paires, quatre atmosphères. Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude — la première collection de L’Atelier d’Or.",
  metadataBase: new URL("https://latelier-dor.com"),
  openGraph: {
    title: "L’Atelier d’Or",
    description:
      "Entrez dans une vision d’exception. Voyez le monde à votre dimension.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <Nav />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
