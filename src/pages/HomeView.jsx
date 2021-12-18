import React from 'react';
import { Container, Carousel, Row } from 'react-bootstrap';

const HomeView = ({ showCarrusel, showCarruselText, showProduct }) => (
  <Container>
    <Carousel>
      {showCarrusel}
    </Carousel>
    <Carousel cols={2} rows={1} gap={10} loop>
      {showCarruselText}
    </Carousel>
    <Row className="justify-content-md-center">
      {showProduct}
    </Row>
  </Container>
)

export default HomeView;