import React from 'react';
import { PhraseItem } from '../data/phrases';
import { IconRenderer } from './IconRenderer';
import { Star, Video } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ISL_SIGNS } from '../data/isl/signs';

interface PhraseCardProps {
  phrase: PhraseItem;
  isSelected?: boolean;
  onSelect: (phrase: PhraseItem) => void;
}

export const PhraseCard: React.FC<PhraseCardProps> = ({ phrase, isSelected, onSelect }) => {
  const { settings, favorites, toggleFavorite, communicationLanguage, viewISLSign } = useApp();
  const isFav = favorites.includes(phrase.id);

  // Check if an Indian Sign Language demonstration is linked to this phrase
  const linkedISLSign = ISL_SIGNS.find(s => s.linkedPhraseId === phrase.id);

  const text = phrase.translations[communicationLanguage.id] ||
               phrase.translations['en'] ||
               phrase.translations['ta'] ||
               '';

  const transliteration = settings.showTransliteration && phrase.transliterations
    ? phrase.transliterations[communicationLanguage.id] || phrase.transliterations['ta']
    : null;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${text}. Press to add to message builder.`}
      onClick={() => onSelect(phrase)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(phrase);
        }
      }}
      className={`relative group flex flex-col justify-between p-4 rounded-2xl border text-left cursor-pointer transition-all duration-150 select-none touch-target ${
        isSelected
          ? 'bg-brand-indigo/10 border-brand-indigo shadow-md ring-2 ring-brand-indigo/20'
          : 'bg-white hover:bg-slate-50 border-brand-border hover:border-slate-300 shadow-sm hover:shadow'
      }`}
    >
      <div className="flex items-start justify-between w-full mb-3">
        <div className="w-12 h-12 rounded-xl bg-brand-ivory flex items-center justify-center text-brand-navy border border-brand-border/60 group-hover:scale-105 transition-transform">
          <IconRenderer name={phrase.icon} className="w-6 h-6 text-brand-indigo" />
        </div>
        
        <div className="flex items-center space-x-1">
          {/* Quick ISL Sign Link Badge */}
          {linkedISLSign && (
            <button
              type="button"
              aria-label={`View Indian Sign Language (ISL) Sign Video demonstration for ${text}`}
              onClick={(e) => {
                e.stopPropagation();
                viewISLSign(linkedISLSign.id);
              }}
              className="px-2.5 py-1 rounded-xl text-xs font-bold bg-teal-50 text-teal-800 hover:bg-teal-100 border border-teal-200 transition-colors touch-target flex items-center space-x-1 shadow-xs"
              title="Watch verified sign language video"
            >
              <Video className="w-3.5 h-3.5 text-teal-600" />
              <span>Sign Video</span>
            </button>
          )}

          <button
            type="button"
            aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(phrase.id);
            }}
            className={`p-2 rounded-lg transition-colors touch-target ${
              isFav
                ? 'text-amber-500 hover:text-amber-600 bg-amber-50'
                : 'text-slate-300 hover:text-amber-500 hover:bg-slate-100'
            }`}
          >
            <Star className={`w-5 h-5 ${isFav ? 'fill-amber-500' : ''}`} />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <span className="font-semibold text-brand-text text-base md:text-lg leading-snug">
          {text}
        </span>
        {transliteration && (
          <span className="text-xs text-brand-muted italic mt-1 font-normal tracking-wide">
            {transliteration}
          </span>
        )}
      </div>

      <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-brand-muted">
        <span className="capitalize">{phrase.categoryId.replace('_', ' ')}</span>
        {phrase.status === 'approved' && (
          <span className="inline-flex items-center text-emerald-600 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1"></span>
            Verified
          </span>
        )}
      </div>
    </div>
  );
};
