import React from "react";

export default function AddRemoveInputButton() {
  return (
    <div className="flex gap-3 mb-20 sm:mb-0">
      <div className="bg-gray-100 w-[100px] min-h-[24px] text-sm flex items-center justify-center">
        <span>-</span>
        <input
          className="bg-inherit text-center w-[60px]"
          type="text"
          defaultValue="1"
        />
        <span>+</span>
      </div>
      <button className="bg-orange-400 min-w-[160px] min-h-[40px] text-white font-bold text-sm flex items-center justify-center tracking-widest">
        ADD TO CART
      </button>
    </div>
  );
}
