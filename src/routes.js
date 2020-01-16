import React from 'react';
import { MakeRouteWithSubRoutes } from './Services/MakeRouteWithSubRoutes';
import { Switch } from 'react-router-dom';

import { Login } from './Sections/Login';
import { Dashboard } from './Sections/Dashboard';
import { DashboardDashboard } from './Sections/Dashboard/Pages/Dashboard';
import { DashboardPatients } from './Sections/Dashboard/Pages/Patients';
import { DashboardAlerts } from './Sections/Dashboard/Pages/Alerts';

import { PatientPage } from './Sections/PatientPage';

const routes = [
  {
    path: "/",
    exact: true,
    protected: false,
    component: Login
  },
  {
    path: "/me",
    protected: false,
    component: Dashboard,
    routes: [
      {
        path: "/me/dashboard",
        component: DashboardDashboard
      },
      {
        path: "/me/pacientes",
        component: DashboardPatients
      },
      {
        path: "/me/alertas",
        component: DashboardAlerts
      }
    ]
  },
  {
    path: "/paciente/:idPatient",
    component: PatientPage
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