import { X } from 'lucide-react';
import { VideoItem } from '@/hooks/useVideoPortfolio';

interface VideoPlayerProps {
  video: VideoItem;
  onClose: () => void;
}

export function VideoPlayer({ video, onClose }: VideoPlayerProps) {
  return (
    <div 
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all z-50"
        aria-label="Close video"
      >
        <X size={24} />
      </button>

      {/* Video container */}
      <div 
        className="w-full max-w-5xl aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
          title={video.title}
          className="w-full h-full rounded-xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        
        {/* Video info */}
        <div className="mt-4 text-center">
          <span className="text-primary text-sm font-heading font-medium tracking-wide uppercase">
            {video.category}
          </span>
          <h3 className="font-display text-2xl font-semibold text-foreground mt-1">
            {video.title}
          </h3>
        </div>
      </div>
    </div>
  );
}