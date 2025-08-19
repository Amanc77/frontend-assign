"use client";

import { useState, useContext, useEffect } from "react";
import ProductDetails from "@/components/ProductDetails";
import RecentlyViewed from "@/components/RecentlyViewed";
import { CartContext } from "@/context/CartContext";

function ProductDetailsWrapper({ product }) {
  const { addToCart } = useContext(CartContext);

  //  Fixed Bug 1: Default color as first variant.
  const [selectedColor, setSelectedColor] = useState(
    product.variants[0]?.color || ""
  );
  const [selectedSize, setSelectedSize] = useState("");

  // Bug 2 Fixed: Sizes depend on selectedColor.
  const availableSizesForColor =
    product.variants.find((variant) => variant.color === selectedColor)
      ?.sizes || [];

  // reset size when color changes.
  useEffect(() => {
    setSelectedSize("");
  }, [selectedColor]);

  // Saved recently viewed product in localstorage..
  useEffect(() => {
    if (!product) return;

    let storedProduct =
      JSON.parse(localStorage.getItem("recentlyViewed")) || [];

    // remove duplicate if already exists
    storedProduct = storedProduct.filter((p) => p.id !== product.id);

    // add current product at the top
    storedProduct.unshift(product);

    // keep only last 3
    storedProduct = storedProduct.slice(0, 3);
    console.log("stored product are...", storedProduct);

    localStorage.setItem("recentlyViewed", JSON.stringify(storedProduct));
  }, [product]);

  // Require both color & size before adding to cart
  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select both color and size.");
      return;
    }
    addToCart(product, selectedColor, selectedSize);
    // console.log(`${product.name} is added in Cart..`);
    alert(`${product.name}  ${selectedColor} Color is added in Cart..`);
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
