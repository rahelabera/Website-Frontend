import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './components/translations/english.json';
import translationAM from './components/translations/amharic.json';
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      am: {
        translation: translationAM,
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
