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
      heading: "Premium Headset, grap the awoof deal now!",
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
    <div className="my-[2rem]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 px-8  max-sm:hidden">
        {data.map((data, i) => (
          <motion.div transition={{ duration: 0.5 }} key={i}>
            <Card className=" border h-full hover:border-green-300 overflow-hidden rounded-2xl relative">
              <CardContent
                className={`flex max-lg:h-full p-0 top-0 bg-gradient-to-r  ${
                  (i === 0 && `from-[#050c47a5]  to-[#60162e93]`) ||
                  (i === 1 && `from-[rgba(7,7,30,0.65)]  to-[#30051293]`) ||
                  (i === 2 && `from-[rgba(17,69,69,0.65)]  to-[#09080893]`)
                }`}
              >
                <div className="p-2 flex flex-col">
                  <p className=" text-white text-lg max-lg:text-base font-bold">
                    {data.heading}
                  </p>
                  <p className="dark:text-yellow-500 text-white mt-2">
                    {data.text}
                  </p>
                  <p className="mt-1 font-bold text-white hover:text-gray-400">
                    {data.price}
                  </p>
                </div>
                <figure className="h-full w-[15rem]">
                  <img
                    src={data.img}
                    className="w-full h-full object-contain "
                  />
                </figure>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <main className="hidden related-swiper  max-sm:block max-sm:px-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper h-full w-full"
        >
          {data.map((data, i) => (
            <SwiperSlide key={i}>
              <Card className=" border h-[10rem] hover:border-green-300 overflow-hidden rounded-2xl relative">
                <CardContent
                  className={`flex h-full p-0 w-full top-0 bg-gradient-to-r  ${
                    (i === 0 && `from-[#050c47a5]  to-[#60162e93]`) ||
                    (i === 1 && `from-[rgba(7,7,30,0.65)]  to-[#30051293]`) ||
                    (i === 2 && `from-[rgba(17,69,69,0.65)]  to-[#09080893]`)
                  }`}
                >
                  <div className="p-2 flex flex-col w-full h-full">
                    <p className=" text-white font-bold">{data.heading}</p>
                    <p className="dark:text-yellow-500 text-white mt-2">
                      {data.text}
                    </p>
                    <p className="mt-1 font-bold text-white hover:text-gray-400">
                      {data.price}
                    </p>
                  </div>
                  <figure className="w-[10rem] h-full ">
                    <img
                      src={data.img}
                      className="w-full h-full object-contain  "
                    />
                  </figure>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  );
};
