import type { MetadataRoute } from "next";
import { PIECES } from "@/data/collection";
import { CAHIERS } from "@/data/journal";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://laterlierdor-fynn-schulzs-projects.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/collection`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/atelier`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/journal`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/accessibilite`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const pieces: MetadataRoute.Sitemap = PIECES.map((p) => ({
    url: `${siteUrl}/collection/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const cahiers: MetadataRoute.Sitemap = CAHIERS.map((c) => ({
    url: `${siteUrl}/journal/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...pieces, ...cahiers];
}
