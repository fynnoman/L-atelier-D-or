import { notFound } from "next/navigation";
import { CAHIERS, getCahier } from "@/data/journal";
import CahierClient from "./CahierClient";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return CAHIERS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const c = getCahier(slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.chapo,
    alternates: { canonical: `/journal/${c.slug}` },
  };
}

export default async function CahierPage({ params }: { params: Params }) {
  const { slug } = await params;
  const cahier = getCahier(slug);
  if (!cahier) notFound();
  return <CahierClient cahier={cahier} />;
}
