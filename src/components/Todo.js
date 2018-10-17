import React from "react";
import TodoControls from "./TodoControls";

export default class Todo extends React.Component {
  render() {
    const { todo, checkHandler } = this.props;
    return (
      <div style={{ marginBottom: "0.5em" }}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => checkHandler(todo)}
        />
        <span
          style={
            todo.done
              ? {
                  textDecoration: "line-through",
                  color: "lightGray"
                }
              : { textDecoration: "none" }
          }
        >
          {todo.text}
        </span>
        <TodoControls
          edit={() => console.log(`editing '${this.props.todo.text}'`)}
        />
      </div>
    );
  }
}
