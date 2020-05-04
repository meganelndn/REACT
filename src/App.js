import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";

export default function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://frontendspring20-34e5.restdb.io/rest/trello-with-react", {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apiKey": "5e957564436377171a0c232c",
        "cache-control": "no-cache",
      },
    })
      .then((e) => e.json())
      .then((data) => setCards(data));
    // empty array to stop it from fetching coninuously (infinite loop)
  }, []);

  function onFormSubmit(data) {
    console.log("form submitted", data);
    // setting the state for
    setCards(cards.concat(data));
  }

  function onCardMove(_id, whereTo) {
    console.log(_id, whereTo);

    const nextCards = cards.map((card) => {
      if (card._id === _id) {
        console.log("match");
        card.list = whereTo;
      }
      return card;
    });
    setCards(nextCards);
  }

  function onCardDelete(_id) {
    console.log(_id);

    const nextCards = cards.filter((card) => card._id !== _id);
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
