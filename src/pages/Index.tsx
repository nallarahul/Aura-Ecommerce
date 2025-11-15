import { useState, useMemo, useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryShowcase from "@/components/CategoryShowcase";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import QuickViewModal from "@/components/QuickViewModal";
import CartModal from "@/components/CartModal";
import { products } from "@/data/products";
import { priceRanges } from "@/data/products";
import { Product, FilterState } from "@/types/product";
import { useCart } from "@/hooks/useCart";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SlidersHorizontal, Search, X } from "lucide-react";

const Index = () => {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: "all",
    inStockOnly: false,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const productsRef = useRef<HTMLDivElement>(null);

  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartItemCount,
  } = useCart();

  // High-performance filtering with useMemo
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    // Price range filter
    if (filters.priceRange !== "all") {
      const range = priceRanges.find((r) => r.label === filters.priceRange);
      if (range) {
        filtered = filtered.filter(
          (product) => product.price >= range.min && product.price < range.max
        );
      }
    }

    // Stock filter
    if (filters.inStockOnly) {
      filtered = filtered.filter((product) => product.inStock);
    }

    return filtered;
  }, [filters, searchQuery]);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const activeFiltersCount = 
    filters.categories.length + 
    (filters.priceRange !== "all" ? 1 : 0) + 
    (filters.inStockOnly ? 1 : 0);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    if (value.trim()) {
      setShowSearchResults(true);
      productsRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setShowSearchResults(false);
    }
  };

  const handleCategoryClick = (category: string) => {
    setFilters({ ...filters, categories: [category] });
    setShowSearchResults(true);
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleShopNow = () => {
    setShowSearchResults(true);
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const clearSearch = () => {
    setSearchQuery("");
    setShowSearchResults(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header
        cartCount={getCartItemCount()}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Search Bar - Always visible */}
        <div className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b shadow-sm">
          <div className="container px-4 md:px-6 py-4">
            <div className="flex gap-3 max-w-4xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for products, brands and more..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10 pr-10 h-12 bg-card border-border/50 focus:border-primary transition-smooth text-base rounded-lg shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="gap-2 relative h-12 px-6 shadow-sm hover:shadow-hover transition-all"
                  >
                    <SlidersHorizontal className="h-5 w-5" />
                    Filters
                    {activeFiltersCount > 0 && (
                      <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full gradient-primary text-white text-xs flex items-center justify-center font-semibold animate-scale-in">
                        {activeFiltersCount}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[350px]">
                  <SheetHeader>
                    <SheetTitle>Filter Products</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterSidebar filters={filters} onFilterChange={setFilters} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

      <main className="flex-1">
        {/* Hero Section - Show when no search/filters active */}
        {!showSearchResults && (
          <>
            <Hero onShopNow={handleShopNow} />
            <CategoryShowcase onCategoryClick={handleCategoryClick} />
          </>
        )}

        {/* Product Grid */}
        {showSearchResults && (
          <div ref={productsRef} className="container px-4 md:px-6 py-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between animate-fade-in">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
                  </p>
                </div>
                {(searchQuery || activeFiltersCount > 0) && (
                  <Button
                    variant="ghost"
                    onClick={() => {
                      clearSearch();
                      setFilters({ categories: [], priceRange: "all", inStockOnly: false });
                    }}
                    className="text-primary hover:text-primary hover:bg-primary/10"
                  >
                    Clear All
                  </Button>
                )}
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product, index) => (
                    <div 
                      key={product.id}
                      style={{ animationDelay: `${index * 0.05}s` }}
                      className="animate-fade-in"
                    >
                      <ProductCard
                        product={product}
                        onQuickView={handleQuickView}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 rounded-xl border-2 border-dashed border-border/50 animate-fade-in bg-muted/20">
                  <Search className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-lg font-medium text-foreground mb-2">
                    No products found
                  </p>
                  <p className="text-muted-foreground text-center max-w-md">
                    Try adjusting your search or filters to find what you're looking for
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <QuickViewModal
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        onAddToCart={addToCart}
      />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
      />
    </div>
  );
};

export default Index;
