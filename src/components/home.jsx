import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  Carousel,
  Image,
  Row,
  Col,
  Card,
  Button
} from "react-bootstrap";
//import { storage } from "../firebase";
import { Carrusels, Adelita, Pet_Lovers } from "../catalogs.json";

function Home() {
  const history = useHistory();

  const [carrusel, setCarrusel] = useState([{}]);
  // ****** BEGINNING OF CHANGE ******
  useEffect(() => {
    setCarrusel(Carrusels);
  }, []);
  // ****** END OF CHANGE ******
  const catalogos = carrusel.map((catalog, index) => {
    return (
      <Carousel.Item key={index}>
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

  function handlePerLoverClick() {
    history.push("/catalogs/Pet_Lovers/");
  }

  return (
    <Container>
      <Carousel>{catalogos}</Carousel>
      {/*<div>
        <p>Esta página está diseñada para mostrar los catalogos</p>
        <blockquote className="blockquote">
          <p>
            Esta página está diseñada para mostrar los catalogos de temparada y
            distintos productos para su interes.
          </p>
        </blockquote>
      </div>*/}
      <Row>
        <Col>
          <Card style={{ width: "10rem" }} key={1}>
            <Button variant="link" type="button" onClick={handleAdelitaClick}>
              <Card.Img ariant="top" src={Adelita[0].url} />
            </Button>
            <Card.Body>
              <Card.Title>Adelita</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "10rem" }} key={2}>
            <Button variant="link" type="button" onClick={handlePerLoverClick}>
              <Card.Img ariant="top" src={Pet_Lovers[0].url} />
            </Button>
            <Card.Body>
              <Card.Title>Can&Michi</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
