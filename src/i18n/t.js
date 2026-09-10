import { DEFAULT_LANG, SUPPORTED_LANGS } from './LanguageContext.jsx';

/**
 * Resolve a bilingual field to a single value for the active language.
 *
 *   t({ en: 'Hello', vi: 'Xin chào' }, 'vi')  -> 'Xin chào'
 *   t({ en: 'Hello', vi: 'Xin chào' }, 'en')  -> 'Hello'
 *   t('Plain string', 'vi')                   -> 'Plain string'  (unchanged)
 *   t(['a', 'b'], 'vi')                       -> ['a', 'b']      (unchanged)
 *
 * A "bilingual field" is a plain object that has at least one of the supported
 * language keys. Anything else is returned as-is. If the requested language is
 * missing, it falls back to the default language, then to any present language.
 */
export function t(field, lang = DEFAULT_LANG) {
  if (field == null) return field;
  if (typeof field !== 'object' || Array.isArray(field)) return field;

  const isBilingual = SUPPORTED_LANGS.some((code) => code in field);
  if (!isBilingual) return field;

  if (field[lang] != null) return field[lang];
  if (field[DEFAULT_LANG] != null) return field[DEFAULT_LANG];

  for (const code of SUPPORTED_LANGS) {
    if (field[code] != null) return field[code];
  }
  return undefined;
}
