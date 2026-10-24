# Indian Sign Language Module — Engineering Roadmap & Future Research

## 1. Vision & Long-Term Trajectory

The integration of Indian Sign Language in SolluPath 2.0 establishes a foundational bridge between symbolic AAC and natural manual language. This document outlines the planned engineering iterations for future production releases beyond the hackathon prototype.

---

## 2. Near-Term Milestones (Q1–Q2 2027)

### Phase 1: On-Device Landmark Tracking with MediaPipe Hands / TF.js
- **Technology:** Integration of Google MediaPipe Hands via WebAssembly (Wasm) and TensorFlow.js.
- **Capability:** Replace lightweight centroid/edge heuristics with 21 3D hand landmarks per hand.
- **Benefit:** Real-time finger curl angles, pinch detection, and thumb orientation, enabling high-fidelity scoring for intricate fingerspelling (ISL Alphabet A–Z).
- **Privacy Preservation:** Landmark computation remains 100% on-device; coordinates are discarded immediately after calculation.

### Phase 2: Authentic Deaf Signer Video Demonstration Clips
- **Current Implementation:** Scalable, lightweight SVG kinematic vector animators.
- **Future Integration:** High-definition, multi-angle video recordings performed by certified native Deaf sign language presenters from ISLRTC-recognized institutes.
- **Format:** Optimized WebM/H.265 video with transparent background overlays and toggleable slow-motion playback.

---

## 3. Medium-Term Milestones (Q3–Q4 2027)

### Phase 3: Vocabulary Expansion to 500+ Institutional Signs
- Expand curated repository from the initial 17 high-priority signs to over 500 categorized signs covering:
  - Specialized medical diagnostics (X-ray, ECG, MRI, Blood Test, Diabetes).
  - Judicial, police, and government administrative processes.
  - Banking, financial transactions, and UPI digital payments.
  - Higher education, vocational training, and STEM terminology.

### Phase 4: Regional Dialect Customization
- Provide region-specific sign toggles (e.g., South Indian vs North Indian variations for numbers, family members, and local food items) aligned with local Deaf associations.
- Allow educators and speech-language pathologists (SLPs) to record customized localized practice signs via a secure administrative portal.

---

## 4. Advanced Horizons (2028+)

### Phase 5: Continuous ISL Sentence Interpretation
- **Architecture:** Spatial-temporal graph convolutional networks (ST-GCN) or transformer-based sequence-to-sequence models running locally via WebGPU.
- **Objective:** Translate multi-sign phrases into natural Tamil, English, and scheduled Indian language syntax, bridging grammatical differences between ISL and spoken languages.
