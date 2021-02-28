import React, { useState } from "react";
import { Container, Carousel, Jumbotron, Image } from "react-bootstrap";
//import { storage } from "../firebase";
import { Carrusel } from "../catalogs.json";

function Home() {
  const imageMain =
    "https://firebasestorage.googleapis.com/v0/b/tunicata-web.appspot.com/o/images%2FTunicata.jpg?alt=media&token=06ef0868-51b0-42b1-a7b9-1bf819e4b813";
  const [carrusel, setCarrusel] = useState([{}]);

  const catalogos = Carrusel.map((catalog, i) => {
    return (
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={catalog.url} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  });
  return (
    <Container>
      {catalogos}
      <Jumbotron>
        <Image
          src={imageMain}
          alt="logo"
          width="350px"
          className="mx-auto d-block"
        />
      </Jumbotron>

      <div>
        <p>Esta página está diseñada para mostrar los catalogos</p>
        <blockquote className="blockquote">
          <p>
            Esta página está diseñada para mostrar los catalogos de temparada y
            distintos productos para su interes.
          </p>
          <footer className="blockquote-footer">
            entregas de 1 a 2 días bajo pedido.
          </footer>
        </blockquote>
      </div>
    </Container>
  );
}

export default Home;
