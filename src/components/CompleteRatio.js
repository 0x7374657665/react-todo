import React from "react";

const CompleteRatio = ({ todos }) => {
  const total = todos.length;
  const complete = todos.filter(t => t.done).length;

  return total > 0 ? (
    <small>
      {total === complete ? "All done!" : `Completed: ${complete}/${total}`}
    </small>
  ) : null;
};

export default CompleteRatio;
