//SELECTOR.JS
//capturando todos os elementos de html

const gameScreen = document.getElementById("gameScreen");
const gameScore = document.getElementById("gameScore");
const playerName = document.getElementById("name");
const board = document.getElementById("board");


//adicionar o event listener do submit
addEventListener("submit", () => {
  const game1 = new Game("game");
  //game1.renderDeck();
  settingUpGame(game1);

});

function settingUpGame(game) {
  // capturar todas as cardsBack
  // adicionar a ela um eventlistener
  document.querySelectorAll(".name")[0].innerText+="|"+document.getElementById("inputName1").value.split(" ")[0] 
  document.querySelectorAll(".name")[1].innerText+="|"+document.getElementById("inputName2").value.split(" ")[0] 
  //document.querySelectorAll(".name")[2].innerText+="|"+document.getElementById("inputName3").value.split(" ")[0]  
  //document.querySelectorAll(".name")[3].innerText+="|"+document.getElementById("inputName4").value.split(" ")[0] 
  document.getElementById("console").value += "Cartas Foram distribuidas\n"
  const card = document.querySelectorAll(".card");
  const beer = document.querySelectorAll(".beer")
  const bang = document.querySelectorAll(".bang")
  const deck = document.querySelectorAll("#deck");
  //deck.forEach(deck => deck.addEventListener("click", event => game.comprarDeck(event)));
 // card.forEach(card => card.addEventListener("click", event => game.turn(event)));
  beer.forEach(beer => beer.addEventListener("click", event => game.beer(event)));
 bang.forEach(bang => bang.addEventListener("click", event => game.bang(event)));
  
 }