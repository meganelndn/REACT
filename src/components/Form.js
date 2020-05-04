import React from "react";
import Button from "./Button";

export default function Form(props) {
  function submit(evt) {
    evt.preventDefault();
    props.onFormSubmit("hi mom");
  }

  return (
    <form onSubmit={submit}>
      <input />
      <Button />
    </form>
  );
}
