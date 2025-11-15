import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const Header = ({ cartCount, onCartClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            AURA
          </h1>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="#categories" className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
              Categories
            </a>
          </nav>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onCartClick}
            className="relative hover:bg-primary/10 transition-smooth group"
          >
            <ShoppingBag className="h-5 w-5 text-foreground group-hover:text-primary transition-smooth" />
            {cartCount > 0 && (
              <Badge 
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-accent text-accent-foreground animate-scale-in"
              >
                {cartCount}
              </Badge>
            )}
            <span className="sr-only">Shopping cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
