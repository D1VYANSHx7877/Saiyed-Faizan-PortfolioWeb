import { useState, useEffect } from 'react';

export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
  createdAt: string;
}

const STORAGE_KEY = 'portfolio_videos';
// Environment variable - set this in your .env file or Vercel dashboard
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';

export function useVideoPortfolio() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load videos from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setVideos(JSON.parse(stored));
      } catch {
        setVideos([]);
      }
    } else {
      // Default videos
      const defaultVideos: VideoItem[] = [
        {
          id: '1',
          youtubeId: 'dQw4w9WgXcQ',
          title: 'Cinematic Wedding Highlight',
          category: 'Events',
          createdAt: new Date().toISOString(),
        },
        {
          id: '2',
          youtubeId: 'jNQXAC9IVRw',
          title: 'Brand Story - Startup',
          category: 'Commercial',
          createdAt: new Date().toISOString(),
        },
        {
          id: '3',
          youtubeId: '9bZkp7q19f0',
          title: 'Product Launch Film',
          category: 'Product & Food',
          createdAt: new Date().toISOString(),
        },
      ];
      setVideos(defaultVideos);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultVideos));
    }
  }, []);

  const authenticate = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const addVideo = (youtubeId: string, title: string, category: string) => {
    const newVideo: VideoItem = {
      id: Date.now().toString(),
      youtubeId,
      title,
      category,
      createdAt: new Date().toISOString(),
    };
    const updated = [...videos, newVideo];
    setVideos(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const deleteVideo = (id: string) => {
    const updated = videos.filter(v => v.id !== id);
    setVideos(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const extractYouTubeId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/,
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  return {
    videos,
    isAuthenticated,
    authenticate,
    logout,
    addVideo,
    deleteVideo,
    extractYouTubeId,
  };
}