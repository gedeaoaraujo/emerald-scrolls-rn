import { ThemeType } from "./ThemeType";
import { DarkTheme } from "./DarkTheme";
import { LightTheme } from "./LightTheme";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
  theme: LightTheme,
  toggleTheme: () => {},
  selectTheme: (theme: ThemeType) => {},
})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(LightTheme)

  const toggleTheme = () => {
    setTheme(theme === LightTheme ? DarkTheme : LightTheme)
  }

  const selectTheme = (theme: ThemeType) => {
    setTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, selectTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
