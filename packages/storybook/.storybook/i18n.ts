import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../locales/en/common.json';
import arTranslations from '../locales/ar/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enTranslations
      },
      ar: {
        common: arTranslations
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common'],
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
