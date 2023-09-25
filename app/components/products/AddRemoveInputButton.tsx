"use client";

import { useCartContext } from "@/app/context/cart-context";
import React, { useState } from "react";

export type ProductToCart = {
  id: number;
  name: string;
  price: number;
  cartImg: string;
  quantity: number;
};

export default function AddRemoveInputButton({
  id,
  name,
  price,
  cartImg,
}: ProductToCart) {
  const [input, setInput] = useState(1);
  const { addToCart } = useCartContext();

  const productToAdd: ProductToCart = {
    id,
    name,
    price,
    cartImg,
    quantity: input,
  };

  const handleAddToCart = () => {
    addToCart(productToAdd);
    setInput(1);
  };

  return (
    <div className="flex gap-3 mb-20 sm:mb-0">
      <div className="bg-gray-100 w-[100px] min-h-[24px] text-sm flex items-center justify-center">
        <span
          onClick={() => input > 1 && setInput((prev) => (prev -= 1))}
          className="hover:cursor-pointer hover:text-orange-300 duration-200"
        >
          -
        </span>
        <input
          className="bg-inherit text-center w-[60px]"
          type="number"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
          disabled
        />
        <span
          onClick={() => setInput((prev) => (prev += 1))}
          className="hover:cursor-pointer hover:text-orange-300 duration-200"
        >
          +
        </span>
      </div>

      <button
        onClick={() => handleAddToCart()}
        className="bg-orange-400 min-w-[160px] min-h-[40px] text-white font-bold text-sm flex items-center justify-center tracking-widest hover:bg-orange-300"
      >
        ADD TO CART
      </button>
    </div>
  );
}
