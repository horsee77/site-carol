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

export default function Home() {
  return (
    <SiteLayout>
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
