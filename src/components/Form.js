import React, { useState } from "react";
import styles from "./Form.module.css";

export default function Form(props) {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  function submit(evt) {
    evt.preventDefault();
    props.onFormSubmit({
      title: title,
      list: "todo",
      added: Date.now(),
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

  const inputStyle = {
    borderColor: title.length > 0 ? "green" : "red",
    borderWidth: "1px",
    borderStyle: "solid",
  };

  return (
    <form className={styles.cardForm} onSubmit={submit}>
      <label>
        Title
        <input
          style={inputStyle}
          type="text"
          onChange={titleChanged}
          name="title"
          value={title}
        />
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
      <input disabled={title.length === 0} type="submit" value="submit"></input>
    </form>
  );
}
