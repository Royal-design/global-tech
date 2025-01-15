import { redirect } from "react-router-dom";
import { UseAuthContext } from "@/Context/Auth/UseAuthContext";

export const ProtectedLoader = () => {
  const { user, userLoading } = UseAuthContext();

  if (userLoading) {
    // While loading, prevent rendering (optional: return a placeholder)
    return null;
  }

  if (user) {
    // Redirect authenticated users to the dashboard
    throw redirect("/");
  }

  return true; // Allow unauthenticated access
};
