import React from "react";

const TodoControls = ({ edit, editEnabled = true }) => (
  <div
    style={{
      fontSize: "0.75em",
      color: editEnabled ? "royalblue" : "lightgray",
      marginLeft: "1.75em"
    }}
  >
    <span
      onClick={() => {
        if (editEnabled) edit();
      }}
      style={{ cursor: "pointer" }}
    >
      [edit]
    </span>
  </div>
);

export default TodoControls;
