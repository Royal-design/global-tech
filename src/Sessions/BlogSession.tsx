import { blogHomeData } from "@/data/Blogs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules

import { BlogCard } from "@/components/BlogCard";
export const BlogSession = () => {
  return (
    <section className=" mt-[2rem]  max-sm:mt-4 max-sm:px-4 max-sm: px-8">
      <h2 className="font-bold text-2xl max-sm:text-lg link w-[9rem] hover:text-green-500 font-rajdhani">
        Latest Blogs
      </h2>
      <main className="grid grid-cols-4 max-md:grid-cols-3 mt-[2rem] gap-4 max-sm:grid-cols-2">
        {blogHomeData.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </main>
    </section>
  );
};
