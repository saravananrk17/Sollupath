import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { AAC_CATEGORIES } from '../data/categories';
import { SentenceBuilder } from './SentenceBuilder';
import {
  PlusCircle,
  Trash2,
  PlusSquare,
  ArrowLeft,
  FileText
} from 'lucide-react';

export const CustomPhrasesView: React.FC = () => {
  const {
    customPhrases,
    addCustomPhrase,
    deleteCustomPhrase,
    addPhraseToMessage,
    setCurrentView,
    ui,
    communicationLanguage
  } = useApp();

  const [phraseText, setPhraseText] = useState('');
  const [categoryId, setCategoryId] = useState('essential');
  const [showAddForm, setShowAddForm] = useState(false);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phraseText.trim()) return;
    addCustomPhrase(phraseText.trim(), categoryId);
    setPhraseText('');
    setShowAddForm(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Custom Phrases List and Form */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => setCurrentView('home')}
                className="p-2 text-slate-400 hover:text-brand-navy rounded-xl hover:bg-slate-100 touch-target"
              >
                <ArrowLeft className="w-5 h-5 rtl-mirror" />
              </button>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-brand-navy flex items-center">
                  <PlusSquare className="w-6 h-6 mr-2 text-purple-600" />
                  {ui.customPhrases}
                </h1>
                <p className="text-xs text-brand-muted">
                  Create personalized phrases, family member names, or specific requests
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowAddForm(!showAddForm)}
              className="flex items-center space-x-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl shadow-sm transition-colors touch-target"
            >
              <PlusCircle className="w-4 h-4" />
              <span>{ui.addCustomPhrase}</span>
            </button>
          </div>

          {/* Add Phrase Form Modal/Box */}
          {showAddForm && (
            <form onSubmit={handleCreate} className="bg-white rounded-3xl p-6 border-2 border-purple-200 shadow-md space-y-4">
              <h2 className="text-base font-bold text-brand-navy flex items-center">
                <FileText className="w-4 h-4 mr-2 text-purple-600" />
                {ui.addCustomPhrase} ({communicationLanguage.name})
              </h2>

              <div>
                <label className="block text-xs font-bold text-brand-text mb-1">
                  {ui.phraseLabel}
                </label>
                <input
                  type="text"
                  required
                  value={phraseText}
                  onChange={(e) => setPhraseText(e.target.value)}
                  placeholder="e.g., My daughter Priya's phone number is 9876543210"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-text mb-1">
                  {ui.categoryLabel}
                </label>
                <select
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 bg-white"
                >
                  {AAC_CATEGORIES.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-brand-muted hover:bg-slate-100"
                >
                  {ui.cancel}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-sm"
                >
                  {ui.save}
                </button>
              </div>
            </form>
          )}

          {/* List of Custom Phrases */}
          {customPhrases.length > 0 ? (
            <div className="space-y-3">
              {customPhrases.map((phrase) => (
                <div
                  key={phrase.id}
                  className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between hover:border-purple-300 transition-all"
                >
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => addPhraseToMessage(phrase.id)}
                    className="flex-1 cursor-pointer pr-4"
                  >
                    <p className="font-bold text-brand-navy text-base">
                      {phrase.text}
                    </p>
                    <span className="text-[11px] text-purple-700 font-semibold uppercase tracking-wider">
                      {phrase.categoryId} • Personal Phrase
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => addPhraseToMessage(phrase.id)}
                      className="px-3 py-1.5 bg-brand-ivory hover:bg-purple-50 text-brand-navy hover:text-purple-700 font-bold text-xs rounded-lg border border-slate-200 touch-target"
                    >
                      {ui.addToMessage}
                    </button>
                    <button
                      type="button"
                      aria-label="Delete custom phrase"
                      onClick={() => deleteCustomPhrase(phrase.id)}
                      className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors touch-target"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
              <div className="w-16 h-16 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-4">
                <PlusCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-1">
                No Custom Phrases Created
              </h3>
              <p className="text-xs text-brand-muted max-w-sm mx-auto mb-6">
                Add phrases unique to you, such as your caregiver's phone number, allergies, home address, or specific medical needs.
              </p>
              <button
                type="button"
                onClick={() => setShowAddForm(true)}
                className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl shadow-sm"
              >
                + Add Your First Custom Phrase
              </button>
            </div>
          )}
        </div>

        {/* Right Side: Persistent Sentence Builder */}
        <div className="lg:col-span-5 xl:col-span-4">
          <SentenceBuilder />
        </div>
      </div>
    </div>
  );
};
