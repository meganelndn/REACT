import React from "react";
import Button from "./Button";

export default function Card(props) {
  console.log(props);

  //callback function
  function onDelete() {
    props.onCardDelete(props._id);
  }

  function onMove(where) {
    props.onCardMove(props._id, where);
  }

  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.color}</p>
      <Button />
      <button onClick={onDelete}>Delete Me</button>
      <button onClick={() => onMove("todo")}>Move to TODO</button>
      <button onClick={() => onMove("doing")}>Move to DOING</button>
      <button onClick={() => onMove("done")}>Move to DONE</button>
    </li>
  );
}
