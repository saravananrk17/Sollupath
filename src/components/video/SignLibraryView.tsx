import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { SignEntry } from '../../data/signLanguages/types';
import { SIGN_LANGUAGE_COLLECTIONS, SIGN_CATEGORIES } from '../../data/signLanguages/collections';
import { signLanguageRegistry } from '../../data/signLanguages/registry';
import { SignVideoPlayer } from './SignVideoPlayer';
import { SignMatchingGame } from './SignMatchingGame';
import { islProgressService } from '../../services/islProgressService';
import {
  Search,
  BookOpen,
  Filter,
  CheckCircle2,
  AlertCircle,
  Bookmark,
  ArrowRight,
  Sparkles,
  Camera,
  PlusCircle,
  X,
  Globe2,
  Info
} from 'lucide-react';

export const SignLibraryView: React.FC = () => {
  const {
    setCurrentView,
    addPhraseToMessage,
    playFeedback,
    setActiveISLSignId
  } = useApp();

  const [activeCollectionId, setActiveCollectionId] = useState<string>('isl');
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'browse' | 'matching' | 'revision'>('browse');
  const [selectedSign, setSelectedSign] = useState<SignEntry | null>(null);
  const [revisionTick, setRevisionTick] = useState<number>(0);

  // Active collection metadata
  const currentCollection = useMemo(() => {
    return signLanguageRegistry.getCollectionById(activeCollectionId) || SIGN_LANGUAGE_COLLECTIONS[0];
  }, [activeCollectionId]);

  // Filtered signs
  const filteredSigns = useMemo(() => {
    let signs = signLanguageRegistry.searchSigns(searchQuery, activeCollectionId, activeCategoryId);

    if (activeTab === 'revision') {
      const progress = islProgressService.getProgress();
      signs = signs.filter(s => progress.difficultSigns.includes(s.id) || (s.linkedISLSignId && progress.difficultSigns.includes(s.linkedISLSignId)));
    }

    return signs;
  }, [searchQuery, activeCollectionId, activeCategoryId, activeTab, revisionTick]);

  const handleOpenSign = (sign: SignEntry) => {
    setSelectedSign(sign);
    islProgressService.recordVideoWatch(sign.id);
  };

  const handleToggleRevision = (signId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    islProgressService.toggleSignRevision(signId);
    playFeedback();
    setRevisionTick(prev => prev + 1);
  };

  const handlePractiseSign = (sign: SignEntry) => {
    if (sign.linkedISLSignId) {
      setActiveISLSignId(sign.linkedISLSignId);
    }
    setCurrentView('isl_practice');
  };

  const handleAddToSentence = (sign: SignEntry) => {
    if (sign.linkedPhraseId) {
      addPhraseToMessage(sign.linkedPhraseId);
      playFeedback();
    } else {
      // Fallback: use sign's English or native name
      playFeedback();
    }
  };

  const isSavedForRevision = (signId: string) => {
    const progress = islProgressService.getProgress();
    return progress.difficultSigns.includes(signId) || (selectedSign?.linkedISLSignId && progress.difficultSigns.includes(selectedSign.linkedISLSignId));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 animate-fade-in">
      {/* Hero Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-sm gap-6">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5 text-brand-teal" />
            <span>Multi-Sign Language Demonstration Archive</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
            Sign Language Video Library
          </h1>
          <p className="text-sm text-brand-muted mt-1 max-w-2xl leading-relaxed">
            Explore verified sign demonstrations with step-by-step captions, usage contexts, and regional variations. Study Indian Sign Language (ISL) or explore comparative collections.
          </p>
        </div>

        {/* View Mode Switcher Pills */}
        <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          <button
            type="button"
            onClick={() => setActiveTab('browse')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all touch-target ${
              activeTab === 'browse'
                ? 'bg-white text-brand-navy shadow-sm'
                : 'text-brand-muted hover:text-brand-navy'
            }`}
          >
            Browse Signs
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('matching')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all touch-target flex items-center space-x-1.5 ${
              activeTab === 'matching'
                ? 'bg-white text-brand-navy shadow-sm'
                : 'text-brand-muted hover:text-brand-navy'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
            <span>Matching Challenge</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('revision')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all touch-target flex items-center space-x-1.5 ${
              activeTab === 'revision'
                ? 'bg-white text-brand-navy shadow-sm'
                : 'text-brand-muted hover:text-brand-navy'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5 text-amber-500" />
            <span>Saved Revision</span>
          </button>
        </div>
      </div>

      {/* Collection Selector & Linguistic Qualification Notice */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center space-x-1.5">
            <Globe2 className="w-4 h-4" />
            <span>Select Sign Language Collection</span>
          </span>
          <span className="text-[11px] text-slate-400">
            Independent linguistic systems • Never presented as interchangeable
          </span>
        </div>

        {/* Collection Selector Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {SIGN_LANGUAGE_COLLECTIONS.map((col) => {
            const isSelected = activeCollectionId === col.id;
            return (
              <button
                key={col.id}
                type="button"
                onClick={() => {
                  setActiveCollectionId(col.id);
                  playFeedback();
                }}
                className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between touch-target ${
                  isSelected
                    ? 'bg-teal-950/80 border-teal-400 text-white shadow-lg ring-1 ring-teal-400/50'
                    : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-950'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-sm">{col.name}</span>
                    {col.isPrimary && (
                      <span className="px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-[9px] font-bold uppercase tracking-wider">
                        Primary
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-teal-300/80 block mt-0.5 font-medium">
                    {col.nativeName}
                  </span>
                  <p className="text-[11px] text-slate-400 mt-2 line-clamp-2">
                    {col.description.en}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                  <span>Region: {col.region}</span>
                  <span className="font-bold text-teal-400">{col.entryCount} entries</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Linguistic Integrity Disclaimer Banner */}
        <div className="bg-slate-950/80 rounded-2xl p-3.5 border border-slate-800 flex items-start space-x-3 text-xs text-slate-300">
          <Info className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-teal-300">{currentCollection.name} ({currentCollection.code.toUpperCase()}):</strong> {currentCollection.manualCharacteristics} Verified authority: <span className="text-white font-medium">{currentCollection.verificationAuthority}</span>.
          </p>
        </div>
      </div>

      {/* Main Content Area based on Active Tab */}
      {activeTab === 'matching' ? (
        <SignMatchingGame
          availableSigns={signLanguageRegistry.getSignsForLanguage(activeCollectionId)}
          onOpenSignDetail={handleOpenSign}
        />
      ) : (
        <div className="space-y-6">
          {/* Search Bar & Category Filters */}
          <div className="bg-white rounded-3xl p-6 border border-brand-border shadow-sm space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-5 h-5 text-brand-muted absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search signs in ${currentCollection.name} (e.g. Doctor, Water, Help, வணக்கம்)...`}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-brand-ivory border border-brand-border text-brand-navy placeholder-brand-muted text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-teal focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-muted hover:text-brand-navy p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 no-scrollbar">
              <Filter className="w-4 h-4 text-brand-muted flex-shrink-0 ml-1 mr-1" />
              {SIGN_CATEGORIES.map((cat) => {
                const isActive = activeCategoryId === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActiveCategoryId(cat.id);
                      playFeedback();
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all touch-target ${
                      isActive
                        ? 'bg-brand-navy text-white shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-brand-text'
                    }`}
                  >
                    {cat.name.en}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Counter and Filter Reset */}
          <div className="flex items-center justify-between text-xs text-brand-muted px-2">
            <span>
              Showing <strong>{filteredSigns.length}</strong> signs in <strong>{currentCollection.name}</strong>
              {activeTab === 'revision' && ' (Saved for Revision)'}
            </span>
            {(searchQuery || activeCategoryId !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategoryId('all');
                }}
                className="text-brand-indigo font-bold hover:underline"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Signs Grid */}
          {filteredSigns.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-brand-border space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 text-brand-muted flex items-center justify-center mx-auto">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-brand-navy text-lg">No signs found</h3>
              <p className="text-xs text-brand-muted max-w-md mx-auto leading-relaxed">
                {activeTab === 'revision'
                  ? 'You have not bookmarked any signs for revision in this collection yet. Tap the bookmark icon on any sign to save it here.'
                  : `No sign matches "${searchQuery}" in ${currentCollection.name}. Try broadening your search or selecting another category.`}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredSigns.map((sign) => {
                const isSaved = isSavedForRevision(sign.id);

                return (
                  <div
                    key={sign.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => handleOpenSign(sign)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleOpenSign(sign);
                    }}
                    className="bg-white rounded-3xl p-5 border border-brand-border hover:border-brand-teal/60 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between touch-target select-none"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-brand-navy text-[10px] font-bold uppercase tracking-wider">
                          {sign.category}
                        </span>

                        <div className="flex items-center space-x-1.5">
                          {sign.verificationStatus === 'verified' ? (
                            <span className="flex items-center space-x-1 text-brand-teal text-[10px] font-bold" title="Verified by ISLRTC / Official Body">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Verified</span>
                            </span>
                          ) : (
                            <span className="flex items-center space-x-1 text-amber-600 text-[10px] font-bold">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Review</span>
                            </span>
                          )}

                          <button
                            type="button"
                            onClick={(e) => handleToggleRevision(sign.id, e)}
                            aria-label={isSaved ? 'Remove from revision' : 'Save for revision'}
                            className={`p-1 rounded-lg transition-colors ${
                              isSaved ? 'text-amber-500' : 'text-slate-300 hover:text-slate-500'
                            }`}
                            title={isSaved ? 'Bookmarked for Revision' : 'Save to Revision'}
                          >
                            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                          </button>
                        </div>
                      </div>

                      {/* Sign Title & Native Script */}
                      <h3 className="font-extrabold text-brand-navy text-lg group-hover:text-brand-teal transition-colors">
                        {sign.name.en}
                      </h3>
                      {sign.name.ta && (
                        <span className="text-xs text-brand-indigo font-semibold block mt-0.5">
                          {sign.name.ta}
                        </span>
                      )}

                      {/* Meaning */}
                      <p className="text-xs text-brand-muted mt-2 line-clamp-2 leading-relaxed">
                        {sign.meaning.en}
                      </p>

                      {/* Context preview */}
                      <div className="mt-3 bg-brand-ivory rounded-xl p-2.5 text-[11px] text-brand-text/90 line-clamp-2">
                        <span className="font-bold text-brand-navy block text-[10px] uppercase tracking-wider mb-0.5">When to use:</span>
                        {sign.contextOfUse.en}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-teal">
                      <span className="flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                        <span>Watch Demonstration</span>
                        <ArrowRight className="w-4 h-4 rtl-mirror" />
                      </span>
                      <span className="text-[10px] text-brand-muted font-normal">
                        {sign.captions.length} steps
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Sign Detail / Video Demonstration Modal Drawer */}
      {selectedSign && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-sign-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedSign(null)}
        >
          <div
            className="bg-white rounded-3xl w-full max-w-3xl max-h-[92vh] overflow-y-auto border border-brand-border shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-sm z-20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-teal-50 text-brand-teal flex items-center justify-center font-bold">
                  🤟
                </div>
                <div>
                  <h3 id="modal-sign-title" className="font-extrabold text-brand-navy text-xl">
                    {selectedSign.name.en}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-brand-muted">
                    <span>{selectedSign.name.ta || currentCollection.name}</span>
                    <span>•</span>
                    <span className="text-brand-teal font-semibold">{selectedSign.regionalVariant || 'Standard'}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedSign(null)}
                aria-label="Close video player"
                className="p-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-brand-navy transition-colors touch-target"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Integrated Video Demonstration Player */}
              <SignVideoPlayer sign={selectedSign} autoPlay={true} />

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Practise this Sign (Handoff to Practice Studio) */}
                <button
                  type="button"
                  onClick={() => handlePractiseSign(selectedSign)}
                  className="px-4 py-2.5 rounded-2xl bg-brand-teal hover:bg-teal-600 text-slate-950 font-bold text-xs sm:text-sm flex items-center space-x-2 transition-transform hover:scale-105 touch-target shadow-sm"
                >
                  <Camera className="w-4 h-4" />
                  <span>Practise with Camera / Self-Assessment</span>
                </button>

                {/* Add to Sentence Builder (Two-way integration) */}
                <button
                  type="button"
                  onClick={() => handleAddToSentence(selectedSign)}
                  className="px-4 py-2.5 rounded-2xl bg-brand-navy hover:bg-brand-navy/90 text-white font-bold text-xs sm:text-sm flex items-center space-x-2 transition-transform hover:scale-105 touch-target shadow-sm"
                >
                  <PlusCircle className="w-4 h-4 text-brand-teal" />
                  <span>Add to Message Builder</span>
                </button>

                {/* Bookmark Toggle */}
                <button
                  type="button"
                  onClick={() => handleToggleRevision(selectedSign.id)}
                  className={`px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm border transition-colors touch-target flex items-center space-x-2 ${
                    isSavedForRevision(selectedSign.id)
                      ? 'bg-amber-50 border-amber-300 text-amber-800'
                      : 'bg-white border-brand-border text-brand-text hover:bg-slate-50'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${isSavedForRevision(selectedSign.id) ? 'fill-current' : ''}`} />
                  <span>{isSavedForRevision(selectedSign.id) ? 'Saved for Revision' : 'Bookmark for Revision'}</span>
                </button>
              </div>

              {/* Comprehensive Linguistic Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Context of Use */}
                <div className="bg-brand-ivory rounded-2xl p-4 border border-brand-border/80">
                  <h4 className="font-bold text-brand-navy text-xs uppercase tracking-wider mb-1.5 flex items-center space-x-1.5">
                    <span>When & Where to Use</span>
                  </h4>
                  <p className="text-xs text-brand-text leading-relaxed">
                    {selectedSign.contextOfUse.en}
                  </p>
                  {selectedSign.contextOfUse.ta && (
                    <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                      {selectedSign.contextOfUse.ta}
                    </p>
                  )}
                </div>

                {/* Grammatical and Regional Notes */}
                <div className="bg-brand-ivory rounded-2xl p-4 border border-brand-border/80">
                  <h4 className="font-bold text-brand-navy text-xs uppercase tracking-wider mb-1.5 flex items-center space-x-1.5">
                    <span>Linguistic & Grammar Notes</span>
                  </h4>
                  <p className="text-xs text-brand-text leading-relaxed">
                    {selectedSign.notes?.en || 'Standard articulation conforming to national sign language guidelines.'}
                  </p>
                  {selectedSign.notes?.ta && (
                    <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                      {selectedSign.notes.ta}
                    </p>
                  )}
                </div>
              </div>

              {/* Source, Licence, and Verification Block */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-brand-muted space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-brand-navy">Source & Verification:</span>
                  <span className="font-semibold text-brand-teal">{selectedSign.source}</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span>Licence & Usage:</span>
                  <span>{selectedSign.license}</span>
                </div>
              </div>

              {/* Related Signs */}
              {selectedSign.relatedSignIds && selectedSign.relatedSignIds.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-brand-muted uppercase tracking-wider block">
                    Related Signs in this Category:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {signLanguageRegistry.getRelatedSigns(selectedSign.id).map((rel) => (
                      <button
                        key={rel.id}
                        type="button"
                        onClick={() => setSelectedSign(rel)}
                        className="px-3 py-1.5 rounded-xl bg-white border border-brand-border hover:border-brand-teal/60 text-xs font-bold text-brand-navy transition-all touch-target flex items-center space-x-1.5"
                      >
                        <span>{rel.name.en}</span>
                        <ArrowRight className="w-3 h-3 text-brand-teal" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
