import React from "react";

function addCatalog() {
  this.state = {
    title: "",
    responsible: "",
    description: "",
    priority: "low"
  };

  this.handleInput = this.handleInput.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  const handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddTodo(this.state);
  };

  return (
    <div className="card">
      <form className="card-body" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="title"
            onChange={this.handleInput}
            className="form-control"
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="reposonsable"
            onChange={this.handleInput}
            className="form-control"
            placeholder="Responsable"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="description"
            onChange={this.handleInput}
            className="form-control"
            placeholder="Description"
          />
        </div>
        <div className="form-group">
          <select
            name="priority"
            id="priority"
            onChange={this.handleInput}
            className="form-control"
          >
            <option>low</option>
            <option>medium</option>
            <option>high</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          save
        </button>
      </form>
    </div>
  );
}

export default addCatalog;
