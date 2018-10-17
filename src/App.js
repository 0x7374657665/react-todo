import React from "react";
import Todo from "./components/Todo/Todo";
import { getArrayWithItemReplaced } from "./util/stateUtils";
import TodoInput from "./components/TodoInput";
import CompleteRatio from "./components/CompleteRatio";

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

  createTodo = newTodoText => {
    const newTodo = { id: "" + +new Date(), text: newTodoText, done: false };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  updateTodo = updatedTodo => {
    const todoIndex = this.state.todos.findIndex(t => t.id === updatedTodo.id);
    const updatedTodos = getArrayWithItemReplaced(
      this.state.todos,
      updatedTodo,
      todoIndex
    );
    this.setState({ todos: updatedTodos });
  };

  deleteTodo = targetTodo => {
    const { todos } = this.state;
    const todoIndex = todos.findIndex(t => t.id === targetTodo.id);
    const updatedTodos = [
      ...todos.slice(0, todoIndex),
      ...todos.slice(todoIndex + 1)
    ];
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <div>
        <h1 style={{ paddingBottom: 0, marginBottom: 0 }}>TODO:</h1>
        <CompleteRatio todos={this.state.todos} />
        <ul style={{ listStyle: "none" }}>
          {this.state.todos.map(todo => (
            <li key={todo.id}>
              <Todo
                todo={todo}
                update={this.updateTodo}
                remove={this.deleteTodo}
              />
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
