import React from "react";
import { Card, Modal, Row, Col } from 'react-bootstrap';
//import NumberFormat from 'react-number-format';

function Product({ _product }) {
  console.log("_product", _product);
  const productDetail = _product;

  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>{productDetail.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>
          <Card.Body>
            <Row>
              <Col xs={8}>
                <Card.Img src={productDetail.url} />
                {/*<Card.Title>{productDetail.title}</Card.Title>*/}
                <Card.Text>
                  Diseño: {productDetail.type}
                  <blockquote>
                    {productDetail.description}
                    <br />
                    {/*<NumberFormat
                      thousandSeparator={true}
                      prefix={"$"}
                      style="color : 'purple'"
                    >*/}
                      {productDetail.price}
                    {/*</NumberFormat>*/
                  </blockquote>
                  Talla
                  <blockquote>{productDetail.size}</blockquote>
                  {/*<mark>{productDetail.price}</mark>*/}
                </Card.Text>
              </Col>
                <Table striped bordered hover>
  <thead>
    <tr>
      <th>MEDIDAS PULGADAS</th>
      <th>ANCHO</th>
      <th>LARGO</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>productDetail.size[0].size</td>
      <td>productDetail.size[0].width</td>
      <td>productDetail.size[0].height</td>
    </tr>
    <tr>
      <td></td>
      <td>'+/- 1cm</td>
      <td>'+/- 1cm</td>
      <td>@fat</td>
    </tr>
  </tbody>
</Table>
              <Col />
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
