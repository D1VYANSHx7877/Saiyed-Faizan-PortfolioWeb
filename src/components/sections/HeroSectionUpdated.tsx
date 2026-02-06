import { useEffect, useState } from 'react';
import { ArrowDown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const taglines = [
  "Crafting visual stories that hit different.",
  "Where light meets emotion.",
  "Moments that live rent-free.",
];

export function HeroSectionUpdated() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const [heroImageError, setHeroImageError] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Try to load hero image
  useEffect(() => {
    const img = new Image();
    img.src = '/assets/images/hero-image.jpg';
    img.onload = () => setHeroImageLoaded(true);
    img.onerror = () => setHeroImageError(true);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden pt-20">
      {/* Background with neon gradients */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--neon-purple)/0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(var(--neon-cyan)/0.1),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--neon-pink)/0.05),_transparent_60%)]" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-[15%] w-16 md:w-24 h-16 md:h-24 border border-primary/30 animate-oscillate-vertical" />
      <div className="absolute bottom-32 right-[20%] w-12 md:w-16 h-12 md:h-16 border-2 border-accent/40 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-[10%] w-6 md:w-8 h-6 md:h-8 bg-primary/30 rotate-12 animate-float" style={{ animationDelay: '1s' }} />

      {/* Content - Same layout for mobile and desktop */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 items-center">
          {/* Left - Text Content */}
          <div className={`col-span-1 md:col-span-1 lg:col-span-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Main Title */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-2 md:mb-3 animate-fade-up leading-[0.9]">
              SAIYED
            </h1>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 md:mb-4 animate-fade-up delay-100 leading-[0.9]">
              <span className="text-gradient">FAIZAN</span>
            </h1>

            {/* Subtitle */}
            <p className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-3 md:mb-4 animate-fade-up delay-200 tracking-wide">
              Cinematographer & Creator
            </p>

            {/* Animated Tagline */}
            <div className="h-8 md:h-10 mb-6 md:mb-8 overflow-hidden">
              <p
                key={currentTagline}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 font-body animate-fade-up delay-300"
              >
                {taglines[currentTagline]}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 animate-fade-up delay-400 mb-4 md:mb-6">
              <Button variant="hero" size="lg" onClick={scrollToPortfolio} className="text-sm md:text-base px-6 md:px-8 py-4 md:py-5 w-full sm:w-auto">
                <Play size={16} className="mr-2 md:w-5 md:h-5" />
                Watch My Work
              </Button>
              <Button variant="heroOutline" size="lg" onClick={scrollToContact} className="text-sm md:text-base px-6 md:px-8 py-4 md:py-5 w-full sm:w-auto">
                Let's Create
              </Button>
            </div>
          </div>

          {/* Right - Hero Image (shows on all screen sizes) */}
          <div className={`col-span-1 md:col-span-1 lg:col-span-2 relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative w-full">
              {/* Neon border effect */}
              <div className="absolute -inset-2 bg-gradient-poster rounded-lg md:rounded-xl blur-md opacity-50 animate-neon-pulse" />

              {/* Main image container - 16:9 aspect ratio */}
              <div className="relative aspect-video rounded-lg md:rounded-xl overflow-hidden bg-card border border-md:border-2 border-border/50">
                {/* Hero Image - Load from assets */}
                {heroImageLoaded && !heroImageError ? (
                  <img
                    src="/assets/images/hero-image.jpg"
                    alt="Saiyed Faizan - Cinematographer"
                    className={`w-full h-full object-cover transition-all duration-700 ${heroImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                    loading="eager"
                  />
                ) : (
                  // Placeholder when image not found
                  <div className="w-full h-full bg-gradient-to-br from-card via-muted to-card flex items-center justify-center">
                    <div className="text-center p-4 md:p-6">
                      <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-poster flex items-center justify-center">
                        <span className="text-xl md:text-4xl font-display font-bold text-foreground">SF</span>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground font-heading">Upload Portrait</p>
                      <p className="text-xs text-muted-foreground mt-1 md:mt-2">Place at: /public/assets/images/hero-image.jpg</p>
                    </div>
                  </div>
                )}

                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />

                {/* Delhi, India */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                  <p className="font-display text-xs md:text-sm tracking-[0.2em] text-primary uppercase whitespace-nowrap">
                    Delhi, India
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToPortfolio}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors cursor-pointer group z-20"
        aria-label="Scroll down"
      >
        <span className="text-xs font-heading tracking-widest uppercase">Explore</span>
        <ArrowDown size={18} className="animate-bounce group-hover:text-primary" />
      </button>
    </section>
  );
}
