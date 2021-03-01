import React, { Component } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import Header from "./components/header";
import FloatingMessage from "./components/floatingMessage";
import Footer from "./components/footer";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <FloatingMessage />
        <Footer />
      </div>
    );
  }
}

export default App;
