import React from "react";
import Button from "../Button";
import Image from "next/image";

export default function OrangeSpeakerCard() {
  return (
    <div className="flex relative flex-col text-center justify-center items-center gap-12 min-h-[600px] border mt-24 bg-[#D87D4A] rounded-xl">
      <div
        className="bg-cover bg-top w-full h-full absolute  bottom-[8rem]"
        style={{
          backgroundImage: "url('/assets/home/desktop/pattern-circles.svg')",
        }}
      ></div>

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
