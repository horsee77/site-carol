import Image from "next/image";
import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { getGalleryImages } from "@/lib/gallery";
import { absoluteUrl, jsonLdScript, siteConfig } from "@/lib/seo";

const courseWhatsappUrl = `https://wa.me/${siteConfig.phone.replace("+", "")}?text=${encodeURIComponent(
  "Olá, Carol! Quero informações sobre o Curso VIP Nail Designer Iniciante.",
)}`;

const courseModules = [
  "Biossegurança",
  "Anatomia das unhas",
  "Preparação da lâmina natural da unha",
  "Cuticulagem",
  "Colocação da fibra passo a passo",
  "Lista de materiais",
  "Lixamento técnico",
  "Manutenção",
  "Remoção",
  "Formatos de unha",
  "Banho de gel",
  "Esmaltação em gel",
  "Arte encapsulada",
  "Francesinha",
  "Bônus surpresa",
];

const courseIncludes = [
  "Apostila",
  "Certificado",
  "Coffee break",
  "Kit de materiais para o dia do curso",
  "Suporte vitalício",
];

const schedule = [
  {
    day: "Dia 1",
    items: [
      "Coffee break",
      "Aula teórica sobre o curso",
      "Aula prática na modelo",
      "Formatos de unha",
    ],
  },
  {
    day: "Dia 2",
    items: ["Aula prática", "Técnica completa na modelo", "Bônus"],
  },
];

const policies = [
  "O valor da inscrição reserva a vaga e prepara o material personalizado da aluna.",
  "Em caso de desistência, o valor pago não poderá ser devolvido.",
  "Se a aluna não puder comparecer na data marcada, será avaliada a possibilidade de remanejamento para uma próxima turma, conforme disponibilidade.",
  "A ausência no dia e horário do curso será considerada desistência, sem reembolso ou transferência automática.",
  "A organização pode remarcar o curso em situações excepcionais, garantindo uma nova data para realização.",
];

export const metadata: Metadata = {
  title: "Curso VIP Nail Designer Iniciante",
  description:
    "Página completa do Curso VIP Nail Designer Iniciante da Carol Monteiro: conteúdo, cronograma, inclusos, investimento e inscrição pelo WhatsApp.",
  alternates: {
    canonical: "/curso",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/curso",
    siteName: siteConfig.name,
    title: `Curso VIP Nail Designer Iniciante | ${siteConfig.name}`,
    description:
      "Aprenda do zero ao sucesso com técnica, prática orientada, apostila, certificado, kit de materiais e suporte vitalício.",
    images: [
      {
        url: absoluteUrl(siteConfig.socialImage),
        width: 1920,
        height: 1080,
        alt: `${siteConfig.name} - Curso VIP Nail Designer Iniciante`,
      },
    ],
  },
};

