import { ThemeType } from "./ThemeType";
import { DarkTheme } from "./DarkTheme";
import { LightTheme } from "./LightTheme";
import { createContext, useContext, useState } from "react";
import { getThemeConfig, setThemeConfig } from "../database/configs.dao";

const ThemeContext = createContext({
  theme: LightTheme,
  initTheme: () => {},
  toggleTheme: () => {},
  selectTheme: (theme: ThemeType) => {},
})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(LightTheme)

  const initTheme = async () => {
    const res = await getThemeConfig()
    const nullOrLight = res === null || res === 'light'
    setTheme(nullOrLight ? LightTheme : DarkTheme)
  }

  const saveTheme = async (theme: ThemeType) => {
    await setThemeConfig(theme.name)
  }

  const toggleTheme = () => {
    setTheme(theme === LightTheme ? DarkTheme : LightTheme)
    saveTheme(theme === LightTheme ? DarkTheme : LightTheme)
  }

  const selectTheme = (theme: ThemeType) => {
    setTheme(theme)
    saveTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{ 
      theme, toggleTheme, selectTheme, initTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
