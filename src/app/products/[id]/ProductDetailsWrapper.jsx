"use client";

import { useState, useContext, useEffect } from "react";
import ProductDetails from "@/components/ProductDetails";
import RecentlyViewed from "@/components/RecentlyViewed";
import { CartContext } from "@/context/CartContext";

function ProductDetailsWrapper({ product }) {
  const { addToCart } = useContext(CartContext);

  //   Fixed Bug 1: Default color = first variant
  const [selectedColor, setSelectedColor] = useState(
    product.variants[0]?.color || ""
  );
  const [selectedSize, setSelectedSize] = useState("");

  // Bug 2 Fixed: Sizes depend on selectedColor
  const availableSizesForColor =
    product.variants.find((variant) => variant.color === selectedColor)
      ?.sizes || [];

  useEffect(() => {
    setSelectedSize("");
  }, [selectedColor]);

  // Require both color & size before adding to cart
  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select both color and size.");
      return;
    }
    addToCart(product, selectedColor, selectedSize);
  };

  return (
    <>
      <ProductDetails
        product={product}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
        onColorSelect={setSelectedColor}
        onSizeSelect={setSelectedSize}
        onAddToCart={handleAddToCart}
        availableSizesForColor={availableSizesForColor}
      />
      <RecentlyViewed />
    </>
  );
}

export default ProductDetailsWrapper;
