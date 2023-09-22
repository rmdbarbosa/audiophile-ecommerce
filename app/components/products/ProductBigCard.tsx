import Image from "next/image";
import React from "react";
import NewProduct from "../NewProduct";
import Button from "../Button";

export default function ProductBigCard() {
  return (
    <div className="flex flex-col justify-center items-center my-32 mt-44">
      <div className="w-[100%] flex justify-center items-center bg-[#f1f1f1] rounded-xl">
        <Image
          src={`/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg`}
          width={327}
          height={352}
          alt="product"
        />
      </div>
      <div className=" flex flex-col justify-center items-center gap-6 text-center mt-8">
        <NewProduct textColor="text-orange-600" />
        <h2 className="font-bold text-4xl">YX1 WIRELESS EARPHONES</h2>
        <p className="text-gray-400 normal-case">
          Tailor your listening experience with bespoke dynamic drivers from the
          new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even
          in noisy environments with its active noise cancellation feature.
        </p>
        <Button
          bgColor="bg-orange-400"
          hover="hover:bg-orange-300"
          link=""
          slug=""
          textColor="text-white"
        />
      </div>
    </div>
  );
}
