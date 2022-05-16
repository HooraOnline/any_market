import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import es from './es.json';
import fa from './fa.json';
export const t = (str) => i18n.t(str);

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        fa: { translation: fa },
        es: { translation: es },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: true,
    },
});
