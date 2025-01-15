import { AccordionTest } from "@/components/AccordionTest";
import BreadCrumbs from "@/components/BreadCrumbs";
import FilterSheet from "@/components/FilterSheet";
import { Footer } from "@/components/Footer";
import { ShopBanner } from "@/components/ShopBanner";
import { ShopProduct } from "@/components/ShopProduct";

export const ShopPage = () => {
  return (
    <div className="px-8">
      <div className="grid grid-cols-[repeat(4,1fr)] max-sm:flex max-sm:flex-col mt-8 w-full">
        <div className="hidden max-sm:mb-3  max-sm:block max-md:hidden">
          <div className="flex gap-4 items-center">
            <FilterSheet />
          </div>
          <BreadCrumbs />
        </div>
        <div className="pr-2 col-span-1 w-full max-sm:hidden h-[55rem]  ">
          <AccordionTest />
        </div>
        <div className="banner col-span-3 h-[55rem] ">
          <ShopBanner />
          <ShopProduct />
        </div>
      </div>
      <Footer />
    </div>
  );
};
