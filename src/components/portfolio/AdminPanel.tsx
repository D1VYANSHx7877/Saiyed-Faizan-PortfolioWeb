import { useState } from 'react';
import { Lock, LogOut, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface AdminPanelProps {
  isAuthenticated: boolean;
  onAuthenticate: (password: string) => boolean;
  onLogout: () => void;
  onAddVideo: (youtubeId: string, title: string, category: string) => void;
  extractYouTubeId: (url: string) => string | null;
}

const categories = ['Events', 'Commercial', 'Product & Food', 'Shoots', 'Color Grading', 'Documentary'];

export function AdminPanel({ 
  isAuthenticated, 
  onAuthenticate, 
  onLogout, 
  onAddVideo,
  extractYouTubeId 
}: AdminPanelProps) {
  const [showLogin, setShowLogin] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [password, setPassword] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [videoCategory, setVideoCategory] = useState(categories[0]);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (onAuthenticate(password)) {
      setShowLogin(false);
      setPassword('');
      toast({
        title: "Welcome back!",
        description: "You're now logged in as admin.",
      });
    } else {
      toast({
        title: "Invalid password",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleAddVideo = (e: React.FormEvent) => {
    e.preventDefault();
    const youtubeId = extractYouTubeId(videoUrl);
    
    if (!youtubeId) {
      toast({
        title: "Invalid YouTube URL",
        description: "Please enter a valid YouTube video URL or ID.",
        variant: "destructive",
      });
      return;
    }

    if (!videoTitle.trim()) {
      toast({
        title: "Title required",
        description: "Please enter a title for the video.",
        variant: "destructive",
      });
      return;
    }

    onAddVideo(youtubeId, videoTitle.trim(), videoCategory);
    setVideoUrl('');
    setVideoTitle('');
    setShowAddForm(false);
    toast({
      title: "Video added!",
      description: "Your video has been added to the portfolio.",
    });
  };

  if (!isAuthenticated) {
    return (
      <>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowLogin(true)}
          className="gap-2 text-muted-foreground hover:text-foreground"
        >
          <Lock size={16} />
          Admin
        </Button>

        {/* Login Modal */}
        {showLogin && (
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-2xl p-6 w-full max-w-sm relative">
              <button
                onClick={() => setShowLogin(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Admin Login
              </h3>
              
              <form onSubmit={handleLogin} className="space-y-4">
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-secondary border-border"
                />
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="hero"
        size="sm"
        onClick={() => setShowAddForm(true)}
        className="gap-2"
      >
        <Plus size={16} />
        Add Video
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={onLogout}
        className="gap-2 text-muted-foreground hover:text-foreground"
      >
        <LogOut size={16} />
        Logout
      </Button>

      {/* Add Video Modal */}
      {showAddForm && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-2xl p-6 w-full max-w-md relative">
            <button
              onClick={() => setShowAddForm(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X size={20} />
            </button>
            
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Add New Video
            </h3>
            
            <form onSubmit={handleAddVideo} className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  YouTube URL or Video ID
                </label>
                <Input
                  type="text"
                  placeholder="https://youtube.com/watch?v=... or video ID"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  className="bg-secondary border-border"
                />
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Video Title
                </label>
                <Input
                  type="text"
                  placeholder="Enter video title"
                  value={videoTitle}
                  onChange={(e) => setVideoTitle(e.target.value)}
                  className="bg-secondary border-border"
                />
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Category
                </label>
                <select
                  value={videoCategory}
                  onChange={(e) => setVideoCategory(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg bg-secondary border border-border text-foreground"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              
              <Button type="submit" className="w-full">
                Add Video
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}