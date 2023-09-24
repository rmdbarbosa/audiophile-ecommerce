import Image from "next/image";
import React from "react";

export default function CartModal() {
  return (
    <div className="fixed w-[100%] h-[100%] left-0 top-0 bg-gray-800 bg-opacity-70 z-40 flex justify-center">
      <div className="flex flex-col gap-6 bg-white absolute  top-[5.5rem]  sm:right-0 lg:right-[5.5rem] mx-6 mt-6 rounded-xl p-6 max-w-[377px]">
        <div className="flex justify-between">
          <span className="font-bold"> CART (3)</span>
          <span className="hover:cursor-pointer hover:text-orange-200 duration-200">
            Remove all
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Image
            className="rounded-xl"
            src="/assets/cart/image-zx9-speaker.jpg"
            width={64}
            height={64}
            alt="product"
          />
          <div className="flex flex-col">
            <span className="font-bold text-sm">XX99 MKII</span>
            <span className="text-gray-500 text-sm">$ 2,999</span>
          </div>
          <div className="bg-gray-100 h-[32px] min-w-[86px] flex items-center justify-around ml-auto">
            <span className="hover:cursor-pointer hover:text-orange-200 duration-200">
              -
            </span>
            <input
              className="bg-inherit text-center w-[30px]"
              type="number"
              defaultValue={1}
              disabled
            />
            <span className="hover:cursor-pointer hover:text-orange-200 duration-200">
              +
            </span>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 text-sm">TOTAL</span>
          <span className="font-bold">$ 5,396</span>
        </div>
        <div className="flex justify-center">
          <button className="bg-orange-300 w-full h-[2.5rem] text-white tracking-widest text-sm hover:cursor-pointer hover:bg-orange-200 duration-200">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
