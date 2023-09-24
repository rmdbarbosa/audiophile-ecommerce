import { Includes } from "@/app/types/productTypes";
import React from "react";

export default function InTheBox({ item, quantity }: Includes) {
  return (
    <ul className="normal-case flex my-2 ">
      <li className="text-gray-500 text-sm flex gap-3 ">
        <span className="text-orange-400">{quantity}x</span> {item}
      </li>
    </ul>
  );
}
