import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/api";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brieflyq.com";

  const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/standards", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/access", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/terms", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.6, changeFrequency: "monthly" as const },
  ].map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  return [
    ...staticPages,
    ...postUrls,
  ];
}

