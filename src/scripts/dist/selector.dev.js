"use strict";

//SELECTOR.JS
//capturando todos os elementos de html
var gameScreen = document.getElementById("gameScreen");
var gameScore = document.getElementById("gameScore");
var playerName = document.getElementById("name");
var board = document.getElementById("board"); //adicionar o event listener do submit

addEventListener("submit", function () {
  var game1 = new Game("game");
  game1.renderDeck();
  settingUpGame(game1);
});

function settingUpGame(game) {
  // capturar todas as cardsBack
  // adicionar a ela um eventlistener
  document.querySelectorAll(".name")[0].innerText += "" + document.getElementById("inputName1").value.split(" ")[0];
  document.querySelectorAll(".name")[1].innerText += "" + document.getElementById("inputName2").value.split(" ")[0];
  document.querySelectorAll(".name")[2].innerText += "" + document.getElementById("inputName3").value.split(" ")[0];
  document.querySelectorAll(".name")[3].innerText += "" + document.getElementById("inputName4").value.split(" ")[0];
  document.getElementById("console").value += "Cartas Foram distribuidas\n";
  var card = document.querySelectorAll(".card");
  var beer = document.querySelectorAll(".beer");
  var bang = document.querySelectorAll(".bang");
  var deck = document.querySelectorAll("#deck");
  deck.forEach(function (deck) {
    return deck.addEventListener("click", function (event) {
      return game.comprarDeck(event);
    });
  });
  card.forEach(function (card) {
    return card.addEventListener("click", function (event) {
      return game.turn(event);
    });
  });
  beer.forEach(function (beer) {
    return beer.addEventListener("click", function (event) {
      return game.beer(event);
    });
  });
  bang.forEach(function (bang) {
    return bang.addEventListener("click", function (event) {
      return game.bang(event);
    });
  });
}