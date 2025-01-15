import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import {
  CalendarDays,
  ChevronRight,
  Search,
  SlidersHorizontal
} from "lucide-react";
import { ChangeEvent, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { blogHomeData } from "@/data/Blogs";

interface PropsType {
  blogCategory: string[];
  handleBlogClick: (id: string) => void;
}

const BlogSearchSheet = ({ blogCategory, handleBlogClick }: PropsType) => {
  const [open, setOpen] = useState<boolean>(false);
  const [blogCategoryFilter, setBlogCategoryFilter] =
    useState<string[]>(blogCategory);

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase();
    const newFilter = blogCategory.filter((category) =>
      category.toLowerCase().includes(inputValue)
    );

    setBlogCategoryFilter(newFilter);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {!open ? (
          <div
            className="cursor-pointer flex gap-4 items-center"
            onClick={() => setOpen(!open)}
          >
            <SlidersHorizontal size={15} strokeWidth={1.5} />
            <p>Filter</p>
          </div>
        ) : (
          <div
            className="flex gap-4 items-center"
            onClick={() => setOpen(!open)}
          >
            <SlidersHorizontal size={15} strokeWidth={1.5} />
            <p>Filter</p>
          </div>
        )}
      </SheetTrigger>
      <SheetContent side="left" className="">
        <SheetTitle />
        <SheetDescription />
        <section className=" px-4">
          <div className="flex items-center h-[3rem] bg-background-card p-2">
            <Input
              placeholder="Search..."
              className="h-[2rem] w-full rounded-none "
              onChange={handleFilter}
            />
            <Search className="bg-red-600 h-[2.1rem] w-[2rem] px-1 " />
          </div>
          <div className="flex flex-col gap-4 mt-6 bg-background-card p-2">
            <p className="dark:text-slate-300 text-lg">Blog Category</p>
            {blogCategoryFilter.length > 0 ? (
              blogCategoryFilter.map((category, i) => (
                <Button
                  key={i}
                  className="flex bg-slate-500 text-slate-200 hover:bg-slate-600 justify-between items-center w-full"
                >
                  <p>{category}</p>
                  <ChevronRight />
                </Button>
              ))
            ) : (
              <p>No matching categories found</p>
            )}
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
                onClick={() => {
                  handleBlogClick(blog.id.toString());
                  setOpen(!open);
                }}
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
                      <p className="text-xs dark:text-slate-100">{blog.date}</p>
                    </div>
                    <p className="text-sm dark:text-slate-400">{blog.title}</p>
                  </article>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </SheetContent>
    </Sheet>
  );
};

export default BlogSearchSheet;
