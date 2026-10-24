import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { SITUATION_COLLECTIONS } from '../data/categories';
import { AAC_PHRASES, PhraseItem } from '../data/phrases';
import { PhraseCard } from './PhraseCard';
import { SentenceBuilder } from './SentenceBuilder';
import { IconRenderer } from './IconRenderer';
import { ArrowLeft, Grid, Video, Plus, Check } from 'lucide-react';
import { SignVideoPlayer } from './video/SignVideoPlayer';
import { signLanguageRegistry } from '../data/signLanguages/registry';
import { SignEntry } from '../data/signLanguages/types';

export const SituationView: React.FC = () => {
  const {
    selectedSituation,
    setSelectedSituation,
    setCurrentView,
    addPhraseToMessage,
    communicationLanguage,
    selectedPhraseIds
  } = useApp();

  const [situationTab, setSituationTab] = useState<'cards' | 'videos'>('cards');

  const currentSituation = SITUATION_COLLECTIONS.find(s => s.id === selectedSituation) || SITUATION_COLLECTIONS[0];

  const situationPhrases = AAC_PHRASES.filter(p =>
    p.situations.includes(currentSituation.id)
  );

  const situationVideoSigns = useMemo(() => {
    return situationPhrases
      .map(p => {
        const sign = signLanguageRegistry.getSignByLinkedPhraseId(p.id) ||
                     signLanguageRegistry.getSignById(p.id);
        return { phrase: p, sign };
      })
      .filter((item): item is { phrase: PhraseItem; sign: SignEntry } => item.sign !== undefined);
  }, [situationPhrases]);

  const situationLabel = currentSituation.translations[communicationLanguage.id] ||
                         currentSituation.translations['en'] ||
                         currentSituation.translations['ta'] ||
                         currentSituation.name;

  const situationDesc = currentSituation.description[communicationLanguage.id] ||
                        currentSituation.description['en'] ||
                        currentSituation.description['ta'] ||
                        '';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Situation Header & Phrase / Video Grid */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-6">
          {/* Situation Picker Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-thin">
            <button
              type="button"
              onClick={() => setCurrentView('home')}
              aria-label="Back to home"
              className="px-3 py-2 rounded-xl bg-white border border-brand-border text-brand-muted hover:text-brand-navy flex items-center text-xs font-bold touch-target flex-shrink-0"
            >
              <ArrowLeft className="w-4 h-4 mr-1 rtl-mirror" />
              <span>Back</span>
            </button>

            {SITUATION_COLLECTIONS.map((sit) => {
              const isSelected = sit.id === currentSituation.id;
              const title = sit.translations[communicationLanguage.id] ||
                            sit.translations['en'] ||
                            sit.translations['ta'] ||
                            sit.name;

              return (
                <button
                  key={sit.id}
                  type="button"
                  onClick={() => setSelectedSituation(sit.id)}
                  className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all touch-target ${
                    isSelected
                      ? 'bg-brand-indigo text-white shadow-sm'
                      : 'bg-white hover:bg-slate-100 text-brand-text border border-brand-border'
                  }`}
                >
                  <IconRenderer name={sit.icon} className="w-3.5 h-3.5" />
                  <span>{title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Situation Banner */}
          <div className="bg-white rounded-3xl p-6 border border-brand-border shadow-sm flex items-start space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-ivory border border-slate-200 flex items-center justify-center flex-shrink-0 text-brand-indigo">
              <IconRenderer name={currentSituation.icon} className="w-8 h-8" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-indigo">
                Situation Card
              </span>
              <h1 className="text-2xl font-bold text-brand-navy mt-0.5">
                {situationLabel}
              </h1>
              <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-relaxed">
                {situationDesc}
              </p>
            </div>
          </div>

          {/* Situation Media Tabs */}
          <div className="flex items-center space-x-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-xs">
            <button
              type="button"
              onClick={() => setSituationTab('cards')}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all touch-target ${
                situationTab === 'cards'
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'text-slate-600 hover:text-brand-navy hover:bg-slate-100'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>Situation Phrase Cards ({situationPhrases.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setSituationTab('videos')}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all touch-target ${
                situationTab === 'videos'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>Situation Sign Videos</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-indigo-200 text-indigo-900 font-bold ml-1">
                {situationVideoSigns.length}
              </span>
            </button>
          </div>

          {/* Phrases Grid vs Videos Grid */}
          {situationTab === 'cards' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
              {situationPhrases.map((phrase) => (
                <PhraseCard
                  key={phrase.id}
                  phrase={phrase}
                  onSelect={(p) => addPhraseToMessage(p.id)}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {situationVideoSigns.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {situationVideoSigns.map(({ phrase, sign }) => {
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
                              Verified Sign Video
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

                        {/* Embedded Video Player */}
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
                    No sign videos currently tagged for this specific situation. Check the Sign Video Library for the complete catalog!
                  </p>
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
