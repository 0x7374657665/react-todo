import React from "react";
import TodoControls from "./TodoControls";

export default class Todo extends React.Component {
  render() {
    const { todo, checkHandler } = this.props;
    return (
      <div style={{ display: "block" }}>
        <div
          style={{
            display: "inline-block",
            width: "20em",
            float: "left",
            clear: "left"
          }}
        >
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
        </div>
        <TodoControls
          edit={() => console.log(`editing '${this.props.todo.text}'`)}
          style={{ display: "inline-block", float: "left" }}
        />
      </div>
    );
  }
}
