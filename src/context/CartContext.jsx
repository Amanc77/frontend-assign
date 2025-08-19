"use client";

import React, { createContext, useState, useEffect } from "react";

// Create Context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // State for cart items
  const [cartItems, setCartItems] = useState([]);

  // Load from localStorage on first render
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) setCartItems(JSON.parse(storedCart));
  }, []);

  //  Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product to cart
  const addToCart = (product, selectedColor, selectedSize) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.productId === product.id &&
          item.color === selectedColor &&
          item.size === selectedSize
      );

      if (existingItemIndex >= 0) {
        // If already in cart then increase quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      }

      // Else add new item
      return [
        ...prevItems,
        {
          id: `${product.id}-${selectedColor}-${selectedSize}`, // unique id
          productId: product.id,
          name: product.name,
          price: product.price,
          color: selectedColor,
          size: selectedSize,
          quantity: 1,
          imageUrl: product.imageUrl,
        },
      ];
    });
  };

  // Remove single item
  const removeFromCart = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  // Clear all items
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
