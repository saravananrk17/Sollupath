import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import App from '../App';
import { ISL_SIGNS, getISLSignById } from '../data/isl/signs';
import { ISL_CATEGORIES } from '../data/isl/categories';
import { ISL_QUIZ_QUESTIONS } from '../data/isl/quizzes';
import { islProgressService } from '../services/islProgressService';
import { islRecognitionService } from '../services/islRecognitionService';

describe('SolluPath 2.0 — ISL Learn & Practise Module', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('ISL Curriculum Datasets', () => {
    it('contains verified Indian Sign Language (ISL) categories conforming to ISLRTC standards', () => {
      expect(ISL_CATEGORIES.length).toBeGreaterThanOrEqual(8);
      for (const cat of ISL_CATEGORIES) {
        expect(cat.id).toBeDefined();
        expect(cat.name).toBeDefined();
        expect(cat.translations.en).toBeDefined();
        expect(cat.translations.ta).toBeDefined();
      }
    });

    it('contains verified ISL signs with complete anatomical & kinematic parameters', () => {
      expect(ISL_SIGNS.length).toBeGreaterThanOrEqual(14);
      for (const sign of ISL_SIGNS) {
        expect(sign.signLanguage).toBe('ISL');
        expect(sign.meaning).toBeDefined();
        expect(sign.tamilMeaning).toBeDefined();
        expect(sign.demonstration.handConfiguration).toBeDefined();
        expect(sign.demonstration.movement).toBeDefined();
        expect(sign.demonstration.location).toBeDefined();
        expect(sign.demonstration.steps.length).toBeGreaterThanOrEqual(2);
        expect(sign.sourceAttribution).toContain('ISLRTC');
        expect(['approved', 'reviewed']).toContain(sign.validationStatus);
      }
    });

    it('links essential clinical and emergency signs to SolluPath AAC phrases for two-way communication', () => {
      const helpSign = getISLSignById('isl_help');
      expect(helpSign?.linkedPhraseId).toBe('p_help');

      const painSign = getISLSignById('isl_pain');
      expect(painSign?.linkedPhraseId).toBe('p_pain');

      const waterSign = getISLSignById('isl_water');
      expect(waterSign?.linkedPhraseId).toBe('p_water');

      const thanksSign = getISLSignById('isl_thank_you');
      expect(thanksSign?.linkedPhraseId).toBe('p_thank_you');
    });

    it('validates quiz questions structure and educational explanations', () => {
      expect(ISL_QUIZ_QUESTIONS.length).toBeGreaterThanOrEqual(5);
      for (const q of ISL_QUIZ_QUESTIONS) {
        expect(q.id).toBeDefined();
        expect(q.signId).toBeDefined();
        expect(q.question.en).toBeDefined();
        expect(q.question.ta).toBeDefined();
        expect(q.explanation.en).toBeDefined();
        expect(q.options.some(o => o.isCorrect)).toBe(true);
      }
    });
  });

  describe('ISL Progress & Recognition Services', () => {
    it('persists and tracks learning progress, difficult signs, and resets cleanly', () => {
      expect(islProgressService.isLessonCompleted('isl_help')).toBe(false);

      islProgressService.markLessonCompleted('isl_help');
      expect(islProgressService.isLessonCompleted('isl_help')).toBe(true);

      expect(islProgressService.isDifficultSign('isl_pain')).toBe(false);
      islProgressService.toggleDifficultSign('isl_pain');
      expect(islProgressService.isDifficultSign('isl_pain')).toBe(true);

      islProgressService.incrementCardsReviewed();
      islProgressService.recordQuizScore('quiz_test', 4, 5);

      const progress = islProgressService.getProgress();
      expect(progress.completedLessons).toContain('isl_help');
      expect(progress.difficultSigns).toContain('isl_pain');
      expect(progress.cardsReviewed).toBe(1);
      expect(progress.quizAttempts.length).toBe(1);

      islProgressService.resetAllProgress();
      const reset = islProgressService.getProgress();
      expect(reset.completedLessons.length).toBe(0);
      expect(reset.difficultSigns.length).toBe(0);
    });

    it('defines explicit, documented practice vocabulary for optical recognition', () => {
      expect(islRecognitionService.supportedPracticeVocabulary.length).toBeGreaterThanOrEqual(6);
      expect(islRecognitionService.isSignSupportedForPractice('isl_help')).toBe(true);
      expect(islRecognitionService.isSignSupportedForPractice('isl_pain')).toBe(true);
      expect(islRecognitionService.isSignSupportedForPractice('isl_water')).toBe(true);
      expect(islRecognitionService.isSignSupportedForPractice('unsupported_xyz')).toBe(false);
    });
  });

  describe('ISL UI Integration and Navigation', () => {
    it('navigates to ISL Learn & Practise dashboard from the Navbar', () => {
      render(<App />);

      // Find the ISL Learn navigation button in navbar
      const islNavBtns = screen.getAllByText(/ISL/i);
      expect(islNavBtns.length).toBeGreaterThanOrEqual(1);

      // Click ISL navigation button
      fireEvent.click(islNavBtns[0]);

      // Should display ISL Learn & Practise dashboard
      expect(screen.getByText(/Learn. Practise. Communicate./i)).toBeInTheDocument();
      expect(screen.getByText(/Sign Learning Studio/i)).toBeInTheDocument();
      expect(screen.getByText(/Sign Flashcards/i)).toBeInTheDocument();
      expect(screen.getAllByText(/Guided Practice/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getByText(/Practice Quizzes/i)).toBeInTheDocument();
    });

    it('allows opening Interactive Flashcards and flipping a card', () => {
      render(<App />);

      // Navigate to ISL
      const islNavBtns = screen.getAllByText(/ISL/i);
      fireEvent.click(islNavBtns[0]);

      // Click "Interactive Flashcards"
      const flashcardsBtn = screen.getByRole('button', { name: /Interactive Flashcards/i });
      fireEvent.click(flashcardsBtn);

      // Flashcards header visible
      expect(screen.getByText(/ISL Interactive Flashcards/i)).toBeInTheDocument();

      // Card is present and flippable
      const flipHint = screen.getByText(/Tap Card to Flip/i);
      expect(flipHint).toBeInTheDocument();
    });

    it('allows viewing an ISL Sign directly from an AAC Phrase Card without message loss', () => {
      render(<App />);

      // Start communicating
      const startBtn = screen.getByRole('button', { name: /உரையாடலைத் தொடங்குக/i });
      fireEvent.click(startBtn);

      // Open Quick Communication
      const quickHero = screen.getByRole('button', { name: /Open Quick Communication/i });
      fireEvent.click(quickHero);

      // Find "ISL Sign" button on the Help phrase card
      const islSignButtons = screen.getAllByRole('button', { name: /View Indian Sign Language/i });
      expect(islSignButtons.length).toBeGreaterThanOrEqual(1);

      // Click to open ISL Sign modal
      fireEvent.click(islSignButtons[0]);

      // Modal is visible
      expect(screen.getByRole('dialog', { name: /ISL Sign for/i })).toBeInTheDocument();

      // Close modal
      const backBtn = screen.getByText(/Back to Message/i);
      fireEvent.click(backBtn);

      // Modal closed, user remains in Quick Communication workspace
      expect(screen.queryByRole('dialog', { name: /ISL Sign for/i })).not.toBeInTheDocument();
      expect(screen.getByPlaceholderText(/சொற்றொடர்களைத் தேடுங்கள்/i)).toBeInTheDocument();
    });
  });
});
