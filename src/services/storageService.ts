export interface CustomPhrase {
  id: string;
  text: string;
  categoryId: string;
  language: string;
  createdAt: number;
}

export interface UserSettings {
  interfaceLanguage: string;
  communicationLanguage: string;
  highContrast: boolean;
  textSize: 'standard' | 'large' | 'xlarge';
  speechRate: number;
  reducedMotion: boolean;
  soundFeedback: boolean;
  showTransliteration: boolean;
}

const DEFAULT_SETTINGS: UserSettings = {
  interfaceLanguage: 'ta', // Default to Tamil as required
  communicationLanguage: 'ta',
  highContrast: false,
  textSize: 'large',
  speechRate: 0.9,
  reducedMotion: false,
  soundFeedback: true,
  showTransliteration: true,
};

const SETTINGS_KEY = 'sollupath_settings_v1';
const FAVORITES_KEY = 'sollupath_favorites_v1';
const CUSTOM_PHRASES_KEY = 'sollupath_custom_phrases_v1';
const DRAFT_MESSAGE_KEY = 'sollupath_draft_message_v1';

export const storageService = {
  getSettings(): UserSettings {
    try {
      const data = localStorage.getItem(SETTINGS_KEY);
      if (!data) return DEFAULT_SETTINGS;
      return { ...DEFAULT_SETTINGS, ...JSON.parse(data) };
    } catch {
      return DEFAULT_SETTINGS;
    }
  },

  saveSettings(settings: UserSettings): void {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {
      console.warn('LocalStorage save failed for settings:', e);
    }
  },

  getFavorites(): string[] {
    try {
      const data = localStorage.getItem(FAVORITES_KEY);
      return data ? JSON.parse(data) : ['p_help', 'p_pain', 'p_water', 'p_caregiver'];
    } catch {
      return ['p_help', 'p_pain', 'p_water', 'p_caregiver'];
    }
  },

  saveFavorites(favorites: string[]): void {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (e) {
      console.warn('LocalStorage save failed for favorites:', e);
    }
  },

  getCustomPhrases(): CustomPhrase[] {
    try {
      const data = localStorage.getItem(CUSTOM_PHRASES_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveCustomPhrases(phrases: CustomPhrase[]): void {
    try {
      localStorage.setItem(CUSTOM_PHRASES_KEY, JSON.stringify(phrases));
    } catch (e) {
      console.warn('LocalStorage save failed for custom phrases:', e);
    }
  },

  getDraftMessage(): string[] {
    try {
      const data = localStorage.getItem(DRAFT_MESSAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveDraftMessage(phraseIds: string[]): void {
    try {
      localStorage.setItem(DRAFT_MESSAGE_KEY, JSON.stringify(phraseIds));
    } catch (e) {
      console.warn('LocalStorage save failed for draft message:', e);
    }
  },

  clearAllData(): void {
    try {
      localStorage.removeItem(SETTINGS_KEY);
      localStorage.removeItem(FAVORITES_KEY);
      localStorage.removeItem(CUSTOM_PHRASES_KEY);
      localStorage.removeItem(DRAFT_MESSAGE_KEY);
    } catch (e) {
      console.warn('Failed to clear storage:', e);
    }
  }
};
