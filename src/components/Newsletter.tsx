import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-luxury/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20 shadow-card animate-scale-in">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="animate-float mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                    <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-foreground mb-4 animate-fade-in-up">
                  Stay Connected with Tradition
                </h3>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-delay-100">
                  Be the first to discover new collections, exclusive designs, and the stories behind each handcrafted jebba. Join our community of tradition enthusiasts.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-in-delay-200">
                  <Input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-1 h-12"
                  />
                  <Button variant="luxury" size="lg" className="h-12 px-8">
                    Subscribe
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4 animate-fade-in-delay-300">
                  Join 5,000+ customers who trust our craftsmanship
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};