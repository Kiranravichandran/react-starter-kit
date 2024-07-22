import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface AuthGuardProps {
  isAuthenticated: boolean;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default AuthGuard;
