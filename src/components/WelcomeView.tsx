import React from 'react';
import { useApp } from '../context/AppContext';
import {
  ArrowRight,
  Zap,
  Globe,
  ShieldCheck,
  CheckCircle,
  Stethoscope,
  Bus,
  Pill,
  Sparkles
} from 'lucide-react';

interface WelcomeViewProps {
  onOpenLanguageModal: () => void;
}

export const WelcomeView: React.FC<WelcomeViewProps> = ({ onOpenLanguageModal }) => {
  const { setCurrentView, settings, updateSettings, ui } = useApp();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-16">
      {/* Hero Badge */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo text-xs font-bold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>VBYLD 2027 • Assistive Communication (AAC)</span>
        </div>

        {/* Wordmark and Tagline */}
        <h1 className="text-4xl sm:text-6xl font-black text-brand-navy tracking-tight leading-tight mb-4">
          SolluPath <span className="text-brand-indigo">சொல்லுபாதை</span>
        </h1>
        <p className="text-xl sm:text-2xl font-semibold text-brand-teal mb-6">
          {ui.tagline}
        </p>
        <p className="text-base sm:text-lg text-brand-muted leading-relaxed mb-8">
          A premium assistive communication platform designed for people who experience speech difficulties. Express essential healthcare, transit, and daily needs across all 22 scheduled Indian languages with dignity.
        </p>

        {/* Language Selection Quick Choice Cards */}
        <div className="bg-white rounded-3xl p-6 border border-brand-border shadow-sm mb-10 text-left">
          <h2 className="text-sm font-bold text-brand-navy uppercase tracking-wider mb-3 flex items-center">
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

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
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

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            type="button"
            onClick={() => setCurrentView('home')}
            aria-label={ui.startCommunicating}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-navy hover:bg-brand-indigo text-white font-bold text-base shadow-xl shadow-brand-navy/20 flex items-center justify-center space-x-2 transition-transform active:scale-95 touch-target"
          >
            <span>{ui.startCommunicating}</span>
            <ArrowRight className="w-5 h-5 rtl-mirror" />
          </button>

          <button
            type="button"
            onClick={() => setCurrentView('quick')}
            aria-label={ui.quickCommunication}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-teal hover:bg-teal-700 text-white font-bold text-base shadow-xl shadow-brand-teal/20 flex items-center justify-center space-x-2 transition-transform active:scale-95 touch-target"
          >
            <Zap className="w-5 h-5" />
            <span>{ui.quickCommunication}</span>
          </button>
        </div>

        {/* Purposeful AAC Situations Preview Preview Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left mb-12">
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
    </div>
  );
};
