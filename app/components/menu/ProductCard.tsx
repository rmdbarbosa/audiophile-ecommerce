import Image from "next/image";
import React from "react";

const products = [
  {
    category: "headphones",
    img: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
  },
  {
    category: "speakers",
    img: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
  },
  {
    category: "earphones",
    img: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
  },
];

export default function ProductCard() {
  return (
    <>
      {products.map((product) => {
        return (
          <div
            key={product.category}
            className="flex flex-col items-center justify-center relative mt-8 bg-gray-100 min-w-full min-h-[10rem] mt-16 rounded-xl"
          >
            <div className="absolute top-[-3rem]">
              <Image
                src={product.img}
                width={140}
                height={140}
                alt={product.category}
              />
            </div>
            <div>
              <h2 className="font-bold">{product.category}</h2>
            </div>
            <div className="flex justify-center items-center absolute bottom-0 pb-6 font-bold text-gray-500 text-sm">
              SHOP
              <svg
                className="absolute right-[-1rem]"
                width="8"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="#D87D4A"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </>
  );
}
