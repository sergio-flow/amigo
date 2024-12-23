import 'server-only'

const dictionaries = {
    ar: () => import('./dictionaries/ar.json').then((module) => module.default),
    bn: () => import('./dictionaries/bn.json').then((module) => module.default),
    zh: () => import('./dictionaries/zh.json').then((module) => module.default),
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    fr: () => import('./dictionaries/fr.json').then((module) => module.default),
    hi: () => import('./dictionaries/hi.json').then((module) => module.default),
    pt: () => import('./dictionaries/pt.json').then((module) => module.default),
    ro: () => import('./dictionaries/ro.json').then((module) => module.default),
    ru: () => import('./dictionaries/ru.json').then((module) => module.default),
    es: () => import('./dictionaries/es.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()