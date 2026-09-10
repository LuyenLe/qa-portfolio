import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { t } from '../i18n/t.js';
import { ui } from '../i18n/ui.js';
import { toolCards } from '../data/toolCards.js';
import { getToolIntegration, getToolEmbedUrl } from '../data/toolIntegration.js';
import { getUsage } from '../lib/toolAccess.js';
import ToolIcon from '../components/ToolIcon.jsx';
import './ToolDetail.css';

// Tool detail / runner (TASK 5, Tasks B + C). Route: /tools/:slug.
// - name / version / category / description / workflow come from toolCards.js.
// - Tools 01–05 (static HTML) load their real interface in a sandboxed iframe
//   from public/tools/<slug>/index.html (see toolIntegration.js). The existing
//   tool logic is NOT rewritten in React — this page is only the frame around it.
// - Tool 06 (SRS → Testcase) needs a Flask backend for real execution. It still
//   shows its ACTUAL interface as a non-executing preview (a bundled sample SRS,
//   no API calls), followed by a clearly secondary "backend required" notice.
export default function ToolDetail() {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const tool = toolCards.find((item) => item.slug === slug);
  const [usage, setUsage] = useState(null);

  useEffect(() => {
    let active = true;
    if (tool) {
      getUsage(tool.id).then((result) => {
        if (active) setUsage(result);
      });
    }
    return () => {
      active = false;
    };
  }, [tool]);

  if (!tool) return <Navigate to="/tools" replace />;

  const integration = getToolIntegration(tool.id);
  const embedUrl = getToolEmbedUrl(tool.id);
  const isBackend = integration?.hosting === 'backend';
  const isPartial = integration?.hosting === 'static-partial';
  const isPreviewOnly = Boolean(integration?.previewOnly);
  // The preview build reads the portfolio language from a query param so the
  // embedded (static) tool chrome matches EN/VI.
  const frameUrl =
    embedUrl && isPreviewOnly ? `${embedUrl}?lang=${lang}` : embedUrl;
  const features = t(tool.features, lang) ?? [];
  const workflow = Array.isArray(tool.workflow) ? tool.workflow : null;
  const inputLabel = t(tool.input, lang);
  const outputLabel = t(tool.output, lang);
  const backend = integration?.backendContract;

  return (
    <article className="tool-detail">
      <p className="tool-detail__back">
        <Link to="/tools">← {ui.back_to_tools[lang]}</Link>
      </p>

      <header className="tool-detail__header">
        <span
          className={`tool-detail__icon tool-card__icon--${tool.accent}`}
          aria-hidden="true"
        >
          <ToolIcon name={tool.icon} size={26} />
        </span>
        <div>
          <p className="tool-detail__eyebrow">{ui.tool_detail_eyebrow[lang]}</p>
          <h1 className="tool-detail__title">
            {tool.title}
            {tool.version ? (
              <span className="tool-detail__version">{tool.version}</span>
            ) : null}
          </h1>
          <p className="tool-detail__meta">
            <span>{t(tool.category, lang)}</span>
            {(inputLabel || outputLabel) && (
              <span>
                {inputLabel}
                {inputLabel && outputLabel ? ' → ' : ''}
                {outputLabel}
              </span>
            )}
          </p>
        </div>
      </header>

      <section className="tool-detail__section">
        <h2>{ui.tool_overview[lang]}</h2>
        <p className="tool-detail__description">{t(tool.description, lang)}</p>

        {features.length > 0 && (
          <ul className="tool-detail__features">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}

        {workflow && (
          <div className="tool-detail__workflow">
            <h3>{ui.tool_workflow_label[lang]}</h3>
            <ol className="tool-detail__workflow-steps">
              {workflow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        )}
      </section>

      {isPartial && integration?.helperNote && (
        <aside className="tool-detail__notice tool-detail__notice--info">
          <h2>{ui.tool_demo_note_title[lang]}</h2>
          <p>{t(integration.helperNote, lang)}</p>
        </aside>
      )}

      {/* ---- Task C: load the actual existing tool interface ----
           Shown for embeddable tools AND for the backend tool's non-executing
           interface preview, so a visitor sees the real UI before the notice. */}
      {frameUrl && (
        <section className="tool-detail__section">
          <div className="tool-detail__interface-head">
            <h2>
              {isPreviewOnly
                ? ui.tool_interface_preview[lang]
                : ui.tool_interface[lang]}
            </h2>
            <a
              className="tool-detail__newtab"
              href={frameUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ui.tool_open_new_tab[lang]} <span aria-hidden="true">↗</span>
            </a>
          </div>
          {isPreviewOnly && (
            <p className="tool-detail__usage text-meta">
              {ui.tool_interface_preview_note[lang]}
            </p>
          )}
          <div className="tool-detail__frame">
            <iframe
              src={frameUrl}
              title={`${tool.title} — ${ui.tool_iframe_title[lang]}`}
              className="tool-detail__iframe"
              loading="lazy"
              sandbox="allow-scripts allow-downloads allow-forms allow-modals allow-popups allow-same-origin"
            />
          </div>
          {!isBackend && usage?.advisory && (
            <p className="tool-detail__usage text-meta">
              {ui.fair_use_note[lang]} — {usage.used}/{usage.limit}{' '}
              ({lang === 'vi'
                ? 'bộ đếm phía client, không phải cơ chế bắt buộc'
                : 'client-side counter, not enforcement'})
            </p>
          )}
        </section>
      )}

      {!isBackend && !embedUrl && (
        <aside className="tool-detail__notice tool-detail__notice--info">
          <p>{ui.tool_not_embeddable[lang]}</p>
        </aside>
      )}

      {/* ---- Task C, Tool 06: explicit backend-required state ---- */}
      {isBackend && (
        <aside className="tool-detail__notice tool-detail__notice--backend">
          <h2>{ui.tool_backend_title[lang]}</h2>
          <p>{t(backend?.note, lang)}</p>
          {backend && (
            <div className="tool-detail__backend-facts">
              <h3>{ui.tool_backend_howto[lang]}</h3>
              <ul>
                <li>
                  <strong>{ui.tool_backend_step_entry[lang]}:</strong>{' '}
                  <code>{backend.entry}</code> ({backend.framework})
                </li>
                <li>
                  <strong>{ui.tool_backend_step_port[lang]}:</strong>{' '}
                  <code>{backend.defaultPort}</code>
                </li>
              </ul>
              {Array.isArray(backend.endpoints) && (
                <>
                  <h3>{ui.tool_backend_endpoints[lang]}</h3>
                  <ul className="tool-detail__endpoints">
                    {backend.endpoints.map((endpoint) => (
                      <li key={endpoint}>
                        <code>{endpoint}</code>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </aside>
      )}
    </article>
  );
}
