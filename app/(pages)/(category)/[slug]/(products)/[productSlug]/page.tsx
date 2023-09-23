import React from "react";
import * as data from "../../../../../types/productTypes";
import json from "../../../../../products/data.json";
import Footer from "@/app/components/Footer";
import ManWithHeadphone from "@/app/components/home/ManWithHeadphone";
import ProductCard from "@/app/components/menu/ProductCard";
import MayAlsoLike from "@/app/components/products/MayAlsoLike";

export async function generateStaticParams() {
  const products = await json;

  return products.map((product) => ({
    productSlug: product.slug,
  }));
}

export const dynamicParams = false; // true | false,

export default function productsPage({
  params,
}: {
  params: { productSlug: string };
}) {
  return (
    <div className="text-center p-6">
      <h1 className="font-bold text-2xl mb-8">YOU MAY ALSO LIKE</h1>
      <MayAlsoLike />
      <ProductCard />
      <ManWithHeadphone />
      <Footer />
    </div>
  );
}
