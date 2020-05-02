import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function KanbanApp() {
  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
  );
}

function Nav() {
  return <nav>Nav</nav>;
}

function Main() {
  return (
    <main>
      <List header="TODO" />
      <List header="DOING" />
      <List header="DONE" />
    </main>
  );
}

function List(props) {
  console.log(props);
  return (
    <section>
      <h2>{props.header}</h2>
      <ul>
        <Card />
        <Card />
      </ul>
      <Form />
    </section>
  );
}

function Card() {
  return (
    <li>
      <h3>Header</h3>
      <Button />
    </li>
  );
}

function Button() {
  return <button>Click Me</button>;
}

function Form() {
  return (
    <form>
      <input />
      <Button />
    </form>
  );
}

ReactDOM.render(<KanbanApp />, document.getElementById("root"));
