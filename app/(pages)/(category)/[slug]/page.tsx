import Footer from "@/app/components/Footer";
import ManWithHeadphone from "@/app/components/home/ManWithHeadphone";
import ProductCard from "@/app/components/menu/ProductCard";
import ProductBigCard from "@/app/components/products/ProductBigCard";
import React from "react";
import data from "../../../products/data.json";
import "../../../../app/globals.css";

const categories = ["headphones", "speakers", "earphones"];

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category,
  }));
}

export const dynamicParams = false; // true | false,

export default function categoryPage({ params }: { params: { slug: string } }) {
  const filteredProps = data
    .filter((product) => product.category.includes(params.slug))
    .map((product) => (
      <ProductBigCard
        key={product.id}
        name={product.name}
        description={product.description}
        isNew={product.new}
        slug={product.slug}
        category={product.category}
        images={product.categoryImage}
      />
    ));

  return (
    <div className="px-6 uppercase lg:px-28">
      <div className="absolute top-[5.6rem] left-0 right-0 bg-black min-h-[100px] text-white justify-center items-center flex font-bold text-2xl">
        <h2>{params.slug}</h2>
      </div>
      <div id="reverse__even">{filteredProps}</div>
      <div className="flex flex-wrap justify-center gap-3">
        <ProductCard />
      </div>
      <ManWithHeadphone />
      <Footer />
    </div>
  );
}
