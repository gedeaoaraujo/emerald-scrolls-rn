import i18n from 'i18next';
import { enUS } from './en-us';
import { ptBR } from './pt-br';
import { initReactI18next } from 'react-i18next';

const resources = {
  enUS, ptBR
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'enUS',
    fallback: 'ptBR',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
