import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { getCards, addCard } from "./modules/restdb";

export default function App() {
  const [cards, setCards] = useState([]);

  // "GET"
  useEffect(() => {
    getCards(setCards);
    // empty array to stop it from fetching continuously (infinite loop)
  }, []);

  function onFormSubmit(data) {
    console.log("form submitted", data);
    addCard(setCards, cards, data);
  }

  function onCardMove(_id, whereTo) {
    // todo: "PUT"
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

    // todo: "DELETE"
    setCards(nextCards);
  }

  return (
    <div className="App">
      <Nav />

      {cards.length === 0 && <h3>Loading</h3>}

      <Main
        onCardDelete={onCardDelete}
        onCardMove={onCardMove}
        onFormSubmit={onFormSubmit}
        cards={cards}
      />
    </div>
  );
}
