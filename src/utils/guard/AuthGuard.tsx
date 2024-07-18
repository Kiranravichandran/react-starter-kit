import React from 'react';
import { Navigate } from 'react-router-dom';

interface AuthGuardProps {
  component: React.LazyExoticComponent<React.FC> | React.FC;
  isAuthenticated: boolean;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ component: Component, isAuthenticated }) => {
  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};

export default AuthGuard;
