"use client";

import Image from "next/image";
import React from "react";
import { useCartContext } from "../context/cart-context";
import { ProductToCart } from "./products/AddRemoveInputButton";

export default function CartModal() {
  const {
    cartModal,
    cart,
    removeAll,
    getTotalCartAmount,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = useCartContext();

  // Create a ProductToCart object

  return (
    <div
      className={`${
        cartModal ? "flex" : "hidden"
      } fixed w-[100%] h-[100%] left-0 top-0 bg-gray-800 bg-opacity-70 z-40 justify-center overflow-y-scroll`}
    >
      <div className=" flex flex-col z-50 gap-6 bg-white absolute  top-[5.5rem]  sm:right-0 lg:right-[5.5rem] mx-6 mt-6 rounded-xl p-6 max-w-[377px]">
        {cart.length > 0 ? (
          <>
            <div className="flex justify-between">
              <span className="font-bold"> CART ({cart.length})</span>
              <span
                onClick={() => removeAll()}
                className="hover:cursor-pointer hover:text-orange-200 duration-200"
              >
                Remove all
              </span>
            </div>
            {cart.map((item: ProductToCart) => {
              return (
                <div key={item.id} className="flex items-center gap-6">
                  <Image
                    className="rounded-xl"
                    src={item.cartImg}
                    width={64}
                    height={64}
                    alt="product"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">{item.name}</span>
                    <span className="text-gray-500 text-sm">
                      $ {item.price}
                    </span>
                  </div>
                  <div className="bg-gray-100 h-[32px] min-w-[86px] flex items-center justify-around ml-auto">
                    <span
                      onClick={() => decreaseItemQuantity(item.id)}
                      className="hover:cursor-pointer hover:text-orange-200 duration-200"
                    >
                      -
                    </span>
                    <input
                      className="bg-inherit text-center w-[30px]"
                      type="number"
                      value={item.quantity}
                      disabled
                    />
                    <span
                      onClick={() => increaseItemQuantity(item.id)}
                      className="hover:cursor-pointer hover:text-orange-200 duration-200"
                    >
                      +
                    </span>
                  </div>
                </div>
              );
            })}

            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">TOTAL</span>
              <span className="font-bold">$ {getTotalCartAmount()}</span>
            </div>
            <div className="flex justify-center">
              <button className="bg-orange-300 w-full h-[2.5rem] text-white tracking-widest text-sm hover:cursor-pointer hover:bg-orange-200 duration-200">
                CHECKOUT
              </button>
            </div>
          </>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
}
