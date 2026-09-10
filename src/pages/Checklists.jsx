import { useLanguage } from '../i18n/LanguageContext.jsx';
import { t } from '../i18n/t.js';
import { ui } from '../i18n/ui.js';
import { checklistCards } from '../data/checklistCards.js';
import { getChecklistUrls } from '../data/checklistUrls.js';
import '../components/SectionHeading.css';
import './Checklists.css';

// QA Checklists index (TASK 6). The 8 canonical checklist artifacts from
// checklistCards.js are rendered as portfolio cards. Every field is resolved
// from the source data for the active language via t(); no checklist content is
// reworded, summarised, or invented here. The EN/VI master-artifact URLs come
// only from src/data/checklistUrls.js (copied verbatim from data/url_checklist.txt).
// This page is presentation + navigation only — it never embeds a document.
export default function Checklists() {
  const { lang } = useLanguage();

  return (
    <div className="checklists-page">
      <div className="section-heading">
        <p className="section-heading__eyebrow">{ui.checklists_eyebrow[lang]}</p>
        <h1 id="checklists-heading" className="section-heading__title">
          <span className="section-heading__marker" aria-hidden="true" />
          <span className="section-heading__text">{ui.checklists_title[lang]}</span>
        </h1>
      </div>
      <p className="checklists-page__intro">{ui.checklists_intro[lang]}</p>

      <ul className="checklist-grid" aria-labelledby="checklists-heading">
        {checklistCards.map((checklist, index) => {
          const { en: enUrl, vi: viUrl } = getChecklistUrls(checklist.id);
          const name = t(checklist.title, lang);
          const inReview = checklist.status === 'review';
          const statusLabel = inReview ? ui.status_review[lang] : ui.status_ready[lang];
          const tags = Array.isArray(checklist.tags) ? checklist.tags : [];

          return (
            <li key={checklist.id} className="checklist-card">
              <div className="checklist-card__head">
                <span className="checklist-card__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="checklist-card__type">{checklist.artifactType}</span>
                <span
                  className={
                    'checklist-card__status' +
                    (inReview ? ' checklist-card__status--review' : '')
                  }
                >
                  {statusLabel}
                </span>
              </div>

              <h2 className="checklist-card__name">{name}</h2>
              <p className="checklist-card__scope">{t(checklist.scope, lang)}</p>
              <p className="checklist-card__description">
                {t(checklist.description, lang)}
              </p>

              <dl className="checklist-card__specs">
                <div className="checklist-card__spec">
                  <dt>{ui.items[lang]}</dt>
                  <dd>
                    {checklist.itemCount == null
                      ? ui.item_count_unknown[lang]
                      : checklist.itemCount}
                  </dd>
                </div>
                <div className="checklist-card__spec">
                  <dt>{ui.coverage[lang]}</dt>
                  <dd>{t(checklist.coverage, lang)}</dd>
                </div>
              </dl>

              {tags.length > 0 && (
                <ul
                  className="checklist-card__tags"
                  aria-label={ui.checklist_tags_label[lang]}
                >
                  {tags.map((tag) => (
                    <li key={tag} className="checklist-card__tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              )}

              <div className="checklist-card__actions">
                {enUrl ? (
                  <a
                    className="checklist-card__cta"
                    href={enUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${ui.checklist_open_en[lang]} — ${name}`}
                  >
                    {ui.checklist_open_en[lang]}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                ) : (
                  <span className="checklist-card__cta checklist-card__cta--disabled">
                    {ui.checklist_open_en[lang]}
                  </span>
                )}
                {viUrl ? (
                  <a
                    className="checklist-card__cta checklist-card__cta--ghost"
                    href={viUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${ui.checklist_open_vi[lang]} — ${name}`}
                  >
                    {ui.checklist_open_vi[lang]}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                ) : (
                  <span className="checklist-card__cta checklist-card__cta--ghost checklist-card__cta--disabled">
                    {ui.checklist_open_vi[lang]}
                  </span>
                )}
              </div>
              <p className="checklist-card__note text-meta">
                {ui.checklist_artifact_note[lang]}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
