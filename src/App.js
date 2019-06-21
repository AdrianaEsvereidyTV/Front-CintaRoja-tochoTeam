import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import Login from './components/Login'
// import SignUp from './components/SignUp'

function App() {
  return (
    <div className="App">
      {/* <Router> */}

      <NavBar />
      {/* <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/equipos" component={Equipos} />
      <Route exact path="/calendario" component={Calendario} /> */}

      <Login />
      {/* <SignUp /> */}

      {/* </Router> */}
  
    </div>
  );
}

export default App;
