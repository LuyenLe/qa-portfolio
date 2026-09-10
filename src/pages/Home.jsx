import { useLanguage } from '../i18n/LanguageContext.jsx';
import { t } from '../i18n/t.js';
import { ui } from '../i18n/ui.js';
import { homepageData } from '../data/homepageData.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Timeline from '../components/Timeline.jsx';
import SkillGroup from '../components/SkillGroup.jsx';
import Reveal from '../components/Reveal.jsx';
import portrait from '../assets/portrait-le-thi-luyen.jpg';
import './Home.css';

// Home page. Every piece of content is resolved from homepageData.js for the
// active language via t(); nothing is reworded, shortened, or invented here.
// Sections follow the source data order: hero, about, career timeline,
// what I bring to QA, skills, education, current focus, working style, contact.
//
// The visual language follows Design/a_clean_modern_portfolio_website_homepage_screensh.png
// (red + navy identity, prominent portrait on the right of the desktop hero).
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

  // Final CV PDF lives in public/ so it is copied verbatim into the production
  // build and served from the deploy base path (import.meta.env.BASE_URL).
  const cvHref = `${import.meta.env.BASE_URL}Le_Thi_Luyen_Manual_QA_QC_CV_FINAL.pdf`;

  // "Get in Touch" scrolls to the contact section. A plain href="#contact" would
  // collide with HashRouter (which owns location.hash), so scroll imperatively.
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroHighlights = [
    { value: ui.hero_hl_qa_value[lang], label: ui.hero_hl_qa_label[lang] },
    { value: ui.hero_hl_fe_value[lang], label: ui.hero_hl_fe_label[lang] },
    { value: ui.hero_hl_ai_value[lang], label: ui.hero_hl_ai_label[lang] },
  ];

  return (
    <div className="home">
      {/* 1 — HERO */}
      <section className="home-section hero" aria-labelledby="hero-name">
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
                download="Le_Thi_Luyen_Manual_QA_QC_CV_FINAL.pdf"
              >
                {hero.primary_cta}
              </a>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={scrollToContact}
              >
                {hero.secondary_cta}
              </button>
            </div>

            <ul className="hero__highlights" aria-label={hero.eyebrow}>
              {heroHighlights.map((item) => (
                <li key={item.label} className="hero__highlight">
                  <span className="hero__highlight-value">{item.value}</span>
                  <span className="hero__highlight-label">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero__portrait">
            <div className="hero__portrait-frame">
              <img
                className="hero__portrait-img"
                src={portrait}
                alt={ui.hero_portrait_alt[lang]}
                width="1050"
                height="1536"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2 — ABOUT */}
      <Reveal as="section" className="home-section" aria-labelledby="about-heading">
        <SectionHeading id="about-heading">{about.heading}</SectionHeading>
        <div className="about">
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={
                index === about.paragraphs.length - 1
                  ? 'about__paragraph about__paragraph--takeaway'
                  : 'about__paragraph'
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>

      {/* 3 — CAREER TIMELINE */}
      <Reveal as="section" className="home-section" aria-labelledby="timeline-heading">
        <SectionHeading id="timeline-heading">{ui.section_timeline[lang]}</SectionHeading>
        <Timeline items={timeline} />
      </Reveal>

      {/* 4 — WHAT I BRING TO QA */}
      <Reveal as="section" className="home-section" aria-labelledby="bring-heading">
        <SectionHeading id="bring-heading">{ui.section_what_i_bring[lang]}</SectionHeading>
        <ul className="bring-grid">
          {whatIBring.map((item) => (
            <li key={item.title} className="bring-card">
              <h3 className="bring-card__title">{item.title}</h3>
              <p className="bring-card__description">{item.description}</p>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* 5 — SKILLS */}
      <Reveal as="section" className="home-section" aria-labelledby="skills-heading">
        <SectionHeading id="skills-heading">{ui.section_skills[lang]}</SectionHeading>
        <div className="skills-grid">
          {Object.entries(skills).map(([group, list]) => (
            <SkillGroup key={group} name={group} skills={list} />
          ))}
        </div>
      </Reveal>

      {/* 6 — EDUCATION */}
      <Reveal as="section" className="home-section" aria-labelledby="education-heading">
        <SectionHeading id="education-heading">{ui.section_education[lang]}</SectionHeading>
        <div className="education-card">
          <h3 className="education-card__degree">{education.degree}</h3>
          <p className="education-card__school">{education.school}</p>
          <p className="education-card__year">
            {ui.graduated[lang]} {education.graduation}
          </p>
        </div>
      </Reveal>

      {/* 7 — CURRENT FOCUS */}
      <Reveal as="section" className="home-section" aria-labelledby="focus-heading">
        <SectionHeading id="focus-heading">{currentFocus.heading}</SectionHeading>
        <ul className="focus-grid">
          {currentFocus.items.map((item) => (
            <li key={item} className="focus-card">
              <span className="focus-card__mark" aria-hidden="true" />
              <span className="focus-card__text">{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* 8 — WORKING STYLE */}
      <Reveal as="section" className="home-section" aria-labelledby="style-heading">
        <SectionHeading id="style-heading">{workingStyle.heading}</SectionHeading>
        <ul className="style-list">
          {workingStyle.items.map((item) => (
            <li key={item} className="style-list__item">
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      {/* 9 — CONTACT */}
      <Reveal as="section" id="contact" className="home-section" aria-labelledby="contact-heading">
        <SectionHeading id="contact-heading">{contact.heading}</SectionHeading>
        <div className="contact">
          <p className="contact__text">{contact.text}</p>
          <div className="contact__actions">
            <button
              type="button"
              className="btn btn--primary"
              disabled
              aria-describedby="contact-note"
            >
              {contact.cta}
            </button>
          </div>
          <p id="contact-note" className="contact__note">
            {ui.contact_unavailable[lang]}
          </p>
        </div>
      </Reveal>
    </div>
  );
}
