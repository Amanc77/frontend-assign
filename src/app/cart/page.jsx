"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">Your cart is empty.</div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        {/* ✅ Clear All Button */}
        <button
          onClick={clearCart}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Clear Cart
        </button>
      </div>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 shadow rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">
                  Color: {item.color} | Size: {item.size}
                </p>
                <p className="text-blue-600 font-bold">${item.price}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="font-bold">x {item.quantity}</div>
              {/* ✅ Delete single product button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
