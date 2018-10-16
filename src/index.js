import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 0, text: "this", done: false },
        { id: 1, text: "that", done: false },
        { id: 2, text: "the other thing", done: true }
      ]
    };
  }

  toggleDone = event => {
    //make a defensive (shallow) copy of this.state.todos
    const todos = [...this.state.todos];

    //find out where in the todos array the target is
    const targetId = event.target.parentElement.getAttribute("data-key");
    const todoIndex = todos.findIndex(t => t.id == targetId); // 3 == '3'

    //create a new todo object with the new state values
    const todo = { ...todos[todoIndex] };
    todo.done = !todo.done;

    //update our copy of the todos array with the updated todo
    todos[todoIndex] = todo;

    console.log(todos);

    //call setState to update the component state and notify
    //effected components to rerender
    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <h1>TODO:</h1>
        <ul style={{ listStyle: "none" }}>
          {this.state.todos.map(todo => (
            <li key={todo.id} data-key={todo.id}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={this.toggleDone}
              />
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
