import React from 'react';
import { directive } from '@babel/types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBarDash from './NavBarDash';

class Calendario extends React.Component {
  render() {
    return (
      <Router>
        <NavBarDash />
        <div className="container">
          <div className="row paddingTop">
            <div className="col-9">
              <h2>CALENDARIO</h2>
            </div>
            <div className="col-3">
              <button type="button" class="btn btn-primary float-right">Siguiente semana</button>
            </div>
          </div>

          <div className="form-group col-3">
            <label for="exampleFormControlSelect1">Torneo:</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option value="1">Domingo Estelar</option>
              <option value="2">Sunday Night</option>
              <option value="3">Saturday Morning</option>
              <option value="4">Friday Lights</option>
              <option value="5">Best of the Best</option>
            </select>
          </div>

          <div className="card-deck">
            <div className="card shadow">

              <div className="card-body">

                <div className="row">
                  <div className="Campo col-1"><p>1</p></div>

                  <div className="partido col-7">
                  <div className="equipoLocal">
                    <h6 className="nombreEquipoLocal">Equipo local</h6>
                    <img className="logoEquipoLocal" src="https://via.placeholder.com/36" />
                  </div>

                  <div className="versus">
                    <p>vs</p>
                  </div>

                  <div className="equipoVisitante">
                    <img className="logoVisitante" src="https://via.placeholder.com/36" />
                    <h6 className="nombreVisitante">Equipo visitante</h6>
                  </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default Calendario;