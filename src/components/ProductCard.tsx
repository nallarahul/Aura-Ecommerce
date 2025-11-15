import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

const ProductCard = ({ product, onQuickView }: ProductCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 border hover:border-primary/30 hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-muted/50 relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-spring"
          loading="lazy"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center">
            <span className="text-sm font-semibold text-destructive px-4 py-2 bg-card rounded-full border-2 border-destructive/20">
              Out of Stock
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="px-3 py-1 rounded-full text-xs font-semibold gradient-primary text-white shadow-lg">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-5 space-y-3">
        <div>
          <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-smooth">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ${product.price}
            </span>
          </div>
          <Button
            onClick={() => onQuickView(product)}
            size="sm"
            className="gradient-primary text-white hover:opacity-90 transition-smooth group/btn shadow-md"
            disabled={!product.inStock}
          >
            View
            <Eye className="h-4 w-4 group-hover/btn:scale-110 transition-spring" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
