import React from 'react';
import { ISL_CATEGORIES } from '../../data/isl/categories';
import { ISL_SIGNS } from '../../data/isl/signs';
import { islProgressService } from '../../services/islProgressService';
import { IconRenderer } from '../IconRenderer';
import {
  BookOpen,
  Layers,
  Camera,
  Award,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface ISLDashboardProps {
  onNavigateSubView: (view: 'studio' | 'flashcards' | 'practice' | 'quiz' | 'progress', signId?: string) => void;
}

export const ISLDashboard: React.FC<ISLDashboardProps> = ({ onNavigateSubView }) => {
  const progress = islProgressService.getProgress();

  // Find next uncompleted sign
  const nextSign = ISL_SIGNS.find(s => !progress.completedLessons.includes(s.id)) || ISL_SIGNS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-brand-navy via-brand-indigo to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-700/50">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-teal/20 border border-brand-teal/40 text-teal-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLLUPATH 2.0 • INDIAN SIGN LANGUAGE (ISL)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Learn. Practise. Communicate.
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            Master verified Indian Sign Language (ISL) signs for hospitals, pharmacies, transit, and daily interaction. Study interactive flashcards, practice with real-time feedback, and connect signs directly with your communication cards.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigateSubView('studio', nextSign.id)}
              className="px-6 py-3 rounded-2xl bg-brand-teal hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-teal-700/20 flex items-center space-x-2 transition-transform active:scale-95 touch-target"
            >
              <BookOpen className="w-4 h-4" />
              <span>Continue Learning ({nextSign.meaning}) →</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigateSubView('flashcards')}
              className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 flex items-center space-x-2 transition-colors touch-target"
            >
              <Layers className="w-4 h-4" />
              <span>Interactive Flashcards</span>
            </button>
          </div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-brand-teal/10 blur-3xl pointer-events-none" />
      </div>

      {/* 4 Core Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Pillar 1: Sign Learning Studio */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => onNavigateSubView('studio')}
          className="p-6 rounded-3xl bg-white border border-brand-border hover:border-brand-indigo/60 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between touch-target select-none"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-brand-indigo flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-brand-navy text-lg group-hover:text-brand-indigo transition-colors">
              Sign Learning Studio
            </h3>
            <p className="text-xs text-brand-muted mt-1 leading-relaxed">
              Step-by-step visual lessons with slow-motion kinematic controls, Tamil explanations, and anatomical parameters.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-indigo">
            <span>Explore Lessons</span>
            <ArrowRight className="w-4 h-4 rtl-mirror group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Pillar 2: Interactive Flashcards */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => onNavigateSubView('flashcards')}
          className="p-6 rounded-3xl bg-white border border-brand-border hover:border-brand-teal/60 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between touch-target select-none"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-brand-teal flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-brand-navy text-lg group-hover:text-brand-teal transition-colors">
              Sign Flashcards
            </h3>
            <p className="text-xs text-brand-muted mt-1 leading-relaxed">
              4 adaptive study modes: Meaning → Sign, Sign → Meaning, Sign Recall, and targeted Difficult Sign review.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-teal">
            <span>Start Practice Deck</span>
            <ArrowRight className="w-4 h-4 rtl-mirror group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Pillar 3: Guided Practice Workspace */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => onNavigateSubView('practice')}
          className="p-6 rounded-3xl bg-white border border-brand-border hover:border-rose-400/60 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between touch-target select-none"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Camera className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-brand-navy text-lg group-hover:text-rose-600 transition-colors">
              Guided Practice
            </h3>
            <p className="text-xs text-brand-muted mt-1 leading-relaxed">
              Side-by-side reference mirroring with optional camera recognition and local-only privacy processing.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-rose-600">
            <span>Open Practice Studio</span>
            <ArrowRight className="w-4 h-4 rtl-mirror group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Pillar 4: Quizzes & Assessment */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => onNavigateSubView('quiz')}
          className="p-6 rounded-3xl bg-white border border-brand-border hover:border-amber-400/60 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between touch-target select-none"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-brand-navy text-lg group-hover:text-amber-600 transition-colors">
              Practice Quizzes
            </h3>
            <p className="text-xs text-brand-muted mt-1 leading-relaxed">
              Test your recall on hospital, emergency, and transit scenarios with immediate educational explanations.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600">
            <span>Take Quick Quiz</span>
            <ArrowRight className="w-4 h-4 rtl-mirror group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Progress & Quick Stats Card */}
      <div className="bg-white rounded-3xl p-6 border border-brand-border shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-ivory border border-slate-200 flex items-center justify-center text-brand-teal">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-brand-indigo uppercase tracking-wider">
              Learning Activity
            </span>
            <h4 className="text-base font-bold text-brand-navy">
              {progress.completedLessons.length} lessons completed • {progress.cardsReviewed} flashcard reviews
            </h4>
            <p className="text-xs text-brand-muted">
              {progress.difficultSigns.length} difficult signs saved for targeted review
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onNavigateSubView('progress')}
          className="px-5 py-2.5 bg-brand-navy hover:bg-brand-indigo text-white text-xs font-bold rounded-xl shadow-sm touch-target"
        >
          View Full Progress Report →
        </button>
      </div>

      {/* Curriculum Categories Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-brand-navy">
              ISL Curriculum Categories
            </h2>
            <p className="text-xs text-brand-muted">
              Structured modules conforming to Indian Sign Language Research and Training Centre standards
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ISL_CATEGORIES.map(category => (
            <div
              key={category.id}
              role="button"
              tabIndex={0}
              onClick={() => onNavigateSubView('studio')}
              className="p-5 rounded-2xl bg-white border border-brand-border hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer group touch-target select-none"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-brand-ivory border border-slate-200 flex items-center justify-center text-brand-indigo group-hover:scale-105 transition-transform">
                  <IconRenderer name={category.icon} className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-sm">
                    {category.name}
                  </h4>
                  <span className="text-xs text-brand-teal font-medium">
                    {category.translations.ta}
                  </span>
                </div>
              </div>
              <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed">
                {category.description.en}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Standards & Transparency Disclosure */}
      <div className="p-4 bg-slate-100/70 rounded-2xl border border-slate-200 text-xs text-brand-muted flex items-start space-x-3">
        <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-slate-800">
            Authentic Indian Sign Language (ISL) Standard
          </p>
          <p className="leading-relaxed">
            Content is specifically curated based on Indian Sign Language (ISL) as standardized by the <strong>Indian Sign Language Research and Training Centre (ISLRTC)</strong>. ISL has its own distinct syntax, two-handed manual alphabet, and vocabulary, distinct from ASL (American Sign Language) or BSL (British Sign Language).
          </p>
        </div>
      </div>
    </div>
  );
};
