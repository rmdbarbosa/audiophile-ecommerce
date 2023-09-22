import React from "react";
import Button from "../Button";

export default function EarphonesCard() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 pt-6">
      <div className="bg-cover bg-center bg-[url(/assets/home/mobile/image-earphones-yx1.jpg)] sm:bg-[url(/assets/home/tablet/image-earphones-yx1.jpg)] min-h-[200px] sm:min-h-[320px]  flex-1 rounded-xl"></div>
      <div className="flex flex-col bg-gray-100 min-h-[200px] sm:min-h-[320px] flex-1 justify-center items-start pl-6 mt-3 sm:mt-0 gap-6 rounded-xl">
        <h2 className="font-bold text-3xl">YX1 EARPHONES</h2>
        <Button
          bgColor=""
          textColor="text-black"
          hover="hover:bg-black"
          border="border border-black"
          textBold="font-bold"
          textColorHover="hover:text-white"
          link="yx1-earphones"
          slug="earphones"
        />
      </div>
    </div>
  );
}
