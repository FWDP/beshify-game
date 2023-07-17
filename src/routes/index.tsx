import { lazy } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import Layout from '../components/UI/Layout';

const HomePage = lazy(() => import('../pages/Home'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));
const CreateRoomPage = lazy(() => import('../pages/CreateRoom'));
const BeshificationPage = lazy(() => import('../pages/Beshification'));
const ResponsePage = lazy(() => import('../pages/Response'));
const LobbyPage = lazy(() => import('../pages/Lobby'));
const RoomPage = lazy(() => import('../pages/Room'));

const AppRoutes = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'create-room',
          element: <CreateRoomPage />,
        },
        {
          path: 'lobby',
          element: <LobbyPage />,
        },
        {
          path: 'room/:id',
          element: <RoomPage />,
        },
        {
          path: 'beshify',
          children: [
            {
              path: ':id',
              element: <BeshificationPage />,
            },
            {
              path: 'response/:id',
              element: <ResponsePage />,
            },
            {
              path: 'showcase/:id',
              element: <ResponsePage />,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <PageNotFound />,
    },
  ];

  return useRoutes(routes);
};

export default AppRoutes;
