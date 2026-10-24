import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { storageService, UserSettings, CustomPhrase } from '../services/storageService';
import { speechService } from '../services/speechService';
import { LanguageMeta, getLanguageById } from '../data/languages';
import { AAC_PHRASES } from '../data/phrases';
import { ISLSignItem, getISLSignById } from '../data/isl/signs';
import { UIStringDictionary, getUIStrings } from '../data/uiStrings';

export type AppView =
  | 'welcome'
  | 'home'
  | 'quick'
  | 'situations'
  | 'favorites'
  | 'custom'
  | 'settings'
  | 'languages'
  | 'help'
  | 'presentation'
  | 'isl_dashboard'
  | 'isl_studio'
  | 'isl_flashcards'
  | 'isl_practice'
  | 'isl_quiz'
  | 'isl_progress';

interface AppContextType {
  settings: UserSettings;
  updateSettings: (partial: Partial<UserSettings>) => void;
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  selectedSituation: string | null;
  setSelectedSituation: (id: string | null) => void;
  selectedCategory: string | null;
  setSelectedCategory: (id: string | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedPhraseIds: string[];
  manualMessageText: string;
  isManualEdited: boolean;
  addPhraseToMessage: (phraseId: string) => void;
  removePhraseAt: (index: number) => void;
  movePhrase: (index: number, direction: 'up' | 'down') => void;
  clearMessage: () => void;
  updateManualText: (text: string) => void;
  undoMessage: () => void;
  favorites: string[];
  toggleFavorite: (phraseId: string) => void;
  customPhrases: CustomPhrase[];
  addCustomPhrase: (text: string, categoryId: string) => void;
  deleteCustomPhrase: (id: string) => void;
  ui: UIStringDictionary;
  activeLanguage: LanguageMeta;
  communicationLanguage: LanguageMeta;
  assembledText: string;
  assembledTransliteration: string;
  isSpeaking: boolean;
  isOnline: boolean;
  hasVoiceForLanguage: boolean;
  speakMessage: (customText?: string) => void;
  stopSpeech: () => void;
  playFeedback: () => void;
  // ISL Module additions
  activeISLSignId: string | null;
  setActiveISLSignId: (id: string | null) => void;
  activeISLModalSign: ISLSignItem | null;
  setActiveISLModalSign: (sign: ISLSignItem | null) => void;
  viewISLSign: (signId: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<UserSettings>(() => storageService.getSettings());
  const [currentView, setCurrentView] = useState<AppView>('welcome');
  const [selectedSituation, setSelectedSituation] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [selectedPhraseIds, setSelectedPhraseIds] = useState<string[]>(() => storageService.getDraftMessage());
  const [history, setHistory] = useState<string[][]>([]);
  const [manualMessageText, setManualMessageText] = useState<string>('');
  const [isManualEdited, setIsManualEdited] = useState<boolean>(false);

  const [favorites, setFavorites] = useState<string[]>(() => storageService.getFavorites());
  const [customPhrases, setCustomPhrases] = useState<CustomPhrase[]>(() => storageService.getCustomPhrases());

  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isOnline, setIsOnline] = useState<boolean>(typeof navigator !== 'undefined' ? navigator.onLine : true);

  // ISL Module states
  const [activeISLSignId, setActiveISLSignId] = useState<string | null>(null);
  const [activeISLModalSign, setActiveISLModalSign] = useState<ISLSignItem | null>(null);

  const viewISLSign = useCallback((signId: string) => {
    const s = getISLSignById(signId);
    if (s) {
      setActiveISLModalSign(s);
    }
  }, []);

  // Sync online status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Sync settings & HTML attributes (contrast, font size, dir)
  useEffect(() => {
    storageService.saveSettings(settings);

    const root = document.documentElement;
    const body = document.body;

    // High contrast
    if (settings.highContrast) {
      body.classList.add('high-contrast');
    } else {
      body.classList.remove('high-contrast');
    }

    // Font size
    body.classList.remove('font-size-standard', 'font-size-large', 'font-size-xlarge');
    body.classList.add(`font-size-${settings.textSize}`);

    // Direction (RTL for Urdu, Kashmiri, Sindhi)
    const lang = getLanguageById(settings.interfaceLanguage);
    root.setAttribute('dir', lang.direction);
    root.setAttribute('lang', lang.id);
  }, [settings]);

  // Sync favorites
  useEffect(() => {
    storageService.saveFavorites(favorites);
  }, [favorites]);

  // Sync custom phrases
  useEffect(() => {
    storageService.saveCustomPhrases(customPhrases);
  }, [customPhrases]);

  // Sync draft message
  useEffect(() => {
    storageService.saveDraftMessage(selectedPhraseIds);
  }, [selectedPhraseIds]);

  const updateSettings = useCallback((partial: Partial<UserSettings>) => {
    setSettings(prev => ({ ...prev, ...partial }));
  }, []);

  const activeLanguage = useMemo(() => {
    return getLanguageById(settings.interfaceLanguage);
  }, [settings.interfaceLanguage]);

  const communicationLanguage = useMemo(() => {
    return getLanguageById(settings.communicationLanguage);
  }, [settings.communicationLanguage]);

  const ui = useMemo(() => {
    return getUIStrings(settings.interfaceLanguage);
  }, [settings.interfaceLanguage]);

  const playFeedback = useCallback(() => {
    if (settings.soundFeedback) {
      speechService.playFeedbackBeep();
    }
  }, [settings.soundFeedback]);

  // Assembled message from phrase IDs in communication language
  const { assembledText, assembledTransliteration } = useMemo(() => {
    if (isManualEdited) {
      return { assembledText: manualMessageText, assembledTransliteration: '' };
    }

    if (selectedPhraseIds.length === 0) {
      return { assembledText: '', assembledTransliteration: '' };
    }

    const commLang = settings.communicationLanguage;
    const textPieces: string[] = [];
    const transPieces: string[] = [];

    for (const id of selectedPhraseIds) {
      // Check custom phrases first
      const custom = customPhrases.find(c => c.id === id);
      if (custom) {
        textPieces.push(custom.text);
        continue;
      }

      // Check curated phrases
      const phrase = AAC_PHRASES.find(p => p.id === id);
      if (phrase) {
        const text = phrase.translations[commLang] || phrase.translations['en'] || phrase.translations['ta'] || '';
        textPieces.push(text);

        if (phrase.transliterations && phrase.transliterations[commLang]) {
          transPieces.push(phrase.transliterations[commLang]);
        }
      }
    }

    return {
      assembledText: textPieces.join(' '),
      assembledTransliteration: transPieces.join(' ')
    };
  }, [selectedPhraseIds, isManualEdited, manualMessageText, settings.communicationLanguage, customPhrases]);

  const addPhraseToMessage = useCallback((phraseId: string) => {
    playFeedback();
    setHistory(prev => [...prev, [...selectedPhraseIds]]);
    setSelectedPhraseIds(prev => [...prev, phraseId]);
    setIsManualEdited(false);
  }, [selectedPhraseIds, playFeedback]);

  const removePhraseAt = useCallback((index: number) => {
    playFeedback();
    setHistory(prev => [...prev, [...selectedPhraseIds]]);
    setSelectedPhraseIds(prev => prev.filter((_, i) => i !== index));
    setIsManualEdited(false);
  }, [selectedPhraseIds, playFeedback]);

  const movePhrase = useCallback((index: number, direction: 'up' | 'down') => {
    playFeedback();
    const newIdx = direction === 'up' ? index - 1 : index + 1;
    if (newIdx < 0 || newIdx >= selectedPhraseIds.length) return;

    setHistory(prev => [...prev, [...selectedPhraseIds]]);
    const copy = [...selectedPhraseIds];
    const temp = copy[index];
    copy[index] = copy[newIdx];
    copy[newIdx] = temp;
    setSelectedPhraseIds(copy);
    setIsManualEdited(false);
  }, [selectedPhraseIds, playFeedback]);

  const clearMessage = useCallback(() => {
    playFeedback();
    if (selectedPhraseIds.length > 0 || manualMessageText.length > 0) {
      setHistory(prev => [...prev, [...selectedPhraseIds]]);
    }
    setSelectedPhraseIds([]);
    setManualMessageText('');
    setIsManualEdited(false);
  }, [selectedPhraseIds, manualMessageText, playFeedback]);

  const updateManualText = useCallback((text: string) => {
    setManualMessageText(text);
    setIsManualEdited(true);
  }, []);

  const undoMessage = useCallback(() => {
    playFeedback();
    if (history.length === 0) return;
    const last = history[history.length - 1];
    setHistory(prev => prev.slice(0, prev.length - 1));
    setSelectedPhraseIds(last);
    setIsManualEdited(false);
  }, [history, playFeedback]);

  const toggleFavorite = useCallback((phraseId: string) => {
    playFeedback();
    setFavorites(prev => {
      if (prev.includes(phraseId)) {
        return prev.filter(id => id !== phraseId);
      } else {
        return [...prev, phraseId];
      }
    });
  }, [playFeedback]);

  const addCustomPhrase = useCallback((text: string, categoryId: string) => {
    playFeedback();
    const newPhrase: CustomPhrase = {
      id: `custom_${Date.now()}`,
      text: text.trim(),
      categoryId,
      language: settings.communicationLanguage,
      createdAt: Date.now()
    };
    setCustomPhrases(prev => [newPhrase, ...prev]);
  }, [settings.communicationLanguage, playFeedback]);

  const deleteCustomPhrase = useCallback((id: string) => {
    playFeedback();
    setCustomPhrases(prev => prev.filter(p => p.id !== id));
    setSelectedPhraseIds(prev => prev.filter(pid => pid !== id));
  }, [playFeedback]);

  // Voice check
  const hasVoiceForLanguage = useMemo(() => {
    if (!speechService.isSupported()) return false;
    const match = speechService.findVoiceForLanguage(
      settings.communicationLanguage,
      communicationLanguage.bcp47
    );
    return !!match;
  }, [settings.communicationLanguage, communicationLanguage.bcp47]);

  const speakMessage = useCallback((customText?: string) => {
    const textToSpeak = customText || assembledText;
    if (!textToSpeak.trim()) return;

    playFeedback();
    setIsSpeaking(true);

    speechService.speak(textToSpeak, {
      langCode: settings.communicationLanguage,
      bcp47: communicationLanguage.bcp47,
      rate: settings.speechRate,
      onStart: () => setIsSpeaking(true),
      onEnd: () => setIsSpeaking(false),
      onError: () => setIsSpeaking(false)
    });
  }, [assembledText, settings.communicationLanguage, settings.speechRate, communicationLanguage.bcp47, playFeedback]);

  const stopSpeech = useCallback(() => {
    playFeedback();
    speechService.stop();
    setIsSpeaking(false);
  }, [playFeedback]);

  const value = {
    settings,
    updateSettings,
    currentView,
    setCurrentView,
    selectedSituation,
    setSelectedSituation,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    selectedPhraseIds,
    manualMessageText,
    isManualEdited,
    addPhraseToMessage,
    removePhraseAt,
    movePhrase,
    clearMessage,
    updateManualText,
    undoMessage,
    favorites,
    toggleFavorite,
    customPhrases,
    addCustomPhrase,
    deleteCustomPhrase,
    ui,
    activeLanguage,
    communicationLanguage,
    assembledText,
    assembledTransliteration,
    isSpeaking,
    isOnline,
    hasVoiceForLanguage,
    speakMessage,
    stopSpeech,
    playFeedback,
    activeISLSignId,
    setActiveISLSignId,
    activeISLModalSign,
    setActiveISLModalSign,
    viewISLSign
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
