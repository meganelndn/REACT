import React, { useState } from "react";

export default function Form(props) {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  function submit(evt) {
    evt.preventDefault();
    props.onFormSubmit({
      title: title,
      list: "todo",
      added: Date.now(),
      _id: Math.random(),
      color: color,
      assignedTp: ["jofh"],
    });
    // clean up form when submitted
    setTitle("");
    setColor("");
  }

  function titleChanged(e) {
    setTitle(e.target.value);
  }

  function colorChanged(e) {
    setColor(e.target.value);
  }

  return (
    <form onSubmit={submit}>
      <label>
        Title
        <input type="text" onChange={titleChanged} name="title" value={title} />
      </label>
      <label>
        Color
        <input
          type="color"
          onChange={colorChanged}
          name="color"
          value={color}
        />
      </label>
      <input type="submit" value="submit"></input>
    </form>
  );
}
