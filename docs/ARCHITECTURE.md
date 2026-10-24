# SolluPath Architecture Specification

## Overview

**SolluPath** (சொல்லuபாதை) is an offline-first, client-rendered Progressive Web Application (PWA) built with React 18, TypeScript, Tailwind CSS, and Vite. It is engineered specifically for Augmentative and Alternative Communication (AAC) in multilingual Indian environments.

```
+---------------------------------------------------------------------------------+
|                                 SolluPath Client                                |
|                                                                                 |
|  +---------------------------------------------------------------------------+  |
|  |                            Presentation Layer                             |  |
|  |  [Navbar]  [WelcomeView]  [HomeView]  [QuickView]  [SituationView]        |  |
|  |  [SentenceBuilder]  [PhraseCard]  [PresentationModal (Full-screen A/V)]   |  |
|  |  [LanguageModal]  [AccessibilityModal]  [HelpAboutModal]                  |  |
|  +---------------------------------------------------------------------------+  |
|                                       │                                         |
|  +---------------------------------------------------------------------------+  |
|  |                        State & Context Layer                              |  |
|  |                        AppContext (React 18)                              |  |
|  |  - Active Language & Script Settings    - Selected Phrase IDs             |  |
|  |  - Manual Edit Buffer                   - High Contrast / Scaling Engine  |  |
|  |  - Speech Synthesis Controller          - Local Favorites & Custom Items  |  |
|  +---------------------------------------------------------------------------+  |
|                                       │                                         |
|  +---------------------------------------------------------------------------+  |
|  |                        Core Service Abstractions                          |  |
|  |                                                                           |  |
|  |   +--------------------+  +--------------------+  +--------------------+  |  |
|  |   |   SpeechService    |  | TranslationService |  |   StorageService   |  |  |
|  |   | (Web Speech API +  |  | (Deterministic     |  | (LocalStorage +    |  |  |
|  |   | AudioContext Chime)|  | Indic Engine)      |  | Local-First Sync)  |  |  |
|  |   +--------------------+  +--------------------+  +--------------------+  |  |
|  +---------------------------------------------------------------------------+  |
|                                       │                                         |
|  +---------------------------------------------------------------------------+  |
|  |                    Offline Data & Service Worker Engine                   |  |
|  |  - Service Worker (Cache-First Shell: sw.js)                              |  |
|  |  - 22 Eighth Schedule Indian Languages Dataset (languages.ts)            |  |
|  |  - Curated AAC Clinical & Emergency Phrases (phrases.ts)                 |  |
|  |  - 7 Situation-Specific Collections (categories.ts)                       |  |
|  +---------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------+
```

## Architectural Design Principles

1. **Zero External Runtime Dependency for Core AAC**:
   - The primary communication workflow (selecting phrases, building sentences, presenting in large text, and speaking) requires zero external APIs, zero paid tokens, and zero backend databases.
   - Operates 100% on-device even in remote hospital basements or offline rural transport.

2. **Deterministic Translation & Sentence Composition**:
   - Phrases possess stable IDs (`p_help`, `p_pain`, `p_water`, etc.).
   - Switching the communication language performs a dictionary-based deterministic translation lookup.
   - Prevents AI hallucinations or inaccurate clinical advice.

3. **Multi-Indic Script & RTL Rendering**:
   - Dynamic document direction adjustment: `dir="rtl"` for Urdu, Kashmiri, and Sindhi; `dir="ltr"` for Tamil, English, Hindi, Bengali, etc.
   - Complex text shaping font stack preventing clipping of Tamil and Devanagari matras, vowel signs, and conjunct ligatures.

4. **Speech Synthesis with Truthful Fallback**:
   - Integrates browser Web Speech API (`SpeechSynthesis`).
   - Dynamic voice enumeration (`onvoiceschanged`) matching against target BCP-47 locale tags (`ta-IN`, `en-IN`, `hi-IN`, etc.).
   - When no voice exists on the user's operating system, the system falls back gracefully to Large-Text Presentation Mode without misleading the user.

5. **Local-First Privacy Architecture**:
   - All user data (draft messages, custom phrases, favorites, accessibility options) is stored strictly in `localStorage` or memory.
   - No telemetry, analytics trackers, or user identifying data is collected.
