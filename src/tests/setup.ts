import '@testing-library/jest-dom';

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

// Mock SpeechSynthesis
const mockVoices: any[] = [
  { name: 'Tamil India', lang: 'ta-IN', voiceURI: 'ta-in-1', default: false, localService: true },
  { name: 'English India', lang: 'en-IN', voiceURI: 'en-in-1', default: true, localService: true },
  { name: 'Hindi India', lang: 'hi-IN', voiceURI: 'hi-in-1', default: false, localService: true },
];

class MockUtterance {
  text: string;
  lang = 'en-US';
  rate = 1;
  pitch = 1;
  voice = null;
  onstart = null;
  onend = null;
  onerror = null;

  constructor(text: string) {
    this.text = text;
  }
}

(window as any).SpeechSynthesisUtterance = MockUtterance;

(window as any).speechSynthesis = {
  getVoices: () => mockVoices,
  speak: (utterance: any) => {
    if (utterance.onstart) utterance.onstart();
    setTimeout(() => {
      if (utterance.onend) utterance.onend();
    }, 10);
  },
  cancel: () => {},
  pause: () => {},
  resume: () => {},
  onvoiceschanged: null,
};

// Mock AudioContext
(window as any).AudioContext = class {
  state = 'running';
  currentTime = 0;
  destination = {};
  createOscillator() {
    return {
      type: 'sine',
      frequency: { setValueAtTime: () => {} },
      connect: () => {},
      start: () => {},
      stop: () => {},
    };
  }
  createGain() {
    return {
      gain: {
        setValueAtTime: () => {},
        exponentialRampToValueAtTime: () => {},
      },
      connect: () => {},
    };
  }
  resume() {
    return Promise.resolve();
  }
};
