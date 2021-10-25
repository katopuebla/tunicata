import React, { useState, useEffect, useContext } from "react";
import { Card, Accordion, Button, ListGroup, Modal } from "react-bootstrap";

import { ProductContext } from "../../contexts/productContext";
import Product from '../product/product';
import Products from "../../services/Products-service";
//import { Products } from "../../catalogs.json";

const ProductList = () => {
  const { productDetail, setProductDetail } = useContext( ProductContext );
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  //functions
  const handleClose = () => setShow(false);
  const handleShow = catalog => {
    setProductDetail(catalog);
    setShow(true);
  };

  async function fetchProducts() {
    const listData = [];
    const infoData = await Products.getAll();
    // filter only one field in Collections
    infoData.forEach( data => {
      const collections = data.detail;
      if ( collections )
        listData.push(collections);
    });
    setProducts(listData); 
   }

  useEffect( async () => {
     fetchProducts();
   }, []);

  const handleUrl = (_url) => {
    setUrlImage(_url);
  }

 const showProducts = products && products.map((item, index) => {
   const id = item[0].collection;
    return (
      <div>
        <Accordion.Item eventKey={"" + index}>
            <Accordion.Header>{id}</Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                {
                  item.map((detail, idx) => {
                    return (
                      <ListGroup.Item action key={idx}
                        onClick={() => { handleShow(detail); }} >
                        {detail.title}
                      </ListGroup.Item>
                    )
                  })
                }
              </ListGroup>
            </Accordion.Body>
        </Accordion.Item>
      </div>
    )
  });

  return (
    <>
      <Accordion defaultActiveKey="0">
        {showProducts}
      </Accordion>
      <Modal fluid show={show} onHide={handleClose}>
        <Product _catalogId={productDetail.collection} />
      </Modal>
    </>
  );
}

export default ProductList;
