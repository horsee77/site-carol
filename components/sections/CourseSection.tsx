"use client";

import { useState } from "react";
import { courseModules } from "@/lib/landing-data";

const courseWhatsappUrl = `https://wa.me/5511998583928?text=${encodeURIComponent(
  "Olá, Carol! Gostaria de receber informações sobre o curso de nail design e as próximas turmas.",
)}`;

export function CourseSection() {
  const [activeModuleId, setActiveModuleId] = useState(courseModules[0].id);
  const activeModule =
    courseModules.find((module) => module.id === activeModuleId) ||
    courseModules[0];

  return (
    <section id="course" className="nails-course-block">
      <div className="nails-course-intro">
        <span className="nails-section-kicker">Curso presencial</span>
        <h2>Aprenda a criar unhas com assinatura profissional</h2>
        <p>
          Uma formação pensada para quem quer desenvolver técnica, acabamento
          sofisticado e uma experiência de atendimento marcante.
        </p>

        <div className="nails-course-tags" aria-label="Destaques do curso">
          <span>Prática orientada</span>
          <span>Do fundamento ao design</span>
          <span>Turmas sob consulta</span>
        </div>

        <a
          href={courseWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="nails-pill-button"
        >
          Consultar próxima turma
        </a>
      </div>

      <div className="nails-course-interactive">
        <div
          className="nails-course-tabs"
          role="tablist"
          aria-label="Módulos do curso"
        >
          {courseModules.map((module) => (
            <button
              key={module.id}
              type="button"
              role="tab"
              aria-selected={module.id === activeModule.id}
              aria-controls="course-panel"
              id={`course-tab-${module.id}`}
              className={`nails-course-tab ${
                module.id === activeModule.id ? "is-active" : ""
              }`}
              onClick={() => setActiveModuleId(module.id)}
            >
              <span>{module.number}</span>
              {module.tab}
            </button>
          ))}
        </div>

        <article
          key={activeModule.id}
          id="course-panel"
          className="nails-course-panel"
          role="tabpanel"
          aria-labelledby={`course-tab-${activeModule.id}`}
        >
          <span className="nails-course-count">{activeModule.number}</span>
          <h3>{activeModule.title}</h3>
          <p>{activeModule.description}</p>

          <ul>
            {activeModule.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <a
            href={courseWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nails-light-button"
          >
            Quero saber mais
          </a>
        </article>
      </div>
    </section>
  );
}
