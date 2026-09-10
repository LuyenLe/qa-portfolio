/*
 * Centralized EN/VI artifact URLs for the QA checklists, keyed by checklist `id`
 * (matching src/data/checklistCards.js). This is the ONLY place checklist URLs
 * live. The UI layer reads `checklistUrls[id][lang]` and treats an empty string
 * as "not available yet".
 *
 * ---------------------------------------------------------------------------
 * SOURCE OF TRUTH — do not edit URLs here by hand
 * ---------------------------------------------------------------------------
 * Every URL below is copied VERBATIM from `portfolio-input/data/url_checklist.txt`
 * (EN + VI Google Sheets links for all 8 checklist artifacts). Nothing here is
 * invented, shortened, or transformed. If a link changes, update the source
 * file and re-copy.
 *
 * TASK 2 wired only `api-testing` (the other 7 were pending confirmation).
 * TASK 6 activates the remaining 7 — their real EN/VI URLs were already present
 * in `data/url_checklist.txt`, which TASK 6 names as the link source of truth.
 * ---------------------------------------------------------------------------
 */

export const checklistUrls = {
  "crud": {
    en: "https://docs.google.com/spreadsheets/d/1QcX8ypEIZfXcURL331Xn0OupIv7cvTp1/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
    vi: "https://docs.google.com/spreadsheets/d/1Mp_wgnN6EaHxw4hozHzxhPR9hF2syobD/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
  },
  "import-excel": {
    en: "https://docs.google.com/spreadsheets/d/13ZfbqIO-RfEijHmZrVeoH91Xm76dHZ54/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
    vi: "https://docs.google.com/spreadsheets/d/10KUTA_37M5idoEYZTKNgr7_40EFz7FFG/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
  },
  "export-excel": {
    en: "https://docs.google.com/spreadsheets/d/14dBXvgd5_vbor5H7Es-mfkCOIFqukcac/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
    vi: "https://docs.google.com/spreadsheets/d/13pmN68EtaHQuqpC3pLyXn6SWTxkIWg6y/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
  },
  "search-filter-sort": {
    en: "https://docs.google.com/spreadsheets/d/104Y8x6UNbPYvuRNNC14ygyAzdHGTUt1-/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
    vi: "https://docs.google.com/spreadsheets/d/17ubkNSY2gIiaesh1KFbk-X755ZFz2DdI/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
  },
  "ui-ux": {
    en: "https://docs.google.com/spreadsheets/d/1Tq5cryqdII4zxsVeWSj0W_-viHeK59aa/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
    vi: "https://docs.google.com/spreadsheets/d/1KxBq-0qAHx8cm5xA8dYQvyTzKIcB_Op6/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
  },
  "security": {
    en: "https://docs.google.com/spreadsheets/d/1p6PUeQvj2hPjEMY7gYaFXR2Cm3vgGM7E/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
    vi: "https://docs.google.com/spreadsheets/d/1GgKV0H2ZasjpZs7mt_L_Pxt4FmW6pFUX/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
  },
  "sql-data-validation": {
    en: "https://docs.google.com/spreadsheets/d/1-lNniFcWQLcoRkDqpV_sjo80ISCvRCZy/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
    vi: "https://docs.google.com/spreadsheets/d/1FS_2yxTXr9mLVdgcmMv3xvncb0Z7nj8m/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
  },
  "api-testing": {
    en: "https://docs.google.com/spreadsheets/d/19jE4Igz5nXfyYrEyamvl2OzghU557oo-/edit?gid=1028327185#gid=1028327185",
    vi: "https://docs.google.com/spreadsheets/d/1WfmP4SkX9OQbvNkr-UYmoi5GsbyrV5B0/edit?gid=359355862#gid=359355862",
  },
};

/**
 * Returns { en, vi } for a checklist id, always an object (empty strings if
 * unknown id or no URLs yet).
 */
export function getChecklistUrls(id) {
  return checklistUrls[id] ?? { en: "", vi: "" };
}

/**
 * Returns the URL for a checklist id in the given language, or "" if none.
 */
export function getChecklistUrl(id, lang) {
  return getChecklistUrls(id)[lang] ?? "";
}
