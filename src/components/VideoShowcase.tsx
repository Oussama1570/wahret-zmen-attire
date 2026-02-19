import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

export const VideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
    }
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
            The Craft
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Made With Purpose
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Every Jebba is shaped by hands that have spent years mastering a craft passed down through generations.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative max-w-4xl mx-auto group">
          <div className="relative rounded-xl overflow-hidden border border-border shadow-[var(--shadow-elegant)]">
            <div className="aspect-video bg-muted relative">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1280&q=85"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source
                  src="https://videos.pexels.com/video-files/3843432/3843432-uhd_2560_1440_25fps.mp4"
                  type="video/mp4"
                />
              </video>

              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-foreground/20 pointer-events-none" />

              {/* Play button — centered, always visible */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handlePlay}
                  className="w-16 h-16 rounded-full border border-primary-foreground/60 flex items-center justify-center bg-foreground/30 backdrop-blur-sm hover:bg-primary/40 hover:border-primary-foreground transition-all duration-300"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-primary-foreground" />
                  ) : (
                    <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground ml-1" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Simple stats */}
        <div className="mt-14 flex flex-wrap justify-center gap-12 text-center">
          {[
            { value: "1987", label: "Established" },
            { value: "10K+", label: "Pieces Crafted" },
            { value: "100%", label: "Handmade" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-muted-foreground text-sm tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

