"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const router = useRouter();

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <p className="text-gray-900 font-bold mb-4">${product.price}</p>
        <div className="flex gap-2">
          {/* View Product */}
          <button
            className="flex-1 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
            onClick={() => router.push(`/products/${product.id}`)}
          >
            View Product
          </button>

          {/* Add to Cart */}
          <button
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            onClick={() => addToCart(product, "Default", "One Size")}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
