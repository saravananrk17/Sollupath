import { SignEntry, SignLanguageCollection } from './types';
import { SIGN_LANGUAGE_COLLECTIONS, getSignLanguageCollection } from './collections';
import { ISL_SIGN_ENTRIES } from './islSigns';
import { ASL_SIGN_ENTRIES } from './aslSigns';
import { BSL_SIGN_ENTRIES } from './bslSigns';

export const ALL_SIGN_ENTRIES: SignEntry[] = [
  ...ISL_SIGN_ENTRIES,
  ...ASL_SIGN_ENTRIES,
  ...BSL_SIGN_ENTRIES,
];

export const signLanguageRegistry = {
  getCollections(): SignLanguageCollection[] {
    return SIGN_LANGUAGE_COLLECTIONS;
  },

  getCollectionById(id: string): SignLanguageCollection | undefined {
    return getSignLanguageCollection(id);
  },

  getSignsForLanguage(languageId: string): SignEntry[] {
    return ALL_SIGN_ENTRIES.filter(s => s.languageId === languageId);
  },

  getSignById(id: string): SignEntry | undefined {
    return ALL_SIGN_ENTRIES.find(s => s.id === id);
  },

  getSignByLinkedPhraseId(phraseId: string, languageId = 'isl'): SignEntry | undefined {
    return ALL_SIGN_ENTRIES.find(s => s.languageId === languageId && s.linkedPhraseId === phraseId);
  },

  getSignByLinkedISLSignId(islSignId: string): SignEntry | undefined {
    return ALL_SIGN_ENTRIES.find(s => s.linkedISLSignId === islSignId);
  },

  searchSigns(query: string, languageId?: string, categoryId?: string): SignEntry[] {
    const q = query.trim().toLowerCase();
    return ALL_SIGN_ENTRIES.filter(sign => {
      if (languageId && sign.languageId !== languageId) return false;
      if (categoryId && categoryId !== 'all' && sign.category !== categoryId) return false;

      if (!q) return true;

      const matchEnName = sign.name.en.toLowerCase().includes(q);
      const matchTaName = sign.name.ta?.toLowerCase().includes(q) ?? false;
      const matchNative = sign.name.nativeScript?.toLowerCase().includes(q) ?? false;
      const matchMeaningEn = sign.meaning.en.toLowerCase().includes(q);
      const matchMeaningTa = sign.meaning.ta?.toLowerCase().includes(q) ?? false;
      const matchContext = sign.contextOfUse.en.toLowerCase().includes(q);

      return matchEnName || matchTaName || matchNative || matchMeaningEn || matchMeaningTa || matchContext;
    });
  },

  getRelatedSigns(signId: string): SignEntry[] {
    const sign = this.getSignById(signId);
    if (!sign || !sign.relatedSignIds) return [];
    return sign.relatedSignIds
      .map(id => this.getSignById(id))
      .filter((s): s is SignEntry => s !== undefined);
  }
};
