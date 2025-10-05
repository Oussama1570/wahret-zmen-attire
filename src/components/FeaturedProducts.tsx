import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";

export const FeaturedProducts = () => {
  const displayProducts = products.map(product => ({
    id: product.id,
    name: product.name,
    price: `$${product.price}`,
    originalPrice: product.originalPrice ? `$${product.originalPrice}` : undefined,
    image: product.image
  }));

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Collection</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handcrafted with precision, each Jebba represents the perfect blend of traditional artistry and modern sophistication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};