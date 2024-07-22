import React from 'react';
import LoginPage from '../../views/Login/LoginPage';
import SignUpPage from '../../views/SignUp/SignUpPage';
import {RouteObject} from "react-router-dom"
import AuthGuard from '../guard/AuthGuard';
import { isAuthenticated } from '../TokenUtils';
import App from '../../App';


export interface RouteConfig {
  path: string;
  component: React.LazyExoticComponent<React.FC> | React.FC;
  guard?: boolean;
}

const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <LoginPage />
      },
      {
        element: <AuthGuard isAuthenticated={isAuthenticated()} />,
        children: [
          {
            path: '/signup',
            Component: SignUpPage,
          }
        ]
      }
    ]
  }
  
];

export default routes;
