import { FilterState } from "@/types/product";
import { categories, priceRanges } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RotateCcw } from "lucide-react";

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const FilterSidebar = ({ filters, onFilterChange }: FilterSidebarProps) => {
  const handleCategoryToggle = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    
    onFilterChange({ ...filters, categories: newCategories });
  };

  const handlePriceRangeChange = (range: string) => {
    onFilterChange({ ...filters, priceRange: range });
  };

  const handleStockToggle = () => {
    onFilterChange({ ...filters, inStockOnly: !filters.inStockOnly });
  };

  const handleReset = () => {
    onFilterChange({
      categories: [],
      priceRange: "all",
      inStockOnly: false,
    });
  };

  return (
    <aside className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleReset}
          className="h-8 px-2 text-xs"
        >
          <RotateCcw className="h-3 w-3 mr-1" />
          Reset
        </Button>
      </div>

      {/* Category Filter */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={filters.categories.includes(category)}
                onCheckedChange={() => handleCategoryToggle(category)}
              />
              <Label
                htmlFor={`category-${category}`}
                className="text-sm font-normal cursor-pointer"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Price Range</h3>
        <RadioGroup
          value={filters.priceRange}
          onValueChange={handlePriceRangeChange}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="price-all" />
            <Label htmlFor="price-all" className="text-sm font-normal cursor-pointer">
              All Prices
            </Label>
          </div>
          {priceRanges.map((range, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={range.label} id={`price-${index}`} />
              <Label
                htmlFor={`price-${index}`}
                className="text-sm font-normal cursor-pointer"
              >
                {range.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Stock Filter */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Availability</h3>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="in-stock"
            checked={filters.inStockOnly}
            onCheckedChange={handleStockToggle}
          />
          <Label htmlFor="in-stock" className="text-sm font-normal cursor-pointer">
            In Stock Only
          </Label>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
