import BreadCrumbs from "@/components/BreadCrumbs";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
// import hero from "../assets/blog/hero.jpg";
import { blogData } from "@/data/Blogs";
import { Separator } from "@radix-ui/react-separator";
import { useEffect } from "react";
import { Link } from "react-router-dom";
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
            <div className="h-full w-full flex flex-col items-center justify-center">
              <h1 className="text-4xl max-sm:text-2xl max-md:text-2xl font-extrabold text-white dark:text-gray-100">
                Stay Ahead in Tech Innovation
              </h1>
              <p className="text-lg text-gray-300 max-sm:text-sm dark:text-gray-300 mt-4">
                Your Gateway to the Latest Trends, Tutorials, and Insights in
                the Tech World.
              </p>
              <p className="text-lg max-sm:text-sm text-gray-300 dark:text-gray-300 mt-4 max-sm:w-full w-[60%] text-center">
                From groundbreaking technologies to hands-on tutorials, our blog
                empowers tech enthusiasts, developers, and innovators to stay
                informed and inspired.
              </p>
              <div className="mt-8 ">
                <BreadCrumbs />
              </div>
            </div>
          </article>
        </section>
        <section className="mt-6 px-8">
          <article>
            <p className="text-lg my-2">Recent blog posts</p>
          </article>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))]  max-md:grid-cols-3  gap-4">
            {blogData.map((blog) => (
              <Card
                key={blog.id}
                className="h-full flex flex-col max-sm:max-w-full  w-full max-w-[300px] justify-between"
              >
                <CardHeader className="p-0">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-40 object-cover"
                  />
                </CardHeader>

                <Separator className="border-red border-solid" />
                <CardContent className="px-4 ">
                  <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
                  <p className="text-sm text-gray-600 mb-2">
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
                  <Link to={`/blog/${blog.id.toString()}`} className="w-full">
                    <Button className="w-full  max-sm:text-sm">
                      Read More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <footer className="px-8">
        <Footer />
      </footer>
    </div>
  );
};
