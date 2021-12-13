import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
//import { storage } from "../firebase";
import { Container, Row, Image, Carousel, Card, Button, Col } from 'react-bootstrap';

//import { Products } from "../catalogs.json";
import Products from "../services/Products-service";
import { Carrusels } from "../initial.json";

import HomeView from "./HomeView";
import CardMenu from "../components/CardMenu";
import { GeneralContext } from "../contexts/generalContext";

const Home = () => {

  const history = useHistory();
  const carrusel = Carrusels;
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
        <Row className="justify-content-md-center">
          <Col xs lg={8} >
            <img className="d-block w-100" alt="slide" thumbnail src={catalog.url} />
          </Col>
        </Row>
        <Carousel.Caption>
          <h3>{catalog.title}</h3>
          <p>{catalog.description}</p>
        </Carousel.Caption>
      </Carousel.Item>)
  });

  const showProduct = products && products.map((item, index) => {
    const product = item;
    return (<CardMenu item={product} key={index} onCatalogClick={handleCatalogClick} isMobile={isMobile} />)
  });

  return <HomeView showCarrusel={showCarrusel} showProduct={showProduct} />

}

export default Home;
