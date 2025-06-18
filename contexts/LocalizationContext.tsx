import { createContext, useState } from "react";
import { useTranslation } from 'react-i18next';

export const LocalizationContext = createContext({
  toggleLang: ()=>{}
})

export function LocalizationProvider({ children }) {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState('ptBR')

  const toggleLang = () => {
    setLanguage(language == 'ptBR' ? 'enUS' : 'ptBR')
    i18n.changeLanguage(language)
  }

  return (
    <LocalizationContext value={{ toggleLang }}>
      {children}
    </LocalizationContext>
  )
}