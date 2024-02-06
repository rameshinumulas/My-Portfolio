import React from 'react';
import './App.css';
import ProfileRoutes from './ProfileRoutes';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProfileRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
