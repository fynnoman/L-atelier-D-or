import ConseilClient from "./ConseilClient";

export const metadata = {
  title: "Conseil privé",
  description:
    "Un mot à la maison. Un écrin s’ouvre, une carte vous attend — et notre conseil vous est personnellement destiné.",
  alternates: { canonical: "/conseil" },
  robots: { index: false, follow: true },
};

export default function ConseilPage() {
  return <ConseilClient />;
}
