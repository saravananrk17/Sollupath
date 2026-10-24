import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { signLanguageRegistry, ALL_SIGN_ENTRIES } from '../data/signLanguages/registry';
import { getSignLanguageCollection } from '../data/signLanguages/collections';
import { islProgressService } from '../services/islProgressService';

describe('Sign Language Video Experience & Library Extension', () => {
  beforeEach(() => {
    localStorage.clear();
    islProgressService.resetAllProgress();
  });

  describe('Multi-Sign Language Collection Integrity', () => {
    it('registers Indian Sign Language (ISL) as the primary verified collection', () => {
      const islCol = getSignLanguageCollection('isl');
      expect(islCol).toBeDefined();
      expect(islCol?.isPrimary).toBe(true);
      expect(islCol?.name).toBe('Indian Sign Language');
      expect(islCol?.verificationAuthority).toContain('ISLRTC');
      expect(islCol?.entryCount).toBeGreaterThanOrEqual(15);
    });

    it('keeps American Sign Language (ASL) and British Sign Language (BSL) as independent, unmixed collections', () => {
      const collections = signLanguageRegistry.getCollections();
      expect(collections.length).toBe(3);

      const islSigns = signLanguageRegistry.getSignsForLanguage('isl');
      const aslSigns = signLanguageRegistry.getSignsForLanguage('asl');
      const bslSigns = signLanguageRegistry.getSignsForLanguage('bsl');

      // Verify no mixing of collection signs
      expect(islSigns.every(s => s.languageId === 'isl')).toBe(true);
      expect(aslSigns.every(s => s.languageId === 'asl')).toBe(true);
      expect(bslSigns.every(s => s.languageId === 'bsl')).toBe(true);

      // Verify each collection has verified entries
      expect(islSigns.length).toBeGreaterThanOrEqual(15);
      expect(aslSigns.length).toBeGreaterThanOrEqual(5);
      expect(bslSigns.length).toBeGreaterThanOrEqual(5);
    });

    it('explicitly documents the one-handed vs two-handed fingerspelling distinction between ASL and ISL/BSL', () => {
      const islCol = getSignLanguageCollection('isl');
      const aslCol = getSignLanguageCollection('asl');
      const bslCol = getSignLanguageCollection('bsl');

      expect(islCol?.manualCharacteristics.toLowerCase()).toContain('two-handed');
      expect(aslCol?.manualCharacteristics.toLowerCase()).toContain('one-handed');
      expect(bslCol?.manualCharacteristics.toLowerCase()).toContain('two-handed');

      // Check specific Letter A notes
      const islA = signLanguageRegistry.getSignById('isl_lib_alpha_a');
      const aslA = signLanguageRegistry.getSignById('asl_lib_alpha_a');

      expect(islA?.notes?.en).toContain('two-handed');
      expect(aslA?.notes?.en).toContain('ONE HAND');
    });

    it('asserts all sign entries contain complete schema fields, licences, and verification status', () => {
      for (const sign of ALL_SIGN_ENTRIES) {
        expect(sign.id).toBeDefined();
        expect(sign.languageId).toBeDefined();
        expect(sign.name.en).toBeTruthy();
        expect(sign.meaning.en).toBeTruthy();
        expect(sign.contextOfUse.en).toBeTruthy();
        expect(sign.source).toBeTruthy();
        expect(sign.license).toBeTruthy();
        expect(['verified', 'in_review', 'community_contributed']).toContain(sign.verificationStatus);
        expect(sign.captions.length).toBeGreaterThanOrEqual(1);
      }
    });
  });

  describe('Registry Search and Filtering Capabilities', () => {
    it('searches signs by English and Tamil keywords accurately', () => {
      const doctorSigns = signLanguageRegistry.searchSigns('Doctor', 'isl');
      expect(doctorSigns.length).toBeGreaterThanOrEqual(1);
      expect(doctorSigns[0].name.en).toContain('Doctor');

      const tamilSearch = signLanguageRegistry.searchSigns('மருத்துவர்', 'isl');
      expect(tamilSearch.length).toBeGreaterThanOrEqual(1);
      expect(tamilSearch[0].id).toBe('isl_lib_doctor');
    });

    it('filters signs by category correctly', () => {
      const emergencySigns = signLanguageRegistry.searchSigns('', 'isl', 'emergency');
      expect(emergencySigns.length).toBeGreaterThanOrEqual(2);
      expect(emergencySigns.every(s => s.category === 'emergency')).toBe(true);
    });

    it('resolves related signs without circular broken references', () => {
      const related = signLanguageRegistry.getRelatedSigns('isl_lib_namaste');
      expect(related.length).toBeGreaterThanOrEqual(1);
      expect(related.every(r => r.id !== undefined)).toBe(true);
    });
  });

  describe('Video Library Learning Services & Revision Persistence', () => {
    it('tracks video watches and records matching game high scores', () => {
      expect(islProgressService.getProgress().videosWatched.length).toBe(0);

      islProgressService.recordVideoWatch('isl_lib_doctor');
      expect(islProgressService.getProgress().videosWatched).toContain('isl_lib_doctor');

      expect(islProgressService.getProgress().matchingGameHighScore).toBe(0);
      islProgressService.recordMatchingScore(40);
      expect(islProgressService.getProgress().matchingGameHighScore).toBe(40);

      islProgressService.recordMatchingScore(30); // Lower score does not overwrite
      expect(islProgressService.getProgress().matchingGameHighScore).toBe(40);
    });

    it('persists revision bookmarks and allows toggling', () => {
      expect(islProgressService.isSignSavedForRevision('isl_lib_help')).toBe(false);

      const bookmarked = islProgressService.toggleSignRevision('isl_lib_help');
      expect(bookmarked).toBe(true);
      expect(islProgressService.isSignSavedForRevision('isl_lib_help')).toBe(true);

      const unbookmarked = islProgressService.toggleSignRevision('isl_lib_help');
      expect(unbookmarked).toBe(false);
      expect(islProgressService.isSignSavedForRevision('isl_lib_help')).toBe(false);
    });
  });

  describe('UI Integration & Video Background', () => {
    it('renders the subtle sign language video background living poster on the Home screen', () => {
      render(<App />);

      // Navigate to Home screen from Welcome screen
      const homeNavBtns = screen.getAllByRole('button', { name: /Home/i });
      fireEvent.click(homeNavBtns[0]);

      // Ensure Living Poster text is rendered
      expect(screen.getByText(/Living Sign Language Poster/i)).toBeInTheDocument();
      expect(screen.getByText(/Verified Indian Sign Language Greeting/i)).toBeInTheDocument();

      // Check background controls
      const pauseBtn = screen.getByLabelText(/Pause sign language background motion/i);
      expect(pauseBtn).toBeInTheDocument();
    });

    it('navigates to the Sign Language Video Library from the Navbar', () => {
      render(<App />);

      // Find Sign Library in navigation
      const libraryNavBtns = screen.getAllByRole('button', { name: /Sign Library/i });
      fireEvent.click(libraryNavBtns[0]);

      // Verify Library view is active
      expect(screen.getByText(/Sign Language Video Library/i)).toBeInTheDocument();
      expect(screen.getByText(/Multi-Sign Language Demonstration Archive/i)).toBeInTheDocument();
      expect(screen.getByText(/Select Sign Language Collection/i)).toBeInTheDocument();
    });

    it('allows switching between Indian, American, and British sign language collections', () => {
      render(<App />);

      // Navigate to Sign Library
      const libraryNavBtns = screen.getAllByRole('button', { name: /Sign Library/i });
      fireEvent.click(libraryNavBtns[0]);

      // Click American Sign Language collection
      const aslColBtn = screen.getByRole('button', { name: /American Sign Language/i });
      fireEvent.click(aslColBtn);

      // Verify ASL content is displayed
      expect(screen.getByText(/One-handed fingerspelling; French Sign Language/i)).toBeInTheDocument();
      expect(screen.getByText(/Hello \/ Greeting \(ASL\)/i)).toBeInTheDocument();

      // Click British Sign Language collection
      const bslColBtn = screen.getByRole('button', { name: /British Sign Language/i });
      fireEvent.click(bslColBtn);

      // Verify BSL content is displayed
      expect(screen.getByText(/Two-handed fingerspelling; BANZSL linguistic family/i)).toBeInTheDocument();
      expect(screen.getByText(/Hello \/ Hi \(BSL\)/i)).toBeInTheDocument();
    });

    it('opens a sign video player modal and reveals step-by-step captions', () => {
      render(<App />);

      // Navigate to Sign Library
      const libraryNavBtns = screen.getAllByRole('button', { name: /Sign Library/i });
      fireEvent.click(libraryNavBtns[0]);

      // Find and click the Namaste / Hello sign card
      const namasteCards = screen.getAllByText(/Namaste \/ Hello/i);
      fireEvent.click(namasteCards[0]);

      // Verify modal dialog opens
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText(/Step-by-Step Signing Guide/i)).toBeInTheDocument();
      expect(screen.getAllByText(/Begin with both hands relaxed at chest level/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getByRole('button', { name: /Add to Message Builder/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Practise with Camera/i })).toBeInTheDocument();

      // Close modal
      const closeBtn = screen.getByLabelText(/Close video player/i);
      fireEvent.click(closeBtn);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('opens the interactive Matching Challenge and matches signs with meanings', () => {
      render(<App />);

      // Navigate to Sign Library
      const libraryNavBtns = screen.getAllByRole('button', { name: /Sign Library/i });
      fireEvent.click(libraryNavBtns[0]);

      // Switch to Matching Challenge tab
      const matchingTab = screen.getByRole('button', { name: /Matching Challenge/i });
      fireEvent.click(matchingTab);

      // Verify matching board is rendered
      expect(screen.getByText(/Match Signs with Meanings/i)).toBeInTheDocument();
      expect(screen.getByText(/Column A: Sign Demonstrations/i)).toBeInTheDocument();
      expect(screen.getByText(/Column B: Meanings & Usage Context/i)).toBeInTheDocument();
    });
  });
});
