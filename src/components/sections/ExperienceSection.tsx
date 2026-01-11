import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Zoop',
    role: 'Freelance Video Editing',
    period: '2024 – Present',
    location: 'Remote',
    description: 'Leading video editing projects for diverse clients, delivering high-quality content.',
    skills: ['Premiere Pro', 'After Effects', 'Color Grading'],
    current: true,
  },
  {
    company: 'Pixel-Gully',
    role: 'Live-Stream Production',
    period: '2023 – Present',
    location: 'Delhi',
    description: 'Managing end-to-end live-stream production for events and corporate broadcasts.',
    skills: ['OBS', 'Streaming', 'Multi-cam'],
    current: true,
  },
  {
    company: 'Freelance',
    role: 'Photo/Video Editing & Cinematography',
    period: '2022 – Present',
    location: 'Delhi',
    description: 'Building a diverse portfolio from weddings to commercial projects.',
    skills: ['Photography', 'Videography', 'Editing'],
    current: true,
  },
  {
    company: 'Comfitoes',
    role: 'Product Photography',
    period: '2023 – 2024',
    location: 'Delhi',
    description: 'Created compelling product photography for e-commerce.',
    skills: ['Product Photography', 'Lightroom', 'Photoshop'],
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

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-heading font-semibold tracking-[0.2em] uppercase text-sm mb-4">
            Experience
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-body">
            Over 4 years of crafting visual stories and collaborating with diverse clients.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2" />

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className={`relative flex flex-col md:flex-row gap-8 mb-8 ${
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
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-500 hover-lift">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h4 className="font-display text-lg font-semibold text-foreground">
                          {exp.company}
                        </h4>
                        <p className="text-primary font-medium text-sm">{exp.role}</p>
                      </div>
                      {exp.current && (
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 font-body">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
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

        {/* Tools */}
        <div>
          <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-8">
            Tools I Master
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="px-6 py-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300 hover-lift text-center"
              >
                <p className="font-medium text-foreground">{tool.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
