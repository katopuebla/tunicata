import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FaAngleRight, FaWhatsapp } from 'react-icons/fa';
import { Container, Carousel, Image, Row, Col, Card, Button } from "react-bootstrap";
//import { storage } from "../firebase";
import { Carrusels, Adelita, Pet_Lovers } from "../catalogs.json";

function Home() {
  const imageMain =
    "https://firebasestorage.googleapis.com/v0/b/tunicata-web.appspot.com/o/images%2FTunicata.jpg?alt=media&token=06ef0868-51b0-42b1-a7b9-1bf819e4b813";
    const history = useHistory();
  
  const [carrusel, setCarrusel] = useState([{}]);
// ****** BEGINNING OF CHANGE ******
  useEffect(() => {
        setCarrusel(Carrusels);
  }, []);
  // ****** END OF CHANGE ******
  const catalogos = carrusel.map((catalog) => {
    return (
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={catalog.url}
          alt="slide"
          width="55px"
          thumbnail
        />
        <Carousel.Caption>
          <h3>{catalog.title}</h3>
          <p>{catalog.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  function handleAdelitaClick() {
    history.push("/catalogs/Adelita/");
  }
  
  return (
    <Container>
       {/*<Image
          src={imageMain}
          alt="slide"
         thumbnail
        />*/}
      <Carousel>
        {catalogos}
      </Carousel>
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
      <Row>
      <Col md-6 >
        <Card style={{ width: "10rem" }}>
        <Button variant="link" type="button" onClick={handleAdelitaClick}>
          <Card.Img ariant="top" src={Adelita[0].url} />
          </Button>
          <Card.Body>
            <Card.Title>Adelita</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col md-6 >
        <Card style={{ width: "10rem" }}>
        <Button variant="link" type="button" onClick={handleAdelitaClick}>
          <Card.Img ariant="top" src={Pet_Lovers[0].url} />
          </Button>
          <Card.Body>
            <Card.Title>Pet Lovers</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      </Row>
    </Container>
  );
}

export default Home;
