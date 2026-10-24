import { describe, it, expect, beforeEach } from 'vitest';
import { storageService } from '../services/storageService';
import { speechService } from '../services/speechService';
import { translationService } from '../services/translationService';

describe('SolluPath Core Services', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('StorageService', () => {
    it('persists and retrieves user settings with default Tamil fallback', () => {
      const initial = storageService.getSettings();
      expect(initial.interfaceLanguage).toBe('ta');
      expect(initial.textSize).toBe('large');

      storageService.saveSettings({
        ...initial,
        interfaceLanguage: 'hi',
        highContrast: true,
      });

      const updated = storageService.getSettings();
      expect(updated.interfaceLanguage).toBe('hi');
      expect(updated.highContrast).toBe(true);
    });

    it('persists and retrieves favorite phrase IDs', () => {
      storageService.saveFavorites(['p_help', 'p_water']);
      const favs = storageService.getFavorites();
      expect(favs).toEqual(['p_help', 'p_water']);
    });

    it('persists and clears custom phrases', () => {
      const testPhrase = {
        id: 'cust_1',
        text: 'Doctor please examine my left arm',
        categoryId: 'medical_discomfort',
        language: 'en',
        createdAt: Date.now(),
      };
      storageService.saveCustomPhrases([testPhrase]);
      expect(storageService.getCustomPhrases().length).toBe(1);

      storageService.clearAllData();
      expect(storageService.getCustomPhrases().length).toBe(0);
    });
  });

  describe('SpeechService', () => {
    it('reports Web Speech API support in browser environment', () => {
      expect(speechService.isSupported()).toBe(true);
    });

    it('matches available voices for language tags', () => {
      const matchTa = speechService.findVoiceForLanguage('ta', 'ta-IN');
      expect(matchTa).not.toBeNull();
      expect(matchTa?.voice.lang).toBe('ta-IN');

      const matchEn = speechService.findVoiceForLanguage('en', 'en-IN');
      expect(matchEn).not.toBeNull();
    });

    it('speaks and stops speech synthesis cleanly', () => {
      let started = false;
      const success = speechService.speak('வணக்கம்', {
        langCode: 'ta',
        bcp47: 'ta-IN',
        onStart: () => { started = true; },
      });
      expect(success).toBe(true);
      expect(started).toBe(true);

      speechService.stop();
      expect(speechService.getSpeakingState()).toBe(false);
    });
  });

  describe('TranslationService (Offline Provider Abstraction)', () => {
    it('provides truthful provider status disclosing 100% on-device guarantees', () => {
      const status = translationService.getProviderStatus();
      expect(status.isOfflineAvailable).toBe(true);
      expect(status.isOnlineAvailable).toBe(false);
      expect(status.privacyGuarantee).toContain('On-Device');
      expect(status.curatedPhraseCount).toBeGreaterThanOrEqual(15);
    });

    it('translates curated phrase IDs deterministically across languages', () => {
      const resTa = translationService.translatePhraseById('p_help', 'ta');
      expect(resTa.text).toBe('எனக்கு உதவி தேவை.');
      expect(resTa.isExact).toBe(true);

      const resEn = translationService.translatePhraseById('p_help', 'en');
      expect(resEn.text).toBe('I need help.');
      expect(resEn.isExact).toBe(true);

      const resHi = translationService.translatePhraseById('p_help', 'hi');
      expect(resHi.text).toBe('मुझे मदद चाहिए।');
      expect(resHi.isExact).toBe(true);
    });

    it('assembles multi-phrase sentences seamlessly', () => {
      const assembled = translationService.translateSentence(['p_help', 'p_pain'], 'ta');
      expect(assembled.resultText).toBe('எனக்கு உதவி தேவை. எனக்கு வலிக்கிறது.');
      expect(assembled.isAllCurated).toBe(true);
    });
  });
});
