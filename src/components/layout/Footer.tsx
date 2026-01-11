import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-3xl font-display font-semibold text-foreground">
              Faizan<span className="text-primary">.</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
              Crafting visual stories that connect. Specializing in cinematography, 
              photography, and video editing for brands, weddings, and commercial projects.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/faizankacamera"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/saiyed-faizan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:s.faizan2001@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+919829681385"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Portfolio', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <a href="tel:+919829681385" className="hover:text-primary transition-colors">+91 98296 81385</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <a href="mailto:s.faizan2001@gmail.com" className="hover:text-primary transition-colors">s.faizan2001@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Saiyed Faizan. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with passion for visual storytelling
          </p>
        </div>
      </div>
    </footer>
  );
}
