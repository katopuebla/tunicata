import React, { useState } from "react";
import { Card, Modal, Row, Col, Table } from "react-bootstrap";
import NumberFormat from "react-number-format";

function Product({ _product }) {
  const productDetail = _product;
  const [urlImage, setUrlImage] = useState(productDetail.url);

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

  function handleUrl(_url) {
    setUrlImage(_url);
  }

  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>{productDetail.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card fluid>
          <Card.Body fluid>
            <Row>
              <Col xs={8} md={8}>
                <Card.Img src={urlImage} />
                {/*<Card.Title>{productDetail.title}</Card.Title>*/}
                <Card.Text>
                  <b>Diseño:</b> {productDetail.type}
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
                  <br />
                  <b>Talla</b>
                  <blockquote>{sizes}</blockquote>
                  {/*<mark>{productDetail.price}</mark>*/}
                </Card.Text>
              </Col>
              <Col xs={4} md={4}>
                <Card.Img
                  src={productDetail.url}
                  style={customStyle.img}
                  onClick={() => handleUrl(productDetail.url)}
                />
                <Card.Img
                  src={productDetail.imgSize.url}
                  style={customStyle.imgSize}
                  onClick={() => handleUrl(productDetail.imgSize.url)}
                />
              </Col>
            </Row>
          </Card.Body>
          {/*<div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}
              >
                Delete
              </button>
            </div>*/}
        </Card>
      </Modal.Body>
    </div>
  );
}

export default Product;
