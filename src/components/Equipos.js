import React from 'react';
import { directive } from '@babel/types';
//react router dom

class Equipos extends React.Component {
    render() {
        return (



            <div className="container">

                <div className="row">
                    <div className="col-9">
                        <h2>EQUIPOS</h2>
                    </div>
                    <div className="col-3">
                        <button type="button" class="btn btn-primary">Preparar Calendario</button>
                    </div>
                </div>

                <div className="form-group col-3">
                    <label for="exampleFormControlSelect1">Torneo:</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>Domingo Estelar</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>

                <div className="card-deck">
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-4">
                                    FEMENIL
                                </div>
                                <div className="col-8">
                                    Agregar Equipo <a href="#" ><i class="fa fa-plus-circle" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">EQUIPOS</th>
                                        <th scope="col">CAT.</th>
                                        <th scope="col">H. FIJO</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">CALIGARIS</th>
                                        <td>B</td>
                                        <td>9:00 h</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-4">
                                    MIXTO
                                </div>
                                <div className="col-8">
                                    Agregar Equipo <a href="#" ><i class="fa fa-plus-circle" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">EQUIPOS</th>
                                        <th scope="col">CAT.</th>
                                        <th scope="col">H. FIJO</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">CALIGARIS</th>
                                        <td>B</td>
                                        <td>9:00 h</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-4">
                                    VARONIL
                                </div>
                                <div className="col-8">
                                    Agregar Equipo <a href="#" ><i class="fa fa-plus-circle" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">EQUIPOS</th>
                                        <th scope="col">CAT.</th>
                                        <th scope="col">H. FIJO</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">CALIGARIS</th>
                                        <td>B</td>
                                        <td>9:00 h</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default Equipos;