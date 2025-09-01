import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import jebbaNavy from "@/assets/jebba-navy.jpg";
import jebbaburgundy from "@/assets/jebba-burgundy.jpg";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Royal Navy Jebba",
      price: 299,
      originalPrice: 399,
      image: jebbaNavy,
      quantity: 1,
      size: "L"
    },
    {
      id: 2,
      name: "Classic Burgundy Jebba", 
      price: 349,
      image: jebbaburgundy,
      quantity: 2,
      size: "XL"
    }
  ];

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1; 
  const shipping = subtotal > 500 ? 0 : 25;
  const total = subtotal + tax + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-4xl font-bold text-foreground mb-2">Shopping Cart</h1>
            <p className="text-muted-foreground">Review your selected items</p>
          </div>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item, index) => (
                  <Card key={item.id} className={`animate-fade-in-delay-${(index + 1) * 100}`}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full md:w-32 h-32 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                            <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-muted-foreground mb-2">Size: {item.size}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-primary">${item.price}</span>
                              {item.originalPrice && (
                                <span className="text-lg text-muted-foreground line-through">${item.originalPrice}</span>
                              )}
                            </div>
                            <div className="flex items-center gap-3">
                              <Button variant="outline" size="icon" className="h-8 w-8">
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="font-medium w-8 text-center">{item.quantity}</span>
                              <Button variant="outline" size="icon" className="h-8 w-8">
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="animate-fade-in-delay-300">
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-6">Order Summary</h3>
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-medium">${subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax</span>
                        <span className="font-medium">${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className="font-medium">{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                      </div>
                      <hr className="border-border" />
                      <div className="flex justify-between text-lg">
                        <span className="font-semibold">Total</span>
                        <span className="font-bold text-primary">${total.toFixed(2)}</span>
                      </div>
                    </div>
                    <Link to="/checkout">
                      <Button variant="luxury" className="w-full mb-4">
                        Proceed to Checkout
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button variant="outline" className="w-full">
                        Continue Shopping
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 animate-fade-in">
              <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">Discover our beautiful collection of traditional jebbas</p>
              <Link to="/">
                <Button variant="luxury">
                  Start Shopping
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;