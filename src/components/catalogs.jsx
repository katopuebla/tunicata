import React from "react";
import { Adelita } from "../catalogs.json";

function Catalogs() {
  this.state = { Adelita };

  const todos = this.state.Adelita.map((catalog, i) => {
    return (
      <div className="col md-4" key={i}>
        <div className="card">
          <div className="card-header">
            <h3>{catalog.title}</h3>
            <span className="badge rounded-pill bg-danger ml-2">
              x{/*todo.priority*/}
            </span>
          </div>
          <div className="card-body">
            <img
              src={catalog.url}
              alt="logo"
              width="350px"
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
}

export default Catalogs;
