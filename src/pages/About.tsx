import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Camera, Film, Palette, Wand2 } from 'lucide-react';

const skills = [
  { name: 'Premiere Pro', level: 95 },
  { name: 'DaVinci Resolve', level: 90 },
  { name: 'After Effects', level: 85 },
  { name: 'Photoshop', level: 90 },
  { name: 'Lightroom', level: 95 },
];

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

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4 animate-fade-up">
              About Me
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-medium text-foreground mb-6 animate-fade-up delay-100">
              The Vision Behind <br />
              <span className="text-gradient">Every Frame</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-up delay-200">
              I believe that every image, every frame, has the power to evoke emotion, 
              tell a story, and create lasting memories.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden sticky top-32">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80"
                  alt="Saiyed Faizan - Cinematographer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              {/* Signature */}
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-display text-3xl text-foreground italic">
                  Saiyed Faizan
                </p>
                <p className="text-primary text-sm tracking-wide">Cinematographer & Visual Storyteller</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-12">
              {/* Story */}
              <div>
                <h2 className="font-display text-3xl font-medium text-foreground mb-6">
                  My Journey
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
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
                    refining my skills and bringing unique visions to life. Every project 
                    is an opportunity to create something that not only meets expectations 
                    but exceeds them.
                  </p>
                </div>
              </div>

              {/* Philosophy */}
              <div className="p-8 rounded-2xl bg-secondary border border-border">
                <h3 className="font-display text-xl font-medium text-foreground mb-4">
                  Creative Philosophy
                </h3>
                <p className="text-muted-foreground italic leading-relaxed">
                  "I believe that the best visual stories emerge when technical expertise 
                  meets emotional intelligence. Every frame should serve a purpose, every 
                  edit should enhance the narrative, and every project should leave a 
                  lasting impression."
                </p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="font-display text-2xl font-medium text-foreground mb-6">
                  Technical Expertise
                </h3>
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-gold rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
              What Drives My Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-secondary flex items-center justify-center mb-6">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
            Let's Create Something Beautiful
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Ready to bring your vision to life? Let's discuss your project and 
            create something extraordinary together.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
