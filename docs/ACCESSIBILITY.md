# Accessibility (a11y) Conformance & Strategy

## Standards & Target Conformance

SolluPath is designed with direct adherence to **WCAG 2.2 Level AA** standards. As an Augmentative and Alternative Communication (AAC) platform, accessibility is not an afterthought or compliance checklist—it is the core function of the application.

## Key Accessibility Implementations

### 1. Visual & Contrast Design
- **Brand Palette Standards**: Background ivory (`#F7F8FA`) and cards (`#FFFFFF`) with Midnight Navy (`#14233B`) provide a contrast ratio well above the 4.5:1 requirement for standard text and 7:1 for headers.
- **High Contrast Mode**: Available with one click in the Accessibility settings, converting the palette to maximum-contrast black/white or dark presentation mode (`#000000` background with `#FACC15` vibrant yellow text).

### 2. Physical & Motor Accessibility
- **Minimum Touch Targets**: All interactive elements (communication tiles, buttons, tabs, language selector cards) enforce a minimum touch target size of **44x44 CSS pixels**.
- **Generous Spacing**: Ample padding and margin between adjacent tiles prevent accidental activation for users with tremors, spasticity, or limited fine motor control.
- **Synthesized Audio/Haptic Feedback**: Every tile tap plays a gentle Web Audio sine wave tone (520Hz, 80ms) providing tactile confirmation without requiring external audio asset downloads.

### 3. Screen Reader & Semantic HTML
- **Semantic Structure**: Built with `<header>`, `<main>`, `<nav>`, `<section>`, `<h1>`-`<h3>`, `<button>`, and ARIA roles.
- **Aria Labels & Dialog Roles**:
  - Modals feature `role="dialog"`, `aria-modal="true"`, and descriptive `aria-label`.
  - Phrase cards describe their full action: `aria-label="எனக்கு உதவி தேவை. Press to add to message builder."`
  - Active toggle switches communicate their state via `role="switch"` and `aria-checked`.

### 4. Keyboard Navigation
- **Visible Focus Rings**: High-visibility focus indicators (`outline: 3px solid #0F9D92`) styled with `outline-offset: 3px`.
- **Keyboard Activation**: All interactive cards are operable via `Tab`, `Enter`, and `Space`.
- **No Keyboard Traps**: Modals trap focus appropriately and can be dismissed via `Escape` key at any time.

### 5. Cognitive & Cognitive-Fatigue Considerations
- **Distraction-Free Layout**: No auto-playing videos, aggressive animations, or intrusive popups.
- **prefers-reduced-motion**: Respects system reduced-motion settings, disabling transitions and keyframe animations immediately.
- **Phonetic Transliteration**: Assists caregivers or family members who speak the language but cannot read the native script.
