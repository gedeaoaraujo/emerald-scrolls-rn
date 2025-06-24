import { createContext, useContext, useState } from "react";
import { useTranslation } from 'react-i18next';
import { getLanguageConfig, setLanguageConfig } from "../database/configs.dao";

export const LocalizationContext = createContext({
  language: 'enUS',
  initLanguage: ()=>{},
  selectLang: (lang: string)=>{},
})

export function LocalizationProvider({ children }) {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState('enUS')

  const initLanguage = async () => {
    const lang = await getLanguageConfig()
    if (lang) {
      setLanguage(lang)
      i18n.changeLanguage(lang)
    }
  }

  const saveLanguage = async (lang: string) => {
    await setLanguageConfig(lang)
  }

  const selectLang = (lang: string) => {
    setLanguage(lang)
    saveLanguage(lang)
    i18n.changeLanguage(lang)
  }

  return (
    <LocalizationContext value={{ 
      language, selectLang, initLanguage 
    }}>
      {children}
    </LocalizationContext>
  )
}

export const useLocalization = () => useContext(LocalizationContext)