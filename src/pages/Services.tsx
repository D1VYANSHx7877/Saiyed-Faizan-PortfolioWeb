import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Camera, Video, Image, Film, Check, Star } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Photography',
    tagline: 'Capturing moments that last forever',
    description: 'Professional photography services that capture authentic moments with artistic precision. From intimate portraits to grand events, every shot tells a story.',
    features: [
      'High-resolution digital files',
      'Professional color grading',
      'Quick turnaround time',
      'Multiple shooting locations',
      'Post-production editing',
    ],
    useCases: ['Portraits', 'Events', 'Products', 'Corporate', 'Lifestyle'],
    highlight: 'Most Popular',
  },
  {
    icon: Video,
    title: 'Videography',
    tagline: 'Cinematic storytelling in motion',
    description: 'Full-service videography that transforms your vision into compelling visual narratives. From concept to final cut, I bring your story to life.',
    features: [
      '4K/6K video capture',
      'Professional audio recording',
      'Drone aerial footage',
      'Multi-camera setup',
      'Full post-production',
    ],
    useCases: ['Weddings', 'Commercials', 'Brand Films', 'Events', 'Documentaries'],
  },
  {
    icon: Image,
    title: 'Photo Editing',
    tagline: 'Elevating your visual identity',
    description: 'Expert photo editing and retouching that enhances your images while maintaining their natural beauty. Perfect color, perfect mood, every time.',
    features: [
      'Advanced color grading',
      'Beauty retouching',
      'Background editing',
      'Composite work',
      'Batch processing',
    ],
    useCases: ['Fashion', 'E-commerce', 'Real Estate', 'Social Media', 'Print'],
  },
  {
    icon: Film,
    title: 'Video Editing',
    tagline: 'Transforming footage into stories',
    description: 'Professional video editing that turns raw footage into polished, engaging content. Seamless cuts, perfect pacing, and compelling narratives.',
    features: [
      'Color grading & correction',
      'Motion graphics',
      'Sound design',
      'VFX & compositing',
      'Multiple format exports',
    ],
    useCases: ['YouTube', 'Corporate', 'Advertising', 'Social Media', 'Films'],
    highlight: 'Premium Service',
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4 animate-fade-up">
              Services
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-medium text-foreground mb-6 animate-fade-up delay-100">
              Premium Visual <br />
              <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-up delay-200">
              From capturing moments to crafting stories, I offer comprehensive 
              visual services tailored to elevate your brand and preserve your memories.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="relative p-8 md:p-12 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-500"
              >
                {/* Highlight Badge */}
                {service.highlight && (
                  <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <Star size={14} className="text-primary" />
                    <span className="text-xs font-medium text-primary">{service.highlight}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left Column */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                        <service.icon className="text-primary" size={28} />
                      </div>
                      <div>
                        <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground">
                          {service.title}
                        </h2>
                        <p className="text-primary text-sm">{service.tagline}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Use Cases */}
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase) => (
                        <span
                          key={useCase}
                          className="px-4 py-2 text-sm rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Features */}
                  <div className="bg-card p-8 rounded-xl border border-border">
                    <h3 className="font-display text-lg font-medium text-foreground mb-6">
                      What's Included
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Check size={12} className="text-primary" />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full mt-8" asChild>
                      <Link to="/contact">
                        Inquire About {service.title}
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
              How I Work
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A streamlined process designed to bring your vision to life with clarity and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your vision, goals, and requirements.' },
              { step: '02', title: 'Planning', desc: 'Creating a detailed roadmap for your project.' },
              { step: '03', title: 'Production', desc: 'Bringing your vision to life with expert execution.' },
              { step: '04', title: 'Delivery', desc: 'Polished final deliverables exceeding expectations.' },
            ].map((item, index) => (
              <div key={item.step} className="text-center relative">
                <div className="w-16 h-16 mx-auto rounded-full bg-card border border-border flex items-center justify-center mb-4">
                  <span className="font-display text-xl font-semibold text-primary">{item.step}</span>
                </div>
                <h3 className="font-display text-lg font-medium text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[1px] bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Let's discuss your vision and create something extraordinary together.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Book a Consultation
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
