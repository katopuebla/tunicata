import React, { Component } from "react";
//import { storage } from "../firebase";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./home";
import Catalogs from "./catalogs";
import About from "./about";

// Páginas internas
function linkHome() {
  return <Home />;
}

function linkCatalogs_Adelita() {
  return <Catalogs />;
}

function linkCatalogs_PetLover() {
  return <Catalogs onCatalogs="Pet_Lovers" />;
}

function linkAbout() {
  return <About />;
}

function linkLogin() {
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
                <a class="nav-link" href="/catalogs_Adelita/">
                  Catalogos Adelita
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/catalogs_PetLover/">
                  Catalogos Pet Lovers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about/">
                  About
                </a>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={linkHome} />
          <Route path="/catalogs_Adelita/" component={linkCatalogs_Adelita} />
          <Route path="/catalogs_PetLover/" component={linkCatalogs_PetLover} />
          <Route path="/about/" component={linkAbout} />
          {/*<Route path="/" exact component={Login} />*/}
        </div>
      </Router>
    );
  }
}

export default Header;
