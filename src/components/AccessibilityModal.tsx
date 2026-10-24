import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { storageService } from '../services/storageService';
import {
  X,
  Sliders,
  Eye,
  Type,
  Gauge,
  Volume2,
  Trash2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface AccessibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccessibilityModal: React.FC<AccessibilityModalProps> = ({ isOpen, onClose }) => {
  const { settings, updateSettings, ui } = useApp();
  const [clearedNotice, setClearedNotice] = useState(false);

  if (!isOpen) return null;

  const handleResetData = () => {
    if (window.confirm('Are you sure you want to clear all locally saved favorites, custom phrases, and settings?')) {
      storageService.clearAllData();
      setClearedNotice(true);
      setTimeout(() => {
        window.location.reload();
      }, 1200);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={ui.accessibilitySettings}
      className="fixed inset-0 z-50 bg-brand-navy/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 animate-in fade-in">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-brand-navy">
                {ui.accessibilitySettings}
              </h2>
              <p className="text-xs text-brand-muted">
                Tailored for physical, cognitive, and visual accessibility
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close settings"
            className="p-2 text-slate-400 hover:text-brand-navy hover:bg-slate-100 rounded-xl transition-colors touch-target"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Text Size Scale */}
          <div>
            <label className="flex items-center text-sm font-bold text-brand-navy mb-2">
              <Type className="w-4 h-4 mr-2 text-brand-indigo" />
              {ui.textSize}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['standard', 'large', 'xlarge'] as const).map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => updateSettings({ textSize: size })}
                  className={`py-3 px-3 rounded-xl border text-sm font-bold capitalize transition-all touch-target ${
                    settings.textSize === size
                      ? 'bg-brand-navy text-white border-brand-navy shadow-sm'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-brand-text'
                  }`}
                >
                  {size === 'standard' ? 'Standard (16px)' : size === 'large' ? 'Large (18px)' : 'Extra Large (21px)'}
                </button>
              ))}
            </div>
          </div>

          {/* High Contrast Mode Toggle */}
          <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-slate-200 flex items-center justify-center text-slate-700">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-brand-navy block">
                  {ui.highContrast}
                </span>
                <span className="text-xs text-brand-muted">
                  Maximized contrast for low vision or outdoor daylight
                </span>
              </div>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={settings.highContrast}
              onClick={() => updateSettings({ highContrast: !settings.highContrast })}
              className={`w-14 h-8 rounded-full p-1 transition-colors touch-target flex items-center ${
                settings.highContrast ? 'bg-brand-teal' : 'bg-slate-300'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
                  settings.highContrast ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Speech Rate Adjustment */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="flex items-center text-sm font-bold text-brand-navy">
                <Gauge className="w-4 h-4 mr-2 text-brand-indigo" />
                {ui.speechRate} ({settings.speechRate}x)
              </label>
              <span className="text-xs text-brand-muted">
                {settings.speechRate <= 0.8 ? 'Slow & Deliberate' : settings.speechRate >= 1.2 ? 'Fast' : 'Natural'}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[0.75, 1.0, 1.25].map((rate) => (
                <button
                  key={rate}
                  type="button"
                  onClick={() => updateSettings({ speechRate: rate })}
                  className={`py-2.5 px-3 rounded-xl border text-sm font-bold transition-all touch-target ${
                    settings.speechRate === rate
                      ? 'bg-brand-indigo text-white border-brand-indigo shadow-sm'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-brand-text'
                  }`}
                >
                  {rate}x Speed
                </button>
              ))}
            </div>
          </div>

          {/* Pronunciation / Transliteration Toggle */}
          <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-brand-navy block">
                  {ui.transliterationToggle}
                </span>
                <span className="text-xs text-brand-muted">
                  Displays phonetic Latin guide under Indic scripts for caregivers
                </span>
              </div>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={settings.showTransliteration}
              onClick={() => updateSettings({ showTransliteration: !settings.showTransliteration })}
              className={`w-14 h-8 rounded-full p-1 transition-colors touch-target flex items-center ${
                settings.showTransliteration ? 'bg-brand-teal' : 'bg-slate-300'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
                  settings.showTransliteration ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Sound / Audio Tap Feedback Toggle */}
          <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700">
                <Volume2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-brand-navy block">
                  {ui.soundFeedback}
                </span>
                <span className="text-xs text-brand-muted">
                  Gentle synthesized chime when tapping communication tiles
                </span>
              </div>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={settings.soundFeedback}
              onClick={() => updateSettings({ soundFeedback: !settings.soundFeedback })}
              className={`w-14 h-8 rounded-full p-1 transition-colors touch-target flex items-center ${
                settings.soundFeedback ? 'bg-brand-teal' : 'bg-slate-300'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
                  settings.soundFeedback ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Local Data Clear */}
          <div className="pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={handleResetData}
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-sm transition-colors touch-target"
            >
              <Trash2 className="w-4 h-4" />
              <span>Clear All Local App Data & Preferences</span>
            </button>
            {clearedNotice && (
              <p className="text-xs text-emerald-600 font-semibold text-center mt-2 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 mr-1" />
                Data cleared successfully. Refreshing...
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 rounded-b-3xl text-center text-xs text-brand-muted">
          Engineered targeting WCAG 2.2 Level AA accessibility standards.
        </div>
      </div>
    </div>
  );
};
