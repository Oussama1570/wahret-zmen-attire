import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Sparkles, Users, Globe, Clock } from "lucide-react";
import heroImage from "@/assets/hero-jebbas.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Heritage & Tradition",
      description: "We honor centuries-old Moroccan craftsmanship traditions, preserving the authentic techniques passed down through generations of skilled artisans."
    },
    {
      icon: Award,
      title: "Uncompromising Quality",
      description: "Every jebba undergoes rigorous quality control, ensuring that each piece meets our exacting standards of excellence and durability."
    },
    {
      icon: Sparkles,
      title: "Artisanal Excellence",
      description: "Our master craftsmen bring decades of experience to every stitch, creating pieces that are not just clothing, but wearable art."
    },
    {
      icon: Users,
      title: "Customer-Centric Approach",
      description: "We believe in building relationships with our customers, offering personalized service and ensuring complete satisfaction with every purchase."
    },
    {
      icon: Globe,
      title: "Global Reach, Local Roots",
      description: "While we serve customers worldwide, we remain deeply rooted in Moroccan culture and committed to supporting local artisan communities."
    },
    {
      icon: Clock,
      title: "Timeless Design",
      description: "Our designs blend traditional elegance with contemporary sophistication, creating pieces that transcend fashion trends and time."
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "10,000+", label: "Happy Customers" },
    { number: "50+", label: "Skilled Artisans" },
    { number: "100%", label: "Handcrafted Quality" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="About Wahret Zmen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Wahret Zmen By Sabri was born from a deep passion for preserving Morocco's rich textile heritage while creating timeless pieces for the modern world.
            </p>
            <Button variant="luxury" size="lg" className="animate-fade-in-delay-200">
              Discover Our Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded by Sabri, a passionate advocate for Moroccan craftsmanship, Wahret Zmen represents more than just a clothing brand. We are guardians of tradition, dedicated to preserving the ancient art of jebba-making while adapting it for contemporary lifestyles.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Each piece in our collection tells a story of heritage, skill, and dedication. We work exclusively with master artisans who have inherited their craft through generations, ensuring that every jebba embodies the authentic spirit of Moroccan excellence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment extends beyond creating beautiful garments. We strive to support local communities, preserve traditional techniques, and introduce the world to the unparalleled beauty of Moroccan craftsmanship.
              </p>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center p-6 hover:shadow-card transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do, from the selection of materials to the final quality check of each jebba.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index}
                  className={`group text-center hover:shadow-card transition-all duration-500 hover:-translate-y-2 animate-fade-in-delay-${(index % 3 + 1) * 100}`}
                >
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mb-6 animate-float">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-luxury/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Experience the Difference
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of satisfied customers who have discovered the beauty and quality of authentic Moroccan craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="lg">
                Shop Our Collection
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;