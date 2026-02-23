import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  Search,
  CheckCircle,
  Package,
  Truck,
  MapPin,
  Banknote,
  Phone,
  Mail,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const trackingSteps = [
  { icon: CheckCircle, label: "Order Confirmed", date: "Feb 20, 2026 – 10:32 AM", desc: "Your order has been received and confirmed", done: true },
  { icon: Package, label: "Being Prepared", date: "Feb 20, 2026 – 02:15 PM", desc: "Our artisans are preparing your jebba", done: true },
  { icon: Truck, label: "Shipped", date: "Feb 21, 2026 – 09:00 AM", desc: "Your order is on the way", done: true },
  { icon: MapPin, label: "Out for Delivery", date: "Estimated Feb 24, 2026", desc: "Your order will be delivered today", done: false },
  { icon: Banknote, label: "Delivered & Paid", date: "—", desc: "Pay in cash upon delivery", done: false },
];

const OrderTrack = () => {
  const [trackingId, setTrackingId] = useState("");
  const [hasSearched, setHasSearched] = useState(true);

  const completedSteps = trackingSteps.filter((s) => s.done).length;
  const progress = (completedSteps / trackingSteps.length) * 100;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-5">
              <Package className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-3 font-serif">Track Your Order</h1>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Enter your order reference to see real-time status updates
            </p>
          </div>

          {/* Search */}
          <Card className="mb-10 animate-fade-in-delay-100 border-border/60">
            <CardContent className="p-5">
              <div className="flex gap-3">
                <div className="flex-1">
                  <Label htmlFor="trackId" className="sr-only">Order ID</Label>
                  <Input
                    id="trackId"
                    placeholder="e.g. WZ-2026-A3F8KD"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="h-12 text-base font-mono"
                  />
                </div>
                <Button variant="luxury" size="lg" className="gap-2 px-6" onClick={() => setHasSearched(true)}>
                  <Search className="w-4 h-4" /> Track
                </Button>
              </div>
            </CardContent>
          </Card>

          {hasSearched && (
            <>
              {/* Status Overview */}
              <div className="mb-8 animate-fade-in-delay-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">Order Progress</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                      {completedSteps}/{trackingSteps.length} steps
                    </span>
                  </div>
                  <span className="text-sm font-bold text-primary">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2.5" />
              </div>

              {/* Payment Badge */}
              <Card className="mb-8 animate-fade-in-delay-200 border-accent/30 bg-accent/5">
                <CardContent className="p-4 flex items-center gap-3">
                  <Banknote className="w-5 h-5 text-primary shrink-0" />
                  <div className="flex-1 text-sm">
                    <span className="font-medium text-foreground">Cash on Delivery</span>
                    <span className="text-muted-foreground ml-1.5">— $972.90 due upon delivery</span>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card className="mb-8 animate-fade-in-delay-200">
                <CardContent className="p-8">
                  <h2 className="text-xl font-semibold text-foreground mb-8 font-serif">Shipment Timeline</h2>
                  <div className="space-y-0">
                    {trackingSteps.map((step, i) => (
                      <div key={i} className="flex gap-5">
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                              step.done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                            }`}
                          >
                            <step.icon className="w-5 h-5" />
                          </div>
                          {i < trackingSteps.length - 1 && (
                            <div className={`w-px flex-1 min-h-[32px] mt-2 ${step.done ? "bg-primary/40" : "bg-border"}`} />
                          )}
                        </div>
                        <div className="pb-8">
                          <h3 className={`font-semibold ${step.done ? "text-foreground" : "text-muted-foreground"}`}>
                            {step.label}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-0.5">{step.desc}</p>
                          <p className="text-xs text-muted-foreground/70 mt-1">{step.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Details */}
              <Card className="mb-8 animate-fade-in-delay-300">
                <CardContent className="p-8">
                  <h2 className="text-xl font-semibold text-foreground mb-6 font-serif">Delivery Details</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Shipping Address</p>
                      <p className="font-medium text-foreground">Ahmed Benali</p>
                      <p className="text-sm text-muted-foreground">123 Rue Mohammed V</p>
                      <p className="text-sm text-muted-foreground">Casablanca, 20000</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Estimated Delivery</p>
                      <p className="font-medium text-foreground">Feb 24 – Feb 27, 2026</p>
                      <p className="text-sm text-muted-foreground mt-3 mb-1">Carrier</p>
                      <p className="font-medium text-foreground">Wahret Zmen Express</p>
                    </div>
                  </div>
                  <Separator className="my-5" />
                  <div className="flex items-center gap-2 text-sm">
                    <Banknote className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Amount due on delivery:</span>
                    <span className="font-bold text-foreground">$972.90</span>
                  </div>
                </CardContent>
              </Card>

              {/* Support */}
              <Card className="animate-fade-in-delay-300 border-primary/10">
                <CardContent className="p-8 text-center">
                  <h2 className="text-lg font-semibold text-foreground mb-2 font-serif">Need Help?</h2>
                  <p className="text-muted-foreground text-sm mb-6">Our support team is available to assist you</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="outline" className="gap-2">
                      <Phone className="w-4 h-4" /> +212 6XX XXX XXX
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Mail className="w-4 h-4" /> support@wahretzmen.com
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderTrack;
