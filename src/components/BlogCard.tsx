import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { BlogItemType } from "@/data/Blogs";
import LazyLoad from "react-lazyload";

interface BlogType {
  blog: BlogItemType;
}

export const BlogCard = ({ blog }: BlogType) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, border: "1px solid green" }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 1
      }}
    >
      <Card className="w-full overflow-hidden h-full justify-between max-w-[300px] flex flex-col">
        <CardHeader className="p-0">
          <LazyLoad placeholder="GTech">
            <figure className="h-[12rem] max-sm:h-[7rem]">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </figure>
          </LazyLoad>
        </CardHeader>

        <CardContent className="max-sm:p-2">
          <h2 className="text-xl font-semibold max-sm:text-sm mb-2">
            {blog.title}
          </h2>
          <p className="text-sm max-sm:text-xs text-gray-600 mb-4">
            {blog.shortDescription}
          </p>
        </CardContent>

        <CardFooter className="flex p-2 gap-2 w-full h-full flex-col justify-between items-center text-sm text-gray-500">
          <div className="flex gap-4 w-full">
            <img
              src={blog.authorImage}
              alt={blog.author}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm max-sm:text-xs font-medium">
                {blog.author}
              </p>
              <p className="text-xs text-gray-500 max-sm:hidden">
                {blog.date} · {blog.category}
              </p>
              <p className="hidden text-xs text-gray-500 max-sm:block">
                {blog.date}
              </p>
              <p className="hidden text-xs text-gray-500 max-sm:block">
                {blog.category}
              </p>
            </div>
          </div>
          <Link to={`/blog/${blog.id.toString()}`} className="w-full mt-2">
            <Button className="w-full">Read More</Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
