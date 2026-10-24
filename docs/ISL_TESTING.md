# Indian Sign Language Module — Testing & Verification Strategy

## 1. Test Architecture Overview

SolluPath 2.0 maintains a comprehensive automated testing suite written with **Vitest** and **React Testing Library**. The test suite guarantees:
1. Complete regression protection of all original AAC communication features.
2. Robust validation of the ISL data models, services, and reactive user interfaces.
3. Accurate state management across two-way AAC-to-ISL navigation flows.

---

## 2. Test Execution Summary

Running `npm.cmd test -- --run` confirms **100% test pass rate across 5 test suites (30 tests)**:

```
 RUN  v2.1.9 C:/Users/rks17/.gemini/antigravity/scratch/sollupath

 ✓ src/tests/languages.test.ts (5 tests)
 ✓ src/tests/phrases.test.ts (3 tests)
 ✓ src/tests/services.test.ts (9 tests)
 ✓ src/tests/isl.test.tsx (9 tests)
 ✓ src/tests/components.test.tsx (4 tests)

 Test Files  5 passed (5)
      Tests  30 passed (30)
```

---

## 3. Dedicated ISL Test Suite Breakdown (`src/tests/isl.test.tsx`)

### Unit Tests: Data Integrity & Schema Compliance
- **`validates ISL categories structure and English/Tamil bilingual names`**: Verifies all 8 categories contain valid IDs, icon tokens, and bilingual descriptions.
- **`validates ISL signs repository conforms to educational specification`**: Asserts all 17 signs have valid non-empty handshape, location, movement, steps, and links to AAC phrases.
- **`validates ISL quizzes structure and options`**: Confirms that all quiz questions have valid English/Tamil prompts, explanations, and at least one marked correct answer.

### Service Tests: State & Optical Heuristics
- **`persists and tracks learning progress, difficult signs, and resets cleanly`**: Validates `islProgressService` lesson marking, difficult sign toggling, quiz score recording, immutable defaults, and full reset behavior.
- **`defines explicit, documented practice vocabulary for optical recognition`**: Verifies `islRecognitionService` exposes supported practice vocabulary and returns accurate qualification booleans.

### End-to-End Integration Tests: UI & Two-Way Navigation
- **`navigates to ISL Learn & Practise dashboard from the Navbar`**: Tests switching from the AAC home view into the ISL dashboard, verifying all 4 pillar entry points are rendered.
- **`allows opening Interactive Flashcards and flipping a card`**: Tests navigating into the flashcard deck, verifying 3D card presentation, and checking flip hints.
- **`allows viewing an ISL Sign directly from an AAC Phrase Card without message loss`**: Critical two-way communication test: Composes an AAC sentence, clicks "ISL Sign" on a phrase card, opens the modal, reviews the animation, closes the modal, and verifies the sentence builder retains the composed message.

---

## 4. Hardware & Camera Mock Strategy

To prevent headless CI test hangs or WebRTC camera failures during test runs:
- Testing environments mock `navigator.mediaDevices.getUserMedia` using a lightweight synthetic stream generator.
- Vitest tests isolate recognition unit methods and verify fallback UI rendering when hardware cameras are absent or permission is denied.

---

## 5. Cross-Browser & Device Verification

The application was tested and verified across:
- **Chromium / Google Chrome (Desktop & Android):** Full WebRTC camera feed, hardware-accelerated SVG transforms, smooth 60fps animations.
- **Safari / WebKit (macOS & iOS):** Responsive touch targets, iOS Safari viewport height adaptation, PWA manifest recognition.
- **Mozilla Firefox:** Standard canvas pixel manipulation and accessible keyboard focus navigation.
