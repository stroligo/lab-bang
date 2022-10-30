"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
// CLASSE
var MemoryGame = /*#__PURE__*/function () {
  function MemoryGame(player, points) {
    _classCallCheck(this, MemoryGame);
    this.player = player;
    this.points = points;
    var carta1 = new deck(1, 1, "./assets/img/harmonia.svg", "xerife");
    var carta2 = new deck(2, 2, "./assets/img/poder.svg", "renegado");
    var carta3 = new deck(3, 3, "./assets/img/projetar.svg", "foradalei");
    var carta4 = new deck(4, 3, "./assets/img/refletir.svg", "foradalei");
    this.deck = [carta1, carta2, carta3, carta4];
    if (inputName5.value) {
      var carta5 = new deck(5, 4, "./assets/img/harmonia.svg", "vice");
      this.deck.push(carta5);
    }
    if (inputName6.value) {
      var carta6 = new deck(6, 3, "./assets/img/poder.svg", "foradalei");
      this.deck.push(carta6);
    }
    if (inputName7.value) {
      var carta7 = new deck(7, 4, "./assets/img/projetar.svg", "vice");
      this.deck.push(carta7);
    }
    this.verso = "./assets/img/fe.svg";
    var pointsHTML = document.getElementById("points");
    pointsHTML.innerText = this.points; // setando o numero de tentativos no meu html
    playerName.innerText = this.player; // setando o nome do jogador no meu html
  }
  _createClass(MemoryGame, [{
    key: "renderDeck",
    value: function renderDeck() {
      var _this = this;
      console.log("randomizar o deck ->> EMBARALHAR -> shufle");
      this.deck.sort(function () {
        return Math.random() - 0.5;
      });

      //capturar o board
      var board = document.getElementById("board");
      console.log("iterar pela array do deck e criar as minhas cartas viradas para baixo");
      this.deck.forEach(function (element) {
        var imgBack = document.createElement("img"); // <img />
        imgBack.id = element.id;
        imgBack.src = _this.verso; // <img src="./assets/fe.svg" />
        imgBack.alt = "carta virada";
        imgBack.className = "show cardBack";
        board.appendChild(imgBack);
      });
    }
  }, {
    key: "flipCard",
    value: function flipCard(event) {
      var idCarta = event.currentTarget["id"] * 1;
      console.log(event);
      if (document.getElementById(idCarta).classList.contains("turn", "selecionado")) {
        console.log("Carta já foi selecionada");
      } else {
        document.getElementById(idCarta).src = this.deck.find(function (element) {
          return element.id == idCarta;
        }).source;
        document.getElementById(idCarta).alt = this.deck.find(function (element) {
          return element.id == idCarta;
        }).alt;
        document.getElementById(idCarta).classList.add("selecionado", "cardFront");
        document.getElementById(idCarta).classList.remove("cardBack");
        if (document.querySelectorAll(".selecionado").length === 2) {
          //if (this.deck.filter(element => element.selecionado).length === 2)
          console.log("Duas cartas foram viradas. Vamos compara-las");
          this.checkPair();
        }
      }
    }
  }, {
    key: "checkPair",
    value: function checkPair() {
      var _this2 = this;
      //const carta1 = this.deck.find(element => element.selecionado);
      //const carta2 = this.deck.findLast(element => element.selecionado);
      var cartasId = _toConsumableArray(document.querySelectorAll(".selecionado")).map(function (element) {
        return element.id;
      });
      var idCarta1 = cartasId[0];
      var idCarta2 = cartasId[1];
      if (this.deck.find(function (element) {
        return element.id == idCarta1;
      }).tipo === this.deck.findLast(function (element) {
        return element.id == idCarta2;
      }).tipo) {
        console.log("Cartas são iguais!!");
        // criar um indicador de que as cartas já foram viradas
        var _iterator = _createForOfIteratorHelper(cartasId),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var i = _step.value;
            document.getElementById(i).classList.add("turn");
          }

          // checar o status do jogo
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.checkStatus();
      } else {
        console.log("Cartas são diferentes!");
        // remover ponto do jogador
        this.points--;
        points.innerText = this.points;
        // desvirar as duas cartas
        setTimeout(function () {
          console.log("Fechando as cartas selecionadas");
          var _iterator2 = _createForOfIteratorHelper(cartasId),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _i = _step2.value;
              document.getElementById(_i).classList.remove("selecionado", "cardFront");

              //alterando o fundo para carta de verso
              document.getElementById(_i).src = _this2.verso;
              //alterando o alt para carta de verso
              document.getElementById(_i).alt = "carta virada";
              document.getElementById(_i).classList.add("cardBack");
            }
            //checar o status do jogo
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          _this2.checkStatus();
        }, 1500);
      }
      // setar todas cartas como não selecionadas
      //this.deck.forEach(element, index => element.selecionado = false)
      setTimeout(function (event) {
        var _iterator3 = _createForOfIteratorHelper(cartasId),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _i2 = _step3.value;
            document.getElementById(_i2).classList.remove("selecionado");
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }, 1500);
    }
  }, {
    key: "checkStatus",
    value: function checkStatus() {
      // checar o status do jogo
      console.log("Checando se o jogador ainda tem pontos OU se ele venceu o jogo!!");
      console.log(this.points);
      // se o jogador ainda tem pontos -> perdeu
      if (this.points === 0) {
        console.log("Você perdeu por pontos");
        alert("".concat(this.player, ", voc\xEA n\xE3o tem mais pontos! Tente novamente"));
        var _board = document.querySelector("#board");
        _board.classList.add("hide");
      }

      // ainda existem cartas para serem viradas -> ganhou
      var cardsTurn = document.querySelectorAll(".turn");
      if (cardsTurn.length === this.deck.length) {
        console.log("Venceu!!");
        alert("".concat(this.player, " voc\xEA venceu!!"));
      }
    }
  }]);
  return MemoryGame;
}(); // CLASSE
var deck = /*#__PURE__*/_createClass(function deck(id, tipo, source, alt) {
  _classCallCheck(this, deck);
  this.id = id;
  this.tipo = tipo;
  this.source = source;
  this.alt = alt;
}); //capturando todos os elementos de html
var startScreen = document.getElementById("startScreen");
var inputName = document.getElementById("inputName1");
var gameScreen = document.getElementById("gameScreen");
var gameScore = document.getElementById("gameScore");
var playerName = document.getElementById("name");
var board = document.getElementById("board");

//adicionar o event listener do submit
addEventListener("submit", function () {
  //instanciar a minha classe
  var game = new MemoryGame(inputName.value, 5);
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
  var allCardsBack = document.querySelectorAll(".cardBack");
  allCardsBack.forEach(function (cardBack) {
    return cardBack.addEventListener("click", function (event) {
      return game.flipCard(event);
    });
  });
}