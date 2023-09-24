"use client";

import React, { useState } from "react";

export default function AddRemoveInputButton() {
  const [quantity, setQuantity] = useState(0);
  const [input, setInput] = useState(1);

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
        onClick={() => setQuantity((prev) => prev + input)}
        className="bg-orange-400 min-w-[160px] min-h-[40px] text-white font-bold text-sm flex items-center justify-center tracking-widest hover:bg-orange-300"
      >
        ADD TO CART
      </button>
    </div>
  );
}
