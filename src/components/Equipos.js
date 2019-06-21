import React from 'react';
import { directive } from '@babel/types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBarDash from './NavBarDash';

class Equipos extends React.Component {
    render() {
        return (
            <Router>
                <NavBarDash />
                <div className="container">
                    <div className="row paddingTop">
                        <div className="col-9">
                            <h2>EQUIPOS</h2>
                        </div>
                        <div className="col-3">
                            <button type="button" class="btn btn-primary float-right">Preparar Calendario</button>
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
                        <div className="card shadow p-3 mb-5 bg-white rounded">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-6 ramaCard-name">
                                        FEMENIL
                                    </div>
                                    <div className="col-6 ramaCard-add">
                                        <a href="#" >Agregar Equipo <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr className="ramaCard-titulos">
                                            <th className="float-left" scope="col">EQUIPOS</th>
                                            <th scope="col">CAT.</th>
                                            {/* <th scope="col">H. FIJO</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className="float-left" scope="row">CALIGARIS</th>
                                            <td>B</td>
                                            {/* <td>9:00 h</td> */}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card shadow p-3 mb-5 bg-white rounded">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-6 ramaCard-name">
                                        MIXTO
                                    </div>
                                    <div className="col-6 ramaCard-add">
                                        <a href="#" >Agregar Equipo <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr className="ramaCard-titulos">
                                            <th className="float-left" scope="col">EQUIPOS</th>
                                            <th scope="col">CAT.</th>
                                            {/* <th scope="col">H. FIJO</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className="float-left" scope="row">CALIGARIS</th>
                                            <td>B</td>
                                            {/* <td>9:00 h</td> */}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card shadow p-3 mb-5 bg-white rounded">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-6 ramaCard-name">
                                        VARONIL
                                    </div>
                                    <div className="col-6 ramaCard-add">
                                        <a href="#" >Agregar Equipo <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <table class="table">
                                    <thead>
                                        <tr className="ramaCard-titulos">
                                            <th className="float-left" scope="col">EQUIPOS</th>
                                            <th scope="col">CAT.</th>
                                            {/* <th scope="col">H. FIJO</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className="float-left" scope="row">CALIGARIS</th>
                                            <td>B</td>
                                            {/* <td>9:00 h</td> */}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </Router>

        );
    }
}

export default Equipos;