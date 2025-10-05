import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { Star } from "lucide-react";
import { getProductById, getProductsByCategory } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const product = getProductById(id || "");

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/")}>Return to Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const similarProducts = getProductsByCategory(product.category, product.id);

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? "fill-accent text-accent"
            : "fill-muted text-muted"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Product Image */}
          <div className="animate-fade-in">
            <div className="overflow-hidden rounded-lg shadow-card">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-fade-in-delay-200">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">{renderStars(product.rating)}</div>
              <span className="text-muted-foreground">({product.rating} stars)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl font-bold text-primary">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-2xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8">
              {product.description}
            </p>

            {/* Product Details */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Product Details
              </h3>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="text-primary mt-1">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Checkout Button */}
            <Button
              size="lg"
              className="w-full text-lg py-6"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Similar Products Section */}
        {similarProducts.length > 0 && (
          <section className="py-12 border-t border-border">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Similar Products
              </h2>
              <p className="text-lg text-muted-foreground">
                Discover more from the {product.category} collection
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarProducts.map((similarProduct) => (
                <ProductCard
                  key={similarProduct.id}
                  id={similarProduct.id}
                  name={similarProduct.name}
                  price={`$${similarProduct.price}`}
                  originalPrice={
                    similarProduct.originalPrice
                      ? `$${similarProduct.originalPrice}`
                      : undefined
                  }
                  image={similarProduct.image}
                />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
