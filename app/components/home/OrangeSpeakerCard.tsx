import React from "react";
import Button from "../Button";
import Image from "next/image";

export default function OrangeSpeakerCard() {
  return (
    <div className="flex relative flex-col text-center justify-center items-center gap-12 lg:gap-24 min-h-[600px] border mt-24 bg-[#D87D4A] rounded-xl lg:flex-row lg:items-end">
      <div>
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/assets/home/desktop/image-speaker-zx9.png"
          />
          <source
            media="(min-width: 640px)"
            srcSet="/assets/home/tablet/image-speaker-zx9.png"
          />
          <Image
            src="/assets/home/mobile/image-speaker-zx9.png"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto relative sm:max-w-[197px] sm:max-h-[237px] lg:max-w-[410px] lg:max-h-[493px] "
            alt="ZX9-SPEAKER"
          />
        </picture>
      </div>
      <div className="text-center flex flex-col justify-center items-center lg:text-left gap-6 lg:items-start lg:self-center">
        <h2 className="font-bold text-4xl text-white">
          ZX9 <br /> SPEAKER
        </h2>
        <p className="normal-case text-white opacity-80 text-sm max-w-[80%] lg:max-w-[20rem]">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button
          bgColor="bg-black"
          textColor="text-white"
          hover="hover:bg-gray-700"
          link="zx9-speaker"
          slug="speakers"
        />
      </div>
    </div>
  );
}
