import { useState } from 'react';
import { useGoogleDrivePortfolio, DriveFile } from '@/hooks/useGoogleDrivePortfolio';
import { Play, X, ImageIcon, Loader2, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PortfolioSection() {
  const { folders, loading, error, getImageUrl, getVideoEmbedUrl, isVideo, isImage, refetch } = useGoogleDrivePortfolio();
  const [activeFolder, setActiveFolder] = useState<string | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<{ file: DriveFile; type: 'image' | 'video' } | null>(null);
  const [showreelError, setShowreelError] = useState(false);

  // Set first folder as active when loaded
  if (!activeFolder && folders.length > 0) {
    setActiveFolder(folders[0].name);
  }

  const currentFolder = folders.find(f => f.name === activeFolder);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--neon-purple)/0.1),_transparent_50%)]" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-heading font-semibold tracking-[0.2em] uppercase text-sm mb-4 animate-fade-up">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up delay-100">
            MY <span className="text-gradient">WORK</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up delay-200 font-body max-w-2xl mx-auto">
            A collection of visuals showcasing my passion for storytelling.
            Each project is crafted with attention to detail and creative vision.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
            <p className="text-muted-foreground">Loading portfolio from Google Drive...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-destructive mb-4">{error}</p>
            <Button variant="outline" onClick={refetch}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </div>
        )}

        {/* Showreel Feature (Above Tabs) */}
        <div className="mb-16 md:mb-20 rounded-2xl overflow-hidden border border-border/50 shadow-neon bg-card relative group">
          <div className="aspect-video w-full relative bg-black">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/assets/images/hero-image.jpg"
              onError={() => setShowreelError(true)}
            >
              <source src="/assets/video/Showreel.mp4" type="video/mp4" />
            </video>

            {/* Gradient Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

            {/* Copy overlay */}
            <div className="pointer-events-none absolute bottom-4 left-4 md:bottom-8 md:left-8">
              <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-widest text-black uppercase bg-white rounded-full">
                Featured
              </span>
              <h3 className="text-xl md:text-3xl font-display font-bold text-white drop-shadow-lg">
                Visual Showreel
              </h3>
            </div>

            {/* Fallback if video fails to load in production */}
            {showreelError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm">
                <p className="text-sm md:text-base text-muted-foreground mb-2">
                  Showreel video is currently unavailable.
                </p>
                <p className="text-xs md:text-sm text-muted-foreground/80">
                  Please check back soon or contact for latest work.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        {!loading && !error && folders.length > 0 && (
          <>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {folders.map((folder) => (
                <button
                  key={folder.id}
                  onClick={() => setActiveFolder(folder.name)}
                  className={`px-6 py-3 rounded-full text-sm font-heading font-semibold whitespace-nowrap transition-all duration-300 ${activeFolder === folder.name
                      ? 'bg-primary text-primary-foreground shadow-neon'
                      : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
                    }`}
                >
                  {folder.name}
                  <span className="ml-2 text-xs opacity-70">({folder.files.length})</span>
                </button>
              ))}
            </div>

            {/* Media Grid */}
            {currentFolder && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {currentFolder.files.map((file) => (
                  <div
                    key={file.id}
                    onClick={() => setSelectedMedia({
                      file,
                      type: isVideo(file) ? 'video' : 'image'
                    })}
                    className="group relative aspect-square rounded-xl overflow-hidden bg-card border border-border cursor-pointer hover:border-primary/50 transition-all duration-300 hover-lift"
                  >
                    {isImage(file) && (
                      <img
                        src={getImageUrl(file)}
                        alt={file.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    )}
                    {isVideo(file) && (
                      <div className="w-full h-full bg-muted flex items-center justify-center relative">
                        <img
                          src={file.thumbnailLink || `https://drive.google.com/thumbnail?id=${file.id}&sz=w400`}
                          alt={file.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-primary-foreground ml-1" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-sm text-foreground font-medium truncate">{file.name}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          {isVideo(file) ? <Play size={12} /> : <ImageIcon size={12} />}
                          <span>{isVideo(file) ? 'Video' : 'Image'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Empty State */}
        {!loading && !error && folders.length === 0 && (
          <div className="text-center py-20">
            <ImageIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No portfolio items found.</p>
          </div>
        )}
      </div>

      {/* Media Viewer Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-card border border-border hover:bg-secondary transition-colors z-10"
          >
            <X size={24} />
          </button>

          <div
            className="relative w-full max-w-5xl max-h-[85vh] overflow-hidden rounded-xl"
            onClick={e => e.stopPropagation()}
          >
            {selectedMedia.type === 'image' ? (
              <img
                src={getImageUrl(selectedMedia.file)}
                alt={selectedMedia.file.name}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="relative w-full aspect-video">
                <iframe
                  src={getVideoEmbedUrl(selectedMedia.file)}
                  className="w-full h-full rounded-xl"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
              <p className="text-foreground font-medium">{selectedMedia.file.name}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
