import React from 'react';
import { Container, Carousel, Row } from 'react-bootstrap';

const HomeView = ({ showCarrusel, showCarruselText, showCatalogs, showCatalogCarousel, isMobile}) => (
  <>
  <Container className='wrapper'>
    <Carousel fluid>
      {showCarrusel}
    </Carousel>
    {isMobile ? (
    <Carousel fluid>
      {showCarruselText}
    </Carousel>
    ) : ( <></> )}
    <Row className="justify-content-lg-center" xs={2} md={4} lg={6}>
      {showCatalogs}
    </Row>
    <Row>
      {showCatalogCarousel}
    </Row>
  </Container>
  </>
)

export default HomeView;