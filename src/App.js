import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar';

import Login from './components/Login';
import SignUp from './components/SignUp';
import Equipos from './components/Equipos';

function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/equipos" component={Equipos} />
<<<<<<< HEAD
      <Route exact path="/calendario" component={Calendario} /> */}

      <Login />
      {/* <SignUp /> */}

      {/* </Router> */}
  
=======
      {/* <Route exact path="/calendario" component={Calendario} /> */}
      {/* <Login/> */}
      </Router
>>>>>>> c71c892a3555c5ba035edc7017d86f53487926ea
    </div>
  );
}

export default App;
