import { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TodoDetails from "./pages/TodoDetails";

class App extends Component {
  state = {
    count: 0,
  };
  render() {
    console.log("LIFE-CYCLE: render()");
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/">Home</Link>
          <br />
          <Link to="/about">Go to about page</Link>
          <br />
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            +
          </button>
          {this.state.count}
          <br />
          <br />

          <div style={{ border: "1px solid black", padding: 20, margin: 20 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="todos/:id" element={<TodoDetails />} />
              <Route path="about" element={<About />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
