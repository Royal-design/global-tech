import { NavLink } from "react-router-dom";
import logo from "../assets/gtech logo1.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa6";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { FiHome } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { CiShop } from "react-icons/ci";

export const Footer = () => {
  const [showFooter, setShowFooter] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      const isAtBottom = currentScrollY + windowHeight >= fullHeight - 10;

      if (isAtBottom) {
        setShowFooter(true);
      } else if (currentScrollY > lastScrollY) {
        setShowFooter(false);
      } else {
        setShowFooter(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <div className="">
      <footer className="md:hidden pt-[5rem]">
        <div
          className={clsx(
            "fixed bottom-0 left-0 w-full z-10 bg-background border-t rounded-t-[2rem] border-border-line shadow-md transition-transform duration-300",
            showFooter ? "translate-y-0" : "translate-y-full"
          )}
        >
          <div className="flex justify-around py-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex flex-col p-1 items-center text-sm transition-colors ${
                  isActive
                    ? "border border-border-line rounded-lg  transition-all duration-200"
                    : "text-light-color"
                }`
              }
            >
              <FiHome size={22} />
              <span className="text-lighter-color">Home</span>
            </NavLink>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                `flex flex-col p-1 items-center text-sm transition-colors ${
                  isActive
                    ? "border border-border-line rounded-lg  transition-all duration-200"
                    : "text-light-color"
                }`
              }
            >
              <CiShop size={22} />
              <span className="text-lighter-color">Shop</span>
            </NavLink>
            <NavLink
              to="/shopping-cart"
              className={({ isActive }) =>
                `flex flex-col p-1 items-center text-sm transition-colors ${
                  isActive
                    ? "border border-border-line rounded-lg  transition-all duration-200"
                    : "text-light-color"
                }`
              }
            >
              <CiShoppingCart size={22} />
              <span className="text-lighter-color">Cart</span>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex flex-col p-1 items-center text-sm transition-colors ${
                  isActive
                    ? "border border-border-line rounded-lg  transition-all duration-200"
                    : "text-light-color"
                }`
              }
            >
              <CiCircleInfo size={22} />
              <span className="text-lighter-color">About</span>
            </NavLink>
          </div>
        </div>
      </footer>
      <footer className="font-rajdhani mt-[4rem] text-sm max-sm:hidden">
        <div className="container w-full  px-[2rem] max-sm:px-4 max-md:px-4 max-lg:px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src={logo} alt="logo" className="w-[4rem] mb-4" />
              <p className="mt-2 text-lg max-sm:text-base">
                Your go-to platform for cutting-edge tech gadgets and
                accessories.
              </p>
            </div>

            <div>
              <h3 className="text-xl max-sm:text-lg font-semibold text-white">
                Quick Links
              </h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <NavLink
                    to="/"
                    className="link"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="link"
                    to="/product"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    className="link"
                    to="/blog"
                  >
                    Blog
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    className="link"
                    to="/about"
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    className="link"
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl max-sm:text-lg font-semibold text-white">
                Connect with Us
              </h3>
              <div className="flex gap-4 mt-3">
                <a href="#" className="hover:text-white">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-white">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-white">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-white">
                  <FaLinkedinIn />
                </a>
              </div>
              <p className="mt-4 text-base">Email: support@techecom.com</p>
              <p className="text-base">Phone: +123 456 7890</p>
            </div>
          </div>

          <hr className="my-6 border-gray-700" />

          <p className="text-center text-sm ">
            &copy; Emmannuel {new Date().getFullYear()} G.Tech{" "}
            <span>- All rights reserved.</span>
          </p>
        </div>
      </footer>
    </div>
  );
};
