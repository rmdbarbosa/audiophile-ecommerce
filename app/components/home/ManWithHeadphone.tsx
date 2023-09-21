import React from "react";

export default function ManWithHeadphone() {
  return (
    <div className="flex flex-col gap-12 text-center">
      <div className="bg-cover bg-center bg-[url(/assets/shared/mobile/image-best-gear.jpg)] min-h-[300px] rounded-xl mt-20"></div>
      <div>
        <h2 className="font-bold uppercase text-3xl">
          Bringing you the <span className="text-orange-400">best</span> audio
          gear
        </h2>
        <p className="normal-case text-gray-600 text-sm mt-6 p-3">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
