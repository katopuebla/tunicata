import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Adelita, Pet_Lovers } from "../catalogs.json";

function Catalogs({ name }) {
  const [catalogs, setCatalogs] = useState([{}]);
  const catalog = name;

  // ****** BEGINNING OF CHANGE ******
  useEffect(() => {
    // Should not ever set state during rendering, so do this in useEffect instead.

    console.log(catalog);
    switch (catalog) {
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

  const catalogos = catalogs.map((catalog, i) => {
    return (
      <div className="col md-4" key={i}>
        <Card style={{ width: "15rem" }}>
          <Card.Img ariant="top" src={catalog.url} />
          <Card.Body>
            <Card.Title>{catalog.title}</Card.Title>
            <Card.Text>
              {catalog.description}

              <mark>{catalog.price}</mark>
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
      </div>
    );
  });

  return <div className="row mt-4">{catalogos}</div>;
}

export default Catalogs;
