export interface PhraseItem {
  id: string;
  categoryId: string;
  situations: string[];
  icon: string;
  translations: Record<string, string>;
  transliterations?: Record<string, string>;
  status: 'approved' | 'reviewed' | 'draft';
  keywords: string[];
}

export const AAC_PHRASES: PhraseItem[] = [
  // --- ESSENTIAL CORE & EMERGENCY ---
  {
    id: 'p_help',
    categoryId: 'help',
    situations: ['sit_hospital', 'sit_transport', 'sit_public_service', 'sit_everyday', 'sit_education'],
    icon: 'AlertCircle',
    translations: {
      ta: 'எனக்கு உதவி தேவை.',
      en: 'I need help.',
      hi: 'मुझे मदद चाहिए।',
      te: 'నాకు సహాయం కావాలి.',
      kn: 'ನನಗೆ ಸಹಾಯ ಬೇಕು.',
      ml: 'എനിക്ക് സഹായം വേണം.',
      bn: 'আমার সাহায্য দরকার।',
      mr: 'मला मदतीची गरज आहे.',
      gu: 'મને મદદની જરૂર છે.',
      pa: 'ਮੈਨੂੰ ਮਦਦ ਚਾਹੀਦੀ ਹੈ।',
      ur: 'مجھے مدد کی ضرورت ہے۔',
      or: 'ମୋତେ ସାହାଯ୍ୟ ଦରକାର।'
    },
    transliterations: {
      ta: 'Enakku udhavi thevai.',
      hi: 'Mujhe madad chahiye.',
      te: 'Naaku sahaayam kaavaali.'
    },
    status: 'approved',
    keywords: ['help', 'assist', 'emergency', 'உதவி', 'ஆபத்து', 'मदद', 'സഹായം']
  },
  {
    id: 'p_pain',
    categoryId: 'medical_discomfort',
    situations: ['sit_hospital', 'sit_pharmacy', 'sit_personal_care', 'sit_everyday'],
    icon: 'Activity',
    translations: {
      ta: 'எனக்கு வலிக்கிறது.',
      en: 'I am in pain.',
      hi: 'मुझे दर्द हो रहा है।',
      te: 'నాకు నొప్పిగా ఉంది.',
      kn: 'ನನಗೆ ನೋವಾಗುತ್ತಿದೆ.',
      ml: 'എനിക്ക് വേദനിക്കുന്നു.',
      bn: 'আমার খুব যন্ত্রণা হচ্ছে।',
      mr: 'मला वेदना होत आहेत.',
      gu: 'મને દુખાવો થઈ રહ્યો છે.',
      pa: 'ਮੈਨੂੰ ਦਰਦ ਹੋ ਰਿਹਾ ਹੈ।',
      ur: 'مجھے درد ہو رہا ہے۔',
      or: 'ମୋତେ ଯନ୍ତ୍ରଣା ହେଉଛି।'
    },
    transliterations: {
      ta: 'Enakku valikkiradhu.',
      hi: 'Mujhe dard ho raha hai.',
      te: 'Naaku noppigaa undi.'
    },
    status: 'approved',
    keywords: ['pain', 'hurt', 'ache', 'வலி', 'வேதனை', 'दर्द', 'വേദന']
  },
  {
    id: 'p_unwell',
    categoryId: 'medical_discomfort',
    situations: ['sit_hospital', 'sit_pharmacy', 'sit_everyday', 'sit_transport'],
    icon: 'Frown',
    translations: {
      ta: 'எனக்கு உடல்நிலை சரியில்லை.',
      en: 'I feel unwell.',
      hi: 'मेरी तबीयत ठीक नहीं है।',
      te: 'నాకు ఆరోగ్యం బాగాలేదు.',
      kn: 'ನನ್ನ ಆರೋಗ್ಯ ಸರಿಯಿಲ್ಲ.',
      ml: 'എനിക്ക് സുഖമില്ല.',
      bn: 'আমার শরীর ভালো লাগছে না।',
      mr: 'माझी प्रकृती बरी नाही.',
      gu: 'મારી તબિયત સારી નથી.',
      pa: 'ਮੇਰੀ ਸਿਹਤ ਠੀਕ ਨਹੀਂ ਹੈ।',
      ur: 'میری طبیعت ٹھیک نہیں ہے۔',
      or: 'ମୋ ଦେହ ଭଲ ନାହିଁ।'
    },
    transliterations: {
      ta: 'Enakku udal-nilai sariyillai.',
      hi: 'Meri tabiyat theek nahi hai.'
    },
    status: 'approved',
    keywords: ['sick', 'ill', 'unwell', 'dizzy', 'உடல்நிலை', 'சோர்வு', 'बीमार']
  },
  {
    id: 'p_water',
    categoryId: 'essential',
    situations: ['sit_hospital', 'sit_everyday', 'sit_transport', 'sit_education'],
    icon: 'Droplet',
    translations: {
      ta: 'எனக்கு தண்ணீர் வேண்டும்.',
      en: 'I need water.',
      hi: 'मुझे पानी चाहिए।',
      te: 'నాకు నీరు కావాలి.',
      kn: 'ನನಗೆ ನೀರು ಬೇಕು.',
      ml: 'എനിക്ക് വെള്ളം വേണം.',
      bn: 'আমার জল দরকার।',
      mr: 'मला पाणी हवे आहे.',
      gu: 'મને પાણી જોઈએ છે.',
      pa: 'ਮੈਨੂੰ ਪਾਣੀ ਚਾਹੀਦਾ ਹੈ।',
      ur: 'مجھے پانی چاہیے۔',
      or: 'ମୋତେ ପାଣି ଦରକାର।'
    },
    transliterations: {
      ta: 'Enakku thanneer vendum.',
      hi: 'Mujhe paani chahiye.'
    },
    status: 'approved',
    keywords: ['water', 'drink', 'thirsty', 'தண்ணீர்', 'நீர்', 'पानी', 'വെള്ളം']
  },
  {
    id: 'p_food',
    categoryId: 'essential',
    situations: ['sit_everyday', 'sit_hospital', 'sit_education'],
    icon: 'Utensils',
    translations: {
      ta: 'எனக்கு உணவு வேண்டும்.',
      en: 'I need food.',
      hi: 'मुझे भोजन चाहिए।',
      te: 'నాకు ఆహారం కావాలి.',
      kn: 'ನನಗೆ ಆಹಾರ ಬೇಕು.',
      ml: 'എനിക്ക് ഭക്ഷണം വേണം.',
      bn: 'আমার খাবার দরকার।',
      mr: 'मला जेवण हवे आहे.',
      gu: 'મને ખોરાક જોઈએ છે.',
      pa: 'ਮੈਨੂੰ ਖਾਣਾ ਚਾਹੀਦਾ ਹੈ।',
      ur: 'مجھے کھانا چاہیے۔',
      or: 'ମୋତେ ଖାଦ୍ୟ ଦରକାର।'
    },
    transliterations: {
      ta: 'Enakku unavu vendum.',
      hi: 'Mujhe bhojan chahiye.'
    },
    status: 'approved',
    keywords: ['food', 'eat', 'hungry', 'சாப்பாடு', 'உணவு', 'खाना']
  },
  {
    id: 'p_rest',
    categoryId: 'essential',
    situations: ['sit_hospital', 'sit_everyday', 'sit_personal_care'],
    icon: 'Moon',
    translations: {
      ta: 'நான் ஓய்வெடுக்க வேண்டும்.',
      en: 'I need to rest.',
      hi: 'मुझे आराम करने की ज़रूरत है।',
      te: 'నేను విశ్రాంతి తీసుకోవాలి.',
      kn: 'ನಾನು ವಿಶ್ರಾಂತಿ ಪಡೆಯಬೇಕು.',
      ml: 'എനിക്ക് വിശ്രമിക്കണം.',
      bn: 'আমার বিশ্রাম নেওয়া দরকার।',
      mr: 'मला विश्रांती हवी आहे.',
      gu: 'મારે આરામ કરવાની જરૂર છે.',
      pa: 'ਮੈਨੂੰ ਆਰਾਮ ਕਰਨ ਦੀ ਲੋੜ ਹੈ।',
      ur: 'مجھے آرام کرنے کی ضرورت ہے۔',
      or: 'ମୋତେ ବିଶ୍ରାମ ଦରକାର।'
    },
    transliterations: {
      ta: 'Naan oyvedukka vendum.',
      hi: 'Mujhe aaraam karne ki zaroorat hai.'
    },
    status: 'approved',
    keywords: ['rest', 'tired', 'sleep', 'ஓய்வு', 'தூக்கம்', 'आराम']
  },
  {
    id: 'p_restroom',
    categoryId: 'essential',
    situations: ['sit_hospital', 'sit_transport', 'sit_public_service', 'sit_education', 'sit_everyday'],
    icon: 'DoorClosed',
    translations: {
      ta: 'நான் கழிப்பறைக்கு செல்ல வேண்டும்.',
      en: 'I need to use the restroom.',
      hi: 'मुझे शौचालय जाना है।',
      te: 'నేను వాష్‌రూమ్‌కి వెళ్ళాలి.',
      kn: 'ನಾನು ಶೌಚಾಲಯಕ್ಕೆ ಹೋಗಬೇಕು.',
      ml: 'എനിക്ക് ബാത്ത്റൂമിൽ പോകണം.',
      bn: 'আমি শৌচাগারে যেতে চাই।',
      mr: 'मला शौचालयात जायचे आहे.',
      gu: 'મારે શૌચાલય જવું છે.',
      pa: 'ਮੈਂ ਬਾਥਰੂਮ ਜਾਣਾ ਹੈ।',
      ur: 'مجھے واش روم جانا ہے۔',
      or: 'ମୁଁ ଶୌଚାଳୟ ଯିବାକୁ ଚାହେଁ।'
    },
    transliterations: {
      ta: 'Naan kazhipparaikku sella vendum.',
      hi: 'Mujhe shauchalay jaana hai.'
    },
    status: 'approved',
    keywords: ['restroom', 'toilet', 'bathroom', 'washroom', 'கழிப்பறை', 'शौचालय']
  },
  {
    id: 'p_caregiver',
    categoryId: 'caregivers',
    situations: ['sit_hospital', 'sit_public_service', 'sit_transport', 'sit_everyday'],
    icon: 'PhoneCall',
    translations: {
      ta: 'தயவுசெய்து எனது பராமரிப்பாளரை அழைக்கவும்.',
      en: 'Please call my caregiver.',
      hi: 'कृपया मेरे देखभालकर्ता को बुलाएं।',
      te: 'దయచేసి నా సంరక్షకుడిని పిలవండి.',
      kn: 'ದಯವಿಟ್ಟು ನನ್ನ ಆರೈಕೆದಾರರನ್ನು ಕರೆಯಿರಿ.',
      ml: 'ദയവായി എന്റെ കെയർഗിവറെ വിളിക്കുക.',
      bn: 'দয়া করে আমার অভিভাবককে ডাকুন।',
      mr: 'कृपया माझ्या काळजीवाहू व्यक्तीला बोलवा.',
      gu: 'કૃપા કરીને મારા કેરગીવરને બોલાવો.',
      pa: 'ਕਿਰਪਾ ਕਰਕੇ ਮੇਰੇ ਦੇਖਭਾਲ ਕਰਨ ਵਾਲੇ ਨੂੰ ਬੁਲਾਓ।',
      ur: 'براہ کرم میرے دیکھ بھال کرنے والے کو بلائیں۔',
      or: 'ଦୟାକରି ମୋର ଯତ୍ନ ନେଉଥିବା ବ୍ୟକ୍ତିଙ୍କୁ ଡାକନ୍ତୁ।'
    },
    transliterations: {
      ta: 'Dhayavuseidhu enadhu paraamarippaalarai azhaikkavum.',
      hi: 'Kripya mere dekhbhaalkarta ko bulaayein.'
    },
    status: 'approved',
    keywords: ['caregiver', 'family', 'call', 'doctor', 'பராமரிப்பாளர்', 'அழை', 'परिवार']
  },
  {
    id: 'p_wait',
    categoryId: 'requests',
    situations: ['sit_hospital', 'sit_public_service', 'sit_transport', 'sit_everyday'],
    icon: 'Clock',
    translations: {
      ta: 'தயவுசெய்து காத்திருங்கள்.',
      en: 'Please wait.',
      hi: 'कृपया प्रतीक्षा करें।',
      te: 'దయచేసి వేచి ఉండండి.',
      kn: 'ದಯವಿಟ್ಟು ನಿರೀಕ್ಷಿಸಿ.',
      ml: 'ദയവായി കാത്തിരിക്കൂ.',
      bn: 'দয়া করে অপেক্ষা করুন।',
      mr: 'कृपया थांबा.',
      gu: 'કૃપા કરીને રાહ જુઓ.',
      pa: 'ਕਿਰਪਾ ਕਰਕੇ ਉਡੀਕ ਕਰੋ।',
      ur: 'براہ کرم انتظار کریں۔',
      or: 'ଦୟାକରି ଅପେକ୍ଷା କରନ୍ତୁ।'
    },
    transliterations: {
      ta: 'Dhayavuseidhu kaathirungal.',
      hi: 'Kripya prateeksha karein.'
    },
    status: 'approved',
    keywords: ['wait', 'hold on', 'moment', 'காத்திரு', 'பொறு', 'इंतजार']
  },
  {
    id: 'p_speak_slowly',
    categoryId: 'requests',
    situations: ['sit_hospital', 'sit_pharmacy', 'sit_public_service', 'sit_education'],
    icon: 'Volume1',
    translations: {
      ta: 'தயவுசெய்து மெதுவாக பேசுங்கள்.',
      en: 'Please speak slowly.',
      hi: 'कृपया धीरे बोलें।',
      te: 'దయచేసి నెమ్మదిగా మాట్లాడండి.',
      kn: 'ದಯವಿಟ್ಟು ನಿಧಾನವಾಗಿ ಮಾತನಾಡಿ.',
      ml: 'ദയവായി പതുക്കെ സംസാരിക്കൂ.',
      bn: 'দয়া করে আস্তে কথা বলুন।',
      mr: 'कृपया हळू बोला.',
      gu: 'કૃપા કરીને ધીમેથી બોલો.',
      pa: 'ਕਿਰਪਾ ਕਰਕੇ ਹੌਲੀ ਬੋਲੋ।',
      ur: 'براہ کرم آہستہ بولیں۔',
      or: 'ଦୟାକରି ଧୀରେ କଥାବାର୍ତ୍ତା କରନ୍ତୁ।'
    },
    transliterations: {
      ta: 'Dhayavuseidhu medhuvaaga pesungal.',
      hi: 'Kripya dheere bolein.'
    },
    status: 'approved',
    keywords: ['slow', 'speak slowly', 'மெதுவாக', 'பேசுங்கள்', 'धीरे']
  },
  {
    id: 'p_dont_understand',
    categoryId: 'requests',
    situations: ['sit_hospital', 'sit_pharmacy', 'sit_public_service', 'sit_education'],
    icon: 'HelpCircle',
    translations: {
      ta: 'எனக்கு புரியவில்லை.',
      en: 'I do not understand.',
      hi: 'मुझे समझ नहीं आ रहा है।',
      te: 'నాకు అర్థం కాలేదు.',
      kn: 'ನನಗೆ ಅರ್ಥವಾಗುತ್ತಿಲ್ಲ.',
      ml: 'എനിക്ക് മനസ്സിലാകുന്നില്ല.',
      bn: 'আমি বুঝতে পারছি না।',
      mr: 'मला समजत नाही आहे.',
      gu: 'મને સમજાતું નથી.',
      pa: 'ਮੈਨੂੰ ਸਮਝ ਨਹੀਂ ਆ ਰਹੀ।',
      ur: 'مجھے سمجھ نہیں آ رہا۔',
      or: 'ମୁଁ ବୁଝିପାରୁନାହିଁ।'
    },
    transliterations: {
      ta: 'Enakku puriyavillai.',
      hi: 'Mujhe samajh nahi aa raha hai.'
    },
    status: 'approved',
    keywords: ['understand', 'confused', 'புரியவில்லை', 'தெரியாது', 'समझ']
  },
  {
    id: 'p_repeat',
    categoryId: 'requests',
    situations: ['sit_hospital', 'sit_public_service', 'sit_education'],
    icon: 'RotateCcw',
    translations: {
      ta: 'தயவுசெய்து அதை மீண்டும் கூறுங்கள்.',
      en: 'Please repeat that.',
      hi: 'कृपया इसे दोहराएं।',
      te: 'దయచేసి దాన్ని మళ్ళీ చెప్పండి.',
      kn: 'ದಯವಿಟ್ಟು ಅದನ್ನು ಪುನರಾವರ್ತಿಸಿ.',
      ml: 'ദയവായി അത് ഒന്നുകൂടി പറയൂ.',
      bn: 'দয়া করে আবার বলুন।',
      mr: 'कृपया पुन्हा सांगा.',
      gu: 'કૃપા કરીને ફરીથી કહો.',
      pa: 'ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਦੱਸੋ।',
      ur: 'براہ کرم دوبارہ کہیں۔',
      or: 'ଦୟାକରି ପୁନର୍ବାର କୁହନ୍ତୁ।'
    },
    transliterations: {
      ta: 'Dhayavuseidhu adhai meendum koorungal.',
      hi: 'Kripya ise dohraayein.'
    },
    status: 'approved',
    keywords: ['repeat', 'again', 'மீண்டும்', 'दोहराएं']
  },
  {
    id: 'p_more_time',
    categoryId: 'requests',
    situations: ['sit_hospital', 'sit_public_service', 'sit_education'],
    icon: 'Hourglass',
    translations: {
      ta: 'எனக்கு கூடுதல் நேரம் தேவை.',
      en: 'I need more time.',
      hi: 'मुझे और समय चाहिए।',
      te: 'నాకు కొంత సమయం కావాలి.',
      kn: 'ನನಗೆ ಹೆಚ್ಚಿನ ಸಮಯ ಬೇಕು.',
      ml: 'എനിക്ക് കുറച്ചുകൂടി സമയം വേണം.',
      bn: 'আমার আরও সময় লাগবে।',
      mr: 'मला आणखी वेळ हवा आहे.',
      gu: 'મને વધુ સમય જોઈએ છે.',
      pa: 'ਮੈਨੂੰ ਹੋਰ ਸਮਾਂ ਚਾਹੀਦਾ ਹੈ।',
      ur: 'مجھے مزید وقت چاہیے۔',
      or: 'ମୋତେ ଅଧିକ ସମୟ ଦରକାର।'
    },
    transliterations: {
      ta: 'Enakku kooduthal neram thevai.',
      hi: 'Mujhe aur samay chahiye.'
    },
    status: 'approved',
    keywords: ['time', 'patience', 'நேரம்', 'தாமதம்', 'समय']
  },
  {
    id: 'p_assist_comm',
    categoryId: 'requests',
    situations: ['sit_hospital', 'sit_public_service', 'sit_education', 'sit_everyday'],
    icon: 'MessageCircle',
    translations: {
      ta: 'தயவுசெய்து நான் பேச உதவவும்.',
      en: 'Please help me communicate.',
      hi: 'कृपया बातचीत में मेरी सहायता करें।',
      te: 'దయచేసి నేను మాట్లాడటానికి సహాయం చేయండి.',
      kn: 'ದಯವಿಟ್ಟು ಸಂವಹನ ಮಾಡಲು ನನಗೆ ಸಹಾಯ ಮಾಡಿ.',
      ml: 'സംസാരിക്കാൻ ദയവായി എന്നെ സഹായിക്കൂ.',
      bn: 'দয়া করে যোগাযোগ করতে সাহায্য করুন।',
      mr: 'कृपया मला संवाद साधण्यास मदत करा.',
      gu: 'કૃપા કરીને વાતચીતમાં મને મદદ કરો.',
      pa: 'ਕਿਰਪਾ ਕਰਕੇ ਗੱਲਬਾਤ ਵਿੱਚ ਮੇਰੀ ਮਦਦ ਕਰੋ।',
      ur: 'براہ کرم بات چیت میں میری مدد کریں۔',
      or: 'ଦୟାକରି ମୋତେ କଥା ହେବାରେ ସାହାଯ୍ୟ କରନ୍ତୁ।'
    },
    transliterations: {
      ta: 'Dhayavuseidhu naan pesa udhavavum.',
      hi: 'Kripya baat-cheet mein meri sahayata karein.'
    },
    status: 'approved',
    keywords: ['communicate', 'talk', 'assist', 'பேச', 'உரையாடல்', 'बातचीत']
  },
  {
    id: 'p_yes',
    categoryId: 'yes_no',
    situations: ['sit_everyday', 'sit_hospital', 'sit_public_service', 'sit_education'],
    icon: 'Check',
    translations: {
      ta: 'ஆம்.',
      en: 'Yes.',
      hi: 'हाँ।',
      te: 'అవును.',
      kn: 'ಹೌದು.',
      ml: 'അതെ.',
      bn: 'হ্যাঁ।',
      mr: 'होय.',
      gu: 'હા.',
      pa: 'ਹਾਂ।',
      ur: 'ہاں۔',
      or: 'ହଁ।'
    },
    transliterations: {
      ta: 'Aam.',
      hi: 'Haan.'
    },
    status: 'approved',
    keywords: ['yes', 'agree', 'correct', 'ஆம்', 'சரி', 'हाँ']
  },
  {
    id: 'p_no',
    categoryId: 'yes_no',
    situations: ['sit_everyday', 'sit_hospital', 'sit_public_service', 'sit_education'],
    icon: 'X',
    translations: {
      ta: 'இல்லை.',
      en: 'No.',
      hi: 'नहीं।',
      te: 'కాదు.',
      kn: 'ಇಲ್ಲ.',
      ml: 'അല്ല.',
      bn: 'না।',
      mr: 'नाही.',
      gu: 'ના.',
      pa: 'ਨਹੀਂ।',
      ur: 'نہیں۔',
      or: 'ନାହିଁ।'
    },
    transliterations: {
      ta: 'Illai.',
      hi: 'Nahi.'
    },
    status: 'approved',
    keywords: ['no', 'disagree', 'stop', 'இல்லை', 'வேண்டாம்', 'नहीं']
  },
  {
    id: 'p_thank_you',
    categoryId: 'courtesy',
    situations: ['sit_everyday', 'sit_hospital', 'sit_public_service', 'sit_transport', 'sit_pharmacy', 'sit_education'],
    icon: 'Heart',
    translations: {
      ta: 'மிக்க நன்றி.',
      en: 'Thank you.',
      hi: 'बहुत धन्यवाद।',
      te: 'ధన్యవాదాలు.',
      kn: 'ಧನ್ಯವಾದಗಳು.',
      ml: 'വളരെ നന്ദി.',
      bn: 'অনেক ধন্যবাদ।',
      mr: 'खूप खूप धन्यवाद.',
      gu: 'ખૂબ ખૂબ આભાર.',
      pa: 'ਬਹੁਤ ਧੰਨਵਾਦ।',
      ur: 'بہت شکریہ۔',
      or: 'ଅଶେଷ ଧନ୍ୟବାଦ।'
    },
    transliterations: {
      ta: 'Mikka nandri.',
      hi: 'Bahut dhanyavaad.'
    },
    status: 'approved',
    keywords: ['thank you', 'thanks', 'gratitude', 'நன்றி', 'வணக்கம்', 'धन्यवाद']
  },

  // --- HOSPITAL & CLINIC SPECIFIC ---
  {
    id: 'p_sit_down',
    categoryId: 'medical_discomfort',
    situations: ['sit_hospital', 'sit_transport', 'sit_public_service'],
    icon: 'Armchair',
    translations: {
      ta: 'நான் அமர வேண்டும்.',
      en: 'I need to sit down.',
      hi: 'मुझे बैठने की ज़रूरत है।',
      te: 'నేను కూర్చోవాలి.',
      kn: 'ನಾನು ಕುಳಿತುಕೊಳ್ಳಬೇಕು.',
      ml: 'എനിക്ക് ഇരിക്കണം.',
      bn: 'আমি বসতে চাই।',
      mr: 'मला बसायचे आहे.',
      gu: 'મારે બેસવું છે.',
      pa: 'ਮੈਨੂੰ ਬੈਠਣ ਦੀ ਲੋੜ ਹੈ।',
      ur: 'مجھے بیٹھنے کی ضرورت ہے۔',
      or: 'ମୋତେ ବସିବାକୁ ଦରକାର।'
    },
    transliterations: {
      ta: 'Naan amara vendum.',
      hi: 'Mujhe baithne ki zaroorat hai.'
    },
    status: 'approved',
    keywords: ['sit', 'chair', 'rest', 'அமர', 'உட்கார', 'बैठना']
  },
  {
    id: 'p_explain_something',
    categoryId: 'requests',
    situations: ['sit_hospital', 'sit_public_service', 'sit_education'],
    icon: 'FileText',
    translations: {
      ta: 'நான் ஒன்றை விளக்க வேண்டும்.',
      en: 'I need to explain something.',
      hi: 'मुझे कुछ समझाना है।',
      te: 'నేను ఏదో వివరించాలి.',
      kn: 'ನಾನು ಏನನ್ನಾದರೂ ವಿವರಿಸಬೇಕು.',
      ml: 'എനിക്ക് എന്തെങ്കിലും വിശദീകരിക്കണം.',
      bn: 'আমি কিছু বোঝাতে চাই।',
      mr: 'मला काहीतरी सांगायचे आहे.',
      gu: 'મારે કંઈક સમજાવવું છે.',
      pa: 'ਮੈਂ ਕੁਝ ਸਮਝਾਉਣਾ ਹੈ।',
      ur: 'مجھے کچھ بتانا ہے۔',
      or: 'ମୁଁ କିଛି ବୁଝାଇବାକୁ ଚାହେଁ।'
    },
    transliterations: {
      ta: 'Naan ondrai vilakka vendum.',
      hi: 'Mujhe kuch samjhana hai.'
    },
    status: 'approved',
    keywords: ['explain', 'tell', 'விளக்க', 'சொல்ல', 'समझाना']
  },
  {
    id: 'p_write_it_down',
    categoryId: 'requests',
    situations: ['sit_hospital', 'sit_pharmacy', 'sit_public_service', 'sit_education'],
    icon: 'PenTool',
    translations: {
      ta: 'தயவுசெய்து அதை எழுதி காட்டுங்கள்.',
      en: 'Please write the instructions.',
      hi: 'कृपया निर्देश लिखकर दें।',
      te: 'దయచేసి సూచనలను రాయండి.',
      kn: 'ದಯವಿಟ್ಟು ಸೂಚನೆಗಳನ್ನು ಬರೆಯಿರಿ.',
      ml: 'ദയവായി നിർദ്ദേശങ്ങൾ എഴുതി നൽകൂ.',
      bn: 'দয়া করে লিখে দিন।',
      mr: 'कृपया सूचना लिहून द्या.',
      gu: 'કૃપા કરીને સૂચનાઓ લખી આપો.',
      pa: 'ਕਿਰਪਾ ਕਰਕੇ ਲਿਖ ਕੇ ਦਿਓ।',
      ur: 'براہ کرم ہدایات لکھ دیں۔',
      or: 'ଦୟାକରି ଲେଖି ଜଣାନ୍ତୁ।'
    },
    transliterations: {
      ta: 'Dhayavuseidhu adhai ezhudhi kaattungal.',
      hi: 'Kripya nirdesh likhkar dein.'
    },
    status: 'approved',
    keywords: ['write', 'paper', 'note', 'எழுதி', 'எழுத்து', 'लिखना']
  },

  // --- PHARMACY SPECIFIC ---
  {
    id: 'p_find_medicine',
    categoryId: 'requests',
    situations: ['sit_pharmacy', 'sit_hospital'],
    icon: 'Pill',
    translations: {
      ta: 'இந்த மருந்தை கண்டுபிடிக்க உதவவும்.',
      en: 'I need help finding my medicine.',
      hi: 'मुझे अपनी दवा ढूंढने में मदद चाहिए।',
      te: 'నా మందులు కనుగొనడానికి సహాయం కావాలి.',
      kn: 'ನನ್ನ ಔಷಧಿಯನ್ನು ಹುಡುಕಲು ಸಹಾಯ ಬೇಕು.',
      ml: 'എന്റെ മരുന്ന് കണ്ടെത്താൻ സഹായിക്കൂ.',
      bn: 'আমার ওষুধ খুঁজতে সাহায্য করুন।',
      mr: 'माझे औषध शोधण्यासाठी मदत हवी आहे.',
      gu: 'મારી દવા શોધવામાં મને મદદ જોઈએ છે.',
      pa: 'ਮੇਰੀ ਦਵਾਈ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਕਰੋ।',
      ur: 'مجھے اپنی دوا تلاش کرنے میں مدد چاہیے۔',
      or: 'ମୋର ଔଷଧ ଖୋଜିବାରେ ସାହାଯ୍ୟ କରନ୍ତୁ।'
    },
    transliterations: {
      ta: 'Indha marundhai kandupidikka udhavavum.',
      hi: 'Mujhe apni dawa dhoondhne mein madad chahiye.'
    },
    status: 'approved',
    keywords: ['medicine', 'tablet', 'pharmacy', 'மருந்து', 'மாத்திரை', 'दवा']
  },
  {
    id: 'p_explain_dosage',
    categoryId: 'requests',
    situations: ['sit_pharmacy', 'sit_hospital'],
    icon: 'HelpCircle',
    translations: {
      ta: 'மருந்து சாப்பிடும் முறையை விளக்குங்கள்.',
      en: 'Please explain these instructions.',
      hi: 'कृपया इन निर्देशों को समझाएं।',
      te: 'దయచేసి ఈ సూచనలను వివరించండి.',
      kn: 'ದಯವಿಟ್ಟು ಈ ಸೂಚನೆಗಳನ್ನು ವಿವರಿಸಿ.',
      ml: 'ഈ നിർദ്ദേശങ്ങൾ ദയവായി വിശദീകരിക്കൂ.',
      bn: 'দয়া করে নিয়মগুলি বুঝিয়ে দিন।',
      mr: 'कृपया सूचना समजून सांगा.',
      gu: 'કૃપા કરીને આ સૂચનાઓ સમજાવો.',
      pa: 'ਕਿਰਪਾ ਕਰਕੇ ਨਿਰਦੇਸ਼ ਸਮਝਾਓ।',
      ur: 'براہ کرم ان ہدایات کی وضاحت کریں۔',
      or: 'ଦୟାକରି ଏହି ନିର୍ଦ୍ଦେଶଗୁଡ଼ିକ ବୁଝାନ୍ତୁ।'
    },
    transliterations: {
      ta: 'Marundu saappidum muraiyai vilakkungal.',
      hi: 'Kripya in nirdeshon ko samjhaayein.'
    },
    status: 'approved',
    keywords: ['dosage', 'instructions', 'how to take', 'சாப்பிடும் முறை', 'दवा का तरीका']
  },

  // --- PUBLIC TRANSPORT SPECIFIC ---
  {
    id: 'p_find_stop',
    categoryId: 'questions',
    situations: ['sit_transport'],
    icon: 'MapPin',
    translations: {
      ta: 'இந்த பேருந்து நிறுத்தத்தை கண்டுபிடிக்க உதவவும்.',
      en: 'Please help me find this stop.',
      hi: 'कृपया मुझे यह स्टॉप ढूंढने में मदद करें।',
      te: 'దయచేసి ఈ స్టాప్ కనుగొనడానికి సహాయం చేయండి.',
      kn: 'ದಯವಿಟ್ಟು ಈ ನಿಲ್ದಾಣ ಹುಡುಕಲು ಸಹಾಯ ಮಾಡಿ.',
      ml: 'ഈ സ്റ്റോപ്പ് കണ്ടെത്താൻ ദയവായി സഹായിക്കൂ.',
      bn: 'দয়া করে এই স্টপটি খুঁজে দিতে সাহায্য করুন।',
      mr: 'कृपया मला हा थांबा शोधण्यात मदत करा.',
      gu: 'કૃપા કરીને આ સ્ટોપ શોધવામાં મને મદદ કરો.',
      pa: 'ਕਿਰਪਾ ਕਰਕੇ ਇਹ ਸਟਾਪ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਕਰੋ।',
      ur: 'براہ کرم مجھے یہ اسٹاپ تلاش کرنے میں مدد کریں۔',
      or: 'ଦୟାକରି ଏହି ଷ୍ଟପ୍ ଖୋଜିବାରେ ସାହାଯ୍ୟ କରନ୍ତୁ।'
    },
    transliterations: {
      ta: 'Indha perundhu niruthathai kandupidikka udhavavum.',
      hi: 'Kripya mujhe yeh stop dhoondhne mein madad karein.'
    },
    status: 'approved',
    keywords: ['bus stop', 'train station', 'location', 'பேருந்து நிறுத்தம்', 'बस स्टॉप']
  },
  {
    id: 'p_where_bus_going',
    categoryId: 'questions',
    situations: ['sit_transport'],
    icon: 'Bus',
    translations: {
      ta: 'இந்த பேருந்து எங்கு செல்கிறது?',
      en: 'Where is this bus going?',
      hi: 'यह बस कहाँ जा रही है?',
      te: 'ఈ బస్సు ఎక్కడికి వెళ్తోంది?',
      kn: 'ಈ ಬಸ್ ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತಿದೆ?',
      ml: 'ഈ ബസ്സ് എങ്ങോട്ടാണ് പോകുന്നത്?',
      bn: 'এই বাসটি কোথায় যাচ্ছে?',
      mr: 'ही बस कुठे जात आहे?',
      gu: 'આ બસ ક્યાં જાય છે?',
      pa: 'ਇਹ ਬੱਸ ਕਿੱਥੇ ਜਾ ਰਹੀ ਹੈ?',
      ur: 'یہ بس کہاں جا رہی ہے؟',
      or: 'ଏହି ବସ୍ କେଉଁଠାକୁ ଯାଉଛି?'
    },
    transliterations: {
      ta: 'Indha perundhu engu selgiradhu?',
      hi: 'Yeh bus kahaan jaa rahi hai?'
    },
    status: 'approved',
    keywords: ['bus destination', 'where', 'எங்கு செல்கிறது', 'बस कहाँ']
  },
  {
    id: 'p_alert_arrival',
    categoryId: 'requests',
    situations: ['sit_transport'],
    icon: 'Bell',
    translations: {
      ta: 'இந்த நிறுத்தம் வந்ததும் தயவுசெய்து சொல்லுங்கள்.',
      en: 'Please tell me when we reach this stop.',
      hi: 'स्टॉप आने पर कृपया मुझे बताएं।',
      te: 'స్టాప్ రాగానే దయచేసి నాకు చెప్పండి.',
      kn: 'ನಿಲ್ದಾಣ ಬಂದಾಗ ದಯವಿಟ್ಟು ನನಗೆ ತಿಳಿಸಿ.',
      ml: 'സ്റ്റോപ്പ് എത്തുമ്പോൾ ദയവായി പറയൂ.',
      bn: 'স্টপে পৌঁছালে দয়া করে জানাবেন।',
      mr: 'थांबा आल्यावर कृपया मला सांगा.',
      gu: 'જ્યારે સ્ટોપ આવે ત્યારે કૃપા કરીને જણાવો.',
      pa: 'ਸਟਾਪ ਆਉਣ ਤੇ ਕਿਰਪਾ ਕਰਕੇ ਦੱਸੋ।',
      ur: 'اسٹاپ آنے پر براہ کرم بتائیں۔',
      or: 'ଷ୍ଟପ୍ ଆସିଲେ ଦୟାକରି ଜଣାଇବେ।'
    },
    transliterations: {
      ta: 'Indha nirutham vandhadhum dhayavuseidhu sollungal.',
      hi: 'Stop aane par kripya mujhe batayein.'
    },
    status: 'approved',
    keywords: ['arrival', 'reach', 'alert', 'நிறுத்தம் வந்ததும்', 'पहुंचना']
  },

  // --- PUBLIC SERVICES / GOVT OFFICES ---
  {
    id: 'p_form_help',
    categoryId: 'requests',
    situations: ['sit_public_service', 'sit_education'],
    icon: 'FileSpreadsheet',
    translations: {
      ta: 'இந்த படிவத்தை நிரப்ப உதவி வேண்டும்.',
      en: 'I need help with this form.',
      hi: 'मुझे यह फॉर्म भरने में मदद चाहिए।',
      te: 'ఈ ఫారమ్ నింపడానికి సహాయం కావాలి.',
      kn: 'ಈ ಫಾರ್ಮ್ ತುಂಬಲು ಸಹಾಯ ಬೇಕು.',
      ml: 'ഈ ഫോം പൂരിപ്പിക്കാൻ സഹായം വേണം.',
      bn: 'এই ফর্মটি পূরণে সাহায্য দরকার।',
      mr: 'हा अर्ज भरण्यासाठी मदत हवी आहे.',
      gu: 'આ ફોર્મ ભરવામાં મને મદદ જોઈએ છે.',
      pa: 'ਇਹ ਫਾਰਮ ਭਰਨ ਵਿੱਚ ਮਦਦ ਚਾਹੀਦੀ ਹੈ।',
      ur: 'مجھے یہ فارم بھرنے میں مدد چاہیے۔',
      or: 'ଏହି ଫର୍ମ ପୂରଣ କରିବାରେ ସାହାଯ୍ୟ ଦରକାର।'
    },
    transliterations: {
      ta: 'Indha padivathai nirappa udhavi vendum.',
      hi: 'Mujhe yeh form bharne mein madad chahiye.'
    },
    status: 'approved',
    keywords: ['form', 'application', 'office', 'படிவம்', 'விண்ணப்பம்', 'फॉर्म']
  },
  {
    id: 'p_next_step',
    categoryId: 'questions',
    situations: ['sit_public_service', 'sit_hospital'],
    icon: 'ArrowRightCircle',
    translations: {
      ta: 'அடுத்த கட்ட நடவடிக்கை என்னவென்று விளக்குங்கள்.',
      en: 'Please explain the next step.',
      hi: 'कृपया अगला कदम बताएं।',
      te: 'దయచేసి తదుపరి దశను వివరించండి.',
      kn: 'ದಯವಿಟ್ಟು ಮುಂದಿನ ಹಂತವನ್ನು ವಿವರಿಸಿ.',
      ml: 'അടുത്ത ഘട്ടം എന്താണെന്ന് വിശദീകരിക്കൂ.',
      bn: 'পরবর্তী পদক্ষেপ কি তা জানান।',
      mr: 'कृपया पुढील पायरी सांगा.',
      gu: 'કૃપા કરીને આગળનું પગલું જણાવો.',
      pa: 'ਕਿਰਪਾ ਕਰਕੇ ਅਗਲਾ ਕਦਮ ਦੱਸੋ।',
      ur: 'براہ کرم اگلا مرحلہ بتائیں۔',
      or: 'ଦୟାକରି ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ ବୁଝାନ୍ତୁ।'
    },
    transliterations: {
      ta: 'Adutha katta nadavadikkai ennavendru vilakkungal.',
      hi: 'Kripya agla kadam batayein.'
    },
    status: 'approved',
    keywords: ['next step', 'procedure', 'அடுத்தது', 'நடவடிக்கை', 'अगला कदम']
  },

  // --- PERSONAL CARE & DIGNITY ---
  {
    id: 'p_need_privacy',
    categoryId: 'requests',
    situations: ['sit_personal_care', 'sit_hospital', 'sit_everyday'],
    icon: 'Shield',
    translations: {
      ta: 'எனக்கு தனியுரிமை வேண்டும்.',
      en: 'I need some privacy please.',
      hi: 'कृपया मुझे कुछ एकांत दें।',
      te: 'నాకు కొంత గోప్యత కావాలి.',
      kn: 'ನನಗೆ ಸ್ವಲ್ಪ ಏಕಾಂತತೆ ಬೇಕು.',
      ml: 'എനിക്ക് അല്പം സ്വകാര്യത വേണം.',
      bn: 'আমার একটু নিভৃত সময় দরকার।',
      mr: 'मला थोडा एकांत हवा आहे.',
      gu: 'મને થોડી એકાંતતા જોઈએ છે.',
      pa: 'ਮੈਨੂੰ ਥੋੜ੍ਹੀ ਨਿੱਜਤਾ ਚਾਹੀਦੀ ਹੈ।',
      ur: 'مجھے تھوڑی تنہائی چاہیے۔',
      or: 'ମୋତେ ଟିକେ ନିରୋଳା ସମୟ ଦରକାର।'
    },
    transliterations: {
      ta: 'Enakku thaniyurimai vendum.',
      hi: 'Kripya mujhe kuch ekaant dein.'
    },
    status: 'approved',
    keywords: ['privacy', 'alone', 'dignity', 'தனியுரிமை', 'ஏகாந்தம்', 'एकांत']
  },
  {
    id: 'p_cold_hot',
    categoryId: 'medical_discomfort',
    situations: ['sit_personal_care', 'sit_hospital', 'sit_everyday'],
    icon: 'Thermometer',
    translations: {
      ta: 'எனக்கு மிகவும் குளிர்கிறது அல்லது சூடாக உள்ளது.',
      en: 'I feel too cold or too hot.',
      hi: 'मुझे बहुत ठंड या बहुत गर्मी लग रही है।',
      te: 'నాకు చాలా చల్లగా లేదా వేడిగా ఉంది.',
      kn: 'ನನಗೆ ತುಂಬಾ ಚಳಿ ಅಥವಾ ಸೆಕೆ ಅನಿಸುತ್ತಿದೆ.',
      ml: 'എനിക്ക് നല്ല തണുപ്പ് അല്ലെങ്കിൽ ചൂട് തോന്നുന്നു.',
      bn: 'আমার খুব ঠান্ডা বা গরম লাগছে।',
      mr: 'मला खूप थंडी किंवा उष्णता जाणवत आहे.',
      gu: 'મને ખૂબ ઠંડી કે ગરમી લાગે છે.',
      pa: 'ਮੈਨੂੰ ਬਹੁਤ ਠੰਢ ਜਾਂ ਗਰਮੀ ਲੱਗ ਰਹੀ ਹੈ।',
      ur: 'مجھے بہت سردی یا گرمی لگ رہی ہے۔',
      or: 'ମୋତେ ବହୁତ ଥଣ୍ଡା ବା ଗରମ ଲାଗୁଛି।'
    },
    transliterations: {
      ta: 'Enakku migavum kulirgiradhu alladhu soodaaga ulladhu.',
      hi: 'Mujhe bahut thand ya garmi lag rahi hai.'
    },
    status: 'approved',
    keywords: ['cold', 'hot', 'temperature', 'fan', 'blanket', 'குளிர்', 'சூடு', 'ठंड', 'गर्मी']
  }
];
