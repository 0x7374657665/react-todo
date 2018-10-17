import React from "react";

const TodoControls = ({ edit, editEnabled = true, remove }) => (
  <div
    style={{
      fontSize: "0.75em",
      marginLeft: "1.75em"
    }}
  >
    <span
      onClick={() => {
        if (editEnabled) edit();
      }}
      style={
        editEnabled
          ? { cursor: "pointer", color: "royalblue" }
          : { cursor: "default", color: "lightgray" }
      }
    >
      [edit]
    </span>{" "}
    <span style={{ cursor: "pointer", color: "royalblue" }} onClick={remove}>
      [delete]
    </span>
  </div>
);

export default TodoControls;
