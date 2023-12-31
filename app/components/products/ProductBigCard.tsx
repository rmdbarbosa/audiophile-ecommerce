import Image from "next/image";
import React from "react";
import NewProduct from "../NewProduct";
import Button from "../Button";

type ProductPreview = {
  name: string;
  isNew: boolean;
  description: string;
  slug: string;
  category: string;
  images: any;
};

export default function ProductBigCard({
  name,
  description,
  isNew,
  slug,
  category,
  images,
}: ProductPreview) {
  const imgs = Object(images);

  return (
    <div className="flex flex-col justify-center items-center my-32 mt-44 lg:flex-row lg:gap-24 ">
      <div className="w-[100%] flex justify-center items-center bg-[#f1f1f1] rounded-xl lg:flex-1">
        <picture>
          <source media="(min-width: 1024px)" srcSet={imgs.desktop.slice(1)} />
          <source media="(min-width: 640px)" srcSet={imgs.tablet.slice(1)} />
          <Image
            className="rounded-xl"
            src={imgs.mobile.slice(1)}
            sizes="100vw"
            width={0}
            height={0}
            style={{
              width: "100%",
              height: "auto",
            }}
            alt={name}
          />
        </picture>
      </div>
      <div className=" flex flex-col justify-center items-center gap-6 text-center mt-8 lg:flex-1 lg:text-left lg:items-start">
        {isNew ? <NewProduct textColor="text-orange-600" /> : null}
        <h2 className="font-bold text-4xl lg:max-w-[450px] lg:text-6xl">
          {name}
        </h2>
        <p className="text-gray-400 normal-case lg:text-lg lg:max-w-[500px]">
          {description}
        </p>
        <Button
          bgColor="bg-orange-400"
          hover="hover:bg-orange-300"
          link={slug}
          slug={category}
          textColor="text-white"
        />
      </div>
    </div>
  );
}
