import { describe, it, expect } from 'vitest';
import { AAC_PHRASES } from '../data/phrases';
import { AAC_CATEGORIES, SITUATION_COLLECTIONS } from '../data/categories';

describe('AAC Curated Phrase and Situation Dataset', () => {
  it('contains essential medical and daily survival phrases', () => {
    const requiredIds = [
      'p_help',
      'p_pain',
      'p_unwell',
      'p_water',
      'p_food',
      'p_rest',
      'p_restroom',
      'p_caregiver',
      'p_wait',
      'p_speak_slowly',
      'p_dont_understand',
      'p_repeat',
      'p_yes',
      'p_no',
      'p_thank_you'
    ];

    for (const id of requiredIds) {
      const phrase = AAC_PHRASES.find(p => p.id === id);
      expect(phrase, `Expected phrase ${id} to exist`).toBeDefined();
      expect(phrase?.translations['ta'], `Missing Tamil for ${id}`).toBeDefined();
      expect(phrase?.translations['en'], `Missing English for ${id}`).toBeDefined();
      expect(phrase?.translations['hi'], `Missing Hindi for ${id}`).toBeDefined();
    }
  });

  it('contains all 7 required public situation collections', () => {
    const requiredSituations = [
      'sit_hospital',
      'sit_pharmacy',
      'sit_transport',
      'sit_public_service',
      'sit_education',
      'sit_personal_care',
      'sit_everyday'
    ];

    for (const sitId of requiredSituations) {
      const situation = SITUATION_COLLECTIONS.find(s => s.id === sitId);
      expect(situation, `Expected situation collection ${sitId} to exist`).toBeDefined();
      expect(situation?.isSituation).toBe(true);

      const matchingPhrases = AAC_PHRASES.filter(p => p.situations.includes(sitId));
      expect(matchingPhrases.length).toBeGreaterThan(0);
    }
  });

  it('all categories have valid icon, color, and bilingual labels', () => {
    for (const cat of AAC_CATEGORIES) {
      expect(cat.id).toBeDefined();
      expect(cat.icon).toBeDefined();
      expect(cat.color).toBeDefined();
      expect(cat.translations['ta']).toBeDefined();
      expect(cat.translations['en']).toBeDefined();
    }
  });
});
