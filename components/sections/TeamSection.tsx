import Image from "next/image";
import { instagramProfileUrl } from "@/lib/instagram";

export function TeamSection() {
  return (
    <section className="nails-carol-block" aria-labelledby="carol-title">
      <div className="nails-carol-media">
        <Image
          src="/assets/photos/img-02.png"
          alt="Trabalho de nail design com acabamento sofisticado da Carol Monteiro"
          width={640}
          height={760}
          className="nails-carol-image"
        />
        <div className="nails-carol-signature">
          <strong>Carol Monteiro</strong>
          <span>Nail Designer</span>
        </div>
      </div>

      <div className="nails-carol-copy">
        <span className="nails-section-kicker">A profissional</span>
        <h2 id="carol-title">Quem é Carol Monteiro</h2>
        <p className="nails-carol-lead">
          Nail designer dedicada a transformar cada atendimento em uma
          experiência de beleza, cuidado e sofisticação.
        </p>
        <p>
          Com atenção aos detalhes e olhar apurado para acabamentos elegantes,
          Carol cria unhas que valorizam o estilo de cada cliente, sempre com
          técnica, delicadeza e um resultado impecável.
        </p>

        <div className="nails-carol-values" aria-label="Diferenciais da Carol">
          <div>
            <strong>Técnica</strong>
            <span>Procedimentos precisos e seguros</span>
          </div>
          <div>
            <strong>Cuidado</strong>
            <span>Atendimento pessoal e atencioso</span>
          </div>
          <div>
            <strong>Elegância</strong>
            <span>Acabamentos com assinatura luxury</span>
          </div>
        </div>

        <div className="nails-carol-actions">
          <a href="#contact" className="nails-pill-button">
            Agendar horário
          </a>
          <a
            href={instagramProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nails-light-button"
          >
            Ver Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
