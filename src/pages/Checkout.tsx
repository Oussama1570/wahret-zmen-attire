import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Banknote, Truck, ShieldCheck, MapPin, User, Phone, Mail, ChevronRight, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postal: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const orderTotal = 972.90;

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = () => {
    const required = ["firstName", "lastName", "phone", "address", "city"];
    const newErrors: Record<string, boolean> = {};
    required.forEach((f) => {
      if (!formData[f as keyof typeof formData].trim()) newErrors[f] = true;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast({ title: "Missing Information", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }

    const orderId = "WZ-2026-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    navigate("/order-confirm", { state: { orderId, formData } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 animate-fade-in">
            <Link to="/cart" className="hover:text-primary transition-colors">Cart</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Checkout</span>
            <ChevronRight className="w-4 h-4" />
            <span>Confirmation</span>
          </div>

          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2 font-serif">Secure Checkout</h1>
            <p className="text-muted-foreground">Complete your order — pay on delivery</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Info */}
              <Card className="animate-fade-in-delay-100 border-border/60 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2.5 text-lg">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="Ahmed"
                        value={formData.firstName}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                        className={errors.firstName ? "border-destructive" : ""}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Benali"
                        value={formData.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                        className={errors.lastName ? "border-destructive" : ""}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5" /> Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ahmed@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5" /> Phone *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+212 6XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className={errors.phone ? "border-destructive" : ""}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card className="animate-fade-in-delay-200 border-border/60 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2.5 text-lg">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    Shipping Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      placeholder="123 Rue Mohammed V"
                      value={formData.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                      className={errors.address ? "border-destructive" : ""}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        placeholder="Casablanca"
                        value={formData.city}
                        onChange={(e) => handleChange("city", e.target.value)}
                        className={errors.city ? "border-destructive" : ""}
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">Region</Label>
                      <Select onValueChange={(v) => handleChange("state", v)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="casablanca-settat">Casablanca-Settat</SelectItem>
                          <SelectItem value="rabat-sale">Rabat-Salé-Kénitra</SelectItem>
                          <SelectItem value="marrakech-safi">Marrakech-Safi</SelectItem>
                          <SelectItem value="fes-meknes">Fès-Meknès</SelectItem>
                          <SelectItem value="tanger-tetouan">Tanger-Tétouan-Al Hoceïma</SelectItem>
                          <SelectItem value="souss-massa">Souss-Massa</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="postal">Postal Code</Label>
                      <Input
                        id="postal"
                        placeholder="20000"
                        value={formData.postal}
                        onChange={(e) => handleChange("postal", e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method — COD Only */}
              <Card className="animate-fade-in-delay-300 border-primary/20 bg-primary/[0.03] shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2.5 text-lg">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Banknote className="h-4 w-4 text-primary" />
                    </div>
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 p-4 rounded-xl border-2 border-primary/30 bg-primary/5">
                    <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <Banknote className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">Cash on Delivery</p>
                      <p className="text-sm text-muted-foreground">Pay when your order arrives at your door</p>
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    No payment required now — pay only when you receive your order
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary Sidebar */}
            <div className="animate-fade-in-delay-300">
              <Card className="sticky top-24 border-border/60 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2.5 text-lg">
                    <Package className="h-5 w-5 text-primary" />
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Items */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-foreground text-sm">Royal Navy Jebba</p>
                          <p className="text-xs text-muted-foreground">Size: L · Qty: 1</p>
                        </div>
                        <span className="font-medium text-sm">$299.00</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-foreground text-sm">Classic Burgundy Jebba</p>
                          <p className="text-xs text-muted-foreground">Size: XL · Qty: 2</p>
                        </div>
                        <span className="font-medium text-sm">$698.00</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>$997.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Discount</span>
                        <span className="text-primary">-$24.25</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className="text-primary font-medium">Free</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">${orderTotal.toFixed(2)}</span>
                    </div>

                    <div className="pt-2 space-y-3">
                      <Button variant="luxury" className="w-full" size="lg" onClick={handleSubmit}>
                        <Truck className="w-4 h-4 mr-2" />
                        Place Order — Pay on Delivery
                      </Button>
                      <p className="text-xs text-center text-muted-foreground leading-relaxed">
                        By placing your order, you agree to our{" "}
                        <Link to="/terms" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">Terms of Service</Link>
                        {" "}and{" "}
                        <Link to="/privacy" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">Privacy Policy</Link>.
                        You will pay ${orderTotal.toFixed(2)} upon delivery.
                      </p>
                    </div>

                    {/* Trust Badges */}
                    <Separator />
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                        <span>Secure Order</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Truck className="w-4 h-4 text-primary shrink-0" />
                        <span>Free Shipping</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Banknote className="w-4 h-4 text-primary shrink-0" />
                        <span>Pay on Delivery</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Package className="w-4 h-4 text-primary shrink-0" />
                        <span>Quality Guaranteed</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
