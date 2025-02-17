import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { AccordionTest } from "./AccordionTest";

const FilterSheet = () => {
  const [open, setOpen] = useState<boolean>(false);

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
      <SheetContent side="left" className="overflow-auto scrollbar-hidden">
        <SheetTitle />
        <SheetDescription />
        <AccordionTest />
      </SheetContent>
    </Sheet>
  );
};

export default FilterSheet;
