# Contributing to SolluPath (சொல்லுபாதை)

Thank you for your interest in contributing to **SolluPath**, an open-source assistive communication platform designed for people who experience speech or communication difficulties across India.

## Code of Conduct

We are committed to providing a friendly, safe, and welcoming environment for everyone, regardless of gender, sexual orientation, disability, ethnicity, or religion. Our priority is preserving the dignity, accessibility, and privacy of end users.

## How Can You Contribute?

1. **Linguistic Curation & Review**:
   - Reviewing translations for the 22 Eighth Schedule Indian languages.
   - Enhancing medical, transit, and emergency vocabulary accuracy.
   - Adding phonetic transliterations for caregivers.
2. **Accessibility (a11y) Auditing**:
   - Testing screen reader compatibility (NVDA, TalkBack, VoiceOver).
   - Verifying WCAG 2.2 Level AA compliance, focus traps, and color contrast.
3. **Core Engineering**:
   - Refining offline PWA caching strategies.
   - Improving Web Speech API fallback routines.
   - Expanding component unit tests.

## Development Setup

```bash
# Clone the repository
git clone https://github.com/your-org/sollupath.git
cd sollupath

# Install dependencies
npm install

# Start local development server
npm run dev

# Run unit tests
npm test

# Build production bundle
npm run build
```

## Pull Request Guidelines

1. Branch naming: `feature/description` or `fix/issue-description`.
2. Ensure `npm run build` and `npm test` pass with zero errors.
3. Avoid hardcoding strings: utilize centralized keys in `src/data/uiStrings.ts` and `src/data/phrases.ts`.
4. Maintain documentation integrity.
