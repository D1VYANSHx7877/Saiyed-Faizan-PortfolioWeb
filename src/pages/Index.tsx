import { SinglePageHeader } from '@/components/layout/SinglePageHeader';
import { Footer } from '@/components/layout/Footer';
import { HeroSectionUpdated } from '@/components/sections/HeroSectionUpdated';
import { ClientsMarquee } from '@/components/sections/ClientsMarquee';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background film-grain overflow-hidden">
      <SinglePageHeader />
      <main>
        <HeroSectionUpdated />
        <ClientsMarquee />
        <PortfolioSection />
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
