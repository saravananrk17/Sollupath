import React, { useState, useMemo } from 'react';
import { ISL_SIGNS, ISLSignItem } from '../../data/isl/signs';
import { ISL_CATEGORIES } from '../../data/isl/categories';
import { ISLSignVisualizer } from './ISLSignVisualizer';
import { islProgressService } from '../../services/islProgressService';
import {
  Rotate3d,
  CheckCircle,
  HelpCircle,
  RotateCcw,
  Star,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Layers
} from 'lucide-react';

export type FlashcardMode = 'meaning_to_sign' | 'sign_to_meaning' | 'recall' | 'difficult_only';

interface ISLFlashcardsProps {
  onBackToDashboard: () => void;
  onOpenStudioLesson?: (signId: string) => void;
}

export const ISLFlashcards: React.FC<ISLFlashcardsProps> = ({
  onBackToDashboard,
  onOpenStudioLesson
}) => {
  const [mode, setMode] = useState<FlashcardMode>('meaning_to_sign');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionCompleted, setSessionCompleted] = useState(false);

  // Filter deck based on category and mode
  const activeDeck = useMemo(() => {
    let signs = [...ISL_SIGNS];
    if (selectedCategory) {
      signs = signs.filter(s => s.categoryId === selectedCategory);
    }
    if (mode === 'difficult_only') {
      const progress = islProgressService.getProgress();
      signs = signs.filter(s => progress.difficultSigns.includes(s.id));
    }
    return signs;
  }, [selectedCategory, mode]);

  const currentSign: ISLSignItem | undefined = activeDeck[currentIndex];
  const isDifficult = currentSign ? islProgressService.isDifficultSign(currentSign.id) : false;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    islProgressService.incrementCardsReviewed();
  };

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < activeDeck.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setSessionCompleted(true);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleMarkKnown = () => {
    if (currentSign && isDifficult) {
      islProgressService.toggleDifficultSign(currentSign.id);
    }
    handleNext();
  };

  const handleMarkDifficult = () => {
    if (currentSign) {
      islProgressService.toggleDifficultSign(currentSign.id);
    }
    handleNext();
  };

  const handleRestart = () => {
    setIsFlipped(false);
    setCurrentIndex(0);
    setSessionCompleted(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Top Navigation & Mode Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={onBackToDashboard}
            aria-label="Back to ISL dashboard"
            className="p-2 text-slate-500 hover:text-brand-navy rounded-xl hover:bg-slate-100 touch-target"
          >
            <ArrowLeft className="w-5 h-5 rtl-mirror" />
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-brand-navy flex items-center">
              <Layers className="w-6 h-6 mr-2 text-brand-teal" />
              ISL Interactive Flashcards
            </h1>
            <p className="text-xs text-brand-muted">
              Active Deck: {activeDeck.length} signs • Card {activeDeck.length > 0 ? currentIndex + 1 : 0} of {activeDeck.length}
            </p>
          </div>
        </div>

        {/* Study Mode Selector */}
        <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
          <button
            type="button"
            onClick={() => { setMode('meaning_to_sign'); handleRestart(); }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              mode === 'meaning_to_sign' ? 'bg-white text-brand-navy shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Meaning → Sign
          </button>
          <button
            type="button"
            onClick={() => { setMode('sign_to_meaning'); handleRestart(); }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              mode === 'sign_to_meaning' ? 'bg-white text-brand-navy shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Sign → Meaning
          </button>
          <button
            type="button"
            onClick={() => { setMode('difficult_only'); handleRestart(); }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              mode === 'difficult_only' ? 'bg-amber-100 text-amber-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Needs Practice
          </button>
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-thin">
        <button
          type="button"
          onClick={() => { setSelectedCategory(null); handleRestart(); }}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            selectedCategory === null
              ? 'bg-brand-navy text-white shadow-sm'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          All Categories
        </button>
        {ISL_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            type="button"
            onClick={() => { setSelectedCategory(cat.id); handleRestart(); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? 'bg-brand-indigo text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Main Flashcard Card Body */}
      {activeDeck.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">
            <Star className="w-8 h-8" />
          </div>
          <h2 className="text-lg font-bold text-brand-navy mb-1">
            {mode === 'difficult_only' ? 'No Difficult Signs Saved' : 'No Signs in Selected Category'}
          </h2>
          <p className="text-xs text-brand-muted max-w-sm mx-auto mb-6">
            {mode === 'difficult_only'
              ? 'Mark signs with "Needs Practice" during flashcard review to study them in this mode.'
              : 'Try selecting another category to practice.'}
          </p>
          <button
            type="button"
            onClick={() => { setMode('meaning_to_sign'); setSelectedCategory(null); handleRestart(); }}
            className="px-5 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl shadow-sm hover:bg-brand-indigo"
          >
            Reset Filters & View All
          </button>
        </div>
      ) : sessionCompleted ? (
        <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 shadow-sm animate-in fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-extrabold text-brand-navy mb-2">
            Session Completed!
          </h2>
          <p className="text-sm text-brand-muted max-w-sm mx-auto mb-6">
            You reviewed all {activeDeck.length} signs in this session.
          </p>
          <div className="flex items-center justify-center space-x-3">
            <button
              type="button"
              onClick={handleRestart}
              className="px-5 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl shadow-sm hover:bg-brand-indigo flex items-center space-x-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Review Again</span>
            </button>
            <button
              type="button"
              onClick={onBackToDashboard}
              className="px-5 py-2.5 bg-slate-100 text-brand-navy text-xs font-bold rounded-xl hover:bg-slate-200"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      ) : currentSign ? (
        <div className="space-y-4">
          {/* Flip Container */}
          <div
            role="button"
            tabIndex={0}
            onClick={handleFlip}
            onKeyDown={(e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                handleFlip();
              }
            }}
            aria-label={`Flashcard: ${currentSign.meaning}. Press to flip.`}
            className="w-full min-h-[380px] bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-border hover:border-brand-teal/60 shadow-lg cursor-pointer flex flex-col justify-between transition-all select-none group"
          >
            {/* Top Card Info Bar */}
            <div className="flex items-center justify-between text-xs text-brand-muted">
              <span className="font-semibold uppercase tracking-wider text-brand-indigo">
                {currentSign.categoryId.replace('_', ' ')} • {currentSign.difficulty}
              </span>
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 font-bold text-slate-700">
                  {isFlipped ? 'Answer Revealed' : 'Tap Card to Flip'}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    islProgressService.toggleDifficultSign(currentSign.id);
                  }}
                  aria-label={isDifficult ? "Remove from difficult" : "Mark as difficult"}
                  className={`p-1.5 rounded-lg transition-colors ${
                    isDifficult ? 'text-amber-500 bg-amber-50' : 'text-slate-300 hover:text-amber-500'
                  }`}
                >
                  <Star className={`w-4 h-4 ${isDifficult ? 'fill-amber-500' : ''}`} />
                </button>
              </div>
            </div>

            {/* Flashcard Content Depending on Mode & Flip State */}
            <div className="my-auto py-6 text-center">
              {mode === 'meaning_to_sign' ? (
                !isFlipped ? (
                  // Front: Show Concept / Meaning
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Express this in Indian Sign Language:
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
                      {currentSign.meaning}
                    </h2>
                    <p className="text-lg text-brand-teal font-semibold">
                      {currentSign.tamilMeaning}
                    </p>
                    <p className="text-xs text-slate-400 italic">
                      Usage context: {currentSign.usageNotes}
                    </p>
                  </div>
                ) : (
                  // Back: Reveal Verified ISL Demonstration
                  <div className="space-y-4 text-left" onClick={(e) => e.stopPropagation()}>
                    <div className="max-w-md mx-auto">
                      <ISLSignVisualizer sign={currentSign} size="normal" />
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 max-w-md mx-auto text-center">
                      <p className="text-sm font-bold text-brand-navy">
                        {currentSign.demonstration.handConfiguration}
                      </p>
                      <p className="text-xs text-brand-muted mt-1">
                        Movement: {currentSign.demonstration.movement}
                      </p>
                    </div>
                  </div>
                )
              ) : (
                // Mode B: Sign to Meaning
                !isFlipped ? (
                  // Front: Show Verified Sign
                  <div className="max-w-md mx-auto text-left" onClick={(e) => e.stopPropagation()}>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block text-center mb-2">
                      What is the meaning of this ISL sign?
                    </span>
                    <ISLSignVisualizer sign={currentSign} size="normal" />
                  </div>
                ) : (
                  // Back: Reveal Meaning
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                      Verified ISL Meaning:
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
                      {currentSign.meaning}
                    </h2>
                    <p className="text-lg text-brand-teal font-semibold">
                      {currentSign.tamilMeaning}
                    </p>
                    <p className="text-xs text-brand-muted max-w-md mx-auto">
                      {currentSign.usageNotes}
                    </p>
                  </div>
                )
              )}
            </div>

            {/* Bottom Card Footer */}
            <div className="flex items-center justify-between text-xs text-brand-muted pt-3 border-t border-slate-100">
              <span className="flex items-center text-slate-400">
                <Rotate3d className="w-3.5 h-3.5 mr-1" />
                Tap anywhere or press Space to flip
              </span>
              {onOpenStudioLesson && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenStudioLesson(currentSign.id);
                  }}
                  className="font-bold text-brand-indigo hover:underline"
                >
                  View Full Lesson →
                </button>
              )}
            </div>
          </div>

          {/* Action Buttons: Known vs Needs Practice & Navigation */}
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={handlePrev}
              aria-label="Previous card"
              className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:text-brand-navy disabled:opacity-30 disabled:cursor-not-allowed touch-target"
            >
              <ChevronLeft className="w-5 h-5 rtl-mirror" />
            </button>

            <div className="flex-1 grid grid-cols-2 gap-3 max-w-md mx-auto">
              <button
                type="button"
                onClick={handleMarkDifficult}
                className="py-3 px-4 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 font-bold rounded-2xl text-xs sm:text-sm flex items-center justify-center space-x-1.5 touch-target shadow-sm"
              >
                <HelpCircle className="w-4 h-4 text-amber-600" />
                <span>Needs Practice</span>
              </button>

              <button
                type="button"
                onClick={handleMarkKnown}
                className="py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-xs sm:text-sm flex items-center justify-center space-x-1.5 touch-target shadow-md shadow-emerald-700/20"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Mark as Known</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next card"
              className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:text-brand-navy touch-target"
            >
              <ChevronRight className="w-5 h-5 rtl-mirror" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
