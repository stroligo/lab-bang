//SELECTOR.JS
//capturando todos os elementos de html
// @ts-check
const gameScreen = document.getElementById("gameScreen");
const gameScore = document.getElementById("gameScore");
const playerName = document.getElementById("name");
const board = document.getElementById("board");

//adicionar o event listener do submit
addEventListener("submit", () => {
  const game1 = new Game("game");
  // startScreen desapareça
  // @ts-ignore
  startScreen.classList.add("hide");
  // mostrar o gameScores
  // @ts-ignore
  gameScore.className = "show";
  game1.renderDeck();
  settingUpGame(game1);
});

function settingUpGame(game) {
  // capturar todas as cardsBack
  // adicionar a ela um eventlistener
  const allCardsBack = document.querySelectorAll(".cardFront");

  allCardsBack.forEach(cardBack => cardBack.addEventListener("click", event => game.flipCard(event)));
}
