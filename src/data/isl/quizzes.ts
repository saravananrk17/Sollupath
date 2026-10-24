export interface ISLQuizQuestion {
  id: string;
  signId: string;
  question: {
    en: string;
    ta: string;
    hi?: string;
  };
  scenario?: {
    en: string;
    ta: string;
  };
  options: {
    id: string;
    text: {
      en: string;
      ta: string;
    };
    isCorrect: boolean;
  }[];
  explanation: {
    en: string;
    ta: string;
  };
}

export const ISL_QUIZ_QUESTIONS: ISLQuizQuestion[] = [
  {
    id: 'quiz_1',
    signId: 'isl_help',
    question: {
      en: 'What does this ISL sign express when the fist rests on a flat palm and both hands lift together?',
      ta: 'மூடிய கை தட்டையான உள்ளங்கையில் வைத்து இரண்டும் மேலே உயர்த்தப்படும் போது அது எதை குறிக்கிறது?'
    },
    scenario: {
      en: 'A patient in an emergency clinic performs this sign to a doctor.',
      ta: 'அவசர சிகிச்சை பிரிவில் ஒரு நோயாளி மருத்துவரிடம் இந்த சைகையை செய்கிறார்.'
    },
    options: [
      {
        id: 'opt_1',
        text: { en: 'Help / Assist me', ta: 'எனக்கு உதவி தேவை (Help)' },
        isCorrect: true
      },
      {
        id: 'opt_2',
        text: { en: 'I want food', ta: 'எனக்கு உணவு வேண்டும் (Food)' },
        isCorrect: false
      },
      {
        id: 'opt_3',
        text: { en: 'Where is the bus?', ta: 'பேருந்து எங்கே? (Bus)' },
        isCorrect: false
      },
      {
        id: 'opt_4',
        text: { en: 'Good night', ta: 'இரவு வணக்கம் (Good Night)' },
        isCorrect: false
      }
    ],
    explanation: {
      en: 'The dominant fist resting on a flat non-dominant palm, lifted together, universally represents "Help" in Indian Sign Language (ISLRTC).',
      ta: 'தட்டையான உள்ளங்கையில் மூடிய கை வைத்து ஒன்றாக மேலே தூக்கும் சைகை, இந்திய சைகை மொழியில் "உதவி" (Help) என்பதைக் குறிக்கிறது.'
    }
  },
  {
    id: 'quiz_2',
    signId: 'isl_pain',
    question: {
      en: 'How is "Pain" or "Hurt" expressed in Indian Sign Language?',
      ta: 'இந்திய சைகை மொழியில் "வலி" (Pain) எவ்வாறு சைகை செய்யப்படுகிறது?'
    },
    scenario: {
      en: 'Describing an acute injury or stomach ache to a nurse.',
      ta: 'மருத்துவரிடம் அல்லது செவிலியரிடம் கடுமையான வயிற்று வலியை தெரிவிக்கும் போது.'
    },
    options: [
      {
        id: 'opt_1',
        text: { en: 'Waving open hands in circles', ta: 'இரு கைகளை வட்டமாக சுற்றுதல்' },
        isCorrect: false
      },
      {
        id: 'opt_2',
        text: {
          en: 'Extending both index fingers towards each other with sharp twisting pulses near the site of ache',
          ta: 'இரு ஆள்காட்டி விரல்களை நீட்டி வலி உள்ள இடத்திற்கு அருகில் முறுக்கி அசைத்தல்'
        },
        isCorrect: true
      },
      {
        id: 'opt_3',
        text: { en: 'Holding palms in front of eyes', ta: 'கண்களை உள்ளங்கைகளால் மூடுதல்' },
        isCorrect: false
      },
      {
        id: 'opt_4',
        text: { en: 'Pointing thumbs upward', ta: 'பெருவிரலை மேலே உயர்த்துதல்' },
        isCorrect: false
      }
    ],
    explanation: {
      en: 'In ISL, both index fingers point toward each other and twist sharply with a pained facial expression near the body part that hurts.',
      ta: 'வலிக்கும் இடத்திற்கு அருகில் இரு ஆள்காட்டி விரல்களையும் ஒன்றோடொன்று எதிரே வைத்து சுழற்றி அசைப்பதுடன், முகத்தில் வலி உணர்வை காட்டுவதே சரியான முறையாகும்.'
    }
  },
  {
    id: 'quiz_3',
    signId: 'isl_water',
    question: {
      en: 'Which gesture represents "Water" in Indian Sign Language for daily needs?',
      ta: 'அன்றாட தேவைகளில் "தண்ணீர்" (Water) என்பதற்கான சரியான இந்திய சைகை எது?'
    },
    options: [
      {
        id: 'opt_1',
        text: {
          en: 'Cupping the dominant hand like a glass and tipping it toward the mouth',
          ta: 'கையை குவளை போல் வளைத்து வாயை நோக்கி இருமுறை சாய்த்தல்'
        },
        isCorrect: true
      },
      {
        id: 'opt_2',
        text: { en: 'Clapping both hands twice', ta: 'இரு கைகளையும் தட்டுதல்' },
        isCorrect: false
      },
      {
        id: 'opt_3',
        text: { en: 'Pointing to the floor', ta: 'தரையை நோக்கி சுட்டுதல்' },
        isCorrect: false
      },
      {
        id: 'opt_4',
        text: { en: 'Crossing arms across chest', ta: 'மார்பின் குறுக்கே கைகளை கட்டுதல்' },
        isCorrect: false
      }
    ],
    explanation: {
      en: 'A cupped hand tipped toward the mouth represents drinking water in the standard ISLRTC daily vocabulary.',
      ta: 'கையை குவளை போல் வைத்து வாய்க்கு அருகில் சாய்ப்பது தண்ணீர் வேண்டும் என்பதற்கான நிலையான சைகையாகும்.'
    }
  },
  {
    id: 'quiz_4',
    signId: 'isl_doctor',
    question: {
      en: 'Why do we tap two fingers on the wrist to sign "Doctor" in ISL?',
      ta: 'இந்திய சைகை மொழியில் "மருத்துவர்" (Doctor) என்பதை குறிக்க மணிக்கட்டில் தட்டுவது ஏன்?'
    },
    scenario: {
      en: 'Inquiring about healthcare personnel in a clinic.',
      ta: 'மருத்துவமனையில் மருத்துவரை அழைக்கும் போது.'
    },
    options: [
      {
        id: 'opt_1',
        text: { en: 'It symbolizes wearing a wristwatch', ta: 'கைக்கடிகாரத்தை குறிக்கிறது' },
        isCorrect: false
      },
      {
        id: 'opt_2',
        text: {
          en: 'It simulates a physician checking a patient’s pulse',
          ta: 'மருத்துவர் நாடித் துடிப்பை (Pulse) பரிசோதிப்பதை குறிக்கிறது'
        },
        isCorrect: true
      },
      {
        id: 'opt_3',
        text: { en: 'It signals time is running out', ta: 'நேரம் முடிந்துவிட்டது என்பதை குறிக்கிறது' },
        isCorrect: false
      },
      {
        id: 'opt_4',
        text: { en: 'It means washing hands', ta: 'கைகளை கழுவுவதை குறிக்கிறது' },
        isCorrect: false
      }
    ],
    explanation: {
      en: 'The gesture iconically mimics a doctor feeling the radial pulse at the inner wrist of a patient.',
      ta: 'மருத்துவர் நோயாளியின் மணிக்கட்டில் நாடித் துடிப்பை தொட்டுப் பார்க்கும் செயலின் அடிப்படையில் இந்த சைகை உருவாக்கப்பட்டுள்ளது.'
    }
  },
  {
    id: 'quiz_5',
    signId: 'isl_thank_you',
    question: {
      en: 'Where does the dominant hand begin when signing "Thank You" in ISL?',
      ta: '"நன்றி" (Thank You) சைகை செய்யும் போது கை எங்கு தொடங்குகிறது?'
    },
    options: [
      {
        id: 'opt_1',
        text: {
          en: 'Touching the chin/lips, then moving outward toward the person',
          ta: 'தாடை/உதட்டை தொட்டு, பின்னர் எதிரே உள்ளவரை நோக்கி நீட்டுதல்'
        },
        isCorrect: true
      },
      {
        id: 'opt_2',
        text: { en: 'At the back of the neck', ta: 'கழுத்தின் பின்புறம்' },
        isCorrect: false
      },
      {
        id: 'opt_3',
        text: { en: 'On both knees', ta: 'இரு முழங்கால்களில்' },
        isCorrect: false
      },
      {
        id: 'opt_4',
        text: { en: 'Over the eyes', ta: 'கண்களின் மேல்' },
        isCorrect: false
      }
    ],
    explanation: {
      en: 'The hand touches the chin or lips and moves forward toward the other person with an appreciative nod.',
      ta: 'உள்ளங்கையை முகத்திற்கு/தாடைக்கு அருகில் கொண்டு வந்து, பின்னர் எதிராளியை நோக்கி அன்போடு நீட்டுவது நன்றியை குறிக்கும்.'
    }
  }
];
