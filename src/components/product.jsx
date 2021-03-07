import React from "react";
import { Card, Modal, Row, Col, Table } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { Measure } from "../catalogs.json";

function Product({ _product }) {
  const productDetail = _product;

  const customStyle = {
    tableStyle: {
      borderRadius: 3,
      fontSize: "xx-small",
      marginTop: 1,
      letterSpacing: 3,
      padding: 4,
      fontWeight: "bold"
    },
    sizeStyle: {
      border: "6px solid #d9d9d9",
      background: "#d9d9d9"
    }
  };

  const measue = Measure.findIndex( mesaure => mesaure.type === 'Bones');

  const sizes = productDetail.sizes.map((item, index) => {
    return (
      <span>
        <span style={customStyle.sizeStyle}>{item.size}</span>
        {"  "}
      </span>
    );
  });

  return (
    <div>
      <Modal.Header closeButton>
        {/*<Modal.Title>{productDetail.title}</Modal.Title>*/}
      </Modal.Header>
      <Modal.Body>
        <Card>
          <Card.Body>
            <Row>
              <Col xs={8}>
                <Card.Img src={productDetail.url} />
                {/*<Card.Title>{productDetail.title}</Card.Title>*/}
                <Card.Text>
                  <b>Diseño:</b> {productDetail.type}
                  <blockquote>
                    {productDetail.description}
                    <br />
                    <mark>
                      <b>
                        <NumberFormat
                          thousandSeparator={true}
                          prefix={"$"}
                          value={productDetail.price}
                          displayType={"text"}
                          style={{ color: "purple" }}
                        />
                      </b>
                    </mark>
                  </blockquote>
                  Talla
                  <blockquote>{sizes}</blockquote>
                  {/*<mark>{productDetail.price}</mark>*/}
                </Card.Text>
              </Col>
              <Col xs={4} size="sm">
                <Card.Img src={productDetail.url} />
                <Card.Img src={measue.url} />
                {/*<Table responsive="sm" style={customStyle.tableStyle} size="sm">
                  <thead>
                    <tr>
                      <th>MEDIDAS</th>
                      <th>ANCHO</th>
                      <th>LARGO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{productDetail.sizes[0].size}</td>
                      <td>{productDetail.sizes[0].width}</td>
                      <td>{productDetail.sizes[0].height}</td>
                    </tr>
                    <tr>
                      <td />
                      <td>'+/- 1cm</td>
                      <td>'+/- 1cm</td>
                    </tr>
                  </tbody>
                </Table>*/}
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
