import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
//import { storage } from "../firebase";
import { Container, Row, Image, Carousel, Alert, Button, Col } from 'react-bootstrap';

//import { Products } from "../catalogs.json";
import Products from "../services/Products-service";
import { Carrusels, CarruselsText } from "../initial.json";

import HomeView from "./HomeView";
import CardMenu from "../components/CardMenu";
import { GeneralContext } from "../contexts/generalContext";

const Home = () => {

  const history = useHistory();
  const carrusel = Carrusels;
  const carruselText = CarruselsText;
  const [products, setProducts] = useState([]);
  const { isMobile } = useContext(GeneralContext);

  async function getFisrtItemCollection() {
    const list = [];
    const infoData = await Products.getAll();
    // filter only one field in Collections
    infoData.forEach(data => {
      const collections = data.detail;
      if (collections)
        list.push(collections[0]);
    })
    setProducts(list);
  }

  useEffect(async () => {
    getFisrtItemCollection();
  }, []);

  const handleCatalogClick = (_catalogName =>
    history.push(`/catalogs/${_catalogName}/`)
  );

  const showCarrusel = carrusel.map((catalog, index) => {
    return (
      <Carousel.Item key={index}>
        <Row className="justify-content-lg-center">
          <Col xs lg={10} >
            <img className="d-block w-100" alt="slide" width="100%" thumbnail src={catalog.url} />
          </Col>
        </Row>
        {/*<Carousel.Caption>          
          <p>{catalog.description}</p>
        </Carousel.Caption>
        <Alert key={index} variant={'light'}>{catalog.description}</Alert>*/}
      </Carousel.Item>)
  });
  const showCarruselText = carruselText.map((catalog, index) => {
    return (
      <Carousel.Item interval={5000} key={index}>
        <Row className="justify-content-lg-center">
          <Col xs md={12} >
            <Alert key={index} variant={'light'}><h10>{catalog.description}</h10></Alert>
          </Col>
        </Row>
      </Carousel.Item>)
  });

  const showProduct = products && products.map((item, index) => {
    const product = item;
    return (<CardMenu item={product} key={index} onCatalogClick={handleCatalogClick} isMobile={isMobile} />)
  });

  return <HomeView showCarrusel={showCarrusel} showCarruselText={showCarruselText} showProduct={showProduct} />

}

export default Home;
