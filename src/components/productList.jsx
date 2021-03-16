import React, { useState, useEffect } from "react";
import { Card, Modal, Row, Col, ListGroup } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { Products } from "../catalogs.json";

function ProductList() {
  const [product, setProduct] = useState([{}]);
  };

  // ****** BEGINNING OF CHANGE ******
  useEffect(() => {
    console.log("Catalogs", Products);
    setProduct[Products.collection];
  }, []);
  // ****** END OF CHANGE ******

  const showProducts = product.map(item => {
    console.log("item", item);
    return <ListGroup.Item>{}</ListGroup.Item>;
  });

  function handleUrl(_url) {
    setUrlImage(_url);
  }

  return (
    <div>
      <ListGroup>{showProducts}</ListGroup>
    </div>
  );
}

export default ProductList;
