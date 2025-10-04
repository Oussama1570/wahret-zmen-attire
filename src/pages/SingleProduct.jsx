import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart, Truck, Shield, RotateCcw } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { useToast } from "@/hooks/use-toast";
import jebbaNavy from "@/assets/jebba-navy.jpg";
import jebbaburgundy from "@/assets/jebba-burgundy.jpg";
import jebbaCream from "@/assets/jebba-cream.jpg";

const allProducts = [
  {
    id: 1,
    name: "Royal Navy Jebba",
    price: "$299",
    originalPrice: "$399",
    image: jebbaNavy,
    category: "navy",
    priceValue: 299,
    rating: 4.8,
    reviews: 124,
    description: "Experience the pinnacle of traditional craftsmanship with our Royal Navy Jebba. Hand-stitched by master artisans, this luxurious garment features premium fabric and intricate embroidery that represents centuries of cultural heritage.",
    features: [
      "100% Premium Cotton Fabric",
      "Hand-embroidered details",
      "Traditional tailoring",
      "Perfect fit guarantee",
      "Dry clean only"
    ],
    inStock: true
  },
  {
    id: 2,
    name: "Classic Burgundy Jebba",
    price: "$349",
    image: jebbaburgundy,
    category: "burgundy",
    priceValue: 349,
    rating: 4.9,
    reviews: 89,
    description: "Elegance redefined with our Classic Burgundy Jebba. The rich burgundy color combined with exquisite craftsmanship makes this piece perfect for special occasions and celebrations.",
    features: [
      "Premium silk-cotton blend",
      "Gold thread embroidery",
      "Tailored fit",
      "Luxury finish",
      "Made to order available"
    ],
    inStock: true
  },
  {
    id: 3,
    name: "Elegant Cream Jebba",
    price: "$279",
    image: jebbaCream,
    category: "cream",
    priceValue: 279,
    rating: 4.7,
    reviews: 156,
    description: "Timeless sophistication meets modern comfort in our Elegant Cream Jebba. Perfect for both formal events and casual elegance, this versatile piece is a wardrobe essential.",
    features: [
      "Breathable cotton fabric",
      "Minimalist design",
      "Comfortable fit",
      "Easy care",
      "Year-round wear"
    ],
    inStock: true
  }
];

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  const product = allProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const similarProducts = allProducts.filter(p => p.category === product.category && p.id !== product.id);

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart!",
      description: `${product.name} (${quantity}x) has been added to your cart.`,
    });
  };

  const handleCheckout = () => {
    navigate("/checkout");
    toast({
      title: "Proceeding to Checkout",
      description: "Redirecting you to checkout...",
    });
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= Math.floor(rating)
                ? "fill-yellow-400 text-yellow-400"
                : star - 0.5 <= rating
                ? "fill-yellow-400/50 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Product Image */}
          <div className="relative group">
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            {product.originalPrice && (
              <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">
                Sale
              </Badge>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-3">
                {product.category.toUpperCase()}
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                {renderStars(product.rating)}
                <span className="text-lg font-semibold text-foreground">
                  {product.rating}
                </span>
                <span className="text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl font-bold text-primary">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-2xl text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Select Size</h3>
              <div className="flex gap-3">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="w-16 h-12"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12"
                >
                  -
                </Button>
                <span className="text-2xl font-semibold text-foreground w-12 text-center">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12"
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <Button
                variant="luxury"
                size="lg"
                className="w-full"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={handleCheckout}
              >
                Buy Now - Checkout
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                <Heart className="mr-2" />
                Add to Wishlist
              </Button>
            </div>

            {/* Features */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Product Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Delivery Info */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="w-8 h-8 text-primary" />
                <span className="text-sm text-muted-foreground">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Shield className="w-8 h-8 text-primary" />
                <span className="text-sm text-muted-foreground">Secure Payment</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RotateCcw className="w-8 h-8 text-primary" />
                <span className="text-sm text-muted-foreground">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products Section */}
        {similarProducts.length > 0 && (
          <section className="py-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Similar Products</h2>
              <p className="text-xl text-muted-foreground">
                Discover more from our {product.category} collection
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarProducts.map((similarProduct) => (
                <div
                  key={similarProduct.id}
                  className="animate-fade-in hover:animate-magnetic-hover transition-all duration-500"
                >
                  <ProductCard {...similarProduct} />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default SingleProduct;
