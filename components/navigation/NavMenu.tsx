"use client";

import Link from "next/link";
import { useState } from "react";
import { scheduleWhatsappUrl } from "@/lib/contact";
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
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
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
            <Link
              key={`mobile-${item.href}`}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={scheduleWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nails-pill-button"
            onClick={() => setIsOpen(false)}
          >
            Agendar horário
          </a>
        </nav>
      </div>
    </div>
  );
}
