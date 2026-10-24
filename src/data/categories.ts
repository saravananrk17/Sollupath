export interface CategoryMeta {
  id: string;
  name: string;
  translations: Record<string, string>;
  icon: string;
  color: string;
  description: Record<string, string>;
  isSituation?: boolean;
}

export const AAC_CATEGORIES: CategoryMeta[] = [
  {
    id: 'essential',
    name: 'Essential Needs',
    translations: {
      ta: 'அத்தியாவசிய தேவைகள்',
      en: 'Essential Needs',
      hi: 'आवश्यक ज़रूरतें',
      te: 'ముఖ్య అవసరాలు',
      kn: 'ಅಗತ್ಯ ಅಗತ್ಯಗಳು',
      ml: 'അടിയന്തര ആവശ്യങ്ങൾ',
      bn: 'জরুরী চাহিদা',
      mr: 'महत्त्वाच्या गरजा',
      gu: 'જરૂરી જરૂરિયાતો',
      ur: 'بنیادی ضروریات'
    },
    icon: 'HeartHandshake',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: {
      ta: 'உணவு, நீர், ஓய்வு போன்ற உடனடி அடிப்படை தேவைகள்',
      en: 'Immediate survival and comfort needs like water, food, and rest'
    }
  },
  {
    id: 'help',
    name: 'Help & Assistance',
    translations: {
      ta: 'உதவி மற்றும் பாதுகாப்பு',
      en: 'Help & Assistance',
      hi: 'मदद और सहायता',
      te: 'సహాయం',
      kn: 'ಸಹಾಯ',
      ml: 'സഹായം',
      bn: 'সাহায্য',
      mr: 'मदत आणि सहकार्य',
      gu: 'મદદ અને સહાય',
      ur: 'مدد اور معاونت'
    },
    icon: 'AlertTriangle',
    color: 'bg-amber-50 text-amber-700 border-amber-200',
    description: {
      ta: 'அவசர உதவி மற்றும் வழிகாட்டல் தேவைகள்',
      en: 'Urgent requests for assistance and care'
    }
  },
  {
    id: 'medical_discomfort',
    name: 'Pain & Discomfort',
    translations: {
      ta: 'வலி மற்றும் உடல் உபாதை',
      en: 'Pain & Discomfort',
      hi: 'दर्द और बेचैनी',
      te: 'నొప్పి మరియు అస్వస్థత',
      kn: 'ನೋವು ಮತ್ತು ಅಸ್ವಸ್ಥತೆ',
      ml: 'വേദനയും അസ്വസ്ഥതയും',
      bn: 'ব্যথা ও অসুস্থতা',
      mr: 'वेदना आणि अस्वस्थता',
      gu: 'પીડા અને અસ્વસ્થતા',
      ur: 'درد اور تکلیف'
    },
    icon: 'Activity',
    color: 'bg-rose-50 text-rose-700 border-rose-200',
    description: {
      ta: 'வலி, தலைசுற்றல், சோர்வு போன்றவற்றை விளக்குதல்',
      en: 'Describe physical pain, dizziness, or unwell symptoms'
    }
  },
  {
    id: 'questions',
    name: 'Questions',
    translations: {
      ta: 'கேள்விகள்',
      en: 'Questions',
      hi: 'प्रश्न',
      te: 'ప్రశ్నలు',
      kn: 'ಪ್ರಶ್ನೆಗಳು',
      ml: 'ചോദ്യങ്ങൾ',
      bn: 'প্রশ্নাবলী',
      mr: 'प्रश्न',
      gu: 'પ્રશ્નો',
      ur: 'سوالات'
    },
    icon: 'HelpCircle',
    color: 'bg-blue-50 text-blue-700 border-blue-200',
    description: {
      ta: 'எங்கே, எப்போது, எப்படி போன்ற வினாக்கள்',
      en: 'Where, when, how and what inquiries'
    }
  },
  {
    id: 'requests',
    name: 'Requests & Clarity',
    translations: {
      ta: 'கோரிக்கைகள்',
      en: 'Requests & Clarity',
      hi: 'अनुरोध',
      te: 'అభ్యర్థనలు',
      kn: 'ವಿನಂತಿಗಳು',
      ml: 'അഭ്യർത്ഥനകൾ',
      bn: 'অনুরোধ',
      mr: 'विनंत्या',
      gu: 'વિનંતીઓ',
      ur: 'درخواستیں'
    },
    icon: 'MessageSquarePlus',
    color: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    description: {
      ta: 'மெதுவாக பேசவும், எழுதி காட்டவும் கோரிக்கை',
      en: 'Please wait, speak slowly, write it down'
    }
  },
  {
    id: 'caregivers',
    name: 'People & Caregivers',
    translations: {
      ta: 'குடும்பம் & பராமரிப்பாளர்',
      en: 'People & Caregivers',
      hi: 'लोग और देखभालकर्ता',
      te: 'సంరక్షకులు',
      kn: 'ಆರೈಕೆದಾರರು',
      ml: 'കെയർഗിവർമാർ',
      bn: 'পরিচর্যাকারী',
      mr: 'काळजीवाहू',
      gu: 'સંભાળ રાખનાર',
      ur: 'دیکھ بھال کرنے والے'
    },
    icon: 'Users',
    color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    description: {
      ta: 'பராமரிப்பாளரை அழைக்கவும், குடும்ப தொடர்பு',
      en: 'Call family member, nurse, doctor or assistant'
    }
  },
  {
    id: 'yes_no',
    name: 'Yes / No / Feedback',
    translations: {
      ta: 'ஆம் / இல்லை',
      en: 'Yes / No / Feedback',
      hi: 'हाँ / नहीं',
      te: 'అవును / కాదు',
      kn: 'ಹೌದು / ಇಲ್ಲ',
      ml: 'അതെ / അല്ല',
      bn: 'হ্যাঁ / না',
      mr: 'होय / नाही',
      gu: 'હા / ના',
      ur: 'ہاں / نہیں'
    },
    icon: 'CheckCircle2',
    color: 'bg-teal-50 text-teal-700 border-teal-200',
    description: {
      ta: 'விரைவான உறுதிப்படுத்தல் மற்றும் மறுப்பு',
      en: 'Quick confirmation, denial, or appreciation'
    }
  },
  {
    id: 'courtesy',
    name: 'Greetings & Courtesy',
    translations: {
      ta: 'வணக்கம் & மரியாதை',
      en: 'Greetings & Courtesy',
      hi: 'अभिवादन और शिष्टाचार',
      te: 'నమస్కారాలు',
      kn: 'ಶುಭಾಶಯಗಳು',
      ml: 'അഭിവാദ്യങ്ങൾ',
      bn: 'অভিবাদন',
      mr: 'अभिवादन',
      gu: 'શુભેચ્છાઓ',
      ur: 'آداب و تسلیمات'
    },
    icon: 'Smile',
    color: 'bg-purple-50 text-purple-700 border-purple-200',
    description: {
      ta: 'வணக்கம், நன்றி, மன்னிக்கவும்',
      en: 'Hello, thank you, please, and excuse me'
    }
  }
];

