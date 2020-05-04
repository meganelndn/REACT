import React from "react";
import Button from "./Button";

export default function Card(props) {
  console.log(props);
  //callback function
  function onDelete() {
    props.onCardDelete(props.id);
  }
  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.color}</p>
      <Button />
      <button onClick={onDelete}>Delete Me</button>
      <button>Move to TODO</button>
      <button>Move to DOING</button>
      <button>Move to DONE</button>
    </li>
  );
}
