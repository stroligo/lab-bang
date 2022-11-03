//SELECTOR.JS
//capturando todos os elementos de html

const gameScreen = document.getElementById("gameScreen");
const gameScore = document.getElementById("gameScore");
const playerName = document.getElementById("name");
const board = document.getElementById("board");

//adicionar o event listener do submit
addEventListener("submit", () => {
  const game1 = new Game("game");
  // startScreen desapareça

  //startScreen.classList.add("hide");
  // mostrar o gameScores

  //gameScore.className = "show";
  //game1.renderDeck();
  settingUpGame(game1);
});

function settingUpGame(game) {
  // capturar todas as cardsBack
  // adicionar a ela um eventlistener
  const card = document.querySelectorAll(".card");
  
  card.forEach(card => card.addEventListener("click", event => game.turn(event)));
}
