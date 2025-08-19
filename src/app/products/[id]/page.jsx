import { fetchProductById } from "@/data/products";
import { notFound } from "next/navigation";
import ProductDetailsWrapper from "./ProductDetailsWrapper";

async function ProductPage({ params }) {
  const { id } = await params;

  const product = await fetchProductById(String(id));
  console.log("Fetched Product:", product);

  if (!product) {
    notFound();
  }

  return (
    <div className="p-8 bg-white rounded-lg shadow-xl">
      <ProductDetailsWrapper product={product} />
    </div>
  );
}

export default ProductPage;
