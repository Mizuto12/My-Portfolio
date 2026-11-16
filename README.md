# Chandrei Lao — Portfolio (React + TypeScript)

A React + TypeScript rebuild of [the static HTML portfolio](../chandrei-lao-portfolio/) at `Desktop/chandrei-lao-portfolio` — that version is untouched and still exists side by side with this one. Same person, same verified resume content, same two themes (premium green default, hidden Gengar Easter egg), rebuilt as a proper component-based app.

## Running it locally

```bash
npm install
npm run dev       # starts the Vite dev server (prints the local URL)
npm run build     # type-checks (tsc -b) and produces a production build in dist/
npm run preview   # serves that production build locally
```

Requires Node.js (built and tested with v24).

## Tech stack

- **React 19 + TypeScript**, scaffolded with **Vite**.
- **lucide-react** for icons, with one hand-drawn exception: lucide-react dropped brand/logo icons (including GitHub) in the version this project installed, so the GitHub mark on the Contact section is a small inline SVG (`src/components/GithubMark.tsx`) instead — same visual style as the Lucide icons around it, just not from the package.
- Plain CSS with a centralized custom-property token system (`src/index.css`) — no CSS-in-JS, no Tailwind, no component library. Two token sets share the same variable names (`:root` for green, `[data-theme="gengar"]` for the Easter egg), so switching themes is one attribute flip on `<html>`, not a per-component rewrite.
- No state-management library — theme state lives in a small `ThemeContext` (`src/context/ThemeContext.tsx`) via `useState`/`useContext`.

## Project structure

```
src/
├── App.tsx                 Page composition (theme provider + all sections)
├── index.css                Design tokens (both themes) + every component's styles
├── types.ts                 Shared TypeScript interfaces
├── iconRegistry.ts          Maps icon-name strings in data to lucide-react components
├── data/resume.ts           All resume-sourced content — profile, skills, projects, involvement
├── context/ThemeContext.tsx Theme state, persistence, and the takeover-animation timing
└── components/
    ├── Nav.tsx               Sticky nav, mobile drawer, scroll-spy active-link highlighting
    ├── Hero.tsx              Intro + the little "code snippet" card
    ├── About.tsx             Bio + quick facts
    ├── Skills.tsx            Skill category cards
    ├── Projects.tsx          Project cards; "Read the case study" opens...
    ├── ProjectModal.tsx       ...a full case-study dialog per project (Escape/backdrop/✕ to close)
    ├── Education.tsx         Degree timeline entry
    ├── Involvement.tsx       Leadership / Competitions / Trainings (the "Beyond the Classroom" content)
    ├── Contact.tsx           Email, GitHub, location — no contact form (see below)
    ├── Footer.tsx            Copyright, resume download, the hidden egg toggle, live-region announcer
    ├── EggToggle.tsx         The actual hidden Easter-egg button
    ├── GengarTakeover.tsx    The full-viewport takeover animation (ghost shadow → Gengar face → message)
    ├── GhostField.tsx        Ambient floating ghost particles, Gengar theme only
    ├── SectionDivider.tsx    Thin rule between sections; shows a tiny ghost glyph in Gengar theme
    └── GithubMark.tsx        The hand-drawn GitHub icon (see Tech stack above)
```

## Finding the Easter egg

Same hiding spot as the static site: a small, barely-visible circular icon in the footer, next to "Back to top" and "Download résumé." It's a real `<button>` with `aria-pressed` and `aria-label="Toggle secret theme"`, so it's exactly as reachable by keyboard/screen reader as by mouse — hovering or tabbing to it brightens it and shows a native tooltip ("Hehe... found you!" / "Back to the normal world?").

Clicking it plays a short takeover sequence (respecting `prefers-reduced-motion` — reduced-motion visitors get an instant, animation-free switch instead): a purple ghostly shadow blooms outward, a round Gengar-inspired face fades in on top of it (red eyes, a wide jagged grin — all original SVG, no Pokémon assets used or referenced), the theme flips underneath mid-animation, and a brief message appears ("Hehe... Gengar has entered the portfolio!" / "Back to the normal world." on the way back) before the whole overlay fades out. Clicking it again reverses the effect and returns to green. Your choice persists via `localStorage` (`portfolio-theme`), defaulting safely to green for new visitors or on any corrupted stored value — same contract as the static site's `main.js`.

Smaller Gengar touches live throughout the theme, not just in the takeover: a tiny ghost glyph appears on the divider lines between sections, the footer's copyright line turns into "A little ghostly interference tonight," and a handful of ambient ghost particles float up the page — all gone instantly when you switch back, and all skipped for `prefers-reduced-motion`.

## Project screenshots — what's real and what isn't

