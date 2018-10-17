import React from "react";
import Todo from "./components/Todo";
import { getArrayWithItemReplaced } from "./util/stateUtils";
import TodoInput from "./components/TodoInput";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: "1", text: "this", done: false },
        { id: "2", text: "that", done: false },
        { id: "3", text: "the other thing", done: true }
      ]
    };
  }

  toggleDone = todo => {
    const todoIndex = this.state.todos.findIndex(t => t.id === todo.id);
    const updatedTodo = { ...todo, done: !todo.done };
    const updatedTodos = getArrayWithItemReplaced(
      this.state.todos,
      updatedTodo,
      todoIndex
    );
    this.setState({ todos: updatedTodos });
  };

  createTodo = newTodoText => {
    const newTodo = { id: "" + +new Date(), text: newTodoText, done: false };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div>
        <h1>TODO:</h1>
        <ul style={{ listStyle: "none" }}>
          {this.state.todos.map(todo => (
            <li key={todo.id}>
              <Todo todo={todo} checkHandler={this.toggleDone} />
            </li>
          ))}
          <li style={{ marginTop: "0.5em" }}>
            <TodoInput onInput={this.createTodo} />
          </li>
        </ul>
      </div>
    );
  }
}
