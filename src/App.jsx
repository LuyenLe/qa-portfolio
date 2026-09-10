import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout.jsx';
import Home from './pages/Home.jsx';
import Tools from './pages/Tools.jsx';
import ToolDetail from './pages/ToolDetail.jsx';
import Checklists from './pages/Checklists.jsx';

// TASK 3 = global visual shell only. AppLayout provides the shared header,
// navigation, language switcher, main container and footer for every route.
// Page bodies remain simple placeholders — their real content is built later.
export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/:slug" element={<ToolDetail />} />
        <Route path="/checklists" element={<Checklists />} />
        {/* Unknown routes fall back to Home. */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
