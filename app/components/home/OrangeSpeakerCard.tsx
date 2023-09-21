import React from "react";
import Button from "../Button";
import Image from "next/image";

export default function OrangeSpeakerCard() {
  return (
    <div className="flex relative flex-col text-center justify-center items-center gap-12 min-h-[600px] border mt-24 bg-[#D87D4A] rounded-xl">
      <div className="border border-white opacity-20 absolute top-[-5rem] min-w-[150%] min-h-[75%] scale-50 rounded-[50%]"></div>
      <div className="border border-white opacity-20 absolute top-[-5rem] min-w-[150%] min-h-[75%] scale-125 rounded-[50%]"></div>
      <div className="border border-white opacity-20 absolute top-[-5rem] min-w-[150%] min-h-[75%] scale-75 rounded-[50%]"></div>

      <Image
        src={"/assets/home/mobile/image-speaker-zx9.png"}
        width="140"
        height="140"
        alt="ZX9-SPEAKER"
      />
      <h2 className="font-bold text-4xl text-white">
        ZX9 <br /> SPEAKER
      </h2>
      <p className="normal-case text-white opacity-80 text-sm max-w-[80%]">
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <Button
        bgColor="bg-black"
        textColor="text-white"
        hover="hover:bg-gray-700"
      />
    </div>
  );
}
