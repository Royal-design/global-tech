import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const NavbarSheet = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {!open ? (
          <Button variant="ghost" onClick={() => setOpen(!open)}>
            <Menu size={20} strokeWidth={1.5} />
          </Button>
        ) : (
          <Button variant="ghost" onClick={() => setOpen(!open)}>
            <X size={20} strokeWidth={1.5} onClick={() => setOpen(!open)} />
          </Button>
        )}
      </SheetTrigger>
      <SheetContent side="left">
        <SheetTitle />
        <SheetDescription />
        <div className=" flex flex-col justify-center items-center gap-4">
          <NavLink
            className="link"
            onClick={() => {
              setOpen(!open);
              window.scrollTo({ top: 0 });
            }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="link"
            onClick={() => {
              setOpen(!open);
              window.scrollTo({ top: 0 });
            }}
            to="/product"
          >
            Shop
          </NavLink>
          <NavLink
            className="link"
            onClick={() => {
              setOpen(!open);
              window.scrollTo({ top: 0 });
            }}
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            className="link"
            onClick={() => {
              setOpen(!open);
              window.scrollTo({ top: 0 });
            }}
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            className="link"
            onClick={() => {
              setOpen(!open);
              window.scrollTo({ top: 0 });
            }}
            to="/contact"
          >
            Contact Us
          </NavLink>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarSheet;