export const SITUATION_COLLECTIONS: CategoryMeta[] = [
  {
    id: 'sit_hospital',
    name: 'Hospital & Clinic',
    translations: {
      ta: 'மருத்துவமனை மற்றும் கிளினிக்',
      en: 'Hospital & Clinic',
      hi: 'अस्पताल और क्लिनिक',
      te: 'ఆసుపత్రి మరియు క్లినిక్',
      kn: 'ಆಸ್ಪತ್ರೆ ಮತ್ತು ಕ್ಲಿನಿಕ್',
      ml: 'ആശുപത്രിയും ക്ലിനിക്കും',
      bn: 'হাসপাতাল ও ক্লিনিক',
      mr: 'रुग्णालय आणि दवाखाना',
      gu: 'હોસ્પિટલ અને ક્લિનિક',
      ur: 'ہسپتال اور کلینک'
    },
    icon: 'Stethoscope',
    color: 'bg-rose-50 text-rose-700 border-rose-200',
    description: {
      ta: 'மருத்துவரிடம் வலி, மருந்துகள், மற்றும் உடல் நிலையை தெரிவிக்க',
      en: 'Communicate symptoms, pain levels, and caregiver contacts to medical staff'
    },
    isSituation: true
  },
  {
    id: 'sit_pharmacy',
    name: 'Pharmacy',
    translations: {
      ta: 'மருந்தகம் (பார்மசி)',
      en: 'Pharmacy',
      hi: 'दवा की दुकान (फार्मेसी)',
      te: 'మందుల దుకాణం',
      kn: 'ಔಷಧಿ ಅಂಗಡಿ',
      ml: 'ഫാർമസി',
      bn: 'ওষুধের দোকান',
      mr: 'औषधालय',
      gu: 'મેડિકલ સ્ટોર',
      ur: 'میڈیکل اسٹور'
    },
    icon: 'Pill',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: {
      ta: 'மருந்து விவரங்கள், பயன்பாட்டு வழிமுறைகள் கேட்க',
      en: 'Ask for prescription medicines, dosage explanation, or written directions'
    },
    isSituation: true
  },
  {
    id: 'sit_transport',
    name: 'Public Transport',
    translations: {
      ta: 'பொதுப் போக்குவரத்து',
      en: 'Public Transport',
      hi: 'सार्वजनिक परिवहन (बस/ट्रेन)',
      te: 'ప్రజా రవాణా',
      kn: 'ಸಾರ್ವಜನಿಕ ಸಾರಿಗೆ',
      ml: 'പൊതുഗതാഗതം',
      bn: 'গণপরিবহন',
      mr: 'सार्वजनिक वाहतूक',
      gu: 'જાહેર પરિવહન',
      ur: 'پبلک ٹرانسپورٹ'
    },
    icon: 'Bus',
    color: 'bg-blue-50 text-blue-700 border-blue-200',
    description: {
      ta: 'பேருந்து நிறுத்தம், வழிகாட்டல், இறங்கும் இடம் கேட்க',
      en: 'Request bus stops, ticket help, transit directions, and arrival alert'
    },
    isSituation: true
  },
  {
    id: 'sit_public_service',
    name: 'Public Services & Offices',
    translations: {
      ta: 'அரசு & பொது அலுவலகங்கள்',
      en: 'Public Services & Offices',
      hi: 'सरकारी एवं सार्वजनिक कार्यालय',
      te: 'ప్రభుత్వ కార్యాలయాలు',
      kn: 'ಸರ್ಕಾರಿ ಕಚೇರಿಗಳು',
      ml: 'പൊതു സേവനങ്ങൾ',
      bn: 'সরকারি কার্যালয়',
      mr: 'शासकीय सेवा',
      gu: 'સરકારી સેવાઓ',
      ur: 'سرکاری دفاتر'
    },
    icon: 'Building2',
    color: 'bg-amber-50 text-amber-700 border-amber-200',
    description: {
      ta: 'விண்ணப்ப படிவம் நிரப்ப உதவி, நடைமுறைகள் அறிய',
      en: 'Seek help with official forms, queues, verification, and procedural guidance'
    },
    isSituation: true
  },
  {
    id: 'sit_education',
    name: 'Education & Classroom',
    translations: {
      ta: 'கல்வி மற்றும் வகுப்பறை',
      en: 'Education & Classroom',
      hi: 'शिक्षा और कक्षा',
      te: 'విద్య మరియు తరగతి గది',
      kn: 'ಶಿಕ್ಷಣ ಮತ್ತು ತರಗತಿ',
      ml: 'വിദ്യാഭ്യാസം',
      bn: 'শিক্ষা ও শ্রেণীকক্ষ',
      mr: 'शिक्षण आणि वर्ग',
      gu: 'શિક્ષણ અને શાળા',
      ur: 'تعلیم و کلاس روم'
    },
    icon: 'GraduationCap',
    color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    description: {
      ta: 'பாடக்குறிப்புகள், ஆசிரியர் விளக்கம், கூடுதல் நேரம் கேட்க',
      en: 'Ask teacher to repeat, write instructions, request extra time to respond'
    },
    isSituation: true
  },
  {
    id: 'sit_personal_care',
    name: 'Personal Care & Hygiene',
    translations: {
      ta: 'சுய பராமரிப்பு & தூய்மை',
      en: 'Personal Care & Hygiene',
      hi: 'व्यक्तिगत देखभाल और स्वच्छता',
      te: 'వ్యక్తిగత సంరక్షణ',
      kn: 'ವೈಯಕ್ತಿಕ ಆರೈಕೆ',
      ml: 'വ്യക്തിഗത പരിചരണം',
      bn: 'ব্যক্তিগত পরিচর্যা',
      mr: 'वैयक्तिक काळजी',
      gu: 'વ્યક્તિગત કાળજી',
      ur: 'ذاتی نگہداشت'
    },
    icon: 'Sparkles',
    color: 'bg-purple-50 text-purple-700 border-purple-200',
    description: {
      ta: 'கழிப்பறை பயன்பாடு, ஆடை மாற்றுதல், தனியுரிமை கோரிக்கை',
      en: 'Restroom assistance, temperature adjustment, privacy request with dignity'
    },
    isSituation: true
  },
  {
    id: 'sit_everyday',
    name: 'Everyday Needs',
    translations: {
      ta: 'அன்றாட தேவைகள்',
      en: 'Everyday Needs',
      hi: 'दैनिक आवश्यकताएं',
      te: 'రోజువారీ అవసరాలు',
      kn: 'ದೈನಂದಿನ ಅಗತ್ಯಗಳು',
      ml: 'ദൈനംദിന ആവശ്യങ്ങൾ',
      bn: 'দৈনন্দিন চাহিদা',
      mr: 'दैनंदिन गरजा',
      gu: 'રોજિંદી જરૂરિયાતો',
      ur: 'روزمرہ ضروریات'
    },
    icon: 'Coffee',
    color: 'bg-teal-50 text-teal-700 border-teal-200',
    description: {
      ta: 'குடும்பத்தினர் மற்றும் நண்பர்களுடன் எளிய உரையாடல்',
      en: 'Day-to-day interactions at home, market, and social gatherings'
    },
    isSituation: true
  }
];
