import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-jebbas.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Traditional Jebbas Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
            <span className="inline-block animate-slide-in-left overflow-hidden">
              <span className="block animate-typewriter whitespace-nowrap">Wahret</span>
            </span>{" "}
            <span className="inline-block animate-slide-in-right animation-delay-200">Zmen</span>
            <span className="block text-primary text-3xl md:text-4xl font-light animate-fade-in-delay-400 animate-parallax-slow">By Sabri</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg animate-fade-in-delay-300">
            Discover our exquisite collection of traditional Jebbas, where timeless elegance meets contemporary craftsmanship. Each piece tells a story of heritage and style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-400">
            <Button variant="hero" size="xl" className="animate-glow hover:animate-magnetic-hover transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">Explore Collection</span>
              <span className="absolute inset-0 bg-primary-glow opacity-0 group-hover:animate-ripple"></span>
            </Button>
            <Button variant="outline" size="xl" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:animate-magnetic-hover hover:shadow-lg">
              Learn Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};