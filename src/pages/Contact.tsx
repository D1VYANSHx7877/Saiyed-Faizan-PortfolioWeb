import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
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

const projectTypes = [
  'Wedding',
  'Commercial',
  'Event',
  'Product',
  'Portrait',
  'Other',
];

const budgetRanges = [
  'Under ₹25,000',
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹1,00,000',
  'Above ₹1,00,000',
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    eventDate: '',
    location: '',
    budget: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="min-h-[80vh] flex items-center justify-center bg-background">
          <div className="container mx-auto px-6 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <CheckCircle2 className="text-primary" size={40} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
              Your message has been received. I'll get back to you within 24 hours 
              to discuss your project.
            </p>
            <Button variant="outline" onClick={() => setIsSubmitted(false)}>
              Send Another Message
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4 animate-fade-up">
              Get in Touch
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-medium text-foreground mb-6 animate-fade-up delay-100">
              Let's Create <span className="text-gradient">Together</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-up delay-200">
              Have a project in mind? Let's discuss how we can bring your 
              vision to life through compelling visuals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-display text-2xl font-medium text-foreground mb-8">
                Project Inquiry
              </h2>
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
                      className="bg-background"
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
                      className="bg-background"
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
                      className="bg-background"
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
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-foreground mb-2">
                      Event/Project Date
                    </label>
                    <Input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                      Location
                    </label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Delhi, Mumbai..."
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select budget</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
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
                    placeholder="Describe your vision, requirements, and any specific details..."
                    rows={5}
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="xl" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Inquiry
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-medium text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Delhi, India</p>
                    <p className="text-sm text-muted-foreground">Available for travel worldwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                    <a href="mailto:contact@faizankacamera.com" className="text-muted-foreground hover:text-primary transition-colors">
                      contact@faizankacamera.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">Available on request</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-gold/5 border border-primary/20">
                <h3 className="font-display text-xl font-medium text-foreground mb-4">
                  Prefer Quick Chat?
                </h3>
                <p className="text-muted-foreground mb-6">
                  For faster response, reach out via WhatsApp or connect on social media.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/919876543210"
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
                    href="https://www.linkedin.com/in/saiyed-faizan/"
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
    </Layout>
  );
}
