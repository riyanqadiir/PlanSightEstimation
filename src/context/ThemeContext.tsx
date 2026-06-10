import React, { createContext, useContext, useState } from "react";
import { getThemeClasses, Theme, ThemeClasses } from "../theme";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themeClasses: ThemeClasses;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const themeClasses = getThemeClasses(theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeClasses }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
