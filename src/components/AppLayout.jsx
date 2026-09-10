import { Outlet } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { ui } from '../i18n/ui.js';
import Header from './Header.jsx';

// Global visual shell shared by every route (/, /tools, /tools/:slug, /checklists).
// Page-specific content renders through <Outlet />. There is intentionally no
// large footer — the design reference does not call for one, so this is a single
// restrained line.
export default function AppLayout() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        {ui.skip_to_content[lang]}
      </a>

      <Header />

      <main id="main-content" className="app-main" tabIndex={-1}>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer className="app-footer">
        <div className="container">
          <span>© {year} Lê Thị Luyến</span>
        </div>
      </footer>
    </div>
  );
}
