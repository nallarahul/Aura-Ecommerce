import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onShopNow: () => void;
}

const Hero = ({ onShopNow }: HeroProps) => {
  return (
    <section className="relative overflow-hidden gradient-hero border-b">
      <div className="container px-4 md:px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-scale-in">
              <Sparkles className="h-4 w-4" />
              New Arrivals 2024
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Discover the Art of
              <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Premium Tech
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Curated collection of artisan tech products that blend minimalist design with cutting-edge innovation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={onShopNow}
                className="gradient-primary text-white hover:opacity-90 transition-smooth group shadow-lg"
              >
                Shop Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-smooth hover:text-primary"
              >
                Explore Categories
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg relative">
              <img 
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop" 
                alt="Featured Product"
                className="w-full h-full object-cover hover:scale-105 transition-spring"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-black mb-2">Premium Headphones</h3>
                <p className="text-black/80">Starting at $299</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
