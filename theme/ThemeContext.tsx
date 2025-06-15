import { DarkTheme } from "./DarkTheme";
import { LightTheme } from "./LightTheme";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
  theme: LightTheme,
  toggleTheme: () => {}
})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(LightTheme)

  const toggleTheme = () => {
    setTheme(theme === LightTheme ? DarkTheme : LightTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
