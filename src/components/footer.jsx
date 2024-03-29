import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
// import { Row, Col } from 'react-bootstrap';

/* var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
};
 */
const Footer = () => (
  <React.Fragment>
    <div className="footer text-center text-lg-start bg-green ">
      <div className="text-center ">
       {/*} Entregas de 1 a 2 días bajo pedido,
          {" llámanos al  "}
        <FaPhone />
        <a href="tel:22-24890610"> (22) 2 489 0610</a>*/}
        {" contactanos al "}
        <FaWhatsapp />
        <a href="https://api.whatsapp.com/send?phone=522213243992">
          {"   "}
            (22)1 324 3992
          </a>
        {" ó también por correo al  "}
        <FaEnvelope />
        <a href="mailto:tunicatadisenos@gmail.com">
          {"  "}
            tunicataguaf@gmail.com
          </a>
      </div>
      <div> Siguenos en:</div>
    </div>
  </React.Fragment>
)

export default Footer;
