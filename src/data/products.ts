import jebbaNavy from "@/assets/jebba-navy.jpg";
import jebbaburgundy from "@/assets/jebba-burgundy.jpg";
import jebbaCream from "@/assets/jebba-cream.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  description: string;
  details: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Royal Navy Jebba",
    price: 299,
    originalPrice: 399,
    image: jebbaNavy,
    category: "premium",
    rating: 5,
    description: "A masterpiece of traditional Moroccan craftsmanship, the Royal Navy Jebba embodies elegance and sophistication. Handwoven with premium fabrics and adorned with intricate embroidery.",
    details: [
      "Handcrafted by master artisans",
      "Premium quality fabric",
      "Traditional Moroccan embroidery",
      "Available in multiple sizes",
      "Dry clean only"
    ]
  },
  {
    id: "2",
    name: "Classic Burgundy Jebba",
    price: 349,
    image: jebbaburgundy,
    category: "premium",
    rating: 4.5,
    description: "The Classic Burgundy Jebba showcases the timeless beauty of Moroccan heritage. Rich burgundy tones combined with gold accents create an unforgettable statement piece.",
    details: [
      "Rich burgundy color",
      "Gold thread embroidery",
      "Comfortable fit",
      "Traditional craftsmanship",
      "Made to last generations"
    ]
  },
  {
    id: "3",
    name: "Elegant Cream Jebba",
    price: 279,
    image: jebbaCream,
    category: "premium",
    rating: 4,
    description: "Experience understated luxury with the Elegant Cream Jebba. Perfect for special occasions, this piece combines modern sensibilities with traditional design.",
    details: [
      "Light cream color",
      "Subtle embellishments",
      "Versatile styling",
      "Premium cotton blend",
      "Easy care instructions"
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string, excludeId?: string): Product[] => {
  return products.filter(p => p.category === category && p.id !== excludeId);
};
