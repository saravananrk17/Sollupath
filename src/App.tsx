import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { WelcomeView } from './components/WelcomeView';
import { HomeView } from './components/HomeView';
import { QuickCommunicationView } from './components/QuickCommunicationView';
import { SituationView } from './components/SituationView';
import { FavoritesView } from './components/FavoritesView';
import { CustomPhrasesView } from './components/CustomPhrasesView';
import { PresentationModal } from './components/PresentationModal';
import { LanguageSelectorModal } from './components/LanguageSelectorModal';
import { AccessibilityModal } from './components/AccessibilityModal';
import { HelpAboutModal } from './components/HelpAboutModal';

// ISL Module Components
import { ISLDashboard } from './components/isl/ISLDashboard';
import { ISLLessonStudio } from './components/isl/ISLLessonStudio';
import { ISLFlashcards } from './components/isl/ISLFlashcards';
import { ISLPracticeWorkspace } from './components/isl/ISLPracticeWorkspace';
import { ISLQuizView } from './components/isl/ISLQuizView';
import { ISLProgressView } from './components/isl/ISLProgressView';
import { ISLSignModal } from './components/isl/ISLSignModal';

const AppContent: React.FC = () => {
  const {
    currentView,
    setCurrentView,
    activeISLSignId,
    setActiveISLSignId,
    activeISLModalSign,
    setActiveISLModalSign
  } = useApp();

  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isAccessibilityModalOpen, setIsAccessibilityModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  // Full-screen presentation mode takes over the entire viewport
  if (currentView === 'presentation') {
    return <PresentationModal />;
  }

  const handleNavigateISLSubView = (
    sub: 'studio' | 'flashcards' | 'practice' | 'quiz' | 'progress',
    signId?: string
  ) => {
    if (signId) {
      setActiveISLSignId(signId);
    }
    if (sub === 'studio') setCurrentView('isl_studio');
    else if (sub === 'flashcards') setCurrentView('isl_flashcards');
    else if (sub === 'practice') setCurrentView('isl_practice');
    else if (sub === 'quiz') setCurrentView('isl_quiz');
    else if (sub === 'progress') setCurrentView('isl_progress');
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-ivory text-brand-text">
      {/* Top Navbar */}
      <Navbar
        onOpenLanguage={() => setIsLanguageModalOpen(true)}
        onOpenAccessibility={() => setIsAccessibilityModalOpen(true)}
        onOpenHelp={() => setIsHelpModalOpen(true)}
      />

      {/* Main Dynamic View */}
      <main className="flex-1 pb-16 lg:pb-8">
        {/* Core AAC Views */}
        {currentView === 'welcome' && (
          <WelcomeView onOpenLanguageModal={() => setIsLanguageModalOpen(true)} />
        )}
        {currentView === 'home' && (
          <HomeView
            onOpenLanguage={() => setIsLanguageModalOpen(true)}
            onOpenAccessibility={() => setIsAccessibilityModalOpen(true)}
          />
        )}
        {currentView === 'quick' && <QuickCommunicationView />}
        {currentView === 'situations' && <SituationView />}
        {currentView === 'favorites' && <FavoritesView />}
        {currentView === 'custom' && <CustomPhrasesView />}

        {/* ISL Learn & Practise Module Views */}
        {currentView === 'isl_dashboard' && (
          <ISLDashboard onNavigateSubView={handleNavigateISLSubView} />
        )}
        {currentView === 'isl_studio' && (
          <ISLLessonStudio
            initialSignId={activeISLSignId || undefined}
            onBackToDashboard={() => setCurrentView('isl_dashboard')}
            onOpenPractice={(signId) => {
              setActiveISLSignId(signId);
              setCurrentView('isl_practice');
            }}
          />
        )}
        {currentView === 'isl_flashcards' && (
          <ISLFlashcards
            onBackToDashboard={() => setCurrentView('isl_dashboard')}
            onOpenStudioLesson={(signId) => {
              setActiveISLSignId(signId);
              setCurrentView('isl_studio');
            }}
          />
        )}
        {currentView === 'isl_practice' && (
          <ISLPracticeWorkspace
            initialSignId={activeISLSignId || undefined}
            onBackToDashboard={() => setCurrentView('isl_dashboard')}
          />
        )}
        {currentView === 'isl_quiz' && (
          <ISLQuizView
            onBackToDashboard={() => setCurrentView('isl_dashboard')}
            onOpenStudioLesson={(signId) => {
              setActiveISLSignId(signId);
              setCurrentView('isl_studio');
            }}
          />
        )}
        {currentView === 'isl_progress' && (
          <ISLProgressView
            onBackToDashboard={() => setCurrentView('isl_dashboard')}
            onOpenStudioLesson={(signId) => {
              setActiveISLSignId(signId);
              setCurrentView('isl_studio');
            }}
            onOpenPractice={(signId) => {
              setActiveISLSignId(signId);
              setCurrentView('isl_practice');
            }}
          />
        )}
      </main>

      {/* Accessible Footer */}
      <footer className="bg-white border-t border-brand-border py-8 text-xs text-brand-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-extrabold text-brand-navy">SolluPath 2.0 (சொல்லுபாதை)</span>
            <span>—</span>
            <span>AAC & Indian Sign Language (ISL). VBYLD 2027 Hack for Social Cause.</span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={() => setCurrentView('isl_dashboard')}
              className="hover:text-brand-navy font-bold underline"
            >
              ISL Learn & Practise
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setIsHelpModalOpen(true)}
              className="hover:text-brand-navy underline"
            >
              Privacy & Medical Disclaimer
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setIsAccessibilityModalOpen(true)}
              className="hover:text-brand-navy underline"
            >
              WCAG 2.2 AA
            </button>
          </div>
        </div>
      </footer>

      {/* Global Modals */}
      <LanguageSelectorModal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
      />
      <AccessibilityModal
        isOpen={isAccessibilityModalOpen}
        onClose={() => setIsAccessibilityModalOpen(false)}
      />
      <HelpAboutModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
      />

      {/* Quick ISL Sign Demonstration Modal (Two-Way Communication Integration) */}
      <ISLSignModal
        sign={activeISLModalSign}
        onClose={() => setActiveISLModalSign(null)}
        onOpenPractice={(signId) => {
          setActiveISLModalSign(null);
          setActiveISLSignId(signId);
          setCurrentView('isl_practice');
        }}
      />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
