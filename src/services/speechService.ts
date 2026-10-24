export interface VoiceMatch {
  voice: SpeechSynthesisVoice;
  isExact: boolean;
}

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  private audioCtx: AudioContext | null = null;
  private isSpeaking = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
  }

  public isSupported(): boolean {
    return !!this.synth;
  }

  public getVoices(): SpeechSynthesisVoice[] {
    if (!this.synth) return [];
    if (this.voices.length === 0) {
      this.voices = this.synth.getVoices();
    }
    return this.voices;
  }

  public findVoiceForLanguage(langCode: string, bcp47Hint?: string): VoiceMatch | null {
    const voices = this.getVoices();
    if (!voices || voices.length === 0) return null;

    const targetBcp = (bcp47Hint || langCode).toLowerCase().replace('_', '-');
    const targetBase = langCode.toLowerCase().split('-')[0];

    // 1. Exact BCP-47 match (e.g. 'ta-IN')
    const exact = voices.find(v => v.lang.toLowerCase().replace('_', '-') === targetBcp);
    if (exact) return { voice: exact, isExact: true };

    // 2. Base language prefix match (e.g. 'ta')
    const baseMatch = voices.find(v => v.lang.toLowerCase().startsWith(targetBase));
    if (baseMatch) return { voice: baseMatch, isExact: true };

    // 3. Indian English fallback if target is an Indian language
    const inEnMatch = voices.find(v => v.lang.toLowerCase() === 'en-in');
    if (inEnMatch && langCode !== 'en') {
      return { voice: inEnMatch, isExact: false };
    }

    return null;
  }

  public speak(
    text: string,
    options: {
      langCode: string;
      bcp47?: string;
      rate?: number;
      voiceURI?: string;
      onStart?: () => void;
      onEnd?: () => void;
      onError?: (err: any) => void;
    }
  ): boolean {
    if (!this.synth) {
      options.onError?.(new Error('Web Speech API not supported'));
      return false;
    }

    if (!text || text.trim().length === 0) {
      return false;
    }

    // Cancel any ongoing speech
    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = options.rate || 1.0;
    utterance.pitch = 1.0;

    const matched = this.findVoiceForLanguage(options.langCode, options.bcp47);
    if (matched) {
      utterance.voice = matched.voice;
      utterance.lang = matched.voice.lang;
    } else if (options.bcp47) {
      utterance.lang = options.bcp47;
    }

    utterance.onstart = () => {
      this.isSpeaking = true;
      options.onStart?.();
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      options.onEnd?.();
    };

    utterance.onerror = (e) => {
      this.isSpeaking = false;
      console.warn('SpeechSynthesis error:', e);
      options.onError?.(e);
    };

    try {
      this.synth.speak(utterance);
      return true;
    } catch (err) {
      this.isSpeaking = false;
      options.onError?.(err);
      return false;
    }
  }

  public stop(): void {
    if (!this.synth) return;
    this.synth.cancel();
    this.isSpeaking = false;
  }

  public getSpeakingState(): boolean {
    return this.isSpeaking;
  }

  // Synthesized gentle accessible click / audio chime for tactile feedback
  public playFeedbackBeep(frequency = 520, duration = 0.08): void {
    try {
      if (typeof window === 'undefined') return;
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;

      if (!this.audioCtx) {
        this.audioCtx = new AudioContextClass();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch {
      // Audio context might fail on un-interacted documents, ignore gracefully
    }
  }
}

export const speechService = new SpeechService();
