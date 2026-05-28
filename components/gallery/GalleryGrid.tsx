"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { GalleryImage } from "@/lib/gallery";

type GalleryGridProps = {
  images: GalleryImage[];
};

export function GalleryGrid({ images }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage =
    activeIndex === null ? null : images[Math.max(0, Math.min(activeIndex, images.length - 1))];

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? current : (current + 1) % images.length,
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? current : (current - 1 + images.length) % images.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, images.length]);

  if (images.length === 0) {
    return (
      <div className="nails-gallery-empty">
        <p>Adicione imagens em public/assets/galeria para montar a galeria.</p>
      </div>
    );
  }

  return (
    <>
      <div className="nails-gallery-grid">
        {images.map((image, index) => (
          <button
            type="button"
            className="nails-gallery-card"
            data-variant={image.variant}
            key={image.src}
            onClick={() => setActiveIndex(index)}
            aria-label={`Abrir ${image.title}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw"
              className="nails-gallery-card-image"
              priority={index < 4}
            />
            <span className="nails-gallery-card-shade" aria-hidden="true" />
          </button>
        ))}
      </div>

      {activeImage ? (
        <div className="nails-gallery-lightbox" role="dialog" aria-modal="true">
          <button
            type="button"
            className="nails-gallery-lightbox-backdrop"
            aria-label="Fechar galeria"
            onClick={() => setActiveIndex(null)}
          />
          <div className="nails-gallery-lightbox-panel">
            <div className="nails-gallery-lightbox-image-wrap">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="100vw"
                className="nails-gallery-lightbox-image"
                priority
              />
            </div>

            <div className="nails-gallery-lightbox-bar">
              <span>
                {String(activeImage.index + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </span>
              <div className="nails-gallery-lightbox-actions">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((current) =>
                      current === null
                        ? current
                        : (current - 1 + images.length) % images.length,
                    )
                  }
                >
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((current) =>
                      current === null ? current : (current + 1) % images.length,
                    )
                  }
                >
                  Próxima
                </button>
                <button type="button" onClick={() => setActiveIndex(null)}>
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
