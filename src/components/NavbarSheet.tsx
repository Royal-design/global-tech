import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { useState } from "react";
import { X } from "lucide-react";
import { NavLink } from "react-router-dom";
import Switch from "./Switch";
import { UseAuthContext } from "@/Context/Auth/UseAuthContext";
import { ProfileMenu } from "./ProfileMenu";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const NavbarSheet = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { user } = UseAuthContext();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {!open ? (
          <HiOutlineMenuAlt2
            onClick={() => setOpen(!open)}
            size={40}
            strokeWidth={1}
          />
        ) : (
          <X size={20} strokeWidth={1.5} onClick={() => setOpen(!open)} />
        )}
      </SheetTrigger>
      <SheetContent side="left" className="overflow-auto scrollbar-hidden">
        <SheetTitle />
        <SheetDescription />
        <div className=" flex flex-col h-full justify-between gap-4">
          <div className="flex flex-col gap-4">
            <NavLink
              onClick={() => {
                setOpen(!open);
                window.scrollTo({ top: 0 });
              }}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => {
                setOpen(!open);
                window.scrollTo({ top: 0 });
              }}
              to="/product"
            >
              Shop
            </NavLink>
            <NavLink
              onClick={() => {
                setOpen(!open);
                window.scrollTo({ top: 0 });
              }}
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              onClick={() => {
                setOpen(!open);
                window.scrollTo({ top: 0 });
              }}
              to="/about"
            >
              About Us
            </NavLink>
            <NavLink
              onClick={() => {
                setOpen(!open);
                window.scrollTo({ top: 0 });
              }}
              to="/contact"
            >
              Contact Us
            </NavLink>
          </div>
          <div className="">
            <div className="flex shadow-sm border border-border-line items-center px-2 py-1 justify-between w-full">
              <Switch />
              {user && <ProfileMenu />}
            </div>
            <p className="text-xs text-center mt-1 text-slate-700 dark:text-slate-200">
              © {new Date().getFullYear()} Emmanuel All rights reserved.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarSheet;
