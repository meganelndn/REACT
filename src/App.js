import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";

export default function App() {
  const cards = [
    {
      title: "Make it dynamic",
      list: "todo",
      added: 23485949,
      id: 1,
      color: "lightsalmon",
      assignedTo: ["jofh"],
    },
    {
      title: "Make it dynamic",
      list: "todo",
      added: 45825949,
      id: 2,
      color: "lightcoral",
      assignedTo: ["jofh"],
    },
  ];

  return (
    <div className="App">
      <Nav />
      <Main cards={cards} />
    </div>
  );
}
