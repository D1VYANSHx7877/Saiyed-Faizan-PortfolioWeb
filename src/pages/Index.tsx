import { useState, useEffect } from 'react';
import { SinglePageHeader } from '@/components/layout/SinglePageHeader';
import { Footer } from '@/components/layout/Footer';
import { HeroSectionUpdated } from '@/components/sections/HeroSectionUpdated';
import { ClientsMarquee } from '@/components/sections/ClientsMarquee';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { IntroVideo } from '@/components/sections/IntroVideo';

const Index = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [startTransition, setStartTransition] = useState(false);

  useEffect(() => {
    // Check if we've already shown the intro in this session
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (!hasSeenIntro) {
      setShowVideo(true);
    }
  }, []);

  const handleVideoComplete = () => {
    setShowVideo(false);
    sessionStorage.setItem('hasSeenIntro', 'true');
  };

  const handleExitStart = () => {
    setStartTransition(true);
  };

  return (
    <div className="min-h-screen bg-background film-grain overflow-hidden">
      {showVideo && (
        <IntroVideo
          onComplete={handleVideoComplete}
          onExitStart={handleExitStart}
        />
      )}
      <div className={`transition-transform duration-1000 ease-in-out ${showVideo && !startTransition ? 'translate-y-[100vh]' : 'translate-y-0'}`}>
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
    </div>
  );
};

export default Index;
