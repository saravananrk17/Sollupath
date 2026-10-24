import React, { useState, useEffect, useMemo } from 'react';
import { SignEntry } from '../../data/signLanguages/types';
import { islProgressService } from '../../services/islProgressService';
import { useApp } from '../../context/AppContext';
import {
  Trophy,
  RotateCcw,
  CheckCircle2,
  Bookmark,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface SignMatchingGameProps {
  availableSigns: SignEntry[];
  onOpenSignDetail?: (sign: SignEntry) => void;
}

export const SignMatchingGame: React.FC<SignMatchingGameProps> = ({
  availableSigns,
}) => {
  const { playFeedback } = useApp();

  const [roundKey, setRoundKey] = useState<number>(1);
  const [selectedSignId, setSelectedSignId] = useState<string | null>(null);
  const [selectedMeaningId, setSelectedMeaningId] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [wrongPair, setWrongPair] = useState<{ signId: string; meaningId: string } | null>(null);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);

  // Select 4 random signs for the round
  const currentSigns = useMemo(() => {
    const pool = availableSigns.length >= 4 ? availableSigns : availableSigns;
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(4, pool.length));
  }, [availableSigns, roundKey]);

  // Shuffled meanings
  const shuffledMeanings = useMemo(() => {
    return [...currentSigns].sort(() => 0.5 - Math.random());
  }, [currentSigns]);

  // Reset round state when roundKey changes
  useEffect(() => {
    setSelectedSignId(null);
    setSelectedMeaningId(null);
    setMatchedIds([]);
    setWrongPair(null);
  }, [roundKey]);

  const handleSignClick = (signId: string) => {
    if (matchedIds.includes(signId)) return;
    setSelectedSignId(signId);
    setWrongPair(null);

    // If meaning is already selected, check match
    if (selectedMeaningId) {
      evaluateMatch(signId, selectedMeaningId);
    }
  };

  const handleMeaningClick = (meaningId: string) => {
    if (matchedIds.includes(meaningId)) return;
    setSelectedMeaningId(meaningId);
    setWrongPair(null);

    // If sign is already selected, check match
    if (selectedSignId) {
      evaluateMatch(selectedSignId, meaningId);
    }
  };

  const evaluateMatch = (signId: string, meaningId: string) => {
    if (signId === meaningId) {
      // Correct match!
      playFeedback();
      const nextMatched = [...matchedIds, signId];
      setMatchedIds(nextMatched);
      setScore(prev => prev + 10);
      setStreak(prev => prev + 1);
      setSelectedSignId(null);
      setSelectedMeaningId(null);

      // Record high score
      islProgressService.recordMatchingScore(score + 10);

      // Save to progress
      islProgressService.recordVideoWatch(signId);
    } else {
      // Incorrect match
      setWrongPair({ signId, meaningId });
      setStreak(0);
      setTimeout(() => {
        setSelectedSignId(null);
        setSelectedMeaningId(null);
        setWrongPair(null);
      }, 900);
    }
  };

  const isRoundComplete = currentSigns.length > 0 && matchedIds.length === currentSigns.length;

  const handleNextRound = () => {
    setRoundKey(prev => prev + 1);
  };

  const bookmarkDifficult = (signId: string) => {
    islProgressService.toggleSignRevision(signId);
    playFeedback();
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-sm space-y-6">
      {/* Header with Score and Round Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-50 text-brand-teal text-xs font-bold uppercase tracking-wide mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Matching Challenge</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-navy">
            Match Signs with Meanings
          </h2>
          <p className="text-xs text-brand-muted mt-0.5">
            Select a sign in Column A, then match it with its correct meaning in Column B.
          </p>
        </div>

        {/* Stats Pills */}
        <div className="flex items-center space-x-3">
          <div className="px-3.5 py-1.5 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center space-x-2 text-brand-indigo font-bold text-xs">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>Score: {score} pts</span>
          </div>

          <button
            type="button"
            onClick={handleNextRound}
            className="p-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-brand-navy transition-colors touch-target"
            title="Shuffle / New Round"
            aria-label="Load next matching round"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2-Column Matching Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Column A: Signs */}
        <div className="space-y-3">
          <span className="text-xs font-bold text-brand-muted uppercase tracking-wider block">
            Column A: Sign Demonstrations
          </span>

          <div className="space-y-2.5">
            {currentSigns.map((sign) => {
              const isMatched = matchedIds.includes(sign.id);
              const isSelected = selectedSignId === sign.id;
              const isWrong = wrongPair?.signId === sign.id;

              return (
                <div
                  key={sign.id}
                  role="button"
                  tabIndex={isMatched ? -1 : 0}
                  onClick={() => handleSignClick(sign.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSignClick(sign.id);
                  }}
                  aria-pressed={isSelected}
                  aria-label={`Sign for ${sign.name.en}`}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between touch-target select-none ${
                    isMatched
                      ? 'bg-teal-50/70 border-brand-teal/40 opacity-80 cursor-default'
                      : isWrong
                      ? 'bg-rose-50 border-rose-400 animate-shake'
                      : isSelected
                      ? 'bg-brand-navy text-white border-brand-navy shadow-md scale-[1.01]'
                      : 'bg-white hover:bg-slate-50 border-brand-border hover:border-brand-teal/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold ${
                      isSelected ? 'bg-brand-teal text-brand-navy' : isMatched ? 'bg-brand-teal text-white' : 'bg-slate-100 text-brand-navy'
                    }`}>
                      {isMatched ? <CheckCircle2 className="w-4 h-4" /> : '🤟'}
                    </span>
                    <div>
                      <h4 className={`font-bold text-sm ${isSelected ? 'text-white' : 'text-brand-navy'}`}>
                        {sign.name.en}
                      </h4>
                      {sign.name.ta && (
                        <span className={`text-[11px] block ${isSelected ? 'text-teal-200' : 'text-brand-muted'}`}>
                          {sign.name.ta}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bookmark Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      bookmarkDifficult(sign.id);
                    }}
                    aria-label={`Bookmark ${sign.name.en} for revision`}
                    className={`p-1.5 rounded-lg transition-colors ${
                      isSelected ? 'hover:bg-white/10 text-white' : 'hover:bg-slate-100 text-brand-muted hover:text-amber-500'
                    }`}
                    title="Bookmark for Revision"
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Column B: Meanings */}
        <div className="space-y-3">
          <span className="text-xs font-bold text-brand-muted uppercase tracking-wider block">
            Column B: Meanings & Usage Context
          </span>

          <div className="space-y-2.5">
            {shuffledMeanings.map((sign) => {
              const isMatched = matchedIds.includes(sign.id);
              const isSelected = selectedMeaningId === sign.id;
              const isWrong = wrongPair?.meaningId === sign.id;

              return (
                <div
                  key={`meaning-${sign.id}`}
                  role="button"
                  tabIndex={isMatched ? -1 : 0}
                  onClick={() => handleMeaningClick(sign.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleMeaningClick(sign.id);
                  }}
                  aria-pressed={isSelected}
                  aria-label={`Meaning: ${sign.meaning.en}`}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between touch-target select-none ${
                    isMatched
                      ? 'bg-teal-50/70 border-brand-teal/40 opacity-80 cursor-default'
                      : isWrong
                      ? 'bg-rose-50 border-rose-400 animate-shake'
                      : isSelected
                      ? 'bg-brand-indigo text-white border-brand-indigo shadow-md scale-[1.01]'
                      : 'bg-white hover:bg-slate-50 border-brand-border hover:border-brand-indigo/50'
                  }`}
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      isSelected ? 'bg-white text-brand-indigo' : isMatched ? 'bg-brand-teal text-white' : 'bg-slate-100 text-brand-navy'
                    }`}>
                      {isMatched ? <CheckCircle2 className="w-4 h-4" /> : '💡'}
                    </span>
                    <div className="flex-1">
                      <p className={`text-xs font-medium leading-relaxed ${isSelected ? 'text-white' : 'text-brand-navy'}`}>
                        {sign.meaning.en}
                      </p>
                      {sign.contextOfUse.en && (
                        <p className={`text-[10px] mt-1 line-clamp-1 ${isSelected ? 'text-indigo-200' : 'text-brand-muted'}`}>
                          Context: {sign.contextOfUse.en}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Completion Banner */}
      {isRoundComplete && (
        <div className="bg-gradient-to-r from-teal-900 to-indigo-950 text-white rounded-2xl p-5 border border-teal-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500 text-brand-navy flex items-center justify-center font-bold">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Round Complete! Excellent matching.</h4>
              <p className="text-xs text-teal-200 mt-0.5">
                Current Streak: {streak} correct pairs • High Score: {islProgressService.getProgress().matchingGameHighScore} pts
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleNextRound}
            className="px-5 py-2.5 rounded-xl bg-brand-teal hover:bg-teal-400 text-brand-navy font-bold text-xs flex items-center space-x-2 transition-transform hover:scale-105 touch-target shadow-md"
          >
            <span>Play Next Round</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
