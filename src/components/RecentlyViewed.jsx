"use client";

// components/RecentlyViewed.js
import React, { useEffect, useState } from "react";
import Link from "next/link";

const RecentlyViewed = () => {
  const [recentlyViewedProducts, setRecentlyViewedProducts] = useState([]);

  useEffect(() => {
    // Load from localStorage.
    const storedProducts =
      JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    setRecentlyViewedProducts(storedProducts);
  }, []);

  if (recentlyViewedProducts.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white mb-6">Recently Viewed</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recentlyViewedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="block"
          >
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-transform transform hover:scale-105">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white truncate">
                  {product.name}
                </h3>

                <p className="text-pink-400 font-bold mt-1">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
