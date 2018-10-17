import React from "react";

const TodoControls = ({ edit }) => (
  <div style={{ fontSize: "0.75em", color: "royalblue", marginLeft: "1.75em" }}>
    <span onClick={edit} style={{ cursor: "pointer" }}>
      [edit]
    </span>
  </div>
);

export default TodoControls;
