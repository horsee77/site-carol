import Image from "next/image";
import Link from "next/link";
import { scheduleWhatsappUrl } from "@/lib/contact";

export function HeroSection() {
  return (
    <section className="nails-block nails-hero-block">
      <div className="nails-hero-inner">
        <div className="nails-hero-copy">
          <span className="nails-hero-kicker">Carol Monteiro Nails em Atibaia</span>

          <h1>Nails em Atibaia para realçar sua beleza</h1>

          <p>
            Alongamento, banho de gel, esmaltação em gel, manicure, pedicure e
            cuidados especiais em Atibaia para deixar suas unhas impecáveis em
            cada detalhe.
          </p>

          <div className="nails-hero-actions">
            <a
              href={scheduleWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nails-dark-button"
            >
              Agendar horário
            </a>

            <Link href="/curso" className="nails-light-button">
              Curso
            </Link>
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
