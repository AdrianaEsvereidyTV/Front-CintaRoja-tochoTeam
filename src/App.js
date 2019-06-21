import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import NavBar from './components/NavBar';
// import Login from './components/Login'
import Calendario from './components/Calendario';
function App() {
  return (
    <div className="App">
      {/* <Router> */}

      <NavBar />
      {/* <Route exact path="/login" component={Login} />
      <Route exact path="/registro" component={Registro} />
      <Route exact path="/equipos" component={Equipos} />
      <Route exact path="/calendario" component={Calendario} /> */}

      <Calendario />

      {/* </Router> */}
  
    </div>
  );
}

export default App;
