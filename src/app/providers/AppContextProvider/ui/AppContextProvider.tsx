import { useCallback, useEffect, useState, type ReactNode } from "react";
import { AppContext } from "../config";
import type { THEME } from "../types";
import { LOCAL_STORAGE_THEME_KEY } from "@/shared/constants";

interface IProps {
  children: ReactNode;
}

function getThemeLocalStorage(): THEME {
  const value = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

  return value ? (value as THEME) : "light";
}

function AppContextProvider({ children }: IProps) {
  const [theme, setTheme] = useState<THEME>(() => getThemeLocalStorage());

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);

    document.body.className = theme;
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
