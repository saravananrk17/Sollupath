import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Volume2,
  VolumeX,
  ZoomIn,
  ZoomOut,
  Moon,
  Sun,
  Maximize,
  Minimize
} from 'lucide-react';

export const PresentationModal: React.FC = () => {
  const {
    assembledText,
    assembledTransliteration,
    communicationLanguage,
    settings,
    ui,
    isSpeaking,
    hasVoiceForLanguage,
    speakMessage,
    stopSpeech,
    setCurrentView
  } = useApp();

  const [scale, setScale] = useState<number>(1.2);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  useEffect(() => {
    // Handle Escape key to exit presentation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setCurrentView('home');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setCurrentView]);

  const toggleBrowserFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch {
      // Graceful fallback if permission denied or unsupported
    }
  };

  const increaseScale = () => setScale(prev => Math.min(prev + 0.25, 2.5));
  const decreaseScale = () => setScale(prev => Math.max(prev - 0.25, 0.8));

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Full-screen Communication Display"
      className={`fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-12 transition-colors duration-200 ${
        isDarkMode
          ? 'bg-black text-yellow-300'
          : 'bg-white text-brand-navy'
      }`}
    >
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between pb-6 border-b border-current/10">
        <div className="flex items-center space-x-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-current/10">
            {communicationLanguage.nativeName} ({communicationLanguage.name})
          </span>
          <span className="text-xs opacity-70 hidden sm:inline">
            Show this screen to the person you are communicating with
          </span>
        </div>

        {/* Action icons */}
        <div className="flex items-center space-x-2">
          {/* Text scale controls */}
          <button
            type="button"
            onClick={decreaseScale}
            aria-label="Decrease text size"
            className="p-3 rounded-xl bg-current/10 hover:bg-current/20 transition-colors touch-target"
          >
            <ZoomOut className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={increaseScale}
            aria-label="Increase text size"
            className="p-3 rounded-xl bg-current/10 hover:bg-current/20 transition-colors touch-target"
          >
            <ZoomIn className="w-6 h-6" />
          </button>

          {/* Contrast / Dark mode toggle */}
          <button
            type="button"
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle high contrast dark mode"
            className="p-3 rounded-xl bg-current/10 hover:bg-current/20 transition-colors touch-target"
          >
            {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>

          {/* Browser fullscreen toggle */}
          <button
            type="button"
            onClick={toggleBrowserFullscreen}
            aria-label="Toggle Fullscreen"
            className="p-3 rounded-xl bg-current/10 hover:bg-current/20 transition-colors touch-target hidden md:flex"
          >
            {isFullscreen ? <Minimize className="w-6 h-6" /> : <Maximize className="w-6 h-6" />}
          </button>

          {/* Exit Button */}
          <button
            type="button"
            onClick={() => setCurrentView('home')}
            aria-label={ui.exitPresentation}
            className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-base shadow-lg touch-target ml-2"
          >
            <X className="w-6 h-6" />
            <span className="hidden sm:inline">{ui.exitPresentation}</span>
          </button>
        </div>
      </div>

      {/* Main Dominant Message Display */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 my-8 max-w-5xl mx-auto overflow-y-auto">
        <h1
          style={{ fontSize: `calc(2.5rem * ${scale})`, lineHeight: 1.4 }}
          className="font-extrabold tracking-normal text-balance select-none drop-shadow-sm transition-all"
        >
          {assembledText || 'தயவுசெய்து செய்தி ஒன்றை தேர்ந்தெடுக்கவும்.'}
        </h1>

        {settings.showTransliteration && assembledTransliteration && (
          <p
            style={{ fontSize: `calc(1.2rem * ${scale})` }}
            className="mt-6 opacity-75 font-medium italic tracking-wide"
          >
            Guide: {assembledTransliteration}
          </p>
        )}
      </main>

      {/* Bottom Bar with Large Speech Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-current/10 gap-4">
        <div className="text-sm opacity-60 text-center sm:text-left">
          {hasVoiceForLanguage
            ? 'Device voice ready for speech output'
            : 'Visual display mode active (no device voice installed for this language)'}
        </div>

        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={isSpeaking ? stopSpeech : () => speakMessage()}
            aria-label={isSpeaking ? ui.stopSpeaking : ui.speak}
            className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-black text-lg shadow-xl transition-transform active:scale-95 touch-target ${
              isSpeaking
                ? 'bg-rose-600 text-white animate-pulse'
                : 'bg-brand-teal hover:bg-teal-700 text-white'
            }`}
          >
            {isSpeaking ? (
              <>
                <VolumeX className="w-7 h-7" />
                <span>{ui.stopSpeaking}</span>
              </>
            ) : (
              <>
                <Volume2 className="w-7 h-7" />
                <span>{ui.speak}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
