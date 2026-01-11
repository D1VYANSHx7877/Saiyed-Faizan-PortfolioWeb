import { Camera, Video, Image, Film, Check, Star } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Photography',
    tagline: 'Capturing moments that last forever',
    description: 'Professional photography services that capture authentic moments with artistic precision.',
    features: ['High-resolution digital files', 'Professional color grading', 'Quick turnaround time'],
    useCases: ['Portraits', 'Events', 'Products', 'Corporate'],
    highlight: 'Most Popular',
  },
  {
    icon: Video,
    title: 'Videography',
    tagline: 'Cinematic storytelling in motion',
    description: 'Full-service videography that transforms your vision into compelling visual narratives.',
    features: ['4K/6K video capture', 'Professional audio recording', 'Drone aerial footage'],
    useCases: ['Weddings', 'Commercials', 'Brand Films', 'Events'],
  },
  {
    icon: Image,
    title: 'Photo Editing',
    tagline: 'Elevating your visual identity',
    description: 'Expert photo editing and retouching that enhances your images while maintaining their natural beauty.',
    features: ['Advanced color grading', 'Beauty retouching', 'Batch processing'],
    useCases: ['Fashion', 'E-commerce', 'Social Media'],
  },
  {
    icon: Film,
    title: 'Video Editing',
    tagline: 'Transforming footage into stories',
    description: 'Professional video editing that turns raw footage into polished, engaging content.',
    features: ['Color grading & correction', 'Motion graphics', 'Sound design'],
    useCases: ['YouTube', 'Corporate', 'Advertising'],
    highlight: 'Premium',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-heading font-semibold tracking-[0.2em] uppercase text-sm mb-4">
            Services
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Premium Visual <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-body">
            From capturing moments to crafting stories, I offer comprehensive 
            visual services tailored to elevate your brand.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover-lift"
            >
              {/* Highlight Badge */}
              {service.highlight && (
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <Star size={12} className="text-primary" />
                  <span className="text-xs font-semibold text-primary">{service.highlight}</span>
                </div>
              )}

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <service.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-primary text-sm">{service.tagline}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6 font-body">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Use Cases */}
              <div className="flex flex-wrap gap-2">
                {service.useCases.map((useCase) => (
                  <span
                    key={useCase}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                  >
                    {useCase}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-20 pt-16 border-t border-border">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground text-center mb-12">
            How I Work
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your vision' },
              { step: '02', title: 'Planning', desc: 'Creating the roadmap' },
              { step: '03', title: 'Production', desc: 'Bringing it to life' },
              { step: '04', title: 'Delivery', desc: 'Final polished result' },
            ].map((item, index) => (
              <div key={item.step} className="text-center relative">
                <div className="w-14 h-14 mx-auto rounded-full bg-card border border-border flex items-center justify-center mb-4">
                  <span className="font-display text-lg font-bold text-primary">{item.step}</span>
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
