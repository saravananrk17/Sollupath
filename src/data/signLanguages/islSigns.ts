import { SignEntry } from './types';

export const ISL_SIGN_ENTRIES: SignEntry[] = [
  {
    id: 'isl_lib_namaste',
    languageId: 'isl',
    name: {
      en: 'Namaste / Hello',
      ta: 'வணக்கம் / நமஸ்தே',
      nativeScript: 'नमस्ते / வணக்கம்'
    },
    meaning: {
      en: 'Universal polite greeting and acknowledgement used across India.',
      ta: 'இந்தியா முழுவதும் பயன்படும் பொதுவான பணிவான வாழ்த்து.'
    },
    category: 'greetings',
    videoUrl: '/videos/isl/namaste.mp4',
    posterUrl: '/posters/isl/namaste.svg',
    regionalVariant: 'ISLRTC National Standard',
    captions: [
      { timeInSeconds: 0, text: { en: 'Begin with both hands relaxed at chest level', ta: 'இரு கைகளையும் மார்பு மட்டத்தில் தளர்த்தித் தொடங்குங்கள்' } },
      { timeInSeconds: 1, text: { en: 'Bring flat open palms together in Anjali Mudra', ta: 'இரு உள்ளங்கைகளையும் அஞ்சலி முத்திரையில் ஒன்றாக இணையுங்கள்' } },
      { timeInSeconds: 2, text: { en: 'Tilt head slightly forward with warm eye contact', ta: 'புன்னகையுடனும் தலை சற்றே முன்னோக்கி சாய்ந்தும் வணங்குங்கள்' } }
    ],
    contextOfUse: {
      en: 'Use when entering hospital consultation rooms, greeting bus conductors, meeting officials, or addressing elders.',
      ta: 'மருத்துவ அறைக்குள் நுழையும்போது, நடத்துனர் அல்லது அதிகாரிகளை சந்திக்கும்போது மரியாதையுடன் பயன்படும்.'
    },
    notes: {
      en: 'Unlike Western wave greetings, ISL Namaste conveys cultural reverence and formal respect across all Indian communities.',
      ta: 'மேற்கத்திய கை அசைப்பிலிருந்து மாறுபட்டு, இது இந்திய பண்பாட்டு மரியாதையைக் குறிக்கிறது.'
    },
    verificationStatus: 'verified',
    source: 'ISLRTC 10,000 Sign Dictionary & NAD India Guidelines',
    license: 'Creative Commons BY-NC 4.0 / Educational Fair Use',
    linkedPhraseId: 'hello',
    linkedISLSignId: 'isl_namaste',
    relatedSignIds: ['isl_lib_thank_you', 'isl_lib_help'],
    kinematicSteps: [
      'Bring open palms together at chest level',
      'Press fingertips upward in reverent contact',
      'Accompany with slight respectful head nod'
    ]
  },
  {
    id: 'isl_lib_thank_you',
    languageId: 'isl',
    name: {
      en: 'Thank You',
      ta: 'நன்றி',
      nativeScript: 'धन्यवाद / நன்றி'
    },
    meaning: {
      en: 'Expression of gratitude and appreciation for assistance or service.',
      ta: 'உதவி அல்லது சேவைக்கு நன்றி தெரிவிக்கும் சைகை.'
    },
    category: 'greetings',
    videoUrl: '/videos/isl/thank_you.mp4',
    posterUrl: '/posters/isl/thank_you.svg',
    regionalVariant: 'ISLRTC National Standard',
    captions: [
      { timeInSeconds: 0, text: { en: 'Place fingertips of dominant flat hand gently touching chin/lips', ta: 'மேல் கையின் விரல் நுனிகளை நாடி அல்லது உதடுகளில் தொடுங்கள்' } },
      { timeInSeconds: 1.2, text: { en: 'Move hand outward and slightly upward toward the listener', ta: 'கையை எதிரே உள்ளவரை நோக்கி வெளியே அசைக்கவும்' } },
      { timeInSeconds: 2, text: { en: 'Smile warmly and relax fingers', ta: 'மகிழ்ச்சியான முகபாவத்துடன் விரல்களை தளர்த்தவும்' } }
    ],
    contextOfUse: {
      en: 'Use after receiving medicine at a dispensary, getting directions, or receiving assistance.',
      ta: 'மருந்தகத்தில் மருந்து பெற்ற பின் அல்லது உதவி கிடைத்த பின் நன்றி கூற.'
    },
    notes: {
      en: 'Ensure movement originates from chin/lips outward; do not confuse with blowing a kiss.',
      ta: 'நாடியிலிருந்து வெளிப்புறமாக நேராக அசைய வேண்டும்.'
    },
    verificationStatus: 'verified',
    source: 'ISLRTC Dictionary Vol. 2 & Rehabilitation Council of India',
    license: 'Creative Commons BY-NC 4.0 / Educational Fair Use',
    linkedPhraseId: 'thank_you',
    linkedISLSignId: 'isl_thank_you',
    relatedSignIds: ['isl_lib_namaste', 'isl_lib_yes'],
    kinematicSteps: [
      'Touch chin with flat dominant palm fingertips',
      'Extend hand forward toward other person',
      'Affirmative smile'
    ]
  },
  {
    id: 'isl_lib_help',
    languageId: 'isl',
    name: {
      en: 'Help / Urgent Assistance',
      ta: 'உதவி வேண்டும்',
      nativeScript: 'मदद / உதவி'
    },
    meaning: {
      en: 'Request for immediate physical, medical, or situational support.',
      ta: 'உடனடி மருத்துவ அல்லது சூழல் சார்ந்த உதவி கோருதல்.'
    },
    category: 'emergency',
    videoUrl: '/videos/isl/help.mp4',
    posterUrl: '/posters/isl/help.svg',
    regionalVariant: 'ISLRTC National Standard',
    captions: [
      { timeInSeconds: 0, text: { en: 'Extend non-dominant hand palm facing upward as a supportive platform', ta: 'ஆதரவளிக்கும் அடித்தளமாக ஒரு உள்ளங்கையை மேல்நோக்கி வையுங்கள்' } },
      { timeInSeconds: 1, text: { en: 'Form dominant hand into a loose fist or cupped hand resting on the palm', ta: 'மற்றொரு கையை அதன் மேல் வைத்து ஆதரவாகத் தாங்குங்கள்' } },
      { timeInSeconds: 2, text: { en: 'Lift both hands upward together with an urgent, pleading facial expression', ta: 'உதவி கோரும் முகபாவத்துடன் இரு கைகளையும் மேல்நோக்கி உயர்த்துங்கள்' } }
    ],
    contextOfUse: {
      en: 'Critical emergency sign for police stations, train stations, crowded streets, or hospital triage desks.',
      ta: 'ரயில் நிலையம், மருத்துவமனை அல்லது சாலையில் அவசர உதவி தேவைப்படும்போது பயன்படும்.'
    },
    notes: {
      en: 'Two-handed sign representing lifting or carrying someone out of distress.',
      ta: 'துன்பத்திலிருந்து ஒருவரைத் தூக்கி ஆதரிப்பதை உணர்த்தும் இரு கை சைகை.'
    },
    verificationStatus: 'verified',
    source: 'ISLRTC Emergency Communication Lexicon & NAD India',
    license: 'Creative Commons BY-NC 4.0 / Educational Fair Use',
    linkedPhraseId: 'need_help',
    linkedISLSignId: 'isl_help',
    relatedSignIds: ['isl_lib_emergency', 'isl_lib_pain', 'isl_lib_doctor'],
    kinematicSteps: [
      'Non-dominant flat palm acts as supportive base',
      'Dominant hand rests on top of base palm',
      'Lift upward together with urgent facial expression'
    ]
  },
  {
    id: 'isl_lib_emergency',
    languageId: 'isl',
    name: {
      en: 'Emergency / Crisis',
      ta: 'அவசரம் / ஆபத்து',
      nativeScript: 'आपातकाल / அவசரம்'
    },
    meaning: {
      en: 'High-alert distress signal requiring immediate medical or security intervention.',
      ta: 'உடனடி மருத்துவ அல்லது பாதுகாப்பு தலையீடு தேவைப்படும் அவசர நிலை.'
    },
    category: 'emergency',
    videoUrl: '/videos/isl/emergency.mp4',
    posterUrl: '/posters/isl/emergency.svg',
    regionalVariant: 'ISLRTC National Standard',
    captions: [
      { timeInSeconds: 0, text: { en: 'Raise dominant hand to shoulder height in an E-handshape', ta: 'தோள் மட்டத்தில் E-வடிவ விரல் அமைப்பில் கையை உயர்த்தவும்' } },
      { timeInSeconds: 1, text: { en: 'Rapidly oscillate or shake hand with urgent alert facial expression', ta: 'அவசர எச்சரிக்கை முகபாவத்துடன் கையை விரைவாக அசைக்கவும்' } },
      { timeInSeconds: 2, text: { en: 'Wide alert eyes and quick body posture', ta: 'விழிப்புணர்வு தரும் தீவிர உடல் அசைவு' } }
    ],
    contextOfUse: {
      en: 'Accident sites, sudden chest pain, medical collapse, or fire emergencies.',
      ta: 'விபத்து, திடீர் மாரடைப்பு அல்லது அவசர ஆபத்து காலங்களில் பயன்படும்.'
    },
    notes: {
      en: 'Rapid shaking indicates the severity and urgency of the distress.',
      ta: 'விரைவான அசைவு ஆபத்தின் தீவிரத்தை உணர்த்துகிறது.'
    },
    verificationStatus: 'verified',
    source: 'ISLRTC National Emergency Medical Communication Protocol',
    license: 'Creative Commons BY-NC 4.0 / Educational Fair Use',
    linkedPhraseId: 'urgent_help',
    linkedISLSignId: 'isl_emergency',
    relatedSignIds: ['isl_lib_help', 'isl_lib_hospital', 'isl_lib_doctor'],
    kinematicSteps: [
      'Raise dominant hand near shoulder',
      'Form E-handshape or alert fingers',
      'Rapid lateral shake with wide eyes'
    ]
  },
  {
    id: 'isl_lib_pain',
    languageId: 'isl',
    name: {
      en: 'Pain / Hurts Here',
      ta: 'வலி / வேதனை',
      nativeScript: 'दर्द / வலி'
    },
    meaning: {
      en: 'Indicates physical pain, aching, or injury at a specific body location.',
      ta: 'உடலின் குறிப்பிட்ட இடத்தில் ஏற்படும் வலி அல்லது காயத்தைக் குறிக்கும்.'
    },
    category: 'health',
    videoUrl: '/videos/isl/pain.mp4',
    posterUrl: '/posters/isl/pain.svg',
    regionalVariant: 'ISLRTC Healthcare Corpus',
    captions: [
      { timeInSeconds: 0, text: { en: 'Form dominant hand into a loose claw with fingers curved', ta: 'விரல்களை வளைத்து நகம் போன்ற அமைப்பில் வைக்கவும்' } },
      { timeInSeconds: 1, text: { en: 'Position near the affected body region (head, chest, abdomen)', ta: 'வலி உள்ள உடல் பகுதிக்கு அருகே நிலைநிறுத்தவும்' } },
      { timeInSeconds: 2, text: { en: 'Twist wrist back and forth with grimacing pain expression', ta: 'வலியை வெளிப்படுத்தும் முகச்சுழிப்புடன் மணிக்கட்டை முன்னும் பின்னும் முறுக்கவும்' } }
    ],
    contextOfUse: {
      en: 'Emergency room triage, clinical consultation, nursing assessment, or elderly care.',
      ta: 'மருத்துவ பரிசோதனை, அவசர சிகிச்சை அல்லது முதியோர் கவனிப்பில் பயன்படும்.'
    },
    notes: {
      en: 'Directional sign: move hand directly to where it hurts (e.g., forehead for migraine, chest for angina).',
      ta: 'வலிக்கும் இடத்திற்கு நேராக கையை கொண்டு சென்று அசைக்க வேண்டும்.'
    },
    verificationStatus: 'verified',
    source: 'ISLRTC Healthcare Sign Vocabulary & AIIMS Disability Cell',
    license: 'Creative Commons BY-NC 4.0 / Educational Fair Use',
    linkedPhraseId: 'in_pain',
    linkedISLSignId: 'isl_pain',
    relatedSignIds: ['isl_lib_doctor', 'isl_lib_medicine', 'isl_lib_hospital'],
    kinematicSteps: [
      'Claw handshape positioned near affected area',
      'Sharp twisting motion of wrist',
      'Furrowed brow and pained expression'
    ]
  },
  {
    id: 'isl_lib_doctor',
    languageId: 'isl',
    name: {
      en: 'Doctor / Physician',
      ta: 'மருத்துவர்',
      nativeScript: 'डॉक्टर / மருத்துவர்'
    },
    meaning: {
      en: 'Medical practitioner or physician.',
      ta: 'மருத்துவ நிபுணர் அல்லது மருத்துவர்.'
    },
    category: 'health',
    videoUrl: '/videos/isl/doctor.mp4',
    posterUrl: '/posters/isl/doctor.svg',
    regionalVariant: 'ISLRTC Healthcare Corpus',
    captions: [
      { timeInSeconds: 0, text: { en: 'Extend non-dominant arm with wrist facing upward', ta: 'ஒரு கையை மணிக்கட்டு மேல்நோக்கி இருக்கும்படி நீட்டவும்' } },
      { timeInSeconds: 1, text: { en: 'Place index and middle finger of dominant hand on the radial pulse', ta: 'மற்றொரு கையின் இரு விரல்களால் மணிக்கட்டில் நாடி பிடிப்பது போல் வைக்கவும்' } },
      { timeInSeconds: 2, text: { en: 'Tap twice gently indicating checking pulse', ta: 'நாடி பரிசோதிப்பது போல இருமுறை மெதுவாகத் தட்டவும்' } }
    ],
    contextOfUse: {
      en: 'Asking hospital receptionists for a doctor or requesting clinical attention.',
      ta: 'மருத்துவமனை வரவேற்பில் அல்லது அவசர சிகிச்சையில் மருத்துவரை அழைக்க.'
    },
    notes: {
      en: 'Iconic representation of clinical pulse-taking recognized across all Indian states.',
      ta: 'நாடி பரிசோதிக்கும் மருத்துவ முறையை அடிப்படையாகக் கொண்ட சைகை.'
    },
    verificationStatus: 'verified',
    source: 'ISLRTC Medical Signs Guide & RCI Certified Curricula',
    license: 'Creative Commons BY-NC 4.0 / Educational Fair Use',
    linkedPhraseId: 'need_doctor',
    linkedISLSignId: 'isl_doctor',
    relatedSignIds: ['isl_lib_hospital', 'isl_lib_medicine', 'isl_lib_pain'],
    kinematicSteps: [
      'Extend non-dominant wrist forward',
      'Dominant two fingers touch radial artery',
      'Tap pulse rhythmically twice'
    ]
  },
  {
    id: 'isl_lib_medicine',
    languageId: 'isl',
    name: {
      en: 'Medicine / Prescription Pill',
      ta: 'மருந்து / மாத்திரை',
      nativeScript: 'दवाई / மருந்து'
    },
    meaning: {
      en: 'Pharmaceutical pills, tablets, or liquid prescription.',
      ta: 'மருந்துகள், மாத்திரைகள் அல்லது மருத்துவக் குறிப்பு.'
    },
    category: 'pharmacy',
    videoUrl: '/videos/isl/medicine.mp4',
    posterUrl: '/posters/isl/medicine.svg',
    regionalVariant: 'ISLRTC National Standard',
    captions: [
      { timeInSeconds: 0, text: { en: 'Hold non-dominant palm flat facing upward as an open surface', ta: 'ஒரு உள்ளங்கையை மேல்நோக்கி திறந்த தட்டாக வைக்கவும்' } },
      { timeInSeconds: 1, text: { en: 'Dominant thumb and index finger hold an imaginary tablet', ta: 'மற்றொரு கையின் பெருவிரல் மற்றும் ஆள்காட்டி விரலால் மாத்திரையை பிடிப்பது போல் வைக்கவும்' } },
      { timeInSeconds: 2, text: { en: 'Grind or rotate tablet against the open palm twice', ta: 'உள்ளங்கையில் மாத்திரையை அரைப்பது போல் இருமுறை சுழற்றவும்' } }
    ],
    contextOfUse: {
      en: 'At pharmacy counters, Jan Aushadhi Kendras, or explaining required medications to caregivers.',
      ta: 'மருந்தகத்தில் மருந்து கேட்க அல்லது பராமரிப்பாளரிடம் மருந்து தேவை என தெரிவிக்க.'
    },
    notes: {
      en: 'Symbolizes the traditional compounding and grinding of medicinal herbs and tablets.',
      ta: 'மாத்திரையை அரைக்கும் பாரம்பரிய முறையை உருவகப்படுத்தும் சைகை.'
    },
    verificationStatus: 'verified',
    source: 'ISLRTC 10,000 Sign Dictionary (Vol. 3)',
    license: 'Creative Commons BY-NC 4.0 / Educational Fair Use',
    linkedPhraseId: 'need_medicine',
    linkedISLSignId: 'isl_medicine',
    relatedSignIds: ['isl_lib_doctor', 'isl_lib_water', 'isl_lib_hospital'],
    kinematicSteps: [
      'Flat palm as base',
      'Dominant fingers pinch imaginary pill',
      'Circular grinding motion on palm'
    ]
  },
  {
    id: 'isl_lib_water',
    languageId: 'isl',
    name: {
      en: 'Water / Drink',
      ta: 'தண்ணீர் / குடிநீர்',
      nativeScript: 'पानी / தண்ணீர்'
    },
    meaning: {
      en: 'Drinking water or thirst indicator.',
      ta: 'குடிநீர் தேவை அல்லது தாகத்தைக் குறிக்கும்.'
    },
    category: 'everyday',
    videoUrl: '/videos/isl/water.mp4',
    posterUrl: '/posters/isl/water.svg',
    regionalVariant: 'ISLRTC National Standard',
    captions: [
      { timeInSeconds: 0, text: { en: 'Form dominant hand into a W-handshape with three extended fingers', ta: 'மூன்று விரல்களை உயர்த்தி W-வடிவ அமைப்பில் வைக்கவும்' } },
      { timeInSeconds: 1, text: { en: 'Bring index finger gently tapping against lower lip/chin', ta: 'ஆள்காட்டி விரலை கீழ் உதடு அல்லது நாடியில் மெதுவாகத் தட்டவும்' } },
      { timeInSeconds: 2, text: { en: 'Tap twice rhythmically', ta: 'இருமுறை தாளத்துடன் தட்டவும்' } }
    ],
    contextOfUse: {
      en: 'Inpatient recovery wards, restaurants, public bus terminals, and domestic care.',
      ta: 'மருத்துவமனை படுக்கையில், உணவகத்தில் அல்லது வீட்டில் குடிநீர் கேட்க.'
    },
    notes: {
      en: 'Commonly used throughout South Asia. A cupped hand drinking gesture is also widely understood in rural contexts.',
      ta: 'தெற்காசியாவில் பரவலாகப் பயன்படும் சைகை.'
    },
    verificationStatus: 'verified',
    source: 'ISLRTC Everyday Communication Directory',
    license: 'Creative Commons BY-NC 4.0 / Educational Fair Use',
    linkedPhraseId: 'need_water',
    linkedISLSignId: 'isl_water',
    relatedSignIds: ['isl_lib_medicine', 'isl_lib_help'],
    kinematicSteps: [
      'Form three-finger W-handshape',
      'Bring to mouth/chin',
      'Tap index finger on lower lip twice'
    ]
  },
  {
    id: 'isl_lib_hospital',
    languageId: 'isl',
    name: {
      en: 'Hospital / Clinic',
      ta: 'மருத்துவமனை',
      nativeScript: 'अस्पताल / மருத்துவமனை'
    },
    meaning: {
      en: 'Medical center, dispensary, or hospital.',
      ta: 'மருத்துவமனை அல்லது சிகிச்சை மையம்.'
    },
    category: 'health',
    videoUrl: '/videos/isl/hospital.mp4',
    posterUrl: '/posters/isl/hospital.svg',
    regionalVariant: 'ISLRTC National Standard',
    captions: [
      { timeInSeconds: 0, text: { en: 'Extend dominant index finger or H-fingers', ta: 'ஆள்காட்டி விரலை நீட்டவும்' } },
      { timeInSeconds: 1, text: { en: 'Trace a vertical line on upper non-dominant arm (deltoid)', ta: 'மறு கையின் தோள்பட்டையில் செங்குத்துக் கோடு வரையவும்' } },
      { timeInSeconds: 2, text: { en: 'Trace a horizontal cross line forming the red cross emblem', ta: 'கிடைமட்டக் கோடு வரைந்து கூட்டல் குறி அல்லது சிலுவை சின்னத்தை உருவாக்கவும்' } }
    ],
    contextOfUse: {
      en: 'Requesting an auto-rickshaw or bus driver to stop at the nearest hospital.',
      ta: 'ஆட்டோ அல்லது பேருந்து ஓட்டுநரிடம் மருத்துவமனைக்குச் செல்லுமாறு கூற.'
    },
    notes: {
      en: 'Traces the universal medical Red Cross emblem on the arm sleeve.',
      ta: 'தோள்பட்டையில் மருத்துவக் கூட்டல் குறியை வரைந்து உணர்த்தும் சைகை.'
    },
    verificationStatus: 'verified',
    source: 'ISLRTC Healthcare Lexicon & Indian Red Cross Society',
    license: 'Creative Commons BY-NC 4.0 / Educational Fair Use',
    linkedPhraseId: 'hospital',
    linkedISLSignId: 'isl_hospital',
    relatedSignIds: ['isl_lib_doctor', 'isl_lib_emergency', 'isl_lib_bus'],
    kinematicSteps: [
      'Touch opposite upper arm with index finger',
      'Trace vertical downward line',
      'Trace intersecting horizontal line (cross)'
    ]
  },
  {
    id: 'isl_lib_bus',
    languageId: 'isl',
    name: {
      en: 'Bus / Public Transit',
      ta: 'பேருந்து',
      nativeScript: 'बस / பேருந்து'
    },
    meaning: {
      en: 'Public bus, bus station, or route inquiry.',
      ta: 'அரசுப் பேருந்து, பேருந்து நிலையம் அல்லது பயணம்.'
    },
    category: 'transit',
    videoUrl: '/videos/isl/bus.mp4',
    posterUrl: '/posters/isl/bus.svg',
    regionalVariant: 'ISLRTC Transport Corpus',
    captions: [
      { timeInSeconds: 0, text: { en: 'Both hands form fists grasping an imaginary large steering wheel', ta: 'இரு கைகளும் பெரிய பேருந்து ஸ்டீயரிங் பிடிப்பது போல் வைக்கவும்' } },
      { timeInSeconds: 1, text: { en: 'Turn wheel left then right mimicking steering a large vehicle', ta: 'பெரிய வாகனத்தை ஓட்டுவது போல் ஸ்டீயரிங்கை இடமும் வலமும் திருப்பவும்' } },
      { timeInSeconds: 2, text: { en: 'Bounce slightly to represent vehicle motion on roads', ta: 'வாகன அசைவை உணர்த்தும் உடல் மொழி' } }
    ],
    contextOfUse: {
      en: 'Bus stands, transit hubs, asking locals which platform leads to a destination.',
      ta: 'பேருந்து நிலையத்தில் எந்தப் பேருந்து எங்கு செல்கிறது என வினவ.'
    },
    notes: {
      en: 'Widely understood across all states due to its iconic, recognizable steering kinematics.',
      ta: 'நாடு முழுவதும் எளிதில் புரிந்துகொள்ளப்படும் தெளிவான சைகை.'
    },
    verificationStatus: 'verified',
    source: 'ISLRTC Public Transit Communications Directory',
    license: 'Creative Commons BY-NC 4.0 / Educational Fair Use',
    linkedPhraseId: 'bus_stand',
    linkedISLSignId: 'isl_bus',
    relatedSignIds: ['isl_lib_ticket', 'isl_lib_hospital', 'isl_lib_namaste'],
    kinematicSteps: [
      'Both fists grasp large imaginary steering wheel',
      'Rotate wheel left and right in steering motion',
      'Neutral forward gaze'
    ]
  },
  {
    id: 'isl_lib_ticket',
    languageId: 'isl',
    name: {
      en: 'Ticket / Travel Pass',
      ta: 'பயணச் சீட்டு / டிக்கெட்',
      nativeScript: 'टिकट / டிக்கெட்'
    },
    meaning: {
      en: 'Bus or train ticket, fare receipt, or journey voucher.',
      ta: 'பேருந்து அல்லது ரயில் பயணச் சீட்டு.'
    },
    category: 'transit',
    videoUrl: '/videos/isl/ticket.mp4',
    posterUrl: '/posters/isl/ticket.svg',
    regionalVariant: 'ISLRTC Transport Corpus',
    captions: [
      { timeInSeconds: 0, text: { en: 'Hold non-dominant hand palm flat simulating a paper ticket', ta: 'ஒரு உள்ளங்கையை காகிதச் சீட்டு போல நீட்டவும்' } },
      { timeInSeconds: 1, text: { en: 'Dominant thumb and curved index finger pinch the edge', ta: 'மற்றொரு கையின் விரல்களால் அதன் விளிம்பைப் பிடிக்கவும்' } },
      { timeInSeconds: 2, text: { en: 'Make a sharp tearing or punching motion across the edge', ta: 'பயணச் சீட்டை கிழிப்பது அல்லது துளையிடுவது போல் அசைக்கவும்' } }
    ],
    contextOfUse: {
      en: 'Purchasing tickets at railway counters or showing travel passes to conductors.',
      ta: 'ரயில் நிலையத்தில் டிக்கெட் வாங்க அல்லது நடத்துனரிடம் பயணச்சீட்டு காட்ட.'
    },
    notes: {
      en: 'Mimics traditional conductor paper-ticket tearing.',
      ta: 'நடத்துனர் டிக்கெட் கிழிக்கும் பாரம்பரிய முறையை உருவகப்படுத்துகிறது.'
    },
    verificationStatus: 'verified',
    source: 'ISLRTC Transport Corpus & Indian Railways Deaf Accessibility Guides',
    license: 'Creative Commons BY-NC 4.0 / Educational Fair Use',
    linkedPhraseId: 'ticket_counter',
    linkedISLSignId: 'isl_ticket',
    relatedSignIds: ['isl_lib_bus', 'isl_lib_namaste'],
    kinematicSteps: [
      'Non-dominant flat palm as ticket sheet',
      'Dominant fingers pinch top edge',
      'Sharp quick tear motion toward body'
    ]
  },
  {
    id: 'isl_lib_yes',
    languageId: 'isl',
    name: {
      en: 'Yes / Correct / Agree',
      ta: 'ஆம் / சரி',
      nativeScript: 'हाँ / ஆம்'
    },
    meaning: {
      en: 'Affirmative response or agreement.',
      ta: 'ஒப்புதல் அல்லது ஆம் என உறுதிப்படுத்துதல்.'
    },
    category: 'greetings',
    videoUrl: '/videos/isl/yes.mp4',
    posterUrl: '/posters/isl/yes.svg',
    regionalVariant: 'ISLRTC National Standard',
    captions: [
      { timeInSeconds: 0, text: { en: 'Form dominant hand into an S-fist in front of chest', ta: 'மார்பின் முன் ஒரு கையை மூடிய விரல்களுடன் (S-fist) வைக்கவும்' } },
      { timeInSeconds: 1, text: { en: 'Nod fist up and down from the wrist like a head nodding', ta: 'தலை அசைப்பது போல மணிக்கட்டிலிருந்து கையை மேலும் கீழுமாக அசைக்கவும்' } },
      { timeInSeconds: 2, text: { en: 'Accompany with affirmative head nod', ta: 'தலையையும் ஆம் என அசைத்து உறுதிப்படுத்தவும்' } }
    ],
    contextOfUse: {
      en: 'Confirming symptoms, agreeing to medical treatment, or confirming travel destination.',
      ta: 'சிகிச்சைக்கு ஒப்புதல் அளிக்க அல்லது பயண இடத்தை உறுதிப்படுத்த.'
    },
    notes: {
      en: 'The hand mirrors the head-nodding gesture of agreement.',
      ta: 'கை அசைவு தலை அசைத்து ஒப்புதல் அளிப்பதை உருவகப்படுத்துகிறது.'
    },
    verificationStatus: 'verified',
    source: 'ISLRTC Standard Vocabulary (Vol. 1)',
    license: 'Creative Commons BY-NC 4.0 / Educational Fair Use',
    linkedPhraseId: 'yes',
    linkedISLSignId: 'isl_yes',
    relatedSignIds: ['isl_lib_no', 'isl_lib_namaste'],
    kinematicSteps: [
      'Dominant hand forms closed fist',
      'Nod wrist downward and upward twice',
      'Affirmative head nod'
    ]
  },
  {
    id: 'isl_lib_no',
    languageId: 'isl',
    name: {
      en: 'No / Incorrect / Decline',
      ta: 'இல்லை / தவறு',
      nativeScript: 'नहीं / இல்லை'
    },
    meaning: {
      en: 'Negative response, refusal, or decline.',
      ta: 'மறுப்பு அல்லது இல்லை என உணர்த்துதல்.'
    },
    category: 'greetings',
    videoUrl: '/videos/isl/no.mp4',
    posterUrl: '/posters/isl/no.svg',
    regionalVariant: 'ISLRTC National Standard',
    captions: [
      { timeInSeconds: 0, text: { en: 'Extend index and middle finger with thumb open', ta: 'ஆள்காட்டி மற்றும் நடுவிரலை நீட்டி பெருவிரலை திறக்கவும்' } },
      { timeInSeconds: 1, text: { en: 'Snap extended fingers together to close against thumb', ta: 'நீட்டிய விரல்களை பெருவிரலுடன் சேர்த்து சட்டென மூடவும்' } },
      { timeInSeconds: 2, text: { en: 'Accompany with side-to-side head shake', ta: 'தலையை இருபுறமும் இல்லை என அசைத்து மறுக்கவும்' } }
    ],
    contextOfUse: {
      en: 'Declining unneeded procedures, indicating absence of symptoms, or refusing wrong routes.',
      ta: 'தேவையற்றவற்றை மறுக்க அல்லது அறிகுறி இல்லை என உணர்த்த.'
    },
    notes: {
      en: 'A firm, crisp snap signals clear negation.',
      ta: 'விரல்களை சட்டென மூடுவது தெளிவான மறுப்பைக் குறிக்கும்.'
    },
    verificationStatus: 'verified',
    source: 'ISLRTC Standard Vocabulary (Vol. 1)',
    license: 'Creative Commons BY-NC 4.0 / Educational Fair Use',
    linkedPhraseId: 'no',
    linkedISLSignId: 'isl_no',
    relatedSignIds: ['isl_lib_yes', 'isl_lib_help'],
    kinematicSteps: [
      'Index and middle finger open',
      'Snap closed onto thumb crisply',
      'Shake head side-to-side'
    ]
  },
  {
    id: 'isl_lib_alpha_a',
    languageId: 'isl',
    name: {
      en: 'Letter A (ISL Two-Handed)',
      ta: 'எழுத்து A (இரு கை முறை)',
      nativeScript: 'वर्ण A / எழுத்து A'
    },
    meaning: {
      en: 'Letter A in the two-handed Indian Sign Language fingerspelling system.',
      ta: 'இந்திய சைகை மொழி இரு கை எழுத்துமுறையில் A எழுத்து.'
    },
    category: 'alphabet',
    videoUrl: '/videos/isl/alpha_a.mp4',
    posterUrl: '/posters/isl/alpha_a.svg',
    regionalVariant: 'ISLRTC Fingerspelling Standard',
    captions: [
      { timeInSeconds: 0, text: { en: 'Hold non-dominant hand palm facing forward with fingers spread', ta: 'ஒரு கையின் உள்ளங்கையை விரல்கள் விரிந்த நிலையில் நேராக வைக்கவும்' } },
      { timeInSeconds: 1, text: { en: 'Dominant index finger points and touches the tip of the non-dominant thumb', ta: 'மறு கையின் ஆள்காட்டி விரலால் கட்டை விரலின் நுனியைத் தொடவும்' } },
      { timeInSeconds: 2, text: { en: 'Hold clearly for reading', ta: 'எழுத்துப் புரிதலுக்காக தெளிவாக நிலைநிறுத்தவும்' } }
    ],
    contextOfUse: {
      en: 'Spelling proper nouns, patient names, cities, or medications without a dedicated sign.',
      ta: 'பெயர்கள், ஊர் அல்லது மருந்துகளை எழுத்துக் கூட்டி உணர்த்த.'
    },
    notes: {
      en: 'In ISL two-handed fingerspelling (like BSL), vowels are located on the five fingertips of the non-dominant hand: Thumb = A, Index = E, Middle = I, Ring = O, Pinky = U. Contrast with ASL which uses a one-handed fist.',
      ta: 'ISL-இல் உயிர் எழுத்துக்கள் 5 விரல் நுனிகளில் குறிக்கப்படுகின்றன: கட்டைவிரல்=A, ஆள்காட்டி=E, நடுவிரல்=I, மோதிரவிரல்=O, சுண்டுவிரல்=U. ASL ஒரு கை முறையிலிருந்து முற்றிலும் மாறுபட்டது.'
    },
    verificationStatus: 'verified',
    source: 'ISLRTC Official Fingerspelling Manual & National Institute for the Hearing Handicapped',
    license: 'Creative Commons BY-NC 4.0 / Educational Fair Use',
    linkedISLSignId: 'isl_alpha_a',
    relatedSignIds: ['isl_lib_alpha_b'],
    kinematicSteps: [
      'Open non-dominant hand facing forward',
      'Dominant index finger touches tip of non-dominant thumb',
      'Firm contact demonstrating vowel "A"'
    ]
  },
  {
    id: 'isl_lib_alpha_b',
    languageId: 'isl',
    name: {
      en: 'Letter B (ISL Two-Handed)',
      ta: 'எழுத்து B (இரு கை முறை)',
      nativeScript: 'वर्ण B / எழுத்து B'
    },
    meaning: {
      en: 'Letter B in the two-handed Indian Sign Language fingerspelling system.',
      ta: 'இந்திய சைகை மொழி இரு கை எழுத்துமுறையில் B எழுத்து.'
    },
    category: 'alphabet',
    videoUrl: '/videos/isl/alpha_b.mp4',
    posterUrl: '/posters/isl/alpha_b.svg',
    regionalVariant: 'ISLRTC Fingerspelling Standard',
    captions: [
      { timeInSeconds: 0, text: { en: 'Both hands curve thumb and index into circular C-shapes', ta: 'இரு கைகளின் கட்டைவிரல் மற்றும் ஆள்காட்டி விரலை வட்ட வடிவில் வளைக்கவும்' } },
      { timeInSeconds: 1, text: { en: 'Join circles side by side resembling the lobes of the letter "B" or binoculars', ta: 'இரு வட்டங்களையும் பக்கவாட்டில் இணைத்து B வடிவம் அல்லது தொலைநோக்கி போல் வைக்கவும்' } },
      { timeInSeconds: 2, text: { en: 'Present forward to reader', ta: 'எதிரில் உள்ளவர் படிக்கும் வகையில் காட்டவும்' } }
    ],
    contextOfUse: {
      en: 'Fingerspelling names, blood groups (e.g. B-Positive), or addresses.',
      ta: 'பெயர்கள் அல்லது இரத்தப் பிரிவு (B-Positive) போன்றவற்றை எழுத்துக் கூட்ட.'
    },
    notes: {
      en: 'Two joined circles visually evoke the print lowercase "b" or uppercase "B". Distinct from ASL one-handed 4-finger flat hand.',
      ta: 'இரு இணைந்த வட்டங்கள் B எழுத்தின் வடிவத்தைக் குறிக்கும் இரு கை சைகை.'
    },
    verificationStatus: 'verified',
    source: 'ISLRTC Official Fingerspelling Manual',
    license: 'Creative Commons BY-NC 4.0 / Educational Fair Use',
    linkedISLSignId: 'isl_alpha_b',
    relatedSignIds: ['isl_lib_alpha_a'],
    kinematicSteps: [
      'Both hands curve index and thumbs into rings',
      'Bring both rings together side by side',
      'Hold stable resembling binoculars/B-shape'
    ]
  },
  {
    id: 'isl_lib_num_1',
    languageId: 'isl',
    name: {
      en: 'Number 1',
      ta: 'எண் 1',
      nativeScript: 'संख्या 1 / எண் 1'
    },
    meaning: {
      en: 'Cardinal number one (1), single dose, or one person.',
      ta: 'எண் ஒன்று, ஒரு மாத்திரை அல்லது ஒரு நபர்.'
    },
    category: 'numbers',
    videoUrl: '/videos/isl/num_1.mp4',
    posterUrl: '/posters/isl/num_1.svg',
    regionalVariant: 'ISLRTC National Standard',
    captions: [
      { timeInSeconds: 0, text: { en: 'Extend index finger vertically upward with other fingers folded', ta: 'மற்ற விரல்களை மடித்து ஆள்காட்டி விரலை மட்டும் மேல்நோக்கி நீட்டவும்' } },
      { timeInSeconds: 1, text: { en: 'Palm faces inward toward signer', ta: 'உள்ளங்கை உங்களை நோக்கி இருக்கும்படி வைக்கவும்' } },
      { timeInSeconds: 2, text: { en: 'Hold steady in neutral chest space', ta: 'மார்பின் முன் சீராகப் பிடித்துக் காட்டவும்' } }
    ],
    contextOfUse: {
      en: 'Specifying dosage (1 tablet), asking for 1 bus ticket, or counting.',
      ta: 'ஒரு மாத்திரை அல்லது ஒரு பயணச் சீட்டு என எண்ணிக்கையைக் குறிக்க.'
    },
    notes: {
      en: 'In ISL, counting from 1 to 5 traditionally features the back of the hand facing outward to the receiver.',
      ta: 'ISL-இல் 1 முதல் 5 வரையிலான எண்களில் கையின் பின்புறம் வெளிநோக்கி இருக்கும்.'
    },
    verificationStatus: 'verified',
    source: 'ISLRTC Mathematics & Numerical Sign Compendium',
    license: 'Creative Commons BY-NC 4.0 / Educational Fair Use',
    linkedISLSignId: 'isl_num_1',
    relatedSignIds: ['isl_lib_ticket', 'isl_lib_medicine'],
    kinematicSteps: [
      'Dominant index finger extended upward',
      'Other fingers tucked under thumb',
      'Palm facing inward, back of hand forward'
    ]
  },
  {
    id: 'isl_lib_mother',
    languageId: 'isl',
    name: {
      en: 'Mother / Amma',
      ta: 'தாய் / அம்மா',
      nativeScript: 'माँ / அம்மா'
    },
    meaning: {
      en: 'Mother, maternal caregiver, or female parent.',
      ta: 'தாய், அம்மா அல்லது பெண் குடும்பப் பராமரிப்பாளர்.'
    },
    category: 'family',
    videoUrl: '/videos/isl/mother.mp4',
    posterUrl: '/posters/isl/mother.svg',
    regionalVariant: 'ISLRTC National Standard',
    captions: [
      { timeInSeconds: 0, text: { en: 'Form dominant hand with thumb extended open', ta: 'கட்டை விரலை விரித்து கையை வைக்கவும்' } },
      { timeInSeconds: 1, text: { en: 'Tap side of chin or cheek gently twice', ta: 'நாடி அல்லது கன்னத்தின் ஓரத்தில் இருமுறை மெதுவாகத் தட்டவும்' } },
      { timeInSeconds: 2, text: { en: 'Warm affectionate facial expression', ta: 'பாசமான முகபாவத்துடன்' } }
    ],
    contextOfUse: {
      en: 'Asking hospital or school staff to call a parent/mother in emergency situations.',
      ta: 'அவசர நிலையில் அம்மாவை அழைக்கக் கோர.'
    },
    notes: {
      en: 'In Indian sign linguistics, female kinship signs are positioned on the lower cheek/chin.',
      ta: 'இந்திய சைகை முறையில் பெண் உறவுமுறை சைகைகள் கன்னத்தின் கீழ் பகுதியில் இடம்பெறும்.'
    },
    verificationStatus: 'verified',
    source: 'ISLRTC Family & Kinship Compendium',
    license: 'Creative Commons BY-NC 4.0 / Educational Fair Use',
    linkedPhraseId: 'family_contact',
    linkedISLSignId: 'isl_mother',
    relatedSignIds: ['isl_lib_help', 'isl_lib_namaste'],
    kinematicSteps: [
      'Open hand with extended thumb',
      'Tap tip of thumb to side of chin/cheek twice',
      'Gentle affectionate expression'
    ]
  }
];
