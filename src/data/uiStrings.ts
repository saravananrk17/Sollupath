export interface UIStringDictionary {
  appName: string;
  tagline: string;
  startCommunicating: string;
  quickCommunication: string;
  situations: string;
  favorites: string;
  customPhrases: string;
  accessibilitySettings: string;
  languageSelect: string;
  helpAbout: string;
  welcomeHeading: string;
  welcomeSubtitle: string;
  welcomeInstruction: string;
  noAccountRequired: string;
  privacyStatement: string;
  sentenceBuilderTitle: string;
  clearMessage: string;
  confirmClear: string;
  cancel: string;
  confirm: string;
  speak: string;
  stopSpeaking: string;
  present: string;
  copy: string;
  copied: string;
  undo: string;
  searchPlaceholder: string;
  allCategories: string;
  noPhrasesFound: string;
  addCustomPhrase: string;
  phraseLabel: string;
  categoryLabel: string;
  save: string;
  delete: string;
  edit: string;
  addToMessage: string;
  highContrast: string;
  textSize: string;
  speechRate: string;
  reducedMotion: string;
  soundFeedback: string;
  offlineStatus: string;
  onlineStatus: string;
  ttsUnsupported: string;
  ttsNoVoice: string;
  exitPresentation: string;
  transliterationToggle: string;
  languageCoverage: string;
  approvedPhrases: string;
  direction: 'ltr' | 'rtl';
  islLearn: string;
  islTagline: string;
  islStudio: string;
  islFlashcards: string;
  islPractice: string;
  islQuiz: string;
  islProgress: string;
}

