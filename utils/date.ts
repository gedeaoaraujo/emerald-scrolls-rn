import { useTranslation } from "react-i18next";

export const dateTimePtBr = (dateStr: string): string => {
  const { t } = useTranslation()
  const language = t('language')
  const isHour12 = language === 'pt-BR' ? false : true

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: isHour12,
  };
  
  return new Intl
    .DateTimeFormat(language, options)
    .format(new Date(dateStr));
}
