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
  Clock,
  Phone,
  Mail,
} from "lucide-react";

const trackingSteps = [
  { icon: CheckCircle, label: "Order Confirmed", date: "Feb 20, 2026 – 10:32 AM", done: true },
  { icon: Package, label: "Being Prepared", date: "Feb 20, 2026 – 02:15 PM", done: true },
  { icon: Truck, label: "Shipped", date: "Feb 21, 2026 – 09:00 AM", done: true },
  { icon: MapPin, label: "Out for Delivery", date: "Estimated Feb 24, 2026", done: false },
  { icon: Clock, label: "Delivered", date: "—", done: false },
];

const OrderTrack = () => {
  const [trackingId, setTrackingId] = useState("");
  const [hasSearched, setHasSearched] = useState(true); // Show demo by default

  const progress = (trackingSteps.filter((s) => s.done).length / trackingSteps.length) * 100;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-foreground mb-3">Track Your Order</h1>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Enter your order reference to see real-time status updates.
            </p>
          </div>

          {/* Search Bar */}
          <Card className="mb-10 animate-fade-in-delay-100">
            <CardContent className="p-6">
              <div className="flex gap-3">
                <div className="flex-1">
                  <Label htmlFor="trackId" className="sr-only">Order ID</Label>
                  <Input
                    id="trackId"
                    placeholder="e.g. WZ-2026-A3F8KD"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="h-12 text-base"
                  />
                </div>
                <Button
                  variant="luxury"
                  size="lg"
                  className="gap-2 px-6"
                  onClick={() => setHasSearched(true)}
                >
                  <Search className="w-4 h-4" /> Track
                </Button>
              </div>
            </CardContent>
          </Card>

          {hasSearched && (
            <>
              {/* Progress Bar */}
              <div className="mb-10 animate-fade-in-delay-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-foreground">Order Progress</span>
                  <span className="text-sm font-bold text-primary">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {/* Timeline */}
              <Card className="mb-10 animate-fade-in-delay-200">
                <CardContent className="p-8">
                  <h2 className="text-xl font-semibold text-foreground mb-8">Shipment Timeline</h2>
                  <div className="space-y-0">
                    {trackingSteps.map((step, i) => (
                      <div key={i} className="flex gap-5">
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                              step.done
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            <step.icon className="w-5 h-5" />
                          </div>
                          {i < trackingSteps.length - 1 && (
                            <div
                              className={`w-px flex-1 min-h-[32px] mt-2 ${
                                step.done ? "bg-primary/40" : "bg-border"
                              }`}
                            />
                          )}
                        </div>
                        <div className="pb-8">
                          <h3
                            className={`font-semibold ${
                              step.done ? "text-foreground" : "text-muted-foreground"
                            }`}
                          >
                            {step.label}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">{step.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Order Details */}
              <Card className="mb-10 animate-fade-in-delay-300">
                <CardContent className="p-8">
                  <h2 className="text-xl font-semibold text-foreground mb-6">Delivery Details</h2>
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
                </CardContent>
              </Card>

              {/* Support */}
              <Card className="animate-fade-in-delay-300 border-primary/10">
                <CardContent className="p-8 text-center">
                  <h2 className="text-lg font-semibold text-foreground mb-2">Need Help?</h2>
                  <p className="text-muted-foreground text-sm mb-6">
                    Our support team is available 24/7 to assist you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" className="gap-2">
                      <Phone className="w-4 h-4" /> +212 6XX XXX XXX
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Mail className="w-4 h-4" /> support@wahretzmen.com
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
