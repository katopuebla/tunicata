import React, { Component } from "react";

//import { Tunicata_logo } from "../images/Tunicata_logo.png";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      responsible: "",
      description: "",
      priority: "low"
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        <nav className="navbar bg-primary navbar-light">
          <a class="navbar-brand" href="#" className="text-white">
          Tunicata
            <1--<img
              src={Tunicata_logo}
              className="img-fluid"
              width="100"
              height="50"
              alt="Tunicata"
            />-->
            <span className="badge rounded-pill bg-light text-dark ml-2" />
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center" />

            <div className="col-md-8">
              <div className="row mt-4" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
