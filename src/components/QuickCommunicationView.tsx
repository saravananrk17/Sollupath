import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { AAC_CATEGORIES } from '../data/categories';
import { AAC_PHRASES, PhraseItem } from '../data/phrases';
import { PhraseCard } from './PhraseCard';
import { SentenceBuilder } from './SentenceBuilder';
import { Search, X, Filter, Grid, Video, Plus, Check } from 'lucide-react';
import { SignVideoPlayer } from './video/SignVideoPlayer';
import { signLanguageRegistry } from '../data/signLanguages/registry';
import { SignEntry } from '../data/signLanguages/types';

export const QuickCommunicationView: React.FC = () => {
  const {
    addPhraseToMessage,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    ui,
    communicationLanguage,
    selectedPhraseIds
  } = useApp();

  const [activeCategory, setActiveCategory] = useState<string | null>(selectedCategory || null);
  const [viewMode, setViewMode] = useState<'cards' | 'video'>('cards');

  const filteredPhrases = useMemo(() => {
    return AAC_PHRASES.filter((phrase) => {
      // Category filter
      if (activeCategory && phrase.categoryId !== activeCategory) {
        return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const engText = (phrase.translations['en'] || '').toLowerCase();
        const nativeText = (phrase.translations[communicationLanguage.id] || '').toLowerCase();
        const tamilText = (phrase.translations['ta'] || '').toLowerCase();
        const translit = (phrase.transliterations?.[communicationLanguage.id] || '').toLowerCase();
        const kwMatch = phrase.keywords.some(kw => kw.toLowerCase().includes(q));

        return (
          engText.includes(q) ||
          nativeText.includes(q) ||
          tamilText.includes(q) ||
          translit.includes(q) ||
          kwMatch
        );
      }

      return true;
    });
  }, [activeCategory, searchQuery, communicationLanguage.id]);

  const videoSigns = useMemo(() => {
    return filteredPhrases
      .map(p => {
        const sign = signLanguageRegistry.getSignByLinkedPhraseId(p.id) ||
                     signLanguageRegistry.getSignById(p.id);
        return { phrase: p, sign };
      })
      .filter((item): item is { phrase: PhraseItem; sign: SignEntry } => item.sign !== undefined);
  }, [filteredPhrases]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Search, Categories, and Phrase Cards / Video Grid */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-5">
          {/* View Mode Tab Switcher: Phrase Cards vs Sign Video Guide */}
          <div className="flex items-center justify-between bg-white p-2 rounded-2xl border border-brand-border shadow-xs">
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setViewMode('cards')}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all touch-target ${
                  viewMode === 'cards'
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'text-slate-600 hover:text-brand-navy hover:bg-slate-100'
                }`}
              >
                <Grid className="w-4 h-4" />
                <span>Phrase Cards Grid</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('video')}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all touch-target ${
                  viewMode === 'video'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                <Video className="w-4 h-4" />
                <span>Sign Video Demonstrations</span>
                <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-indigo-200 text-indigo-900 font-bold ml-1">
                  {videoSigns.length}
                </span>
              </button>
            </div>

            <span className="hidden sm:inline text-xs font-semibold text-brand-muted">
              {viewMode === 'cards' ? `${filteredPhrases.length} phrases` : 'Living Sign Video Guide'}
            </span>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={ui.searchPlaceholder}
              className="w-full pl-12 pr-10 py-3 rounded-2xl bg-white border border-brand-border text-sm md:text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo/30 focus:border-brand-indigo transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-3.5 top-3 p-1 text-slate-400 hover:text-slate-600 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Category Horizontal Scrolling Chips */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-thin">
            <button
              type="button"
              onClick={() => {
                setActiveCategory(null);
                setSelectedCategory(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all touch-target ${
                activeCategory === null
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'bg-white hover:bg-slate-100 text-brand-text border border-brand-border'
              }`}
            >
              {ui.allCategories} ({AAC_PHRASES.length})
            </button>

            {AAC_CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              const catLabel = cat.translations[communicationLanguage.id] ||
                               cat.translations['en'] ||
                               cat.translations['ta'] ||
                               cat.name;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSelectedCategory(cat.id);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all touch-target ${
                    isSelected
                      ? 'bg-brand-indigo text-white shadow-sm'
                      : 'bg-white hover:bg-slate-100 text-brand-text border border-brand-border'
                  }`}
                >
                  {catLabel}
                </button>
              );
            })}
          </div>

          {/* Conditional View: Phrase Cards vs Sign Video Demonstrations */}
          {viewMode === 'cards' ? (
            filteredPhrases.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                {filteredPhrases.map((phrase) => (
                  <PhraseCard
                    key={phrase.id}
                    phrase={phrase}
                    onSelect={(p) => addPhraseToMessage(p.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
                <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-1">
                  {ui.noPhrasesFound}
                </h3>
                <p className="text-xs text-brand-muted max-w-sm mx-auto mb-6">
                  No matching phrases for "{searchQuery}". Try searching in English or Tamil, or clear filters.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory(null);
                  }}
                  className="px-5 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl shadow-sm hover:bg-brand-indigo"
                >
                  Clear Search & Filters
                </button>
              </div>
            )
          ) : (
            /* Sign Video Demonstrations Feed */
            <div className="space-y-6">
              {videoSigns.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {videoSigns.map(({ phrase, sign }) => {
                    const isSelected = selectedPhraseIds.includes(phrase.id);
                    const phraseText = phrase.translations[communicationLanguage.id] ||
                                       phrase.translations['en'] ||
                                       phrase.translations['ta'] ||
                                       '';
                    return (
                      <div
                        key={sign.id}
                        className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-indigo-300 transition-colors"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                              Verified Sign Demonstration
                            </span>
                            <span className="text-xs text-slate-500 font-semibold">
                              {sign.languageId.toUpperCase()}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-brand-navy">
                            {phraseText}
                          </h3>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {sign.meaning.en} • {sign.meaning.ta || ''}
                          </p>
                        </div>

                        {/* Embedded Living Video Player */}
                        <div className="rounded-2xl overflow-hidden border border-slate-200">
                          <SignVideoPlayer
                            sign={sign}
                            autoPlay={false}
                            loop={true}
                            showSubtitlesDefault={true}
                          />
                        </div>

                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                          <button
                            type="button"
                            onClick={() => addPhraseToMessage(phrase.id)}
                            className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-all touch-target ${
                              isSelected
                                ? 'bg-emerald-600 text-white shadow-sm'
                                : 'bg-brand-navy hover:bg-brand-indigo text-white shadow-sm'
                            }`}
                          >
                            {isSelected ? (
                              <>
                                <Check className="w-4 h-4" />
                                <span>Added in Builder</span>
                              </>
                            ) : (
                              <>
                                <Plus className="w-4 h-4" />
                                <span>Add to Message Builder</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
                  <p className="text-sm font-semibold text-slate-600">
                    No sign video demonstrations found for this category or filter.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory(null);
                    }}
                    className="mt-4 px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-xl"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Side: Persistent Sentence Builder */}
        <div className="lg:col-span-5 xl:col-span-4">
          <SentenceBuilder />
        </div>
      </div>
    </div>
  );
};
