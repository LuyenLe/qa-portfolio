# components

Shared React components.

TASK 3 — global visual shell:

- `AppLayout.jsx` — global shell: skip link, `<Header>`, `<main>` container, minimal footer. Used as the layout route wrapping every page.
- `Header.jsx` — sticky header, brand, primary navigation (Home / QA Tools / QA Checklists), responsive mobile menu.
- `Header.css` — header + navigation styles (plain CSS).
- `LanguageSwitcher.jsx` — EN / VI pill toggle, driven by the existing `LanguageContext`.
- `LanguageSwitcher.css` — switcher styles (plain CSS).

TASK 4 — Home page building blocks:

- `SectionHeading.jsx` / `.css` — accent marker + `<h2>` + trailing hairline, used by every Home section.
- `Timeline.jsx` / `.css` — compact vertical career timeline; the last entry is styled as the current role.
- `SkillGroup.jsx` / `.css` — one skill category rendered as a card of plain chips (no proficiency bars).
- `Reveal.jsx` — IntersectionObserver scroll-reveal wrapper; content always renders, only the entrance animates, and motion is neutralised under `prefers-reduced-motion`.

Card components (ToolCard, ChecklistCard, …) are added in later tasks.
