import React from 'react';
import { X, Heart, Shield, BookOpen, AlertCircle, Info, CheckCircle2 } from 'lucide-react';

interface HelpAboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpAboutModal: React.FC<HelpAboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Help and About SolluPath"
      className="fixed inset-0 z-50 bg-brand-navy/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 animate-in fade-in">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-brand-indigo/10 flex items-center justify-center text-brand-indigo">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-brand-navy">
                SolluPath — சொல்லுபாதை
              </h2>
              <p className="text-xs text-brand-muted">
                Your Voice, Your Way | Assistive Communication Platform
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 text-slate-400 hover:text-brand-navy hover:bg-slate-100 rounded-xl transition-colors touch-target"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-brand-text leading-relaxed">
          {/* Mission */}
          <div className="p-4 bg-brand-ivory rounded-2xl border border-brand-border">
            <div className="flex items-center space-x-2 text-brand-indigo font-bold mb-1">
              <Heart className="w-4 h-4 fill-brand-indigo" />
              <span>Social Cause & Mission</span>
            </div>
            <p className="text-xs text-brand-muted">
              SolluPath empowers individuals who experience speech difficulties (aphasia, cerebral palsy, stroke recovery, autism, tracheostomy, post-surgery silence, or trauma) to communicate with dignity in hospitals, clinics, transit, and daily interactions across India.
            </p>
          </div>

          {/* Quick Guide */}
          <div>
            <h3 className="font-bold text-brand-navy flex items-center mb-2">
              <BookOpen className="w-4 h-4 mr-2 text-brand-teal" />
              How to Communicate in 3 Steps
            </h3>
            <ol className="space-y-2 text-xs text-brand-muted list-decimal list-inside pl-1">
              <li>
                <strong className="text-brand-navy">Select a Category or Situation:</strong> Tap Hospital, Pharmacy, Transport, or Quick Needs.
              </li>
              <li>
                <strong className="text-brand-navy">Tap Phrase Cards:</strong> Visual cards are instantly assembled in the Sentence Builder.
              </li>
              <li>
                <strong className="text-brand-navy">Present or Speak:</strong> Tap <em>Display Large</em> to show your message to a doctor/caregiver, or tap <em>Speak</em> for voice output.
              </li>
            </ol>
          </div>

          {/* Privacy & Safety Guarantee */}
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
            <h3 className="font-bold text-emerald-900 flex items-center mb-1 text-xs uppercase tracking-wider">
              <Shield className="w-4 h-4 mr-1.5 text-emerald-700" />
              100% Privacy & Local-First Architecture
            </h3>
            <ul className="text-xs text-emerald-800 space-y-1">
              <li className="flex items-start">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 mt-0.5 text-emerald-600 flex-shrink-0" />
                No registration, login, or tracking cookies required.
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 mt-0.5 text-emerald-600 flex-shrink-0" />
                Your messages, favorites, and settings never leave your device.
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 mt-0.5 text-emerald-600 flex-shrink-0" />
                Complete offline PWA availability once loaded.
              </li>
            </ul>
          </div>

          {/* Limitations and Disclaimer */}
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900">
            <div className="flex items-center space-x-1.5 font-bold mb-1 text-amber-800">
              <AlertCircle className="w-4 h-4 text-amber-700" />
              <span>Important Medical Disclaimer</span>
            </div>
            <p>
              SolluPath is an assistive communication aid (AAC) and does not provide medical diagnosis, prescription advice, or direct emergency dispatch. In life-threatening emergencies, alert nearby medical personnel or dial 112 / 108.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 rounded-b-3xl text-center text-xs text-brand-muted">
          VBYLD 2027 | Hack for Social Cause | Assistive Technology & Accessibility
        </div>
      </div>
    </div>
  );
};
