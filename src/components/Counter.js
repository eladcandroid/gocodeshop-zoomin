import { Component } from "react";

export default class Counter extends Component {
  state = { count: 10, title: "BLah blah" };
  render() {
    const { count } = this.state;
    return (
      <>
        <button
          onClick={() => {
            this.setState({ count: count - 1 });
          }}
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          +
        </button>
      </>
    );
  }
}
