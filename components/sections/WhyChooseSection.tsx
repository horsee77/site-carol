import Image from "next/image";
import { whyChooseItems } from "@/lib/landing-data";

export function WhyChooseSection() {
  const leftItems = whyChooseItems.slice(0, 2);
  const rightItems = whyChooseItems.slice(2, 4);

  return (
    <section className="nails-block nails-why-block">
      <div className="nails-center-head">
        <span className="nails-section-kicker">Por que escolher</span>

        <h2>Por que escolher a Carol</h2>

        <p>
          Atendimento cuidadoso, acabamento elegante e técnicas pensadas para
          deixar suas unhas bonitas, resistentes e com a sua personalidade.
        </p>
      </div>

      <div className="nails-why-grid">
        <div className="nails-why-column">
          {leftItems.map((item, index) => (
            <article className="nails-why-card" key={item.title}>
              <span className="nails-why-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <article className="nails-why-image-card">
          <Image
            src="/assets/photos/img-01.png"
            alt="Unhas elegantes feitas por Carol Monteiro Nails"
            width={420}
            height={560}
            className="nails-why-image"
          />
        </article>

        <div className="nails-why-column">
          {rightItems.map((item, index) => (
            <article className="nails-why-card" key={item.title}>
              <span className="nails-why-number">
                {String(index + 3).padStart(2, "0")}
              </span>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
