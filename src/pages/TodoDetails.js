import React from "react";
import { withRouter } from "../utils/WithRouter";

class TodoDetails extends React.Component {
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/todos/${this.props.params.id}`)
      .then((res) => res.json())
      .then((todo) => console.log(todo));
  }
  render() {
    // console.log(this.props.params.id);
    return <div>TODO DETAILS: {this.props.params.id}</div>;
  }
}

export default withRouter(TodoDetails);
