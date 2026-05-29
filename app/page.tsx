import { SiteLayout } from "@/components/layout/SiteLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { CourseSection } from "@/components/sections/CourseSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { absoluteUrl, jsonLdScript, siteConfig } from "@/lib/seo";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: siteConfig.name,
      url: siteConfig.url,
      inLanguage: siteConfig.language,
      description: siteConfig.description,
      publisher: {
        "@id": absoluteUrl("/#business"),
      },
    },
    {
      "@type": "BeautySalon",
      "@id": absoluteUrl("/#business"),
      name: siteConfig.name,
      url: siteConfig.url,
      image: siteConfig.localImages.map((image) => absoluteUrl(image)),
      logo: absoluteUrl("/assets/logo/logo-01.svg"),
      description: siteConfig.description,
      telephone: siteConfig.phone,
      priceRange: "$$",
      areaServed: {
        "@type": "City",
        name: siteConfig.city,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.city,
          addressRegion: siteConfig.region,
          addressCountry: siteConfig.country,
        },
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.city,
        addressRegion: siteConfig.region,
        addressCountry: siteConfig.country,
      },
      sameAs: [siteConfig.instagramUrl],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          contactType: "customer service",
          areaServed: siteConfig.country,
          availableLanguage: ["Portuguese"],
          url: siteConfig.whatsappUrl,
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de nail designer",
        itemListElement: siteConfig.services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description,
            provider: {
              "@id": absoluteUrl("/#business"),
            },
            areaServed: siteConfig.city,
          },
        })),
      },
      potentialAction: {
        "@type": "ReserveAction",
        target: siteConfig.scheduleWhatsappUrl,
        name: "Agendar pelo WhatsApp",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": absoluteUrl("/#breadcrumb"),
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: siteConfig.url,
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(structuredData) }}
      />
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <ServicesSection />
      <PortfolioSection />
      <TeamSection />
      <CourseSection />
      <TestimonialsSection />
      <InstagramSection />
      <NewsletterSection />
    </SiteLayout>
  );
}
