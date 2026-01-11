import { useEffect, useRef, useState } from 'react';

/**
 * Premium Client Logos Marquee with Brand Names
 * 
 * Add your logo files to: public/assets/logos/marquee/
 * Name them: logo-1.png, logo-2.png, logo-3.png, etc. (up to 9 logos)
 * 
 * Recommended logo size: 200x80px (width can vary, height ~80px)
 * Format: PNG with transparent background
 */

const getLogoPath = (index: number) => `/assets/logos/marquee/logo-${index}.png`;

// Brand names mapping
const BRAND_NAMES: Record<number, string> = {
  1: 'DL91',
  2: "AKU'S",
  3: 'Comfitoes',
  4: 'Dygital Labs',
  5: 'HDFC Bank',
  6: 'Inch',
  7: 'Zoop',
  8: 'Stockmock',
  9: 'Tradespeare',
};

// Maximum number of logos to check (9 logos)
const MAX_LOGOS = 9;

interface LogoData {
  path: string;
  index: number;
  loaded: boolean;
}

export function ClientsMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [availableLogos, setAvailableLogos] = useState<LogoData[]>([]);
  const [logosLoaded, setLogosLoaded] = useState(false);
  const imageRefs = useRef<Map<number, HTMLImageElement | null>>(new Map());

  // Check which logos are available and preload them
  useEffect(() => {
    const checkLogos = async () => {
      const logoPromises = [];
      const foundLogos: LogoData[] = [];

      // Preload critical logos (first 3) with higher priority
      for (let i = 1; i <= MAX_LOGOS; i++) {
        const logoPath = getLogoPath(i);
        const isPriority = i <= 3; // Preload first 3 logos

        logoPromises.push(
          new Promise<void>((resolve) => {
            // Use Image API for better preload control
            const img = new Image();
            img.onload = () => {
              foundLogos.push({ path: logoPath, index: i, loaded: true });
              resolve();
            };
            img.onerror = () => {
              resolve();
            };
            // Add fetchpriority for critical logos (if supported)
            if (isPriority && 'fetchPriority' in img) {
              (img as any).fetchPriority = 'high';
            }
            img.src = logoPath;
          })
        );
      }

      await Promise.all(logoPromises);
      // Sort by index to maintain order
      foundLogos.sort((a, b) => a.index - b.index);
      setAvailableLogos(foundLogos);
      setLogosLoaded(true);
    };

    checkLogos();
  }, []);

  // Premium smooth infinite scroll animation
  useEffect(() => {
    if (!logosLoaded || availableLogos.length === 0) return;

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollContent = scrollContainer.firstElementChild as HTMLElement;
    if (!scrollContent) return;

    // Clone content for seamless infinite loop (2 clones for smooth transition)
    const clone1 = scrollContent.cloneNode(true) as HTMLElement;
    const clone2 = scrollContent.cloneNode(true) as HTMLElement;
    scrollContainer.appendChild(clone1);
    scrollContainer.appendChild(clone2);

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.8; // Smooth, premium speed
    const contentWidth = scrollContent.offsetWidth;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset when we've scrolled one full content width
      if (scrollPosition >= contentWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      // Clean up clones
      if (clone1.parentNode === scrollContainer) {
        scrollContainer.removeChild(clone1);
      }
      if (clone2.parentNode === scrollContainer) {
        scrollContainer.removeChild(clone2);
      }
    };
  }, [logosLoaded, availableLogos]);

  if (!logosLoaded) {
    return (
      <section className="py-16 md:py-20 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-muted-foreground uppercase tracking-[0.2em]">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Loading logos...
          </div>
        </div>
      </section>
    );
  }

  if (availableLogos.length === 0) {
    return (
      <section className="py-16 md:py-20 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs text-muted-foreground mb-2">
            💡 Add your client logos to: <code className="text-primary">public/assets/logos/marquee/logo-1.png</code>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--neon-purple)/0.03),_transparent_70%)]" />
      
      {/* Section Header - Lower z-index to stay below hovered cards */}
      <div className="container mx-auto px-6 mb-12 relative z-[5]">
        <div className="text-center">
          <p className="text-xs md:text-sm font-heading font-semibold text-primary/80 uppercase tracking-[0.3em] mb-2">
            Trusted by Leading Brands
          </p>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>
      </div>
      
      {/* Premium Marquee Container - Higher z-index context with extra vertical spacing */}
      <div className="relative z-[1] py-6 md:py-8">
        {/* Gradient fade edges for premium effect - Lower z-index than cards */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-[15] pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-[15] pointer-events-none" />
        
        {/* Marquee Scroll Container - Proper overflow handling */}
        <div 
          ref={scrollRef}
          className="flex overflow-hidden whitespace-nowrap will-change-scroll"
          style={{ scrollBehavior: 'auto' }}
        >
          <div className="flex items-center gap-8 px-8">
            {availableLogos.map((logoData) => {
              const { path: logoPath, index: logoIndex, loaded } = logoData;
              const brandName = BRAND_NAMES[logoIndex] || `Client ${logoIndex}`;
              
              return (
                <div
                  key={`logo-${logoIndex}`}
                  className="flex-shrink-0 group"
                  style={{ 
                    minWidth: '180px', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {/* Premium Card with Glass Effect - High z-index on hover */}
                  <div 
                    className="relative"
                    style={{
                      zIndex: 1,
                    }}
                    onMouseEnter={(e) => {
                      // Ensure hovered card appears above everything
                      e.currentTarget.style.zIndex = '50';
                    }}
                    onMouseLeave={(e) => {
                      // Reset z-index when not hovered
                      e.currentTarget.style.zIndex = '1';
                    }}
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                    
                    {/* Main Card - Proper stacking context */}
                    <div className="relative bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl p-6 md:p-8 transition-all duration-500 ease-out-expo group-hover:scale-110 group-hover:-translate-y-3 group-hover:border-primary/50 group-hover:bg-card/90 group-hover:shadow-[0_20px_60px_hsl(var(--primary)/0.2)] overflow-hidden">
                      {/* Subtle inner glow */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Logo Image Container - Fixed dimensions to prevent layout shift */}
                      <div className="relative z-10 mb-3 h-10 md:h-14 flex items-center justify-center">
                        {loaded ? (
                          <img
                            ref={(el) => {
                              if (el) imageRefs.current.set(logoIndex, el);
                            }}
                            src={logoPath}
                            alt={`${brandName} Logo`}
                            className="h-full w-auto object-contain max-w-[160px] md:max-w-[200px] transition-all duration-500 group-hover:brightness-110 group-hover:contrast-105"
                            loading="lazy"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className="h-full w-[160px] md:w-[200px] bg-gradient-to-r from-muted via-muted/50 to-muted rounded animate-pulse" />
                        )}
                      </div>
                      
                      {/* Brand Name */}
                      <div className="relative z-10 text-center">
                        <p className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                          {brandName}
                        </p>
                      </div>
                      
                      {/* Decorative corner accent */}
                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 blur-sm" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