export default function CoursePage() {
  const galleryImages = getGalleryImages().slice(0, 3);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": absoluteUrl("/curso#course"),
    name: "Curso VIP Nail Designer Iniciante",
    description: metadata.description,
    provider: {
      "@id": absoluteUrl("/#business"),
      name: siteConfig.name,
      sameAs: siteConfig.instagramUrl,
    },
    url: absoluteUrl("/curso"),
    inLanguage: siteConfig.language,
    offers: {
      "@type": "Offer",
      price: "1000.00",
      priceCurrency: "BRL",
      availability: "https://schema.org/LimitedAvailability",
      url: absoluteUrl("/curso"),
    },
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(structuredData) }}
      />

      <section className="nails-vip-hero" aria-labelledby="vip-title">
        <div className="nails-vip-hero-copy">
          <span className="nails-vip-pill">Curso VIP</span>
          <h1 id="vip-title">Nail Designer Iniciante</h1>
          <p>
            Uma formação presencial para quem quer começar do zero, dominar a
            técnica com segurança e transformar o nail design em uma fonte real
            de independência financeira.
          </p>
          <div className="nails-vip-actions">
            <a href={courseWhatsappUrl} target="_blank" rel="noopener noreferrer">
              Garantir minha vaga
            </a>
            <a href="#cronograma">Ver cronograma</a>
          </div>
        </div>

        <div className="nails-vip-hero-media">
          <Image
            src="/assets/photos/img-hero.png"
            alt="Modelo com unhas feitas para o Curso VIP Carol Monteiro"
            width={760}
            height={920}
            className="nails-vip-hero-image"
            priority
          />
        </div>
      </section>

      <section className="nails-vip-intro">
        <div>
          <span className="nails-section-kicker">Objetivo</span>
          <h2>Do zero ao sucesso, com um caminho claro.</h2>
        </div>
        <p>
          A Carol ensina as técnicas que desenvolveu e usa no dia a dia para
          descomplicar o aprendizado, acelerar sua evolução e te ajudar a se
          destacar no mercado como nail designer.
        </p>
      </section>

      <section className="nails-vip-modules" aria-labelledby="modules-title">
        <div className="nails-vip-section-head">
          <span className="nails-section-kicker">Você vai aprender</span>
          <h2 id="modules-title">Conteúdo completo para iniciar com confiança</h2>
        </div>
        <div className="nails-vip-module-grid">
          {courseModules.map((item, index) => (
            <article key={item} className="nails-vip-module-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="cronograma" className="nails-vip-schedule">
        <div className="nails-vip-section-head">
          <span className="nails-section-kicker">Cronograma</span>
          <h2>Dois dias de imersão entre teoria e prática</h2>
        </div>
        <div className="nails-vip-schedule-grid">
          {schedule.map((day) => (
            <article className="nails-vip-schedule-card" key={day.day}>
              <span>{day.day}</span>
              <ul>
                {day.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="nails-vip-alert">
          Atenção: é responsabilidade da aluna levar sua modelo para as aulas
          práticas.
        </p>
      </section>

      <section className="nails-vip-includes">
        <div className="nails-vip-section-head">
          <span className="nails-section-kicker">Incluso no curso</span>
          <h2>Material, suporte e estrutura para aprender melhor</h2>
        </div>
        <div className="nails-vip-include-grid">
          {courseIncludes.map((item) => (
            <article key={item}>
              <span aria-hidden="true">✦</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
        <div className="nails-vip-kit">
          <div>
            <span className="nails-section-kicker">Caixa com materiais</span>
            <p>
              Preparadores, gel, fibra, lixa, presilha, top coat e pincel para
              uso durante o curso.
            </p>
          </div>
          {galleryImages.length > 0 ? (
            <div className="nails-vip-mini-gallery" aria-hidden="true">
              {galleryImages.map((image) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt=""
                  width={220}
                  height={260}
                  className="nails-vip-mini-image"
                />
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="nails-vip-investment">
        <div className="nails-vip-section-head">
          <span className="nails-section-kicker">Investimento</span>
          <h2>Escolha a melhor forma de garantir sua vaga</h2>
        </div>
        <div className="nails-vip-price-grid">
          <article>
            <span>À vista</span>
            <strong>R$1.000,00</strong>
          </article>
          <article>
            <span>Parcelado</span>
            <strong>R$1.300,00</strong>
            <p>Até em 12x</p>
          </article>
          <article>
            <span>Sinal</span>
            <strong>R$200,00</strong>
            <p>Descontado do valor total do curso.</p>
          </article>
        </div>
        <a href={courseWhatsappUrl} target="_blank" rel="noopener noreferrer">
          Fazer inscrição pelo WhatsApp
        </a>
      </section>

      <section className="nails-vip-policy">
        <div className="nails-vip-section-head">
          <span className="nails-section-kicker">Política</span>
          <h2>Condições de cancelamento e remanejamento</h2>
        </div>
        <div className="nails-vip-policy-list">
          {policies.map((policy) => (
            <p key={policy}>{policy}</p>
          ))}
        </div>
      </section>

      <section className="nails-vip-location">
        <div>
          <span className="nails-section-kicker">Localização</span>
          <h2>Lucas Nogueira Gracez, 2213</h2>
          <p>Andar superior - Sala 15</p>
          <p>Ponto de referência: ao lado da Drogaria São Paulo.</p>
        </div>
        <div>
          <span className="nails-section-kicker">Contato</span>
          <h2>{siteConfig.instagramHandle}</h2>
          <p>{siteConfig.displayPhone}</p>
          <a href={courseWhatsappUrl} target="_blank" rel="noopener noreferrer">
            Quero falar com a Carol
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
