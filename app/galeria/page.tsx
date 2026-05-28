import Image from "next/image";
import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { getGalleryImages } from "@/lib/gallery";
import { absoluteUrl, jsonLdScript, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Galeria de unhas",
  description:
    "Galeria de trabalhos da Carol Monteiro Nails com alongamento, banho de gel, esmaltação em gel, nail art e acabamentos delicados.",
  alternates: {
    canonical: "/galeria",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/galeria",
    siteName: siteConfig.name,
    title: `Galeria de unhas | ${siteConfig.name}`,
    description:
      "Veja os trabalhos de nail design, alongamento, esmaltação em gel e acabamentos da Carol Monteiro Nails.",
    images: [
      {
        url: absoluteUrl(siteConfig.socialImage),
        width: 1920,
        height: 1080,
        alt: `${siteConfig.name} - galeria de unhas`,
      },
    ],
  },
};

export default function GalleryPage() {
  const images = getGalleryImages();
  const featuredImages = images.slice(0, 4);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": absoluteUrl("/galeria#collection"),
    name: `Galeria de unhas | ${siteConfig.name}`,
    url: absoluteUrl("/galeria"),
    inLanguage: siteConfig.language,
    description: metadata.description,
    isPartOf: {
      "@id": absoluteUrl("/#website"),
    },
    about: {
      "@id": absoluteUrl("/#business"),
    },
    primaryImageOfPage: featuredImages[0]
      ? {
          "@type": "ImageObject",
          url: absoluteUrl(featuredImages[0].src),
        }
      : undefined,
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(structuredData) }}
      />

      <section className="nails-gallery-hero" aria-labelledby="gallery-title">
        <div className="nails-gallery-hero-copy">
          <span className="nails-section-kicker">Galeria</span>
          <h1 id="gallery-title">A arte da Carol em cada detalhe</h1>
          <p>
            Uma seleção viva dos trabalhos feitos no estúdio: formatos elegantes,
            brilho delicado, acabamento limpo e composições pensadas para cada
            cliente.
          </p>
          <div className="nails-gallery-stats" aria-label="Especialidades da galeria">
            <span>Alongamento</span>
            <span>Gel e nail art</span>
          </div>
        </div>

        {featuredImages.length > 0 ? (
          <div className="nails-gallery-mosaic" aria-hidden="true">
            {featuredImages.map((image, index) => (
              <div className="nails-gallery-mosaic-item" data-index={index} key={image.src}>
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="(max-width: 980px) 50vw, 28vw"
                  className="nails-gallery-mosaic-image"
                  priority
                />
              </div>
            ))}
          </div>
        ) : null}
      </section>

      <section className="nails-gallery-showcase" aria-label="Trabalhos da galeria">
        <div className="nails-gallery-showcase-head">
          <span className="nails-section-kicker">Trabalhos</span>
          <h2>Galeria completa</h2>
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
            Agendar pelo WhatsApp
          </a>
        </div>
        <GalleryGrid images={images} />
      </section>
    </SiteLayout>
  );
}
