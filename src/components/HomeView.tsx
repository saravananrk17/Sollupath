import React from 'react';
import { useApp } from '../context/AppContext';
import { SITUATION_COLLECTIONS } from '../data/categories';
import { IconRenderer } from './IconRenderer';
import {
  Zap,
  ArrowRight,
  Star,
  PlusSquare,
  MessageSquare,
  Sliders,
  Globe2,
  Sparkles
} from 'lucide-react';

interface HomeViewProps {
  onOpenLanguage: () => void;
  onOpenAccessibility: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onOpenLanguage, onOpenAccessibility }) => {
  const {
    setCurrentView,
    setSelectedSituation,
    ui,
    selectedPhraseIds,
    favorites,
    communicationLanguage
  } = useApp();

  const handleSelectSituation = (situationId: string) => {
    setSelectedSituation(situationId);
    setCurrentView('situations');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      {/* Welcome Reassuring Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-sm gap-4">
        <div>
          <span className="text-xs font-bold text-brand-indigo uppercase tracking-wider">
            SolluPath Assistive AAC & ISL Platform
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mt-1">
            {ui.welcomeInstruction}
          </h1>
          <p className="text-sm text-brand-muted mt-1">
            Tap a card below to communicate with doctors, drivers, pharmacists, or family.
          </p>
        </div>

        {/* Current Communication Target Language Pill */}
        <div className="flex items-center space-x-3 bg-brand-ivory border border-brand-border/80 rounded-2xl p-3">
          <div className="w-10 h-10 rounded-xl bg-brand-indigo/10 flex items-center justify-center text-brand-indigo">
            <Globe2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-brand-muted block">Output Language</span>
            <button
              type="button"
              onClick={onOpenLanguage}
              className="text-sm font-bold text-brand-navy hover:text-brand-indigo underline text-left"
            >
              {communicationLanguage.nativeName} ({communicationLanguage.name})
            </button>
          </div>
        </div>
      </div>

      {/* ISL Learn & Practise Discovery Card */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => setCurrentView('isl_dashboard')}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setCurrentView('isl_dashboard');
        }}
        aria-label="Open Indian Sign Language Learn and Practise Module"
        className="bg-gradient-to-r from-teal-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-7 border border-teal-500/30 shadow-md hover:shadow-lg transition-all cursor-pointer group flex flex-col md:flex-row items-start md:items-center justify-between gap-4 select-none touch-target"
      >
        <div className="flex items-start sm:items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 flex-shrink-0 group-hover:scale-105 transition-transform">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-[10px] font-bold uppercase tracking-wider mb-1">
              <span>NEW MODULE</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              ISL Learn & Practise — இந்திய சைகை மொழி
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5 max-w-xl">
              Learn verified Indian Sign Language (ISL) for hospitals, transit, and emergency communication with interactive flashcards and guided practice.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setCurrentView('isl_dashboard');
          }}
          className="px-5 py-2.5 bg-brand-teal hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center space-x-2 flex-shrink-0"
        >
          <span>Start Learning ISL</span>
          <ArrowRight className="w-4 h-4 rtl-mirror" />
        </button>
      </div>

      {/* Continue Draft Message Banner (if user has composed an active message) */}
      {selectedPhraseIds.length > 0 && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-200 text-amber-900 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                Active Draft Message
              </span>
              <p className="text-sm font-bold text-amber-950">
                You have {selectedPhraseIds.length} phrases currently composed.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setCurrentView('quick')}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl shadow-sm transition-colors touch-target"
            >
              Continue in Message Builder →
            </button>
          </div>
        </div>
      )}

      {/* Hero Action: Quick Communication */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => setCurrentView('quick')}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setCurrentView('quick');
        }}
        aria-label="Open Quick Communication"
        className="relative overflow-hidden bg-gradient-to-r from-brand-navy via-brand-indigo to-brand-navy text-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer group touch-target select-none"
      >
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-teal text-white text-xs font-extrabold uppercase tracking-wide mb-3">
              <Zap className="w-3.5 h-3.5 fill-white" />
              <span>Fastest Access</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              {ui.quickCommunication}
            </h2>
            <p className="text-sm sm:text-base text-slate-200 mt-2 leading-relaxed">
              Immediate phrases for emergencies, pain, water, food, restrooms, and calling your caregiver. Accessible in 1 tap.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <span className="hidden sm:inline font-bold text-sm text-brand-teal group-hover:text-white transition-colors">
              Open Immediate Needs
            </span>
            <div className="w-12 h-12 rounded-2xl bg-white/10 group-hover:bg-brand-teal text-white flex items-center justify-center transition-all group-hover:translate-x-1">
              <ArrowRight className="w-6 h-6 rtl-mirror" />
            </div>
          </div>
        </div>

        {/* Decorative background circle */}
        <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-brand-teal/10 blur-3xl pointer-events-none" />
      </div>

      {/* Situation-Based Categories Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-brand-navy">
              {ui.situations}
            </h2>
            <p className="text-xs text-brand-muted">
              Pre-curated visual vocabulary tailored for specific public environments
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SITUATION_COLLECTIONS.map((situation) => {
            const label = situation.translations[communicationLanguage.id] ||
                          situation.translations['en'] ||
                          situation.translations['ta'] ||
                          situation.name;

            const desc = situation.description[communicationLanguage.id] ||
                         situation.description['en'] ||
                         situation.description['ta'] ||
                         '';

            return (
              <div
                key={situation.id}
                role="button"
                tabIndex={0}
                onClick={() => handleSelectSituation(situation.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSelectSituation(situation.id);
                }}
                aria-label={`Open ${label}`}
                className="flex flex-col justify-between p-5 rounded-2xl bg-white border border-brand-border hover:border-brand-indigo/60 hover:shadow-md transition-all cursor-pointer group touch-target select-none"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-ivory border border-slate-200/80 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <IconRenderer name={situation.icon} className="w-6 h-6 text-brand-indigo" />
                  </div>
                  <h3 className="font-bold text-brand-navy text-base group-hover:text-brand-indigo transition-colors">
                    {label}
                  </h3>
                  <p className="text-xs text-brand-muted mt-1.5 leading-relaxed line-clamp-2">
                    {desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-indigo">
                  <span>Explore phrases</span>
                  <ArrowRight className="w-4 h-4 rtl-mirror group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Access Utility Cards (Favorites, Custom, Accessibility) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
        <button
          type="button"
          onClick={() => setCurrentView('favorites')}
          className="flex items-center space-x-3 p-4 rounded-2xl bg-white border border-brand-border hover:border-slate-300 shadow-sm text-left touch-target"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
            <Star className="w-5 h-5 fill-amber-500" />
          </div>
          <div>
            <span className="text-sm font-bold text-brand-navy block">
              {ui.favorites}
            </span>
            <span className="text-xs text-brand-muted">
              {favorites.length} saved phrases
            </span>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setCurrentView('custom')}
          className="flex items-center space-x-3 p-4 rounded-2xl bg-white border border-brand-border hover:border-slate-300 shadow-sm text-left touch-target"
        >
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
            <PlusSquare className="w-5 h-5" />
          </div>
          <div>
            <span className="text-sm font-bold text-brand-navy block">
              {ui.customPhrases}
            </span>
            <span className="text-xs text-brand-muted">
              Add your personal words & names
            </span>
          </div>
        </button>

        <button
          type="button"
          onClick={onOpenAccessibility}
          className="flex items-center space-x-3 p-4 rounded-2xl bg-white border border-brand-border hover:border-slate-300 shadow-sm text-left touch-target"
        >
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <span className="text-sm font-bold text-brand-navy block">
              {ui.accessibilitySettings}
            </span>
            <span className="text-xs text-brand-muted">
              Contrast, large text & speech rate
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};
