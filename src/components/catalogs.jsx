import React, { useState, useEffect } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NumberFormat from "react-number-format";
import { Adelita, Pet_Lovers } from "../catalogs.json";
import Product from "./product";

function Catalogs() {
  const [catalogs, setCatalogs] = useState([{}]);
  let { catalogId } = useParams();
  //Modal states
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
    switch (catalogId) {
      case "Adelita":
        setCatalogs(Adelita);
        break;
      case "Pet_Lovers":
        setCatalogs(Pet_Lovers);
        break;
      default:
        setCatalogs(Adelita);
    }
  }, []);
  // ****** END OF CHANGE ******

  const showCatalogos = catalogs.map((catalog, i) => {
    return (
      <div className="col xs={6}" key={i}>
        <Card>
          <Button
            variant="link"
            type="button"
            onClick={() => {
              handleShow(catalog);
            }}
          >
            <Card.Img ariant="top" src={catalog.url} />
          </Button>
          <Card.Body>
            <Card.Title>{catalog.title}</Card.Title>
            {/*<Card.Text>
              {catalog.description}

              <mark>{catalog.price}</mark>
            </Card.Text>*/}
            <b>
              <NumberFormat
                thousandSeparator={true}
                prefix={"$ "}
                value={catalog.price}
                displayType={"text"}
                suffix={" MXN"}
                style={{ color: "purple" }}
              />
            </b>
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
      </div>
    );
  });

  return (
    <div>
      <div className="row md-6">{showCatalogos}</div>
      <Modal fluid show={show} onHide={handleClose}>
        <Product _product={productDetail} />
      </Modal>
    </div>
  );
}

export default Catalogs;
