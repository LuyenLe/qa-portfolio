// Small inline icon set for the QA tool cards. Icon names come from the source
// data (toolCards.js `icon`): key, contrast, clean, layers, compare,
// document-check. Stroke-based, inherits `currentColor`, purely decorative
// (parent supplies aria-hidden).
const PATHS = {
  key: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="M11 12 20 3M17 6l3 3M15.5 7.5l2 2" />
    </>
  ),
  contrast: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18a9 9 0 0 0 0-18Z" fill="currentColor" stroke="none" />
    </>
  ),
  clean: (
    <>
      <path d="M4 8h16M9 8V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3M7 8l1 12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l1-12" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5M3 17l9 5 9-5" />
    </>
  ),
  compare: (
    <>
      <path d="M12 3v18M5 7l-3 5 3 5M19 7l3 5-3 5" />
      <path d="M2 12h6M16 12h6" />
    </>
  ),
  'document-check': (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5M9 15l2 2 4-4" />
    </>
  ),
};

export default function ToolIcon({ name, size = 22 }) {
  const content = PATHS[name] ?? PATHS.layers;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
    >
      {content}
    </svg>
  );
}
