import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CreditCard, Lock, Truck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

interface ProductCheckoutFormProps {
  productName: string;
  productPrice: number;
}

const checkoutSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50),
  lastName: z.string().trim().min(1, "Last name is required").max(50),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Invalid phone number").max(20),
  address: z.string().trim().min(5, "Address is required").max(200),
  city: z.string().trim().min(1, "City is required").max(50),
  state: z.string().min(1, "State/Province is required"),
  postal: z.string().trim().min(4, "Postal code is required").max(10),
  cardName: z.string().trim().min(1, "Cardholder name is required").max(100),
  cardNumber: z.string().trim().min(13, "Invalid card number").max(19),
  expiry: z.string().trim().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid expiry date (MM/YY)"),
  cvv: z.string().trim().min(3, "Invalid CVV").max(4),
});

export const ProductCheckoutForm = ({ productName, productPrice }: ProductCheckoutFormProps) => {
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
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      checkoutSchema.parse(formData);
      setErrors({});
      
      toast({
        title: "Order Placed Successfully!",
        description: `Your order for ${productName} has been confirmed.`,
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        postal: "",
        cardName: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        
        toast({
          title: "Validation Error",
          description: "Please check all fields and try again.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Shipping Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Truck className="h-5 w-5 text-primary" />
            Shipping Information
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
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
              {errors.firstName && <p className="text-sm text-destructive mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input 
                id="lastName" 
                placeholder="Benali"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
              {errors.lastName && <p className="text-sm text-destructive mt-1">{errors.lastName}</p>}
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="ahmed@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
            {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
          </div>
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="+212 6XX XXX XXX"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
            {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
          </div>
          <div>
            <Label htmlFor="address">Street Address *</Label>
            <Input 
              id="address" 
              placeholder="123 Rue Mohammed V"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
            />
            {errors.address && <p className="text-sm text-destructive mt-1">{errors.address}</p>}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city">City *</Label>
              <Input 
                id="city" 
                placeholder="Casablanca"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
              />
              {errors.city && <p className="text-sm text-destructive mt-1">{errors.city}</p>}
            </div>
            <div>
              <Label htmlFor="state">State/Province *</Label>
              <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="casablanca">Casablanca</SelectItem>
                  <SelectItem value="rabat">Rabat</SelectItem>
                  <SelectItem value="marrakech">Marrakech</SelectItem>
                  <SelectItem value="fez">Fez</SelectItem>
                  <SelectItem value="tangier">Tangier</SelectItem>
                </SelectContent>
              </Select>
              {errors.state && <p className="text-sm text-destructive mt-1">{errors.state}</p>}
            </div>
            <div>
              <Label htmlFor="postal">Postal Code *</Label>
              <Input 
                id="postal" 
                placeholder="20000"
                value={formData.postal}
                onChange={(e) => handleInputChange("postal", e.target.value)}
              />
              {errors.postal && <p className="text-sm text-destructive mt-1">{errors.postal}</p>}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" />
            Payment Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="cardName">Cardholder Name *</Label>
            <Input 
              id="cardName" 
              placeholder="Ahmed Benali"
              value={formData.cardName}
              onChange={(e) => handleInputChange("cardName", e.target.value)}
            />
            {errors.cardName && <p className="text-sm text-destructive mt-1">{errors.cardName}</p>}
          </div>
          <div>
            <Label htmlFor="cardNumber">Card Number *</Label>
            <Input 
              id="cardNumber" 
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={(e) => handleInputChange("cardNumber", e.target.value)}
            />
            {errors.cardNumber && <p className="text-sm text-destructive mt-1">{errors.cardNumber}</p>}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiry">Expiry Date *</Label>
              <Input 
                id="expiry" 
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={(e) => handleInputChange("expiry", e.target.value)}
              />
              {errors.expiry && <p className="text-sm text-destructive mt-1">{errors.expiry}</p>}
            </div>
            <div>
              <Label htmlFor="cvv">CVV *</Label>
              <Input 
                id="cvv" 
                placeholder="123" 
                type="password"
                value={formData.cvv}
                onChange={(e) => handleInputChange("cvv", e.target.value)}
              />
              {errors.cvv && <p className="text-sm text-destructive mt-1">{errors.cvv}</p>}
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="h-4 w-4" />
            Your payment information is secure and encrypted
          </div>
        </CardContent>
      </Card>

      {/* Order Summary */}
      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Product</span>
              <span className="font-medium">{productName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Price</span>
              <span className="font-medium">${productPrice}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>
            <div className="border-t border-border pt-4 flex justify-between items-center text-lg font-bold">
              <span>Total</span>
              <span className="text-primary">${productPrice}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button type="submit" size="lg" className="w-full">
        Complete Purchase
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        By completing your order, you agree to our Terms of Service and Privacy Policy
      </p>
    </form>
  );
};
