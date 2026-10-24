# SolluPath — Sign Language Video Library Architecture

## 1. Overview and Mission

The **Sign Language Video Library** is a dedicated educational and reference archive integrated directly into SolluPath. While AAC symbol cards assist in synthetic text generation and audio speech, the Video Library provides authentic, visual demonstrations of verified manual signs with rich contextual and grammatical notes.

---

## 2. Core Library Capabilities

### 🔍 Searchable and Categorized Archive
- **Multi-language Search:** Full-text search across English sign names, Tamil translations, native script forms, and plain-language definitions.
- **Categorical Organization:** Signs are grouped into 8 standardized domains:
  - *Greetings & Courtesy*
  - *Emergency & Urgent Assistance*
  - *Hospital & Healthcare*
  - *Pharmacy & Prescription*
  - *Public Transport & Navigation*
  - *Everyday Needs & Hydration*
  - *Fingerspelling & Alphabet*
  - *Numbers & Counting*

### 🎬 Accessible Multi-Speed Video Player (`SignVideoPlayer.tsx`)
- **Resilient Media Architecture:** Evaluates local/remote video playback and automatically falls back to offline SVG vector kinematics (`ISLSignVisualizer`) if video is unavailable or offline.
- **Adjustable Playback Speed:** Allows signers to review intricate hand positions at `0.5x`, `0.75x`, `1.0x`, and `1.25x` speeds.
- **Closed Captions (CC):** Live synchronized subtitles displayed over the video with step-by-step bilingual breakdowns (English & Tamil).
- **Permanent Text Fallback:** Written step-by-step signing guides, usage contexts, and grammatical notes are permanently rendered below the player, ensuring 100% learning continuity even if video fails.

### 🧩 Interactive Matching Challenge (`SignMatchingGame.tsx`)
- An engaging 2-column interactive exercise challenging users to match sign demonstrations with their corresponding plain-language meanings and usage contexts.
- Tracks score streaks, sound chimes, and saves the user's high score locally in `islProgressService`.

---

## 3. Schema Specification (`SignEntry`)

Every entry in the library follows a rigorous, type-safe schema:

```typescript
export interface SignEntry {
  id: string;                       // Unique slug e.g. 'isl_lib_doctor'
  languageId: string;               // Language collection e.g. 'isl', 'asl', 'bsl'
  name: {
    en: string;                     // English name
    ta?: string;                    // Tamil translation
    nativeScript?: string;          // Script in native language
  };
  meaning: {
    en: string;                     // Plain-language definition
    ta?: string;
  };
  category: string;                 // Standardized category
  videoUrl?: string;                // Video demonstration file or stream
  posterUrl?: string;               // Static visual poster
  captions: SignVideoCaption[];     // Timestamped step-by-step captions
  contextOfUse: {
    en: string;                     // Where and when to sign this
    ta?: string;
  };
  notes?: {
    en: string;                     // Grammatical parameters and regional notes
    ta?: string;
  };
  regionalVariant?: string;         // e.g. 'ISLRTC National Standard'
  verificationStatus: 'verified' | 'in_review' | 'community_contributed';
  source: string;                   // Institutional source & attribution
  license: string;                  // Copyright & educational distribution terms
  relatedSignIds?: string[];        // Semantic cross-references
  linkedPhraseId?: string;          // AAC phrase link for two-way synthesis
  linkedISLSignId?: string;         // ISL practice studio link
  kinematicSteps?: string[];        // Fallback animation steps
}
```

---

## 4. Two-Way Integration with SolluPath AAC

1. **"Practise with Camera" CTA:** Directly launches the Guided Practice Workspace (`ISLPracticeWorkspace`) for optical feedback or non-camera milestone verification.
2. **"Add to Message Builder" CTA:** Inserts the signed concept directly into the AAC Sentence Builder for real-time speech output or large-text display.
3. **"Bookmark for Revision" CTA:** Saves the sign to the user's difficult/revision deck, accessible via the "Saved Revision" tab.
