import { useContext } from "react";
import { ThemeProviderContext } from "./ThemeProvider";

export const UseThemeContext = () => {
  return useContext(ThemeProviderContext);
};
