import Image from "next/image";
import { portfolioCards } from "@/lib/landing-data";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="nails-block">
      <div className="nails-center-head">
        <h2>Portfolio of Stunning Designs</h2>
      </div>
      <div className="nails-portfolio-grid">
        {portfolioCards.map((item) => (
          <article className="nails-portfolio-card" key={item.title}>
            <Image
              src={item.image}
              alt={item.title}
              width={460}
              height={280}
              className="nails-portfolio-image"
            />
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
