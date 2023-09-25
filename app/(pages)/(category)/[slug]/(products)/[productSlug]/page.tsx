import React from "react";
import json from "../../../../../products/data.json";
import Footer from "@/app/components/Footer";
import ManWithHeadphone from "@/app/components/home/ManWithHeadphone";
import ProductCard from "@/app/components/menu/ProductCard";
import MayAlsoLike from "@/app/components/products/MayAlsoLike";
import Gallery from "@/app/components/products/Gallery";
import InTheBox from "@/app/components/products/InTheBox";
import MainProductPage from "@/app/components/products/MainProductPage";
import GoBack from "@/app/components/products/GoBack";

export function generateStaticParams() {
  const products = json;

  return products.map((product) => ({
    productSlug: product.slug,
  }));
}

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

  const features = productFilteredBySlug[0].features;

  const inTheBox = productFilteredBySlug.map((product) =>
    product.includes.map((item) => {
      return (
        <InTheBox key={item.item} item={item.item} quantity={item.quantity} />
      );
    })
  );

  return (
    <div className="text-center p-6 lg:px-36 uppercase">
      <GoBack />
      <MainProductPage
        description={productFilteredBySlug[0].description}
        id={productFilteredBySlug[0].id}
        image={productFilteredBySlug[0].image}
        isNew={productFilteredBySlug[0].new}
        name={productFilteredBySlug[0].name}
        price={productFilteredBySlug[0].price}
        cartImg={productFilteredBySlug[0].cartImg}
      />
      <div className="lg:flex lg:my-28 lg:gap-44">
        <div className="flex flex-col gap-6 items-start text-left lg:flex-1 lg:max-w-[635px]">
          <h2 className="font-bold text-lg sm:text-3xl">FEATURES</h2>
          <p className="whitespace-pre-line  normal-case text-gray-500 text-sm">
            {features}
          </p>
        </div>
        <div className="my-28 sm:flex sm:gap-60 lg:flex-col lg:gap-0 lg:my-0">
          <h2 className="font-bold text-lg self-start flex mb-6 sm:text-3xl">
            IN THE BOX
          </h2>
          <div>{inTheBox}</div>
        </div>
      </div>
      <Gallery
        first={gallery[0].first}
        second={gallery[0].second}
        third={gallery[0].third}
      />
      <h1 className="font-bold text-2xl mb-8">YOU MAY ALSO LIKE</h1>
      <div className="sm:flex sm:gap-3 lg:gap-6">{otherProducts}</div>
      <div className="flex flex-wrap justify-center gap-3">
        <ProductCard />
      </div>
      <ManWithHeadphone />
      <Footer />
    </div>
  );
}
