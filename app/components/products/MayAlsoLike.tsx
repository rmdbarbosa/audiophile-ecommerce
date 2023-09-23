import React from "react";
import Button from "../Button";
import Image from "next/image";

export default function MayAlsoLike() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 pb-16">
      <Image
        className="rounded-xl"
        src={"/assets/shared/mobile/image-xx99-mark-one-headphones.jpg"}
        sizes="100vw"
        width={0}
        height={0}
        style={{
          width: "100%",
          height: "auto",
        }}
        alt="product-name"
      />
      <h2 className="font-bold text-2xl">ZX9 SPEAKER</h2>
      <Button
        bgColor="bg-orange-400"
        hover="hover:bg-orange-300"
        link=""
        slug=""
        textColor="text-white"
      />
    </div>
  );
}
