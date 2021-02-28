import React, { Component } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import Header from "./components/header";

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
