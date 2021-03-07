import React from "react";
import { Card, Modal, Row, Col, Table } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { Measure } from "../catalogs.json";

function Product({ _product }) {
  const productDetail = _product;
  const meaures = Measure;

  const customStyle = {
    sizeStyle: {
      border: "5px solid #d9d9d9",
      background: "#d9d9d9"
    },
    imgSize: {
      width: "100%",
      height: "22vh",
      objectFit: "cover"
    }
  };

  const measue = meaures.find(mesaure => mesaure.type === "Bones");

  const sizes = productDetail.sizes.map((item, index) => {
    return (
      <span key={index}>
        <span style={customStyle.sizeStyle}>{item.size}</span>
        {"  "}
      </span>
    );
  });

  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>{productDetail.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>
          <Card.Body>
            <Row>
              <Col xs={7}>
                <Card.Img src={productDetail.url} />
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
              <Col xs={5}>
                <Card.Img
                  src={productDetail.url}
                  bsPrefix
                  style={customStyle.imgSize}
                />
                <img
                  src={productDetail.imgSize.url}
                  style={customStyle.imgSize}
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
