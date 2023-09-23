import React from "react";
import Button from "../Button";
import Image from "next/image";
import { Other } from "../../types/productTypes";

export default function MayAlsoLike({ name, slug, image, link }: Other) {
  return (
    <div className="flex flex-col justify-center items-center gap-8 pb-16">
      <picture>
        <source media="(min-width: 1024px)" srcSet={image.desktop.slice(1)} />
        <source media="(min-width: 640px)" srcSet={image.tablet.slice(1)} />
        <Image
          className="rounded-xl"
          src={image.mobile.slice(1)}
          sizes="100vw"
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "auto",
          }}
          alt="product-name"
        />
      </picture>
      <h2 className="font-bold text-2xl">{name}</h2>
      <Button
        bgColor="bg-orange-400"
        hover="hover:bg-orange-300"
        link={link}
        slug={slug}
        textColor="text-white"
      />
    </div>
  );
}
