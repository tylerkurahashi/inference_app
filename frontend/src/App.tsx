import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Sidebar/>
    </React.Fragment>
  )
}

export default App;