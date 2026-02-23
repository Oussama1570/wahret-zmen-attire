import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Package, MapPin, Clock, ArrowRight, Copy, Banknote, ShieldCheck, Truck } from "lucide-react";
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

  const steps = [
    { icon: CheckCircle, title: "Order Received", desc: "Your order has been confirmed. No payment required until delivery.", active: true },
    { icon: Package, title: "Preparing Your Order", desc: "Our artisans will carefully prepare and package your jebba.", active: false },
    { icon: Truck, title: "Shipped & On the Way", desc: "You'll receive a notification once your order is dispatched.", active: false },
    { icon: Banknote, title: "Pay on Delivery", desc: "Pay the total amount in cash when your order arrives.", active: false },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Success Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-3 font-serif">Order Confirmed!</h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Thank you for your purchase. Your order is being processed and will be delivered soon.
            </p>
          </div>

          {/* Order ID + Payment Badge */}
          <Card className="mb-6 animate-fade-in-delay-100 border-primary/20 bg-primary/[0.03]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Order Reference</p>
                  <p className="text-2xl font-bold tracking-wider text-foreground font-mono">{orderId}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    <Banknote className="w-3.5 h-3.5" />
                    Cash on Delivery
                  </div>
                  <Button variant="ghost" size="icon" onClick={copyOrderId} className="text-primary">
                    <Copy className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Note */}
          <Card className="mb-8 animate-fade-in-delay-100 border-accent/30 bg-accent/5">
            <CardContent className="p-4 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-foreground mb-0.5">No payment required now</p>
                <p className="text-muted-foreground">You will pay <span className="font-semibold text-foreground">$972.90</span> in cash when your order is delivered to your address.</p>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card className="mb-8 animate-fade-in-delay-200">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-foreground mb-8 font-serif">What happens next?</h2>
              <div className="space-y-0">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          step.active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <step.icon className="w-5 h-5" />
                      </div>
                      {i < steps.length - 1 && (
                        <div className={`w-px flex-1 min-h-[28px] mt-2 ${step.active ? "bg-primary/40" : "bg-border"}`} />
                      )}
                    </div>
                    <div className="pb-8">
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

          {/* Order Summary */}
          <Card className="mb-8 animate-fade-in-delay-300">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-foreground mb-6 font-serif">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <div>
                    <span className="text-foreground font-medium">Royal Navy Jebba</span>
                    <span className="text-muted-foreground text-sm ml-2">× 1</span>
                  </div>
                  <span className="font-medium">$299.00</span>
                </div>
                <div className="flex justify-between">
                  <div>
                    <span className="text-foreground font-medium">Classic Burgundy Jebba</span>
                    <span className="text-muted-foreground text-sm ml-2">× 2</span>
                  </div>
                  <span className="font-medium">$698.00</span>
                </div>
                <Separator />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-primary font-medium">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Payment Method</span>
                  <span className="font-medium flex items-center gap-1.5">
                    <Banknote className="w-3.5 h-3.5 text-primary" /> Cash on Delivery
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Amount Due on Delivery</span>
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
