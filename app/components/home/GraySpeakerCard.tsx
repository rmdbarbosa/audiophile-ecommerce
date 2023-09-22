import React from "react";
import Button from "../Button";

export default function GraySpeakerCard() {
  return (
    <div className="pl-6 mt-6 flex flex-col justify-center items-start gap-6 bg-cover bg-center bg-[url(/assets/home/mobile/image-speaker-zx7.jpg)] sm:bg-[url(/assets/home/tablet/image-speaker-zx7.jpg)] lg:bg-[url(/assets/home/desktop/image-speaker-zx7.jpg)] min-h-[320px] rounded-xl">
      <h2 className="font-bold text-3xl">ZX7 SPEAKER</h2>
      <Button
        bgColor=""
        textColor="text-black"
        hover="hover:bg-black"
        border="border border-black"
        textBold="font-bold"
        textColorHover="hover:text-white"
      />
    </div>
  );
}
