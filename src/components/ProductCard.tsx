import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  originalPrice?: string;
}

export const ProductCard = ({ name, price, image, originalPrice }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-card transition-all duration-500 hover:-translate-y-1">
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{name}</h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-primary">{price}</span>
          {originalPrice && (
            <span className="text-lg text-muted-foreground line-through">{originalPrice}</span>
          )}
        </div>
        <Button variant="luxury" className="w-full">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};