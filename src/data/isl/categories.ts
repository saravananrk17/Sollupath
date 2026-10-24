export interface ISLCategoryMeta {
  id: string;
  name: string;
  translations: {
    en: string;
    ta: string;
    hi?: string;
  };
  description: {
    en: string;
    ta: string;
  };
  icon: string;
  color: string;
}

export const ISL_CATEGORIES: ISLCategoryMeta[] = [
  {
    id: 'greetings',
    name: 'Greetings & Introductions',
    translations: {
      en: 'Greetings & Introductions',
      ta: 'வணக்கம் மற்றும் அறிமுகம்',
      hi: 'अभिवादन और परिचय'
    },
    description: {
      en: 'Essential signs for saying hello, goodbye, please, and meeting someone in ISL.',
      ta: 'வணக்கம், நன்றி, நல்வரவு போன்ற அடிப்படை தொடக்க சைகைகள்.'
    },
    icon: 'Smile',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    id: 'alphabet',
    name: 'Fingerspelling & Alphabet',
    translations: {
      en: 'Fingerspelling & Alphabet',
      ta: 'விரல்வழி எழுத்துக்கள் (Fingerspelling)',
      hi: 'उंगलियों से वर्णमाला (Fingerspelling)'
    },
    description: {
      en: 'Standard two-handed Indian Sign Language manual alphabet for spelling names and places.',
      ta: 'பெயர்கள் மற்றும் இடங்களை குறிப்பிட உதவும் இரு கை விரல்மொழி எழுத்துக்கள்.'
    },
    icon: 'Type',
    color: 'bg-indigo-50 text-indigo-700 border-indigo-200'
  },
  {
    id: 'numbers',
    name: 'Numbers & Counting',
    translations: {
      en: 'Numbers & Counting',
      ta: 'எண்கள் மற்றும் கணக்கீடு',
      hi: 'संख्याएं और गिनती'
    },
    description: {
      en: 'Numbers 1 to 10 in Indian Sign Language for bus routes, medication doses, and times.',
      ta: 'பேருந்து எண்கள், மருந்து அளவுகள் மற்றும் நேரத்தை குறிக்கும் எண்கள்.'
    },
    icon: 'Hash',
    color: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Hospitals',
    translations: {
      en: 'Healthcare & Hospitals',
      ta: 'மருத்துவமனை மற்றும் நலம்',
      hi: 'स्वास्थ्य सेवा और अस्पताल'
    },
    description: {
      en: 'Vital signs for doctor, nurse, pain, emergency, injection, and hospital triage.',
      ta: 'மருத்துவர், செவிலியர், வலி, அவசரம் போன்ற அவசிய மருத்துவ சைகைகள்.'
    },
    icon: 'Stethoscope',
    color: 'bg-rose-50 text-rose-700 border-rose-200'
  },
  {
    id: 'everyday_needs',
    name: 'Everyday Needs & Food',
    translations: {
      en: 'Everyday Needs & Food',
      ta: 'அன்றாட தேவைகள் மற்றும் உணவு',
      hi: 'दैनिक आवश्यकताएं और भोजन'
    },
    description: {
      en: 'Signs for water, food, hungry, thirsty, restroom, and sleep.',
      ta: 'தண்ணீர், உணவு, கழிப்பறை, தூக்கம் போன்ற அடிப்படைத் தேவைகள்.'
    },
    icon: 'Utensils',
    color: 'bg-amber-50 text-amber-700 border-amber-200'
  },
  {
    id: 'family',
    name: 'People & Family',
    translations: {
      en: 'People & Family',
      ta: 'மக்கள் மற்றும் குடும்பம்',
      hi: 'लोग और परिवार'
    },
    description: {
      en: 'Signs for mother, father, brother, sister, friend, and caregiver in ISL.',
      ta: 'அம்மா, அப்பா, நண்பர், பராமரிப்பாளர் போன்ற உறவு சைகைகள்.'
    },
    icon: 'Users',
    color: 'bg-purple-50 text-purple-700 border-purple-200'
  },
  {
    id: 'transport',
    name: 'Public Transport & Directions',
    translations: {
      en: 'Public Transport & Directions',
      ta: 'பொதுப் போக்குவரத்து மற்றும் வழிகள்',
      hi: 'सार्वजनिक परिवहन और दिशा-निर्देश'
    },
    description: {
      en: 'Bus, train, auto-rickshaw, ticket, where, stop, and travel in ISL.',
      ta: 'பேருந்து, ரயில், நிறுத்தம், டிக்கெட் மற்றும் பயண சைகைகள்.'
    },
    icon: 'Bus',
    color: 'bg-cyan-50 text-cyan-700 border-cyan-200'
  },
  {
    id: 'emergency',
    name: 'Help & Emergencies',
    translations: {
      en: 'Help & Emergencies',
      ta: 'அவசர உதவி மற்றும் பாதுகாப்பு',
      hi: 'मदद और आपात स्थिति'
    },
    description: {
      en: 'Urgent signs for help, danger, stop, call police, and ambulance.',
      ta: 'உதவி, ஆபத்து, நிறுத்து, ஆம்புலன்ஸ் போன்ற உடனடி பாதுகாப்பு சைகைகள்.'
    },
    icon: 'AlertTriangle',
    color: 'bg-red-50 text-red-700 border-red-200'
  }
];
