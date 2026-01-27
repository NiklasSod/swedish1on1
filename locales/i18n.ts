import { default as i18n } from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import en from './en.json';
import sv from './sv.json';

const deviceLanguage = Localization.getLocales()[0].languageCode;

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      sv: { translation: sv }
    },
    lng: deviceLanguage === 'sv' ? 'sv' : 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

export const useT = (prefix: string) => {
  return (key: string, options?: any): string => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    const result = i18n.t(fullKey, options);
    return typeof result === "string" ? result : "";
  };
};

export default i18n;