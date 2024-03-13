/* eslint-disable prettier/prettier */
import enJSON from 'csam/locale/en.json';
import ptJSON from 'csam/locale/pt.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    pt: { ...ptJSON },
  },
  lng: 'en',
});
