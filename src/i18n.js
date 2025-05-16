import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import ar from './locales/ar.json';
import en from './locales/en.json';

i18next.use(initReactI18next).init({
  resources: {
    ar: { translation: ar },
    en: { translation: en }
  },
  lng: "ar",  // Default to Arabic
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18next;
