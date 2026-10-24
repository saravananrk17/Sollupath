import React, { useState } from 'react';
import { ISL_SIGNS, getISLSignById } from '../../data/isl/signs';
import { ISLSignVisualizer } from './ISLSignVisualizer';
import { islProgressService } from '../../services/islProgressService';
import { useApp } from '../../context/AppContext';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Star,
  Camera,
  MessageSquarePlus,
  BookOpen,
  Info,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface ISLLessonStudioProps {
  initialSignId?: string;
  onBackToDashboard: () => void;
  onOpenPractice: (signId: string) => void;
}

export const ISLLessonStudio: React.FC<ISLLessonStudioProps> = ({
  initialSignId,
  onBackToDashboard,
  onOpenPractice
}) => {
  const { addPhraseToMessage, setCurrentView } = useApp();
  const [currentSignId, setCurrentSignId] = useState<string>(initialSignId || ISL_SIGNS[0].id);

  const sign = getISLSignById(currentSignId) || ISL_SIGNS[0];
  const isCompleted = islProgressService.isLessonCompleted(sign.id);
  const isDifficult = islProgressService.isDifficultSign(sign.id);

  const currentIndex = ISL_SIGNS.findIndex(s => s.id === sign.id);

  const handleNext = () => {
    if (currentIndex < ISL_SIGNS.length - 1) {
      setCurrentSignId(ISL_SIGNS[currentIndex + 1].id);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentSignId(ISL_SIGNS[currentIndex - 1].id);
    }
  };

  const handleMarkComplete = () => {
    islProgressService.markLessonCompleted(sign.id);
  };

  const handleAddToAACMessage = () => {
    if (sign.linkedPhraseId) {
      addPhraseToMessage(sign.linkedPhraseId);
      setCurrentView('quick');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      {/* Top Navigation */}
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
              <BookOpen className="w-6 h-6 mr-2 text-brand-indigo" />
              ISL Sign Learning Studio
            </h1>
            <p className="text-xs text-brand-muted">
              Lesson {currentIndex + 1} of {ISL_SIGNS.length} • All Essential ISL Curriculum
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => islProgressService.toggleDifficultSign(sign.id)}
            aria-label={isDifficult ? "Saved in difficult list" : "Save for practice"}
            className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-colors touch-target ${
              isDifficult
                ? 'bg-amber-50 text-amber-700 border-amber-300'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Star className={`w-4 h-4 ${isDifficult ? 'fill-amber-500 text-amber-500' : ''}`} />
            <span>{isDifficult ? 'Difficult Sign' : 'Save for Review'}</span>
          </button>

          <button
            type="button"
            onClick={handleMarkComplete}
            aria-label="Mark lesson completed"
            className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-colors touch-target ${
              isCompleted
                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                : 'bg-white hover:bg-emerald-50 text-emerald-700 border-slate-200'
            }`}
          >
            <CheckCircle className={`w-4 h-4 ${isCompleted ? 'fill-emerald-600 text-white' : ''}`} />
            <span>{isCompleted ? 'Completed' : 'Mark Completed'}</span>
          </button>
        </div>
      </div>

      {/* Main Studio Workspace: 2 Balanced Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Visual Sign Kinematics & Media */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-brand-border shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo">
                  {sign.categoryId.replace('_', ' ')} • {sign.difficulty}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mt-1">
                  {sign.meaning}
                </h2>
                <p className="text-lg font-semibold text-brand-teal">
                  {sign.tamilMeaning}
                </p>
              </div>

              {sign.linkedPhraseId && (
                <button
                  type="button"
                  onClick={handleAddToAACMessage}
                  aria-label="Add this sign to SolluPath Message Builder"
                  className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-brand-navy hover:bg-brand-indigo text-white text-xs font-bold shadow-sm transition-transform active:scale-95 touch-target"
                >
                  <MessageSquarePlus className="w-4 h-4" />
                  <span>Add to Message</span>
                </button>
              )}
            </div>

            {/* Visualizer component */}
            <ISLSignVisualizer sign={sign} size="large" showControls={true} />

            {/* Step-by-Step Instructions */}
            <div className="space-y-2 pt-2">
              <h3 className="text-sm font-bold text-brand-navy flex items-center">
                <Info className="w-4 h-4 mr-1.5 text-brand-indigo" />
                Kinematic Movement & Hand Steps:
              </h3>
              <ol className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-decimal list-inside bg-slate-50 p-4 rounded-2xl border border-slate-200">
                {sign.demonstration.steps.map((st, i) => (
                  <li key={i} className="leading-relaxed">
                    <span className="font-semibold text-brand-navy">{st}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Anatomical Breakdown & Practice CTA */}
        <div className="lg:col-span-5 space-y-4">
          {/* Anatomical Parameters Card */}
          <div className="bg-white rounded-3xl p-6 border border-brand-border shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-brand-navy uppercase tracking-wider flex items-center">
              <Sparkles className="w-4 h-4 mr-1.5 text-brand-teal" />
              Sign Formation Parameters
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 bg-brand-ivory rounded-xl border border-brand-border/60">
                <span className="font-bold text-brand-navy block mb-0.5">Hand Configuration:</span>
                <span className="text-brand-muted">{sign.demonstration.handConfiguration}</span>
              </div>

              <div className="p-3 bg-brand-ivory rounded-xl border border-brand-border/60">
                <span className="font-bold text-brand-navy block mb-0.5">Signing Location:</span>
                <span className="text-brand-muted">{sign.demonstration.location}</span>
              </div>

              <div className="p-3 bg-brand-ivory rounded-xl border border-brand-border/60">
                <span className="font-bold text-brand-navy block mb-0.5">Non-Manual Features (Facial):</span>
                <span className="text-brand-muted">{sign.demonstration.nonManual}</span>
              </div>

              <div className="p-3 bg-brand-ivory rounded-xl border border-brand-border/60">
                <span className="font-bold text-brand-navy block mb-0.5">Context & Clinical Usage:</span>
                <span className="text-brand-muted">{sign.usageNotes}</span>
              </div>
            </div>

            {/* Validation Authority Banner */}
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start space-x-2 text-xs text-emerald-900">
              <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block">Standard Verification</span>
                <span>{sign.sourceAttribution}</span>
              </div>
            </div>

            {/* Primary Action: Go to Guided Practice */}
            <button
              type="button"
              onClick={() => onOpenPractice(sign.id)}
              className="w-full py-3.5 px-4 bg-brand-teal hover:bg-teal-700 text-white font-bold rounded-2xl text-sm flex items-center justify-center space-x-2 shadow-lg shadow-teal-700/20 transition-transform active:scale-95 touch-target"
            >
              <Camera className="w-5 h-5" />
              <span>Practise this Sign Now →</span>
            </button>
          </div>

          {/* Quick Lesson Switcher */}
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-brand-border">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={handlePrev}
              aria-label="Previous lesson"
              className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed touch-target text-slate-600"
            >
              <ChevronLeft className="w-5 h-5 rtl-mirror" />
            </button>
            <span className="text-xs font-bold text-brand-navy">
              {currentIndex + 1} of {ISL_SIGNS.length}
            </span>
            <button
              type="button"
              disabled={currentIndex === ISL_SIGNS.length - 1}
              onClick={handleNext}
              aria-label="Next lesson"
              className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed touch-target text-slate-600"
            >
              <ChevronRight className="w-5 h-5 rtl-mirror" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
