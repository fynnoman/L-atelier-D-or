import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import IntroOverlay from "@/components/IntroOverlay";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: "L'Atelier D'Or · Maison d'Optique",
  description:
    "Handgefertigte Brillen in limitierter Auflage. Titan, Acetat, 18 Karat. Ein Atelier für seltene Objekte.",
  openGraph: {
    title: "L'Atelier D'Or",
    description: "Maison d'Optique. Handgefertigte Brillen in limitierter Auflage.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${inter.variable} ${fraunces.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <IntroOverlay />
        <SmoothScroll>
          <Nav />
          <main className="relative">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
