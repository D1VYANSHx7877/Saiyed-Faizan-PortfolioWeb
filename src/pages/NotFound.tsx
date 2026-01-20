import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center bg-background">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            404 Error
          </p>
          <h1 className="font-display text-6xl md:text-8xl font-medium text-foreground mb-6">
            Lost in <span className="text-gradient">Focus</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-md mx-auto">
            The page you're looking for seems to have wandered off frame.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/">
                <Home size={18} className="mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
