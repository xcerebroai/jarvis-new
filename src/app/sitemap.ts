import type { MetadataRoute } from "next";

import { site } from "@/content/site";

/** Priority reflects conversion importance, not page count. */
const routes: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1 },
  { path: "/build", priority: 0.9 },
  { path: "/products", priority: 0.8 },
  { path: "/products/jarvis-crm", priority: 0.8 },
  { path: "/products/xcerebro-ai-agents", priority: 0.8 },
  { path: "/products/lead-scraper", priority: 0.8 },
  { path: "/services/custom-builds", priority: 0.8 },
  { path: "/solutions", priority: 0.7 },
  { path: "/pricing", priority: 0.7 },
  { path: "/about", priority: 0.5 },
  { path: "/contact", priority: 0.5 },
  { path: "/resources", priority: 0.4 },
  { path: "/resources/implementation", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority }) => ({
    url: new URL(path, site.url).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}

// PREVIEW BRANCH: required by `output: export`, which cannot infer that a
// route handler is static.
export const dynamic = "force-static";
