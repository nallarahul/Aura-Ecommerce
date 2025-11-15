import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Quantum Wireless Earbuds",
    price: 249,
    category: "Audio",
    inStock: true,
    description: "Experience crystalline audio with adaptive noise cancellation and 32-hour battery life. Handcrafted titanium finish.",
    imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop"
  },
  {
    id: "2",
    name: "Aurora LED Desk Lamp",
    price: 189,
    category: "Lighting",
    inStock: true,
    description: "Architect-designed minimalist lamp with 16 million color options and circadian rhythm sync. Aluminum unibody.",
    imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop"
  },
  {
    id: "3",
    name: "Nebula Mechanical Keyboard",
    price: 329,
    category: "Desk",
    inStock: true,
    description: "Custom-milled aluminum chassis with hot-swappable switches and per-key RGB. Wireless with 6-month battery.",
    imageUrl: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&h=400&fit=crop"
  },
  {
    id: "4",
    name: "Horizon 4K Webcam",
    price: 159,
    category: "Tech",
    inStock: false,
    description: "Professional-grade 4K60 webcam with AI-powered framing and studio-quality audio. Perfect for content creators.",
    imageUrl: "https://images.unsplash.com/photo-1625019030820-e4ed970a6c95?w=400&h=400&fit=crop"
  },
  {
    id: "5",
    name: "Pulse Studio Headphones",
    price: 399,
    category: "Audio",
    inStock: true,
    description: "Planar magnetic drivers delivering reference-grade sound. Premium leather and carbon fiber construction.",
    imageUrl: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop"
  },
  {
    id: "6",
    name: "Prism Smart Display",
    price: 449,
    category: "Tech",
    inStock: true,
    description: "27-inch touchscreen display with ambient light sensor and wireless device mirroring. Perfect productivity companion.",
    imageUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop"
  },
  {
    id: "7",
    name: "Zenith Desk Mat",
    price: 79,
    category: "Desk",
    inStock: true,
    description: "Premium microfiber surface with anti-slip rubber base. Water-resistant and machine washable.",
    imageUrl: "https://images.unsplash.com/photo-1625225233840-695456021cde?w=400&h=400&fit=crop"
  },
  {
    id: "8",
    name: "Flux Cable Organizer",
    price: 45,
    category: "Desk",
    inStock: true,
    description: "Magnetic cable management system with aerospace-grade aluminum. Keeps your workspace pristine.",
    imageUrl: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?w=400&h=400&fit=crop"
  },
  {
    id: "9",
    name: "Solstice Ring Light",
    price: 129,
    category: "Lighting",
    inStock: false,
    description: "18-inch professional ring light with adjustable color temperature and remote control. Influencer's choice.",
    imageUrl: "https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?w=400&h=400&fit=crop"
  },
  {
    id: "10",
    name: "Atlas Wireless Charger",
    price: 89,
    category: "Tech",
    inStock: true,
    description: "Qi-certified 15W fast charging stand with adjustable viewing angles. Compatible with all devices.",
    imageUrl: "https://images.unsplash.com/photo-1591290619762-c588ca7e7e2c?w=400&h=400&fit=crop"
  },
  {
    id: "11",
    name: "Echo Smart Speaker",
    price: 179,
    category: "Audio",
    inStock: true,
    description: "360-degree audio with AI assistant integration. Handcrafted walnut and metal construction.",
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop"
  },
  {
    id: "12",
    name: "Vortex Cooling Pad",
    price: 65,
    category: "Desk",
    inStock: true,
    description: "Laptop cooling pad with whisper-quiet fans and ergonomic design. Extends device lifespan.",
    imageUrl: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=400&h=400&fit=crop"
  },
  {
    id: "13",
    name: "Lumina Smart Bulb Set",
    price: 119,
    category: "Lighting",
    inStock: true,
    description: "4-pack of color-changing smart bulbs with voice control and automated scheduling. 25,000 hour lifespan.",
    imageUrl: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=400&fit=crop"
  },
  {
    id: "14",
    name: "Apex USB-C Hub",
    price: 99,
    category: "Tech",
    inStock: true,
    description: "7-in-1 USB-C hub with 4K HDMI, SD card readers, and 100W power delivery. Premium aluminum body.",
    imageUrl: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop"
  },
  {
    id: "15",
    name: "Cipher Bluetooth Speaker",
    price: 149,
    category: "Audio",
    inStock: false,
    description: "Portable speaker with 360° sound and 20-hour battery. IPX7 waterproof rating for any adventure.",
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop"
  }
];

export const categories = ["Audio", "Lighting", "Desk", "Tech"];
export const priceRanges = [
  { label: "Under $100", min: 0, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "$200 - $300", min: 200, max: 300 },
  { label: "Over $300", min: 300, max: Infinity }
];
