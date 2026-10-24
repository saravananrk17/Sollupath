# Indian Sign Language (ISL) Content Sources and Standards

## 1. Institutional Standards & Alignment

All signs included in **SolluPath — ISL Learn & Practise** are designed in strict alignment with standards published by the:
- **Indian Sign Language Research and Training Centre (ISLRTC)** — An autonomous body under the Department of Empowerment of Persons with Disabilities (Divyangjan), Ministry of Social Justice and Empowerment, Government of India.
- **ISLRTC 10,000 Sign Comprehensive Dictionary** (published editions and public educational references).
- **National Association of the Deaf (NAD) India** conventions.

---

## 2. Verified Curated Vocabulary Dataset (`src/data/isl/signs.ts`)

SolluPath implements 17 core signs selected specifically for high-frequency civic, healthcare, and emergency settings:

| Sign ID | Concept | Category | Hands | Linked AAC Phrase | ISLRTC Semantic Reference |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `isl_namaste` | Namaste / Hello | Greetings | Two-handed | `hello` | Anjali Mudra chest-level greeting |
| `isl_thank_you` | Thank You | Greetings | One-handed | `thank_you` | Palm touching chin/mouth moving outward |
| `isl_yes` | Yes | Greetings | One-handed | `yes` | S-fist nodding forward like a head nod |
| `isl_no` | No | Greetings | One-handed | `no` | Index and middle finger snapping to thumb |
| `isl_help` | Help / Assist | Emergency | Two-handed | `need_help` | Flat dominant hand lifting non-dominant fist |
| `isl_emergency` | Emergency / Urgent | Emergency | One-handed | `urgent_help` | Rapid undulating E-handshape with alert expression |
| `isl_pain` | Pain / Hurt | Health | One-handed | `in_pain` | Twisting open claw over affected body location |
| `isl_medicine` | Medicine / Tablet | Pharmacy | One-handed | `need_medicine` | Thumb and index grinding tablet against palm |
| `isl_water` | Water | Everyday | One-handed | `need_water` | W-handshape (3 fingers) tapping lower lip |
| `isl_doctor` | Doctor | Health | One-handed | `need_doctor` | Two fingers checking radial pulse on wrist |
| `isl_hospital` | Hospital | Health | One-handed | `hospital` | Index tracing cross on upper arm |
| `isl_bus` | Bus / Transport | Transport | Two-handed | `bus_stand` | Both hands gripping steering wheel turning |
| `isl_ticket` | Ticket | Transport | Two-handed | `ticket_counter` | Dominant hand tearing imaginary paper |
| `isl_mother` | Mother / Amma | Family | One-handed | `family_contact` | Thumb of open hand tapping side of chin |
| `isl_alpha_a` | Letter A | Alphabet | Two-handed | — | ISL British-derived: dominant index touching thumb of open non-dominant hand |
| `isl_alpha_b` | Letter B | Alphabet | Two-handed | — | Two index-thumb circles joined side by side |
| `isl_num_1` | Number 1 | Numbers | One-handed | — | Extended index finger facing palm inward |

---

## 3. Linguistic Sign Analysis Parameters

Every sign entry in SolluPath includes four standardized linguistic parameters essential for correct manual reproduction:
1. **Handshape:** Precise finger configuration (e.g., flat palm, S-fist, W-shape, claw hand).
2. **Location:** Spatial position relative to the signer's body (e.g., chin, chest, wrist, neutral space).
3. **Movement:** Direction, trajectory, repetition, and speed of motion (e.g., circular, downward tap, wrist twist).
4. **Non-Manual Features (NMF):** Facial expressions, head tilt, mouthing, and eye gaze that provide grammatical context and intensity.

---

## 4. Regional Variations & Educational Scope

- **Regional Dialects:** Like spoken languages, Indian Sign Language exhibits natural regional variations between Northern, Southern, Western, and Eastern Deaf communities (e.g., Chennai vs. Delhi signs). SolluPath's baseline vocabulary adopts the standardized forms recognized in ISLRTC national curricula.
- **Educational Qualification:** SolluPath is an assistive educational learning and reference tool. It does **not** claim to replace certified Deaf sign language instructors or formal diploma courses in ISL interpretation (DISLI).
