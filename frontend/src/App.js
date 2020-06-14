import React from 'react';
import './App.css';

import {Router} from 'react-router-dom';
import history from './Services/history';
import Routes from './Routes';
import Navigation from './Components/Navbar';

function App() {
  return (
      <div>
          <Router history={history}>
              {/*<Navigation/>*/}
              <Routes />
          </Router>
      </div>

  );
}


export default App;
