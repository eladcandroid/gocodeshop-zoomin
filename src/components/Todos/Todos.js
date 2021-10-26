import { Component } from "react";
import Todo from "../Todo/Todo";

class Todos extends Component {
  render() {
    const { todos, toggleCompleted } = this.props;
    return (
      <ul>
        {todos.map(({ id, title, completed }) => (
          <Todo
            id={id}
            title={title}
            completed={completed}
            key={id}
            toggleCompleted={toggleCompleted}
          ></Todo>
        ))}
      </ul>
    );
  }
}

export default Todos;
