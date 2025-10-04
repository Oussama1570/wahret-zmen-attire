import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const ProductSelector = ({ onFilterChange, totalProducts = 0 }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activePriceRange, setActivePriceRange] = useState("all");

  const categories = [
    { id: "all", label: "All Jebbas", count: totalProducts },
    { id: "navy", label: "Navy Collection", count: 1 },
    { id: "burgundy", label: "Burgundy Collection", count: 1 },
    { id: "cream", label: "Cream Collection", count: 1 }
  ];

  const priceRanges = [
    { id: "all", label: "All Prices" },
    { id: "under-300", label: "Under $300" },
    { id: "300-350", label: "$300 - $350" },
    { id: "over-350", label: "Over $350" }
  ];

  const handleCategoryFilter = (categoryId) => {
    setActiveFilter(categoryId);
    onFilterChange?.({ category: categoryId, priceRange: activePriceRange });
  };

  const handlePriceFilter = (priceId) => {
    setActivePriceRange(priceId);
    onFilterChange?.({ category: activeFilter, priceRange: priceId });
  };

  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-card mb-12 animate-fade-in">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-foreground mb-2">Discover Your Perfect Jebba</h3>
        <p className="text-muted-foreground">Filter by style and price to find your ideal traditional garment</p>
      </div>

      {/* Category Filters */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground/80 mb-3 uppercase tracking-wider">Collection</h4>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryFilter(category.id)}
              className={`relative overflow-hidden group transition-all duration-300 ${
                activeFilter === category.id 
                  ? "bg-primary text-primary-foreground shadow-elegant transform scale-105" 
                  : "hover:bg-primary/10 hover:border-primary hover:scale-105"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {category.label}
                {category.count > 0 && (
                  <Badge variant="secondary" className="text-xs px-2 py-0.5">
                    {category.count}
                  </Badge>
                )}
              </span>
              {activeFilter === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary-glow/20 to-primary/20 animate-pulse" />
              )}
            </Button>
          ))}
        </div>
      </div>

      {/* Price Range Filters */}
      <div>
        <h4 className="text-sm font-medium text-foreground/80 mb-3 uppercase tracking-wider">Price Range</h4>
        <div className="flex flex-wrap gap-3">
          {priceRanges.map((range) => (
            <Button
              key={range.id}
              variant={activePriceRange === range.id ? "luxury" : "outline"}
              size="sm"
              onClick={() => handlePriceFilter(range.id)}
              className={`transition-all duration-300 ${
                activePriceRange === range.id 
                  ? "bg-luxury text-luxury-foreground shadow-luxury transform scale-105" 
                  : "hover:bg-luxury/10 hover:border-luxury hover:scale-105"
              }`}
            >
              {range.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Active Filters Display */}
      {(activeFilter !== "all" || activePriceRange !== "all") && (
        <div className="mt-6 pt-6 border-t border-border/50">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Active filters:</span>
            {activeFilter !== "all" && (
              <Badge variant="outline" className="capitalize">
                {activeFilter} collection
              </Badge>
            )}
            {activePriceRange !== "all" && (
              <Badge variant="outline">
                {priceRanges.find(r => r.id === activePriceRange)?.label}
              </Badge>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setActiveFilter("all");
                setActivePriceRange("all");
                onFilterChange?.({ category: "all", priceRange: "all" });
              }}
              className="ml-2 text-xs hover:text-primary"
            >
              Clear all
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};