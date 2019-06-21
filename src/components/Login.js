import React from "react";
import "../App.css";
import "./components.css";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import firebase from "firebase";
import firebaseApp from "../config/firebase";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loginGoogle = this.loginGoogle.bind(this);
    //Se almacenan valores en variables de estado
    this.state = {
      email: "",
      password: ""
    };
  }
  // Ingresa el usuario
  /* Cuando el usuario ya ha hecho su registro anteriormente solo debe ingresar su
correo y contraseña */
  login(e) {
    e.preventDefault();
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  }

  loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebaseApp
      .auth()
      .signInWithPopup(provider)
      .then()
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleChange(e) {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Router>
        <NavBar />
        <div className="container-fluid my-4">
          <div className="row">
            <div className="col -md-4 col-sm-6 mx-auto">
              <div className="mt-4">
                <div className="mt-2">
                  <img
                    src="https://uc.uxpin.com/files/651295/644903/image-3ef990.png"
                    className="mx-auto d-block img-fluid"
                  />
                </div>
                <h5 className="title">Iniciar sesión</h5>
                <form>
                  <div className="form-group">
                    <label id="text" for="exampleInputEmail1">
                      Correo electrónico
                    </label>
                    <input
                      value={this.state.email}
                      onChange={this.handleChange}
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      id="inputEmail"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label id="text" for="exampleInputPassword1">
                      Password
                    </label>
                    <input
                      value={this.state.password}
                      onChange={this.handleChange}
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      id="inputPassword"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={this.login}
                    className="btn btn-primary"
                  >
                    Iniciar sesión
                  </button>
                  <p className="text-center">
                    <Link to="/Form">Regístrate aquí </Link>
                  </p>
                </form>
                <p className="mt-4 text-center">
                  <button
                    variant="contained"
                    onClick={this.loginGoogle}
                    className="btn btn-danger"
                    type="submit"
                  >
                    <i className="fab fa-google" />
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

// componentDidMount() {
//   axios.get(`${HOST}/Login`).then((response) => {
//     console.log(response);
//   });
// }

export default Login;
