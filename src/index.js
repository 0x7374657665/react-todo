import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["this", "that", "the other thing"]
    };
  }

  render() {
    const todos = [];
    for (let todo of this.state.todos) {
      const todoComponent = <li>{todo}</li>;
      todos.push(todoComponent);
    }
    return (
      <div>
        <h1>TODO:</h1>
        <ul>{todos}</ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
