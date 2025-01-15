import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export const UseAuthContext = () => {
  return useContext(AuthContext);
};
