import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Package, MapPin, Clock, ArrowRight, Copy } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const OrderConfirm = () => {
  const { toast } = useToast();
  const location = useLocation();
  const orderId = location.state?.orderId || "WZ-2026-" + Math.random().toString(36).substring(2, 8).toUpperCase();

  const copyOrderId = () => {
    navigator.clipboard.writeText(orderId);
    toast({ title: "Copied!", description: "Order ID copied to clipboard." });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Success Animation */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
              <CheckCircle className="w-14 h-14 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-3">Order Confirmed</h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Thank you for your purchase. Your order has been received and is being prepared.
            </p>
          </div>

          {/* Order ID Card */}
          <Card className="mb-8 animate-fade-in-delay-100 border-primary/20 bg-primary/5">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Order Reference</p>
                <p className="text-2xl font-bold tracking-wider text-foreground">{orderId}</p>
              </div>
              <Button variant="ghost" size="icon" onClick={copyOrderId} className="text-primary">
                <Copy className="w-5 h-5" />
              </Button>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card className="mb-8 animate-fade-in-delay-200">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-foreground mb-8">What happens next?</h2>
              <div className="space-y-8">
                {[
                  {
                    icon: CheckCircle,
                    title: "Order Received",
                    desc: "Your order has been confirmed and payment processed.",
                    active: true,
                  },
                  {
                    icon: Package,
                    title: "Preparing Your Order",
                    desc: "Our artisans will carefully prepare and package your jebba.",
                    active: false,
                  },
                  {
                    icon: MapPin,
                    title: "Shipped & On the Way",
                    desc: "You'll receive a notification once your order is dispatched.",
                    active: false,
                  },
                  {
                    icon: Clock,
                    title: "Estimated Delivery",
                    desc: "3–7 business days depending on your location.",
                    active: false,
                  },
                ].map((step, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step.active
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <step.icon className="w-5 h-5" />
                      </div>
                      {i < 3 && (
                        <div className={`w-px h-full min-h-[24px] mt-2 ${step.active ? "bg-primary/40" : "bg-border"}`} />
                      )}
                    </div>
                    <div className="pb-2">
                      <h3 className={`font-semibold ${step.active ? "text-foreground" : "text-muted-foreground"}`}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Summary */}
          <Card className="mb-8 animate-fade-in-delay-300">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-foreground mb-6">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Royal Navy Jebba × 1</span>
                  <span className="font-medium">$299.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Classic Burgundy Jebba × 2</span>
                  <span className="font-medium">$698.00</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-primary font-medium">Free</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">$972.90</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-300">
            <Link to={`/order-track/${orderId}`} className="flex-1">
              <Button variant="luxury" size="lg" className="w-full gap-2">
                Track Your Order <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/" className="flex-1">
              <Button variant="outline" size="lg" className="w-full">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirm;
