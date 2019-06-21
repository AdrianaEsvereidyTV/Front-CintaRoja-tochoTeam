import React from 'react';
import { Link } from "react-router-dom";

class SignUp extends React.Component {
    render() {
        return (
            <div class="container">

                <div class="row SignUpContainer">
                    <div class="col"></div>
                    <div class="col-8 col-md-6">
                        <h2>Registro de Equipo</h2>
                        <form>
                            <div>
                                <h5>1. Información del representante</h5>
                            </div>

                            <div className="form-group">
                                <label for="InputNombre">Nombre</label>
                                <input type="email" class="form-control" id="InputNombre" aria-describedby="emailHelp" placeholder="Ingresa tu nombre" />
                            </div>
                            <div className="form-group">
                                <label for="InputNombre">Apellido</label>
                                <input type="email" class="form-control" id="InputNombre" aria-describedby="emailHelp" placeholder="Ingresa tu apellido" />
                            </div>
                            <div className="form-group">
                                <label for="InputNombre">Número celular</label>
                                <input type="email" class="form-control" id="InputNombre" aria-describedby="emailHelp" placeholder="Ingresa tu número" />
                            </div>
                            <label for="exampleInputEmail1">Correo Electrónico</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu email" />

                            <div className="form-group">
                                <label for="exampleInputPassword1">Contraseña</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
                            </div>

                            <div className="form-group">
                                <label for="exampleInputPassword1">Confirma tu contraseña</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirmar Contraseña" />
                            </div>



                            <div>
                                <div>
                                    <h5>2. Información del equipo</h5>
                                </div>
                                <div className="form-group">
                                    <label for="InputNombre">Nombre del equipo</label>
                                    <input type="email" class="form-control" id="InputNombre" aria-describedby="emailHelp" placeholder="Ingresa tu nombre" />
                                </div>
                                <div className="custom-file">
                                    <label class="custom-file-label" for="customFile">Elegir imagen</label>
                                    <input type="file" class="custom-file-input" id="customFile" />
                                </div>
                            </div>

                            <div>
                                <h5>3. Información del torneo</h5>
                                <div className="form-group">
                                    <label for="InputNombre">Torneo</label>
                                    <select class="custom-select">
                                        <option selected>- Elige torneo -</option>
                                        <option value="1">Dominio Estelar</option>
                                        <option value="2">Sunday Night</option>
                                        <option value="3">Saturday Morning</option>
                                        <option value="4">Friday Lights</option>
                                        <option value="5">Best of the Best</option>


                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="InputNombre">Rama</label>
                                    <select class="custom-select">
                                        <option selected>- Elige la rama -</option>
                                        <option value="1">Femenil</option>
                                        <option value="2">Mixto</option>
                                        <option value="3">Varonil</option>

                                    </select>
                                </div>

                                <div className="form-group">
                                    <label for="InputNombre">Categoría</label>
                                    <select class="custom-select">
                                        <option selected>- Elige la categoría -</option>
                                        <option value="1">Categoría A</option>
                                        <option value="2">Categoría B</option>
                                        <option value="3">Categoría C</option>

                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary">Enviar</button>

                            </div>

                        </form>


                    </div>
                    <div class="col"></div>
                </div>

            </div>

        );
    }
}

export default SignUp;