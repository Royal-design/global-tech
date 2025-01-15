import { UseAuthContext } from "@/Context/Auth/UseAuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const PublicLayout = () => {
  const { user } = UseAuthContext();

  if (user) return <Navigate to="/" />;

  return <Outlet />;
};
