"use client";
import React, { useEffect, useState } from "react";

import ProductCard from "./ProductCard";

export default function MobileMenu() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const bodyElement = document.body;

    menu
      ? (bodyElement.style.overflow = "hidden")
      : (bodyElement.style.overflow = "");
  }, [menu]);

  return (
    <div className="z-40 lg:hidden" onClick={() => setMenu(!menu)}>
      <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
        <g fill={menu ? "rgba(128,128,128, .3)" : "#FFF"} fillRule="evenodd">
          <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
        </g>
      </svg>
      <div
        className={
          menu
            ? "uppercase absolute overflow-y-scroll bottom-0 top-0 left-0 right-0 bg-gray-800 bg-opacity-70"
            : "hidden"
        }
      >
        <div className="absolute flex flex-col justify-center top-[5.7rem] left-0 right-0 bg-white  rounded-b-xl px-4 pt-3 pb-8 sm:flex-row sm:flex-wrap sm:gap-3 sm:px-8">
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
