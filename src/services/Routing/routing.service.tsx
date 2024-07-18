import React from 'react';
import LoginPage from '../../views/Login/LoginPage';
import SignUpPage from '../../views/SignUp/SignUpPage';


export interface RouteConfig {
  path: string;
  component: React.LazyExoticComponent<React.FC> | React.FC;
  guard?: boolean;
}

const routes: RouteConfig[] = [
  {
    path: '/',
    component: LoginPage,
  },
  {
    path: '/signup',
    component: SignUpPage,
    guard: true
  }
];

export default routes;
