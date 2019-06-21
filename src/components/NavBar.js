import React from "react";
import "../components/components.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <Router>
        <nav id="tocho" className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <i className="fas fa-home" /> Home{" "}
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/equipos">
                Eres Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      </Router>
    );
  }
}

export default NavBar;
