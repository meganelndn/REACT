const endpoint =
  "https://frontendspring20-34e5.restdb.io/rest/trello-with-react";
const apiKey = "5e957564436377171a0c232c";

// "GET"
export function getCards(callback) {
  fetch(endpoint, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apiKey": apiKey,
      "cache-control": "no-cache",
    },
  })
    .then((e) => e.json())
    .then((data) => callback(data));
}

// "POST"
export function addCard(callback, cards, data) {
  const postData = JSON.stringify(data);

  fetch(endpoint, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apiKey": apiKey,
      "cache-control": "no-cache",
    },
    body: postData,
  })
    .then((res) => res.json())
    .then((response) => callback(cards.concat(response)));
}

function moveCard(data, id) {
  let postData = JSON.stringify(data);

  fetch(endpoint + "/" + id, {
    method: "put",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apiKey": apiKey,
      "cache-control": "no-cache",
    },
    body: postData,
  })
    .then((d) => d.json())
    .then((t) => console.log(t));
}

function deleteCard(id) {
  fetch(endpoint + "/" + id, {
    method: "delete",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apiKey": apiKey,
      "cache-control": "no-cache",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// new variable for improved legibility of RestDB functions in App.js
export const RestDB = {
  getCards,
  addCard,
  moveCard,
  deleteCard,
};
