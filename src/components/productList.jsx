import React, { useState, useEffect } from "react";
import { Card, Modal, Row, Col, ListGroup } from "react-bootstrap";
import NumberFormat from "react-number-format";
import Catalogs from "../catalogs.json";

function ProductList() {
  const [product, setProduct] = useState(Products);

  const customStyle = {
    sizeStyle: {
      border: "5px solid #d9d9d9",
      background: "#d9d9d9"
    },
    img: {
      width: "90%",
      height: "10vh",
      objectFit: "cover"
    },
    imgSize: {
      width: "100%",
      height: "10vh",
      objectFit: "cover"
    }
  };

  // ****** BEGINNING OF CHANGE ******
  useEffect(() => {
    console.log("Catalogs", Catalogs);
    setProduct[Catalogs];
  }, []);
  // ****** END OF CHANGE ******

  const products = product.map(item => {
    console.log("item", item);
    return <ListGroup.Item>{}</ListGroup.Item>;
  });

  function handleUrl(_url) {
    setUrlImage(_url);
  }

  return (
    <div>
      <ListGroup>{products}</ListGroup>
    </div>
  );
}

export default ProductList;
