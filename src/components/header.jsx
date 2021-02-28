import React, { Component } from "react";
import { storage } from "../firebase";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      logo: "",
      responsible: "",
      description: "",
      priority: "low"
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    storage
      .ref("images")
      .child("Tunicata_logo.png")
      .getDownloadURL()
      .then(urlResult => {
        this.setState({ logo: urlResult });
      });
  }

  handleInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
  }

  render() {
    return (
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
              <a class="nav-link" href="#">
                Inicio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Catalogos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
