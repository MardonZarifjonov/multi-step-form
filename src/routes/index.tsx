import { useRoutes } from 'react-router-dom';
import App from 'App';
import { AddOns, Info, Plan, Summary } from 'pages';
import { routesMap } from 'constants/routes';

export function Routes() {
  const routes = useRoutes([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: routesMap.INFO.path,
          element: <Info />,
        },
        {
          path: routesMap.PLAN.path,
          element: <Plan />,
        },
        {
          path: routesMap['ADD-ONS'].path,
          element: <AddOns />,
        },
        {
          path: routesMap.SUMMARY.path,
          element: <Summary />,
        },
      ],
    },
  ]);

  return routes;
}
