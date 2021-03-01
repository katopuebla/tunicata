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
        <footer class="bg-info text-center text-lg-start text-white">
          <div className="text-center p-3">
            <h5>Tunicata Diseño</h5> Entregas de 1 a 2 días bajo pedido,
            {" llámanos al  "}
            <FaPhone />
            <a href="tel:22-24890610"> (22) 2 489 0610</a>
            {" ó por mensaje al "}
            <FaWhatsapp />
            <a href="https://api.whatsapp.com/send?phone=2224890610">
              {"   "}
              (22)2 48 90610
            </a>
            {" también por correo al  "}
            <FaEnvelope />
            <a href="mailto:tunicatadisenos@gmail.com">
              {"  "}
             tunicatadisenos@gmail.com 
            </a>
          </div>
          <div> Siguenos en:</div>
        </footer>
      </div>
    );
  }
}

export default App;
