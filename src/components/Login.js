import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col -md-6 col-sm-8 mx-auto">
            <div className="mt -4">
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Correo electrónico</label>
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
                  <label for="exampleInputPassword1">Password</label>
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
                <p class="text-center">
                  <a href="/register">Regístrate aquí </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
