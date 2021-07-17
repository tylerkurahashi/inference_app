import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Router from './components/Router/Router';
import Sidemenu from './components/Sidemenu/Sidemenu';

import store from './redux/store/store';

const App = () => {

  return (
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <Navbar />
          <Sidemenu />
          <Router />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  );
}

export default App;