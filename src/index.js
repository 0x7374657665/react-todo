import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        new TodoModel("this"),
        new TodoModel("that"),
        new TodoModel("the other thing")
      ]
    };
  }

  toggleDone = todo => {
    const todoIndex = this.state.todos.indexOf(todo);
    const updatedTodo = todo.getToggledTodo();
    this.setState({
      todos: [
        ...this.state.todos.slice(0, todoIndex),
        updatedTodo,
        ...this.state.todos.slice(todoIndex + 1)
      ]
    });
  };

  render() {
    return (
      <div>
        <h1>TODO:</h1>
        <ul style={{ listStyle: "none" }}>
          {this.state.todos.map(todo => (
            <Todo todo={todo} checkHandler={this.toggleDone} key={todo.id} />
          ))}
        </ul>
      </div>
    );
  }
}

let _todoId = 0;
const generateTodoId = () => ++_todoId;
class TodoModel {
  constructor(text = "") {
    this.text = text;
    this.done = false;
    this.id = generateTodoId();
  }

  getToggledTodo() {
    const newTodo = new TodoModel(this.text);
    newTodo.done = !this.done;
    return newTodo;
  }
}

class Todo extends React.Component {
  render() {
    const { todo, checkHandler } = this.props;
    return (
      <li
        key={todo.id}
        style={
          todo.done
            ? {
                textDecoration: "line-through",
                color: "lightGray"
              }
            : { textDecoration: "none" }
        }
      >
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => checkHandler(todo)}
        />
        {todo.text}
      </li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
