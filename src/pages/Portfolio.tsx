import { useState, useMemo } from 'react';
import { Layout } from '@/components/layout/Layout';
import { VideoCard } from '@/components/portfolio/VideoCard';
import { VideoPlayer } from '@/components/portfolio/VideoPlayer';
import { AdminPanel } from '@/components/portfolio/AdminPanel';
import { useVideoPortfolio, VideoItem } from '@/hooks/useVideoPortfolio';
import { useToast } from '@/hooks/use-toast';

const categories = ['All', 'Events', 'Commercial', 'Product & Food', 'Shoots', 'Color Grading', 'Documentary'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const { toast } = useToast();

  const {
    videos,
    isAuthenticated,
    authenticate,
    logout,
    addVideo,
    deleteVideo,
    extractYouTubeId,
  } = useVideoPortfolio();

  const filteredVideos = useMemo(() => {
    if (activeCategory === 'All') return videos;
    return videos.filter(v => v.category === activeCategory);
  }, [videos, activeCategory]);

  const handleDelete = (id: string) => {
    deleteVideo(id);
    toast({
      title: "Video deleted",
      description: "The video has been removed from your portfolio.",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--neon-purple)/0.1),_transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-primary font-heading font-semibold tracking-[0.2em] uppercase text-sm mb-4 animate-fade-up">
                Portfolio
              </p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up delay-100">
                MY <span className="text-gradient">WORK</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up delay-200 font-body">
                A collection of videos showcasing my passion for visual storytelling. 
                Each project is crafted with attention to detail and creative vision.
              </p>
            </div>
            
            {/* Admin Panel */}
            <div className="animate-fade-up delay-300">
              <AdminPanel
                isAuthenticated={isAuthenticated}
                onAuthenticate={authenticate}
                onLogout={logout}
                onAddVideo={addVideo}
                extractYouTubeId={extractYouTubeId}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-card border-y border-border sticky top-16 z-40">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 custom-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-heading font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-neon'
                    : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  isAdmin={isAuthenticated}
                  onDelete={handleDelete}
                  onPlay={setSelectedVideo}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground font-body text-lg">
                No videos found in this category.
              </p>
              {isAuthenticated && (
                <p className="text-sm text-muted-foreground mt-2">
                  Click "Add Video" to add your first video!
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoPlayer
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </Layout>
  );
}