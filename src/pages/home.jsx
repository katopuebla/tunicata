import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
//import { storage } from "../firebase";

import { Products } from "../catalogs.json";
import { Carrusels } from "../initial.json";

import HomeView from "./HomeView";
import CardMenu from "../components/CardMenu";
import { Image, Carousel } from 'react-bootstrap';

const Home = () => {

  const history = useHistory();
  const carrusel = Carrusels;
  const product = Products;

  const showCarrusel = carrusel.map((catalog, index) => {
    return (
      <Carousel.Item key={index}>
        <Image className="d-block w-100" alt="slide" width="55px" thumbnail src={catalog.url} />
        <Carousel.Caption>
          <h3>{catalog.title}</h3>
          <p>{catalog.description}</p>
        </Carousel.Caption>
      </Carousel.Item>)
  });

  const handleCatalogClick = (_catalogName => history.push(`/catalogs/${_catalogName}/`));
  const showProduct = product.map((item, index) =>
    <CardMenu item={item} onCatalogClick={handleCatalogClick} key={index} />
  );

  return <HomeView showCarrusel={showCarrusel} showProduct={showProduct} />
}

export default Home;
