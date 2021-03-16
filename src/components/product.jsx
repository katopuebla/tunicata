import React, { useState } from "react";
import { Card, Modal, Row, Col, Button, Alert } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { Products } from "../catalogs.json";

function Product({ _product, _catalogId }) {
  const productDetail = _product;
  const [product, setProduct] = useState(productDetail);
  const [currentProduct, setCurrentProduct] = useState(product);
  const [urlImage, setUrlImage] = useState(productDetail.url);
  const [isEdit, setIsEdit] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);
  const [showEdit, setShowEdit] = useState(true);

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

  const sizes = productDetail.sizes.map((item, index) => {
    return (
      <span key={index}>
        <span style={customStyle.sizeStyle}>{item.size}</span>
        {"  "}
      </span>
    );
  });

  function handleSelectImageUrl(_url) {
    setUrlImage(_url);
  }

  const set = name => {
    return ({ target: { value } }) => {
      setProduct(oldValues => ({...oldValues, [name]: value }));
    }
  };

  function renderDetail() {
    if(isEdit) {
      return (
        <div>
          Diseño: <input type="text" id="type" defaultValue={product.type} onChange={set('type')} />
          <br />
          <input type="text" id="description" defaultValue={product.description} onChange={set('description')}  />
          <br />
          <mark>
            <b><input type="text" id="price"  defaultValue={product.price} onChange={set('price')} /></b>
          </mark>
        </div>
      );
    } else {
      return (
        <span>
          Diseño: {product.type}
          <br />
          {productDetail.description}
          <br />
          <mark>
            <b>
              <NumberFormat
                thousandSeparator={true}
                prefix={"$ "}
                value={productDetail.price}
                displayType={"text"}
                suffix={" MXN"}
                style={{ color: "purple" }}
              />
            </b>
          </mark>
        </span>
      );
    }
  }

  const renderAlert = () => {
    return <div>
      <Alert show={showAlert || false} variant='success' onClose={() => { 
        setShowAlert(false); 
        setShowEdit(true);
        }} dismissible>
        Se guardó existosamente!!
      </Alert>
      <Alert show={showAlertError || false} variant='danger' onClose={() => { 
        setShowAlertError(false); 
        setShowEdit(true);
        }} dismissible>
        Error en el guardado!!
      </Alert>
    </div>;
  }

  function renderFooter() {
    if(isEdit) {
      return (
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>Cerrar</Button>
          <Button variant="primary" type="submit">Guardar</Button>
        </Modal.Footer>
      );
    } else {
      return (
        <Modal.Footer>
       </Modal.Footer>
      );
    }
  }

  function renderEdit() {
    if(showEdit) {
      return (
        <Button className="justify-content-end" onClick={handleEdit}>Edit</Button>
      );
    } else {
      return (
        <span>
        </span>
      );
    }
  }

  function handleEdit() {
    setIsEdit(true);
    setShowEdit(false);
  }

  function handleCloseEdit() {
    setIsEdit(false);
    setShowEdit(true);
    setProduct(currentProduct);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
   /*fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });*/
    console.log('product',product)
    let saveProduct = Products.find(prod => prod.collection == _catalogId);
    saveProduct.detail.map( (det) => {
      if(det.title == product.title) {
        console.log('det',det,'product', product);
        det = product;
        console.log('det',det,'product', product);
      }
    });
    Products.push(saveProduct);
    setCurrentProduct(product);
    setIsEdit(false);
    setShowAlert(true);
    setShowAlertError(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
            <Modal.Title>{productDetail.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {renderAlert()}
        <div className="d-flex justify-content-end">
          {renderEdit()}
        </div>
          <Card fluid>
            <Card.Body fluid>
              <Row>
                <Col xs={8} md={8}>
                  <Card.Img src={urlImage} />
                  {/*<Card.Title>{productDetail.title}</Card.Title>*/}
                  <Card.Text>
                    {renderDetail()}
                    <br />
                    <b>Talla</b>
                    <blockquote>{sizes}</blockquote>
                  </Card.Text>
                </Col>
                <Col xs={4} md={4}>
                  <Card.Img
                    src={productDetail.url}
                    style={customStyle.img}
                    onClick={() => handleSelectImageUrl(productDetail.url)}
                  />
                  <Card.Img
                    src={productDetail.imgSize.url}
                    style={customStyle.imgSize}
                    onClick={() => handleSelectImageUrl(productDetail.imgSize.url)}
                  />
                </Col>
              </Row>
            </Card.Body>
            {renderFooter()}
          </Card>
        </Modal.Body>
      </form>
    </div>
  );
}

export default Product;
