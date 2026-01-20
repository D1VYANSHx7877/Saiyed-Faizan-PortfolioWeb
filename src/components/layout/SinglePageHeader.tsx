import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Navigation links ordered to match actual section order on the page
const navLinks = [
  { name: 'Home', id: 'hero' },
  { name: 'Portfolio', id: 'portfolio' },
  { name: 'About', id: 'about' },
  { name: 'Services', id: 'services' },
  { name: 'Experience', id: 'experience' },
  { name: 'Contact', id: 'contact' },
];

export function SinglePageHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/90 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl md:text-2xl font-display font-bold tracking-tight text-foreground hover:text-primary transition-colors duration-300"
          >
            FAIZAN<span className="text-gradient">.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  'text-sm font-heading font-medium tracking-wide transition-all duration-300 line-animate uppercase',
                  activeSection === link.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="outline" size="sm" onClick={() => scrollToSection('contact')}>
              <Sparkles size={14} className="mr-2" />
              Let's Create
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-500 ease-out',
            isMobileMenuOpen ? 'max-h-[400px] opacity-100 mt-6' : 'max-h-0 opacity-0'
          )}
        >
          <div className="flex flex-col gap-4 pb-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  'text-lg font-heading font-semibold py-2 transition-all duration-300 uppercase text-left',
                  activeSection === link.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {link.name}
              </button>
            ))}
            <Button variant="hero" className="mt-4" onClick={() => scrollToSection('contact')}>
              Let's Create
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
