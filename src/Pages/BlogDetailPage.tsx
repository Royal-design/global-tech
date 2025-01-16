import BreadCrumbs from "@/components/BreadCrumbs";
import { Button } from "@/components/ui/button";
import { blogData, blogHomeData } from "@/data/Blogs";
import { Separator } from "@radix-ui/react-separator";
import { motion } from "framer-motion";
import {
  CalendarDays,
  ChevronRight,
  MessageCircle,
  Search,
  Tag
} from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { db } from "@/Config/firebase";
import { UseAuthContext } from "@/Context/Auth/UseAuthContext";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/Footer";
import BlogSearchSheet from "@/components/BlogSearchSheet";

export const BlogDetailPage = () => {
  const { user } = UseAuthContext();
  const { blogid } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find((blog) => blog.id === Number(blogid));
  const blogCategory = blogData.map((blog) => blog.category);
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0
  //   });
  // }, []);

  const commentSchema = z.object({
    firstname: z
      .string()
      .min(3, { message: "Firstname must be at least 3 characters" }),
    lastname: z
      .string()
      .min(3, { message: "Lastname must be at least 3 characters" }),
    address: z.string().min(1, { message: "Address is required" }),
    email: z
      .string({ invalid_type_error: "Must be a valid email" })
      .email({ message: "It must be a valid email" }),

    comment: z
      .string()
      .min(3, { message: "Comment must be at least 3 characters" })
  });
  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      email: "",
      comment: "",
      firstname: "",
      lastname: "",
      address: ""
    }
  });
  const handleSubmit = async (userData: z.infer<typeof commentSchema>) => {
    if (user) {
      const docRef = collection(db, "comments");
      await addDoc(docRef, {
        userId: user.id,
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
        blogId: blog?.id,
        content: userData.comment,
        image: user.photo,
        date: new Date().toLocaleString()
      });
    }
    toast.success("New comment added");
    fetchUserComments();

    form.reset();
    try {
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  const fetchUserComments = async () => {
    const commentsRef = collection(db, "comments");

    const q = query(
      commentsRef,
      where("userId", "==", user?.id),
      where("blogId", "==", blog?.id)
    );

    const querySnapshot = await getDocs(q);

    const comments = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: blog?.id,
        author: `${data.firstname} ${data.lastname}`,
        date: new Date().toISOString(),
        image: data.image,
        content: data.content
      };
    });

    localStorage.setItem(
      `comments-${blog?.id}`,
      JSON.stringify(
        comments.find((comment) => comment.id === blog?.id) && comments
      )
    );
    return comments;
  };
  const comments = JSON.parse(
    localStorage.getItem(`comments-${blog?.id}`) || "[]"
  );
  const updateComments = [...(blog?.comments || []), ...comments];
  const handleBlogClick = (id: string) => {
    navigate(`/blog/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <header className="h-[20rem] font-rajdhani relative w-full">
        <img
          src={blog?.coverImage}
          alt={blog?.author}
          className="h-full w-full object-cover"
        />
        <article className="absolute h-full w-full top-0 bg-background-banner ">
          <div className="h-full w-full flex flex-col max-sm:px-2 items-center justify-center">
            <h1 className="text-4xl max-sm:text-2xl max-sm:text-center font-extrabold text-white dark:text-gray-100">
              {blog?.title}
            </h1>
            <p className="text-lg text-center max-sm:px-2 text-gray-300 dark:text-gray-300 mt-4">
              {blog?.shortDescription}
            </p>
            <div className="bg-background-banner max-sm:mt-4 rounded-full px-2">
              <BreadCrumbs />
            </div>
          </div>
        </article>
      </header>
      <div className="hidden px-8 max-sm:px-4 pt-4 max-sm:block max-md:block">
        <BlogSearchSheet
          blogCategory={blogCategory}
          handleBlogClick={handleBlogClick}
        />
      </div>

      <main className="main mt-[4rem] max-sm:mt-[2rem] px-8 max-sm:px-4">
        <div className="flex max-md:flex-col max-sm:flex-col gap-8">
          <section className="w-[70%] max-md:w-full max-sm:w-full flex flex-col gap-4 h-auto">
            <div className="h-[15rem] w-full">
              <img
                src={blog?.image}
                alt={blog?.author}
                className="w-full h-full object-cover"
              />
            </div>
            <article className="w-full justify-between flex gap-3">
              <div className="flex items-center w-full gap-2">
                <img
                  src={blog?.authorImage}
                  alt={blog?.author}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <p className="text-xs w-full">{blog?.author}</p>
              </div>
              <Separator orientation="vertical" className="border-[1px]" />
              <div className="flex items-center gap-2 ">
                <CalendarDays size={20} />
                <p className="text-xs">{blog?.date}</p>
              </div>
              <Separator orientation="vertical" className="border-[1px]" />

              <div className="flex items-center gap-2">
                <Tag size={20} />
                <p className="text-xs">{blog?.category}</p>
              </div>
              <Separator orientation="vertical" className="border-[1px]" />

              <div className="flex items-center gap-2">
                <MessageCircle size={20} />
                <p className="text-xs">{updateComments.length}</p>
              </div>
            </article>
            <div className="mb-2  flex flex-col gap-2">
              <h1 className="text-xl font-bold dark:text-slate-300 text-slate-700">
                {blog?.title}
              </h1>
              <Separator className="border-[1px] mt-1 dark:border-slate-800 border-black" />
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {blog?.shortDescription}
              </p>

              <p className=" text-sm text-slate-700 dark:text-slate-300">
                {blog?.longDescription}
              </p>
              <div className="flex mt-4 items-center gap-4">
                <Separator className="border-[1px]  dark:border-slate-800 w-8 h-1 border-black" />
                <p className=" text-sm  text-slate-700">{blog?.author}</p>
              </div>
              <p className=" text-sm mt-4 text-slate-700 dark:text-slate-300">
                {blog?.bodyContent}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p>TAGS:</p>
              <div className="text-black flex gap-2 flex-wrap ">
                {blog?.tags.map((tag, i) => (
                  <Button
                    className="dark:bg-slate-700 h-[1.5rem] px-2 py-1 text-xs dark:text-white dark:hover:bg-slate-600 rounded-md"
                    key={i}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
            <div className=" flex gap-2 w-full h-full items-center">
              <p className="text-slate-700 dark:text-slate-300">Comments </p>
              <p className="h-5 w-5 bg-background-card text-slate-700 dark:text-slate-300 rounded-full p-2 flex items-center justify-center">
                {updateComments.length}
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full">
              {updateComments.length > 1 &&
                updateComments.map((comment, i) => (
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{
                      scale: 1.01,
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-auto p-2 flex flex-col gap-2 w-full bg-transparent border-slate-700 border rounded-lg"
                    key={i}
                  >
                    <div className="flex gap-2 items-center">
                      <img
                        src={comment.image}
                        alt={comment.author}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                      <article>
                        <div className="flex flex-col text-slate-700 dark:text-slate-400">
                          <p className="text-sm font-bold">{comment.author}</p>{" "}
                          <p className="text-xs">{comment.date}</p>
                        </div>
                      </article>
                    </div>

                    <p className="text-slate-700 dark:text-slate-300">
                      {" "}
                      {comment.content}
                    </p>
                  </motion.div>
                ))}
            </div>
            <div className="w-full">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                  <Card className="bg-background overflow-hidden text-primary max-sm:w-full w-[25rem]">
                    <CardHeader>
                      <CardTitle className=" text-lg">
                        Leave a comment
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-1">
                      <div className="flex w-full gap-5">
                        <FormField
                          control={form.control}
                          name="firstname"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="require">
                                First Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="focus:border-green-400 border-primary focus:border-1 duration-150"
                                  placeholder="Enter your firstname"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastname"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="require">
                                Last Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="focus:border-green-400 border-primary focus:border-1 duration-150"
                                  placeholder="Enter your lastname"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex w-full gap-5">
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="require">Address</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="focus:border-green-400 border-primary focus:border-1 duration-150"
                                  placeholder="Enter your address"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="require">Email</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  className="focus:border-green-400 border-primary focus:border-1 duration-150"
                                  placeholder="Enter a valid email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="comment"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="require">Comment</FormLabel>
                            <FormControl>
                              <Textarea
                                className=" focus:border-green-400 h-[5rem] border-primary focus:border-1 duration-150"
                                placeholder="Leave a comment..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                    <CardFooter className="flex flex-col bg-background justify-center items-center">
                      <Button
                        disabled={form.formState.isLoading}
                        type="submit"
                        className="w-full text-white dark:text-primary transition  bg-slate-600 hover:bg-slate-700 duration-200"
                      >
                        Post
                      </Button>
                    </CardFooter>
                  </Card>
                </form>
              </Form>
            </div>
          </section>

          <section className="max-sm:hidden max-md:hidden px-4">
            <div className="flex items-center h-[3rem] bg-background-card p-2">
              <Input
                placeholder="Search..."
                className="h-[2rem] w-full rounded-none "
              />
              <Search className="bg-red-600 h-[2.1rem] w-[2rem] px-1 " />
            </div>
            <div className="flex flex-col gap-4 mt-6 bg-background-card p-2">
              <p className="dark:text-slate-300 text-lg">Blog Category</p>
              {blogCategory.map((category, i) => (
                <Button
                  key={i}
                  className="flex bg-slate-500 text-slate-200 hover:bg-slate-600 justify-between items-center w-full"
                >
                  <p>{category}</p>
                  <ChevronRight />
                </Button>
              ))}
            </div>
            <div className="flex flex-col w-full gap-4 mt-6 bg-background-card p-4">
              <p className="dark:text-slate-300 text-lg">Recent Blogs</p>
              {blogHomeData.map((blog) => (
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  }}
                  key={blog.id}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleBlogClick(blog.id.toString())}
                  className=""
                >
                  <div className="flex   gap-2 h-auto">
                    <img
                      src={blog.image}
                      alt={blog.author}
                      className="h-[3rem] w-[3rem] object-cover"
                    />
                    <article className="flex flex-col gap-1">
                      <div className="flex gap-2 items-center">
                        <CalendarDays size={15} />
                        <p className="text-xs dark:text-slate-100">
                          {blog.date}
                        </p>
                      </div>
                      <p className="text-sm dark:text-slate-400">
                        {blog.title}
                      </p>
                    </article>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <footer className="px-8">
        <Footer />
      </footer>
    </div>
  );
};
