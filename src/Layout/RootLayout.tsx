import Navbar from "@/components/Navbar";
import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RootLayout: FC = () => {
  const location = useLocation();

  const loginPage = location.pathname === "/login";
  const registerPage = location.pathname === "/register";

  return (
    <div>
      <ToastContainer
        position="top-center"
        theme="dark"
        toastClassName={() =>
          "bg-gray-800 text-white flex rounded-lg shadow-lg p-[0.5rem] w-full items-center "
        }
      />
      {!loginPage && !registerPage && <Navbar />}
      <main>
        <Outlet />
      </main>
    </div>
  );
};
