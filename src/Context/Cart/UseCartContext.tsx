import { useContext } from "react";
import { CartContext, UseCartContextType } from "./CartContext";
export const UseCartContext = (): UseCartContextType => {
  return useContext(CartContext);
};
