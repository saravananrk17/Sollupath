# VBYLD 2027 Hackathon Submission: SolluPath

## Project Title
**SolluPath — Your Voice, Your Way (சொல்லுபாதை)**

## Track & Category
**Hack for Social Cause | Assistive Technology & Accessibility**

---

## 1. Executive Summary
Communication is a fundamental human right. For millions of people with speech motor difficulties—due to stroke recovery, cerebral palsy, vocal trauma, tracheostomies, or neurodivergence—interacting with healthcare workers, transit drivers, and public officials in India is often an overwhelming ordeal.

**SolluPath** is a high-performance, offline-first Augmentative and Alternative Communication (AAC) platform engineered specifically for the multilingual reality of India. It features a curated visual tile system across 7 essential public situations, a deterministic sentence builder, large-text presentation mode, Web Speech API integration, and architectural support for all 22 Eighth Schedule Indian languages (with full priority curation for Tamil and English).

## 2. Core Social Impact & Innovation
1. **Designed for Stressful Environments**: Clean, high-contrast, distraction-free interface tested for ICU wards, pharmacy counters, and crowded buses.
2. **Deterministic & Safe Multilingual Communication**: Allows a user to compose a message in Tamil and switch the output to English or Hindi instantaneously with zero AI hallucinations, preserving patient safety.
3. **100% Offline & Private**: Zero registration, zero tracking cookies, zero cloud API dependencies for essential communication. Runs directly from browser cache as an installable PWA.
4. **Universal Access**: 100% open-source, eliminating the prohibitive $300+ licensing barriers of proprietary Western AAC hardware and software.

## 3. Technology Stack
- **Framework**: React 18, TypeScript, Vite
- **Styling & Design System**: Tailwind CSS, Lucide React
- **Speech Synthesis**: Native Web Speech API with BCP-47 locale matching and Web Audio feedback tones
- **PWA / Offline**: Service Worker App-Shell caching + Web App Manifest
- **Testing & Quality Assurance**: Vitest, React Testing Library (21 automated tests passing, 100% test pass rate)

## 4. Verification & Readiness
- ✅ Complete working prototype running on localhost:5173.
- ✅ Tested on mobile, tablet, and desktop viewports.
- ✅ Full 22 Eighth Schedule Indian languages architecture verified.
- ✅ Full-screen high-contrast presentation mode implemented.
- ✅ Production build verified with zero TypeScript compilation errors.
