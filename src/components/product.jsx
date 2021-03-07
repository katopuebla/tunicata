import React from "react";
import { Container, Card, Modal } from "react-bootstrap";

function Product({ _product }) {
  console.log("_product", _product);
  const productDetail = _product;

  return (
    <div>
      {/*<Modal.Header closeButton>
        <Modal.Title>{productDetail.title}</Modal.Title>
      </Modal.Header>*/}
      <Modal.Body>
        <Card>
          <Card.Img style={{ width: "18rem" }} src={productDetail.url} />
          <Card.Body>
            <Card.Title>{productDetail.title}</Card.Title>
            <Card.Text>
              Diseño: {productDetail.type}
              {productDetail.description}
              {productDetail.price}
              Talla 
              {productDetail.size}

              {/*<mark>{productDetail.price}</mark>*/}
            </Card.Text>
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
