import { Card, CardContent } from "./ui/card";
import iphone from "../assets/newdeals/feauture-iphone-removebg-preview.png";
import appleWatch from "../assets/newdeals/applewatch-feature-removebg-preview.png";
import headphone from "../assets/newdeals/headphone-feature-removebg-preview.png";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export const NewDeals = () => {
  const data = [
    {
      img: headphone,
      heading: "Premium Headset, awoof deal!",
      text: "Don’t miss this steal of a deal!",
      price: "From $100.00"
    },
    {
      img: iphone,
      heading: "iPhone 15 Pro Max, Grab it now!",
      text: "Luxury redefined, at an unbeatable price!",
      price: "From $850.00"
    },
    {
      img: appleWatch,
      heading: "Apple Watch Ultra 2, Limited Offer!",
      text: " Track more, live smarter only for today!",
      price: "From $120.00"
    }
  ];
  return (
    <div className="">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 px-8 max-sm:hidden">
        {data.map((data, i) => (
          <motion.div transition={{ duration: 0.5 }} key={i}>
            <Card className=" border h-full hover:border-green-300 overflow-hidden rounded-2xl relative">
              <CardContent
                className={`flex h-full top-0 bg-gradient-to-r  ${
                  (i === 0 && `from-[#050c47a5]  to-[#60162e93]`) ||
                  (i === 1 && `from-[rgba(7,7,30,0.65)]  to-[#30051293]`) ||
                  (i === 2 && `from-[rgba(17,69,69,0.65)]  to-[#09080893]`)
                }`}
              >
                <div className="p-2 flex flex-col">
                  <p className=" text-white text-lg font-bold">
                    {data.heading}
                  </p>
                  <p className="dark:text-yellow-500 text-white mt-2">
                    {data.text}
                  </p>
                  <p className="mt-1 font-bold text-white hover:text-gray-400">
                    {data.price}
                  </p>
                  <button
                    type="submit"
                    className="w-[8rem] text-white flex mt-2 justify-center gap-2 items-center  shadow-xl text-lg bg-transparent backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-0   overflow-hidden border-[1px] border-white rounded-full group"
                  >
                    Buy Now!
                    <svg
                      className="w-6 h-6 justify-end group-hover:rotate-90 group-hover:bg-gray-50 bg-gray-300 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                      viewBox="0 0 16 19"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                        className="fill-gray-800 group-hover:fill-gray-800"
                      />
                    </svg>
                  </button>
                </div>
                <img src={data.img} className="w-[10rem] " />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <main className="hidden related-swiper  max-sm:block max-sm:px-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper h-full w-full"
        >
          {data.map((data, i) => (
            <SwiperSlide key={i}>
              <Card className=" border h-full hover:border-green-300 overflow-hidden rounded-2xl relative">
                <CardContent
                  className={`flex h-full top-0 bg-gradient-to-r  ${
                    (i === 0 && `from-[#050c47a5]  to-[#60162e93]`) ||
                    (i === 1 && `from-[rgba(7,7,30,0.65)]  to-[#30051293]`) ||
                    (i === 2 && `from-[rgba(17,69,69,0.65)]  to-[#09080893]`)
                  }`}
                >
                  <div className="p-2 flex flex-col">
                    <p className=" text-white text-lg font-bold">
                      {data.heading}
                    </p>
                    <p className="dark:text-yellow-500 text-white mt-2">
                      {data.text}
                    </p>
                    <p className="mt-1 font-bold text-white hover:text-gray-400">
                      {data.price}
                    </p>
                    <button
                      type="submit"
                      className="w-[8rem] text-white flex mt-2 justify-center gap-2 items-center  shadow-xl text-lg bg-transparent backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-0   overflow-hidden border-[1px] border-white rounded-full group"
                    >
                      Buy Now!
                      <svg
                        className="w-6 h-6 justify-end group-hover:rotate-90 group-hover:bg-gray-50 bg-gray-300 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                        viewBox="0 0 16 19"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                          className="fill-gray-800 group-hover:fill-gray-800"
                        />
                      </svg>
                    </button>
                  </div>
                  <img src={data.img} className="w-[10rem] " />
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  );
};
