"use client";

import type { FormEvent } from "react";

const contactWhatsapp = "https://wa.me/5511998583928";

export function NewsletterSection() {
  function handleContactListSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const whatsapp = String(formData.get("whatsapp") || "").trim();
    const message = [
      "Olá, Carol!",
      `Meu nome é ${name}.`,
      "Gostaria de entrar na sua lista VIP de contatos e receber novidades.",
      `Meu WhatsApp é ${whatsapp}.`,
    ].join(" ");

    window.open(
      `${contactWhatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section id="contact" className="nails-newsletter">
      <div className="nails-newsletter-heading">
        <span className="nails-section-kicker">Lista VIP</span>
        <h2>Receba novidades da Carol</h2>
        <p>
          Informe seu nome e WhatsApp para entrar na lista de contatos e
          acompanhar novidades, vagas e novos trabalhos.
        </p>
      </div>

      <form className="nails-newsletter-form" onSubmit={handleContactListSubmit}>
        <label className="nails-newsletter-field">
          <span>Nome</span>
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            autoComplete="name"
            required
          />
        </label>

        <label className="nails-newsletter-field">
          <span>WhatsApp</span>
          <input
            type="tel"
            name="whatsapp"
            placeholder="(11) 99999-9999"
            autoComplete="tel"
            inputMode="tel"
            required
          />
        </label>

        <button type="submit" className="nails-pill-button">
          Entrar na lista
        </button>
      </form>
    </section>
  );
}
