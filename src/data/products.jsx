export const products = [
  {
    id: "1",
    name: "Classic T-Shirt",
    description:
      "A comfortable and stylish classic t-shirt made from 100% organic cotton.",
    price: 25.0,
    imageUrl: "https://placehold.co/600x400/E0E7FF/3B82F6?text=Classic+T-Shirt",
    variants: [
      { color: "Red", hex: "#EF4444", sizes: ["S", "M", "L"] },
      { color: "Blue", hex: "#3B82F6", sizes: ["M", "L", "XL"] },
      { color: "Green", hex: "#22C55E", sizes: ["S", "XL"] },
    ],
  },
  {
    id: "2",
    name: "Denim Jeans",
    description:
      "Durable and fashionable denim jeans, perfect for everyday wear.",
    price: 65.0,
    imageUrl: "https://placehold.co/600x400/D1FAE5/10B981?text=Denim+Jeans",
    variants: [
      { color: "Light Blue", hex: "#BFDBFE", sizes: ["28", "30", "32"] },
      { color: "Dark Blue", hex: "#1E40AF", sizes: ["30", "32", "34"] },
    ],
  },
  {
    id: "3",
    name: "Running Shoes",
    description:
      "Lightweight and breathable running shoes designed for optimal performance.",
    price: 90.0,
    imageUrl: "https://placehold.co/600x400/FFE4E6/EF4444?text=Running+Shoes",
    variants: [
      { color: "Black", hex: "#000000", sizes: ["7", "8", "9", "10"] },
      { color: "White", hex: "#b3a7a7ff", sizes: ["8", "9", "10", "11"] },
    ],
  },
  {
    id: "4",
    name: "Leather Wallet",
    description: "A sleek and compact leather wallet with multiple card slots.",
    price: 40.0,
    imageUrl: "https://placehold.co/600x400/FEE2E2/EF4444?text=Leather+Wallet",
    variants: [
      { color: "Brown", hex: "#8B5CF6", sizes: ["One Size"] },
      { color: "Black", hex: "#000000", sizes: ["One Size"] },
    ],
  },
];

export const fetchProductById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === String(id)); //bug 1 fixed..
      resolve(product);
    }, 500); // simulate network delay
  });
};
