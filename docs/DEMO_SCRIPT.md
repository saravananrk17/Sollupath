# SolluPath Hackathon Live Demonstration Script (3–5 Minutes)

This script provides an exact, step-by-step playbook for presenting SolluPath to hackathon judges, clinicians, or accessibility evaluators.

---

### Phase 1: The Problem (0:00 – 0:30)
- **Speaker**: *"Imagine being admitted to an emergency ward after a stroke or surgery. You cannot speak, you are experiencing severe pain, and the doctor on duty speaks a different language. In India, over 26 million people face speech and communication challenges, and existing assistive speech software is English-centric, expensive, and fragile when internet goes down. Today, we are proud to introduce SolluPath: Your Voice, Your Way."*

### Phase 2: Instant Access & Language Selection (0:30 – 1:00)
- **Action**: Open SolluPath on mobile or desktop browser (`http://localhost:5173`).
- **Speaker**: *"Notice that SolluPath requires no login, no password, and zero setup. In an emergency, every second counts. On the welcome screen, a user can instantly select Tamil, English, or any of the 22 Eighth Schedule Indian languages."*
- **Action**: Click **தமிழ்** (Tamil) and click **உரையாடலைத் தொடங்குக** (Start Communicating).
- **Highlight**: The entire UI seamlessly reflects verified Tamil script typography with zero clipped matras.

### Phase 3: Composing a Hospital Message (1:00 – 2:00)
- **Action**: Click on **மருத்துவமனை மற்றும் கிளினிக்** (Hospital & Clinic) situation card.
- **Speaker**: *"Here are pre-curated situation phrases tailored specifically for healthcare settings."*
- **Action**: Tap in sequence:
  1. **எனக்கு உதவி தேவை.** (*I need help.*)
  2. **எனக்கு வலிக்கிறது.** (*I am in pain.*)
  3. **தயவுசெய்து எனது பராமரிப்பாளரை அழைக்கவும்.** (*Please call my caregiver.*)
- **Speaker**: *"Watch the Sentence Builder on the right update instantaneously. The user can reorder phrases, remove a phrase, or edit text manually. Every tap triggers tactile audio feedback."*

### Phase 4: Communicate via Large Presentation Mode & Speech (2:00 – 2:45)
- **Action**: Click **பெரிய எழுத்தில் காட்டு** (Display Large).
- **Speaker**: *"In a noisy clinic or transit bus, voice alone is often insufficient. SolluPath features a distraction-free Full-Screen Presentation Mode. It scales text up to 2.5x and provides high-contrast dark mode for low vision."*
- **Action**: Click **குரல் ஒலிக்க** (Speak).
- **Speaker**: *"If the device has a Tamil or Indian voice installed, it speaks aloud via the Web Speech API. If no voice is installed on that device, the app transparently informs the user and lets the high-contrast display do the talking—with zero false claims."*
- **Action**: Click **வெளியேறு** (Exit).

### Phase 5: Cross-Language Instant Translation (2:45 – 3:30)
- **Speaker**: *"Now consider a patient in Tamil Nadu who travels to Delhi or speaks with a non-Tamil speaking nurse. Notice our composed message."*
- **Action**: In the Sentence Builder's Output dropdown, change output language from **Tamil** to **English** or **हिन्दी (Hindi)**.
- **Result**: The composed message translates deterministically to:
  - English: *"I need help. I am in pain. Please call my caregiver."*
  - Hindi: *"मुझे मदद चाहिए। मुझे दर्द हो रहा है। कृपया मेरे देखभालकर्ता को बुलाएं।"*
- **Speaker**: *"Zero AI hallucinations. 100% dictionary-verified clinical accuracy, preserving the user's intent."*

### Phase 6: Favorites, Custom Phrases & Offline Reliability (3:30 – 4:00)
- **Action**: Click the Star icon on a phrase, navigate to **Favorites**, then open **Custom Phrases**.
- **Speaker**: *"Users can save their frequent phrases or create custom tiles—like their caregiver's phone number or allergies. Everything is saved strictly on-device in LocalStorage. Furthermore, as a progressive web app, SolluPath is 100% offline-ready once cached."*

### Phase 7: Social Cause & Conclusion (4:00 – 5:00)
- **Speaker**: *"SolluPath is completely open source under the MIT license, targeting WCAG 2.2 AA standards. We believe that everyone deserves the dignity of expressing their needs, their feelings, and their choices—in their own language. Thank you."*

---

### Resetting for Demo
To reset the demonstration state to factory defaults:
1. Open **Accessibility Settings** (Sliders icon in top right).
2. Click **Clear All Local App Data & Preferences**.
3. The application will refresh cleanly to the initial Welcome screen.
