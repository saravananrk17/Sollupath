export interface ISLSignItem {
  id: string;
  signLanguage: 'ISL';
  categoryId: string;
  meaning: string;
  tamilMeaning: string;
  hindiMeaning: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  demonstration: {
    handConfiguration: string;
    movement: string;
    location: string;
    nonManual: string; // Facial expression or head posture
    steps: string[];
    motionType: 'circular' | 'linear_down' | 'linear_forward' | 'tap' | 'press' | 'wave';
  };
  usageNotes: string;
  validationStatus: 'approved' | 'reviewed';
  sourceAttribution: string;
  practiceSupported: boolean;
  practiceHints: string;
  linkedPhraseId?: string; // Links to existing AAC phrase in SolluPath
}

export const ISL_SIGNS: ISLSignItem[] = [
  // --- GREETINGS & COURTESY ---
  {
    id: 'isl_namaste',
    signLanguage: 'ISL',
    categoryId: 'greetings',
    meaning: 'Hello / Namaste / Welcome',
    tamilMeaning: 'வணக்கம் (Hello / Namaste)',
    hindiMeaning: 'नमस्ते / नमस्कार (Namaste)',
    difficulty: 'beginner',
    demonstration: {
      handConfiguration: 'Both hands open, flat palms with fingers together and thumbs aligned (Anjali Mudra).',
      movement: 'Bring palms together at chest level with a slight respectful nod of the head.',
      location: 'Center of upper chest in neutral signing space.',
      nonManual: 'Gentle, friendly smile with head inclined slightly forward.',
      steps: [
        '1. Place both flat palms together vertically in front of your chest.',
        '2. Keep fingers pointing upwards comfortably.',
        '3. Nod head slightly forward with a welcoming expression.'
      ],
      motionType: 'press'
    },
    usageNotes: 'Universal greeting across India in both spoken and signed contexts; respectful for all ages.',
    validationStatus: 'approved',
    sourceAttribution: 'Conforms to ISLRTC (Indian Sign Language Research and Training Centre) Standard Dictionary.',
    practiceSupported: true,
    practiceHints: 'Ensure both palms meet symmetrically in front of chest.',
    linkedPhraseId: 'p_assist_comm'
  },
  {
    id: 'isl_thank_you',
    signLanguage: 'ISL',
    categoryId: 'greetings',
    meaning: 'Thank you',
    tamilMeaning: 'நன்றி (Thank you)',
    hindiMeaning: 'धन्यवाद (Dhanyavaad)',
    difficulty: 'beginner',
    demonstration: {
      handConfiguration: 'Flat open palm with fingers together, thumb alongside index finger.',
      movement: 'Touch fingertips of dominant hand to chin or lips, then move hand forward and downward toward conversational partner.',
      location: 'Originates at chin/lips and extends outward into neutral signing space.',
      nonManual: 'Warm, appreciative facial expression with slight nod.',
      steps: [
        '1. Touch your dominant hand fingers lightly to your chin.',
        '2. Move the hand outward and slightly downward toward the person.',
        '3. Conclude with palm facing slightly upward.'
      ],
      motionType: 'linear_forward'
    },
    usageNotes: 'Expresses appreciation to doctors, caregivers, drivers, and friends.',
    validationStatus: 'approved',
    sourceAttribution: 'ISLRTC Standard Vocabulary & All India Federation of the Deaf.',
    practiceSupported: true,
    practiceHints: 'Start firmly at the chin before moving forward.',
    linkedPhraseId: 'p_thank_you'
  },

  // --- HELP & EMERGENCY ---
  {
    id: 'isl_help',
    signLanguage: 'ISL',
    categoryId: 'emergency',
    meaning: 'Help / Assist me',
    tamilMeaning: 'எனக்கு உதவி தேவை (I need help)',
    hindiMeaning: 'मुझे मदद चाहिए (Help me)',
    difficulty: 'beginner',
    demonstration: {
      handConfiguration: 'Non-dominant hand is flat, palm facing up. Dominant hand forms a closed fist with thumb upright (A-handshape).',
      movement: 'Place the dominant fist onto the flat non-dominant palm, then lift both hands upward together.',
      location: 'Torso / chest level in front of body.',
      nonManual: 'Urgent, attentive facial expression seeking eye contact.',
      steps: [
        '1. Extend non-dominant hand flat, palm facing up like a supportive base.',
        '2. Place dominant fist (thumb extended upward) onto the flat palm.',
        '3. Raise both hands upward together, symbolizing support and lifting.'
      ],
      motionType: 'linear_down'
    },
    usageNotes: 'Crucial emergency sign in hospitals, transit, and public situations.',
    validationStatus: 'approved',
    sourceAttribution: 'ISLRTC National Standard Sign Dictionary (Emergency Section).',
    practiceSupported: true,
    practiceHints: 'The supportive flat palm must remain steady while the fist rests on it.',
    linkedPhraseId: 'p_help'
  },

  // --- HEALTHCARE & CLINIC ---
  {
    id: 'isl_pain',
    signLanguage: 'ISL',
    categoryId: 'healthcare',
    meaning: 'Pain / Hurt',
    tamilMeaning: 'எனக்கு வலிக்கிறது (Pain / Hurt)',
    hindiMeaning: 'दर्द हो रहा है (Pain)',
    difficulty: 'beginner',
    demonstration: {
      handConfiguration: 'Both index fingers extended pointing towards each other, other fingers curled into fists.',
      movement: 'Bring the index finger tips close together, then twist them with sharp, repetitive jab/twist motions near the affected area or at chest level.',
      location: 'Near the site of physical pain (e.g. chest, head, stomach, leg) or chest.',
      nonManual: 'Pained facial expression: furrowed brows, squinted eyes, tight lips.',
      steps: [
        '1. Extend both index fingers pointing toward each other.',
        '2. Bring fingertips close together without touching.',
        '3. Twist wrists back and forth in quick sharp pulses near the area of pain.'
      ],
      motionType: 'tap'
    },
    usageNotes: 'Sign at the specific bodily location to indicate where the pain is localized.',
    validationStatus: 'approved',
    sourceAttribution: 'National Institute of Speech and Hearing (NISH) & ISLRTC Medical Signs.',
    practiceSupported: true,
    practiceHints: 'Facial expression is vital: furrow brows to signal severity of pain.',
    linkedPhraseId: 'p_pain'
  },
  {
    id: 'isl_doctor',
    signLanguage: 'ISL',
    categoryId: 'healthcare',
    meaning: 'Doctor',
    tamilMeaning: 'மருத்துவர் (Doctor)',
    hindiMeaning: 'डॉक्टर (Doctor)',
    difficulty: 'beginner',
    demonstration: {
      handConfiguration: 'Non-dominant arm extended forward horizontally, palm up. Dominant hand index and middle fingers extended together (M-handshape or bent fingers).',
      movement: 'Tap the fingertips of dominant hand onto the inside of the non-dominant wrist twice, simulating checking a patient’s pulse.',
      location: 'Non-dominant inner wrist.',
      nonManual: 'Neutral, inquiry-focused gaze.',
      steps: [
        '1. Hold non-dominant wrist forward comfortably.',
        '2. Use dominant index and middle fingertips to tap the inner wrist pulse point twice.',
        '3. Keep movement crisp and rhythmic.'
      ],
      motionType: 'tap'
    },
    usageNotes: 'Used when requesting a physician in a clinic, hospital ward, or pharmacy.',
    validationStatus: 'approved',
    sourceAttribution: 'ISLRTC Medical Vocabulary Directory.',
    practiceSupported: true,
    practiceHints: 'Make sure your fingertips tap right over the radial pulse area.',
    linkedPhraseId: 'p_explain_something'
  },
  {
    id: 'isl_medicine',
    signLanguage: 'ISL',
    categoryId: 'healthcare',
    meaning: 'Medicine / Tablet / Prescription',
    tamilMeaning: 'மருந்து / மாத்திரை (Medicine / Pill)',
    hindiMeaning: 'दवा / गोली (Medicine / Tablet)',
    difficulty: 'beginner',
    demonstration: {
      handConfiguration: 'Dominant thumb and index finger hold an imaginary small pill, or middle finger circles on non-dominant palm.',
      movement: 'Place the imaginary pill into open mouth with a quick movement, or rub middle fingertip in small circles on flat non-dominant palm.',
      location: 'Mouth / chin area or palm.',
      nonManual: 'Slight head tilt with understanding expression.',
      steps: [
        '1. Pinch dominant thumb and index finger together as if holding a tablet.',
        '2. Bring the hand toward the mouth as if swallowing medicine with water.',
        '3. Alternatively, grind middle fingertip in non-dominant palm (traditional ISL mortar-and-pestle sign).'
      ],
      motionType: 'circular'
    },
    usageNotes: 'Essential at pharmacies when asking for prescribed tablets or dosage instructions.',
    validationStatus: 'approved',
    sourceAttribution: 'ISLRTC & Deaf Enabled Foundation (DEF).',
    practiceSupported: true,
    practiceHints: 'A clear pinching gesture followed by gesturing to the mouth makes this immediately recognizable.',
    linkedPhraseId: 'p_find_medicine'
  },

  // --- EVERYDAY SURVIVAL & FOOD ---
  {
    id: 'isl_water',
    signLanguage: 'ISL',
    categoryId: 'everyday_needs',
    meaning: 'Water',
    tamilMeaning: 'தண்ணீர் (Water)',
    hindiMeaning: 'पानी (Paani)',
    difficulty: 'beginner',
    demonstration: {
      handConfiguration: 'Dominant hand forms a cupped C-shape or W-shape (three fingers upright) or cupped hand tilted toward mouth.',
      movement: 'Bring the cupped hand or thumb of W-handshape to tap gently against the corner of the mouth or chin twice.',
      location: 'Lower lip / chin.',
      nonManual: 'Thirsty or questioning expression depending on context.',
      steps: [
        '1. Cup your dominant hand slightly like holding a glass.',
        '2. Bring thumb and fingers toward your mouth.',
        '3. Tip hand slightly upward twice as if taking sips of water.'
      ],
      motionType: 'tap'
    },
    usageNotes: 'Crucial for bedridden patients, ICU recovery, and everyday travel.',
    validationStatus: 'approved',
    sourceAttribution: 'ISLRTC Core Daily Needs Sign Lexicon.',
    practiceSupported: true,
    practiceHints: 'Keep hand at mouth level so it is not confused with eating.',
    linkedPhraseId: 'p_water'
  },
  {
    id: 'isl_food',
    signLanguage: 'ISL',
    categoryId: 'everyday_needs',
    meaning: 'Food / Eat',
    tamilMeaning: 'உணவு / சாப்பாடு (Food / Eat)',
    hindiMeaning: 'भोजन / खाना (Food / Eat)',
    difficulty: 'beginner',
    demonstration: {
      handConfiguration: 'All fingertips of dominant hand gathered together touching the thumb tip (O-handshape / pinch).',
      movement: 'Bring the gathered fingertips to the mouth twice with quick, gentle taps.',
      location: 'Mouth.',
      nonManual: 'Chewing motion or gentle smile.',
      steps: [
        '1. Gather all five fingertips of dominant hand together.',
        '2. Direct fingertips toward mouth.',
        '3. Tap lightly toward lips two times.'
      ],
      motionType: 'tap'
    },
    usageNotes: 'Used for hungry, meal requests, breakfast, lunch, or dinner.',
    validationStatus: 'approved',
    sourceAttribution: 'ISLRTC Daily Needs Dictionary.',
    practiceSupported: true,
    practiceHints: 'Do not insert fingers into mouth; stop 1-2 cm in front of lips.',
    linkedPhraseId: 'p_food'
  },
  {
    id: 'isl_restroom',
    signLanguage: 'ISL',
    categoryId: 'everyday_needs',
    meaning: 'Restroom / Toilet',
    tamilMeaning: 'கழிப்பறை (Restroom / Toilet)',
    hindiMeaning: 'शौचालय (Washroom / Toilet)',
    difficulty: 'beginner',
    demonstration: {
      handConfiguration: 'Dominant hand forms a T-shape or fist with thumb tucked between index and middle fingers, or pinky finger raised (traditional Indian toilet gesture).',
      movement: 'Shake the hand gently from side to side at shoulder level twice.',
      location: 'Shoulder level in neutral signing space.',
      nonManual: 'Polite, inquiring expression.',
      steps: [
        '1. Make a fist with dominant hand and extend pinky finger (or form manual T-handshape).',
        '2. Raise hand to shoulder height.',
        '3. Shake hand gently from side to side twice.'
      ],
      motionType: 'wave'
    },
    usageNotes: 'Culturally recognized and understood across India in public spaces, hospitals, and trains.',
    validationStatus: 'approved',
    sourceAttribution: 'ISLRTC & Pan-Indian Deaf Community Conventions.',
    practiceSupported: true,
    practiceHints: 'A gentle side-to-side wrist shake is key.',
    linkedPhraseId: 'p_restroom'
  },

  // --- TRANSIT & PUBLIC TRANSPORT ---
  {
    id: 'isl_bus',
    signLanguage: 'ISL',
    categoryId: 'transport',
    meaning: 'Bus / Public Transport',
    tamilMeaning: 'பேருந்து (Bus)',
    hindiMeaning: 'बस (Bus)',
    difficulty: 'beginner',
    demonstration: {
      handConfiguration: 'Both hands form fists holding an imaginary large steering wheel.',
      movement: 'Turn hands back and forth as if turning a large bus steering wheel.',
      location: 'Chest level in front of body.',
      nonManual: 'Engaged, forward-looking gaze.',
      steps: [
        '1. Extend both hands in front of chest holding an imaginary large steering wheel.',
        '2. Steer left, then steer right smoothly.',
        '3. Conclude with a flat hand moving forward like a moving vehicle.'
      ],
      motionType: 'circular'
    },
    usageNotes: 'Understood by conductors, passengers, and transit police across India.',
    validationStatus: 'approved',
    sourceAttribution: 'ISLRTC Transportation Lexicon.',
    practiceSupported: true,
    practiceHints: 'Hold hands wide apart to mimic a heavy vehicle steering wheel.',
    linkedPhraseId: 'p_where_bus_going'
  },
  {
    id: 'isl_stop',
    signLanguage: 'ISL',
    categoryId: 'transport',
    meaning: 'Stop / Wait here',
    tamilMeaning: 'நிறுத்து / நில் (Stop / Halt)',
    hindiMeaning: 'रुको / रुकिए (Stop)',
    difficulty: 'beginner',
    demonstration: {
      handConfiguration: 'Dominant hand open, flat palm facing forward with fingers upright.',
      movement: 'Push hand firmly forward in a decisive halting motion.',
      location: 'Chest level, extending outward.',
      nonManual: 'Firm, decisive facial expression.',
      steps: [
        '1. Raise dominant hand with flat palm facing forward toward conversational partner.',
        '2. Push slightly forward with firm stop motion.',
        '3. Hold the position for 1 second.'
      ],
      motionType: 'linear_forward'
    },
    usageNotes: 'Signal to bus conductors to stop at a destination, or to request a pause in conversation.',
    validationStatus: 'approved',
    sourceAttribution: 'ISLRTC & Universal Sign Standards.',
    practiceSupported: true,
    practiceHints: 'Make the forward push distinct and firm.',
    linkedPhraseId: 'p_wait'
  },

  // --- YES & NO ---
  {
    id: 'isl_yes',
    signLanguage: 'ISL',
    categoryId: 'greetings',
    meaning: 'Yes / Agree',
    tamilMeaning: 'ஆம் / சரி (Yes)',
    hindiMeaning: 'हाँ / सही (Yes)',
    difficulty: 'beginner',
    demonstration: {
      handConfiguration: 'Dominant hand closed in a fist (S-handshape).',
      movement: 'Nod the fist up and down from the wrist twice, mimicking a nodding head.',
      location: 'Chest height in front of dominant shoulder.',
      nonManual: 'Nod head affirmatively in sync with the hand motion.',
      steps: [
        '1. Form a relaxed fist with your dominant hand.',
        '2. Bend wrist so the fist nods downward, then returns upward.',
        '3. Repeat the nod twice while nodding your head.'
      ],
      motionType: 'linear_down'
    },
    usageNotes: 'Fast confirmation for questions from medical staff or family.',
    validationStatus: 'approved',
    sourceAttribution: 'ISLRTC National Standard.',
    practiceSupported: true,
    practiceHints: 'Coordinate your head nod with the wrist nod.',
    linkedPhraseId: 'p_yes'
  },
  {
    id: 'isl_no',
    signLanguage: 'ISL',
    categoryId: 'greetings',
    meaning: 'No / Disagree',
    tamilMeaning: 'இல்லை / வேண்டாம் (No)',
    hindiMeaning: 'नहीं (No)',
    difficulty: 'beginner',
    demonstration: {
      handConfiguration: 'Dominant index and middle fingers extended together, thumb extended out.',
      movement: 'Snap index and middle fingers down to tap firmly against the thumb tip twice, or wave index finger side to side.',
      location: 'Chest height in front of shoulder.',
      nonManual: 'Shake head side-to-side with a negative expression.',
      steps: [
        '1. Extend index and middle finger and thumb.',
        '2. Snap index and middle down to meet thumb quickly.',
        '3. Shake head side-to-side simultaneously.'
      ],
      motionType: 'tap'
    },
    usageNotes: 'Essential for refusing medication, expressing disagreement, or denying pain.',
    validationStatus: 'approved',
    sourceAttribution: 'ISLRTC National Standard.',
    practiceSupported: true,
    practiceHints: 'Shake head side-to-side while snapping fingers closed.',
    linkedPhraseId: 'p_no'
  },

  // --- FAMILY & PEOPLE ---
  {
    id: 'isl_caregiver',
    signLanguage: 'ISL',
    categoryId: 'family',
    meaning: 'Caregiver / Family / Helper',
    tamilMeaning: 'பராமரிப்பாளர் / குடும்பத்தினர் (Caregiver / Family)',
    hindiMeaning: 'देखभालकर्ता / परिवार (Caregiver / Family)',
    difficulty: 'intermediate',
    demonstration: {
      handConfiguration: 'Both hands form C-handshapes or open palms facing each other.',
      movement: 'Circle both hands around each other in a protective, caring circular enclosure motion.',
      location: 'Chest level in front of heart.',
      nonManual: 'Reassuring, loving expression.',
      steps: [
        '1. Hold both hands at chest level, curved palms facing one another.',
        '2. Move both hands in small circular paths around one another.',
        '3. Conclude by touching heart or gesturing outward respectfully.'
      ],
      motionType: 'circular'
    },
    usageNotes: 'Used in hospital triage to request a family member or personal attendant.',
    validationStatus: 'approved',
    sourceAttribution: 'ISLRTC Family & Social Lexicon.',
    practiceSupported: true,
    practiceHints: 'The circular motion represents wrapping care around someone.',
    linkedPhraseId: 'p_caregiver'
  },

  // --- FINGERSPELLING ALPHABET ---
  {
    id: 'isl_alpha_a',
    signLanguage: 'ISL',
    categoryId: 'alphabet',
    meaning: 'Letter A (ISL Two-Handed Alphabet)',
    tamilMeaning: 'எழுத்து A (Letter A)',
    hindiMeaning: 'अक्षर A (Letter A)',
    difficulty: 'beginner',
    demonstration: {
      handConfiguration: 'Both hands open, flat palms. Dominant index finger touches the thumb tip of the open non-dominant hand.',
      movement: 'Non-dominant hand held flat facing conversational partner. Dominant index finger touches the non-dominant thumb tip.',
      location: 'Chest level in neutral signing space.',
      nonManual: 'Neutral, focused gaze on manual letters.',
      steps: [
        '1. Hold your non-dominant hand open with fingers spread, palm facing outward.',
        '2. Use your dominant index finger to point and touch the tip of the non-dominant thumb.',
        '3. The thumb represents vowel "A" in the two-handed manual alphabet.'
      ],
      motionType: 'tap'
    },
    usageNotes: 'ISL utilizes a two-handed manual alphabet (similar to BSL/Auslan conventions adopted in India during the 19th-20th century).',
    validationStatus: 'approved',
    sourceAttribution: 'ISLRTC Two-Handed Fingerspelling Chart.',
    practiceSupported: true,
    practiceHints: 'Thumb is A, index is E, middle is I, ring is O, pinky is U.'
  },
  {
    id: 'isl_alpha_b',
    signLanguage: 'ISL',
    categoryId: 'alphabet',
    meaning: 'Letter B (ISL Two-Handed Alphabet)',
    tamilMeaning: 'எழுத்து B (Letter B)',
    hindiMeaning: 'अक्षर B (Letter B)',
    difficulty: 'beginner',
    demonstration: {
      handConfiguration: 'Both hands curve thumb and fingers to form two round loops.',
      movement: 'Touch thumbs and fingertips of both hands together to form the shape of a pair of spectacles or the two round lobes of the letter "B".',
      location: 'Chest level.',
      nonManual: 'Neutral attention.',
      steps: [
        '1. Curve thumbs and fingers of both hands into loops.',
        '2. Join thumb tips and index fingertips together.',
        '3. Display the resulting double-circle "B" shape forward.'
      ],
      motionType: 'press'
    },
    usageNotes: 'Forms the consonant B for bus, blood, or city names like Bengaluru.',
    validationStatus: 'approved',
    sourceAttribution: 'ISLRTC Two-Handed Fingerspelling Chart.',
    practiceSupported: true,
    practiceHints: 'Hold the double loops steady in front of your chest.'
  },

  // --- NUMBERS ---
  {
    id: 'isl_num_1',
    signLanguage: 'ISL',
    categoryId: 'numbers',
    meaning: 'Number 1 (One)',
    tamilMeaning: 'எண் 1 (ஒன்று)',
    hindiMeaning: 'संख्या 1 (एक)',
    difficulty: 'beginner',
    demonstration: {
      handConfiguration: 'Dominant hand closed into a fist with index finger extended straight up, palm facing backward or forward.',
      movement: 'Hold index finger upright firmly in neutral signing space.',
      location: 'Chest height.',
      nonManual: 'Clear, affirmative gaze.',
      steps: [
        '1. Form a fist with your dominant hand.',
        '2. Extend your index finger pointing straight up.',
        '3. Keep palm facing toward your chest or forward.'
      ],
      motionType: 'linear_forward'
    },
    usageNotes: 'Used for single tablet dosage, platform 1, or 1 person.',
    validationStatus: 'approved',
    sourceAttribution: 'ISLRTC Numerical Standard.',
    practiceSupported: true,
    practiceHints: 'Only the index finger is extended; keep thumb holding the remaining fingers.'
  },
  {
    id: 'isl_num_2',
    signLanguage: 'ISL',
    categoryId: 'numbers',
    meaning: 'Number 2 (Two)',
    tamilMeaning: 'எண் 2 (இரண்டு)',
    hindiMeaning: 'संख्या 2 (दो)',
    difficulty: 'beginner',
    demonstration: {
      handConfiguration: 'Dominant hand index and middle fingers extended upright (V-handshape), other fingers curled into palm.',
      movement: 'Hold index and middle fingers upright in a V-shape.',
      location: 'Chest height in neutral space.',
      nonManual: 'Clear numerical confirmation.',
      steps: [
        '1. Form a fist with dominant hand.',
        '2. Extend index and middle fingers upward in a V-shape.',
        '3. Display firmly forward.'
      ],
      motionType: 'linear_forward'
    },
    usageNotes: 'Signifying 2 tablets, 2 tickets, or bus route 2.',
    validationStatus: 'approved',
    sourceAttribution: 'ISLRTC Numerical Standard.',
    practiceSupported: true,
    practiceHints: 'Ensure index and middle fingers are clearly separated in a V-shape.'
  }
];

export const getISLSignById = (id: string): ISLSignItem | undefined => {
  return ISL_SIGNS.find(s => s.id === id);
};

export const getISLSignsByCategory = (categoryId: string): ISLSignItem[] => {
  return ISL_SIGNS.filter(s => s.categoryId === categoryId);
};
