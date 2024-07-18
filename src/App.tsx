import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes, { RouteConfig } from './services/Routing/routing.service';
import './App.scss';
import AuthGuard from './utils/guard/AuthGuard';
import { isAuthenticated } from './utils/TokenUtils';


const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Suspense
          fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route: RouteConfig, index: number) => {
              const Component = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    route.guard ? (
                      <AuthGuard component={Component} isAuthenticated={isAuthenticated()} />
                    ) : (
                      <Component />
                    )
                  }
                />
              );
            })}
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
