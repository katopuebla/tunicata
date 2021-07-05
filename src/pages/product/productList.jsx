import React, { useState, useEffect } from "react";
import { Card, Accordion, Button, ListGroup, Modal } from "react-bootstrap";

import AddProduct from './addProduct';
import { db } from "../../firebase";
//import { Products } from "../../catalogs.json";

const ProductList = () => {
  const [product, setProduct] = useState();
  const [productDetail, setProductDetail] = useState({});
  const [show, setShow] = useState(false);
  const products = db.collection('Products');

  //functions
  const handleClose = () => setShow(false);
  const handleShow = catalog => {
    setProductDetail(catalog);
    setShow(true);
  };
  // ****** BEGINNING OF CHANGE ******
  /*useEffect(() => {
    const products = db.collection('Products');
    console.log(products)
    setProduct[products];
  }, []);*/
  // ****** END OF CHANGE ******

  const CollectionDetail = (props) => {
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

  const showProducts = products.snapshotChanges().map(actions => {
    return actions.map(a => {
      //const data = a.payload.doc.data() as Race;
      data.id = a.payload.doc.id;
    console.log("item", data);
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
  });

  const handleUrl = (_url) => {
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
