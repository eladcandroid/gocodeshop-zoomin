import React from "react";
import { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  componentWillUnmount() {
    console.log("TODO - componentWillUnmount");
  }
  render() {
    const { id, title, completed, toggleCompleted } = this.props;

    return (
      <li
        onClick={() => toggleCompleted(id)}
        style={{ textDecoration: completed && "line-through" }}
      >
        {title}
      </li>
    );
  }
}

export default Todo;
