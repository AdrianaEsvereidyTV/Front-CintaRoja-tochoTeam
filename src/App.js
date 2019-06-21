import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Equipos from './components/Equipos';
import Calendario from './components/Calendario';

function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/equipos" component={Equipos} />
      <Route exact path="/calendario" component={Calendario} />
      
      </Router>
    </div>
  );
}

export default App;