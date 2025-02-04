import Navbar from "@/components/Navbar";
import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "@/components/ui/sonner";

export const RootLayout: FC = () => {
  const location = useLocation();

  const loginPage = location.pathname === "/login";
  const registerPage = location.pathname === "/register";

  return (
    <div className="w-full">
      <Toaster
        toastOptions={{
          style: { background: " var(--background-toast)", border: "none" }
        }}
      />
      {!loginPage && !registerPage && <Navbar />}
      <main>
        <Outlet />
      </main>
    </div>
  );
};
