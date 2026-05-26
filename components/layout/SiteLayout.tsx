import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <div className="nails-page">
        <SiteHeader />
        <main className="nails-main">{children}</main>
        <SiteFooter />
      </div>
      <WhatsAppFloat />
    </>
  );
}
