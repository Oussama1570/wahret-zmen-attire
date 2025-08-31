import { ProductCard } from "./ProductCard";
import jebbaNavy from "@/assets/jebba-navy.jpg";
import jebbaburgundy from "@/assets/jebba-burgundy.jpg";
import jebbaCream from "@/assets/jebba-cream.jpg";

export const FeaturedProducts = () => {
  const products = [
    {
      name: "Royal Navy Jebba",
      price: "$299",
      originalPrice: "$399",
      image: jebbaNavy
    },
    {
      name: "Classic Burgundy Jebba",
      price: "$349",
      image: jebbaburgundy
    },
    {
      name: "Elegant Cream Jebba",
      price: "$279",
      image: jebbaCream
    }
  ];

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
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};