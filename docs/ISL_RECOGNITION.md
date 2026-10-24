# Indian Sign Language Recognition Pipeline & Limitations

## 1. Design Philosophy: Qualified, Isolated Practice

Computer-vision recognition of sign language is a complex multimodal challenge involving fast hand kinematics, 3D finger occlusions, two-handed coordination, and facial grammar.

In assistive technology, claiming "universal real-time sign language translation" when an algorithm only recognizes isolated gestures is misleading, unsafe in emergency contexts, and disrespectful to the linguistic depth of ISL.

**SolluPath adopts an honest, rigorous engineering stance:**
1. Recognition is strictly scoped to **isolated practice assistance** for verified signs.
2. It provides **form feedback** (hand positioning, motion intensity, stability).
3. It clearly displays confidence thresholds and explicitly declares unsupported signs.
4. It provides an immediate, zero-barrier **non-camera manual self-assessment mode** for all users.

---

## 2. On-Device Heuristic Pipeline (`src/services/islRecognitionService.ts`)

The practice workspace leverages client-side WebRTC video feeds coupled to an HTML5 offscreen processing canvas:

```
[Webcam Stream] 
       │
       ▼
[HTML5 Video Element]
       │ (128x96 downsampled frame)
       ▼
[Offscreen Canvas Context]
       │
       ▼
[Color Space & Edge Analysis]
   ├── Skin-tone chrominance thresholding (YCrCb approximate)
   ├── Temporal difference (frame-to-frame motion delta)
   └── Bounding box & centroid computation
       │
       ▼
[Heuristic Feature Extraction]
   ├── Vertical hand elevation (Chest vs Chin vs Neutral)
   ├── Motion intensity & stability (Kinematic velocity)
   └── Bilateral symmetry ratio (One-handed vs Two-handed)
       │
       ▼
[Sign-Specific Classifier]
   ├── `isl_namaste`: Bilateral symmetry + centered chest elevation
   ├── `isl_thank_you`: High chin elevation moving downward/outward
   ├── `isl_help`: Two-handed lower neutral support motion
   ├── `isl_pain`: Localized oscillating motion delta
   ├── `isl_water`: Repetitive contact near mouth centroid
   ├── `isl_yes`: Rhythmic vertical nodding delta
   ├── `isl_bus`: Wide bilateral rotational motion
   ├── `isl_emergency`: High-frequency alert motion delta
   └── `isl_medicine`: Grinding contact delta in palm zone
       │
       ▼
[Confidence Score & Targeted Coaching Feedback]
```

---

## 3. Supported Practice Vocabulary

The camera recognition service supports 9 high-frequency signs with calibrated heuristics:
1. `isl_namaste` (Hello / Respect)
2. `isl_thank_you` (Gratitude)
3. `isl_yes` (Affirmation)
4. `isl_no` (Negation)
5. `isl_help` (Emergency Assistance)
6. `isl_pain` (Medical Pain)
7. `isl_water` (Hydration)
8. `isl_emergency` (Urgent Alert)
9. `isl_medicine` (Pharmacy)

For all remaining signs (including fingerspelling and numbers), the workspace gracefully informs the user:
> *"Optical recognition for this specific sign is in calibration. Please use the self-assessment checklist below to verify handshape and position against the reference model."*

---

## 4. Known Limitations & Honest Technical Disclaimers

1. **Lighting & Background:** Extreme backlighting or low-light rooms can degrade skin segmentation.
2. **Skin Tone Variation:** Standardized YCrCb ranges are broadened to accommodate diverse South Asian complexions, but extreme lighting conditions may require camera angle adjustment.
3. **Continuous Signing:** SolluPath does **not** perform continuous sign-to-speech translation or sentence parsing. It is an educational feedback loop for isolated signs.
4. **Camera Resolution:** Operates reliably down to 480p webcams; higher resolutions are automatically downsampled to preserve 30fps smooth UI rendering on low-tier mobile devices.
