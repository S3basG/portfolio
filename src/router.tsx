import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';
import ISPHome from './pages/ISPHome';
import AboutPage from './pages/AboutPage';
import ExperiencesPage from './pages/ExperiencesPage';
import SkillsPage from './pages/SkillsPage';
import ResumePage from './pages/ResumePage';
import ReflectionPage from './pages/ReflectionPage';

const createRouter = import.meta.env.BASE_URL === '/portfolio/' ? createHashRouter : createBrowserRouter;

export const router = createRouter([{ element: <SiteLayout />, children: [
  { path: '/', element: <ISPHome /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/experiences', element: <ExperiencesPage /> },
  { path: '/skills', element: <SkillsPage /> },
  { path: '/resume', element: <ResumePage /> },
  { path: '/reflection', element: <ReflectionPage /> },
] }]);
