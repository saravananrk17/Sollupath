# Multilingual Support & Indic Script Architecture

SolluPath is engineered to support all **22 languages in the Eighth Schedule of the Constitution of India**, with English as the anchor auxiliary language.

## 1. Supported Languages Matrix

| # | Language | Native Name | Script | Direction | BCP-47 Tag | Curated AAC Coverage | Speech Status |
|---|---|---|---|---|---|---|---|
| 1 | **Tamil** | தமிழ் | Tamil | LTR | `ta-IN` | **100% (Approved)** | Native / Device TTS |
| 2 | **English** | English | Latin | LTR | `en-IN` | **100% (Approved)** | Widely Available |
| 3 | **Hindi** | हिन्दी | Devanagari | LTR | `hi-IN` | **95% (Reviewed)** | Widely Available |
| 4 | **Telugu** | తెలుగు | Telugu | LTR | `te-IN` | **85% (Reviewed)** | Device-Dependent |
| 5 | **Kannada** | ಕನ್ನಡ | Kannada | LTR | `kn-IN` | **80% (Reviewed)** | Device-Dependent |
| 6 | **Malayalam** | മലയാളം | Malayalam | LTR | `ml-IN` | **82% (Reviewed)** | Device-Dependent |
| 7 | **Bengali** | বাংলা | Bengali | LTR | `bn-IN` | **85% (Reviewed)** | Widely Available |
| 8 | **Marathi** | मराठी | Devanagari | LTR | `mr-IN` | **80% (Reviewed)** | Device-Dependent |
| 9 | **Gujarati** | ગુજરાતી | Gujarati | LTR | `gu-IN` | **78% (Reviewed)** | Device-Dependent |
| 10 | **Punjabi** | ਪੰਜਾਬੀ | Gurmukhi | LTR | `pa-IN` | **75% (Reviewed)** | Device-Dependent |
| 11 | **Odia** | ଓଡ଼ିଆ | Odia | LTR | `or-IN` | **70% (In-Progress)** | Limited |
| 12 | **Urdu** | اردو | Perso-Arabic | **RTL** | `ur-IN` | **80% (Reviewed)** | Device-Dependent |
| 13 | **Assamese** | অসমীয়া | Bengali-Assamese | LTR | `as-IN` | **65% (In-Progress)** | Limited |
| 14 | **Bodo** | बड़ो | Devanagari | LTR | `brx-IN` | **50% (In-Progress)** | Limited |
| 15 | **Dogri** | डोगरी | Devanagari | LTR | `doi-IN` | **50% (In-Progress)** | Limited |
| 16 | **Kashmiri** | کٲشُر / कश्मीरी | Perso-Arabic / Devanagari | **RTL** | `ks-IN` | **55% (In-Progress)** | Limited |
| 17 | **Konkani** | कोंकणी | Devanagari | LTR | `kok-IN` | **60% (In-Progress)** | Limited |
| 18 | **Maithili** | मैथिली | Devanagari | LTR | `mai-IN` | **60% (In-Progress)** | Limited |
| 19 | **Manipuri (Meitei)** | মেইতেই | Bengali / Meitei Mayek | LTR | `mni-IN` | **50% (In-Progress)** | Limited |
| 20 | **Nepali** | नेपाली | Devanagari | LTR | `ne-NP` | **70% (Reviewed)** | Device-Dependent |
| 21 | **Sanskrit** | संस्कृतम् | Devanagari | LTR | `sa-IN` | **60% (In-Progress)** | Limited |
| 22 | **Santali** | ᱥᱟᱱᱛᱟᱲᱤ | Ol Chiki | LTR | `sat-IN` | **45% (In-Progress)** | Limited |
| 23 | **Sindhi** | سنڌي / सिन्धी | Perso-Arabic / Devanagari | **RTL** | `sd-IN` | **50% (In-Progress)** | Limited |

## 2. Right-to-Left (RTL) Layout Implementation
- **Dynamic Directionality**: When Urdu, Kashmiri, or Sindhi is selected, `document.documentElement.dir` updates to `rtl`.
- **Mirroring**: Icons such as arrows and chevrons apply the CSS `.rtl-mirror` class (`transform: scaleX(-1)`) to reflect natural reading flow.
- **Punctuation & Flow**: Sentence tokens and chips maintain proper visual continuity in Persian-Arabic Nastaliq and Naskh typography.

## 3. Script Shaping and Font Protection
- Includes explicit fallback definitions for Noto Sans Tamil, Noto Sans Devanagari, Noto Sans Telugu, Noto Sans Kannada, Noto Sans Malayalam, and Noto Nastaliq Urdu.
- Prevents clipping of vowel signs (matras) and conjunct glyphs by enforcing `line-height: 1.5` to `1.6` across all typography elements.
