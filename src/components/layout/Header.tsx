import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/90 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-display font-bold tracking-tight text-foreground hover:text-primary transition-colors duration-300"
          >
            FAIZAN<span className="text-gradient">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-heading font-medium tracking-wide transition-all duration-300 line-animate uppercase',
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact" className="gap-2">
                <Sparkles size={14} />
                Let's Create
              </Link>
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
            'md:hidden overflow-hidden transition-all duration-500 ease-out-expo',
            isMobileMenuOpen ? 'max-h-[400px] opacity-100 mt-6' : 'max-h-0 opacity-0'
          )}
        >
          <div className="flex flex-col gap-4 pb-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-lg font-heading font-semibold py-2 transition-all duration-300 uppercase',
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="hero" className="mt-4" asChild>
              <Link to="/contact">Let's Create</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}