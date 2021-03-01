import React, { Component } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";

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
        <footer class="bg-warning text-center text-lg-start">
          <div className="text-center p-3">
            <h5>Tunicata Diseño</h5> Entregas de 1 a 2 días bajo pedido
            {" al  "}
            <FaPhone />
            <a href="tel:55-40803355"> (55) 40803355</a>
            {" por "}
            <FaWhatsapp />
            <a href="https://api.whatsapp.com/send?phone=5540803355">
              {"   "}
              (55) 40803355
            </a>
            {" ó al  "}
            <FaEnvelope />
            <a href="mailto:elcorreoquequieres@correo.com">
              {" "}
              email: correo@example.com
            </a>
          </div>
          <div> Siguenos en:</div>
        </footer>
      </div>
    );
  }
}

export default App;
