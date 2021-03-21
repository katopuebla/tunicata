import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import Header from "./components/header";
import FloatingMessage from "./components/floatingMessage";
import Footer from "./components/footer";

const App = () => (
  <div>
    <Header />
    <FloatingMessage />
    <Footer />
  </div>
)

export default App
