import Footer from "@/app/components/Footer";
import ManWithHeadphone from "@/app/components/home/ManWithHeadphone";
import ProductCard from "@/app/components/menu/ProductCard";
import ProductBigCard from "@/app/components/products/ProductBigCard";
import React from "react";

const categories = ["headphones", "speakers", "earphones"];

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category,
  }));
}

export const dynamicParams = false; // true | false,

export default function page({ params }: { params: { slug: string } }) {
  return (
    <div className="px-6 uppercase lg:px-28">
      <div className="absolute top-[5.6rem] left-0 right-0 bg-black min-h-[100px] text-white justify-center items-center flex font-bold text-2xl">
        <h2>{params.slug}</h2>
      </div>
      <ProductBigCard />
      <div className="flex flex-wrap justify-center gap-3">
        <ProductCard />
      </div>
      <ManWithHeadphone />
      <Footer />
    </div>
  );
}
