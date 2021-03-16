import React, { useState, useEffect } from "react";
import { Card, Accordion, Button, ListGroup, Modal } from "react-bootstrap";

import AddProduct from './addProduct';

import { Products } from "../catalogs.json";

function ProductList() {
  const [product, setProduct] = useState(Products);
  const [productDetail, setProductDetail] = useState({});
  const [show, setShow] = useState(false);

  //functions
  const handleClose = () => setShow(false);
  const handleShow = catalog => {
    setProductDetail(catalog);
    setShow(true);
  };
  // ****** BEGINNING OF CHANGE ******
  useEffect(() => {
    setProduct[Products];
  }, []);
  // ****** END OF CHANGE ******

  function CollectionDetail(props) {
    const list = props.list;
    const showList = list.detail.map( (item, idx) => {
      return <ListGroup.Item action key={idx}
              onClick={() => {
                handleShow(item);
              }} >
        {item.title}
      </ListGroup.Item>;
    })
    
    return ( <div>
      {showList}
    </div>)
  }

  const showProducts = product.map((item, index) => {
    console.log("item", item, 'index', index);
    return (
      <Card key={index}>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={index}>
            {item.collection}
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={index}>
            <Card.Body>
              <ListGroup>
                <CollectionDetail list={item}/>
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
    );
  });

  function handleUrl(_url) {
    setUrlImage(_url);
  }

  return (
    <div>
      <Accordion defaultActiveKey="0">
        {showProducts}
      </Accordion>
      <Modal fluid show={show} onHide={handleClose}>
        <AddProduct _product={productDetail} />
  </Modal>
    </div>
  );
}

export default ProductList;
