import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./Todo.css";

class Todo extends Component {
  componentWillUnmount() {
    // console.log("TODO - componentWillUnmount");
  }
  render() {
    const { id, title, completed, toggleCompleted } = this.props;

    return (
      <li
        // onClick={() => toggleCompleted(id)}
        style={{ textDecoration: completed && "line-through" }}
      >
        <Link to={`/todos/${id}`}>{title}</Link>
      </li>
    );
  }
}

export default Todo;