Both project cards show an abstract, clearly-labeled "Conceptual UI representation, not a live screenshot" placeholder, not real screenshots. Specifics:

- **Latia POS**: the user doesn't currently have the exact repo URL to hand (checked `github.com/NotNookie`'s 16 public repositories directly — none are named Latia/LatiaPOS or mention POS) and said they'll request repo access from a collaborator separately. Nothing further was attempted here.
- **DTI OneLink**: the real repo is public at `github.com/Mizuto12/DTIOneLink-Capstone` (confirmed via a direct HTTP check — `200`, `isPrivate: false`), but it has no `README.md` at its root on the `main` branch (confirmed `404` on the raw file at that path), so there was no safe, non-confidential screenshot or diagram to pull from it. Kept as the same conceptual placeholder.

## What's real vs. simulated

- **Resume download**: real — downloads the actual PDF (`public/Chandrei-Lao-Resume.pdf`, copied from the static site's copy).
- **Theme toggle and takeover animation**: fully functional, not a cosmetic class swap.
- **Project case-study modals**: real, keyboard-accessible (focus moves to the close button on open, Escape closes, focus trap via `aria-modal`), not a static card.
- **Navigation, mobile drawer, scroll-spy active link**: all real, working React state/effects.
- **Contact**: no contact form, intentionally — a static-built site can't send mail without a backend, so this links straight to `mailto:` and GitHub instead of a form that would silently do nothing.
- **Certifications**: there are none on any resume file available, so that section is omitted entirely rather than shown empty (the "Beyond the Classroom" section's Trainings & Seminars list explicitly notes "not formal certifications").

## QA — what was actually checked

| Check | Result |
|---|---|
| `tsc --noEmit` | **Passes, zero errors.** Ran twice (before and after fixing the lucide-react GitHub-icon issue below). |
| `npm run build` (`tsc -b && vite build`) | **Passes.** First attempt failed with a real compile error — `lucide-react` has dropped brand/logo icons (including `Github`) in the installed version; fixed by replacing it with a hand-drawn inline SVG (`GithubMark.tsx`). Second attempt built clean: `dist/index.html`, a 21 KB CSS bundle, and a 267 KB JS bundle (83 KB gzipped). |
| Dev server smoke test | Started `npm run dev`, `curl`'d the served page, got `HTTP 200` and valid HTML with Vite's client/HMR scripts injected, then stopped the server. This confirms the server boots and serves the page — it does **not** confirm the page renders correctly or is free of runtime/console errors, since that requires an actual browser JS engine. |
| Manual import/link audit | Every lucide-react icon name imported anywhere in the project was checked against the installed package's actual exports (`Object.keys(require('lucide-react'))`) before relying on it, which is how the `Github` problem was caught *before* assuming the build would pass. |
| `npm run lint` (oxlint) | Ran it even though the brief didn't ask for it. Found 4 real warnings (no errors): an impure `new Date()` call during render, a `setState`-in-effect that could be a `useMemo` instead, and a ref-in-cleanup pattern — all three fixed. One harmless warning remains (`ThemeContext.tsx` exporting both the provider and its hook from one file, which is the standard React context pattern) and was deliberately left as-is. |
| Responsive layout | Checked by reading the CSS media queries and grid/flex rules (same breakpoints as the static site: 960px, 860px, 640px, 560px, 420px) — reasoned through, not visually confirmed. |
| Browser-rendered visual check / console errors | **Not performed.** Checked for a browser automation tool before claiming otherwise — none is available in this environment (confirmed via a tool search that found nothing matching browser/Playwright/DevTools). No actual screenshot, rendered layout, or browser console has been inspected for this project. |
| Content accuracy vs. resume | Ported directly from the already-verified static portfolio's HTML (itself sourced from `Chandrei_Lao CV.pdf`), not re-derived or re-worded from scratch — so it inherits that verification rather than repeating it. |
| Old static portfolio preserved | Confirmed via `find ... -newermt "1 hour ago"` on `Desktop/chandrei-lao-portfolio` returning zero results — nothing in it was touched while building this one. |

## Known limitations

1. **No real browser testing has ever been performed on this project** — only `tsc`, a production build, and a plain HTTP smoke test of the dev server. Open it in an actual browser, try both themes, trigger the Easter egg, and resize the window before treating this as launch-ready.
2. Same open items as the static site: no Latia POS or confirmed-usable DTI OneLink screenshots exist yet (see above); phone number intentionally left off the public Contact section.
3. The takeover animation's timing (background flip at 420ms, message at 480ms, overlay clears at 1200ms) was tuned by reading the CSS keyframes' percentages against those millisecond values, not by watching it play in a browser.
