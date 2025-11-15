import { Product } from "@/types/product";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (productId: string) => void;
}

const QuickViewModal = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
}: QuickViewModalProps) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
          <DialogDescription>
            <Badge variant="secondary" className="mt-2">
              {product.category}
            </Badge>
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold">${product.price}</span>
                {product.inStock ? (
                  <Badge variant="default">In Stock</Badge>
                ) : (
                  <Badge variant="secondary">Out of Stock</Badge>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <Button
              size="lg"
              className="w-full gap-2"
              onClick={() => {
                onAddToCart(product.id);
                onClose();
              }}
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-5 w-5" />
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;
