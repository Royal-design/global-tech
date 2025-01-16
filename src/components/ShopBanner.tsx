import shopBanner from "../assets/banner/banner03.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
export const ShopBanner = () => {
  const data = [
    {
      title: "Your Gateway to Cutting-Edge Innovation!",
      body: "Explore the latest in technology, from AI-powered devices to futuristic solutions that transform your world."
    },
    {
      title: "Stay Connected, Stay Ahead!",
      body: "Find your perfect smartphone with unbeatable deals and the latest features."
    },
    {
      title: "Cool Gadgets for a Smarter Life!",
      body: "From smartwatches to wireless wonders, upgrade your lifestyle with must-have gadgets."
    }
  ];
  return (
    <div>
      {/* <div className="hidden max-sm:block">
        <figure className=" relative h-[10rem] w-full ">
          <img
            src={shopBanner}
            alt="shop-banner"
            className="absolute  h-full w-full  object-cover"
          />
        </figure>
      </div> */}
      <div className="w-full h-[26rem] bg-gray-400 shop-container max-sm:hidden">
        <Swiper
          autoplay={{ delay: 4000 }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          modules={[Pagination, Autoplay]}
          className="shop-swiper  h-full w-full"
        >
          {data.map((data, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-between w-full h-full">
                <div className="banner-content pt-2 px-6 font-rajdhani dark:bg-[#211801] bg-[#fff6ed] max-md:w-[60%] w-[40%]">
                  <p className="font-bold text-3xl mt-8">{data.title}</p>
                  <p className="text-lg w-[90%] mt-2">{data.body}</p>
                </div>
                <figure className="flex-1 relative h-full w-full ">
                  <img
                    src={shopBanner}
                    alt="shop-banner"
                    className="absolute  h-full w-full  object-cover"
                  />
                </figure>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
      <div className="w-full h-[26rem] bg-gray-400 shop-container hidden max-sm:block">
        <Swiper
          autoplay={{ delay: 4000 }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          modules={[Pagination, Autoplay]}
          className="shop-swiper  h-full w-full"
        >
          {data.map((data, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col w-full h-full">
                <figure className="  h-full w-full ">
                  <img
                    src={shopBanner}
                    alt="shop-banner"
                    className="h-full w-full  object-cover"
                  />
                </figure>
                <div className="banner-content  px-6 font-rajdhani dark:bg-[#211801] bg-[#fff6ed]  w-full h-full">
                  <p className="font-bold text-lg  mt-8">{data.title}</p>
                  <p className="text-base  mt-2">{data.body}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};
