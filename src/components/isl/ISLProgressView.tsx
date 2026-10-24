import React, { useState } from 'react';
import { islProgressService, ISLUserProgress } from '../../services/islProgressService';
import { ISL_SIGNS, getISLSignById } from '../../data/isl/signs';
import { ISLTabNav } from './ISLTabNav';
import {
  TrendingUp,
  CheckCircle,
  Layers,
  Star,
  Award,
  Trash2,
  ArrowLeft,
  Calendar
} from 'lucide-react';

interface ISLProgressViewProps {
  onBackToDashboard: () => void;
  onOpenStudioLesson?: (signId: string) => void;
  onOpenPractice?: (signId: string) => void;
}

export const ISLProgressView: React.FC<ISLProgressViewProps> = ({
  onBackToDashboard,
  onOpenStudioLesson,
  onOpenPractice
}) => {
  const [progress, setProgress] = useState<ISLUserProgress>(() => islProgressService.getProgress());
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleReset = () => {
    islProgressService.resetAllProgress();
    setProgress(islProgressService.getProgress());
    setShowResetConfirm(false);
  };

  const completedPercentage = Math.round((progress.completedLessons.length / ISL_SIGNS.length) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Top Unified ISL & Video Tab Navigation */}
      <ISLTabNav currentTab="progress" />

      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={onBackToDashboard}
            aria-label="Back to dashboard"
            className="p-2 text-slate-500 hover:text-brand-navy rounded-xl hover:bg-slate-100 touch-target"
          >
            <ArrowLeft className="w-5 h-5 rtl-mirror" />
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-brand-navy flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-brand-teal" />
              My ISL Learning Progress
            </h1>
            <p className="text-xs text-brand-muted">
              On-device learning metrics, flashcard reviews, and assessment scores
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowResetConfirm(true)}
          className="flex items-center space-x-1 px-3 py-1.5 rounded-xl border border-rose-200 text-rose-700 bg-rose-50 hover:bg-rose-100 text-xs font-bold transition-colors touch-target"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Reset Progress</span>
        </button>
      </div>

      {/* Primary KPI Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-brand-border shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
            <CheckCircle className="w-5 h-5" />
          </div>
          <span className="text-2xl font-black text-brand-navy block">
            {progress.completedLessons.length}
            <span className="text-xs text-slate-400 font-normal"> / {ISL_SIGNS.length}</span>
          </span>
          <span className="text-xs text-brand-muted font-medium">Lessons Completed</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-brand-border shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-2">
            <Layers className="w-5 h-5" />
          </div>
          <span className="text-2xl font-black text-brand-navy block">
            {progress.cardsReviewed}
          </span>
          <span className="text-xs text-brand-muted font-medium">Flashcards Reviewed</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-brand-border shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2">
            <Star className="w-5 h-5" />
          </div>
          <span className="text-2xl font-black text-brand-navy block">
            {progress.difficultSigns.length}
          </span>
          <span className="text-xs text-brand-muted font-medium">Difficult Signs Saved</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-brand-border shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-2">
            <Award className="w-5 h-5" />
          </div>
          <span className="text-2xl font-black text-brand-navy block">
            {progress.quizAttempts.length}
          </span>
          <span className="text-xs text-brand-muted font-medium">Quiz Attempts</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="p-6 bg-white rounded-3xl border border-brand-border shadow-sm space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-brand-navy">
          <span>Overall ISL Curriculum Completion</span>
          <span>{completedPercentage}%</span>
        </div>
        <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
          <div
            style={{ width: `${completedPercentage}%` }}
            className="h-full bg-gradient-to-r from-brand-teal to-brand-indigo rounded-full transition-all duration-500"
          />
        </div>
        <p className="text-[11px] text-brand-muted">
          Based on verified Indian Sign Language Research and Training Centre (ISLRTC) foundational standards.
        </p>
      </div>

      {/* Difficult Signs List */}
      <div className="bg-white rounded-3xl p-6 border border-brand-border shadow-sm space-y-4">
        <h2 className="text-base font-bold text-brand-navy flex items-center">
          <Star className="w-4 h-4 mr-2 text-amber-500 fill-amber-500" />
          Signs Bookmarked for Review ({progress.difficultSigns.length})
        </h2>

        {progress.difficultSigns.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {progress.difficultSigns.map(signId => {
              const sign = getISLSignById(signId);
              if (!sign) return null;
              return (
                <div
                  key={signId}
                  className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-between"
                >
                  <div>
                    <span className="font-bold text-brand-navy text-sm block">
                      {sign.meaning}
                    </span>
                    <span className="text-xs text-brand-teal font-medium">
                      {sign.tamilMeaning}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1">
                    {onOpenPractice && (
                      <button
                        type="button"
                        onClick={() => onOpenPractice(sign.id)}
                        className="px-2.5 py-1 bg-white hover:bg-slate-100 text-brand-navy text-xs font-bold rounded-lg border border-slate-200"
                      >
                        Practise
                      </button>
                    )}
                    {onOpenStudioLesson && (
                      <button
                        type="button"
                        onClick={() => onOpenStudioLesson(sign.id)}
                        className="px-2.5 py-1 bg-brand-navy hover:bg-brand-indigo text-white text-xs font-bold rounded-lg"
                      >
                        Lesson
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-xs text-slate-400 italic">
            No difficult signs bookmarked yet. When studying flashcards or lessons, click the star icon to save signs here.
          </p>
        )}
      </div>

      {/* Recent Quiz Scores */}
      <div className="bg-white rounded-3xl p-6 border border-brand-border shadow-sm space-y-4">
        <h2 className="text-base font-bold text-brand-navy flex items-center">
          <Award className="w-4 h-4 mr-2 text-brand-teal" />
          Recent Quiz Assessment Results
        </h2>

        {progress.quizAttempts.length > 0 ? (
          <div className="space-y-2">
            {progress.quizAttempts.map((att, i) => (
              <div
                key={i}
                className="p-3 rounded-xl border border-slate-200 flex items-center justify-between text-xs"
              >
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span className="font-semibold text-brand-navy">
                    Assessment Attempt #{progress.quizAttempts.length - i}
                  </span>
                  <span className="text-slate-400">
                    ({new Date(att.timestamp).toLocaleDateString()})
                  </span>
                </div>
                <span className="font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {att.score} / {att.total} Correct ({Math.round((att.score / att.total) * 100)}%)
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-400 italic">
            No quiz attempts recorded yet. Head over to the Quiz section to test your knowledge!
          </p>
        )}
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Confirm reset progress"
          className="fixed inset-0 z-50 bg-brand-navy/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy text-center mb-2">
              Reset All ISL Progress?
            </h3>
            <p className="text-xs text-brand-muted text-center mb-6">
              This will clear completed lessons, reviewed flashcard tallies, and quiz records on this device.
            </p>
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-brand-text font-semibold rounded-xl text-xs"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl text-xs shadow-md"
              >
                Reset Progress
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
