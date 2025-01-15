import { createContext, ReactElement, useEffect, useState } from "react";

type ThemeProviderType = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};
const themeProviderState: any = {};
export const ThemeProviderContext =
  createContext<ThemeProviderType>(themeProviderState);

type ChildrenType = {
  children: ReactElement;
};

export const ThemeProvider = ({ children }: ChildrenType) => {
  const [theme, setTheme] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
};
