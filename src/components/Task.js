import React from "react";

export const Task = (props) => {
  return (
    <div>
      <h3
        style={{
          color: props.taskDone ? "green" : "red",
          backgroundColor: "lightgreen",
        }}
      >
        {props.k + 1}. {props.task}
      </h3>
      <button
        onClick={() => props.completeTask(props.id)}
        style={{
          background: props.taskDone && "transparent",
          border: props.taskDone && "none",
          fontSize: props.taskDone && 0,
        }}
      >
        Complete
      </button>
      <button onClick={() => props.handeldelete(props.id)}>X</button>
    </div>
  );
};

// export default Task;
