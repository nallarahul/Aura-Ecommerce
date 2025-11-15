export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  description: string;
  imageUrl: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface FilterState {
  categories: string[];
  priceRange: string;
  inStockOnly: boolean;
}
