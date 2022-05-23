import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";

import Slider from "react-slick";

import Products from "../../services/Products-service";
import CardCatalog from "../../components/CardCatalog";
import { ProductContext } from "../../contexts/productContext";

export const CatalogCarousel = ({ catalogId }) => {
  const [catalogs, setCatalogs] = useState([]);
  const { productDetail, setProductDetail } = useContext( ProductContext );
  const history = useHistory();

  useEffect(() => {
    async function fetchProducts() {
      const listData = [];
      const infoData = await Products.getProductById(catalogId);
      // filter only one field in Collections
      infoData && infoData.detail.forEach(data => {
        const collections = data;
        if (collections)
          listData.push(collections);
      });
      setCatalogs(listData);
    }
    fetchProducts();
  }, [catalogId]);

  const handleShowCatalog = (catalog) => {
    setProductDetail(catalog);
    history.push(`/product/${catalogId}/${catalog.title}`)
  };

  const showCatalogos = catalogs && catalogs.map((catalog, i) => {
    return (
      <div key={i}>
        <br />
        <CardCatalog catalog={catalog} onShowCatalog={handleShowCatalog} 
        productDetail={productDetail} imageHeight={'150'} key={i} />
      </div>
    );
  }
  );

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
  };

  return (
    <>
    <br/>
    <br/>
      <h2>{catalogId}</h2>
      <br/>
      <Slider {...settings}>
        {showCatalogos}
      </Slider>
    </>
  );
}
