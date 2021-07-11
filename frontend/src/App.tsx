import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Router from './components/Router/Router';
import Sidemenu from './components/Sidemenu/Sidemenu';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <Sidemenu />
        <Router />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;