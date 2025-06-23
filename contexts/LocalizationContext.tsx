import { createContext, useContext, useState } from "react";
import { useTranslation } from 'react-i18next';

export const LocalizationContext = createContext({
  language: 'enUS',
  selectLang: (lang: string)=>{},
})

export function LocalizationProvider({ children }) {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState('enUS')

  const selectLang = (lang: string) => {
    setLanguage(lang)
    i18n.changeLanguage(lang)
  }

  return (
    <LocalizationContext value={{ language, selectLang }}>
      {children}
    </LocalizationContext>
  )
}

export const useLocalization = () => useContext(LocalizationContext)