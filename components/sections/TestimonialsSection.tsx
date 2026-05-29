"use client";

import { useRef } from "react";
import { testimonials } from "@/lib/landing-data";

export function TestimonialsSection() {
  const reviewTrackRef = useRef<HTMLDivElement>(null);
  const didScrollOnPointerDownRef = useRef(false);

  function scrollReviews(direction: -1 | 1) {
    const track = reviewTrackRef.current;

    if (!track) {
      return;
    }

    const card = track.querySelector<HTMLElement>(".nails-review-card");
    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    const step = (card?.getBoundingClientRect().width || track.clientWidth) + gap;
    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    const currentIndex = Math.round(track.scrollLeft / step);
    const maxIndex = Math.max(0, Math.ceil(maxScrollLeft / step));
    const nextIndex = Math.min(Math.max(currentIndex + direction, 0), maxIndex);
    const shouldScrollImmediately =
      window.matchMedia("(max-width: 680px)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    track.scrollTo({
      left: Math.min(nextIndex * step, maxScrollLeft),
      behavior: shouldScrollImmediately ? "auto" : "smooth",
    });
  }

  function handleReviewPointerDown(direction: -1 | 1) {
    didScrollOnPointerDownRef.current = true;
    scrollReviews(direction);
  }

  function handleReviewClick(direction: -1 | 1) {
    if (didScrollOnPointerDownRef.current) {
      didScrollOnPointerDownRef.current = false;
      return;
    }

    scrollReviews(direction);
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
            onPointerDown={() => handleReviewPointerDown(-1)}
            onClick={() => handleReviewClick(-1)}
            aria-label="Depoimento anterior"
          >
            &#8592;
          </button>
          <button
            type="button"
            onPointerDown={() => handleReviewPointerDown(1)}
            onClick={() => handleReviewClick(1)}
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
