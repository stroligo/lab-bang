//_BASE.JS
//capturando todos os elementos de html
const gameScreen = document.getElementById("gameScreen");
const gameScore = document.getElementById("gameScore");
const playerName = document.getElementById("name");
const board = document.getElementById("board");
//adicionar o event listener do submit
addEventListener("submit", () => {
  const game = new Table("mesa1");
  // startScreen desapareça
  startScreen.classList.add("hide");
  // mostrar o gameScore
  gameScore.className = "show";
  game.renderDeck();
  settingUpGame(game);
});

function settingUpGame(game) {
  // capturar todas as cardsBack
  // adicionar a ela um eventlistener
  const allCardsBack = document.querySelectorAll(".cardBack");

  allCardsBack.forEach((cardBack) =>
    cardBack.addEventListener("click", (event) => game.flipCard(event))
  );
}