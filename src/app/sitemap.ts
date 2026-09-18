import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { languages } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  return languages.flatMap((lang) => [
    { url: `${origin}/${lang}`, changeFrequency: "monthly" as const, priority: 1 },
    { url: `${origin}/${lang}/projects`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${origin}/${lang}/resume`, changeFrequency: "monthly" as const, priority: 0.6 },
    ...projects.map((project) => ({ url: `${origin}/${lang}/projects/${project.slug}`, changeFrequency: "monthly" as const, priority: 0.7 }))
  ]);
}
