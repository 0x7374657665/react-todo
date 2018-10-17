import React from "react";

const TodoControls = ({ edit }) => (
  <div>
    <span onClick={edit} style={{ cursor: "pointer" }}>
      [edit]
    </span>
  </div>
);

export default TodoControls;
