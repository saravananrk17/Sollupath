import React from 'react';
import { useApp, AppView } from '../context/AppContext';
import {
  Globe,
  Sliders,
  HelpCircle,
  Wifi,
  WifiOff,
  Home,
  Zap,
  Grid,
  Star,
  PlusSquare,
  MessageSquare,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface NavbarProps {
  onOpenLanguage: () => void;
  onOpenAccessibility: () => void;
  onOpenHelp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenLanguage,
  onOpenAccessibility,
  onOpenHelp
}) => {
  const {
    currentView,
    setCurrentView,
    activeLanguage,
    isOnline,
    selectedPhraseIds,
    favorites,
    ui
  } = useApp();

  const isISLActive = currentView.startsWith('isl_');

  const navItems: { view: AppView; label: string; icon: any; count?: number; isActive?: boolean }[] = [
    { view: 'home', label: 'Home', icon: Home, isActive: currentView === 'home' },
    { view: 'quick', label: ui.quickCommunication, icon: Zap, isActive: currentView === 'quick' },
    { view: 'situations', label: ui.situations, icon: Grid, isActive: currentView === 'situations' },
    { view: 'favorites', label: ui.favorites, icon: Star, count: favorites.length, isActive: currentView === 'favorites' },
    { view: 'custom', label: ui.customPhrases, icon: PlusSquare, isActive: currentView === 'custom' },
    { view: 'isl_dashboard', label: ui.islLearn, icon: Sparkles, isActive: isISLActive },
    { view: 'sign_library', label: 'Sign Library', icon: BookOpen, isActive: currentView === 'sign_library' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-brand-border">
      {/* Top Banner Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Wordmark */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setCurrentView('home')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setCurrentView('home');
            }}
            className="flex items-center space-x-3 cursor-pointer group select-none"
            aria-label="SolluPath Home"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center shadow-md group-hover:scale-105 transition-transform overflow-hidden">
              <svg viewBox="0 0 512 512" className="w-7 h-7 text-white fill-none">
                <circle cx="256" cy="256" r="180" stroke="#3446A8" strokeWidth="24" opacity="0.4"/>
                <path d="M128 256C128 185.3 185.3 128 256 128C326.7 128 384 185.3 384 256" stroke="#0F9D92" strokeWidth="36" strokeLinecap="round"/>
                <circle cx="256" cy="256" r="40" fill="#0F9D92"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-xl tracking-tight text-brand-navy">
                  SolluPath
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-brand-indigo/10 text-brand-indigo hidden sm:inline">
                  {activeLanguage.nativeName}
                </span>
              </div>
              <span className="text-[11px] text-brand-muted font-medium hidden sm:block tracking-wide">
                Your Voice, Your Way • சொல்லுபாதை
              </span>
            </div>
          </div>

          {/* Center Navigation Links for Desktop */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.isActive !== undefined ? item.isActive : currentView === item.view;
              return (
                <button
                  key={item.view}
                  type="button"
                  onClick={() => setCurrentView(item.view)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-xs font-bold transition-all touch-target ${
                    isActive
                      ? 'bg-brand-navy text-white shadow-sm'
                      : 'text-brand-text hover:bg-slate-100 hover:text-brand-navy'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {item.count !== undefined && item.count > 0 && (
                    <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-amber-200 text-amber-900 font-bold">
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Language, Accessibility, Help, Offline Badge */}
          <div className="flex items-center space-x-2">
            {/* Draft active indicator */}
            {selectedPhraseIds.length > 0 && currentView !== 'home' && currentView !== 'presentation' && (
              <button
                type="button"
                onClick={() => setCurrentView('quick')}
                aria-label={`View composed draft message with ${selectedPhraseIds.length} phrases`}
                className="hidden sm:inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold hover:bg-amber-100 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
                <span>{selectedPhraseIds.length} in draft</span>
              </button>
            )}

            {/* Offline Status Badge */}
            <div
              className={`hidden md:inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-medium border ${
                isOnline
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                  : 'bg-amber-50 text-amber-800 border-amber-200'
              }`}
              title={isOnline ? 'Online - All phrases cached locally' : 'Offline Mode Active - Essential phrases 100% available'}
            >
              {isOnline ? (
                <>
                  <Wifi className="w-3 h-3 text-emerald-600" />
                  <span className="text-[11px] font-semibold">Offline Ready</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-3 h-3 text-amber-600" />
                  <span className="text-[11px] font-semibold">Offline</span>
                </>
              )}
            </div>

            {/* Language Switcher Button */}
            <button
              type="button"
              onClick={onOpenLanguage}
              aria-label={`Current language: ${activeLanguage.name}. Tap to change.`}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-xl border border-slate-200 hover:border-brand-indigo bg-white hover:bg-brand-indigo/5 text-brand-navy text-xs font-bold transition-all touch-target"
            >
              <Globe className="w-4 h-4 text-brand-indigo" />
              <span>{activeLanguage.nativeName}</span>
            </button>

            {/* Accessibility Settings */}
            <button
              type="button"
              onClick={onOpenAccessibility}
              aria-label={ui.accessibilitySettings}
              className="p-2 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-brand-navy transition-all touch-target"
            >
              <Sliders className="w-4 h-4" />
            </button>

            {/* Help / About */}
            <button
              type="button"
              onClick={onOpenHelp}
              aria-label={ui.helpAbout}
              className="p-2 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-brand-navy transition-all touch-target"
            >
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <div className="lg:hidden flex items-center justify-around border-t border-slate-100 bg-white/95 px-2 py-1.5 overflow-x-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.isActive !== undefined ? item.isActive : currentView === item.view;
          return (
            <button
              key={item.view}
              type="button"
              onClick={() => setCurrentView(item.view)}
              className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-xl text-[10px] font-bold transition-all touch-target whitespace-nowrap ${
                isActive
                  ? 'text-brand-indigo'
                  : 'text-brand-muted hover:text-brand-navy'
              }`}
            >
              <Icon className="w-4 h-4 mb-0.5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
