import { SwiperSlide, Swiper } from "swiper/react";
import banner01 from "../assets/banner/banner01.jpg";
import banner02 from "../assets/banner/banner02.jpg";
import banner04 from "../assets/banner/banner04.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const BannerSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const banner = {
    initial: { x: -10 },
    animate: { x: 0, transition: { duration: 0.5 } }
  };
  const title = {
    initial: { x: 10, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  };
  const heading1 = {
    initial: { y: 10, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 }
    }
  };

  const data = [
    {
      img: banner01,
      heading: "Pre-Order the",
      headingSpan: "Latest Releases!",
      text: "Be the first to own the newest models. Secure yours today!"
    },
    {
      img: banner02,
      heading: "Discover the Best",
      headingSpan: "in Technology!",
      text: "From smartphones to accessories, upgrade your lifestyle with top-notch gadgets."
    },
    {
      img: banner04,
      heading: "Innovate Your",
      headingSpan: "World!",
      text: "Shop the latest smartphones, powerful computers, and must-have accessories."
    }
  ];
  return (
    <div className="swiper-cont">
      <Swiper
        autoplay={{ delay: 4000 }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        initialSlide={1}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}">0${index + 1}</span>`;
          }
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper font-rajdhani h-[29rem] banner-swiper text-white"
      >
        {data.map((data, i) => (
          <SwiperSlide key={i}>
            <AnimatePresence>
              <motion.div
                key={activeIndex === i ? "active" : "inactive"}
                animate="animate"
                initial="initial"
                exit="exit"
                variants={banner}
                className="relative w-full h-full"
              >
                <img
                  src={data.img}
                  alt="banner"
                  className={`w-full h-full object-cover ${
                    i === 2 && `object-top`
                  }`}
                />
                <div className="bg-background-banner absolute top-0 left-0 w-full h-full">
                  <div className="flex flex-col justify-center font-rajdhani h-full w-[30rem] px-8 gap-4">
                    <motion.h2 variants={title} className="text-5xl font-bold ">
                      {data.heading}{" "}
                      <p className="text-green-500">{data.headingSpan}</p>
                    </motion.h2>
                    <motion.p variants={heading1} className="text-xl">
                      {data.text}
                    </motion.p>
                    <div className="">
                      <div className="relative group">
                        <Button className="relative h-auto inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                          <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                            <div
                              className="relative z-10 flex items-center space-x-2"
                              onClick={() => {
                                navigate("/product");
                                window.scrollTo({ top: 0 });
                              }}
                            >
                              <span className="transition-all duration-500 group-hover:translate-x-1">
                                Shop Now
                              </span>
                              <svg
                                className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                                data-slot="icon"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  clipRule="evenodd"
                                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                  fillRule="evenodd"
                                />
                              </svg>
                            </div>
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};
