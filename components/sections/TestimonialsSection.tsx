"use client";

import { useRef } from "react";
import { testimonials } from "@/lib/landing-data";

export function TestimonialsSection() {
  const reviewTrackRef = useRef<HTMLDivElement>(null);

  function scrollReviews(direction: -1 | 1) {
    const track = reviewTrackRef.current;
    const card = track?.querySelector<HTMLElement>(".nails-review-card");

    if (!track) {
      return;
    }

    track.scrollBy({
      left: direction * ((card?.offsetWidth || track.clientWidth) + 18),
      behavior: "smooth",
    });
  }

  return (
    <section className="nails-block nails-testimonials-block">
      <div className="nails-review-header">
        <div>
          <span className="nails-section-kicker">Depoimentos</span>
          <h2>Clientes que confiam na Carol</h2>
        </div>

        <div className="nails-review-controls" aria-label="Navegar depoimentos">
          <button
            type="button"
            onClick={() => scrollReviews(-1)}
            aria-label="Depoimento anterior"
          >
            &#8592;
          </button>
          <button
            type="button"
            onClick={() => scrollReviews(1)}
            aria-label="Próximo depoimento"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="nails-review-list" ref={reviewTrackRef}>
        {testimonials.map((review) => (
          <article className="nails-review-card" key={review.name}>
            <span className="nails-review-mark" aria-hidden="true">
              &ldquo;
            </span>
            <div className="nails-review-content">
              <p>{review.message}</p>
              <span className="nails-review-avatar" aria-hidden="true">
                {review.name
                  .split(" ")
                  .map((name) => name.charAt(0))
                  .join("")}
              </span>
              <h3>{review.name}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
