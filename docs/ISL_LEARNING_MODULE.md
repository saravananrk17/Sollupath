# SolluPath 2.0 — Indian Sign Language (ISL) Learn & Practise Module

## 1. Overview and Mission

**SolluPath — ISL Learn & Practise** is a major educational and accessibility extension integrated into the SolluPath assistive communication ecosystem. While traditional Augmentative and Alternative Communication (AAC) focuses primarily on symbol cards and synthetic speech output, Indian Sign Language (ISL) is the primary natural language of millions of Deaf and hard-of-hearing individuals across India.

By bridging AAC and ISL into a single unified platform, SolluPath empowers:
1. **Deaf and hard-of-hearing individuals** to explore verified sign demonstrations mapped to everyday survival and institutional phrases.
2. **Hearing family members, healthcare workers, transit staff, and caregivers** to rapidly learn essential signs, bridging the communication divide in critical public settings.
3. **Dual-mode communicators** who use visual phrase cards alongside manual signs.

---

## 2. Architectural Structure

The module lives under `src/components/isl/` and `src/data/isl/`, designed as a non-destructive, modular extension that integrates seamlessly with the root `AppContext`:

```
src/
├── data/
│   └── isl/
│       ├── categories.ts         # 8 Curated ISL categories with bilingual metadata
│       ├── signs.ts              # 17 Verified ISL sign records with kinematics & AAC links
│       └── quizzes.ts            # Scenario-based comprehension and retention quizzes
├── services/
│   ├── islProgressService.ts     # LocalStorage-backed progress, quiz scores, difficult signs
│   └── islRecognitionService.ts  # Consent-driven on-device edge/centroid optical practice
└── components/
    └── isl/
        ├── ISLDashboard.tsx      # Main hub with 4 core pillars & curriculum progress
        ├── ISLLessonStudio.tsx   # Step-by-step visual studio with kinematic controls
        ├── ISLSignVisualizer.tsx # SVG kinematic movement animator (0.5x, play/pause, steps)
        ├── ISLFlashcards.tsx     # 4-mode 3D flashcard study deck
        ├── ISLPracticeWorkspace.tsx # Dual-viewport practice studio (Reference + Camera/Manual)
        ├── ISLQuizView.tsx       # Interactive assessment with instant bilingual rationale
        ├── ISLProgressView.tsx   # Transparent progress analytics & difficult sign review
        └── ISLSignModal.tsx      # Global drawer: View ISL sign directly from AAC phrase cards
```

---

## 3. The 4 Core Learning Pillars

### Pillar 1: Sign Learning Studio (`ISLLessonStudio.tsx`)
- **Step-by-Step Breakdown:** Deconstructs each sign into 2–4 sequential milestones with English and Tamil descriptions.
- **Kinematic Visualizer:** SVG motion animator rendering directional arrows, handshape vectors, and contact points with play, pause, replay, and **0.5x slow-motion** modes.
- **Anatomical Parameters:** Explicitly lists Handshape, Movement, Location, and Non-Manual Features (facial expression / mouth movement) adhering to linguistic sign analysis standards.
- **Two-Way Actionability:** Direct buttons to "Practise Sign" (launches camera studio) and "Add to Message" (pushes the concept into the AAC Sentence Builder).

### Pillar 2: Interactive Flashcards (`ISLFlashcards.tsx`)
Supports 4 distinct learning modes catering to different cognitive stages:
1. **Meaning → Sign:** Presents the concept and category; flips to reveal the animated sign visualizer, handshape details, and execution steps.
2. **Sign → Meaning:** Displays the animated sign first without text; flips to reveal the meaning and Tamil translation.
3. **Sign Recall (Prompted):** Challenges the user to sign before revealing the solution.
4. **Difficult Signs Deck:** Filters the deck exclusively to signs bookmarked by the user for targeted reinforcement.
- Features intuitive 3D flip animation, shuffle, category filtering, and "Mark as Difficult" toggle.

### Pillar 3: Guided Practice Workspace (`ISLPracticeWorkspace.tsx`)
- **Dual-Viewport Layout:**
  - **Left Viewport (Reference):** Continuous looped sign demonstration with step cues.
  - **Right Viewport (Practice Zone):** Real-time user feedback with signing zone bounding guidelines.
- **Consent-Driven Camera Practice:** Runs entirely on-device via WebRTC and HTML5 Canvas. Evaluates hand elevation, centroid positioning, and motion dynamics for supported signs (`islRecognitionService`).
- **Accessible Non-Camera Mode:** For users without webcams, in low-light environments, or with privacy constraints. Offers guided self-assessment checkboxes and manual milestone confirmation.

### Pillar 4: Practice Quizzes & Progress (`ISLQuizView.tsx` & `ISLProgressView.tsx`)
- **Contextual Assessments:** Multiple-choice scenario evaluations testing recognition of signs in healthcare, emergency, and transit contexts.
- **Immediate Educational Explanations:** Explains why an answer is correct or incorrect in both English and Tamil.
- **Truthful Analytics:** Displays percentage of curriculum completed, cards reviewed, quiz attempt histories, and one-click data reset for shared or public devices.

---

## 4. Deep Integration with SolluPath AAC

Unlike standalone sign dictionaries, SolluPath 2.0 unifies sign language with augmentative communication:
- **Phrase Card "ISL Sign" Button:** Every AAC phrase card that has a corresponding sign displays an `ISL Sign` badge button.
- **Zero-Loss Modal (`ISLSignModal.tsx`):** Clicking the button opens an animated demonstration overlay without resetting the Sentence Builder, clearing text, or losing the user's place in their communication workflow.
- **Reverse Ingestion:** Learning a sign in the studio includes an "Add to Message" action, immediately depositing the word into the sentence builder for audio speech output or large-text display.
