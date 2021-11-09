import { Button } from "@mui/material";
import React from "react";
import Todos from "../components/Todos/Todos";

export default class Home extends React.Component {
  constructor(props) {
    console.log("LIFE-CYCLE: constructor");

    super(props);
  }

  fetchTodos = async () => {
    try {
      this.setState({ loading: true, error: false });
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const todos = await res.json();
      this.setState({ todos, loading: false });
    } catch (e) {
      this.setState({ error: true, loading: false });
    }
  };

  componentDidMount() {
    console.log("LIFE-CYCLE: componentDidMount");

    this.fetchTodos();
  }

  state = {
    todos: [],
    loading: false,
    error: false,
    show: true,
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
      <>
        <Button
          color="primary"
          variant="contained"
          onClick={() => this.setState({ show: false })}
        >
          Hide todos
        </Button>
        <br />
        <br />

        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Add a new todo"
        />
        <button onClick={this.addTodo}>Add todo</button>
        {this.state.loading ? (
          <div>טוען...</div>
        ) : this.state.error ? (
          <>
            <div>לא ניתן לטעון נתונים מהשרת. נסה בזמן מאוחר יותר</div>
            <button onClick={this.fetchTodos}>נסה שנית</button>
          </>
        ) : (
          this.state.show && (
            <Todos
              todos={this.state.todos}
              toggleCompleted={this.toggleCompleted}
            />
          )
        )}
      </>
    );
  }
}
