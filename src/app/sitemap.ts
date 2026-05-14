import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://backtraq.in";
  const pages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/for-renters", priority: 0.9, changeFrequency: "monthly" },
    { path: "/for-buyers", priority: 0.9, changeFrequency: "monthly" },
    { path: "/how-it-works", priority: 0.8, changeFrequency: "monthly" },
    { path: "/pricing", priority: 0.9, changeFrequency: "weekly" },
    { path: "/sample-report", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/book", priority: 1.0, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ] as const;

  return pages.map((page) => ({
    url: `${base}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
