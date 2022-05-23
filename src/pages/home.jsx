import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
//import { storage } from "../firebase";
import { Image, Carousel } from 'react-bootstrap';

//import { Products } from "../catalogs.json";
// import Products from "../services/Products-service";
import Catalogs from "../services/Catalogs-service";
import InitialInfo from "../initial.json";

import HomeView from "./HomeView";
import CardMenu from "../components/CardMenu";
import { GeneralContext } from "../contexts/generalContext";
import BannerAnimation from '../components/bannerAnimation/bannerAnimation';
import { CatalogCarousel } from "./CatalogCarousel/CatalogCarousel";

const Home = () => {

  const history = useHistory();
  const carrusel = InitialInfo.carrusels;
  const carruselText = InitialInfo.carruselsText;
  const [catalogs, setCatalogs] = useState([]);
  const { isMobile } = useContext(GeneralContext);

  useEffect(() => {
    async function getCollection() {
      const data = await Catalogs.getDataById("Collection");
      setCatalogs(data.detail);
    }
    getCollection();
  }, []);

  const handleCatalogClick = (_catalogName =>
    history.push(`/catalogs/${_catalogName}/`)
  );

  const showCarrusel = carrusel.map((catalog, index) => {
    return (
      <Carousel.Item key={index} fluid>
            {isMobile ? (
              <Image className="d-block w-100" alt="slide" src={catalog.url} />
            ) : (
              <Image className="d-block w-100" alt="slide" src={catalog.url} style={{ width: '80%', height: 'auto' }} />
            )}
        { isMobile ? (<></>) : (
          <Carousel.Caption>
            <BannerAnimation description={catalog.description} />
          </Carousel.Caption>
        )}
      </Carousel.Item>)
  });

  const showCarruselText = carruselText.map((catalog, index) => {
    return (
      <Carousel.Item interval={5000} key={index}>
            <BannerAnimation description={catalog.description} />
        </Carousel.Item>)
  });

  const showCatalogs = catalogs && catalogs.map((item, index) => {

    return (<CardMenu item={item} key={index} onCatalogClick={handleCatalogClick} isMobile={isMobile} />)
  });

  const showCatalogsCarousel = catalogs && catalogs.map((item, index) => {

    return (<CatalogCarousel catalogId={item.name} key={index} />)
  });

  return <HomeView showCarrusel={showCarrusel} showCarruselText={showCarruselText} 
  showCatalogs={showCatalogs} showCatalogCarousel={showCatalogsCarousel} isMobile={isMobile} />

}

export default Home;
