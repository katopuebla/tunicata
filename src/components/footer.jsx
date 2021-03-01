import React from "react";
import { FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <container>
      <footer className="text-center text-lg-start bg-orange">
        <div className="text-center ">
          Entregas de 1 a 2 días bajo pedido,
          {" llámanos al  "}
          <FaPhone />
          <a href="tel:22-24890610"> (22) 2 489 0610</a>
          {" ó por mensaje al "}
          <FaWhatsapp />
          <a href="https://api.whatsapp.com/send?phone=522224890610">
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
    </container>
  );
}

export default Footer;
