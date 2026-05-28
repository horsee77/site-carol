import Image from "next/image";

export function HeroSection() {
  return (
    <section className="nails-block nails-hero-block">
      <div className="nails-hero-inner">
        <div className="nails-hero-copy">
          <span className="nails-hero-kicker">Carol Monteiro Nails</span>

          <h1>Unhas elegantes para realçar sua beleza</h1>

          <p>
            Alongamento, banho de gel, esmaltação em gel, manicure, pedicure e
            cuidados especiais para deixar suas unhas impecáveis em cada detalhe.
          </p>

          <div className="nails-hero-actions">
            <a href="#contact" className="nails-dark-button">
              Agendar horário
            </a>

            <a href="#course" className="nails-light-button">
              Curso
            </a>
          </div>
        </div>

        <div className="nails-hero-media">
          <Image
            src="/assets/photos/img-hero.png"
            alt="Unhas delicadas feitas por Carol Monteiro Nails"
            width={760}
            height={520}
            className="nails-hero-image"
            priority
          />
        </div>
      </div>
    </section>
  );
}
