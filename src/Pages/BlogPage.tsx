import { BlogCard } from "@/components/BlogCard";
import BreadCrumbs from "@/components/BreadCrumbs";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { motion } from "framer-motion";

// import hero from "../assets/blog/hero.jpg";
import { blogData } from "@/data/Blogs";
import { useEffect } from "react";
export const BlogPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <main>
        <section className="h-[29rem] relative font-rajdhani">
          <img
            src="https://img.freepik.com/free-photo/close-up-woman-typing-keyboard_23-2149145042.jpg?t=st=1736421743~exp=1736425343~hmac=01deeb0d6ce1d94eb16ff9043985571bab7b37304b9e8d7a6cc70447336808a5&w=826"
            alt="hero"
            className="h-full w-full object-cover"
          />
          <article className="absolute h-full w-full top-0 bg-background-banner ">
            <div className="h-full w-full flex flex-col max-sm:px-2 items-center justify-center">
              <motion.h1
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl max-sm:text-2xl max-md:text-2xl font-extrabold text-white dark:text-gray-100"
              >
                Stay Ahead in Tech Innovation
              </motion.h1>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-xl text-gray-300 max-sm:text-base  max-sm:text-center  dark:text-gray-300 mt-4"
              >
                Your Gateway to the Latest Trends, Tutorials, and Insights in
                the Tech World.
              </motion.p>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-xl max-sm:text-base text-gray-300 dark:text-gray-300 mt-4 max-sm:w-full w-[60%] text-center"
              >
                From groundbreaking technologies to hands-on tutorials, our blog
                empowers tech enthusiasts, developers, and innovators to stay
                informed and inspired.
              </motion.p>
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 "
              >
                <BreadCrumbs />
              </motion.div>
            </div>
          </article>
        </section>
        <section className="mt-6 px-8 max-sm:px-4">
          <article>
            <p className="text-lg my-2">Recent blog posts</p>
          </article>
          <div className="grid  [@media(min-width:380px)_and_(max-width:700px)]:grid-cols-2 grid-cols-[repeat(auto-fit,minmax(230px,1fr))]  max-md:grid-cols-3  gap-4">
            {blogData.map((blog) => (
              <BlogCard blog={blog} key={blog.id} />
            ))}
          </div>
        </section>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};
