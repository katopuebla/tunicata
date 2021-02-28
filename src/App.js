import React, { Component } from "react";
import "./style.css";

import { todos } from "./data.json";

// subComponents
import Header from "./components/header";
import Home from "./components/home";
import TodoForm from "./components/TodoForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    // this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  /*
  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  removeTodo(index) {
    if (confirm("Are you sure you want to delete it?")) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index;
        })
      });
    }
  }
*/
  render() {
    /*  const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col md-4" key={i}>
          <div className="card">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge rounded-pill bg-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p>
                <mark>{todo.responsable}</mark>
              </p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    });*/

    return (
      <div>
        <Header />
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <Home />
            </div>

            <div className="col-md-8">
              <div className="row mt-4">holas </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
