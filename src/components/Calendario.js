import React from "react";
import { directive } from "@babel/types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBarDash from "./NavBarDash";

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
              <button type="button" class="btn btn-primary float-right">
                Siguiente semana
              </button>
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
          <div className="form-group col-3">
            <label for="exampleFormControlSelect1">Categoría:</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option value="1">Categoría A</option>
              <option value="2">Categoría B</option>
              <option value="3">Categoría C</option>
            </select>
          </div>
          <div className="form-group col-3">
            <label for="exampleFormControlSelect1">Rama:</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option value="1">Femenil</option>
              <option value="2">Varonil</option>
              <option value="3">Mixto</option>
            </select>
          </div>

         
        </div>

        <div className="card-deck">
          <div className="card shadow p-3 mb-5 bg-white rounded">
            <div className="card-header">
              <div className="row">
                <div className="col-6 ramaCard-name">En el horario de las 7:00 am juegan: </div>
              </div>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr className="ramaCard-titulos">
                    <th className="float-left" scope="col">
                      CAMPO
                    </th>
                    <th scope="col">LOCAL</th>
                    <th scope="col" />
                    <th scope="col" />
                    <th scope="col" />
                    <th scope="col">VISITANTE</th>
                    <th scope="col">RAMA</th>
                    <th scope="col">CATEGORÍA</th>
                    {/* <th scope="col">H. FIJO</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="float-left" scope="row">
                      1
                    </th>
                    <td>CLAMS</td>
                    <img
                      className="logoNavBar"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fZuXPyKThTMtmIL7Y7c2gV1K_lTHqOxnxmuripM5MK2tZGvJ"
                    />
                    <td>VS</td>
                    <img
                      className="logoNavBar"
                      src="https://i.pinimg.com/236x/49/bd/f3/49bdf3a7d3bdc84b132b7a34af779f08.jpg"
                    />
                    <td>GAMOS</td>
                    <td>VARONIL</td>
                    <td>B</td>
                    {/* <td>9:00 h</td> */}
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th className="float-left" scope="row">
                      2
                    </th>
                    <td>GLADIATORS</td>
                    <img
                      className="logoNavBar"
                      src="https://image.shutterstock.com/image-vector/gladiator-logo-template-design-vector-260nw-1095576449.jpg"
                    />
                    <td>VS</td>
                    <img
                      className="logoNavBar"
                      src="https://i.pinimg.com/originals/5b/db/f4/5bdbf4d2c0c156606c9d68b092cdc819.png"
                    />
                    <td>PANTERAS</td>
                    <td>VARONIL</td>
                    <td>B</td>
                    {/* <td>9:00 h</td> */}
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th className="float-left" scope="row">
                      3
                    </th>
                    <td>WARRIORS</td>
                    <img
                      className="logoNavBar"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBEDofy1tiaFKiVE9yT09Ab4DMqFbxQd6zqyJRsz85yDpEUkoh"
                    />
                    <td>VS</td>
                    <img
                      className="logoNavBar"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3WIcVr7yazc51QL-2dfYYkbxnwQ_0OVyxr70qT00dWwd6jhB2QQ"
                    />
                    <td>HAWKS</td>
                    <td>VARONIL</td>
                    <td>B</td>
                    {/* <td>9:00 h</td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="card-deck">
          <div className="card shadow p-3 mb-5 bg-white rounded">
            <div className="card-header">
              <div className="row">
                <div className="col-6 ramaCard-name">En el horario de las 8:40 am juegan: </div>
              </div>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr className="ramaCard-titulos">
                    <th className="float-left" scope="col">
                      CAMPO
                    </th>
                    <th scope="col">LOCAL</th>
                    <th scope="col" />
                    <th scope="col" />
                    <th scope="col" />
                    <th scope="col">VISITANTE</th>
                    <th scope="col">RAMA</th>
                    <th scope="col">CATEGORÍA</th>
                    {/* <th scope="col">H. FIJO</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="float-left" scope="row">
                      1
                    </th>
                    <td>WOLVES</td>
                    <img
                      className="logoNavBar"
                      src="http://www.logospng.com/images/23/resultado-de-imagen-para-wolves-logo-logos-y-tarjetas-23464.png"
                    />
                    <td>VS</td>
                    <img
                      className="logoNavBar"
                      src="http://www.clker.com/cliparts/m/Y/R/S/q/C/black-and-yellow-shields.svg"
                    />
                    <td>BLACK & YELLOW</td>
                    <td>MIXTO</td>
                    <td>A</td>
                    {/* <td>9:00 h</td> */}
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th className="float-left" scope="row">
                      2
                    </th>
                    <td>KRAKENS</td>
                    <img
                      className="logoNavBar"
                      src="https://i.pinimg.com/originals/b5/62/ef/b562efdbbf666e9e384275e3c9fe14cb.png"
                    />
                    <td>VS</td>
                    <img
                      className="logoNavBar"
                      src="https://chilangabanda.com/wp-content/uploads/2016/04/chilanga-banda-logo.png"
                    />
                    <td>CHILANGA BANDA</td>
                    <td>MIXTO</td>
                    <td>A</td>
                    {/* <td>9:00 h</td> */}
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th className="float-left" scope="row">
                      3
                    </th>
                    <td>CORSARIOS</td>
                    <img
                      className="logoNavBar"
                      src="https://laventanablog.files.wordpress.com/2014/02/corsarios-logo-texto-recto.jpg"
                    />
                    <td>VS</td>
                    <img
                      className="logoNavBar"
                      src="https://vignette.wikia.nocookie.net/juggerspain/images/b/bc/Titanes_Emblema_Wikijugger.jpg/revision/latest?cb=20170612140144&path-prefix=es"
                    />
                    <td>TITANES</td>
                    <td>VARONIL</td>
                    <td>B</td>
                    {/* <td>9:00 h</td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="card-deck">
          <div className="card shadow p-3 mb-5 bg-white rounded">
            <div className="card-header">
              <div className="row">
                <div className="col-6 ramaCard-name">En el horario de las 11:10 am juegan: </div>
              </div>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr className="ramaCard-titulos">
                    <th className="float-left" scope="col">
                      CAMPO
                    </th>
                    <th scope="col">LOCAL</th>
                    <th scope="col" />
                    <th scope="col" />
                    <th scope="col" />
                    <th scope="col">VISITANTE</th>
                    <th scope="col">RAMA</th>
                    <th scope="col">CATEGORÍA</th>
                    {/* <th scope="col">H. FIJO</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="float-left" scope="row">
                      1
                    </th>
                    <td>OSOS</td>
                    <img
                      className="logoNavBar"
                      src="https://image.freepik.com/vector-gratis/oso-animal-deporte-mascota-cabeza-logotipo-vectorial_1893-4.jpg"
                    />
                    <td>VS</td>
                    <img
                      className="logoNavBar"
                      src="http://ligatfn.mex.tl/imagesnew//8/0/6/0/4/logo%20espartanos%20libre.jpg"
                    />
                    <td>KNIJOS</td>
                    <td>FEMENIL</td>
                    <td>B</td>
                    {/* <td>9:00 h</td> */}
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th className="float-left" scope="row">
                      2
                    </th>
                    <td>CLAMS</td>
                    <img
                      className="logoNavBar"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fZuXPyKThTMtmIL7Y7c2gV1K_lTHqOxnxmuripM5MK2tZGvJ"
                    />
                    <td>VS</td>
                    <img
                      className="logoNavBar"
                      src="https://i.pinimg.com/236x/49/bd/f3/49bdf3a7d3bdc84b132b7a34af779f08.jpg"
                    />
                    <td>GAMOS</td>
                    <td>FEMENIL</td>
                    <td>B</td>
                    {/* <td>9:00 h</td> */}
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th className="float-left" scope="row">
                      3
                    </th>
                    <td>GLADIATORS</td>
                    <img
                      className="logoNavBar"
                      src="https://image.shutterstock.com/image-vector/gladiator-logo-template-design-vector-260nw-1095576449.jpg"
                    />
                    <td>VS</td>
                    <img
                      className="logoNavBar"
                      src="https://i.pinimg.com/originals/5b/db/f4/5bdbf4d2c0c156606c9d68b092cdc819.png"
                    />
                    <td>PANTERAS</td>
                    <td>FEMENIL</td>
                    <td>B</td>
                    {/* <td>9:00 h</td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Calendario;
