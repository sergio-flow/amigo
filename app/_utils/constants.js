export const minEdition = 1;
export const maxEdition = 2;

export const prevEdition = (edition) => parseInt(edition) - 1 >= minEdition ? parseInt(edition) - 1 : null
export const nextEdition = (edition) => parseInt(edition) + 1 <= maxEdition ? parseInt(edition) + 1 : null

export const storageUrl = "https://english-flow-storage.vercel.app"

// Right to Left
// Arabic
// Urdu
// Pashto

export const langs = {
  en: {
    label: "English",
    icon: "em em-gb",
  },
  zh: {
    label: "Chinese",
    icon: "em em-cn",
  },
  es: {
    label: "Spanish",
    icon: "em em-es",
  },
  hi: {
    label: "Hindi",
    icon: "em em-flag-in",
  },
  ar: {
    label: "Arabic",
    icon: "em em-sa",
  },
  bn: {
    label: "Bengali",
    icon: "em em-flag-bd",
  },
  pt: {
    label: "Portuguese",
    icon: "em em-flag-pt",
  },
  ru: {
    label: "Russian",
    icon: "em em-ru",
  },
  ja: {
    label: "Japanese",
    icon: "em em-jp",
  },
  pa: {
    label: "Punjabi",
    icon: "em em-flag-in",
  },
  de: {
    label: "German",
    icon: "em em-de",
  },
  jv: {
    label: "Javanese",
    icon: "em em-id",
  },
  ko: {
    label: "Korean",
    icon: "em em-kr",
  },
  fr: {
    label: "French",
    icon: "em em-fr",
  },
  te: {
    label: "Telugu",
    icon: "em em-flag-in",
  },
  mr: {
    label: "Marathi",
    icon: "em em-flag-in",
  },
  ta: {
    label: "Tamil",
    icon: "em em-flag-in",
  },
  vi: {
    label: "Vietnamese",
    icon: "em em-flag-vn",
  },
  ur: {
    label: "Urdu",
    icon: "em em-flag-pk",
  },
  tl: {
    label: "Filipino",
    icon: "em em-flag-ph",
  },
  ro: {
    label: "Romanian",
    icon: "em em-flag-ro",
  },
  sq: {
    label: "Albanian",
    icon: "em em-flag-al",
  },
  ne: {
    label: "Nepali",
    icon: "em em-flag-np",
  },
  km: {
    label: "Khmer",
    icon: "em em-flag-kh",
  },
  si: {
    label: "Sinhalese",
    icon: "em em-flag-lk",
  },
  am: {
    label: "Amharic",
    icon: "em em-flag-et",
  },
  ps: {
    label: "Pashto",
    icon: "em em-flag-af",
  },
  my: {
    label: "Burmese",
    icon: "em em-flag-mm",
  },
  so: {
    label: "Somali",
    icon: "em em-flag-so",
  },
}

export const codes = {
  "zh": "Chinese",
  "es": "Spanish",
  "hi": "Hindi",
  "ar": "Arabic",
  "bn": "Bengali",
  "pt": "Portuguese",
  "ru": "Russian",
  "ja": "Japanese",
  "pa": "Punjabi",
  "de": "German",
  "jv": "Javanese",
  "ko": "Korean",
  "fr": "French",
  "te": "Telugu",
  "mr": "Marathi",
  "ta": "Tamil",
  "vi": "Vietnamese",
  "ur": "Urdu",
  "tl": "Filipino",
  "ro": "Romanian",
  "sq": "Albanian",
  "ne": "Nepali",
  "km": "Khmer",
  "si": "Sinhalese",
  "am": "Amharic",
  "ps": "Pashto",
  "my": "Burmese",
  "so": "Somali"
}

export const languages = [
  {
    "name": "Chinese",
    "codes": ["zh", "zh-CN", "zh-SG", "zh-HK", "zh-TW"],
    "flag": "cn"
  },
  {
    "name": "Spanish",
    "codes": ["es", "es-ES", "es-MX", "es-AR", "es-CO"]
  },
  // {
  //   "name": "English",
  //   "codes": ["en", "en-GB", "en-US", "en-CA", "en-AU"]
  // },
  {
    "name": "Hindi",
    "codes": ["hi", "hi-IN"],
    "flag": "in"
  },
  {
    "isRtl": true,
    "name": "Arabic",
    "codes": ["ar", "ar-SA", "ar-EG", "ar-DZ", "ar-IQ", "ar-JO", "ar-KW", "ar-LB", "ar-LY", "ar-MA", "ar-OM", "ar-QA", "ar-SY", "ar-TN", "ar-AE", "ar-YE"]
  },
  {
    "name": "Bengali",
    "codes": ["bn", "bn-BD", "bn-IN"]
  },
  {
    "name": "Portuguese",
    "codes": ["pt", "pt-PT", "pt-BR"]
  },
  {
    "name": "Russian",
    "codes": ["ru", "ru-RU"]
  },
  {
    "name": "Japanese",
    "codes": ["ja", "ja-JP"],
    "flag": "jp"
  },
  {
    "name": "Punjabi",
    "codes": ["pa", "pa-IN", "pa-PK"]
  },
  {
    "name": "German",
    "codes": ["de", "de-DE", "de-AT", "de-CH"]
  },
  {
    "name": "Javanese",
    "codes": ["jv", "jv-ID"],
    "flag": "id"
  },
  {
    "name": "Korean",
    "codes": ["ko", "ko-KR"],
    "flag": "kr"
  },
  {
    "name": "French",
    "codes": ["fr", "fr-FR", "fr-CA", "fr-BE", "fr-CH"]
  },
  {
    "name": "Telugu",
    "codes": ["te", "te-IN"],
    "flag": "in"
  },
  {
    "name": "Marathi",
    "codes": ["mr", "mr-IN"]
  },
  {
    "name": "Tamil",
    "codes": ["ta", "ta-IN", "ta-LK"]
  },
  {
    "name": "Vietnamese",
    "codes": ["vi", "vi-VN"]
  },
  {
    "isRtl": true,
    "name": "Urdu",
    "codes": ["ur", "ur-PK", "ur-IN"],
    "flag": "pk"
  },
  {
    "name": "Filipino",
    "codes": ["fil", "fil-PH"],
    "flag": "ph"
  },
  {
    "name": "Romanian",
    "codes": ["ro", "ro-RO"]
  },
  {
    "name": "Albanian",
    "codes": ["sq", "sq-AL", "sq-MK"],
    "flag": "al"
  },
  {
    "name": "Nepali",
    "codes": ["ne", "ne-NP"]
  },
  {
    "name": "Khmer",
    "codes": ["km", "km-KH"]
  },
  {
    "name": "Sinhalese",
    "codes": ["si", "si-LK"]
  },
  {
    "name": "Amharic",
    "codes": ["am", "am-ET"]
  },
  {
    "isRtl": true,
    "name": "Pashto",
    "codes": ["ps", "ps-AF"]
  },
  {
    "name": "Burmese",
    "codes": ["my", "my-MM"]
  },
  {
    "name": "Somali",
    "codes": ["so", "so-SO"]
  }
];
