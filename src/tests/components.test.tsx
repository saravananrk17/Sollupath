import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import App from '../App';

describe('SolluPath End-to-End Component Integration', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the Welcome screen on initial launch with product identity and CTAs', () => {
    render(<App />);

    const brandTitles = screen.getAllByText(/SolluPath/i);
    expect(brandTitles.length).toBeGreaterThanOrEqual(1);

    const tamilTitles = screen.getAllByText(/சொல்லுபாதை/i);
    expect(tamilTitles.length).toBeGreaterThanOrEqual(1);

    expect(screen.getByText(/உங்கள் குரல், உங்கள் வழி/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /உரையாடலைத் தொடங்குக/i })).toBeInTheDocument();
  });

  it('navigates to Quick Communication and adds phrase cards to Sentence Builder', () => {
    render(<App />);

    // Click "உரையாடலைத் தொடங்குக" (Start Communicating) or Quick CTA
    const startBtn = screen.getByRole('button', { name: /உரையாடலைத் தொடங்குக/i });
    fireEvent.click(startBtn);

    // On Home screen, open Quick Communication
    const quickHero = screen.getByRole('button', { name: /Open Quick Communication/i });
    fireEvent.click(quickHero);

    // Should see search input
    expect(screen.getByPlaceholderText(/சொற்றொடர்களைத் தேடுங்கள்/i)).toBeInTheDocument();

    // Click "எனக்கு உதவி தேவை." card
    const helpCard = screen.getByRole('button', { name: /எனக்கு உதவி தேவை.*Press to add/i });
    fireEvent.click(helpCard);

    // Sentence builder should now contain "எனக்கு உதவி தேவை."
    expect(screen.getByText(/செய்தி உருவாக்குமிடம்/i)).toBeInTheDocument();

    const composedInstances = screen.getAllByText(/எனக்கு உதவி தேவை/i);
    expect(composedInstances.length).toBeGreaterThanOrEqual(2);
  });

  it('allows switching communication language while preserving composed phrases', () => {
    render(<App />);

    // Go to Quick communication
    const startBtn = screen.getByRole('button', { name: /உரையாடலைத் தொடங்குக/i });
    fireEvent.click(startBtn);
    const quickHero = screen.getByRole('button', { name: /Open Quick Communication/i });
    fireEvent.click(quickHero);

    // Add "எனக்கு உதவி தேவை."
    const helpCard = screen.getByRole('button', { name: /எனக்கு உதவி தேவை.*Press to add/i });
    fireEvent.click(helpCard);

    // Switch communication language in the builder dropdown to English
    const langSelect = screen.getByLabelText(/Select output communication language/i);
    fireEvent.change(langSelect, { target: { value: 'en' } });

    // The sentence builder should now display "I need help." without losing the phrase
    const englishMatches = screen.getAllByText('I need help.');
    expect(englishMatches.length).toBeGreaterThanOrEqual(1);
  });

  it('opens and closes Presentation Mode with large display text', () => {
    render(<App />);

    // Go to Quick
    const startBtn = screen.getByRole('button', { name: /உரையாடலைத் தொடங்குக/i });
    fireEvent.click(startBtn);
    const quickHero = screen.getByRole('button', { name: /Open Quick Communication/i });
    fireEvent.click(quickHero);

    // Add phrase
    const helpCard = screen.getByRole('button', { name: /எனக்கு உதவி தேவை.*Press to add/i });
    fireEvent.click(helpCard);

    // Click Display Large (Presentation Mode)
    const presentBtn = screen.getByLabelText(/பெரிய எழுத்தில் காட்டு/i);
    fireEvent.click(presentBtn);

    // Presentation modal should be visible
    expect(screen.getByRole('dialog', { name: /Full-screen Communication Display/i })).toBeInTheDocument();
    expect(screen.getByText(/வெளியேறு/i)).toBeInTheDocument();

    // Exit presentation
    fireEvent.click(screen.getByText(/வெளியேறு/i));

    // Should return to normal view
    expect(screen.queryByRole('dialog', { name: /Full-screen Communication Display/i })).not.toBeInTheDocument();
  });
});
