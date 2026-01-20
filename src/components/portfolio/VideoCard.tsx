import { Play, Trash2 } from 'lucide-react';
import { VideoItem } from '@/hooks/useVideoPortfolio';
import { Button } from '@/components/ui/button';

interface VideoCardProps {
  video: VideoItem;
  isAdmin?: boolean;
  onDelete?: (id: string) => void;
  onPlay: (video: VideoItem) => void;
}

export function VideoCard({ video, isAdmin, onDelete, onPlay }: VideoCardProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;
  const fallbackThumbnail = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

  return (
    <div className="group relative aspect-video rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-500">
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        alt={video.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        onError={(e) => {
          e.currentTarget.src = fallbackThumbnail;
        }}
        loading="lazy"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      
      {/* Play button */}
      <button
        onClick={() => onPlay(video)}
        className="absolute inset-0 flex items-center justify-center"
        aria-label={`Play ${video.title}`}
      >
        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-neon">
          <Play size={28} className="text-primary-foreground ml-1" fill="currentColor" />
        </div>
      </button>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span className="text-primary text-xs font-heading font-medium tracking-wide uppercase">
          {video.category}
        </span>
        <h3 className="font-display text-lg font-semibold text-foreground mt-1 line-clamp-2">
          {video.title}
        </h3>
      </div>
      
      {/* Admin delete button */}
      {isAdmin && onDelete && (
        <Button
          variant="destructive"
          size="sm"
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(video.id);
          }}
        >
          <Trash2 size={16} />
        </Button>
      )}
    </div>
  );
}