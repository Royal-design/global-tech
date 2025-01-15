import { Navigate, Outlet } from "react-router-dom";
import { UseAuthContext } from "@/Context/Auth/UseAuthContext";
import { SpinnerLoader } from "@/components/SpinnerLoader";
export const PrivateLayout = () => {
  const { user } = UseAuthContext();

  if (!user) return <SpinnerLoader />;

  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};
