import { createContext, useContext, useState } from "react";
import { useTranslation } from 'react-i18next';

export const LocalizationContext = createContext({
  language: 'enUS',
  toggleLang: ()=>{},
  selectLang: (lang: string)=>{},
})

export function LocalizationProvider({ children }) {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState('enUS')

  const toggleLang = () => {
    setLanguage(language == 'ptBR' ? 'enUS' : 'ptBR')
    i18n.changeLanguage(language)
  }

  const selectLang = (lang: string) => {
    setLanguage(lang)
    i18n.changeLanguage(lang)
  }

  return (
    <LocalizationContext value={{ language, toggleLang, selectLang }}>
      {children}
    </LocalizationContext>
  )
}

export const useLocalization = () => useContext(LocalizationContext)