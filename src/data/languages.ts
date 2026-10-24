export interface LanguageMeta {
  id: string;
  name: string;
  nativeName: string;
  script: string;
  direction: 'ltr' | 'rtl';
  bcp47: string;
  coveragePercent: number; // Truthful translation completeness percentage
  validationStatus: 'approved' | 'reviewed' | 'in-progress' | 'planned';
  offlineReady: boolean;
  speechSupportTier: 'widespread' | 'device-dependent' | 'limited';
  description?: string;
}

export const INDIAN_LANGUAGES: LanguageMeta[] = [
  {
    id: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    script: 'Tamil',
    direction: 'ltr',
    bcp47: 'ta-IN',
    coveragePercent: 100,
    validationStatus: 'approved',
    offlineReady: true,
    speechSupportTier: 'widespread',
    description: 'Priority launch language — fully validated AAC phrase set and UI strings.'
  },
  {
    id: 'en',
    name: 'English',
    nativeName: 'English',
    script: 'Latin',
    direction: 'ltr',
    bcp47: 'en-IN',
    coveragePercent: 100,
    validationStatus: 'approved',
    offlineReady: true,
    speechSupportTier: 'widespread',
    description: 'Primary anchor language — complete medical & daily vocabulary.'
  },
  {
    id: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    script: 'Devanagari',
    direction: 'ltr',
    bcp47: 'hi-IN',
    coveragePercent: 95,
    validationStatus: 'reviewed',
    offlineReady: true,
    speechSupportTier: 'widespread',
    description: 'High-coverage core phrases reviewed by native speakers.'
  },
  {
    id: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    script: 'Telugu',
    direction: 'ltr',
    bcp47: 'te-IN',
    coveragePercent: 85,
    validationStatus: 'reviewed',
    offlineReady: true,
    speechSupportTier: 'device-dependent',
    description: 'Essential medical, transport & daily phrases curated.'
  },
  {
    id: 'kn',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    script: 'Kannada',
    direction: 'ltr',
    bcp47: 'kn-IN',
    coveragePercent: 80,
    validationStatus: 'reviewed',
    offlineReady: true,
    speechSupportTier: 'device-dependent',
    description: 'Curated essential medical and emergency phrase support.'
  },
  {
    id: 'ml',
    name: 'Malayalam',
    nativeName: 'മലയാളം',
    script: 'Malayalam',
    direction: 'ltr',
    bcp47: 'ml-IN',
    coveragePercent: 82,
    validationStatus: 'reviewed',
    offlineReady: true,
    speechSupportTier: 'device-dependent',
    description: 'Curated hospital, clinic and everyday assistance vocabulary.'
  },
  {
    id: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    script: 'Bengali',
    direction: 'ltr',
    bcp47: 'bn-IN',
    coveragePercent: 85,
    validationStatus: 'reviewed',
    offlineReady: true,
    speechSupportTier: 'widespread',
    description: 'Curated essential phrases for Eastern India.'
  },
  {
    id: 'mr',
    name: 'Marathi',
    nativeName: 'मराठी',
    script: 'Devanagari',
    direction: 'ltr',
    bcp47: 'mr-IN',
    coveragePercent: 80,
    validationStatus: 'reviewed',
    offlineReady: true,
    speechSupportTier: 'device-dependent',
    description: 'Core healthcare and transit vocabulary implemented.'
  },
  {
    id: 'gu',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    script: 'Gujarati',
    direction: 'ltr',
    bcp47: 'gu-IN',
    coveragePercent: 78,
    validationStatus: 'reviewed',
    offlineReady: true,
    speechSupportTier: 'device-dependent',
    description: 'Essential phrases reviewed for clinical communication.'
  },
  {
    id: 'pa',
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ',
    script: 'Gurmukhi',
    direction: 'ltr',
    bcp47: 'pa-IN',
    coveragePercent: 75,
    validationStatus: 'reviewed',
    offlineReady: true,
    speechSupportTier: 'device-dependent',
    description: 'Core assistance and daily phrase support.'
  },
  {
    id: 'or',
    name: 'Odia',
    nativeName: 'ଓଡ଼ିଆ',
    script: 'Odia',
    direction: 'ltr',
    bcp47: 'or-IN',
    coveragePercent: 70,
    validationStatus: 'in-progress',
    offlineReady: true,
    speechSupportTier: 'limited',
    description: 'Essential emergency and clinic phrases mapped.'
  },
  {
    id: 'ur',
    name: 'Urdu',
    nativeName: 'اردو',
    script: 'Perso-Arabic',
    direction: 'rtl',
    bcp47: 'ur-IN',
    coveragePercent: 80,
    validationStatus: 'reviewed',
    offlineReady: true,
    speechSupportTier: 'device-dependent',
    description: 'Complete right-to-left layout and curated phrase set.'
  },
  {
    id: 'as',
    name: 'Assamese',
    nativeName: 'অসমীয়া',
    script: 'Bengali-Assamese',
    direction: 'ltr',
    bcp47: 'as-IN',
    coveragePercent: 65,
    validationStatus: 'in-progress',
    offlineReady: true,
    speechSupportTier: 'limited',
    description: 'Core clinic, pharmacy and travel phrase dictionary.'
  },
  {
    id: 'brx',
    name: 'Bodo',
    nativeName: 'बड़ो',
    script: 'Devanagari',
    direction: 'ltr',
    bcp47: 'brx-IN',
    coveragePercent: 50,
    validationStatus: 'in-progress',
    offlineReady: true,
    speechSupportTier: 'limited',
    description: 'Foundational phrase architecture mapped to Eighth Schedule standard.'
  },
  {
    id: 'doi',
    name: 'Dogri',
    nativeName: 'डोगरी',
    script: 'Devanagari',
    direction: 'ltr',
    bcp47: 'doi-IN',
    coveragePercent: 50,
    validationStatus: 'in-progress',
    offlineReady: true,
    speechSupportTier: 'limited',
    description: 'Foundational assistance phrases mapped.'
  },
  {
    id: 'ks',
    name: 'Kashmiri',
    nativeName: 'کٲشُر / कश्मीरी',
    script: 'Perso-Arabic / Devanagari',
    direction: 'rtl',
    bcp47: 'ks-IN',
    coveragePercent: 55,
    validationStatus: 'in-progress',
    offlineReady: true,
    speechSupportTier: 'limited',
    description: 'Supports RTL Perso-Arabic layout and essential needs.'
  },
  {
    id: 'kok',
    name: 'Konkani',
    nativeName: 'कोंकणी',
    script: 'Devanagari',
    direction: 'ltr',
    bcp47: 'kok-IN',
    coveragePercent: 60,
    validationStatus: 'in-progress',
    offlineReady: true,
    speechSupportTier: 'limited',
    description: 'Core coastal healthcare and daily needs phrases.'
  },
  {
    id: 'mai',
    name: 'Maithili',
    nativeName: 'मैथिली',
    script: 'Devanagari',
    direction: 'ltr',
    bcp47: 'mai-IN',
    coveragePercent: 60,
    validationStatus: 'in-progress',
    offlineReady: true,
    speechSupportTier: 'limited',
    description: 'Core clinic, travel and household communication phrases.'
  },
  {
    id: 'mni',
    name: 'Manipuri (Meitei)',
    nativeName: 'মেইতেই',
    script: 'Bengali / Meitei Mayek',
    direction: 'ltr',
    bcp47: 'mni-IN',
    coveragePercent: 50,
    validationStatus: 'in-progress',
    offlineReady: true,
    speechSupportTier: 'limited',
    description: 'Architectural support and essential emergency phrases.'
  },
  {
    id: 'ne',
    name: 'Nepali',
    nativeName: 'नेपाली',
    script: 'Devanagari',
    direction: 'ltr',
    bcp47: 'ne-NP',
    coveragePercent: 70,
    validationStatus: 'reviewed',
    offlineReady: true,
    speechSupportTier: 'device-dependent',
    description: 'Essential medical, pharmacy and assistance phrases.'
  },
  {
    id: 'sa',
    name: 'Sanskrit',
    nativeName: 'संस्कृतम्',
    script: 'Devanagari',
    direction: 'ltr',
    bcp47: 'sa-IN',
    coveragePercent: 60,
    validationStatus: 'in-progress',
    offlineReady: true,
    speechSupportTier: 'limited',
    description: 'Classical language phrase dataset conforming to Eighth Schedule.'
  },
  {
    id: 'sat',
    name: 'Santali',
    nativeName: 'ᱥᱟᱱᱛᱟᱲᱤ',
    script: 'Ol Chiki',
    direction: 'ltr',
    bcp47: 'sat-IN',
    coveragePercent: 45,
    validationStatus: 'in-progress',
    offlineReady: true,
    speechSupportTier: 'limited',
    description: 'Indigenous language representation with Ol Chiki Unicode support.'
  },
  {
    id: 'sd',
    name: 'Sindhi',
    nativeName: 'سنڌي / सिन्धी',
    script: 'Perso-Arabic / Devanagari',
    direction: 'rtl',
    bcp47: 'sd-IN',
    coveragePercent: 50,
    validationStatus: 'in-progress',
    offlineReady: true,
    speechSupportTier: 'limited',
    description: 'Supports RTL Perso-Arabic layout and primary clinic phrases.'
  }
];

export const getLanguageById = (id: string): LanguageMeta => {
  return INDIAN_LANGUAGES.find((lang) => lang.id === id) || INDIAN_LANGUAGES[0];
};
