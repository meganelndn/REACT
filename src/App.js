import React, { useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";

export default function App() {
  const [cards, setCards] = useState([
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
  ]);

  function onFormSubmit(data) {
    console.log("form submitted", data);
    setCards(
      //.concat => creates a new array, a copy (.push)
      cards.concat({
        title: "OMG did that just happen?",
        list: "todo",
        added: Date.now(),
        id: Math.random(),
        color: "lightblue",
        assignedTo: ["jofh"],
      })
    );
  }

  function onCardMove(data) {
    console.log(data);
  }

  function onCardDelete(id) {
    console.log(id);

    const nextCards = cards.filter((card) => card.id !== id);
    setCards(nextCards);
  }

  return (
    <div className="App">
      <Nav />

      {/* <button
        onClick={() =>
          setCards(
            //.concat => creates a new array, a copy (.push)
            cards.concat({
              title: "OMG did that just happen?",
              list: "todo",
              added: Date.now(),
              id: Math.random(),
              color: "lightblue",
              assignedTo: ["jofh"],
            })
          )
        }
      >
        Awesome
      </button> */}

      <Main
        onCardDelete={onCardDelete}
        onCardMove={onCardMove}
        onFormSubmit={onFormSubmit}
        cards={cards}
      />
    </div>
  );
}
