import React, { useState } from 'react';
import { ISL_QUIZ_QUESTIONS, ISLQuizQuestion } from '../../data/isl/quizzes';
import { getISLSignById } from '../../data/isl/signs';
import { ISLSignVisualizer } from './ISLSignVisualizer';
import { islProgressService } from '../../services/islProgressService';
import {
  HelpCircle,
  CheckCircle,
  XCircle,
  ArrowRight,
  RotateCcw,
  ArrowLeft,
  Award,
  Info
} from 'lucide-react';

interface ISLQuizViewProps {
  onBackToDashboard: () => void;
  onOpenStudioLesson?: (signId: string) => void;
}

export const ISLQuizView: React.FC<ISLQuizViewProps> = ({
  onBackToDashboard,
  onOpenStudioLesson
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [missedQuestions, setMissedQuestions] = useState<ISLQuizQuestion[]>([]);

  const question = ISL_QUIZ_QUESTIONS[currentIdx];
  const associatedSign = question ? getISLSignById(question.signId) : undefined;

  const handleSelectOption = (optionId: string) => {
    if (hasAnswered) return;
    setSelectedOptionId(optionId);
    setHasAnswered(true);

    const chosenOption = question.options.find(o => o.id === optionId);
    if (chosenOption?.isCorrect) {
      setScore(prev => prev + 1);
    } else {
      setMissedQuestions(prev => [...prev, question]);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOptionId(null);
    setHasAnswered(false);

    if (currentIdx < ISL_QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // Quiz complete
      setQuizCompleted(true);
      islProgressService.recordQuizScore('isl_essential_assessment', score, ISL_QUIZ_QUESTIONS.length);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOptionId(null);
    setHasAnswered(false);
    setScore(0);
    setQuizCompleted(false);
    setMissedQuestions([]);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={onBackToDashboard}
            aria-label="Back to dashboard"
            className="p-2 text-slate-500 hover:text-brand-navy rounded-xl hover:bg-slate-100 touch-target"
          >
            <ArrowLeft className="w-5 h-5 rtl-mirror" />
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-brand-navy flex items-center">
              <Award className="w-6 h-6 mr-2 text-brand-teal" />
              ISL Practice Quiz & Assessment
            </h1>
            <p className="text-xs text-brand-muted">
              Question {quizCompleted ? ISL_QUIZ_QUESTIONS.length : currentIdx + 1} of {ISL_QUIZ_QUESTIONS.length}
            </p>
          </div>
        </div>

        {!quizCompleted && (
          <div className="px-3 py-1 bg-brand-ivory border border-slate-200 rounded-xl text-xs font-bold text-brand-indigo">
            Score: {score}
          </div>
        )}
      </div>

      {/* Quiz Body */}
      {quizCompleted ? (
        <div className="bg-white rounded-3xl p-8 sm:p-10 text-center border border-slate-200 shadow-md space-y-6 animate-in fade-in">
          <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <Award className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo">
              Assessment Summary
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy mt-1">
              {score === ISL_QUIZ_QUESTIONS.length ? 'Outstanding Mastery!' : 'Quiz Complete!'}
            </h2>
            <p className="text-base font-semibold text-brand-teal mt-1">
              You scored {score} out of {ISL_QUIZ_QUESTIONS.length} ({Math.round((score / ISL_QUIZ_QUESTIONS.length) * 100)}%)
            </p>
          </div>

          {/* Missed questions review */}
          {missedQuestions.length > 0 && (
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-left space-y-2">
              <h3 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center">
                <HelpCircle className="w-4 h-4 mr-1.5 text-amber-700" />
                Signs to Review for Mastery:
              </h3>
              <ul className="text-xs text-amber-800 space-y-1">
                {missedQuestions.map((q, i) => {
                  const s = getISLSignById(q.signId);
                  return (
                    <li key={i} className="flex items-center justify-between">
                      <span>• {s?.meaning} ({s?.tamilMeaning})</span>
                      {onOpenStudioLesson && s && (
                        <button
                          type="button"
                          onClick={() => onOpenStudioLesson(s.id)}
                          className="font-bold underline hover:text-amber-950 ml-2"
                        >
                          Review Lesson →
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleRestart}
              className="w-full sm:w-auto px-6 py-3 bg-brand-navy hover:bg-brand-indigo text-white font-bold rounded-2xl text-xs flex items-center justify-center space-x-2 shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Quiz</span>
            </button>
            <button
              type="button"
              onClick={onBackToDashboard}
              className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-brand-navy font-bold rounded-2xl text-xs"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      ) : question ? (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-sm space-y-6">
          {/* Scenario Context Banner if present */}
          {question.scenario && (
            <div className="p-3 bg-brand-ivory rounded-2xl border border-brand-border text-xs text-brand-muted flex items-start space-x-2">
              <Info className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-brand-navy block">Scenario:</span>
                <span>{question.scenario.en} / {question.scenario.ta}</span>
              </div>
            </div>
          )}

          {/* Question Text */}
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-navy leading-snug">
              {question.question.en}
            </h2>
            <p className="text-base text-brand-teal font-medium">
              {question.question.ta}
            </p>
          </div>

          {/* Associated Visual Demonstration */}
          {associatedSign && (
            <div className="max-w-md mx-auto">
              <ISLSignVisualizer sign={associatedSign} size="normal" showControls={true} />
            </div>
          )}

          {/* Multiple Choice Options */}
          <div className="space-y-3">
            {question.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              let btnStyle = 'bg-white hover:bg-slate-50 border-slate-200 text-brand-navy';

              if (hasAnswered) {
                if (opt.isCorrect) {
                  btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
                } else if (isSelected && !opt.isCorrect) {
                  btnStyle = 'bg-rose-50 border-rose-500 text-rose-900 font-bold';
                } else {
                  btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                }
              } else if (isSelected) {
                btnStyle = 'bg-brand-indigo/10 border-brand-indigo text-brand-navy';
              }

              return (
                <button
                  key={opt.id}
                  type="button"
                  disabled={hasAnswered}
                  onClick={() => handleSelectOption(opt.id)}
                  className={`w-full p-4 rounded-2xl border-2 text-left flex items-center justify-between transition-all touch-target ${btnStyle}`}
                >
                  <div>
                    <span className="text-sm sm:text-base font-semibold block">
                      {opt.text.en}
                    </span>
                    <span className="text-xs text-slate-500">
                      {opt.text.ta}
                    </span>
                  </div>

                  {hasAnswered && opt.isCorrect && (
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 ml-2" />
                  )}
                  {hasAnswered && isSelected && !opt.isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback Explanation Banner */}
          {hasAnswered && (
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 animate-in fade-in">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo block">
                Educational Explanation:
              </span>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                {question.explanation.en}
              </p>
              <p className="text-xs text-brand-muted italic">
                {question.explanation.ta}
              </p>

              <div className="pt-3 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className="px-5 py-2.5 bg-brand-navy hover:bg-brand-indigo text-white font-bold text-xs rounded-xl shadow-sm flex items-center space-x-1.5 touch-target"
                >
                  <span>{currentIdx < ISL_QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'View Results'}</span>
                  <ArrowRight className="w-4 h-4 rtl-mirror" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};
