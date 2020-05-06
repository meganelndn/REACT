import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { RestDB } from "./modules/restdb";

export default function App() {
  const [cards, setCards] = useState([]);

  // "GET"
  useEffect(() => {
    RestDB.getCards(setCards);
    // empty array to stop it from fetching continuously (infinite loop)
  }, []);

  function onFormSubmit(data) {
    console.log("form submitted", data);
    // "POST"
    RestDB.addCard(setCards, cards, data);
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
    // "PUT"
    RestDB.moveCard(
      {
        list: whereTo,
      },
      _id
    );
    setCards(nextCards);
  }

  function onCardDelete(_id) {
    console.log(_id);
    const nextCards = cards.filter((card) => card._id !== _id);

    // "DELETE"
    RestDB.deleteCard(_id);
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
