import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { ui } from '../i18n/ui.js';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import './Header.css';

// Single source of navigation. The label keys resolve through ui.js so the nav
// text stays exactly: Home | QA Tools | QA Checklists.
// `/tools` is matched loosely so "QA Tools" stays active on /tools/:slug too.
const NAV_ITEMS = [
  { to: '/', labelKey: 'nav_home', end: true },
  { to: '/tools', labelKey: 'nav_tools', end: false },
  { to: '/checklists', labelKey: 'nav_checklists', end: false },
];

export default function Header() {
  const { lang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  // Close the mobile menu after navigating to a new route.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // While the mobile menu is open: close on Escape or on outside interaction.
  useEffect(() => {
    if (!menuOpen) return undefined;

    function onKeyDown(event) {
      if (event.key === 'Escape') setMenuOpen(false);
    }
    function onPointerDown(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container site-header__inner" ref={headerRef}>
        <Link to="/" className="brand">
          <span className="brand__name">Lê Thị Luyến</span>
          <span className="brand__role">{ui.brand_role[lang]}</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          aria-label={menuOpen ? ui.menu_close[lang] : ui.menu_open[lang]}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle__bars" aria-hidden="true" />
        </button>

        <div className={`site-header__collapse${menuOpen ? ' is-open' : ''}`}>
          <nav
            id="primary-nav"
            className="primary-nav"
            aria-label={ui.primary_nav_label[lang]}
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `primary-nav__link${isActive ? ' is-active' : ''}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {ui[item.labelKey][lang]}
              </NavLink>
            ))}
          </nav>

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
