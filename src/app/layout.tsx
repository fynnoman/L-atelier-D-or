import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import IntroOverlay from "@/components/IntroOverlay";
import { BoutiqueProvider } from "@/lib/boutique/BoutiqueProvider";
import DrawerHost from "@/components/boutique/DrawerHost";
import PageTransitions from "@/components/PageTransitions";
import SignatureCursor from "@/components/SignatureCursor";
import MagneticButtons from "@/components/MagneticButtons";

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
    default: "L'ATELIER D'OR",
    template: "%s · L'ATELIER D'OR",
  },
  description:
    "Handgefertigte Brillen in limitierter Auflage. Titan, Acetat, 18 Karat. Zwischen Paris, Berlin und dem Jura.",
  metadataBase: new URL("https://latelier-dor.example"),
  openGraph: {
    title: "L'ATELIER D'OR",
    description:
      "Handgefertigte Brillen in limitierter Auflage. Zwischen Paris, Berlin und dem Jura.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-bg text-ink">
        <BoutiqueProvider>
          <IntroOverlay />
          <Nav />
          <PageTransitions>
            <main className="relative">{children}</main>
          </PageTransitions>
          <Footer />
          <DrawerHost />
          <SignatureCursor />
          <MagneticButtons />
        </BoutiqueProvider>
        <Script id="qa-scroll" strategy="beforeInteractive">
          {`(()=>{const p=new URLSearchParams(location.search);const y=p.get('y');if(!y)return;const n=parseInt(y,10);const s=()=>window.scrollTo(0,n);s();window.addEventListener('load',s);setTimeout(s,50);setTimeout(s,300);setTimeout(s,1200);})();`}
        </Script>
      </body>
    </html>
  );
}
