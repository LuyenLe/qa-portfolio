import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { t } from '../i18n/t.js';
import { ui } from '../i18n/ui.js';
import { toolCards } from '../data/toolCards.js';
import { getToolIntegration } from '../data/toolIntegration.js';
import SectionHeading from '../components/SectionHeading.jsx';
import ToolIcon from '../components/ToolIcon.jsx';
import './Tools.css';

// QA Tools index (TASK 5, Task A). The 6 canonical tools from toolCards.js are
// rendered as cards; every field is resolved from the source data for the active
// language via t(). Clicking a card routes to /tools/:slug (Task B).
export default function Tools() {
  const { lang } = useLanguage();

  return (
    <div className="tools-page">
      <SectionHeading id="tools-heading" eyebrow={ui.tools_eyebrow[lang]}>
        {ui.tools_title[lang]}
      </SectionHeading>
      <p className="tools-page__intro">{ui.tools_intro[lang]}</p>

      <ul className="tool-grid" aria-labelledby="tools-heading">
        {toolCards.map((tool) => {
          const integration = getToolIntegration(tool.id);
          const isBackend = integration?.hosting === 'backend';
          const isPartial = integration?.hosting === 'static-partial';
          const features = t(tool.features, lang) ?? [];
          const inputLabel = t(tool.input, lang);
          const outputLabel = t(tool.output, lang);

          return (
            <li key={tool.id} className="tool-card">
              <div className="tool-card__head">
                <span className={`tool-card__icon tool-card__icon--${tool.accent}`} aria-hidden="true">
                  <ToolIcon name={tool.icon} />
                </span>
                <div className="tool-card__titles">
                  <h3 className="tool-card__name">{tool.title}</h3>
                  <p className="tool-card__meta">
                    <span className="tool-card__category">{t(tool.category, lang)}</span>
                    {tool.version ? (
                      <span className="tool-card__version">{tool.version}</span>
                    ) : null}
                  </p>
                </div>
              </div>

              {(isBackend || isPartial) && (
                <p className="tool-card__flag">
                  {isBackend ? ui.backend_required[lang] : ui.tool_demo_flag[lang]}
                </p>
              )}

              <p className="tool-card__description">{t(tool.description, lang)}</p>

              {features.length > 0 && (
                <ul className="tool-card__features">
                  {features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              )}

              <dl className="tool-card__specs">
                {(inputLabel || outputLabel) && (
                  <div className="tool-card__spec">
                    <dt>{ui.tool_io_label[lang]}</dt>
                    <dd>
                      {inputLabel}
                      {inputLabel && outputLabel ? ' → ' : ''}
                      {outputLabel}
                    </dd>
                  </div>
                )}
                <div className="tool-card__spec">
                  <dt>{ui.tool_access_label[lang]}</dt>
                  <dd>
                    {isBackend
                      ? ui.tool_access_value_backend[lang]
                      : ui.tool_access_value[lang]}
                  </dd>
                </div>
              </dl>

              <Link
                to={`/tools/${tool.slug}`}
                className="btn btn--primary tool-card__cta"
                aria-label={`${ui.open_tool[lang]} — ${tool.title}`}
              >
                {ui.open_tool[lang]}
                <span aria-hidden="true"> →</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <p className="tools-page__foot text-meta">{ui.fair_use_note[lang]}</p>
    </div>
  );
}
