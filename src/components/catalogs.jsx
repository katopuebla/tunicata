import React, { useState, useEffect } from "react";
import { Adelita } from "../catalogs.json";

function Catalogs(props) {
  const [catalogs, setCatalogs] = useState([{}]);
  const catalog = props.onCatalogs;

  // ****** BEGINNING OF CHANGE ******
  useEffect(() => {
    // Should not ever set state during rendering, so do this in useEffect instead.
    switch (catalog) {
      case "Adelita":
        setCatalogs(Adelita);
      default:
        setCatalogs(Adelita);
    }
  }, []);
  // ****** END OF CHANGE ******

  const catalogos = catalogs.map((catalog, i) => {
    return (
      <div className="col md-4" key={i}>
        <div className="card">
          <div className="card-header">
            <h3>{catalog.title}</h3>
            {/*<span className="badge rounded-pill bg-danger ml-2">x</span>*/}
          </div>
          <div className="card-body">
            <img
              src={catalog.url}
              alt={catalog.title}
              width="250px"
              class="mx-auto d-block"
            />

            <p>{catalog.description}</p>
            <p>
              <mark>{catalog.price}</mark>
            </p>
          </div>
          {/*<div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}
              >
                Delete
              </button>
            </div>*/}
        </div>
      </div>
    );
  });

  return <div className="row mt-4">{catalogos}</div>;
}

export default Catalogs;
