import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Insert from './Components/Insert'
import View from './Components/View'

function App() {
  return (
    <Router>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={'/'} className="navbar-brand" >KONECTA</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Inicio <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/insert">Insertar productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/view">Ver productos</a>
            </li>
          </ul>
        </div>
      </nav>

      <h1>INVENTARIO</h1>

      <Switch>
        <Route exact path='/insert' component = {Insert} />
        <Route path='/view' component = {View}/>
      </Switch>

      </div>
    </Router>
  );
}

export default App;
