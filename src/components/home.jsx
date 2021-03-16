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
import { Products } from "../catalogs.json";
import { Carrusels } from "../initial.json";

function Home() {
  const history = useHistory();

  const [carrusel, setCarrusel] = useState([{}]);
  const [product, setProduct] = useState([{}]);
  // ****** BEGINNING OF CHANGE ******
  useEffect(() => {
    setCarrusel(Carrusels);
    setProduct(Product.collection);
  }, []);
  // ****** END OF CHANGE ******
  const showCarrusel = carrusel.map((catalog, index) => {
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

  const products = product.map((item, index) => {
    console.log(item);
    return (
      <Col>
        <Card md-4 key={index}>
          <Button variant="link" type="button" onClick={handleAdelitaClick}>
            <Card.Img ariant="top" src={item.detail[0].url} />
          </Button>
          <Card.Body>
            <Card.Title>Adelita</Card.Title>
          </Card.Body>
        </Card>
      </Col>
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
      <Carousel>{showCarrusel}</Carousel>
      <Row>
        <Col>
          <Card md-4 key={1}>
            <Button variant="link" type="button" onClick={handleAdelitaClick}>
              <Card.Img ariant="top" src={Adelita[0].url} />
            </Button>
            <Card.Body>
              <Card.Title>Adelita</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card md-4 key={2}>
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
