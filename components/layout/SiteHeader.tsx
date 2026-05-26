import Image from "next/image";
import { NavMenu } from "@/components/navigation/NavMenu";
import { navigationItems } from "@/lib/navigation";

export function SiteHeader() {
  return (
    <header className="nails-header">
      <a href="#" className="nails-brand" aria-label="Carol Monteiro Nails">
        <Image
          src="/assets/logo/logo-01.svg"
          alt="Carol Monteiro Nails"
          width={220}
          height={52}
          className="nails-brand-logo"
          priority
        />
      </a>

      <NavMenu items={navigationItems} />

      <a href="#contact" className="nails-pill-button nails-header-cta">
        Agendar horario
      </a>
    </header>
  );
}
