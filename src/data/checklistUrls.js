/*
 * Centralized EN/VI artifact URLs for the QA checklists, keyed by checklist `id`
 * (matching src/data/checklistCards.js). This is the ONLY place checklist URLs
 * live. The UI layer (later task) reads `checklistUrls[id][lang]` and treats an
 * empty string as "not available yet" / Coming Soon.
 *
 * ---------------------------------------------------------------------------
 * TASK 2 SCOPE DECISION — READ BEFORE EDITING
 * ---------------------------------------------------------------------------
 * The TASK 2 brief states that only the API Testing checklist has real URLs and
 * instructs: the other seven must be en: "" / vi: "".
 *
 * HOWEVER, the current source file `portfolio-input/data/url_checklist.txt` now
 * ALSO contains EN + VI Google Sheets URLs for the other seven checklists
 * (added since the TASK 1 inspection). Those URLs were NOT invented and NOT
 * web-searched — they are in the supplied source file. They are preserved in the
 * commented block at the bottom of this file so nothing is lost.
 *
 * Per the explicit TASK 2 instruction, only `api-testing` is wired up below.
 * Confirm whether to activate the remaining seven, then move them out of the
 * comment block into the map. No other change is needed.
 * ---------------------------------------------------------------------------
 */

export const checklistUrls = {
  "api-testing": {
    en: "https://docs.google.com/spreadsheets/d/19jE4Igz5nXfyYrEyamvl2OzghU557oo-/edit?gid=1028327185#gid=1028327185",
    vi: "https://docs.google.com/spreadsheets/d/1WfmP4SkX9OQbvNkr-UYmoi5GsbyrV5B0/edit?gid=359355862#gid=359355862",
  },
  "crud": { en: "", vi: "" },
  "import-excel": { en: "", vi: "" },
  "export-excel": { en: "", vi: "" },
  "search-filter-sort": { en: "", vi: "" },
  "ui-ux": { en: "", vi: "" },
  "security": { en: "", vi: "" },
  "sql-data-validation": { en: "", vi: "" },
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

/*
 * ===========================================================================
 * PENDING CONFIRMATION — URLs present in portfolio-input/data/url_checklist.txt
 * as of 2026-09-10 but NOT yet activated above (see scope note at top of file).
 * ===========================================================================
 *
 * "crud": {
 *   en: "https://docs.google.com/spreadsheets/d/1QcX8ypEIZfXcURL331Xn0OupIv7cvTp1/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
 *   vi: "https://docs.google.com/spreadsheets/d/1Mp_wgnN6EaHxw4hozHzxhPR9hF2syobD/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
 * },
 * "import-excel": {
 *   en: "https://docs.google.com/spreadsheets/d/13ZfbqIO-RfEijHmZrVeoH91Xm76dHZ54/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
 *   vi: "https://docs.google.com/spreadsheets/d/10KUTA_37M5idoEYZTKNgr7_40EFz7FFG/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
 * },
 * "export-excel": {
 *   en: "https://docs.google.com/spreadsheets/d/14dBXvgd5_vbor5H7Es-mfkCOIFqukcac/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
 *   vi: "https://docs.google.com/spreadsheets/d/13pmN68EtaHQuqpC3pLyXn6SWTxkIWg6y/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
 * },
 * "search-filter-sort": {
 *   en: "https://docs.google.com/spreadsheets/d/104Y8x6UNbPYvuRNNC14ygyAzdHGTUt1-/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
 *   vi: "https://docs.google.com/spreadsheets/d/17ubkNSY2gIiaesh1KFbk-X755ZFz2DdI/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
 * },
 * "ui-ux": {
 *   en: "https://docs.google.com/spreadsheets/d/1Tq5cryqdII4zxsVeWSj0W_-viHeK59aa/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
 *   vi: "https://docs.google.com/spreadsheets/d/1KxBq-0qAHx8cm5xA8dYQvyTzKIcB_Op6/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
 * },
 * "security": {
 *   en: "https://docs.google.com/spreadsheets/d/1p6PUeQvj2hPjEMY7gYaFXR2Cm3vgGM7E/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
 *   vi: "https://docs.google.com/spreadsheets/d/1GgKV0H2ZasjpZs7mt_L_Pxt4FmW6pFUX/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
 * },
 * "sql-data-validation": {
 *   en: "https://docs.google.com/spreadsheets/d/1-lNniFcWQLcoRkDqpV_sjo80ISCvRCZy/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
 *   vi: "https://docs.google.com/spreadsheets/d/1FS_2yxTXr9mLVdgcmMv3xvncb0Z7nj8m/edit?usp=sharing&ouid=112685739315247952405&rtpof=true&sd=true",
 * },
 */
