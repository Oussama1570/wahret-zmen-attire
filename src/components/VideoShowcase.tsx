import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export const VideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
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

  const handleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="py-24 bg-foreground overflow-hidden relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-sm font-semibold tracking-[0.35em] uppercase mb-4">
            The Art of Excellence
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Where Heritage Meets
            <span className="block text-primary mt-1">Mastery</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Step inside our atelier. Witness the devotion, the patience, and the extraordinary skill
            that transforms the finest fabrics into timeless Jebbas.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative max-w-5xl mx-auto group">
          {/* Glow frame */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-primary-glow to-luxury opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-700" />

          <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-[0_40px_80px_-20px_hsl(var(--luxury)/0.5)]">
            {/* Video element — using a high-quality Pexels embed as fallback */}
            <div className="aspect-video bg-foreground relative">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1280&q=90"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                {/* Premium craft / fabric video from Pexels */}
                <source
                  src="https://videos.pexels.com/video-files/3843432/3843432-uhd_2560_1440_25fps.mp4"
                  type="video/mp4"
                />
              </video>

              {/* Cinematic overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/20 pointer-events-none" />

              {/* Play overlay — shown before first play */}
              {!hasStarted && (
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/30 backdrop-blur-[2px]">
                  <div className="text-center">
                    <button
                      onClick={handlePlay}
                      className="w-24 h-24 rounded-full border-2 border-primary-foreground/80 flex items-center justify-center bg-foreground/40 backdrop-blur-sm hover:bg-primary/30 hover:border-primary transition-all duration-500 group/btn mb-6 mx-auto"
                      aria-label="Play video"
                    >
                      <Play className="w-10 h-10 text-primary-foreground fill-primary-foreground ml-1 group-hover/btn:scale-110 transition-transform duration-300" />
                    </button>
                    <p className="text-primary-foreground/80 text-sm tracking-widest uppercase font-medium">
                      Watch the Craft
                    </p>
                  </div>
                </div>
              )}

              {/* Controls — shown after play starts */}
              {hasStarted && (
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={handlePlay}
                    className="w-12 h-12 rounded-full bg-foreground/60 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center hover:bg-primary/50 transition-colors duration-300"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-primary-foreground" />
                    ) : (
                      <Play className="w-5 h-5 text-primary-foreground fill-primary-foreground ml-0.5" />
                    )}
                  </button>

                  <button
                    onClick={handleMute}
                    className="w-12 h-12 rounded-full bg-foreground/60 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center hover:bg-primary/50 transition-colors duration-300"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-primary-foreground" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-primary-foreground" />
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "1987", label: "Est. Year" },
            { value: "10K+", label: "Pieces Crafted" },
            { value: "35+", label: "Artisans" },
            { value: "100%", label: "Handmade" },
          ].map((stat) => (
            <div key={stat.label} className="group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-muted text-sm tracking-widest uppercase font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
