import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Benali",
      location: "Casablanca",
      rating: 5,
      text: "The quality is exceptional. Each jebba is a masterpiece of traditional craftsmanship. I've ordered three pieces and each one exceeds my expectations."
    },
    {
      name: "Laila Zahra", 
      location: "Rabat",
      rating: 5,
      text: "Wahret Zmen captures the essence of Moroccan heritage beautifully. The attention to detail and the luxurious fabrics make these jebbas truly special."
    },
    {
      name: "Omar Tazi",
      location: "Fez", 
      rating: 5,
      text: "I wore my burgundy jebba to my wedding ceremony. The compliments were endless. Sabri's work truly honors our traditions while adding modern elegance."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover why our customers choose Wahret Zmen for their most special occasions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-card transition-all duration-500 hover:-translate-y-1 animate-fade-in-delay-${(index + 1) * 100}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};