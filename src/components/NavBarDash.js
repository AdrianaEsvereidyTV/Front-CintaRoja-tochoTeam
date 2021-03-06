import React from "react";
import "../components/components.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import firebaseApp from "../config/firebase";

class NavBarDash extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    firebaseApp
      .auth()
      .signOut()
      .then(function() {
        console.log("Saliendo...");
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <Router>
        <nav id="tocho" class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Hola Omar
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <button type="submit" className="btn btn-primary">
                  <Link class="dropdown-item" onClick={this.logout} to="/">
                    Cerrar sesión
                  </Link>
                  </button>
                </div>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/equipos">
                  Equipos <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/calendario">
                  Calendario
                </Link>
              </li>
            </ul>
          </div>
          <a class="navbar-brand" href="#">
            <img
              src="https://uc.uxpin.com/files/651295/644903/image-3ef990.png"
              className="logoNavBar"
            />
          </a>
        </nav>
      </Router>
    );
  }
}

export default NavBarDash;
