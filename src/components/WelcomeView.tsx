import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SignVideoBackground } from './video/SignVideoBackground';
import { SignVideoPlayer } from './video/SignVideoPlayer';
import { signLanguageRegistry } from '../data/signLanguages/registry';
import {
  ArrowRight,
  Zap,
  Globe,
  ShieldCheck,
  CheckCircle,
  Stethoscope,
  Bus,
  Pill,
  Sparkles,
  Video,
  BookOpen,
  Layers,
  Camera,
  Award,
  Play
} from 'lucide-react';

interface WelcomeViewProps {
  onOpenLanguageModal: () => void;
}

export const WelcomeView: React.FC<WelcomeViewProps> = ({ onOpenLanguageModal }) => {
  const { setCurrentView, settings, updateSettings, ui } = useApp();
  const [welcomeTab, setWelcomeTab] = useState<'start' | 'video_preview' | 'curriculum'>('start');

  const previewSign = signLanguageRegistry.getSignById('isl_namaste') ||
                      signLanguageRegistry.getSignsForLanguage('isl')[0];

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-12 space-y-8 animate-fade-in">
      {/* Living Sign Language Video Background Hero */}
      <SignVideoBackground
        posterTitle="Living Sign Language Poster"
        posterSubtitle="Verified Indian Sign Language Greeting (Namaste)"
        className="mb-8"
      >
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-400/20 border border-teal-400/40 text-teal-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VBYLD 2027 • Assistive Communication (AAC) & Indian Sign Language</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            SolluPath <span className="text-teal-300">சொல்லுபாதை</span>
          </h1>

          <p className="text-lg sm:text-xl font-semibold text-teal-200">
            {ui.tagline}
          </p>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
            A premium assistive communication platform designed for people who experience speech difficulties. Express essential healthcare, transit, and daily needs across all 22 scheduled Indian languages with visual cards, voice synthesis, and verified sign language video demonstrations.
          </p>

          {/* Quick Direct Action Tabs on Welcome Hero */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setCurrentView('home')}
              aria-label={ui.startCommunicating}
              className="px-6 py-3.5 rounded-2xl bg-brand-teal hover:bg-teal-400 text-slate-950 font-bold text-sm shadow-xl flex items-center space-x-2 transition-transform hover:scale-105 active:scale-95 touch-target"
            >
              <span>{ui.startCommunicating}</span>
              <ArrowRight className="w-4 h-4 rtl-mirror" />
            </button>

            <button
              type="button"
              onClick={() => setCurrentView('sign_library')}
              className="px-5 py-3.5 rounded-2xl bg-indigo-500/20 hover:bg-indigo-500/30 text-white font-bold text-sm border border-indigo-400/40 flex items-center space-x-2 transition-colors touch-target shadow-sm"
            >
              <Video className="w-4 h-4 text-indigo-300" />
              <span>Sign Video Library</span>
            </button>

            <button
              type="button"
              onClick={() => setCurrentView('isl_dashboard')}
              className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 flex items-center space-x-2 transition-colors touch-target shadow-sm"
            >
              <BookOpen className="w-4 h-4 text-teal-300" />
              <span>ISL Learn & Practise</span>
            </button>

            <button
              type="button"
              onClick={() => setCurrentView('isl_flashcards')}
              className="px-4 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 flex items-center space-x-2 transition-colors touch-target shadow-sm"
            >
              <Layers className="w-4 h-4 text-amber-300" />
              <span>Flashcards</span>
            </button>
          </div>
        </div>
      </SignVideoBackground>

      {/* Welcome Mode Tabs */}
      <div className="bg-white p-1.5 rounded-2xl border border-slate-200 shadow-xs flex items-center space-x-2 overflow-x-auto scrollbar-thin">
        <button
          type="button"
          onClick={() => setWelcomeTab('start')}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all touch-target ${
            welcomeTab === 'start'
              ? 'bg-brand-navy text-white shadow-sm'
              : 'text-slate-600 hover:text-brand-navy hover:bg-slate-100'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>Getting Started & Language Choice</span>
        </button>

        <button
          type="button"
          onClick={() => setWelcomeTab('video_preview')}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all touch-target ${
            welcomeTab === 'video_preview'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50'
          }`}
        >
          <Video className="w-4 h-4" />
          <span>Sign Video Player Feature</span>
          <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-indigo-200 text-indigo-900 font-bold ml-1">
            Explore
          </span>
        </button>

        <button
          type="button"
          onClick={() => setWelcomeTab('curriculum')}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all touch-target ${
            welcomeTab === 'curriculum'
              ? 'bg-teal-600 text-white shadow-sm'
              : 'text-slate-600 hover:text-teal-600 hover:bg-teal-50'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>ISL Learning Curriculum</span>
        </button>
      </div>

      {welcomeTab === 'start' && (
        <>
          {/* Language Selection Quick Choice Cards */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-sm text-left">
            <h2 className="text-sm font-bold text-brand-navy uppercase tracking-wider mb-4 flex items-center">
              <Globe className="w-4 h-4 mr-2 text-brand-indigo" />
              Select Your Primary Language (முதன்மை மொழியைத் தேர்வு செய்க)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Tamil Card */}
              <button
                type="button"
                onClick={() => updateSettings({ interfaceLanguage: 'ta', communicationLanguage: 'ta' })}
                className={`p-4 rounded-2xl border text-left transition-all touch-target ${
                  settings.interfaceLanguage === 'ta'
                    ? 'bg-brand-indigo/10 border-brand-indigo ring-2 ring-brand-indigo/30'
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl font-bold text-brand-navy">தமிழ்</span>
                  {settings.interfaceLanguage === 'ta' && (
                    <CheckCircle className="w-4 h-4 text-brand-indigo" />
                  )}
                </div>
                <span className="text-xs text-brand-muted font-medium">Tamil • Approved</span>
              </button>

              {/* English Card */}
              <button
                type="button"
                onClick={() => updateSettings({ interfaceLanguage: 'en', communicationLanguage: 'en' })}
                className={`p-4 rounded-2xl border text-left transition-all touch-target ${
                  settings.interfaceLanguage === 'en'
                    ? 'bg-brand-indigo/10 border-brand-indigo ring-2 ring-brand-indigo/30'
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl font-bold text-brand-navy">English</span>
                  {settings.interfaceLanguage === 'en' && (
                    <CheckCircle className="w-4 h-4 text-brand-indigo" />
                  )}
                </div>
                <span className="text-xs text-brand-muted font-medium">English • Anchor</span>
              </button>

              {/* Hindi Card */}
              <button
                type="button"
                onClick={() => updateSettings({ interfaceLanguage: 'hi', communicationLanguage: 'hi' })}
                className={`p-4 rounded-2xl border text-left transition-all touch-target ${
                  settings.interfaceLanguage === 'hi'
                    ? 'bg-brand-indigo/10 border-brand-indigo ring-2 ring-brand-indigo/30'
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl font-bold text-brand-navy">हिन्दी</span>
                  {settings.interfaceLanguage === 'hi' && (
                    <CheckCircle className="w-4 h-4 text-brand-indigo" />
                  )}
                </div>
                <span className="text-xs text-brand-muted font-medium">Hindi • Curated</span>
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span className="text-xs text-brand-muted">
                Or pick from all 22 scheduled Indian languages (Telugu, Bengali, Kannada, Urdu, Malayalam, etc.)
              </span>
              <button
                type="button"
                onClick={onOpenLanguageModal}
                className="text-xs font-bold text-brand-indigo hover:text-brand-navy underline"
              >
                Browse All 22 Languages →
              </button>
            </div>
          </div>

          {/* Purposeful AAC Situations Preview Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <div className="p-4 rounded-2xl bg-white border border-brand-border shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-2">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-brand-navy text-sm">Hospitals & Clinics</h3>
              <p className="text-xs text-brand-muted mt-1">Communicate pain, symptoms, and doctor calls.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-brand-border shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                <Pill className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-brand-navy text-sm">Pharmacies</h3>
              <p className="text-xs text-brand-muted mt-1">Ask for prescriptions, dosage, and written steps.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-brand-border shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                <Bus className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-brand-navy text-sm">Public Transit</h3>
              <p className="text-xs text-brand-muted mt-1">Inquire bus stops, directions, and conductor alerts.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-brand-border shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-2">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-brand-navy text-sm">Quick Needs</h3>
              <p className="text-xs text-brand-muted mt-1">Immediate food, water, restroom, and assistance.</p>
            </div>
          </div>
        </>
      )}

      {welcomeTab === 'video_preview' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm text-left space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                Interactive Video Player
              </span>
              <h2 className="text-2xl font-bold text-brand-navy mt-1">
                Verified Sign Language Demonstrations
              </h2>
              <p className="text-sm text-brand-muted mt-1">
                Watch native signers perform verified ISLRTC signs with speed controls (0.5x, 0.75x, 1x), closed captions, and regional variants.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setCurrentView('sign_library')}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center space-x-1.5 touch-target whitespace-nowrap"
            >
              <span>Open Sign Library ({signLanguageRegistry.getCollections().length} languages)</span>
              <ArrowRight className="w-4 h-4 rtl-mirror" />
            </button>
          </div>

          {previewSign && (
            <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden border border-slate-200">
              <SignVideoPlayer
                sign={previewSign}
                autoPlay={false}
                loop={true}
                showSubtitlesDefault={true}
              />
            </div>
          )}
        </div>
      )}

      {welcomeTab === 'curriculum' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm text-left space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2.5 py-0.5 rounded-full">
              Full Learning Framework
            </span>
            <h2 className="text-2xl font-bold text-brand-navy mt-1">
              Indian Sign Language (ISL) Interactive Modules
            </h2>
            <p className="text-sm text-brand-muted mt-1">
              Aligned with the Indian Sign Language Research and Training Centre (ISLRTC) standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              role="button"
              tabIndex={0}
              onClick={() => setCurrentView('isl_studio')}
              className="p-5 rounded-2xl border border-teal-200 bg-teal-50/50 hover:bg-teal-50 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-500 text-white flex items-center justify-center mb-3">
                <Play className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-brand-navy text-base">Step-by-Step Lesson Studio</h3>
              <p className="text-xs text-brand-muted mt-1">
                Breakdown of hand configuration, movement direction, orientation, and non-manual facial cues.
              </p>
            </div>

            <div
              role="button"
              tabIndex={0}
              onClick={() => setCurrentView('isl_flashcards')}
              className="p-5 rounded-2xl border border-indigo-200 bg-indigo-50/50 hover:bg-indigo-50 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500 text-white flex items-center justify-center mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-brand-navy text-base">Interactive Video Flashcards</h3>
              <p className="text-xs text-brand-muted mt-1">
                Flip cards to reveal verified video playback, kinematic diagrams, and regional variants.
              </p>
            </div>

            <div
              role="button"
              tabIndex={0}
              onClick={() => setCurrentView('isl_practice')}
              className="p-5 rounded-2xl border border-rose-200 bg-rose-50/50 hover:bg-rose-50 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center mb-3">
                <Camera className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-brand-navy text-base">Guided Camera Practice</h3>
              <p className="text-xs text-brand-muted mt-1">
                Real-time camera feed with step guidance, posture matching, and privacy-preserving local processing.
              </p>
            </div>

            <div
              role="button"
              tabIndex={0}
              onClick={() => setCurrentView('isl_quiz')}
              className="p-5 rounded-2xl border border-amber-200 bg-amber-50/50 hover:bg-amber-50 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-brand-navy text-base">Assessments & Quizzes</h3>
              <p className="text-xs text-brand-muted mt-1">
                Test your knowledge through multiple-choice recognition quizzes and earn achievement badges.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Privacy & No-Account Statement */}
      <div className="p-4 rounded-2xl bg-slate-100/70 border border-slate-200 text-xs text-brand-muted flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
        <span className="flex items-center text-slate-700 font-semibold">
          <ShieldCheck className="w-4 h-4 mr-1.5 text-brand-teal" />
          {ui.noAccountRequired}
        </span>
        <span className="hidden sm:inline">•</span>
        <span>{ui.privacyStatement}</span>
      </div>
    </div>
  );
};
