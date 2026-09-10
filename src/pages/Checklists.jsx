import { useLanguage } from '../i18n/LanguageContext.jsx';
import { t } from '../i18n/t.js';
import { ui } from '../i18n/ui.js';
import { checklistCards } from '../data/checklistCards.js';
import { getChecklistUrl } from '../data/checklistUrls.js';

// TASK 2 placeholder. Real checklist cards (chips, coverage line, EN/VI buttons,
// Coming Soon state) are built in a later task. This proves the card data and the
// centralized URL lookup resolve.
export default function Checklists() {
  const { lang } = useLanguage();

  return (
    <section>
      <p><em>QA Checklists — placeholder (TASK 2).</em></p>
      <h1>{ui.nav_checklists[lang]}</h1>
      <ul>
        {checklistCards.map((checklist) => {
          const url = getChecklistUrl(checklist.id, lang);
          return (
            <li key={checklist.id}>
              {t(checklist.title, lang)}
              {' — '}
              {checklist.itemCount == null
                ? ui.item_count_unknown[lang]
                : `${checklist.itemCount} ${ui.items[lang]}`}
              {' — '}
              {url ? ui.open_checklist[lang] : ui.coming_soon[lang]}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
