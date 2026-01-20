import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Zoop',
    role: 'Freelance Video Editing',
    period: '2024 – Present',
    location: 'Remote',
    description: 'Leading video editing projects for diverse clients, delivering high-quality content that exceeds expectations.',
    skills: ['Premiere Pro', 'After Effects', 'Color Grading'],
    current: true,
  },
  {
    company: 'Pixel-Gully',
    role: 'Live-Stream Production',
    period: '2023 – Present',
    location: 'Delhi',
    description: 'Managing end-to-end live-stream production for events and corporate broadcasts, ensuring seamless delivery.',
    skills: ['OBS', 'Streaming', 'Multi-cam'],
    current: true,
  },
  {
    company: 'Freelance',
    role: 'Photo/Video Editing & Cinematography',
    period: '2022 – Present',
    location: 'Delhi',
    description: 'Building a diverse portfolio of clients ranging from weddings to commercial projects, establishing a strong personal brand.',
    skills: ['Photography', 'Videography', 'Editing', 'Color Grading'],
    current: true,
  },
  {
    company: 'Comfitoes',
    role: 'Product Photography',
    period: '2023 – 2024',
    location: 'Delhi',
    description: 'Created compelling product photography for e-commerce, helping increase conversion rates through visual excellence.',
    skills: ['Product Photography', 'Lightroom', 'Photoshop'],
    current: false,
  },
  {
    company: 'Tradespeare',
    role: 'Freelance Video Editing',
    period: '2022 – 2024',
    location: 'Remote',
    description: 'Delivered professional video editing services for marketing campaigns and corporate communications.',
    skills: ['Premiere Pro', 'Motion Graphics', 'Sound Design'],
    current: false,
  },
];

const tools = [
  { name: 'Premiere Pro', category: 'Video Editing' },
  { name: 'DaVinci Resolve', category: 'Color Grading' },
  { name: 'After Effects', category: 'Motion Graphics' },
  { name: 'Photoshop', category: 'Photo Editing' },
  { name: 'Lightroom', category: 'Photo Editing' },
];

export default function Experience() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4 animate-fade-up">
              Experience
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-medium text-foreground mb-6 animate-fade-up delay-100">
              Professional <span className="text-gradient">Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-up delay-200">
              Over 4 years of crafting visual stories, collaborating with diverse clients, 
              and continuously evolving my craft.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2" />

              {/* Experience items */}
              {experiences.map((exp, index) => (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10">
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="p-6 md:p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-500 hover-lift">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-display text-xl font-medium text-foreground">
                            {exp.company}
                          </h3>
                          <p className="text-primary font-medium">{exp.role}</p>
                        </div>
                        {exp.current && (
                          <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
              Tools I Master
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Industry-standard software that powers my creative workflow.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="px-8 py-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover-lift text-center"
              >
                <p className="font-medium text-foreground">{tool.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Looking for a dedicated visual storyteller for your next project? 
            I'm always open to exciting collaborations.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Start a Conversation
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
