import React from "react";
import List from "./List";

export default function Main({ cards }) {
  console.log(cards);
  return (
    <main>
      <List cards={cards.filter((c) => c.list === "todo")} header="TODO" />
      <List cards={cards.filter((c) => c.list === "doing")} header="DOING" />
      <List cards={cards.filter((c) => c.list === "done")} header="DONE" />
    </main>
  );
}
