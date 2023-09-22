import React from "react";
import * as data from "../../../../../types/productTypes";
import json from "../../../../../products/data.json";

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
    <div>
      <h1>{params.productSlug}</h1>
    </div>
  );
}
