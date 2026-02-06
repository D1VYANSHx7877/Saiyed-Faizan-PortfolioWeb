import { Camera, Film, Palette, Wand2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobelightroom,
  SiBlackmagicdesign
} from 'react-icons/si';

const values = [
  {
    icon: Camera,
    title: 'Authentic Moments',
    description: 'Capturing genuine emotions and real stories that resonate deeply.',
  },
  {
    icon: Film,
    title: 'Cinematic Vision',
    description: 'Every frame is crafted with intention, purpose, and artistic excellence.',
  },
  {
    icon: Palette,
    title: 'Creative Excellence',
    description: 'Pushing creative boundaries while maintaining visual harmony.',
  },
  {
    icon: Wand2,
    title: 'Technical Mastery',
    description: 'Combining artistry with cutting-edge tools and techniques.',
  },
];

// Technical tools with exact brand icons from react-icons
const technicalTools = [
  {
    name: 'Premiere Pro',
    Icon: SiAdobepremierepro,
    description: 'Video Editing',
    color: 'text-[#EA77FF]' // Adobe purple
  },
  {
    name: 'DaVinci Resolve',
    Icon: SiBlackmagicdesign,
    description: 'Color Grading',
    color: 'text-[#FF6B35]' // DaVinci orange
  },
  {
    name: 'After Effects',
    Icon: SiAdobeaftereffects,
    description: 'Motion Graphics',
    color: 'text-[#9999FF]' // Adobe blue-purple
  },
  {
    name: 'Photoshop',
    Icon: SiAdobephotoshop,
    description: 'Photo Editing',
    color: 'text-[#31A8FF]' // Adobe blue
  },
  {
    name: 'Lightroom',
    Icon: SiAdobelightroom,
    description: 'Photo Processing',
    color: 'text-[#FF6B9D]' // Adobe pink
  },
];

export function AboutSection() {
  const [aboutImageLoaded, setAboutImageLoaded] = useState(false);
  const [aboutImageError, setAboutImageError] = useState(false);
  const [aboutImageSrc, setAboutImageSrc] = useState('/assets/images/about-image.JPG');

  // Load about image
  useEffect(() => {
    const img = new Image();
    img.src = '/assets/images/about-image.JPG';
    img.onload = () => {
      setAboutImageLoaded(true);
      setAboutImageSrc('/assets/images/about-image.JPG');
    };
    img.onerror = () => setAboutImageError(true);
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-heading font-semibold tracking-[0.2em] uppercase text-sm mb-4">
            About Me
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            The Vision Behind <span className="text-gradient">Every Frame</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Image */}
          <div className="relative animate-fade-up">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-card border border-border">
              {aboutImageLoaded && !aboutImageError ? (
                <img
                  src={aboutImageSrc}
                  alt="Saiyed Faizan - About"
                  className={`w-full h-full object-cover transition-all duration-700 ${aboutImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-card via-muted to-card flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-poster flex items-center justify-center">
                      <span className="text-5xl font-display font-bold text-foreground">SF</span>
                    </div>
                    <p className="text-muted-foreground font-heading">Upload Portrait</p>
                    <p className="text-xs text-muted-foreground mt-2">Place at: /public/assets/images/about-image.jpg</p>
                  </div>
                </div>
              )}
            </div>
            {/* Signature */}
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-display text-3xl text-foreground italic">
                Saiyed Faizan
              </p>
              <p className="text-primary text-sm tracking-wide">Cinematographer & Visual Creator</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-12 animate-fade-up delay-200">
            {/* Story */}
            <div>
              <h3 className="font-display text-3xl font-semibold text-foreground mb-6">
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed font-body">
                <p>
                  Hello! I'm Saiyed Faizan, a passionate cinematographer and video editor
                  based in Delhi. My journey into the world of visual storytelling began
                  over 4 years ago, driven by an insatiable curiosity for how images can
                  move people emotionally.
                </p>
                <p>
                  For me, creating visual content goes beyond just editing; it's about
                  enhancing user experiences, striking the perfect balance between
                  aesthetics and storytelling, and crafting visuals that form emotional
                  connections with viewers.
                </p>
                <p>
                  With a creative mind and a keen eye for detail, I am dedicated to
                  refining my skills and bringing unique visions to life.
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="p-8 rounded-2xl bg-secondary border border-border">
              <h4 className="font-display text-xl font-semibold text-foreground mb-4">
                Creative Philosophy
              </h4>
              <p className="text-muted-foreground italic leading-relaxed font-body">
                "I believe that the best visual stories emerge when technical expertise
                meets emotional intelligence. Every frame should serve a purpose, every
                edit should enhance the narrative."
              </p>
            </div>

            {/* Technical Expertise */}
            <div>
              <h4 className="font-display text-2xl font-semibold text-foreground mb-6">
                Technical Expertise
              </h4>
              <div className="flex flex-wrap justify-start gap-3">
                {technicalTools.map((tool, index) => {
                  const IconComponent = tool.Icon;
                  return (
                    <div
                      key={tool.name}
                      className="group relative p-3 rounded-lg bg-background border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary/80">
                          <IconComponent
                            className={`${tool.color} transition-colors duration-300`}
                            size={24}
                          />
                        </div>
                        <div className="text-center">
                          <span className="text-xs font-medium text-foreground block">{tool.name}</span>
                          <span className="text-[10px] text-muted-foreground">{tool.description}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-500 hover-lift animate-fade-up"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-secondary flex items-center justify-center mb-6">
                <value.icon className="text-primary" size={28} />
              </div>
              <h4 className="font-display text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
