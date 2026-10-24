import { SignEntry } from './types';

/**
 * American Sign Language (ASL) Verified Reference Collection
 *
 * NOTE: ASL is a distinct language used primarily in the United States and Canada.
 * It is NOT interchangeable with Indian Sign Language (ISL) or British Sign Language (BSL).
 * ASL uses a ONE-HANDED fingerspelling manual alphabet derived from French Sign Language (LSF),
 * whereas ISL and BSL use TWO-HANDED manual alphabets.
 */
export const ASL_SIGN_ENTRIES: SignEntry[] = [
  {
    id: 'asl_lib_hello',
    languageId: 'asl',
    name: {
      en: 'Hello / Greeting (ASL)',
      ta: 'வணக்கம் (அமெரிக்க சைகை மொழி - ASL)',
      nativeScript: 'Hello'
    },
    meaning: {
      en: 'Standard greeting in American Sign Language.',
      ta: 'அமெரிக்க சைகை மொழியில் பொதுவான வாழ்த்து.'
    },
    category: 'greetings',
    videoUrl: '/videos/asl/hello.mp4',
    posterUrl: '/posters/asl/hello.svg',
    regionalVariant: 'Standard North American ASL',
    captions: [
      { timeInSeconds: 0, text: { en: 'Place flat hand with closed fingers near temple / forehead', ta: 'நெற்றிப்பொட்டு அருகே விரல்களை இணைத்தவாறு கையை வைக்கவும்' } },
      { timeInSeconds: 1, text: { en: 'Salute outward smoothly with a welcoming smile', ta: 'வணங்கி வரவேற்பது போல கையை மென்மையாக வெளியே அசைக்கவும்' } }
    ],
    contextOfUse: {
      en: 'Greeting Deaf individuals in North American or international ASL contexts.',
      ta: 'வட அமெரிக்க அல்லது சர்வதேச ASL சூழலில் ஒருவரை வரவேற்கப் பயன்படும்.'
    },
    notes: {
      en: 'Contrasts with ISL Namaste (Anjali Mudra at chest) and British Sign Language wave. ASL Hello takes the form of a gentle open salute moving outward.',
      ta: 'ISL நமஸ்தே சைகையிலிருந்து முற்றிலும் மாறுபட்டது. ASL-இல் நெற்றியிலிருந்து வெளியே சல்யூட் செய்வது போன்ற சைகை பயன்படும்.'
    },
    verificationStatus: 'verified',
    source: 'Gallaudet University ASL Reference Corpus & SignWriting Standards',
    license: 'Creative Commons BY-NC-SA 4.0 / Educational Fair Use',
    kinematicSteps: [
      'Touch temple with fingertips of flat B-handshape',
      'Move hand outward and forward smoothly in a polite salute',
      'Smile with friendly eye contact'
    ]
  },
  {
    id: 'asl_lib_thank_you',
    languageId: 'asl',
    name: {
      en: 'Thank You (ASL)',
      ta: 'நன்றி (அமெரிக்க சைகை மொழி - ASL)',
      nativeScript: 'Thank You'
    },
    meaning: {
      en: 'Expression of gratitude in American Sign Language.',
      ta: 'ASL-இல் நன்றி தெரிவிக்கும் சைகை.'
    },
    category: 'greetings',
    videoUrl: '/videos/asl/thank_you.mp4',
    posterUrl: '/posters/asl/thank_you.svg',
    regionalVariant: 'Standard North American ASL',
    captions: [
      { timeInSeconds: 0, text: { en: 'Fingertips of flat hand touch chin or lower lip', ta: 'விரல் நுனிகள் நாடி அல்லது உதட்டைத் தொட வேண்டும்' } },
      { timeInSeconds: 1, text: { en: 'Move hand forward and slightly downward toward the listener', ta: 'கையை எதிரே உள்ளவரை நோக்கி முன்னோக்கி அசைக்கவும்' } }
    ],
    contextOfUse: {
      en: 'Saying thank you in ASL.',
      ta: 'ASL உரையாடலில் நன்றி தெரிவிக்க.'
    },
    notes: {
      en: 'Similar in hand trajectory to ISL Thank You, reflecting cognate borrowing, but in ASL, a two-handed version is also used for intense gratitude ("Thank you very much").',
      ta: 'ISL நன்றி சைகையை ஒத்தது; ஆனால் ASL-இல் மிகுந்த நன்றிக்கு இரு கைகளும் பயன்படும்.'
    },
    verificationStatus: 'verified',
    source: 'Gallaudet ASL Lexicon',
    license: 'Creative Commons BY-NC-SA 4.0 / Educational Fair Use',
    kinematicSteps: [
      'Touch chin with fingertips of flat hand',
      'Extend hand forward toward other person',
      'Slight head nod'
    ]
  },
  {
    id: 'asl_lib_help',
    languageId: 'asl',
    name: {
      en: 'Help (ASL)',
      ta: 'உதவி (அமெரிக்க சைகை மொழி - ASL)',
      nativeScript: 'Help'
    },
    meaning: {
      en: 'Request or offer of assistance in American Sign Language.',
      ta: 'ASL-இல் உதவி கோருதல் அல்லது வழங்குதல்.'
    },
    category: 'emergency',
    videoUrl: '/videos/asl/help.mp4',
    posterUrl: '/posters/asl/help.svg',
    regionalVariant: 'Standard North American ASL',
    captions: [
      { timeInSeconds: 0, text: { en: 'Non-dominant palm faces upward as a flat support base', ta: 'ஒரு கை தட்டையாக மேல்நோக்கி அடித்தளமாக இருக்க வேண்டும்' } },
      { timeInSeconds: 1, text: { en: 'Dominant hand forms a thumbs-up (A-handshape) resting on the base palm', ta: 'கட்டைவிரல் உயர்ந்த A-fist அமைப்பில் உள்ள மற்றொரு கை அதன் மேல் நிற்கும்' } },
      { timeInSeconds: 2, text: { en: 'Lift both hands together upward toward the chest', ta: 'இரு கைகளையும் மார்பு நோக்கி ஒன்றாக உயர்த்தவும்' } }
    ],
    contextOfUse: {
      en: 'Directional sign: moving toward oneself means "Help me"; moving toward another means "I help you".',
      ta: 'தன்னை நோக்கி நகர்த்தினால் "எனக்கு உதவுங்கள்"; மற்றவரை நோக்கி நகர்த்தினால் "உங்களுக்கு உதவுகிறேன்".'
    },
    notes: {
      en: 'In ASL, the dominant hand forms an "A" fist with extended thumb, unlike the loose fist or open support used in ISL.',
      ta: 'ASL-இல் கட்டைவிரல் உயர்ந்த A-fist பயன்படும். ISL சைகையிலிருந்து இந்த கை அமைப்பு மாறுபடுகிறது.'
    },
    verificationStatus: 'verified',
    source: 'Gallaudet University Disability Support Services',
    license: 'Creative Commons BY-NC-SA 4.0 / Educational Fair Use',
    kinematicSteps: [
      'Flat palm as base',
      'Thumbs-up handshape placed on palm',
      'Lift upward together toward chest'
    ]
  },
  {
    id: 'asl_lib_water',
    languageId: 'asl',
    name: {
      en: 'Water (ASL)',
      ta: 'தண்ணீர் (அமெரிக்க சைகை மொழி - ASL)',
      nativeScript: 'Water'
    },
    meaning: {
      en: 'Water or drinking in American Sign Language.',
      ta: 'ASL-இல் தண்ணீர் அல்லது குடிநீர்.'
    },
    category: 'everyday',
    videoUrl: '/videos/asl/water.mp4',
    posterUrl: '/posters/asl/water.svg',
    regionalVariant: 'Standard North American ASL',
    captions: [
      { timeInSeconds: 0, text: { en: 'Form a W-handshape with three middle fingers extended and thumb holding pinky', ta: 'மூன்று விரல்களை உயர்த்தி W வடிவில் கையை வைக்கவும்' } },
      { timeInSeconds: 1, text: { en: 'Tap side of index finger against chin twice', ta: 'ஆள்காட்டி விரலின் பக்கவாட்டை நாடியில் இருமுறை தட்டவும்' } }
    ],
    contextOfUse: {
      en: 'Requesting drinking water in North America.',
      ta: 'குடிநீர் கேட்கும்போது பயன்படும்.'
    },
    notes: {
      en: 'W-handshape stands for "Water" (initialized sign in ASL). In ISL, contact is typically made on the lower lip.',
      ta: 'W எழுத்து அமைப்பில் நாடியில் தட்டும் சைகை.'
    },
    verificationStatus: 'verified',
    source: 'National Technical Institute for the Deaf (NTID)',
    license: 'Creative Commons BY-NC-SA 4.0 / Educational Fair Use',
    kinematicSteps: [
      'W-handshape in front of chin',
      'Tap index finger against chin twice',
      'Relax hand'
    ]
  },
  {
    id: 'asl_lib_alpha_a',
    languageId: 'asl',
    name: {
      en: 'Letter A (ASL One-Handed)',
      ta: 'எழுத்து A (ASL ஒரு கை முறை)',
      nativeScript: 'Letter A'
    },
    meaning: {
      en: 'Fingerspelling letter A in American Sign Language (single-handed).',
      ta: 'அமெரிக்க சைகை மொழி ஒரு கை எழுத்துமுறையில் A எழுத்து.'
    },
    category: 'alphabet',
    videoUrl: '/videos/asl/alpha_a.mp4',
    posterUrl: '/posters/asl/alpha_a.svg',
    regionalVariant: 'Standard North American ASL',
    captions: [
      { timeInSeconds: 0, text: { en: 'Close all fingers into a tight fist facing outward', ta: 'விரல்களை மடக்கி கையை வெளிநோக்கி வைக்கவும்' } },
      { timeInSeconds: 1, text: { en: 'Rest thumb firmly along the side of the index finger', ta: 'கட்டைவிரலை ஆள்காட்டி விரலின் பக்கவாட்டில் நேராக வைக்கவும்' } },
      { timeInSeconds: 2, text: { en: 'Hold steady in neutral signing space', ta: 'மார்பு முன் அசையாமல் பிடித்துக் காட்டவும்' } }
    ],
    contextOfUse: {
      en: 'Spelling English words, initials, and names in ASL.',
      ta: 'ஆங்கிலப் பெயர்கள் மற்றும் எழுத்துக்களைக் குறிக்க.'
    },
    notes: {
      en: 'CRUCIAL DISTINCTION: ASL uses ONE HAND (fist with thumb alongside index). In contrast, ISL and BSL require TWO HANDS (dominant index touching non-dominant thumb). Never confuse the two.',
      ta: 'முக்கிய வேறுபாடு: ASL ஒரு கையில் காட்டப்படும் (கட்டைவிரல் பக்கவாட்டில் உள்ள மூடிய கை). ISL மற்றும் BSL இரு கைகளால் காட்டப்படும்.'
    },
    verificationStatus: 'verified',
    source: 'Gallaudet ASL Manual Alphabet Standard',
    license: 'Creative Commons BY-NC-SA 4.0 / Educational Fair Use',
    kinematicSteps: [
      'Form closed fist facing outward',
      'Thumb rests against side of index finger',
      'Hold motionless'
    ]
  },
  {
    id: 'asl_lib_alpha_b',
    languageId: 'asl',
    name: {
      en: 'Letter B (ASL One-Handed)',
      ta: 'எழுத்து B (ASL ஒரு கை முறை)',
      nativeScript: 'Letter B'
    },
    meaning: {
      en: 'Fingerspelling letter B in American Sign Language (single-handed).',
      ta: 'அமெரிக்க சைகை மொழி ஒரு கை எழுத்துமுறையில் B எழுத்து.'
    },
    category: 'alphabet',
    videoUrl: '/videos/asl/alpha_b.mp4',
    posterUrl: '/posters/asl/alpha_b.svg',
    regionalVariant: 'Standard North American ASL',
    captions: [
      { timeInSeconds: 0, text: { en: 'Hold four fingers straight up touching together', ta: 'நான்கு விரல்களையும் ஒன்றாக நேராக உயர்த்தவும்' } },
      { timeInSeconds: 1, text: { en: 'Fold thumb across the palm', ta: 'கட்டைவிரலை உள்ளங்கையின் குறுக்கே மடிக்கவும்' } }
    ],
    contextOfUse: {
      en: 'Fingerspelling in ASL.',
      ta: 'ASL எழுத்துக் கூட்டலில்.'
    },
    notes: {
      en: 'Flat 4-finger hand with thumb tucked. Completely different from ISL/BSL two-handed joined rings.',
      ta: '4 விரல்கள் நேராகவும் பெருவிரல் உள்ளங்கையிலும் இருக்கும். ISL/BSL இரு கை வட்ட அமைப்பிலிருந்து முற்றிலும் வேறுபட்டது.'
    },
    verificationStatus: 'verified',
    source: 'Gallaudet ASL Manual Alphabet Standard',
    license: 'Creative Commons BY-NC-SA 4.0 / Educational Fair Use',
    kinematicSteps: [
      'Four fingers straight together vertically',
      'Thumb folded flat across palm',
      'Palm facing forward'
    ]
  }
];
