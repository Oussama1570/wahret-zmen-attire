import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ProductCard = ({ id, name, price, image, originalPrice }) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="group overflow-hidden border-border hover:shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
      onClick={() => navigate(`/product/${id}`)}
    >
      <div className="overflow-hidden relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{name}</h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-primary">{price}</span>
          {originalPrice && (
            <span className="text-lg text-muted-foreground line-through">{originalPrice}</span>
          )}
        </div>
        <Button 
          variant="luxury" 
          className="w-full transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden group"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/product/${id}`);
          }}
        >
          <span className="relative z-10">View Details</span>
          <span className="absolute inset-0 bg-luxury-foreground opacity-0 group-hover:animate-ripple rounded-md"></span>
        </Button>
      </CardContent>
    </Card>
  );
};