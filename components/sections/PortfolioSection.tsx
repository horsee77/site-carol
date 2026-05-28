import Image from "next/image";
import Link from "next/link";
import { getGalleryImages } from "@/lib/gallery";

export function PortfolioSection() {
  const galleryImages = getGalleryImages().slice(0, 4);

  return (
    <section id="portfolio" className="nails-gallery-preview">
      <div className="nails-gallery-preview-head">
        <div>
          <span className="nails-section-kicker">Galeria</span>
          <h2>Uma amostra dos acabamentos da Carol</h2>
          <p>
            Designs delicados, brilho na medida e formatos pensados para
            valorizar cada mão com elegância.
          </p>
        </div>

        <Link href="/galeria" className="nails-gallery-preview-button">
          Ver galeria
        </Link>
      </div>

      <div className="nails-gallery-preview-grid" aria-label="Prévia da galeria">
        {galleryImages.map((image, index) => (
          <Link
            href="/galeria"
            className="nails-gallery-preview-card"
            data-size={index === 0 ? "large" : index === 3 ? "wide" : "small"}
            key={image.src}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw"
              className="nails-gallery-preview-image"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
