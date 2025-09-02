import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Filter, Grid, List, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import jebbaNavy from "@/assets/jebba-navy.jpg";
import jebbaburgundy from "@/assets/jebba-burgundy.jpg";
import jebbaCream from "@/assets/jebba-cream.jpg";

const Collections = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([100, 500]);

  const allProducts = [
    {
      id: 1,
      name: "Royal Navy Jebba",
      price: "$299",
      originalPrice: "$399",
      image: jebbaNavy,
      category: "Premium",
      color: "Navy",
      size: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 2,
      name: "Classic Burgundy Jebba",
      price: "$349",
      image: jebbaburgundy,
      category: "Classic",
      color: "Burgundy", 
      size: ["M", "L", "XL", "XXL"]
    },
    {
      id: 3,
      name: "Elegant Cream Jebba",
      price: "$279",
      image: jebbaCream,
      category: "Elegant",
      color: "Cream",
      size: ["S", "M", "L", "XL"]
    },
    {
      id: 4,
      name: "Luxurious Gold Jebba",
      price: "$429",
      image: jebbaNavy,
      category: "Luxury",
      color: "Gold",
      size: ["M", "L", "XL", "XXL"]
    },
    {
      id: 5,
      name: "Traditional Black Jebba",
      price: "$319",
      image: jebbaburgundy,
      category: "Traditional",
      color: "Black",
      size: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 6,
      name: "Modern White Jebba",
      price: "$289",
      image: jebbaCream,
      category: "Modern",
      color: "White",
      size: ["M", "L", "XL"]
    }
  ];

  const categories = ["All", "Premium", "Classic", "Elegant", "Luxury", "Traditional", "Modern"];
  const colors = ["All", "Navy", "Burgundy", "Cream", "Gold", "Black", "White"];
  const sizes = ["All", "S", "M", "L", "XL", "XXL"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-luxury/5">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl font-bold text-foreground mb-4">Our Collections</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our complete range of handcrafted Jebbas, each piece representing the finest in Moroccan craftsmanship and design.
            </p>
          </div>
        </div>
      </section>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <Card className="animate-slide-in-left">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Filter className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">Filters</h3>
                  </div>

                  {/* Category Filter */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Category</h4>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category.toLowerCase()}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Color Filter */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Color</h4>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select color" />
                      </SelectTrigger>
                      <SelectContent>
                        {colors.map((color) => (
                          <SelectItem key={color} value={color.toLowerCase()}>
                            {color}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Size Filter */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Size</h4>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        {sizes.map((size) => (
                          <SelectItem key={size} value={size.toLowerCase()}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Price Range</h4>
                    <div className="px-2">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={500}
                        min={100}
                        step={10}
                        className="mb-4"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-8 animate-fade-in-delay-200">
                <div className="flex items-center gap-4 mb-4 sm:mb-0">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden"
                  >
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                  <span className="text-muted-foreground">
                    Showing {allProducts.length} products
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="flex border rounded-lg">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className="rounded-r-none"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className="rounded-l-none"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Products Display */}
              <div className={`grid gap-8 ${
                viewMode === "grid" 
                  ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" 
                  : "grid-cols-1"
              }`}>
                {allProducts.map((product, index) => (
                  <div 
                    key={product.id} 
                    className={`animate-fade-in-delay-${(index % 6 + 1) * 100} ${
                      viewMode === "list" ? "max-w-none" : ""
                    }`}
                  >
                    {viewMode === "grid" ? (
                      <ProductCard {...product} />
                    ) : (
                      <Card className="group hover:shadow-card transition-all duration-500">
                        <CardContent className="p-0">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-80 overflow-hidden">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-full h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                            </div>
                            <div className="flex-1 p-6">
                              <div className="flex justify-between items-start mb-4">
                                <div>
                                  <h3 className="text-2xl font-semibold text-foreground mb-2">{product.name}</h3>
                                  <p className="text-muted-foreground">Category: {product.category}</p>
                                  <p className="text-muted-foreground">Color: {product.color}</p>
                                </div>
                                <div className="text-right">
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                                    {product.originalPrice && (
                                      <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                                    )}
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    Sizes: {product.size.join(", ")}
                                  </p>
                                </div>
                              </div>
                              <Button variant="luxury" className="w-full md:w-auto">
                                Add to Cart
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12 animate-fade-in-delay-400">
                <Button variant="outline" size="lg">
                  Load More Products
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;