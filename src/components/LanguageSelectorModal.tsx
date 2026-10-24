import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { INDIAN_LANGUAGES, LanguageMeta } from '../data/languages';
import { Search, X, Check, Globe, ShieldCheck, Volume2 } from 'lucide-react';

interface LanguageSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LanguageSelectorModal: React.FC<LanguageSelectorModalProps> = ({ isOpen, onClose }) => {
  const { settings, updateSettings, ui } = useApp();
  const [filterQuery, setFilterQuery] = useState('');
  const [targetType, setTargetType] = useState<'interface' | 'communication'>('interface');

  if (!isOpen) return null;

  const filteredLanguages = INDIAN_LANGUAGES.filter((lang) => {
    const q = filterQuery.toLowerCase().trim();
    return (
      lang.name.toLowerCase().includes(q) ||
      lang.nativeName.toLowerCase().includes(q) ||
      lang.id.toLowerCase().includes(q) ||
      lang.script.toLowerCase().includes(q)
    );
  });

  const handleSelectLanguage = (lang: LanguageMeta) => {
    if (targetType === 'interface') {
      updateSettings({ interfaceLanguage: lang.id });
    } else {
      updateSettings({ communicationLanguage: lang.id });
    }
    onClose();
  };

  const currentActiveId = targetType === 'interface'
    ? settings.interfaceLanguage
    : settings.communicationLanguage;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Select Language"
      className="fixed inset-0 z-50 bg-brand-navy/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 animate-in fade-in">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-brand-indigo/10 flex items-center justify-center text-brand-indigo">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-brand-navy">
                {ui.languageSelect}
              </h2>
              <p className="text-xs text-brand-muted">
                Supporting all 22 Eighth Schedule Indian Languages + English
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

        {/* Tab switch for Interface vs Communication Language */}
        <div className="px-5 pt-3 pb-1 flex space-x-2 border-b border-slate-100">
          <button
            type="button"
            onClick={() => setTargetType('interface')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              targetType === 'interface'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'bg-slate-100 text-brand-muted hover:bg-slate-200'
            }`}
          >
            Interface Language
          </button>
          <button
            type="button"
            onClick={() => setTargetType('communication')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              targetType === 'communication'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'bg-slate-100 text-brand-muted hover:bg-slate-200'
            }`}
          >
            Communication Output Language
          </button>
        </div>

        {/* Search input */}
        <div className="p-5 pb-2">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Search by English or native script (e.g. தமிழ், Hindi, বাংলা)..."
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-indigo/30 focus:border-brand-indigo"
            />
            {filterQuery && (
              <button
                type="button"
                onClick={() => setFilterQuery('')}
                aria-label="Clear language search"
                className="absolute right-3 top-2.5 p-1 text-slate-400 hover:text-slate-600 rounded-md"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Language Grid */}
        <div className="p-5 overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filteredLanguages.map((lang) => {
            const isSelected = lang.id === currentActiveId;
            return (
              <button
                key={lang.id}
                type="button"
                onClick={() => handleSelectLanguage(lang)}
                className={`flex items-start justify-between p-3.5 rounded-2xl border text-left transition-all select-none touch-target ${
                  isSelected
                    ? 'bg-brand-indigo/10 border-brand-indigo ring-2 ring-brand-indigo/30'
                    : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-brand-navy">
                      {lang.nativeName}
                    </span>
                    {lang.direction === 'rtl' && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold uppercase">
                        RTL
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-brand-muted font-medium">
                    {lang.name} • {lang.script}
                  </span>
                  
                  {/* Coverage & Status Badges */}
                  <div className="mt-2 flex items-center space-x-2 text-[11px]">
                    <span
                      className={`inline-flex items-center font-semibold px-2 py-0.5 rounded-full ${
                        lang.coveragePercent >= 90
                          ? 'bg-emerald-100 text-emerald-800'
                          : lang.coveragePercent >= 70
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      <ShieldCheck className="w-3 h-3 mr-1" />
                      {lang.coveragePercent}% Curated
                    </span>

                    {lang.speechSupportTier === 'widespread' && (
                      <span className="text-teal-700 font-medium inline-flex items-center" title="Wide speech voice support">
                        <Volume2 className="w-3 h-3 mr-0.5" />
                        Voice Ready
                      </span>
                    )}
                  </div>
                </div>

                {isSelected && (
                  <div className="w-6 h-6 rounded-full bg-brand-indigo text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 rounded-b-3xl text-center text-xs text-brand-muted">
          All curated phrases work 100% offline. Switching language translates your draft instantly.
        </div>
      </div>
    </div>
  );
};
