
import { useEffect, useRef, useState, useCallback } from 'react';
import { cn } from "@/lib/utils";
import { Volume2, VolumeX } from 'lucide-react';

interface IntroVideoProps {
    onComplete: () => void;
    onExitStart: () => void;
}

export const IntroVideo = ({ onComplete, onExitStart }: IntroVideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isExiting, setIsExiting] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    const handleExit = useCallback(() => {
        setIsExiting(true);
        onExitStart(); // Trigger external animation sync
        // Wait for exit animation
        setTimeout(() => {
            setIsPlaying(false);
            onComplete();
        }, 800);
    }, [onExitStart, onComplete]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Handle video end
        const handleEnded = () => {
            handleExit();
        };

        video.addEventListener('ended', handleEnded);

        // Attempt play
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch((error) => {
                console.log("Auto-play was prevented:", error);
                // If autoplay fails (e.g. strict browser policy), we might want to show a play button or just skip
                // For now, let's just skip to content to avoid blocking the user
                handleExit();
            });
        }

        // Auto-skip after 5 seconds
        const autoSkipTimer = setTimeout(() => {
            handleExit();
        }, 5000);

        return () => {
            video.removeEventListener('ended', handleEnded);
            clearTimeout(autoSkipTimer);
        };
    }, [handleExit]);

    if (!isPlaying) return null;

    return (
        <div className={cn(
            "fixed inset-0 z-[100] bg-black flex items-center justify-center transition-all duration-1500 ease-intro shadow-2xl overflow-hidden",
            isExiting ? "-translate-y-full shadow-black/50" : "translate-y-0"
        )}>
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src="/assets/video/Showreel.mp4"
                muted={isMuted}
                playsInline
            />

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setIsMuted(!isMuted);
                }}
                className="absolute bottom-8 left-8 text-white/70 hover:text-white transition-colors p-3 rounded-full backdrop-blur-sm bg-black/20 hover:bg-black/40 border border-white/10"
                aria-label={isMuted ? "Unmute" : "Mute"}
            >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>

            <button
                onClick={handleExit}
                className="absolute bottom-8 right-8 text-white/50 hover:text-white text-sm uppercase tracking-widest transition-colors font-medium border border-white/20 hover:border-white/50 px-4 py-2 rounded-full backdrop-blur-sm bg-black/20"
            >
                Skip Intro
            </button>
        </div>
    );
};
