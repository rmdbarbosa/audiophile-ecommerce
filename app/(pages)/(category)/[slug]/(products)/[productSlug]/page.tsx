import React from "react";
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
  const MayAlsoLikeFiltered = json
    .filter((product) => product.slug === params.productSlug)
    .map((product) => product.others.map((innerArray) => innerArray));

  const OtherProducts = MayAlsoLikeFiltered.map((innerArray) =>
    innerArray.map((other) => (
      <MayAlsoLike
        key={other.name}
        image={other.image}
        name={other.name}
        slug={other.category}
        link={other.slug}
      />
    ))
  );

  return (
    <div className="text-center p-6">
      <h1 className="font-bold text-2xl mb-8">YOU MAY ALSO LIKE</h1>
      {OtherProducts}
      <ProductCard />
      <ManWithHeadphone />
      <Footer />
    </div>
  );
}
