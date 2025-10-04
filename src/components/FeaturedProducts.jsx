import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { ProductSelector } from "./ProductSelector";
import jebbaNavy from "@/assets/jebba-navy.jpg";
import jebbaburgundy from "@/assets/jebba-burgundy.jpg";
import jebbaCream from "@/assets/jebba-cream.jpg";

export const FeaturedProducts = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const allProducts = [
    {
      id: 1,
      name: "Royal Navy Jebba",
      price: "$299",
      originalPrice: "$399",
      image: jebbaNavy,
      category: "navy",
      priceValue: 299
    },
    {
      id: 2,
      name: "Classic Burgundy Jebba",
      price: "$349",
      image: jebbaburgundy,
      category: "burgundy",
      priceValue: 349
    },
    {
      id: 3,
      name: "Elegant Cream Jebba",
      price: "$279",
      image: jebbaCream,
      category: "cream",
      priceValue: 279
    }
  ];

  const handleFilterChange = ({ category, priceRange }) => {
    let filtered = [...allProducts];

    // Filter by category
    if (category !== "all") {
      filtered = filtered.filter(product => product.category === category);
    }

    // Filter by price range
    if (priceRange !== "all") {
      filtered = filtered.filter(product => {
        switch (priceRange) {
          case "under-300":
            return product.priceValue < 300;
          case "300-350":
            return product.priceValue >= 300 && product.priceValue <= 350;
          case "over-350":
            return product.priceValue > 350;
          default:
            return true;
        }
      });
    }

    setFilteredProducts(filtered);
  };

  // Initialize with all products
  const displayProducts = filteredProducts.length > 0 || filteredProducts.length === 0 ? 
    (filteredProducts.length === 0 ? allProducts : filteredProducts) : allProducts;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in-up">Featured Collection</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay-200">
            Handcrafted with precision, each Jebba represents the perfect blend of traditional artistry and modern sophistication.
          </p>
        </div>

        <ProductSelector 
          onFilterChange={handleFilterChange} 
          totalProducts={allProducts.length}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product, index) => (
            <div key={product.id} className={`animate-fade-in-delay-${(index + 3) * 100}`}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {displayProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products match your current filters.</p>
          </div>
        )}
      </div>
    </section>
  );
};