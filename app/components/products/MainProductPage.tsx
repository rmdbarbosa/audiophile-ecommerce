import React from "react";
import AddRemoveInputButton from "./AddRemoveInputButton";
import NewProduct from "../NewProduct";
import Image from "next/image";
import { MainProduct } from "@/app/types/productTypes";

export default function MainProductPage({
  id,
  name,
  image,
  isNew,
  price,
  description,
  cartImg,
}: MainProduct) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:gap-12 sm:mb-24 lg:gap-28">
      <picture className="lg:min-w-[50%]">
        <source media="(min-width: 1024px)" srcSet={image.desktop.slice(1)} />
        <source media="(min-width: 640px)" srcSet={image.tablet.slice(1)} />
        <Image
          className="rounded-xl sm:max-w-full lg:max-w-full"
          src={image.mobile.slice(1)}
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
      <div className="flex flex-col gap-6 text-left sm:justify-center sm:min-w-[50%]">
        {isNew ? <NewProduct textColor="text-orange-600" /> : null}
        <h2 className="font-bold text-3xl lg:max-w-[350px] lg:text-3xl sm:max-w-[339px]">
          {name}
        </h2>
        <p className="normal-case text-sm text-gray-500 sm:max-w-[330px] lg:max-w-[50%]">
          {description}
        </p>
        <span className="font-bold text-lg">$ {price}</span>
        <AddRemoveInputButton
          id={id}
          name={name}
          cartImg={cartImg}
          price={price}
          quantity={1}
        />
      </div>
    </div>
  );
}
