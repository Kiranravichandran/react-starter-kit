import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';


const App: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
