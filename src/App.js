import { Component } from "react";
import { flushSync } from "react-dom";
import "./App.css";
import Counter from "./components/Counter";
import Todos from "./components/Todos/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Wash your dishes",
        completed: true,
      },
      {
        id: 2,
        title: "Throw the garbage",
        completed: false,
      },
    ],
  };

  newTodo = "";

  addTodo = () => {
    console.log("Add Todo Func", this.newTodo);
    // const newTodos = this.state.todos;
    // newTodos.push({
    //   id: this.state.todos.length,
    //   title: this.newTodo,
    //   completed: false,
    // });

    this.setState({
      todos: [
        {
          id: this.state.todos.length,
          title: this.newTodo,
          completed: false,
        },
        ...this.state.todos,
      ],
    });
  };

  handleChange = (e) => {
    this.newTodo = e.target.value;
  };

  toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Add a new todo"
        />
        <button onClick={this.addTodo}>Add todo</button>
        <Todos
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
