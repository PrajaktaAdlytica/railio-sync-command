# Railixa design QA

## Visual target

- Reference: `references/railixa-current-home.png`
- Implementation: `qa/implementation-home-1280x720.png`
- Combined comparison: `qa/side-by-side.png`
- Comparison viewport: 1280 × 720

## Review

- Brand system preserved: the existing mark, light neutral palette, navy primary, rust accent, Inter typography, rounded operational cards, and control-room dashboard remain recognisable.
- Hero composition preserved: editorial copy on the left and the operational dashboard on the right retain the source proportions and hierarchy.
- Background enhancement passed: blueprint, signal, mint, ruled-paper, and dark control-room themes remain within the original brand palette and preserve text contrast.
- Card enhancement passed: white cards were upgraded to restrained blue, signal, mint, neutral, and dark glass-gradient surfaces without reducing information density.
- Naming corrected: all visible company and product copy uses “Railixa”.
- Template claims corrected: unverified customer, compliance, hosting, reliability, and company-size claims were replaced with clear demonstration language.
- Product storytelling improved without changing direction: the home page now adds a dark scroll-led incident sequence, while product pages use sticky workflow sections and restrained reveal motion.
- Navigation verified: desktop product dropdown and mobile product menu expose Incidents, Assets, Crew, and the overview.
- Responsive review passed at desktop and 390 px mobile widths; no visible clipping was observed.
- Motion review passed after correcting the reveal filter transition; reduced-motion fallbacks are present.
- Browser console review returned no errors or warnings.
- Build passed. ESLint passed with six existing Fast Refresh warnings in shared UI component files and no errors.

## Motion entry review

- Motion reference: `references/motionsites-home.png`
- Dark implementation state: `qa/motion/railixa-entry-dark.png`
- Light handoff state: `qa/motion/railixa-entry-final.png`
- Combined source/implementation comparison: `qa/motion/reference-comparison.png`
- Mobile verification: `qa/motion/mobile-entry-2.png` at 390 × 844
- The 10-second Remotion master is 1920 × 1080 at 30 fps. The web encode is 1.6 MB, H.264, silent, and fast-start enabled.
- The sequence is finite rather than looping. Pause and skip controls are keyboard-operable and present from first paint.
- Reduced-motion users receive the static cinematic poster without loading the autoplay video.
- The visual handoff preserves continuity: the dark rail corridor resolves into the existing pale Railixa grid and signal line.
- The original home hero and every subsequent section remain unchanged below the new entry section.
- Skip motion was verified to land on the final state. Enter Railixa was verified to scroll to `#railixa-main`.
- Desktop and 390 px mobile layouts passed with no headline, control, or CTA clipping.
- Browser console review returned no runtime errors.

final result: passed
