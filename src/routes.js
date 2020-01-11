import React from 'react';
import { MakeRouteWithSubRoutes } from './Services/MakeRouteWithSubRoutes';
import { Switch } from 'react-router-dom';

import { Login } from './Sections/Login';
import { Dashboard } from './Sections/Dashboard';

const routes = [
  {
    path: "/",
    exact: true,
    protected: false,
    component: Login
  },
  {
    path: "/me",
    exact: true,
    protected: false,
    component: Dashboard
  },
];

export const Routes = (props) => {
  return (
    <div>
      <Switch>
        {
          routes.map(
            (route, index) => <MakeRouteWithSubRoutes key={index} {...route} />
          )
        }
      </Switch>
    </div>
  );
};