import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  CheckCircle2
} from 'lucide-react';

const projectTypes = ['Wedding', 'Commercial', 'Event', 'Product', 'Portrait', 'Other'];

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Option 1: EmailJS Integration (Recommended)
      // Uncomment after setting up EmailJS (see CONTACT_FORM_BACKEND.md)
      /*
      const emailjs = await import('@emailjs/browser');
      
      await emailjs.send(
        'YOUR_SERVICE_ID',      // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID',     // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          project_type: formData.projectType,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'       // Replace with your EmailJS Public Key
      );
      */

      // Vercel Serverless Function (Active)
      // The API route is at: api/contact.ts
      // Setup email service in Vercel environment variables (see VERCEL_SETUP.md)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Failed to send message' }));
        throw new Error(errorData.error || 'Failed to send message');
      }

      // Option 3: Formspree
      // Uncomment and replace with your Formspree endpoint
      /*
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      */

      // Temporary: Simulate API call (remove after backend setup)
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
      });
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <CheckCircle2 className="text-primary" size={40} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Thank You!
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto font-body">
            Your message has been received. I'll get back to you within 24 hours.
          </p>
          <Button variant="outline" onClick={() => setIsSubmitted(false)}>
            Send Another Message
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-heading font-semibold tracking-[0.2em] uppercase text-sm mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Let's Create <span className="text-gradient">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-body">
            Have a project in mind? Let's discuss how we can bring your 
            vision to life through compelling visuals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-card"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-card"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="bg-card"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full h-10 px-3 rounded-md border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Tell Me About Your Project *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your vision..."
                  rows={5}
                  required
                  className="bg-card resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="xl" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Inquiry
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground">Delhi, India</p>
                <p className="text-sm text-muted-foreground">Available for travel worldwide</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <a href="mailto:s.faizan2001@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  s.faizan2001@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                <a href="tel:+919829681385" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 98296 81385
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20">
              <h4 className="font-display text-xl font-semibold text-foreground mb-4">
                Connect With Me
              </h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919829681385"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] text-white font-medium hover:opacity-90 transition-opacity"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
                <a
                  href="https://instagram.com/faizankacamera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-medium hover:opacity-90 transition-opacity"
                >
                  <Instagram size={18} />
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/saiyed-faizan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0077B5] text-white font-medium hover:opacity-90 transition-opacity"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
