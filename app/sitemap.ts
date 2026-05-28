import type { MetadataRoute } from "next";
import { getGalleryImages } from "@/lib/gallery";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const galleryImages = getGalleryImages();

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: siteConfig.localImages.map((image) => absoluteUrl(image)),
    },
    {
      url: absoluteUrl("/galeria"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      images: galleryImages.map((image) => absoluteUrl(image.src)),
    },
    {
      url: absoluteUrl("/curso"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [absoluteUrl(siteConfig.socialImage)],
    },
  ];
}
