import { Navigate, Outlet } from "react-router-dom";
import { UseAuthContext } from "@/Context/Auth/UseAuthContext";
export const PrivateLayout = () => {
  const { user } = UseAuthContext();

  if (!user) return <div>Loading...</div>;

  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};
