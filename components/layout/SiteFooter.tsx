import Image from "next/image";
import { navigationItems } from "@/lib/navigation";

const services = [
  "Alongamento",
  "Banho de gel",
  "Esmaltação em gel",
  "Manicure e pedicure",
  "Plástica dos pés",
  "Reconstrução de unha",
  "Curso de unhas",
];

export function SiteFooter() {
  return (
    <footer className="nails-footer">
      <div className="nails-footer-inner">
        <div className="nails-footer-brand">
          <a href="#" aria-label="Carol Monteiro Nails">
            <Image
              src="/assets/logo/logo-01.svg"
              alt="Carol Monteiro Nails"
              width={190}
              height={46}
              className="nails-footer-logo"
            />
          </a>

          <p>
            Cuidado, técnica e elegância para realçar a beleza das suas unhas em
            cada detalhe.
          </p>

          <a
            href="https://wa.me/5511998583928"
            target="_blank"
            rel="noopener noreferrer"
            className="nails-footer-whatsapp"
          >
            Agendar pelo WhatsApp
          </a>
        </div>

        <div className="nails-footer-column">
          <h3>Menu</h3>

          <ul>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nails-footer-column">
          <h3>Serviços</h3>

          <ul>
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="nails-footer-column">
          <h3>Contato</h3>

          <ul>
            <li>
              <a
                href="https://wa.me/5511998583928"
                target="_blank"
                rel="noopener noreferrer"
              >
                +55 11 99858-3928
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/_caroolmonteiro.nail"
                target="_blank"
                rel="noopener noreferrer"
              >
                @_caroolmonteiro.nail
              </a>
            </li>

            <li>São Paulo - SP</li>
          </ul>
        </div>

        <div className="nails-footer-bottom">
          <span>© 2026 Carol Monteiro Nails. Todos os direitos reservados.</span>
          <span>Beleza, cuidado e sofisticação para suas unhas.</span>
        </div>
      </div>
    </footer>
  );
}