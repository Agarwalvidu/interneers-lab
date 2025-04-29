// Define the ProductCategory type
export interface ProductCategory {
  id: string; // MongoDB ObjectId
  title: string;
  description?: string;
}

// Define the Product type
export interface Product {
  id: string;
  name: string;
  description?: string;
  category: ProductCategory;
  price: number;
  brand: string;
  quantity_in_warehouse?: number;
  created_at: string;
  updated_at: string;
}

// Dummy product category
const dummyCategory: ProductCategory = {
  id: "1",
  title: "Electronics",
  description: "Devices and gadgets",
};

// Dummy product list
export const products: Product[] = [
  {
    id: "101",
    name: "Smartphone",
    description: "Latest smartphone with OLED display",
    category: dummyCategory,
    price: 799.99,
    brand: "TechBrand",
    quantity_in_warehouse: 20,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "102",
    name: "Wireless Earbuds",
    description: "Noise-cancelling wireless earbuds",
    category: dummyCategory,
    price: 199.49,
    brand: "SoundBrand",
    quantity_in_warehouse: 50,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "103",
    name: "Laptop",
    description: "High-performance laptop with 16GB RAM and 1TB SSD",
    category: dummyCategory,
    price: 1299.99,
    brand: "PowerTech",
    quantity_in_warehouse: 10,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "104",
    name: "Smartwatch",
    description: "Fitness smartwatch with heart-rate monitor and GPS",
    category: dummyCategory,
    price: 299.99,
    brand: "FitTrack",
    quantity_in_warehouse: 30,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "105",
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with 360-degree sound",
    category: dummyCategory,
    price: 89.99,
    brand: "SoundWave",
    quantity_in_warehouse: 100,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "106",
    name: "Tablet",
    description: "10-inch tablet with high-resolution display",
    category: dummyCategory,
    price: 499.99,
    brand: "TabTech",
    quantity_in_warehouse: 25,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "107",
    name: "4K TV",
    description: "55-inch 4K Ultra HD smart TV",
    category: dummyCategory,
    price: 799.99,
    brand: "Visionary",
    quantity_in_warehouse: 15,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "108",
    name: "Gaming Console",
    description: "Next-gen gaming console with 1TB storage",
    category: dummyCategory,
    price: 499.99,
    brand: "GameMaster",
    quantity_in_warehouse: 20,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "109",
    name: "Digital Camera",
    description: "High-definition digital camera with 24MP sensor",
    category: dummyCategory,
    price: 649.99,
    brand: "PhotoPro",
    quantity_in_warehouse: 5,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "110",
    name: "VR Headset",
    description: "Virtual reality headset for immersive experiences",
    category: dummyCategory,
    price: 399.99,
    brand: "VirtualVision",
    quantity_in_warehouse: 40,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];
