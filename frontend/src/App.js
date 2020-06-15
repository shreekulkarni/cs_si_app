import React from 'react';
import './App.css';

import {Router} from 'react-router-dom';
import history from './Services/history';
import Routes from './Routes';
import Homepage from "./Pages/Homepage";

function App() {
  return (
      <div>
          <Router history={history}>
              <Routes />
          </Router>
      </div>

  );
}


export default App;
