import React from "react";
import json from "../../../../../products/data.json";
import Footer from "@/app/components/Footer";
import ManWithHeadphone from "@/app/components/home/ManWithHeadphone";
import ProductCard from "@/app/components/menu/ProductCard";
import MayAlsoLike from "@/app/components/products/MayAlsoLike";
import Gallery from "@/app/components/products/Gallery";

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
  const productFilteredBySlug = json
    .filter((product) => product.slug === params.productSlug)
    .map((product) => product);

  const otherProducts = productFilteredBySlug.map((innerArray) =>
    innerArray.others.map((other) => (
      <MayAlsoLike
        key={other.name}
        image={other.image}
        name={other.name}
        slug={other.category}
        link={other.slug}
      />
    ))
  );

  const gallery = productFilteredBySlug.map((innerArray) => innerArray.gallery);

  return (
    <div className="text-center p-6 lg:px-28 uppercase">
      <Gallery
        first={gallery[0].first}
        second={gallery[0].second}
        third={gallery[0].third}
      />
      <h1 className="font-bold text-2xl mb-8">YOU MAY ALSO LIKE</h1>
      <div className="sm:flex sm:gap-3 lg:gap-6">{otherProducts}</div>
      <ProductCard />
      <ManWithHeadphone />
      <Footer />
    </div>
  );
}
