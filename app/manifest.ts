import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Carol Nails",
    description: siteConfig.shortDescription,
    start_url: "/",
    scope: "/",
    lang: siteConfig.language,
    display: "standalone",
    background_color: siteConfig.backgroundColor,
    theme_color: siteConfig.themeColor,
    categories: ["beauty", "lifestyle"],
    icons: [
      {
        src: "/assets/icon-site.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
