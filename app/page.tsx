import Button from "./components/Button";
import EarphonesCard from "./components/home/EarphonesCard";
import GraySpeakerCard from "./components/home/GraySpeakerCard";
import OrangeSpeakerCard from "./components/home/OrangeSpeakerCard";
import ProductCard from "./components/menu/ProductCard";

export default function Home() {
  return (
    <>
      <div
        className={`flex absolute items-center text-center min-h-[600px]  top-0 left-0 right-0 bg-cover bg-center bg-[url('/assets/home/mobile/image-header.jpg')]`}
      >
        <div className="flex flex-col items-center justify-center gap-6 min-h-[290px] px-6 pt-24">
          <h2 className="text-gray-300 uppercase tracking-[.55em]">
            New product
          </h2>
          <h1 className="text-white font-bold uppercase text-4xl ">
            XX99 Mark II Headphones
          </h1>
          <p className="text-gray-300">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            bgColor="bg-orange-400"
            textColor="text-white"
            hover="hover:bg-orange-300"
          />
        </div>
      </div>
      <div className="absolute top-[37rem] left-0 right-0 py-6 px-6 uppercase ">
        <ProductCard />
        <OrangeSpeakerCard />
        <GraySpeakerCard />
        <EarphonesCard />
      </div>
    </>
  );
}
