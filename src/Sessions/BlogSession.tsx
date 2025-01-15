import { Button } from "@/components/ui/button";
import { blogHomeData } from "@/data/Blogs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
export const BlogSession = () => {
  return (
    <section className=" mt-4 px-8">
      <h2 className="font-bold text-2xl max-sm:text-lg link w-[9rem] hover:text-green-500 font-rajdhani">
        Latest Blogs
      </h2>
      <main className="grid grid-cols-4 max-md:grid-cols-3 mt-[2rem] gap-4 max-sm:hidden">
        {blogHomeData.map((blog) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, border: "1px solid green" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1
            }}
            key={blog.id}
            className="bg-background-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Card className="w-full justify-between max-w-[300px] h-full flex flex-col">
              <CardHeader className="p-0">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-40 object-cover"
                />
              </CardHeader>

              <CardContent className="p-4 ">
                <h2 className="text-xl font-semibold  mb-2">{blog.title}</h2>
                <p className="text-sm text-gray-600 mb-4">
                  {blog.shortDescription}
                </p>
              </CardContent>

              <CardFooter className="flex gap-2 w-full flex-col justify-between items-center text-sm text-gray-500">
                <div className="flex gap-4 w-full">
                  <img
                    src={blog.authorImage}
                    alt={blog.author}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">{blog.author}</p>
                    <p className="text-xs text-gray-500">
                      {blog.date} · {blog.category}
                    </p>
                  </div>
                </div>
                <Link to={`blog/${blog.id.toString()}`} className="w-full mt-2">
                  <Button className="w-full">Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </main>
      <main className="hidden related-swiper w-full h-full max-sm:block">
        <Swiper
          slidesPerView={1.3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper h-full w-full"
        >
          {blogHomeData.map((blog, i) => (
            <SwiperSlide key={i}>
              <Card className="h-[26rem] flex flex-col justify-between">
                <CardHeader className="p-0">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-40 object-cover"
                  />
                </CardHeader>

                <CardContent className="p-4 ">
                  <h2 className="font-semibold  mb-2">{blog.title}</h2>
                  <p className="text-sm text-gray-600 mb-4">
                    {blog.shortDescription}
                  </p>
                </CardContent>

                <CardFooter className="flex w-full gap-2 flex-col justify-between items-center text-sm text-gray-500">
                  <div className="flex gap-4 w-full">
                    <img
                      src={blog.authorImage}
                      alt={blog.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium">{blog.author}</p>
                      <p className="text-xs text-gray-500">
                        {blog.date} · {blog.category}
                      </p>
                    </div>
                  </div>

                  <Link to={`blog/${blog.id.toString()}`} className="w-full">
                    <Button className="w-full">Read More</Button>
                  </Link>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </section>
  );
};
