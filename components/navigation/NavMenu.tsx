"use client";

import { useState } from "react";
import type { NavigationItem } from "@/lib/navigation";

type NavMenuProps = {
  items: NavigationItem[];
};

export function NavMenu({ items }: NavMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nails-nav-wrap">
      <nav className="nails-nav nails-nav-desktop" aria-label="Main Navigation">
        {items.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className={`nails-menu-toggle ${isOpen ? "is-open" : ""}`}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="mobile-nav-panel"
        className={`nails-mobile-panel ${isOpen ? "is-open" : ""}`}
        aria-hidden={!isOpen}
      >
        <nav className="nails-mobile-nav" aria-label="Mobile Navigation">
          {items.map((item) => (
            <a key={`mobile-${item.href}`} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="nails-pill-button" onClick={() => setIsOpen(false)}>
            Agendar horario
          </a>
        </nav>
      </div>
    </div>
  );
}
