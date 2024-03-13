import Layout from 'csam/components/Layout';
import Dashboard from 'csam/pages/admin/dashboard';
import Leaderboard from 'csam/pages/Leaderboard';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Archives = lazy(() => import('csam/pages/Archives'));
const Gamecontests = lazy(() => import('csam/pages/GameContest'));
const Goodreads = lazy(() => import('csam/pages/GoodReads'));
const Homepage = lazy(() => import('csam/pages/Home'));
const Monthbanner = lazy(() => import('csam/pages/MonthBanner'));
const Toolsresources = lazy(() => import('csam/pages/ToolsResources'));

const routes = [
  {
    path: '/',
    handle: {
      label: <Layout />,
    },
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'Monthbanner',
        element: <Monthbanner />,
      },
      {
        path: 'Goodreads',
        element: <Goodreads />,
      },
      {
        path: 'Gamecontests',
        element: <Gamecontests />,
      },
      {
        path: 'Toolsresources',
        element: <Toolsresources />,
      },
      {
        path: 'Archives',
        element: <Archives />,
      },
      {
        path: 'Leaderboard',
        element: <Leaderboard />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
