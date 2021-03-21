import React from 'react';
import { Container, Carousel, Row } from 'react-bootstrap';

const HomeView = ({ showCarrusel, showProduct }) => (
  <Container>
    <Carousel>
      {showCarrusel}
    </Carousel>
    <Row className="justify-content-md-center">
      {showProduct}
    </Row>
  </Container>
)

export default HomeView;