export const UI_LOCALIZATION: Record<string, Partial<UIStringDictionary>> = {
  ta: {
    appName: 'சொல்லுபாதை (SolluPath)',
    tagline: 'உங்கள் குரல், உங்கள் வழி.',
    startCommunicating: 'உரையாடலைத் தொடங்குக',
    quickCommunication: 'விரைவு உரையாடல்',
    situations: 'சூழ்நிலை வாரியான அட்டைகள்',
    favorites: 'விருப்பமான சொற்றொடர்கள்',
    customPhrases: 'தனிப்பயன் சொற்றொடர்கள்',
    accessibilitySettings: 'அணுகல்தன்மை அமைப்புகள்',
    languageSelect: 'மொழியை மாற்றுக',
    helpAbout: 'உதவி மற்றும் வழிகாட்டி',
    welcomeHeading: 'சொல்லுபாதை — உங்கள் உரிமை, உங்கள் பேச்சு',
    welcomeSubtitle: 'பேச்சு சவால்கள் உள்ளவர்களுக்கான உலகத்தரம் வாய்ந்த பன்மொழி உதவித்தொடர்பு தளம்.',
    welcomeInstruction: 'உங்கள் தேவைகளை எளிதாக தெரிவிக்க உதவுவோம்.',
    noAccountRequired: 'பதிவு அல்லது கணக்கு தேவையில்லை. 100% தனியுரிமை பாதுகாப்பு.',
    privacyStatement: 'உங்கள் செய்திகள் மற்றும் சொற்றொடர்கள் உங்கள் சாதனத்திலேயே சேமிக்கப்படுகின்றன.',
    sentenceBuilderTitle: 'செய்தி உருவாக்குமிடம் (Sentence Builder)',
    clearMessage: 'அனைத்தையும் அழிக்கவும்',
    confirmClear: 'செய்தியை அழிக்க நிச்சயமாக விரும்புகிறீர்களா?',
    cancel: 'ரத்து செய்',
    confirm: 'உறுதி செய்',
    speak: 'குரல் ஒலிக்க',
    stopSpeaking: 'நிறுத்து',
    present: 'பெரிய எழுத்தில் காட்டு',
    copy: 'நகலெடு',
    copied: 'நகலெடுக்கப்பட்டது!',
    undo: 'முந்தைய நிலை',
    searchPlaceholder: 'சொற்றொடர்களைத் தேடுங்கள் (எ.கா: உதவி, வலி, தண்ணீர்)...',
    allCategories: 'அனைத்து பிரிவுகளும்',
    noPhrasesFound: 'சொற்றொடர்கள் எதுவும் காணப்படவில்லை.',
    addCustomPhrase: 'புதிய சொற்றொடரைச் சேர்க்க',
    phraseLabel: 'சொற்றொடர் வாசகம்',
    categoryLabel: 'பிரிவு',
    save: 'சேமி',
    delete: 'நீக்கு',
    edit: 'திருத்து',
    addToMessage: 'செய்தியில் சேர்க்க',
    highContrast: 'உயர் மாறுபாடு நிறம் (High Contrast)',
    textSize: 'எழுத்து அளவு',
    speechRate: 'பேசும் வேகம்',
    reducedMotion: 'இயங்குபடங்களை குறைக்கவும்',
    soundFeedback: 'தொடுதல் ஒலி பின்னூட்டம்',
    offlineStatus: 'இணையமற்ற ஆஃப்லைன் பயன்முறை (100% பாதுகாப்பானது)',
    onlineStatus: 'இணைப்பு உள்ளது (Online)',
    ttsUnsupported: 'இந்த உலாவியில் குரல் வாசிப்பு வசதி ஆதரிக்கப்படவில்லை. பெரிய எழுத்து பயன்முறையைப் பயன்படுத்தவும்.',
    ttsNoVoice: 'உங்கள் சாதனத்தில் தமிழ் குரல் இன்னும் நிறுவப்படவில்லை. பெரிய எழுத்து முறையில் காட்டவும்.',
    exitPresentation: 'வெளியேறு',
    transliterationToggle: 'ஆங்கில உச்சரிப்பு வழிகாட்டல்',
    languageCoverage: 'மொழி மொழிபெயர்ப்பு நிறைவு நிலை',
    approvedPhrases: 'சரிபார்க்கப்பட்ட சொற்றொடர்கள்',
    direction: 'ltr',
    islLearn: 'சைகை மொழி (ISL)',
    islTagline: 'கற்க. பயில்க. தொடர்பு கொள்க.',
    islStudio: 'சைகை கற்றல் களம்',
    islFlashcards: 'சைகை அட்டை பயிற்சி',
    islPractice: 'வழிகாட்டப்பட்ட பயிற்சி',
    islQuiz: 'சைகை வினாடி வினா',
    islProgress: 'கற்றல் முன்னேற்றம்'
  },
  en: {
    appName: 'SolluPath',
    tagline: 'Your Voice, Your Way.',
    startCommunicating: 'Start Communicating',
    quickCommunication: 'Quick Communication',
    situations: 'Situations',
    favorites: 'Favorites',
    customPhrases: 'Custom Phrases',
    accessibilitySettings: 'Accessibility Settings',
    languageSelect: 'Change Language',
    helpAbout: 'Help & About',
    welcomeHeading: 'SolluPath — Independent, Dignified Communication',
    welcomeSubtitle: 'Premium AAC assistive platform designed for India, supporting hospitals, transit, and daily needs.',
    welcomeInstruction: "Let's help you express what you need.",
    noAccountRequired: 'No account required. Instant, private, and local-first.',
    privacyStatement: 'Your messages and preferences never leave your personal device.',
    sentenceBuilderTitle: 'Message Builder',
    clearMessage: 'Clear All',
    confirmClear: 'Are you sure you want to clear your composed message?',
    cancel: 'Cancel',
    confirm: 'Confirm',
    speak: 'Speak',
    stopSpeaking: 'Stop',
    present: 'Display Large',
    copy: 'Copy',
    copied: 'Copied!',
    undo: 'Undo',
    searchPlaceholder: 'Search phrases or situations (e.g. pain, water, help)...',
    allCategories: 'All Categories',
    noPhrasesFound: 'No matching phrases found.',
    addCustomPhrase: 'Add Custom Phrase',
    phraseLabel: 'Phrase Text',
    categoryLabel: 'Category',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    addToMessage: 'Add to Message',
    highContrast: 'High Contrast Mode',
    textSize: 'Text Size',
    speechRate: 'Speech Rate',
    reducedMotion: 'Reduce Motion',
    soundFeedback: 'Touch Audio Feedback',
    offlineStatus: 'Offline Ready (Local Storage Active)',
    onlineStatus: 'Online',
    ttsUnsupported: 'Text-to-speech is not supported in this browser. Use Large Display Mode.',
    ttsNoVoice: 'No compatible device voice found for this language. Use Large Display Mode.',
    exitPresentation: 'Exit Display',
    transliterationToggle: 'Show Pronunciation / Transliteration',
    languageCoverage: 'Language Translation Status',
    approvedPhrases: 'Verified Phrases',
    direction: 'ltr',
    islLearn: 'ISL Sign Language',
    islTagline: 'Learn. Practise. Communicate.',
    islStudio: 'Sign Learning Studio',
    islFlashcards: 'Interactive Flashcards',
    islPractice: 'Guided Practice',
    islQuiz: 'Practice Quiz',
    islProgress: 'Learning Progress'
  },
  hi: {
    appName: 'सोल्लुपथ (SolluPath)',
    tagline: 'आपकी आवाज़, आपका तरीका।',
    startCommunicating: 'बातचीत शुरू करें',
    quickCommunication: 'त्वरित संचार',
    situations: 'स्थिति आधारित कार्ड्स',
    favorites: 'पसंदीदा वाक्यांश',
    customPhrases: 'कस्टम वाक्यांश',
    accessibilitySettings: 'अभिगम्यता सेटिंग्स',
    languageSelect: 'भाषा बदलें',
    helpAbout: 'सहायता और परिचय',
    welcomeHeading: 'सोल्लुपथ — गरिमापूर्ण और स्वतंत्र संचार',
    welcomeSubtitle: 'अस्पतालों, यात्रा और दैनिक आवश्यकताओं के लिए बहुभाषी सहायक संचार मंच।',
    welcomeInstruction: 'आइए आपकी आवश्यकताएं व्यक्त करने में मदद करें।',
    noAccountRequired: 'कोई खाता आवश्यक नहीं है। पूर्णतः सुरक्षित और निजी।',
    privacyStatement: 'आपके संदेश केवल आपके डिवाइस पर सुरक्षित रहते हैं।',
    sentenceBuilderTitle: 'वाक्य निर्माता (Message Builder)',
    clearMessage: 'संदेश हटाएं',
    confirmClear: 'क्या आप संदेश को हटाना चाहते हैं?',
    cancel: 'रद्द करें',
    confirm: 'पुष्टि करें',
    speak: 'बोलें',
    stopSpeaking: 'रोकें',
    present: 'बड़े अक्षरों में दिखाएं',
    copy: 'कॉपी करें',
    copied: 'कॉपी हो गया!',
    undo: 'पूर्ववत करें',
    searchPlaceholder: 'खोजें (जैसे: मदद, दर्द, पानी)...',
    allCategories: 'सभी श्रेणियां',
    noPhrasesFound: 'कोई वाक्यांश नहीं मिला।',
    addCustomPhrase: 'नया वाक्यांश जोड़ें',
    phraseLabel: 'वाक्यांश',
    categoryLabel: 'श्रेणी',
    save: 'सहेजें',
    delete: 'हटाएं',
    edit: 'संपादित करें',
    addToMessage: 'संदेश में जोड़ें',
    highContrast: 'उच्च कंट्रास्ट मोड',
    textSize: 'अक्षर का आकार',
    speechRate: 'बोलने की गति',
    reducedMotion: 'गति कम करें',
    soundFeedback: 'स्पर्श ध्वनि प्रतिक्रिया',
    offlineStatus: 'ऑफ़लाइन सक्रिय',
    onlineStatus: 'ऑनलाइन',
    ttsUnsupported: 'स्पीच इस ब्राउज़र में उपलब्ध नहीं है।',
    ttsNoVoice: 'इस भाषा के लिए कोई वॉइस नहीं मिली।',
    exitPresentation: 'बंद करें',
    transliterationToggle: 'उच्चारण गाइड',
    languageCoverage: 'भाषा पूर्णता स्थिति',
    approvedPhrases: 'सत्यापित वाक्यांश',
    direction: 'ltr'
  },
  ur: {
    appName: 'سلوپاتھ (SolluPath)',
    tagline: 'آپ کی آواز، آپ کا انداز۔',
    startCommunicating: 'بات چیت شروع کریں',
    quickCommunication: 'فوری بات چیت',
    situations: 'حالات کے کارڈز',
    favorites: 'پسندیدہ جملے',
    customPhrases: 'اپنی مرضی کے جملے',
    accessibilitySettings: 'رسائی کی ترتیبات',
    languageSelect: 'زبان تبدیل کریں',
    helpAbout: 'مدد اور معلومات',
    welcomeHeading: 'سلوپاتھ — باوقار اور آزاد مواصلات',
    welcomeSubtitle: 'ہسپتالوں، پبلک ٹرانسپورٹ اور روزمرہ کی ضروریات کے لیے کثیر لسانی معاون پلیٹ فارم۔',
    welcomeInstruction: 'آئیے اپنی ضروریات کے اظہار میں مدد کریں۔',
    noAccountRequired: 'کسی اکاؤنٹ کی ضرورت نہیں۔ مکمل طور پر نجی۔',
    privacyStatement: 'آپ کے پیغامات آپ کے اپنے ڈیوائس پر محفوظ رہتے ہیں۔',
    sentenceBuilderTitle: 'پیغام بنانے والا (Message Builder)',
    clearMessage: 'صاف کریں',
    confirmClear: 'کیا آپ پیغام صاف کرنا چاہتے ہیں؟',
    cancel: 'منسوخ کریں',
    confirm: 'تصدیق کریں',
    speak: 'بولیں',
    stopSpeaking: 'روکیں',
    present: 'بڑا دکھائیں',
    copy: 'کاپی کریں',
    copied: 'کاپی ہو گیا!',
    undo: 'پہلے جیسا کریں',
    searchPlaceholder: 'تلاش کریں (مثلاً مدد، درد، پانی)...',
    allCategories: 'تمام اقسام',
    noPhrasesFound: 'کوئی جملہ نہیں ملا۔',
    addCustomPhrase: 'نیا جملہ شامل کریں',
    phraseLabel: 'جملہ',
    categoryLabel: 'قسم',
    save: 'محفوظ کریں',
    delete: 'حذف کریں',
    edit: 'ترمیم کریں',
    addToMessage: 'پیغام میں شامل کریں',
    highContrast: 'زیادہ کنٹراسٹ موڈ',
    textSize: 'حروف کا سائز',
    speechRate: 'بولنے کی رفتار',
    reducedMotion: 'حرکت کم کریں',
    soundFeedback: 'آڈیو فیڈ بیک',
    offlineStatus: 'آف لائن تیار',
    onlineStatus: 'آن لائن',
    ttsUnsupported: 'براؤزر میں آواز کی سہولت دستیاب نہیں ہے۔',
    ttsNoVoice: 'اس زبان کے لیے کوئی آواز انسٹال نہیں ہے۔',
    exitPresentation: 'باہر نکلیں',
    transliterationToggle: 'تلفظ کا رہنما',
    languageCoverage: 'زبان کی تکمیل کی کیفیت',
    approvedPhrases: 'تصدیق شدہ جملے',
    direction: 'rtl'
  }
};

export const getUIStrings = (langId: string): UIStringDictionary => {
  const base = UI_LOCALIZATION['en'] as UIStringDictionary;
  const current = UI_LOCALIZATION[langId] || {};
  return { ...base, ...current };
};
