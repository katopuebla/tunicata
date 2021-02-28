import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// subComponents
import Header from "./components/header";
import Home from "./components/home";
import Catalogs from "./components/catalogs";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
