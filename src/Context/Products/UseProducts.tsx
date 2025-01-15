import { useContext } from "react";
import { ProductContext } from "./ProductProvider";

export const UseProducts = () => {
  return useContext(ProductContext);
};
