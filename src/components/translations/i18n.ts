import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './english.json'; // English translations
import am from './amharic.json'; // Amharic translations

i18n
  .use(initReactI18next) // Pass the i18n instance to react-i18next.
  .init({
    resources: {
      en: { translation: en },
      am: { translation: am },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language in case the selected language is not available
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
