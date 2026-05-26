import Image from "next/image";
import { photos } from "@/lib/landing-data";

export function AboutSection() {
  return (
    <section id="about" className="nails-block nails-about-block">
      <div className="nails-about-head">
        <span className="nails-section-kicker">Sobre a Carol</span>

        <h2>Beleza, técnica e cuidado em cada detalhe</h2>

        <p>
          Cada atendimento é pensado para valorizar suas mãos com elegância,
          acabamento impecável e um resultado que combina com seu estilo.
        </p>
      </div>

      <div className="nails-triple-gallery">
        <Image
          src={photos.nailDark}
          alt="Unhas decoradas com acabamento elegante"
          width={420}
          height={340}
          className="nails-gallery-img"
        />

        <Image
          src={photos.salon}
          alt="Atendimento profissional de manicure"
          width={420}
          height={340}
          className="nails-gallery-img nails-gallery-img-large"
        />

        <Image
          src={photos.file}
          alt="Finalização delicada das unhas"
          width={420}
          height={340}
          className="nails-gallery-img"
        />
      </div>
    </section>
  );
}
