
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
import enteacher from "./en/teacher";
import ruteacher from "./ru/teacher";
import uzteacher from "./uz/teacher";
import enContact from "./en/contact";
import uzContact from "./uz/contact";
import ruContact from "./ru/contact";
import enModal from "./en/modal";
import ruModal from "./ru/modal";
import uzModal from "./uz/modal";
import enResult from "./en/result";
import ruResult from "./ru/result";
import uzResult from "./uz/result";



const resources = {
    en: {
        layout: enLayout,
        hero: enHero,
        crd: enCrd,
        teacher: enteacher,
        contact: enContact,
        modal: enModal,
        result: enResult
    },
    ru: {
        layout: ruLayout,
        hero: ruHero,
        crd: ruCrd,
        teacher: ruteacher,
        contact: ruContact,
        modal: ruModal,
        result: ruResult
    },
    uz: {
        layout: uzLayout,
        hero: uzHero,
        crd: uzCrd,
        teacher: uzteacher,
        contact: uzContact,
        modal: uzModal,
        result: uzResult
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
