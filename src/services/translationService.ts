import { AAC_PHRASES } from '../data/phrases';
import { INDIAN_LANGUAGES } from '../data/languages';

export interface TranslationResult {
  translatedText: string;
  sourceText: string;
  sourceLang: string;
  targetLang: string;
  isCurated: boolean;
  status: 'verified_curated' | 'offline_dictionary' | 'unverified_machine' | 'fallback_original';
  notes?: string;
}

export interface TranslationProviderStatus {
  name: string;
  isOnlineAvailable: boolean;
  isOfflineAvailable: boolean;
  curatedPhraseCount: number;
  supportedLanguagesCount: number;
  privacyGuarantee: string;
}

export interface TranslationMetadata {
  engine: 'SolluPath Curated Multi-Indic Engine (Offline)';
  version: '1.0.0';
  offlineCertified: true;
  lastUpdated: '2026-10-24';
}

class TranslationService {
  public getProviderStatus(): TranslationProviderStatus {
    return {
      name: 'SolluPath Curated Offline Indic AAC Engine',
      isOnlineAvailable: false, // Transparent: no external cloud API dependency needed for core AAC
      isOfflineAvailable: true,
      curatedPhraseCount: AAC_PHRASES.length,
      supportedLanguagesCount: INDIAN_LANGUAGES.length,
      privacyGuarantee: '100% On-Device Deterministic Processing. No text is transmitted to external servers.'
    };
  }

  public supportsOfflineTranslation(): boolean {
    return true;
  }

  public getSupportedLanguages(): string[] {
    return INDIAN_LANGUAGES.map(l => l.id);
  }

  public getTranslationMetadata(): TranslationMetadata {
    return {
      engine: 'SolluPath Curated Multi-Indic Engine (Offline)',
      version: '1.0.0',
      offlineCertified: true,
      lastUpdated: '2026-10-24'
    };
  }

  /**
   * Translates a curated phrase by ID to a target language.
   * Deterministic, zero-hallucination.
   */
  public translatePhraseById(phraseId: string, targetLang: string): { text: string; isExact: boolean; status: string } {
    const phrase = AAC_PHRASES.find(p => p.id === phraseId);
    if (!phrase) {
      return { text: '', isExact: false, status: 'not_found' };
    }

    if (phrase.translations[targetLang]) {
      return {
        text: phrase.translations[targetLang],
        isExact: true,
        status: phrase.status
      };
    }

    // Fallback to English or Tamil anchor
    const fallbackText = phrase.translations['en'] || phrase.translations['ta'] || '';
    return {
      text: fallbackText,
      isExact: false,
      status: 'fallback_original'
    };
  }

  /**
   * Translates an assembled sequence of phrase IDs into the target language.
   * Joins them with natural spacing.
   */
  public translateSentence(phraseIds: string[], targetLang: string): { originalIds: string[]; resultText: string; isAllCurated: boolean } {
    let isAllCurated = true;
    const pieces: string[] = [];

    for (const id of phraseIds) {
      const match = this.translatePhraseById(id, targetLang);
      if (match.text) {
        pieces.push(match.text);
      }
      if (!match.isExact) {
        isAllCurated = false;
      }
    }

    return {
      originalIds: phraseIds,
      resultText: pieces.join(' '),
      isAllCurated
    };
  }

  /**
   * Translates arbitrary text. If the text matches a known phrase, returns verified translation.
   * Otherwise, explains that unverified cloud translation is not configured to avoid false medical claims.
   */
  public async translateText(text: string, sourceLang: string, targetLang: string): Promise<TranslationResult> {
    const cleanText = text.trim();

    // Check if the text matches any curated phrase in sourceLang
    const matchedPhrase = AAC_PHRASES.find(p => {
      const src = p.translations[sourceLang];
      return src && src.trim().toLowerCase() === cleanText.toLowerCase();
    });

    if (matchedPhrase && matchedPhrase.translations[targetLang]) {
      return {
        translatedText: matchedPhrase.translations[targetLang],
        sourceText: text,
        sourceLang,
        targetLang,
        isCurated: true,
        status: 'verified_curated',
        notes: 'Deterministic match from SolluPath Curated Clinical & Emergency Dictionary'
      };
    }

    // Honest handling of arbitrary text: no external cloud translation is silently mocked
    return {
      translatedText: text,
      sourceText: text,
      sourceLang,
      targetLang,
      isCurated: false,
      status: 'fallback_original',
      notes: 'No external cloud translation service is connected. Original text preserved for safety.'
    };
  }
}

export const translationService = new TranslationService();
