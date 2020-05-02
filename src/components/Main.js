import React from "react";
import List from "./List";

export default function Main() {
  return (
    <main>
      <List header="TODO" />
      <List header="DOING" />
      <List header="DONE" />
    </main>
  );
}
