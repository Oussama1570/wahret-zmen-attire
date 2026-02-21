import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-luxury" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-foreground/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-foreground/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-luxury-foreground/20 mb-8">
            <Mail className="w-6 h-6 text-luxury-foreground/80" />
          </div>

          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-luxury-foreground mb-4 tracking-tight">
            Stay Connected
          </h3>
          <p className="text-luxury-foreground/60 text-lg mb-10 leading-relaxed max-w-lg mx-auto">
            Be the first to discover new collections and exclusive designs crafted with tradition.
          </p>

          {/* Form */}
          <form onSubmit={handleSubscribe} className="relative max-w-md mx-auto">
            {subscribed ? (
              <div className="flex items-center justify-center gap-3 h-14 text-luxury-foreground/90">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wide">Thank you for subscribing</span>
              </div>
            ) : (
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-13 bg-luxury-foreground/5 border-luxury-foreground/15 text-luxury-foreground placeholder:text-luxury-foreground/40 focus-visible:ring-luxury-foreground/30 rounded-lg"
                />
                <Button
                  type="submit"
                  className="h-13 px-6 bg-luxury-foreground text-luxury hover:bg-luxury-foreground/90 rounded-lg font-medium"
                >
                  <span className="hidden sm:inline mr-2">Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </form>

          {/* Trust line */}
          <p className="text-luxury-foreground/30 text-xs mt-8 tracking-widest uppercase">
            Join 5,000+ tradition enthusiasts
          </p>
        </div>
      </div>
    </section>
  );
};
