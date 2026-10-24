# Guide: Adding and Curating Sign Language Collections

## 1. Principles of Responsible Sign Language Integration

When expanding SolluPath to support additional sign languages or adding signs to existing collections, follow these principles:

1. **Independent Linguistic Identity:**
   - Every sign language (e.g. ISL, ASL, BSL, Auslan, LSF) is a natural, independent language with its own grammar, syntax, and vocabulary.
   - **Never combine signs from different sign languages into a single generic "Sign Language" collection.**
   - Never present ASL, BSL, and ISL as interchangeable.
2. **Deaf Community Representation & Verification:**
   - Demonstrations should be performed or reviewed by qualified Deaf signers or certified educational bodies (e.g. ISLRTC, BDA, NAD).
   - Never fabricate signs or create computer-generated translations without validation.
3. **Honest Qualification:**
   - If a sign is still in review or regional variation is disputed, mark its `verificationStatus` as `'in_review'` or `'community_contributed'`.

---

## 2. Step-by-Step: Adding a New Sign Language Collection

To register a new sign language collection (e.g., Australian Sign Language - Auslan):

### Step 1: Define the Collection Metadata in `src/data/signLanguages/collections.ts`
```typescript
{
  id: 'auslan',
  name: 'Australian Sign Language',
  nativeName: 'Auslan',
  code: 'asf',
  region: 'Australia',
  description: {
    en: 'Sign language of the Australian Deaf community, member of the BANZSL language family with two-handed fingerspelling.',
    ta: 'ஆஸ்திரேலிய காதுகேளாதோர் சமூகத்தின் சைகை மொழி.'
  },
  manualCharacteristics: 'Two-handed fingerspelling; shared BANZSL lexical heritage with BSL; distinctive Australian vocabulary.',
  verificationAuthority: 'Deaf Australia & Auslan Lexicon Project',
  entryCount: 0,
  isPrimary: false
}
```

### Step 2: Create the Sign Dataset File (`src/data/signLanguages/auslanSigns.ts`)
Define individual verified signs adhering to the `SignEntry` interface:
```typescript
import { SignEntry } from './types';

export const AUSLAN_SIGN_ENTRIES: SignEntry[] = [
  {
    id: 'auslan_lib_hello',
    languageId: 'auslan',
    name: { en: 'Hello (Auslan)' },
    meaning: { en: 'Greeting in Australian Sign Language' },
    category: 'greetings',
    videoUrl: '/videos/auslan/hello.mp4',
    posterUrl: '/posters/auslan/hello.svg',
    regionalVariant: 'National Standard',
    captions: [
      { timeInSeconds: 0, text: { en: 'Flat hand salute at temple' } }
    ],
    contextOfUse: { en: 'General casual or formal greeting in Australia.' },
    verificationStatus: 'verified',
    source: 'Auslan Signbank Standard',
    license: 'Creative Commons BY-NC 4.0 / Educational Fair Use'
  }
];
```

### Step 3: Register in `src/data/signLanguages/registry.ts`
Add the new collection array to `ALL_SIGN_ENTRIES`:
```typescript
import { AUSLAN_SIGN_ENTRIES } from './auslanSigns';

export const ALL_SIGN_ENTRIES: SignEntry[] = [
  ...ISL_SIGN_ENTRIES,
  ...ASL_SIGN_ENTRIES,
  ...BSL_SIGN_ENTRIES,
  ...AUSLAN_SIGN_ENTRIES,
];
```
The entire application UI (Collection Switcher, Search, Filter pills, Matching Challenge) will automatically recognize and display the new collection without modifying component code!

---

## 3. Video Optimization Guidelines

For optimal playback across diverse Indian mobile networks and low-bandwidth institutional devices:
1. **Resolution & Bitrate:**
   - 720p (1280x720) or 480p (854x480) at 30fps.
   - Codec: H.264 (MP4) with AAC audio (or stripped audio track) or VP9/AV1 in WebM.
   - Target bitrate: 800–1200 kbps (ensuring 3-second sign clips remain under 500KB).
2. **Framing & Staging:**
   - Presenter should be centered against a neutral, high-contrast, uncluttered background.
   - Head, shoulders, torso, and signing space (from hips to top of head) must remain clearly in frame.
   - Wear solid-colored clothing that contrasts with skin tone to ensure distinct finger visibility.
3. **Offline Caching:**
   - High-frequency emergency signs (Help, Pain, Emergency, Doctor, Water) can be pre-cached by the Service Worker (`sw.js`).
   - Non-critical signs load progressively on demand with fallback to vector kinematics.

---

## 4. Media Licensing & Attribution Protocol

- Every entry must cite its authoritative source (e.g. `ISLRTC 10,000 Sign Dictionary`, `Gallaudet ASL Lexicon`).
- Clearly state distribution terms (e.g., `Creative Commons BY-NC 4.0`, `Educational Fair Use`).
- Commercial usage or non-consensual biometric processing of Deaf community members is strictly forbidden.
