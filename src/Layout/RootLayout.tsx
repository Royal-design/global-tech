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
      <ToastContainer position="bottom-right" />
      {!loginPage && !registerPage && <Navbar />}
      <main>
        <Outlet />
      </main>
    </div>
  );
};
