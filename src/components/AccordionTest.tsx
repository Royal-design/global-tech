import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import { BrandsCommand } from "./BrandsCommand";
import { CategoryCommand } from "./CategoryCommand";

export const AccordionTest = () => {
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <Accordion
      type="multiple"
      defaultValue={["item-1", "item-2", "item-3", "item-4"]}
      className="w-full  font-rajdhani flex flex-col gap-2 "
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl max-md:text-lg ">
          PRODUCT CATEGORIES
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 text-[16px]">
          <CategoryCommand />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-xl uppercase max-md:text-lg ">
          Colors
        </AccordionTrigger>
        <AccordionContent className="flex gap-3">
          <div className="bg-[#000000] w-6 h-6 rounded-full"></div>
          <div className="bg-[#e4181a] w-6 h-6 rounded-full"></div>
          <div className="bg-[#a9a9a9] w-6 h-6 rounded-full"></div>
          <div className="bg-[#f4a529] w-6 h-6 rounded-full"></div>
          <div className="bg-[#25bd04] w-6 h-6 rounded-full"></div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-xl uppercase max-md:text-lg ">
          Sizes
        </AccordionTrigger>
        <AccordionContent className="flex gap-2 flex-wrap">
          {sizes.map((size, i) => (
            <Button
              variant="ghost"
              key={i}
              className="border border-black border-solid"
            >
              {size}
            </Button>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-xl max-md:text-lg  uppercase">
          brands
        </AccordionTrigger>
        <AccordionContent className="">
          <BrandsCommand />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
