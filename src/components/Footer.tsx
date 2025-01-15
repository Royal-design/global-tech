import { Link, NavLink } from "react-router-dom";
import logo from "../assets/gtech logo1.png";
import { Separator } from "./ui/separator";
import { Home, Info, ShoppingBag } from "lucide-react";
export const Footer = () => {
  return (
    <footer className="font-rajdhani  mt-6 text-sm ">
      <Separator className="my-4" />
      <div className="grid grid-cols-[repeat(5,1fr)] gap-4 max-sm:grid-cols-2">
        <div className="contact max-sm:col-span-2 max-sm:mb-6">
          <img src={logo} alt="logo" className="w-[4rem] mb-4" />
          <article>
            <p className="text-sm">contact@gtech.com</p>
            <p className="text-sm">+234-81-956-962-34</p>
          </article>
          <div className="flex gap-4 mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-twitter"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </div>
        </div>
        <div className="company flex flex-col gap-4">
          <NavLink to="/about" className="link w-[30%]">
            About Us
          </NavLink>
          <NavLink to="/blogs" className="link w-[20%]">
            Blogs
          </NavLink>
          <NavLink to="/affiliate" className="link w-[30%]">
            Affiliates
          </NavLink>
          <NavLink to="/careers" className="link w-[30%]">
            Careers
          </NavLink>
          <NavLink to="/conatct" className="link w-[40%]">
            Contact US
          </NavLink>
        </div>
        <div className="shop flex flex-col gap-4">
          <NavLink to="/new-arrival" className="link w-[40%]">
            New Arrivals
          </NavLink>
          <NavLink to="/trending" className="link w-[40%]">
            Most Trending
          </NavLink>
          <NavLink to="/accessories" className="link w-[40%]">
            Accessories
          </NavLink>
          <NavLink to="/shop-all" className="link w-[30%]">
            Shop All
          </NavLink>
        </div>
        <div className="help flex flex-col gap-4">
          <NavLink to="/customer-service" className="link w-[50%]">
            Customer Service
          </NavLink>
          <NavLink to="/profile" className="link w-[40%]">
            My Account
          </NavLink>
          <NavLink to="/find-a-store" className="link w-[50%]">
            Find a Store
          </NavLink>
          <NavLink to="/legal-privacy" className="link w-[50%]">
            Legal & Privacy
          </NavLink>
        </div>
        <div className="categories flex flex-col gap-4">
          <NavLink to="phone-accessories" className="link w-[80%]">
            Phone and Accessories
          </NavLink>
          <NavLink to="/category/pc-laptop" className="link w-[50%]">
            PC and Laptop
          </NavLink>
          <NavLink to="/category/vr-camera" className="link w-[50%]">
            VR and Camera
          </NavLink>
          <NavLink to="/category/home-appliances" className="link w-[50%]">
            Home Appliances
          </NavLink>
          <NavLink to="/category/kitchen-appliances" className="link w-[60%]">
            Kitchen Appliances
          </NavLink>
          <NavLink to="/category/headphones" className="link w-[50%]">
            Headphones
          </NavLink>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex  h-[5rem] justify-between">
        <p> &copy; Emmanuel 2024</p>
        <div className=" ">
          <div className="flex items-center gap-2">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Separator orientation="vertical" className=" h-3" />
            <Link to="/terms-condition">Terms & Conditions</Link>
          </div>
        </div>
      </div>
      <nav className="fixed hidden max-sm:block bottom-0 left-0 w-full bg-gray-900 text-white z-50 shadow-lg">
        <div className="flex justify-around items-center py-2">
          <button className="flex flex-col items-center">
            <NavLink
              to="/"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                });
              }}
              className="text-lg"
            >
              <Home size={20} />
            </NavLink>
          </button>
          <button className="flex flex-col items-center">
            <NavLink
              to="/product"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                });
              }}
              className="text-lg"
            >
              <ShoppingBag size={20} />
            </NavLink>
          </button>
          <button className="flex flex-col items-center">
            <NavLink
              to="/about"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                });
              }}
              className="text-lg"
            >
              <Info size={20} />
            </NavLink>
          </button>
        </div>
      </nav>
    </footer>
  );
};
