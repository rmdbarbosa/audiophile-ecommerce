import Button from "./components/Button";
import Footer from "./components/Footer";
import NewProduct from "./components/NewProduct";
import EarphonesCard from "./components/home/EarphonesCard";
import GraySpeakerCard from "./components/home/GraySpeakerCard";
import ManWithHeadphone from "./components/home/ManWithHeadphone";
import OrangeSpeakerCard from "./components/home/OrangeSpeakerCard";
import ProductCard from "./components/menu/ProductCard";

export default function Home() {
  return (
    <>
      <div
        className={`flex absolute items-center text-center min-h-[600px] justify-center  top-0 left-0 right-0 bg-cover bg-center bg-[url('/assets/home/mobile/image-header.jpg')] sm:bg-[url('/assets/home/tablet/image-header.jpg')] lg:bg-[url('/assets/home/desktop/image-hero.jpg')] lg:justify-start`}
      >
        <div className="flex flex-col items-center justify-center gap-6 min-h-[290px] px-6 pt-24 lg:text-left lg:items-start lg:max-w-[500px] lg:pl-28">
          <NewProduct textColor="text-gray-300" />
          <h1 className="text-white font-bold uppercase text-4xl lg:text-6xl">
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
            link="xx99-mark-two-headphones"
            slug="headphones"
          />
        </div>
      </div>
      <div className="absolute top-[37rem] -z-50 left-0 right-0 py-6 px-6 uppercase lg:px-28">
        <div className="flex flex-wrap justify-center gap-3">
          <ProductCard />
        </div>
        <OrangeSpeakerCard />
        <GraySpeakerCard />
        <EarphonesCard />
        <ManWithHeadphone />
        <Footer />
      </div>
    </>
  );
}
