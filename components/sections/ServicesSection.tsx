import Image from "next/image";
import { scheduleWhatsappUrl } from "@/lib/contact";
import { serviceCards } from "@/lib/landing-data";

export function ServicesSection() {
  return (
    <section id="services" className="nails-services-block">
      <div className="nails-inline-head">
        <div>
          <span className="nails-section-kicker">Serviços</span>
          <h2>Cuidados exclusivos para mãos impecáveis</h2>
        </div>
        <a
          href={scheduleWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="nails-light-button"
        >
          Agendar horário
        </a>
      </div>

      <div className="nails-service-grid">
        {serviceCards.map((service) => (
          <article className="nails-service-card" key={service.title}>
            <Image
              src={service.image}
              alt={service.title}
              width={460}
              height={360}
              className="nails-service-image"
            />
            <div className="nails-service-meta">
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <span aria-hidden="true">{service.tag}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
