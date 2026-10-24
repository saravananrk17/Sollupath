import { SignLanguageCollection, SignCategoryMeta } from './types';

export const SIGN_LANGUAGE_COLLECTIONS: SignLanguageCollection[] = [
  {
    id: 'isl',
    name: 'Indian Sign Language',
    nativeName: 'भारतीय सांकेतिक भाषा / இந்திய சைகை மொழி',
    code: 'ins',
    region: 'India & South Asia',
    description: {
      en: 'Primary natural language of the Indian Deaf community. Features two-handed fingerspelling, rich spatial grammar, and standardized vocabulary curated by ISLRTC.',
      ta: 'இந்திய காதுகேளாதோர் சமூகத்தின் முதன்மை தாய்மொழி. இரு கைகளாலான எழுத்து முறை, முப்பரிமாண இலக்கணம் மற்றும் ISLRTC தரப்படுத்திய சொற்களஞ்சியத்தைக் கொண்டுள்ளது.'
    },
    manualCharacteristics: 'Two-handed fingerspelling; facial grammar (NMF) marks questions and intensity; spatial directional verbs.',
    verificationAuthority: 'Indian Sign Language Research and Training Centre (ISLRTC) & National Association of the Deaf (NAD) India',
    entryCount: 17,
    isPrimary: true,
  },
  {
    id: 'asl',
    name: 'American Sign Language',
    nativeName: 'American Sign Language',
    code: 'ase',
    region: 'United States, Canada & Anglophone regions',
    description: {
      en: 'Primary sign language used by Deaf communities in the United States and Anglophone Canada. Completely distinct grammar and vocabulary from ISL and BSL.',
      ta: 'அமெரிக்கா மற்றும் கனடாவில் பயன்படும் முதன்மை சைகை மொழி. ISL மற்றும் BSL இலிருந்து முற்றிலும் மாறுபட்ட இலக்கணத்தைக் கொண்டது.'
    },
    manualCharacteristics: 'One-handed fingerspelling; French Sign Language (LSF) lineage; topicalized sentence structure.',
    verificationAuthority: 'Curated Educational Comparative Corpus (Gallaudet University & ASL Lexicon Standards)',
    entryCount: 6,
    isPrimary: false,
  },
  {
    id: 'bsl',
    name: 'British Sign Language',
    nativeName: 'British Sign Language',
    code: 'bfi',
    region: 'United Kingdom',
    description: {
      en: 'Sign language used in the UK. Part of the BANZSL family with two-handed fingerspelling that historically influenced the development of modern ISL fingerspelling.',
      ta: 'ஐக்கிய இராச்சியத்தில் பயன்படும் சைகை மொழி. இரு கைகளாலான எழுத்து முறை கொண்டது; இது நவீன இந்திய சைகை எழுத்துமுறை வளர்ச்சியில் வரலாற்றுத் தாக்கம் செலுத்தியது.'
    },
    manualCharacteristics: 'Two-handed fingerspelling; BANZSL linguistic family; distinct vocabulary from ASL.',
    verificationAuthority: 'British Deaf Association (BDA) & University College London DCAL References',
    entryCount: 5,
    isPrimary: false,
  }
];

export const SIGN_CATEGORIES: SignCategoryMeta[] = [
  { id: 'all', name: { en: 'All Signs', ta: 'அனைத்து சைகைகள்' }, icon: 'layers' },
  { id: 'greetings', name: { en: 'Greetings & Courtesy', ta: 'வாழ்த்துகள் மற்றும் மரியாதை' }, icon: 'smile' },
  { id: 'emergency', name: { en: 'Emergency & Urgent', ta: 'அவசரம் மற்றும் உதவி' }, icon: 'alert-triangle' },
  { id: 'health', name: { en: 'Hospital & Healthcare', ta: 'மருத்துவம் மற்றும் உடல்நிலை' }, icon: 'heart-pulse' },
  { id: 'pharmacy', name: { en: 'Pharmacy & Medicine', ta: 'மருந்தகம் மற்றும் மாத்திரைகள்' }, icon: 'pill' },
  { id: 'transit', name: { en: 'Public Transport', ta: 'பொதுப் போக்குவரத்து' }, icon: 'bus' },
  { id: 'everyday', name: { en: 'Everyday Needs', ta: 'அன்றாடத் தேவைகள்' }, icon: 'coffee' },
  { id: 'alphabet', name: { en: 'Fingerspelling / Alphabet', ta: 'எழுத்துமுறை' }, icon: 'type' },
  { id: 'numbers', name: { en: 'Numbers & Counting', ta: 'எண்கள்' }, icon: 'hash' }
];

export function getSignLanguageCollection(id: string): SignLanguageCollection | undefined {
  return SIGN_LANGUAGE_COLLECTIONS.find(c => c.id === id);
}
