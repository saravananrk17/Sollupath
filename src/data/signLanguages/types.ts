export type VerificationStatus = 'verified' | 'in_review' | 'community_contributed';

export interface SignLanguageCollection {
  id: string; // e.g. 'isl', 'asl', 'bsl'
  name: string; // e.g. 'Indian Sign Language'
  nativeName: string; // e.g. 'भारतीय सांकेतिक भाषा / இந்திய சைகை மொழி'
  code: string; // ISO 639-3 or standard abbreviation e.g. 'ins', 'ase', 'bfi'
  region: string; // e.g. 'India', 'United States / North America', 'United Kingdom'
  description: {
    en: string;
    ta: string;
  };
  manualCharacteristics: string; // e.g. 'Two-handed fingerspelling with rich spatial grammar'
  verificationAuthority: string; // e.g. 'ISLRTC & NAD India'
  entryCount: number;
  isPrimary: boolean;
}

export interface SignVideoCaption {
  timeInSeconds: number;
  text: {
    en: string;
    ta?: string;
  };
}

export interface SignEntry {
  id: string;
  languageId: string; // Must point to a valid SignLanguageCollection
  name: {
    en: string;
    ta?: string;
    nativeScript?: string;
  };
  meaning: {
    en: string;
    ta?: string;
  };
  category: 'greetings' | 'health' | 'emergency' | 'pharmacy' | 'transit' | 'everyday' | 'education' | 'family' | 'alphabet' | 'numbers';
  videoUrl?: string; // Standard video URL (with automatic kinematic fallback)
  posterUrl?: string; // Static fallback image / SVG poster
  captions: SignVideoCaption[];
  contextOfUse: {
    en: string;
    ta?: string;
  };
  notes?: {
    en: string;
    ta?: string;
  };
  regionalVariant?: string; // e.g. 'ISLRTC National Standard', 'Tamil Nadu Regional', 'BSL Northern'
  verificationStatus: VerificationStatus;
  source: string; // Institution, project, or publication
  license: string; // e.g. 'Creative Commons BY-NC 4.0', 'Educational Fair Use'
  relatedSignIds?: string[];
  linkedPhraseId?: string; // Links to AAC_PHRASES in phrases.ts
  linkedISLSignId?: string; // Links to ISL_SIGNS in signs.ts
  kinematicSteps?: string[]; // Step instructions for rendering fallback animation
}

export interface SignCategoryMeta {
  id: string;
  name: {
    en: string;
    ta: string;
  };
  icon: string;
}
