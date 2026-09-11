import { useLanguage } from '../i18n/LanguageContext.jsx';
import { t } from '../i18n/t.js';
import { ui } from '../i18n/ui.js';
import { homepageData } from '../data/homepageData.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Timeline from '../components/Timeline.jsx';
import SkillGroup from '../components/SkillGroup.jsx';
import Reveal from '../components/Reveal.jsx';
import heroBackground from '../assets/hero-background.png';
import './Home.css';

// Home page. Every piece of content is resolved from homepageData.js for the
// active language via t(); nothing is reworded, shortened, or invented here.
// Sections follow the source data order: hero, about, career timeline,
// what I bring to QA, skills, education, current focus, working style, contact.
//
// This is a presentation-only layout: the source content is unchanged, but each
// section uses a presentation pattern suited to its content type (atmospheric
// hero, editorial feature, timeline, dominant-plus-supporting features, compact
// skill rows, numbered priorities, principle list, closing CTA) rather than one
// repeated card. Visual identity follows
// Design/a_clean_modern_portfolio_website_homepage_screensh.png (red + navy,
// soft red/pink atmosphere behind a prominent portrait).
export default function Home() {
  const { lang } = useLanguage();

  const hero = t(homepageData.hero, lang);
  const about = t(homepageData.about, lang);
  const timeline = t(homepageData.career_timeline, lang);
  const whatIBring = t(homepageData.what_i_bring_to_qa, lang);
  const skills = t(homepageData.skills, lang);
  const education = t(homepageData.education, lang);
  const currentFocus = t(homepageData.current_focus, lang);
  const workingStyle = t(homepageData.working_style, lang);
  const contact = t(homepageData.contact, lang);

  // Present the single source title ("Manual QA Tester | Frontend Engineering
  // Background") as a two-line display. This is presentation only — the full
  // title text is preserved verbatim.
  const titleLines = hero.title.split('|').map((line) => line.trim()).filter(Boolean);

  // "What I Bring to QA": the first source item ("Technical QA Mindset") is the
  // core statement; the rest are supporting strengths. This only changes how the
  // same five items are arranged — none are removed, merged, or reworded.
  const [bringLead, ...bringRest] = whatIBring;

  // About: first paragraph reads as the section lead, the last as the closing
  // takeaway, the middle paragraphs as the body. Source order is preserved.
  const aboutLead = about.paragraphs[0];
  const aboutTakeaway =
    about.paragraphs.length > 1 ? about.paragraphs[about.paragraphs.length - 1] : null;
  const aboutBody = about.paragraphs.slice(1, Math.max(1, about.paragraphs.length - 1));

  // Final CV PDF lives in public/ so it is copied verbatim into the production
  // build and served from the deploy base path (import.meta.env.BASE_URL).
  const cvHref = `${import.meta.env.BASE_URL}Le_Thi_Luyen_Manual_QA_QC_CV.pdf`;

  // "Get in Touch" scrolls to the contact section. A plain href="#contact" would
  // collide with HashRouter (which owns location.hash), so scroll imperatively.
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Small decorative glyphs for the three hero stats, mirroring the approved
  // hero design (briefcase / laptop / AI spark). Purely visual — aria-hidden.
  const heroHighlights = [
    {
      value: ui.hero_hl_qa_value[lang],
      label: ui.hero_hl_qa_label[lang],
      icon: (
        <path d="M4 8h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8Zm5-3h6a1 1 0 0 1 1 1v2H8V6a1 1 0 0 1 1-1Z" />
      ),
    },
    {
      value: ui.hero_hl_fe_value[lang],
      label: ui.hero_hl_fe_label[lang],
      icon: (
        <path d="M5 5h14a1 1 0 0 1 1 1v9H4V6a1 1 0 0 1 1-1ZM2 17h20l-1.2 1.6a2 2 0 0 1-1.6.8H4.8a2 2 0 0 1-1.6-.8L2 17Z" />
      ),
    },
    {
      value: ui.hero_hl_ai_value[lang],
      label: ui.hero_hl_ai_label[lang],
      icon: (
        <path d="M12 3.5 13.6 8 18 9.5 13.6 11 12 15.5 10.4 11 6 9.5 10.4 8 12 3.5ZM6 15l.9 2.4L9 18l-2.1.9L6 21l-.9-2.1L3 18l2.1-.6L6 15Z" />
      ),
    },
  ];

  return (
    <div className="home">
      {/* 1 — HERO — supplied pre-cut background (Design/hero_background.png,
          arcs + portrait baked in) with the approved content as real HTML on
          top. The background is decorative only; all text stays in React/i18n. */}
      <section className="home-section hero" aria-labelledby="hero-name">
        <div
          className="hero__bg"
          role="img"
          aria-label={ui.hero_portrait_alt[lang]}
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="hero__inner">
          <div className="hero__body">
            <p className="hero__eyebrow">
              <span className="hero__eyebrow-rule" aria-hidden="true" />
              {hero.eyebrow}
            </p>
            <h1 id="hero-name" className="hero__name">
              {hero.name}
            </h1>
            <p className="hero__title">
              {titleLines.map((line, index) => (
                <span
                  key={line}
                  className={`hero__title-line hero__title-line--${
                    index === 0 ? 'primary' : 'secondary'
                  }`}
                >
                  {line}
                </span>
              ))}
            </p>
            <p className="hero__summary">{hero.summary}</p>

            <div className="hero__actions">
              <a
                className="btn btn--primary"
                href={cvHref}
                download="Le_Thi_Luyen_Manual_QA_QC_CV.pdf"
              >
                {hero.primary_cta}
                <svg className="btn__icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 19h14" />
                </svg>
              </a>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={scrollToContact}
              >
                {hero.secondary_cta}
                <svg className="btn__icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h13m0 0-5-5m5 5-5 5" />
                </svg>
              </button>
            </div>

            <ul className="hero__highlights" aria-label={hero.eyebrow}>
              {heroHighlights.map((item) => (
                <li key={item.label} className="hero__highlight">
                  <span className="hero__highlight-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">{item.icon}</svg>
                  </span>
                  <span className="hero__highlight-text">
                    <span className="hero__highlight-value">{item.value}</span>
                    <span className="hero__highlight-label">{item.label}</span>
                  </span>
                </li>
              ))}
            </ul>

            <p className="hero__tagline">{ui.hero_tagline[lang]}</p>
          </div>
        </div>
      </section>

      {/* 2 — ABOUT — "From Frontend Engineering to QA" as one career-transition
          narrative: a full-width title + opening paragraph, then the middle
          paragraphs as a two-column story (frontend years → return to QA), then
          the final paragraph as a full-width closing statement. Layout only —
          the four source paragraphs are rendered verbatim and in source order. */}
      <Reveal as="section" className="home-section feature" aria-labelledby="about-heading">
        <div className="feature__intro">
          <SectionHeading id="about-heading">{about.heading}</SectionHeading>
          <p className="feature__lead">{aboutLead}</p>
        </div>
        {aboutBody.length > 0 ? (
          <div className="feature__body">
            {aboutBody.map((paragraph, index) => (
              <p key={index} className="feature__paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        ) : null}
        {aboutTakeaway ? (
          <p className="feature__takeaway">{aboutTakeaway}</p>
        ) : null}
      </Reveal>

      {/* 3 — CAREER TIMELINE */}
      <Reveal as="section" className="home-section" aria-labelledby="timeline-heading">
        <SectionHeading id="timeline-heading">{ui.section_timeline[lang]}</SectionHeading>
        <Timeline items={timeline} />
      </Reveal>

      {/* 4 — WHAT I BRING TO QA — one dominant statement + supporting strengths */}
      <Reveal as="section" className="home-section" aria-labelledby="bring-heading">
        <SectionHeading id="bring-heading">{ui.section_what_i_bring[lang]}</SectionHeading>
        <div className="bring">
          {bringLead ? (
            <article className="bring__lead">
              <h3 className="bring__lead-title">{bringLead.title}</h3>
              <p className="bring__lead-text">{bringLead.description}</p>
            </article>
          ) : null}
          <ul className="bring__grid">
            {bringRest.map((item) => (
              <li key={item.title} className="bring__item">
                <h4 className="bring__item-title">{item.title}</h4>
                <p className="bring__item-text">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* 5 — SKILLS — compact grouped rows */}
      <Reveal as="section" className="home-section" aria-labelledby="skills-heading">
        <SectionHeading id="skills-heading">{ui.section_skills[lang]}</SectionHeading>
        <dl className="skills">
          {Object.entries(skills).map(([group, list]) => (
            <SkillGroup key={group} name={group} skills={list} />
          ))}
        </dl>
      </Reveal>

      {/* 6 — EDUCATION — single information block */}
      <Reveal as="section" className="home-section" aria-labelledby="education-heading">
        <SectionHeading id="education-heading">{ui.section_education[lang]}</SectionHeading>
        <div className="education">
          <h3 className="education__degree">{education.degree}</h3>
          <p className="education__school">{education.school}</p>
          <p className="education__year">
            {ui.graduated[lang]} {education.graduation}
          </p>
        </div>
      </Reveal>

      {/* 7 — CURRENT FOCUS — numbered priorities */}
      <Reveal as="section" className="home-section" aria-labelledby="focus-heading">
        <SectionHeading id="focus-heading">{currentFocus.heading}</SectionHeading>
        <ol className="focus">
          {currentFocus.items.map((item, index) => (
            <li key={item} className="focus__item">
              <span className="focus__num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="focus__text">{item}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* 8 — WORKING STYLE — principle list */}
      <Reveal as="section" className="home-section" aria-labelledby="style-heading">
        <SectionHeading id="style-heading">{workingStyle.heading}</SectionHeading>
        <ul className="principles">
          {workingStyle.items.map((item) => (
            <li key={item} className="principles__item">
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      {/* 9 — CONTACT — closing statement + real contact details and actions */}
      <Reveal as="section" id="contact" className="home-section" aria-labelledby="contact-heading">
        <div className="contact">
          <div className="contact__intro">
            <h2 id="contact-heading" className="contact__heading">
              {contact.heading}
            </h2>
            <p className="contact__text">{contact.text}</p>
          </div>

          <div className="contact__panel">
            <ul className="contact__details">
              <li className="contact__detail">
                <span className="contact__label">{ui.contact_email_label[lang]}</span>
                <a className="contact__value" href="mailto:leluyen89@gmail.com">
                  leluyen89@gmail.com
                </a>
              </li>
              <li className="contact__detail">
                <span className="contact__label">{ui.contact_phone_label[lang]}</span>
                <a className="contact__value" href="tel:+84865224131">
                  086 522 4131
                </a>
              </li>
            </ul>

            <div className="contact__actions">
              <a className="btn btn--primary" href="mailto:leluyen89@gmail.com">
                {ui.contact_email_cta[lang]}
              </a>
              <a
                className="btn btn--ghost"
                href={cvHref}
                download="Le_Thi_Luyen_Manual_QA_QC_CV.pdf"
              >
                {ui.contact_cv_cta[lang]}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
