import React from "react";

export default function Job(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.salary}</h2>
    </div>
  );
}
