import React from 'react';
import ReactDOM from 'react-dom/client';
// HashRouter (not BrowserRouter) so deep links like /tools and /checklists resolve
// correctly on GitHub Pages, which serves static files only and cannot rewrite
// unknown paths to index.html.
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import { LanguageProvider } from './i18n/LanguageContext.jsx';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </LanguageProvider>
  </React.StrictMode>,
);
