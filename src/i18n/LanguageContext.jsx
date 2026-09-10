import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export const SUPPORTED_LANGS = ['en', 'vi'];
export const DEFAULT_LANG = 'en';
const STORAGE_KEY = 'qap.lang';

const LanguageContext = createContext({
  lang: DEFAULT_LANG,
  setLang: () => {},
});

function readInitialLang() {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
  } catch {
    // localStorage can be unavailable (private mode, blocked cookies) — fall through.
  }
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readInitialLang);

  const setLang = useCallback((next) => {
    if (!SUPPORTED_LANGS.includes(next)) return;
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Persistence is best-effort only.
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
