import React from "react";
import TodoControls from "./TodoControls";
import DisplayTodo from "./DisplayTodo";
import EditTodo from "./EditTodo";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  toggleEditMode = () => this.setState({ editing: !this.state.editing });

  editingCompleted = newText => {
    const updatedTodo = { ...this.props.todo, text: newText };
    this.props.update(updatedTodo);
    this.toggleEditMode();
  };

  toggleDone = () => {
    const updatedTodo = { ...this.props.todo, done: !this.props.todo.done };
    this.props.update(updatedTodo);
  };

  render() {
    const { todo } = this.props;
    return (
      <div style={{ marginBottom: "0.5em" }}>
        {this.state.editing ? (
          <EditTodo text={todo.text} onFinishEdit={this.editingCompleted} />
        ) : (
          <div>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={this.toggleDone}
            />
            <DisplayTodo done={todo.done} text={todo.text} />
          </div>
        )}
        <TodoControls edit={this.toggleEditMode} editEnabled={!todo.done} />
      </div>
    );
  }
}
