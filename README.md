# SolluPath 2.0 — Your Voice, Your Way (சொல்லுபாதை)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![WCAG 2.2 Level AA](https://img.shields.io/badge/Accessibility-WCAG%202.2%20AA-0F9D92.svg)](docs/ACCESSIBILITY.md)
[![Eighth Schedule Languages](https://img.shields.io/badge/Languages-22%20Indian%20Scheduled%20%2B%20EN-3446A8.svg)](docs/MULTILINGUAL_SUPPORT.md)
[![ISL Learning Module](https://img.shields.io/badge/Indian%20Sign%20Language-ISLRTC%20Aligned-FF6B6B.svg)](docs/ISL_LEARNING_MODULE.md)
[![Sign Video Library](https://img.shields.io/badge/Sign%20Library-Multi--Language%20Archive-3446A8.svg)](docs/SIGN_LANGUAGE_LIBRARY.md)
[![Tests: Vitest](https://img.shields.io/badge/Tests-44%20Passed-10B981.svg)](src/tests/)
[![PWA Ready](https://img.shields.io/badge/PWA-Offline%20Ready-14233B.svg)](public/sw.js)

> **VBYLD 2027 | Hack for Social Cause | Assistive Technology & Accessibility**  
> Premium Multilingual Augmentative and Alternative Communication (AAC) & Indian Sign Language (ISL) Video Platform for India.

---

## 1. Product Overview & Problem Statement

Communication is fundamental to human dignity and self-expression. Over **26.8 million persons with disabilities** in India, including millions of Deaf and hard-of-hearing individuals, as well as more than **1.8 million stroke survivors** each year, experience severe barriers in verbal or traditional spoken interactions. In critical settings—such as emergency rooms, medical clinics, pharmacies, government ration offices, classrooms, and public transit—communicating urgent pain or essential needs can be a daunting, high-stress challenge.

**SolluPath 2.0** (Tamil: *சொல்லுபாதை*, meaning *"The Path to Expression"*) bridges multiple assistive modalities into one cohesive, accessible platform:
1. **Multilingual AAC Engine:** Rapid 1-to-2 tap visual communication cards, deterministic indic translations across all 22 scheduled Indian languages, high-contrast presentation mode, and Web Speech voice output.
2. **Indian Sign Language (ISL) Learn & Practise Module:** An interactive, ISLRTC-aligned learning suite featuring step-by-step kinetic visualizers, 4-mode study flashcards, scenario quizzes, on-device optical practice, and direct integration with AAC phrase cards.
3. **Sign Language Video Experience & Library:** Ambient living sign language video poster background with WCAG-compliant contrast, and a comprehensive, searchable video archive supporting Indian Sign Language (ISL) along with responsibly isolated comparative collections (American Sign Language - ASL, British Sign Language - BSL).

---

## 2. Key Implemented Modules & Capabilities

### ♿ Core AAC Communication Workflow (100% Preserved)
- **Visual Phrase Cards**: Semantic, color-coded cards with icons, native script, and optional transliterations.
- **Message / Sentence Builder**: Assemble multi-phrase sentences, reorder chips, remove items, undo actions, or type custom adjustments with real-time text sync.
- **7 Dedicated Situation Collections**:
  1. *Hospital & Clinic* (Pain, dizziness, caregiver calls, symptoms)
  2. *Pharmacy* (Medicine inquiries, dosage explanations, written instructions)
  3. *Public Transport* (Bus stops, destination inquiries, arrival alerts)
  4. *Public Services & Government Offices* (Application forms, procedural steps)
  5. *Education & Classroom* (Repeat instructions, extra response time)
  6. *Personal Care & Hygiene* (Restroom needs, temperature, privacy requests)
  7. *Everyday Needs* (Water, food, rest, yes/no, courtesy)
- **High-Contrast Full-Screen Presentation & Speech**: Distraction-free typography, dynamic zoom (up to 2.5x), dark mode, and Web Speech API synthesis with clear fallback warnings.

### 🎥 Living Sign Language Video Background (`SignVideoBackground.tsx`)
- **Subtle Living Poster Treatment:** Greets users with an ambient looping demonstration of Indian Sign Language (Namaste greeting) without visual distraction.
- **Strictly Non-Blocking (`pointer-events-none`):** Clicks, taps, keyboard navigation, and screen-readers pass through with zero interference.
- **High Text Contrast:** Layered multi-stop gradient overlay ensures foreground text maintains WCAG AAA compliance (12:1+ contrast).
- **Reduced-Motion & Low-Bandwidth Respect:** Respects OS preferences (`prefers-reduced-motion`) and provides quick pause/hide controls; automatically degrades to a lightweight (<2KB) animated SVG vector poster when offline or on low-bandwidth devices.

### 📚 Multi-Sign Language Video Library (`SignLibraryView.tsx`)
- **Independent Language Collections:** Indian Sign Language (ISL) as primary collection, alongside separate, clearly labelled comparative collections for American Sign Language (ASL) and British Sign Language (BSL).
- **Linguistic Integrity:** Crucial structural differences documented (e.g. two-handed fingerspelling in ISL/BSL vs one-handed in ASL). Collections are never combined or presented as interchangeable.
- **Resilient Multi-Speed Player (`SignVideoPlayer.tsx`):** Playback speeds (`0.5x`, `0.75x`, `1.0x`, `1.25x`), replay, live closed captions (CC), and automatic fallback to animated vector kinematics (`ISLSignVisualizer`) if video files cannot load offline.
- **Interactive Matching Challenge (`SignMatchingGame.tsx`):** Engaging 2-column game matching sign demonstrations with meanings and usage contexts, with streak scoring and local persistence.
- **Permanent Text Access:** Step-by-step captions, context of use, grammatical notes, and verification statuses remain 100% accessible even if video media fails.

### 🤟 Indian Sign Language (ISL) Learn & Practise
- **Sign Learning Studio**: Visual step-by-step instruction with animated SVG vector kinematics, slow-motion (0.5x), play/pause, replay, and anatomical parameters (Handshape, Location, Movement, Non-Manual Features).
- **Interactive Flashcards**: 4 adaptive study modes:
  - *Meaning → Sign*
  - *Sign → Meaning*
  - *Sign Recall*
  - *Difficult Signs Deck*
- **Guided Practice Workspace**: Side-by-side reference video mirroring with optional, privacy-first on-device camera feedback (`islRecognitionService`) and a fully accessible non-camera self-assessment fallback.
- **Practice Quizzes & Assessments**: Scenario-based comprehension challenges with instant bilingual educational rationales in English and Tamil.
- **Two-Way AAC-to-ISL Integration**:
  - View animated ISL sign demonstrations directly from any AAC phrase card via `ISLSignModal` without resetting composed sentences.
  - Push learned concepts from the sign studio directly into the AAC Sentence Builder.

### 🇮🇳 All 22 Scheduled Indian Languages Architecture
- Complete architectural foundation for all **22 languages in the Eighth Schedule of the Indian Constitution** + English.
- Searchable language selector supporting both English and native script (e.g. *தமிழ், हिन्दी, বাংলা, తెలుగు, ಕನ್ನಡ, മലയാളம், اردو*).
- Transparent translation approval reporting and full bidirectional Right-to-Left (RTL) mirroring for Urdu, Kashmiri, and Sindhi.

### 🛡️ Privacy, Persistence & Offline Reliability
- **Zero Registration & Zero Cloud Ingestion**: Works instantaneously without an account.
- **100% On-Device Camera Processing**: WebRTC camera frames are analyzed in temporary browser memory buffers and discarded immediately. No video is ever recorded, stored, or transmitted.
- **Installable PWA**: Service Worker (`sw.js`) caches application assets for guaranteed offline operation in hospital basements or remote rural transit.

---

## 3. Technology Stack

- **Frontend Core**: React 18, TypeScript (Strict Mode)
- **Build Tool**: Vite 5
- **Design System & Styling**: Tailwind CSS (custom brand palette, reduced-motion, WCAG AA compliance)
- **Iconography**: Lucide React
- **Audio & Speech**: Web Speech API (`SpeechSynthesis`) + Web Audio API (`AudioContext` synthesized tactile chime)
- **Computer Vision & Heuristics**: HTML5 Canvas, WebRTC, YCrCb chrominance thresholding, temporal edge & centroid kinematics
- **Local Persistence**: `localStorage` with resilient fallback
- **Automated Testing**: Vitest 2, React Testing Library, jsdom
- **PWA**: Cache-First Service Worker (`sw.js`) + Web App Manifest (`manifest.webmanifest`)

---

## 4. Brand Palette

| Color Name | Hex Code | Purpose |
|---|---|---|
| **Midnight Navy** | `#14233B` | Brand identity, primary buttons, strong contrast |
| **Deep Indigo** | `#3446A8` | Interactive accents, active focus indicators |
| **Teal** | `#0F9D92` | Accessible primary actions, call-to-actions, speak state |
| **Soft Ivory** | `#F7F8FA` | Neutral background, reduced glare |
| **White** | `#FFFFFF` | Card surfaces, modals |
| **Primary Text** | `#172033` | High-contrast body and heading copy |
| **Secondary Text** | `#657188` | Muted descriptions and secondary labels |
| **Border** | `#E3E8EF` | Accessible borders and separators |

---

## 5. Getting Started & Installation

### Prerequisites
- Node.js (v18 or higher recommended; developed and verified on Node v24.20.0)
- npm or pnpm

### Quick Start
```bash
# Clone the repository
git clone https://github.com/your-org/sollupath.git
cd sollupath

# Install dependencies
npm install

# Start Vite development server
npm run dev
```

Open your browser at `http://localhost:5173` to explore the live application.

---

## 6. Development, Test & Build Commands

| Command | Action |
|---|---|
| `npm run dev` | Starts local development server at `http://localhost:5173` |
| `npm test` | Runs the Vitest automated test suite (44 unit, integration, and E2E tests) |
| `npm run test:watch` | Runs Vitest in interactive watch mode |
| `npm run build` | Runs TypeScript compilation (`tsc`) and Vite production bundle |
| `npm run preview` | Previews the production build locally |

---

## 7. Testing & Quality Assurance Summary

SolluPath includes a comprehensive test suite in `src/tests/` with **100% passing tests (44/44)** across 6 test suites:

```
 Test Files  6 passed (6)
      Tests  44 passed (44)
```

1. **`languages.test.ts` (5 tests)**:
   - Registration of 22 Eighth Schedule Indian languages + English.
   - BCP-47 locale tags, native script labels, truthful coverage metrics, and RTL rules.
2. **`phrases.test.ts` (3 tests)**:
   - Essential emergency, clinical, and daily phrases in Tamil and English.
   - Categorization across 7 situation-specific collections.
3. **`services.test.ts` (9 tests)**:
   - `storageService` persistence and data clearing.
   - `speechService` voice matching, fallback handling, and synthesized tactile chimes.
   - `translationService` deterministic offline dictionary lookups.
4. **`isl.test.tsx` (9 tests)**:
   - ISL categories and signs repository schema validation.
   - `islProgressService` persistent state, bookmarks, and immutable resets.
   - `islRecognitionService` supported practice vocabulary declarations.
   - UI navigation to ISL dashboard, flashcard 3D flips, and zero-loss AAC modal integration.
5. **`components.test.tsx` (4 tests)**:
   - Full AAC user journey: Welcome screen → Quick Communication → Sentence Builder → Language Switching → Presentation Mode.
6. **`signLibrary.test.tsx` (14 tests)**:
   - Multi-sign language separation and registry integrity (ISL vs ASL vs BSL).
   - One-handed vs two-handed fingerspelling distinction documentation.
   - Registry search across English and Tamil keywords.
   - Video watches and Matching Challenge streak high scores.
   - Living poster video background rendering, reduced motion pause, and collection switching.
   - Video player modal with step-by-step captions and AAC Sentence Builder insertion.

---

## 8. Progressive Web App (PWA) & Offline Instructions

1. Open SolluPath in any modern browser (Chrome, Edge, Safari, Firefox).
2. The Service Worker (`sw.js`) automatically pre-caches the static application shell.
3. **To test offline capability:**
   - In Chrome DevTools, open the **Network** tab and toggle the throttling dropdown to **Offline**.
   - Navigate between Home, Quick Communication, Situations, Presentation Mode, ISL Flashcards, and Sign Library.
   - All 150+ phrase translations, audio chimes, ISL vector animations, closed captions, and builder operations function without an internet connection.
4. On mobile devices, tap **Add to Home Screen** or **Install App** to launch SolluPath as a standalone full-screen application.

---

## 9. Speech Synthesis & Device Voice Notice

- Text-to-Speech output uses the native **Web Speech API**.
- Voice availability depends on the host operating system and installed speech packs (e.g., Windows Speech, Android Google TTS, iOS VoiceOver voices).
- If your device does not have a Tamil or Hindi speech voice installed:
  - SolluPath displays an honest warning banner.
  - Users are directed to **Large-Text Presentation Mode**, ensuring visual communication remains unimpeded.
  - SolluPath will **never falsely claim** a message was spoken when a voice is absent.

---

## 10. Privacy & Medical Safety Statement

- **Not a Medical Device**: SolluPath is an assistive communication aid (AAC) and does not provide clinical diagnoses, prescriptions, or emergency dispatch.
- **Local Data Only**: All messages, custom phrases, preferences, and ISL learning progress remain strictly on your device.
- **Camera Privacy**: No video or camera images are ever recorded, saved, or uploaded to any server.

---

## 11. Complete Documentation Index

### Core AAC Platform Documentation
- [System Architecture](docs/ARCHITECTURE.md)
- [Accessibility (a11y) Conformance](docs/ACCESSIBILITY.md)
- [Multilingual Indic Support](docs/MULTILINGUAL_SUPPORT.md)
- [Privacy Charter](docs/PRIVACY.md)
- [User Testing Protocol](docs/USER_TESTING.md)
- [Social Impact Measurement](docs/IMPACT_MEASUREMENT.md)
- [Hackathon Submission Overview](docs/HACKATHON_SUBMISSION.md)
- [Live Demo Script](docs/DEMO_SCRIPT.md)

### ISL Learn & Practise Documentation
- [ISL Learning Module Overview](docs/ISL_LEARNING_MODULE.md)
- [ISL Content Sources & ISLRTC Alignment](docs/ISL_CONTENT_SOURCES.md)
- [ISL Optical Recognition Pipeline & Scoped Practice](docs/ISL_RECOGNITION.md)
- [ISL Camera Privacy & Consent Architecture](docs/ISL_PRIVACY.md)
- [ISL Testing & Verification Strategy](docs/ISL_TESTING.md)
- [ISL Engineering Roadmap & Future Research](docs/ISL_ROADMAP.md)

### Sign Language Video Experience Documentation
- [Sign Language Video Library Architecture](docs/SIGN_LANGUAGE_LIBRARY.md)
- [Sign Language Video Background & Living Poster](docs/VIDEO_BACKGROUND.md)
- [Guide: Adding & Curating Sign Language Collections](docs/ADDING_SIGN_LANGUAGES.md)

---

## 12. License & Social Cause Attribution

Distributed under the **MIT License**. See [LICENSE](LICENSE) for details.  
Built for **VBYLD 2027 — Hack for Social Cause**. Dedicated to universal communication dignity across India.
