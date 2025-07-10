import i18n from 'i18next';
import { enUS } from './en-us';
import { ptBR } from './pt-br';
import { deDE } from './de-de';
import { zhCN } from './zh-cn';
import { hiIN } from './hi-in';
import { esES } from './es-es';
import { arAR } from './ar-ar';
import { ruRU } from './ru-ru';
import { initReactI18next } from 'react-i18next';

const resources = {
  enUS, ptBR, deDE, zhCN,
  hiIN, esES, arAR, ruRU
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
