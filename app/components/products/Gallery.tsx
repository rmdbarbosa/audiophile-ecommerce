import { Gallery } from "@/app/types/productTypes";
import Image from "next/image";
import React from "react";

export default function Gallery({ first, second, third }: Gallery) {
  return (
    <div className="w-[100%] flex flex-col sm:flex-row gap-4 mb-24">
      <div className="flex flex-col gap-4">
        <picture>
          <source media="(min-width: 1024px)" srcSet={first.desktop.slice(1)} />
          <source media="(min-width: 640px)" srcSet={first.tablet.slice(1)} />
          <Image
            className="rounded-xl"
            src={first.mobile.slice(1)}
            sizes="100vw"
            width={0}
            height={0}
            style={{
              width: "100%",
              height: "auto",
            }}
            alt="gallery-product-imgs"
          />
        </picture>
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={second.desktop.slice(1)}
          />
          <source media="(min-width: 640px)" srcSet={second.tablet.slice(1)} />
          <Image
            className="rounded-xl"
            src={second.mobile.slice(1)}
            sizes="100vw"
            width={0}
            height={0}
            style={{
              width: "100%",
              height: "auto",
            }}
            alt="gallery-product-imgs"
          />
        </picture>
      </div>
      <picture>
        <source media="(min-width: 1024px)" srcSet={third.desktop.slice(1)} />
        <source media="(min-width: 640px)" srcSet={third.tablet.slice(1)} />
        <Image
          className="rounded-xl"
          src={third.mobile.slice(1)}
          sizes="100vw"
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "auto",
          }}
          alt="gallery-product-imgs"
        />
      </picture>
    </div>
  );
}
