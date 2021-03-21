import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const imageMain = "https://firebasestorage.googleapis.com/v0/b/tunicata-web.appspot.com/o/images%2FTunicata.jpg?alt=media&token=06ef0868-51b0-42b1-a7b9-1bf819e4b813"
// const logo = "https://firebasestorage.googleapis.com/v0/b/tunicata-web.appspot.com/o/images%2FTunicata_logo.png?alt=media&token=370fc1ea-7586-466e-b7b1-2345a9d69f26";

const Menu = () => (
    <React.Fragment>
        <Navbar bg="light" variant="dark">
            <LinkContainer to="/">
                <Navbar.Brand>
                    <img
                        alt="Tunicata"
                        src={imageMain}
                        width="120"
                        className="d-inline-block align-top"
                    />{" "}
                </Navbar.Brand>
            </LinkContainer>
        </Navbar>
        <Navbar className="bg-green" variant="light" expand="md">
            <LinkContainer to="/">
                <Navbar.Brand />
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link >Inicio</Nav.Link>
                    </LinkContainer>
                    <NavDropdown title="Catalogos" id="collasible-nav-dropdown">
                        <LinkContainer to="/catalogs/Adelita/">
                            <NavDropdown.Item>Adelita</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/catalogs/Pet_Lovers/">
                            <NavDropdown.Item>Pet Lovers</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <LinkContainer to="/productList/">
                        <Nav.Link>productList</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav>
                    <LinkContainer to="/about/">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </React.Fragment>
)

export default Menu;