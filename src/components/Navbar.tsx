import { ReactElement, useEffect, useState } from "react";
import Headroom from "react-headroom";
import { NavLink } from "react-router-dom";
import logo from "../assets/gtech logo1.png";
import Search from "./Search";
import NavbarSheet from "./NavbarSheet";
import Switch from "./Switch";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CartSheet from "./CartSheet";
import WishListSheet from "./WishListSheet";
import { ProfileMenu } from "./ProfileMenu";
export type ChildrenType = {
  children?: ReactElement;
};

const Navbar = () => {
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  const totalFavourite = useSelector(
    (state: RootState) => state.favourite.totalFavourite
  );
  const [isPinned, setIsPinned] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Headroom
        onPin={() => setIsPinned(true)}
        onUnpin={() => setIsPinned(false)}
      >
        <nav
          className={`duration-200 text-primary bg-background gap-3  h-[4rem] px-[2rem] max-sm:px-[1rem] w-full max-sm:justify-between flex justify-around items-center  ${
            isPinned && scrolled ? " shadow-md" : ""
          }`}
        >
          <div className="flex gap-4 items-center">
            <div className="hidden  max-sm:block ">
              <NavbarSheet />
            </div>
            <img src={logo} alt="logo" className="w-[3rem]" />
          </div>

          <div className="w-full max-sm:hidden ">
            <Search />
          </div>

          <div className="flex items-center gap-4">
            <div className="max-sm:hidden">
              <Switch />
            </div>
            <div className="max-sm:hidden">
              <ProfileMenu />
            </div>
            <div className="relative font-rajdhani">
              {<CartSheet />}
              <p className="flex h-5 absolute top-[-12px] w-5 right-[-10px] bg-red-600  rounded-full text-white items-center justify-center">
                {totalQuantity}
              </p>
            </div>
            <div className="relative font-rajdhani">
              {<WishListSheet />}
              <p className="flex h-5 absolute top-[-12px] w-5 right-[-10px] bg-red-600 rounded-full text-white items-center justify-center">
                {totalFavourite}
              </p>
            </div>
          </div>
        </nav>
        <div className="w-full px-8 py-2  bg-background-card hidden max-sm:block ">
          <Search />
        </div>
        <div className=" flex max-sm:hidden ">
          <div className="flex gap-[2rem] font-rajdhani text-lg h-[2.5rem] bg-background-navbar items-center text-white w-full justify-center">
            <NavLink to="/" className="link">
              Home
            </NavLink>
            <NavLink
              className="link"
              to="/product"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Shop
            </NavLink>
            <NavLink className="link" to="/blog">
              Blog
            </NavLink>
            <NavLink className="link" to="/about">
              About Us
            </NavLink>
            <NavLink className="link" to="/contact">
              Contact Us
            </NavLink>
          </div>
        </div>
      </Headroom>
    </>
  );
};

export default Navbar;
