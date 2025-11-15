import { Button } from "@/components/ui/button";
import { categories } from "@/data/products";

interface CategoryShowcaseProps {
  onCategoryClick: (category: string) => void;
}

const categoryImages: Record<string, string> = {
  "Audio": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
  "Lighting": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=300&fit=crop",
  "Desk": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
  "Storage": "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop",
  "Display": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
  "Accessories": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
};

const CategoryShowcase = ({ onCategoryClick }: CategoryShowcaseProps) => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Shop by Category</h2>
          <p className="text-muted-foreground text-lg">Explore our curated collections</p>
        </div>
        
        <div className="flex justify-center">
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 ">
    {categories.map((category, index) => (
      <button
        key={category}
        onClick={() => onCategoryClick(category)}
        className="group relative overflow-hidden rounded-xl bg-card border hover:border-primary/50 transition-all duration-300 hover:shadow-hover animate-scale-in"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="aspect-square relative overflow-hidden">
          <img
            src={categoryImages[category]}
            alt={category}
            className="w-full h-full object-cover group-hover:scale-110 transition-spring"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-end justify-center p-4">
            <span className="text-white font-semibold text-sm md:text-base">
              {category}
            </span>
          </div>
        </div>
      </button>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default CategoryShowcase;
