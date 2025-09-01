import { Button } from "@/components/ui/button";
import { Award, Heart, Sparkles } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
              The Art of Traditional Elegance
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in-delay-200">
              At Wahret Zmen By Sabri, we preserve the rich heritage of traditional Moroccan craftsmanship while embracing contemporary design. Each Jebba is meticulously handcrafted by skilled artisans who have passed down their techniques through generations.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in-delay-300">
              Our commitment to authenticity and quality ensures that every piece not only honors the past but also celebrates the timeless beauty of traditional attire.
            </p>
            <Button variant="luxury" size="lg" className="animate-fade-in-delay-400 hover:scale-105 transition-transform duration-300">
              Discover Our Heritage
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8 animate-slide-in-right">
            <div className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-card animate-fade-in-delay-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1 animate-float" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Master Craftsmanship</h3>
                <p className="text-muted-foreground">Each piece is handcrafted by experienced artisans with decades of expertise in traditional techniques.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-card animate-fade-in-delay-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Heart className="h-8 w-8 text-primary flex-shrink-0 mt-1 animate-float" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Authentic Heritage</h3>
                <p className="text-muted-foreground">We honor traditional Moroccan design elements while adapting for modern comfort and style.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-card animate-fade-in-delay-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Sparkles className="h-8 w-8 text-primary flex-shrink-0 mt-1 animate-float" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">Only the finest fabrics and materials are selected to ensure lasting beauty and comfort.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};