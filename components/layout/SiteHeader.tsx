import Image from "next/image";
import Link from "next/link";
import { NavMenu } from "@/components/navigation/NavMenu";
import { scheduleWhatsappUrl } from "@/lib/contact";
import { navigationItems } from "@/lib/navigation";

export function SiteHeader() {
  return (
    <header className="nails-header">
      <Link href="/" className="nails-brand" aria-label="Carol Monteiro Nails">
        <Image
          src="/assets/logo/logo-01.svg"
          alt="Carol Monteiro Nails"
          width={220}
          height={52}
          className="nails-brand-logo"
          priority
        />
      </Link>

      <NavMenu items={navigationItems} />

      <a
        href={scheduleWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="nails-pill-button nails-header-cta"
      >
        Agendar horário
      </a>
    </header>
  );
}
