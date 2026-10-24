import React from 'react';
import { useApp } from '../context/AppContext';
import { AAC_PHRASES } from '../data/phrases';
import { PhraseCard } from './PhraseCard';
import { SentenceBuilder } from './SentenceBuilder';
import { Star, ArrowLeft } from 'lucide-react';

export const FavoritesView: React.FC = () => {
  const {
    favorites,
    addPhraseToMessage,
    setCurrentView,
    ui
  } = useApp();

  const favoritePhrases = AAC_PHRASES.filter(p => favorites.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Favorites List */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => setCurrentView('home')}
                className="p-2 text-slate-400 hover:text-brand-navy rounded-xl hover:bg-slate-100 touch-target"
              >
                <ArrowLeft className="w-5 h-5 rtl-mirror" />
              </button>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-brand-navy flex items-center">
                  <Star className="w-6 h-6 mr-2 text-amber-500 fill-amber-500" />
                  {ui.favorites}
                </h1>
                <p className="text-xs text-brand-muted">
                  Your most frequently used phrases for instantaneous access
                </p>
              </div>
            </div>

            <span className="text-xs font-bold text-brand-navy bg-slate-100 px-3 py-1 rounded-full">
              {favoritePhrases.length} saved
            </span>
          </div>

          {favoritePhrases.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
              {favoritePhrases.map((phrase) => (
                <PhraseCard
                  key={phrase.id}
                  phrase={phrase}
                  onSelect={(p) => addPhraseToMessage(p.id)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
              <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-1">
                No Favorite Phrases Yet
              </h3>
              <p className="text-xs text-brand-muted max-w-sm mx-auto mb-6">
                Click the star icon on any communication tile to save it here for rapid access.
              </p>
              <button
                type="button"
                onClick={() => setCurrentView('quick')}
                className="px-5 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl shadow-sm hover:bg-brand-indigo"
              >
                Browse All Phrases →
              </button>
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
