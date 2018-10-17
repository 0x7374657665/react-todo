import React from "react";

const DisplayTodo = ({ done, text }) => (
  <span
    style={
      done
        ? {
            textDecoration: "line-through",
            color: "lightgray"
          }
        : { textDecoration: "none" }
    }
  >
    {text}
  </span>
);

export default DisplayTodo;
