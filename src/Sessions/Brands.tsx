import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import apple from "../assets/brands/9fa92ac5a9498502d2707ced798d763fe7490ecc-1600x1026.webp";
import google from "../assets/brands/google.webp";
import hisense from "../assets/brands/Hisense.svg.png";
import infinix from "../assets/brands/infinix.png";
import lg from "../assets/brands/LG-Logo-2014-present.png";
import oppo from "../assets/brands/Oppo-Logo.wine.png";
import philips from "../assets/brands/philips.png";
import samsung from "../assets/brands/Samsung-Logo-Transparent-PNG.png";
import xiaomi from "../assets/brands/Xiaomi-Logo.png";

export const Brands = () => {
  const testimonials = [
    { image: <img src={apple} className="w-[5rem] max-sm:w-[3rem]" /> },
    { image: <img src={google} className="w-[5rem] max-sm:w-[3rem]" /> },
    { image: <img src={hisense} className="w-[5rem] max-sm:w-[3rem]" /> },
    { image: <img src={infinix} className="w-[5rem] max-sm:w-[3rem]" /> },
    { image: <img src={lg} className="w-[5rem] max-sm:w-[3rem]" /> },
    { image: <img src={oppo} className="w-[5rem] max-sm:w-[3rem]" /> },
    { image: <img src={philips} className="w-[5rem] max-sm:w-[3rem]" /> },
    { image: <img src={samsung} className="w-[5rem] max-sm:w-[3rem]" /> },
    { image: <img src={xiaomi} className="w-[5rem] max-sm:w-[3rem]" /> }
  ];

  return (
    <div className="">
      <div className="px-8 max-sm:px-4 max-sm:mt-[2rem]  mt-[2rem]">
        <h2 className="font-bold text-2xl  max-sm:text-lg link w-[18rem] hover:text-green-500 font-rajdhani">
          Brands We Distribute
        </h2>
      </div>

      <div className=" z-0 rounded-md  antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
};
