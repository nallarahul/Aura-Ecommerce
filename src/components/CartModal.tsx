import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/types/product";
import { products } from "@/data/products";
import { Minus, Plus, Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

const CartModal = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartModalProps) => {
  const getProduct = (productId: string) =>
    products.find((p) => p.id === productId);

  const subtotal = cart.reduce((total, item) => {
    const product = getProduct(item.productId);
    return total + (product?.price || 0) * item.quantity;
  }, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
            {cart.length === 0
              ? "Your cart is empty"
              : `${cart.length} ${cart.length === 1 ? "item" : "items"} in cart`}
          </SheetDescription>
        </SheetHeader>

        {cart.length > 0 ? (
          <div className="flex flex-col h-full">
            <ScrollArea className="flex-1 pr-4 -mr-4">
              <div className="space-y-4 py-6">
                {cart.map((item) => {
                  const product = getProduct(item.productId);
                  if (!product) return null;

                  return (
                    <div key={item.productId} className="flex gap-4">
                      <div className="h-20 w-20 rounded-md overflow-hidden bg-muted shrink-0">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between gap-2">
                          <h4 className="font-medium text-sm line-clamp-2">
                            {product.name}
                          </h4>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 shrink-0"
                            onClick={() => onRemoveItem(item.productId)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() =>
                                onUpdateQuantity(
                                  item.productId,
                                  item.quantity - 1
                                )
                              }
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() =>
                                onUpdateQuantity(
                                  item.productId,
                                  item.quantity + 1
                                )
                              }
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <span className="font-semibold">
                            ${(product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>

            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="space-y-2">
                <Button size="lg" className="w-full">
                  Checkout
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={onClearCart}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-64">
            <p className="text-muted-foreground">
              Start adding products to your cart
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartModal;
