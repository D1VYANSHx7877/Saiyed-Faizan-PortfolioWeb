/**
 * Simple, smooth client logo marquee built from scratch.
 * Keeps brand names paired with the correct logo and
 * uses a continuous scrolling animation.
 */

const CLIENTS = [
  { id: 1, name: "DL91", logo: '/assets/logos/marquee/logo-1.webp' },
  { id: 2, name: "AKU'S", logo: '/assets/logos/marquee/logo-2.webp' },
  { id: 3, name: "Comfitoes", logo: '/assets/logos/marquee/logo-3.webp' },
  { id: 4, name: "Dygital Labs", logo: '/assets/logos/marquee/logo-4.webp' },
  { id: 5, name: "HDFC Bank", logo: '/assets/logos/marquee/logo-5.webp' },
  { id: 6, name: "Inch", logo: '/assets/logos/marquee/logo-6.webp' },
  { id: 7, name: "Zoop", logo: '/assets/logos/marquee/logo-7.webp' },
  { id: 8, name: "Stockmock", logo: '/assets/logos/marquee/logo-8.webp' },
  { id: 9, name: "Tradespeare", logo: '/assets/logos/marquee/logo-9.webp' },
  { id: 10, name: "Plugin Media", logo: '/assets/logos/marquee/logo-10.webp' },
  { id: 11, name: "Al-Jawaad Perfumes", logo: '/assets/logos/marquee/logo-11.webp' },
];

// Duplicate list for seamless scrolling
const MARQUEE_ITEMS = [...CLIENTS, ...CLIENTS];

// Gradient combinations for each client
const getGradientClasses = (index: number) => {
  const gradients = [
    'from-primary/15 via-accent/10 to-primary/5',
    'from-neon-purple/15 via-neon-cyan/10 to-neon-purple/5',
    'from-neon-pink/15 via-neon-yellow/10 to-neon-pink/5',
    'from-electric-blue/15 via-primary/10 to-electric-blue/5',
    'from-accent/15 via-neon-purple/10 to-accent/5',
    'from-neon-cyan/15 via-electric-blue/10 to-neon-cyan/5',
    'from-primary/15 via-neon-pink/10 to-primary/5',
    'from-neon-yellow/15 via-accent/10 to-neon-yellow/5',
    'from-electric-blue/15 via-neon-cyan/10 to-electric-blue/5',
    'from-neon-purple/15 via-neon-pink/10 to-neon-purple/5',
    'from-accent/15 via-electric-blue/10 to-accent/5',
  ];
  return gradients[index % gradients.length];
};

export function ClientsMarquee() {

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

      {/* Marquee Container */}
      <div className="relative z-[1] overflow-hidden">
        {/* Gradient fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background via-background/80 to-transparent z-[5]" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background via-background/80 to-transparent z-[5]" />

        <div className="group">
          <div
            className="flex w-max items-center gap-6 md:gap-8 lg:gap-10 py-6 md:py-8 lg:py-10 will-change-transform backface-visibility-hidden transform-gpu"
            style={{
              animation: window.innerWidth < 768 ? 'marquee 20s linear infinite' : 'marquee 15s linear infinite',
              animationPlayState: 'running'
            }}
            onMouseEnter={(e) => {
              // Only pause on hover for desktop
              if (window.innerWidth >= 768) {
                e.currentTarget.style.animationPlayState = 'paused';
              }
            }}
            onMouseLeave={(e) => {
              if (window.innerWidth >= 768) {
                e.currentTarget.style.animationPlayState = 'running';
              }
            }}
          >
            {MARQUEE_ITEMS.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0"
              >
                <div className="relative flex flex-col items-center gap-3 px-6 py-5 rounded-xl border border-border/50 backdrop-blur-sm shadow-lg hover:shadow-[0_20px_60px_hsl(var(--primary)/0.15)] transition-all duration-500 hover:-translate-y-2 hover:scale-110 overflow-hidden group/logo">
                  {/* Beautiful gradient backgrounds */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClasses(index)} opacity-70 group-hover/logo:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-tl from-neon-purple/20 via-transparent to-neon-cyan/15 opacity-50 group-hover/logo:opacity-80 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.1),_transparent_70%)] opacity-60 group-hover/logo:opacity-90 transition-opacity duration-500" />
                  
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500 blur-sm" />
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/logo:opacity-100 group-hover/logo:animate-shimmer transition-opacity duration-700" />
                  
                  {/* Content container with proper z-index */}
                  <div className="relative z-10 flex flex-col items-center gap-3 w-full">
                    <div className="h-16 md:h-20 flex items-center justify-center w-full">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="h-full w-auto max-w-[160px] object-contain transition-all duration-500 group-hover/logo:brightness-110 group-hover/logo:drop-shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-sm font-medium text-foreground/90 group-hover/logo:text-foreground transition-colors duration-500">
                      {client.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
