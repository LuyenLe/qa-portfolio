import { useLanguage } from '../i18n/LanguageContext.jsx';
import { ui } from '../i18n/ui.js';
import './LanguageSwitcher.css';

// EN / VI toggle. Reads and writes the single existing LanguageContext — it does
// not hold any language state of its own. The active language is persisted to
// localStorage by the context, so it survives a reload.
const LANGS = [
  { code: 'en', short: 'lang_short_en', label: 'lang_en' },
  { code: 'vi', short: 'lang_short_vi', label: 'lang_vi' },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-switch" role="group" aria-label={ui.language_label[lang]}>
      {LANGS.map(({ code, short, label }) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            className={`lang-switch__btn${active ? ' is-active' : ''}`}
            aria-pressed={active}
            aria-label={ui[label][lang]}
            onClick={() => setLang(code)}
          >
            {ui[short][lang]}
          </button>
        );
      })}
    </div>
  );
}
