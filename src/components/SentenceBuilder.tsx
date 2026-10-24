import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { AAC_PHRASES } from '../data/phrases';
import { INDIAN_LANGUAGES } from '../data/languages';
import { IconRenderer } from './IconRenderer';
import {
  Volume2,
  VolumeX,
  Maximize2,
  Trash2,
  Copy,
  Check,
  Undo2,
  Edit3,
  Globe2,
  ChevronUp,
  ChevronDown,
  X,
  AlertTriangle
} from 'lucide-react';

export const SentenceBuilder: React.FC = () => {
  const {
    settings,
    updateSettings,
    selectedPhraseIds,
    manualMessageText,
    isManualEdited,
    removePhraseAt,
    movePhrase,
    clearMessage,
    updateManualText,
    undoMessage,
    ui,
    communicationLanguage,
    assembledText,
    assembledTransliteration,
    isSpeaking,
    hasVoiceForLanguage,
    speakMessage,
    stopSpeech,
    setCurrentView,
    customPhrases
  } = useApp();

  const [isCopied, setIsCopied] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [isEditingManual, setIsEditingManual] = useState(false);

  const handleCopy = async () => {
    if (!assembledText) return;
    try {
      await navigator.clipboard.writeText(assembledText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleTargetLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateSettings({ communicationLanguage: e.target.value });
  };

  const isEmpty = !assembledText.trim();

  return (
    <section
      aria-label="Message composition workspace"
      className="bg-white rounded-2xl border-2 border-brand-indigo/30 shadow-lg p-5 flex flex-col justify-between sticky top-4 z-20"
    >
      {/* Header with Title and Language Selector */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 flex-wrap gap-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-brand-indigo/10 flex items-center justify-center text-brand-indigo font-bold">
            <span className="text-sm">💬</span>
          </div>
          <div>
            <h2 className="text-base font-bold text-brand-navy">
              {ui.sentenceBuilderTitle}
            </h2>
            <span className="text-xs text-brand-muted">
              {selectedPhraseIds.length} {selectedPhraseIds.length === 1 ? 'phrase' : 'phrases'} assembled
            </span>
          </div>
        </div>

        {/* Target Communication Language Switcher */}
        <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1 text-xs">
          <Globe2 className="w-3.5 h-3.5 text-brand-indigo" />
          <span className="text-brand-muted hidden sm:inline">Output:</span>
          <select
            value={settings.communicationLanguage}
            onChange={handleTargetLanguageChange}
            aria-label="Select output communication language"
            className="bg-transparent font-medium text-brand-navy cursor-pointer focus:outline-none"
          >
            {INDIAN_LANGUAGES.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.nativeName} ({lang.name})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Selected Phrase Chips Stream */}
      {!isManualEdited && selectedPhraseIds.length > 0 && (
        <div className="flex flex-wrap gap-2 py-3 max-h-36 overflow-y-auto">
          {selectedPhraseIds.map((id, index) => {
            const custom = customPhrases.find(c => c.id === id);
            const phrase = AAC_PHRASES.find(p => p.id === id);
            const phraseText = custom
              ? custom.text
              : phrase?.translations[communicationLanguage.id] ||
                phrase?.translations['en'] ||
                phrase?.translations['ta'] ||
                '';

            return (
              <div
                key={`${id}_${index}`}
                className="inline-flex items-center bg-brand-ivory border border-brand-border rounded-xl px-3 py-1.5 text-sm font-medium text-brand-text shadow-sm group hover:border-brand-indigo/50 transition-colors"
              >
                {phrase && (
                  <IconRenderer name={phrase.icon} className="w-3.5 h-3.5 mr-1.5 text-brand-indigo" />
                )}
                <span className="max-w-[200px] truncate">{phraseText}</span>

                <div className="flex items-center ml-2 border-l border-slate-200 pl-1.5 space-x-1">
                  {index > 0 && (
                    <button
                      type="button"
                      aria-label="Move phrase left"
                      onClick={() => movePhrase(index, 'up')}
                      className="p-0.5 text-slate-400 hover:text-brand-navy hover:bg-slate-200 rounded"
                    >
                      <ChevronUp className="w-3 h-3 rotate-[-90deg]" />
                    </button>
                  )}
                  {index < selectedPhraseIds.length - 1 && (
                    <button
                      type="button"
                      aria-label="Move phrase right"
                      onClick={() => movePhrase(index, 'down')}
                      className="p-0.5 text-slate-400 hover:text-brand-navy hover:bg-slate-200 rounded"
                    >
                      <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
                    </button>
                  )}
                  <button
                    type="button"
                    aria-label={`Remove ${phraseText}`}
                    onClick={() => removePhraseAt(index)}
                    className="p-0.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded ml-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Main Assembled Message Box */}
      <div className="my-3 min-h-[110px] bg-slate-50 border border-brand-border/80 rounded-xl p-4 flex flex-col justify-between">
        {isEmpty ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center text-slate-400 py-4">
            <span className="text-2xl mb-1">👆</span>
            <p className="text-sm">
              Tap any phrase card above to compose your message here.
            </p>
          </div>
        ) : isEditingManual ? (
          <div className="flex-1 flex flex-col">
            <textarea
              value={manualMessageText}
              onChange={(e) => updateManualText(e.target.value)}
              placeholder="Edit your message text manually..."
              className="w-full h-24 p-2 text-lg font-medium text-brand-navy bg-white border border-brand-indigo rounded-lg focus:outline-none resize-none"
            />
            <div className="flex justify-end mt-2">
              <button
                type="button"
                onClick={() => setIsEditingManual(false)}
                className="px-3 py-1 bg-brand-navy text-white text-xs font-semibold rounded-lg hover:bg-brand-indigo"
              >
                Done Editing
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-lg md:text-xl font-bold text-brand-navy leading-relaxed">
              {assembledText}
            </p>
            {assembledTransliteration && settings.showTransliteration && (
              <p className="text-xs text-brand-muted italic mt-2 tracking-wide font-normal">
                Guide: {assembledTransliteration}
              </p>
            )}
          </div>
        )}

        {/* Message Status Bar */}
        {!isEmpty && !isEditingManual && (
          <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 mt-3 text-xs text-brand-muted">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-brand-indigo">{communicationLanguage.name}</span>
              {isManualEdited && <span className="text-amber-600">(Custom text edited)</span>}
            </div>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => {
                  updateManualText(assembledText);
                  setIsEditingManual(true);
                }}
                className="inline-flex items-center text-brand-muted hover:text-brand-navy hover:underline"
              >
                <Edit3 className="w-3.5 h-3.5 mr-1" />
                {ui.edit}
              </button>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center text-brand-muted hover:text-brand-navy hover:underline"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                    <span className="text-emerald-600">{ui.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 mr-1" />
                    {ui.copy}
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Voice Warning if device does not support voice */}
      {!isEmpty && !hasVoiceForLanguage && (
        <div className="mb-3 px-3 py-2 bg-amber-50 border border-amber-200 rounded-xl flex items-center text-xs text-amber-800">
          <AlertTriangle className="w-4 h-4 mr-2 text-amber-600 flex-shrink-0" />
          <span>
            {ui.ttsNoVoice} Use the <strong>Display Large</strong> button to show this message in full screen.
          </span>
        </div>
      )}

      {/* Primary Action Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
        {/* Speak / Stop Button */}
        <button
          type="button"
          disabled={isEmpty}
          onClick={isSpeaking ? stopSpeech : () => speakMessage()}
          aria-label={isSpeaking ? ui.stopSpeaking : ui.speak}
          className={`col-span-1 sm:col-span-2 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-bold text-sm md:text-base shadow-sm transition-all touch-target ${
            isEmpty
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
              : isSpeaking
              ? 'bg-rose-600 hover:bg-rose-700 text-white animate-pulse'
              : 'bg-brand-teal hover:bg-teal-700 text-white shadow-teal-700/20 shadow-md'
          }`}
        >
          {isSpeaking ? (
            <>
              <VolumeX className="w-5 h-5" />
              <span>{ui.stopSpeaking}</span>
            </>
          ) : (
            <>
              <Volume2 className="w-5 h-5" />
              <span>{ui.speak}</span>
            </>
          )}
        </button>

        {/* Display Large (Presentation Mode) Button */}
        <button
          type="button"
          disabled={isEmpty}
          onClick={() => setCurrentView('presentation')}
          aria-label={ui.present}
          className={`flex items-center justify-center space-x-1.5 py-3 px-3 rounded-xl font-bold text-sm shadow-sm transition-all touch-target ${
            isEmpty
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
              : 'bg-brand-navy hover:bg-brand-indigo text-white'
          }`}
        >
          <Maximize2 className="w-4 h-4" />
          <span>{ui.present}</span>
        </button>

        {/* Clear / Undo Controls */}
        <div className="flex space-x-1">
          <button
            type="button"
            disabled={isEmpty}
            onClick={undoMessage}
            aria-label={ui.undo}
            title={ui.undo}
            className="flex-1 flex items-center justify-center py-3 px-2 bg-slate-100 hover:bg-slate-200 text-brand-navy rounded-xl font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed touch-target"
          >
            <Undo2 className="w-4 h-4" />
          </button>
          <button
            type="button"
            disabled={isEmpty}
            onClick={() => setShowClearConfirm(true)}
            aria-label={ui.clearMessage}
            title={ui.clearMessage}
            className="flex-1 flex items-center justify-center py-3 px-2 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed touch-target"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Confirmation Dialog for Clearing Message */}
      {showClearConfirm && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={ui.confirmClear}
          className="fixed inset-0 z-50 bg-brand-navy/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy text-center mb-2">
              {ui.clearMessage}
            </h3>
            <p className="text-sm text-brand-muted text-center mb-6">
              {ui.confirmClear}
            </p>
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-brand-text font-semibold rounded-xl text-sm"
              >
                {ui.cancel}
              </button>
              <button
                type="button"
                onClick={() => {
                  clearMessage();
                  setShowClearConfirm(false);
                }}
                className="flex-1 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl text-sm shadow-md shadow-rose-600/20"
              >
                {ui.confirm}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
