import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Palette, Crown, Heart } from "lucide-react";

export const CraftmanshipShowcase = () => {
  const processes = [
    {
      icon: Palette,
      title: "Premium Fabric Selection",
      description: "We source only the finest fabrics from renowned Moroccan textile artisans, ensuring each jebba feels as luxurious as it looks.",
      delay: "100"
    },
    {
      icon: Scissors,
      title: "Master Tailoring",
      description: "Every stitch is placed with precision by skilled artisans who have inherited generations of traditional tailoring techniques.",
      delay: "200"
    },
    {
      icon: Crown,
      title: "Hand-Finished Details",
      description: "From intricate embroidery to decorative buttons, each detail is meticulously hand-finished to perfection.",
      delay: "300"
    },
    {
      icon: Heart,
      title: "Quality Assurance",
      description: "Each piece undergoes rigorous quality checks to ensure it meets our exacting standards of excellence and durability.",
      delay: "400"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">The Art of Craftsmanship</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the meticulous process behind each jebba, where traditional techniques meet modern precision to create timeless masterpieces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <Card 
                key={index}
                className={`group text-center hover:shadow-card transition-all duration-500 hover:-translate-y-2 animate-fade-in-delay-${process.delay}`}
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mb-6 animate-float">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};