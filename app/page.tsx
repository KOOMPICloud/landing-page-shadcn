import { Navigation, Footer } from "@/components/layout";
import {
  HeroSection,
  StatsSection,
  WorkSection,
  ServicesSection,
  TestimonialsSection,
  CTASection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <WorkSection />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
