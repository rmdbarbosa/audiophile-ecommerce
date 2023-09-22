import React from "react";

export default function ManWithHeadphone() {
  return (
    <div className="flex flex-col  text-center lg:flex-row-reverse lg:items-center">
      <div className="bg-cover bg-center bg-[url(/assets/shared/mobile/image-best-gear.jpg)] sm:bg-[url(/assets/shared/tablet/image-best-gear.jpg)] lg:bg-[url(/assets/shared/desktop/image-best-gear.jpg)] lg:min-h-[588px] min-h-[300px]  flex-1  rounded-xl mt-20"></div>
      <div className="lg:flex lg:flex-col lg:justify-center  lg:max-h-[295px] flex-1">
        <h2 className="font-bold uppercase text-3xl lg:max-w-[300px] lg:text-left">
          Bringing you the <span className="text-orange-400">best</span> audio
          gear
        </h2>
        <p className="normal-case text-gray-600 text-sm mt-6 lg:text-left">
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
