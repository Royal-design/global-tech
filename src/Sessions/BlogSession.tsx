import { blogHomeData } from "@/data/Blogs";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules

import { BlogCard } from "@/components/BlogCard";
export const BlogSession = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 1
      }}
      className=" mt-[2rem]  max-sm:mt-4 max-sm:px-4 max-sm: px-8"
    >
      <h2 className="font-bold text-2xl max-sm:text-lg link w-[9rem] hover:text-green-500 font-rajdhani">
        Latest Blogs
      </h2>
      <main className="grid  max-md:grid-cols-3 mt-[2rem] gap-4 [@media(min-width:380px)_and_(max-width:700px)]:grid-cols-2 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
        {blogHomeData.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </main>
    </motion.section>
  );
};
