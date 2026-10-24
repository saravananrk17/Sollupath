import React from 'react';
import { useApp, AppView } from '../../context/AppContext';
import {
  LayoutDashboard,
  Video,
  BookOpen,
  Layers,
  Camera,
  Award,
  TrendingUp
} from 'lucide-react';

interface ISLTabNavProps {
  currentTab: 'overview' | 'library' | 'studio' | 'flashcards' | 'practice' | 'quiz' | 'progress';
}

export const ISLTabNav: React.FC<ISLTabNavProps> = ({ currentTab }) => {
  const { setCurrentView } = useApp();

  const tabs: {
    id: 'overview' | 'library' | 'studio' | 'flashcards' | 'practice' | 'quiz' | 'progress';
    label: string;
    view: AppView;
    icon: any;
    badge?: string;
  }[] = [
    { id: 'overview', label: 'ISL Hub', view: 'isl_dashboard', icon: LayoutDashboard },
    { id: 'library', label: 'Video Library', view: 'sign_library', icon: Video, badge: 'NEW' },
    { id: 'studio', label: 'Lesson Studio', view: 'isl_studio', icon: BookOpen },
    { id: 'flashcards', label: 'Flashcards', view: 'isl_flashcards', icon: Layers },
    { id: 'practice', label: 'Guided Practice', view: 'isl_practice', icon: Camera },
    { id: 'quiz', label: 'Quizzes', view: 'isl_quiz', icon: Award },
    { id: 'progress', label: 'My Progress', view: 'isl_progress', icon: TrendingUp },
  ];

  return (
    <div className="bg-white rounded-2xl p-1.5 border border-brand-border shadow-sm mb-6 overflow-x-auto no-scrollbar">
      <div className="flex items-center space-x-1 min-w-max">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setCurrentView(tab.view)}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all touch-target select-none ${
                isActive
                  ? 'bg-brand-navy text-white shadow-sm ring-1 ring-brand-navy'
                  : 'text-brand-text hover:bg-slate-100 hover:text-brand-navy'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-brand-teal' : 'text-brand-muted'}`} />
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={`px-1.5 py-0.2 rounded-full text-[9px] font-black uppercase tracking-wider ${
                  isActive ? 'bg-brand-teal text-slate-950' : 'bg-teal-100 text-teal-800'
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
