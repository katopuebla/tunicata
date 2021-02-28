import React, { Component } from "react";
//import { storage } from "../firebase";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./home";

// Páginas internas
function Home() {
  return <Home />;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Login() {
  return <h2>Login</h2>;
}

class Header extends Component {
  constructor() {
    super();
    this.state = {
      logo:
        "https://firebasestorage.googleapis.com/v0/b/tunicata-web.appspot.com/o/images%2FTunicata_logo.png?alt=media&token=370fc1ea-7586-466e-b7b1-2345a9d69f26"
    };
    /*
    storage
      .ref("images")
      .child("Tunicata_logo.png")
      .getDownloadURL()
      .then(urlResult => {
        this.setState({ logo: urlResult });
      });*/
  }
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
            <a class="navbar-brand" href="#">
              <img
                src={this.state.logo}
                className="img-fluid"
                width="25"
                alt="Tunicata"
              />
            </a>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about/">
                  Catalogos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/users/">
                  About
                </a>
              </li>
            </ul>
          </nav>
          // Anclado de rutas al contenido
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
          {/*<Route path="/" exact component={Login} />*/}
        </div>
      </Router>
    );
  }
}

export default Header;
