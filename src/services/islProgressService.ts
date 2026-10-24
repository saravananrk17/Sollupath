export interface ISLQuizScoreRecord {
  quizId: string;
  score: number;
  total: number;
  timestamp: number;
}

export interface ISLUserProgress {
  completedLessons: string[]; // Sign IDs
  cardsReviewed: number;
  difficultSigns: string[];   // Sign IDs bookmarked for extra practice
  quizAttempts: ISLQuizScoreRecord[];
  practicedSigns: string[];
  lastPracticedAt: number | null;
}

function getDefaultProgress(): ISLUserProgress {
  return {
    completedLessons: [],
    cardsReviewed: 0,
    difficultSigns: [],
    quizAttempts: [],
    practicedSigns: [],
    lastPracticedAt: null,
  };
}

const ISL_PROGRESS_STORAGE_KEY = 'sollupath_isl_progress_v2';

export const islProgressService = {
  getProgress(): ISLUserProgress {
    try {
      const data = localStorage.getItem(ISL_PROGRESS_STORAGE_KEY);
      if (!data) return getDefaultProgress();
      return { ...getDefaultProgress(), ...JSON.parse(data) };
    } catch {
      return getDefaultProgress();
    }
  },

  saveProgress(progress: ISLUserProgress): void {
    try {
      localStorage.setItem(ISL_PROGRESS_STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn('LocalStorage save failed for ISL progress:', e);
    }
  },

  isLessonCompleted(signId: string): boolean {
    const progress = this.getProgress();
    return progress.completedLessons.includes(signId);
  },

  markLessonCompleted(signId: string): void {
    const progress = this.getProgress();
    if (!progress.completedLessons.includes(signId)) {
      progress.completedLessons.push(signId);
      this.saveProgress(progress);
    }
  },

  isDifficultSign(signId: string): boolean {
    const progress = this.getProgress();
    return progress.difficultSigns.includes(signId);
  },

  toggleDifficultSign(signId: string): boolean {
    const progress = this.getProgress();
    let isNowDifficult = false;
    if (progress.difficultSigns.includes(signId)) {
      progress.difficultSigns = progress.difficultSigns.filter(id => id !== signId);
      isNowDifficult = false;
    } else {
      progress.difficultSigns.push(signId);
      isNowDifficult = true;
    }
    this.saveProgress(progress);
    return isNowDifficult;
  },

  incrementCardsReviewed(): void {
    const progress = this.getProgress();
    progress.cardsReviewed += 1;
    this.saveProgress(progress);
  },

  recordQuizScore(quizId: string, score: number, total: number): void {
    const progress = this.getProgress();
    progress.quizAttempts.unshift({
      quizId,
      score,
      total,
      timestamp: Date.now()
    });
    // Keep last 30 attempts
    if (progress.quizAttempts.length > 30) {
      progress.quizAttempts = progress.quizAttempts.slice(0, 30);
    }
    this.saveProgress(progress);
  },

  recordSignPractice(signId: string): void {
    const progress = this.getProgress();
    if (!progress.practicedSigns.includes(signId)) {
      progress.practicedSigns.push(signId);
    }
    progress.lastPracticedAt = Date.now();
    this.saveProgress(progress);
  },

  resetAllProgress(): void {
    try {
      localStorage.removeItem(ISL_PROGRESS_STORAGE_KEY);
    } catch (e) {
      console.warn('Failed to reset ISL progress:', e);
    }
  }
};
