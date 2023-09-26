"use client";

import { useCartContext } from "@/app/context/cart-context";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OrderModal() {
  const { orderModal, setOrderModal, grandTotal, cart, removeAll } =
    useCartContext();

  const handleBackToHome = () => {
    setOrderModal(false);
    removeAll([]);
  };

  return (
    <div
      className={` ${
        orderModal ? "flex" : "hidden"
      } fixed justify-center z-50 items-center w-[100%] h-[100%] left-0 top-0 bg-gray-800 bg-opacity-70`}
    >
      <div className="flex flex-col gap-6 p-4 bg-white sm:max-h-[90%] sm:w-[550px] rounded-xl">
        <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <circle fill="#D87D4A" cx="32" cy="32" r="32" />
            <path
              stroke="#FFF"
              stroke-width="4"
              d="m20.754 33.333 6.751 6.751 15.804-15.803"
            />
          </g>
        </svg>
        <h2 className="text-sm sm:text-2xl">
          THANK YOU <br /> FOR YOUR ORDER
        </h2>

        <p className="text-gray-600 text-sm">
          You will receive an email confirmation shortly
        </p>
        <div className="w-full sm:flex sm:flex-row rounded-xl">
          <div className="bg-gray-200 min-w-full sm:min-w-[250px] lg:flex-1 rounded-t-xl sm:rounded-t-none sm:rounded-tl-xl sm:rounded-l-xl p-3">
            <div className="flex justify-between items-center sm:justify-normal">
              <div>
                <Image
                  className="rounded-xl"
                  src={"/assets/cart/image-yx1-earphones.jpg"}
                  width={64}
                  height={64}
                  alt="product-name"
                />
              </div>
              <div className="ml-4">
                <h2 className="font-bold text-sm">{cart[0]?.name}</h2>
                <h2 className="text-sm text-gray-500">
                  {cart[0]?.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </h2>
              </div>
              <div className="ml-auto lg:pl-3 self-start">
                <span className="text-sm text-gray-400">
                  x{cart[0]?.quantity}
                </span>
              </div>
            </div>
            {cart.length > 1 ? (
              <>
                <div className="w-full border-[1px] border-gray-300 my-3">
                  {" "}
                </div>
                <p className="text-sm text-gray-500 text-center">
                  and {cart.length - 1} other item(s)
                </p>{" "}
              </>
            ) : null}
          </div>
          <div className="bg-black sm:w-full lg:flex-1 rounded-b-xl sm:rounded-b-none sm:rounded-br-xl sm:rounded-r-xl p-3 flex flex-col gap-2 justify-center items-start pl-8">
            <span className="text-gray-500 font-light text-sm">
              GRAND TOTAL
            </span>
            <span className="text-white font-bold">
              {grandTotal.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </div>
        </div>
        <Link href={"/"}>
          <button
            onClick={() => handleBackToHome()}
            className="bg-orange-500 h-[48px] w-full text-white hover:bg-orange-300"
          >
            BACK TO HOME
          </button>
        </Link>
      </div>
    </div>
  );
}
