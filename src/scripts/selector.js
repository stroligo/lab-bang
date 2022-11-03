//SELECTOR.JS
//capturando todos os elementos de html

const gameScreen = document.getElementById("gameScreen");
const gameScore = document.getElementById("gameScore");
const playerName = document.getElementById("name");
const board = document.getElementById("board");


//adicionar o event listener do submit
addEventListener("submit", () => {
  const game1 = new Game("game");
  settingUpGame(game1);
});

function settingUpGame(game) {
  // capturar todas as cardsBack
  // adicionar a ela um eventlistener
  const card = document.querySelectorAll(".card");
  const beer = document.querySelectorAll(".beer")
  const bang = document.querySelectorAll(".bang")
  card.forEach(card => card.addEventListener("click", event => game.turn(event)));
  beer.forEach(beer => beer.addEventListener("click", event => game.beer(event)));
  bang.forEach(bang => bang.addEventListener("click", event => game.bang(event)));
 }