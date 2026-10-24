# Indian Sign Language Practice — Privacy & Data Protection Architecture

## 1. Zero Cloud Video Transmission Guarantee

Camera-based assistive tools often raise severe privacy concerns, particularly in sensitive environments like clinics, hospitals, or private homes.

**SolluPath enforces a zero-cloud video privacy architecture:**
- **Zero Video Uploads:** No video frames, camera streams, audio, or images are ever transmitted to any external server, cloud backend, third-party analytics provider, or external API.
- **Client-Side Only:** 100% of video ingestion and pixel analysis occurs strictly inside the user's browser runtime via WebRTC and off-screen canvas contexts.
- **Volatile Processing:** Video frames are analyzed in temporary RAM buffers and discarded within milliseconds. No frames or biometric vectors are ever written to disk, indexedDB, or localStorage.

---

## 2. Explicit User Consent Lifecycle

Camera activation in SolluPath is strictly opt-in and controlled by the user at all times:
1. **No Automatic Activation:** The camera is **never** started when opening the ISL dashboard, browsing lessons, studying flashcards, or taking quizzes.
2. **Permission Gate:** In the Guided Practice Workspace, a prominent consent modal explicitly informs the user that video processing is strictly local and asks for affirmative permission (`Start Camera Practice`).
3. **Hardware Kill Switch:** Clicking `Stop Camera` or navigating away from the workspace immediately calls `stream.getTracks().forEach(track => track.stop())`, powering off the device's camera hardware indicator light.
4. **Visibility Awareness:** If the browser tab loses focus, video processing halts automatically to prevent unnecessary battery drain and background capture.

---

## 3. Accessible Non-Camera Fallback

Privacy-conscious users, users without functional webcams, users with severe motor differences, or those in clinical environments with camera restrictions are never penalized or blocked:
- A dedicated **"Switch to Self-Assessment Mode"** button is permanently visible.
- Self-assessment mode provides a structured 3-point verification checklist (Handshape correctness, Position alignment, Motion fluidness) enabling full progress tracking without ever turning on the camera.

---

## 4. Local Learning Analytics

All curriculum progress metrics (completed lessons, flashcard review tallies, difficult sign bookmarks, and quiz scores) are stored exclusively in the browser's `localStorage` under the key:
`sollupath_isl_progress_v2`

Users can erase all stored learning data with a single click via the **"Reset All ISL Progress"** button on the Progress screen, guaranteeing clean handoffs on shared hospital or library workstations.
