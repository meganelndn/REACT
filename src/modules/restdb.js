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
  const setCards = JSON.stringify(data);

  fetch(endpoint, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apiKey": apiKey,
      "cache-control": "no-cache",
    },
    body: setCards,
  })
    .then((res) => res.json())
    .then((response) => callback(cards.concat(response)));
}
