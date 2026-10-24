import React from 'react';
import { useApp } from '../context/AppContext';
import { SITUATION_COLLECTIONS } from '../data/categories';
import { AAC_PHRASES } from '../data/phrases';
import { PhraseCard } from './PhraseCard';
import { SentenceBuilder } from './SentenceBuilder';
import { IconRenderer } from './IconRenderer';
import { ArrowLeft } from 'lucide-react';

export const SituationView: React.FC = () => {
  const {
    selectedSituation,
    setSelectedSituation,
    setCurrentView,
    addPhraseToMessage,
    communicationLanguage
  } = useApp();

  const currentSituation = SITUATION_COLLECTIONS.find(s => s.id === selectedSituation) || SITUATION_COLLECTIONS[0];

  const situationPhrases = AAC_PHRASES.filter(p =>
    p.situations.includes(currentSituation.id)
  );

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
        {/* Left Side: Situation Header & Phrase Grid */}
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

          {/* Phrases Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {situationPhrases.map((phrase) => (
              <PhraseCard
                key={phrase.id}
                phrase={phrase}
                onSelect={(p) => addPhraseToMessage(p.id)}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Persistent Sentence Builder */}
        <div className="lg:col-span-5 xl:col-span-4">
          <SentenceBuilder />
        </div>
      </div>
    </div>
  );
};
