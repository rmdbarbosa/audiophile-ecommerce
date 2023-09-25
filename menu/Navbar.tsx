import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import Link from "next/link";
import CartNavbar from "./CartNavbar";

export default function Navbar() {
  return (
    <div className="bg-black min-h-[90px]  flex items-center justify-between px-6 lg:px-28">
      <MobileMenu />
      <div className="z-50 relative">
        <Link href="/">
          <h1 className="text-white font-extrabold text-2xl hover:text-orange-300 duration-200">
            αudiophile
          </h1>
        </Link>
      </div>
      <div className="absolute border-gray-200 border opacity-20 z-30 left-0 right-0 top-[5.5rem] sm:mx-6 lg:mx-28"></div>
      <DesktopMenu />
      <CartNavbar />
    </div>
  );
}
