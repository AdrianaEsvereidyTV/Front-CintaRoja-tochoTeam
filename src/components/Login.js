import React from "react";
import "../App.css";
import './components.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <Router>
        <div className="container my-4">
        <div className="row">
          <div className="col -md-4 col-sm-6 mx-auto">
            <div className="mt-4">
               <div className="mt-2">
                  <img src="https://uc.uxpin.com/files/651295/644903/image-3ef990.png" className="mx-auto d-block img-fluid"/>
               </div>
              <h5 className="title">Iniciar sesión</h5>
              <form>
                <div className="form-group">
                  <label id="text" for="exampleInputEmail1">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="form-group">
                  <label id="text" for="exampleInputPassword1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Iniciar sesión
                </button>
                <p className="text-center">
                  <Link to="/Form">Regístrate aquí </Link>
                </p>
              </form>
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
