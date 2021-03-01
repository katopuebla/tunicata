import React, { Component } from "react";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
//import { storage } from "../firebase";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./home";
import Catalogs from "./catalogs";
import About from "./about";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      logo:
        "https://firebasestorage.googleapis.com/v0/b/tunicata-web.appspot.com/o/images%2FTunicata_logo.png?alt=media&token=370fc1ea-7586-466e-b7b1-2345a9d69f26",
      imageMain:
        "https://firebasestorage.googleapis.com/v0/b/tunicata-web.appspot.com/o/images%2FTunicata.jpg?alt=media&token=06ef0868-51b0-42b1-a7b9-1bf819e4b813"
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
      <Container>
        <Navbar bg="light" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt="Tunicata"
              src={this.state.imageMain}
              width="120"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
        </Navbar>
        <Router>
          <Navbar variant="light">
            <Navbar.Brand href="#home">
              <img
                src={this.state.logo}
                width="35"
                className="d-inline-block align-top"
                alt="Tunicata"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <NavDropdown title="Catalogos" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/catalogs/Adelita/">
                    Adelita
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/catalogs/Pet_Lovers/">
                    Pet Lovers
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="/about/">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact component={Home} />
          <Route path="/catalogs/Adelita/">
            <Catalogs name="Adelita" />
          </Route>
          <Route path="/catalogs/Pet_Lovers/">
            <Catalogs name="Pet_Lovers" />
          </Route>
          <Route path="/about/">
            <About />
          </Route>
          {/*<Route path="/" exact component={Login} />*/}
        </Router>
      </Container>
    );
  }
}

export default Header;
