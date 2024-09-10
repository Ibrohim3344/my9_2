
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLayout from "./en/layout";
import ruLayout from "./ru/layout";
import uzLayout from "./uz/layout";
import enHero from "./en/hero";
import ruHero from "./ru/hero";
import uzHero from "./uz/hero";
import enCrd from "./en/crd";
import ruCrd from "./ru/crd";
import uzCrd from "./uz/crd";






const resources = {
    en: {
        layout: enLayout,
        hero: enHero,
        crd: enCrd,
    },
    ru: {
        layout: ruLayout,
        hero: ruHero,
        crd: ruCrd,
    },
    uz: {
        layout: uzLayout,
        hero: uzHero,
        crd: uzCrd,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", 
        interpolation: {
            escapeValue: false, 
        },
    });

export default i18n;
