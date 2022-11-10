//OUTLAW.JS

class Outlaw extends Player {
  constructor(name, classe,  id, pseudoname, rodada, pos) {
    super(name, classe, id, pseudoname, rodada, pos);
  }
}

//RENEAGADE.JS

class Renegade extends Player {
  constructor(name, classe,  id, pseudoname,rodada, pos) {
    super(name, classe, id, pseudoname,rodada, pos);
  }
  }

//SHERIFF.JS

class Sheriff extends Player {
  constructor(name, classe,  id, pseudoname, rodada, pos) {
    super(name, classe, id, pseudoname, rodada, pos);
    }
}

"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
//CARD.JS
var Card = /*#__PURE__*/_createClass(function Card(name, classe, id) {
  _classCallCheck(this, Card);
  this.name = name;
  this.classe = classe;
  this.id = id;
  if (name != "roles") {
    var li = document.createElement("li");
    li.id = this.id;
    li.classList.add("card-wrapper", "hidden");
    var _board = document.getElementById("deck").children[0];
    var row = "      \n    <div class=\"card\">\n    <div class=\"back\">\n    <img src=\"./assets/bang/".concat(name, "/").concat(classe, ".png\" />\n    </div>\n    <div class=\"front\">\n    <img src=\"./assets/bang/cards/back.png\" />\n    </div>\n    </div>\n        ");
    li.innerHTML = row;
    _board.appendChild(li);
    document.getElementById(this.id).classList.add(this.classe, this.name, "hidden");
  }
}); // CLASSE
// HEAD
var Game = /*#__PURE__*/function () {
  function Game(name) {
    _classCallCheck(this, Game);
    this.name = name;
    var jogadores = [document.getElementById("inputName1").value, document.getElementById("inputName2").value, document.getElementById("inputName3").value, document.getElementById("inputName4").value];

    //this.renderDeck();

    this.cemytery = []; //toda carta usada vai para o cemiterio
    //(name, pseudoname, id)

    var player1 = new Outlaw("roles", "sheriff", "player3", jogadores[0]);
    var player2 = new Renegade("roles", "renegade", "player2", jogadores[1]);
    var player3 = new Sheriff("roles", "outlaw", "player1", jogadores[2]);
    var player4 = new Outlaw("roles", "outlaw", "player4", jogadores[3]);
    this.role = [player1, player2, player3, player4];

    //renderDeck(this.roles);

    // this.role.forEach((element, index) => element.setSpot(index + 1)); //.setSpot())
    this.role.forEach(function (element) {
      return element.setAnteriorProximo();
    });

    //Setando Xerife
    //const inicio = this.role[2].id
    //document.getElementById(inicio).classList.add("turn");
    this.deck = [];
    //this.deck = [player1, player2, player3, player4];

    for (var i = 0; i < 12; i++) {
      this.deck.push(new Bang("cards", "bang", i + 4));
    }
    for (var _i = 0; _i < 4; _i++) {
      this.deck.push(new Missed("cards", "missed", _i + 12));
    }
    for (var _i2 = 0; _i2 < 4; _i2++) {
      this.deck.push(new Beer("cards", "beer", _i2 + 16));
    }
    for (var _i3 = 0; _i3 < 12; _i3++) {
      this.deck.push(new Bang("cards", "bang", _i3 + 4));
    }
    for (var _i4 = 0; _i4 < 4; _i4++) {
      this.deck.push(new Missed("cards", "missed", _i4 + 12));
    }
    for (var _i5 = 0; _i5 < 4; _i5++) {
      this.deck.push(new Beer("cards", "beer", _i5 + 16));
    }

    //compra inicial de cartas

    //document.querySelectorAll(".player")[0].classList.add("turn") //setando active para todos
    //document.querySelectorAll(".player")[1].classList.add("turn") //setando active para todos
    document.querySelectorAll(".player")[0].classList.add("turn"); //setando active para todos
    //document.querySelectorAll(".player")[3].classList.add("turn") //setando active para todos

    //this.role.forEach((element, index) => {

    for (var _i6 = 0; _i6 < 20; _i6++) {
      var atual = document.querySelector(".turn");
      if (document.querySelector(".turn").nextElementSibling == null) ply1.classList.add("turn");else document.querySelector(".turn").nextElementSibling.classList.add("turn");
      atual.classList.remove("turn");

      // if (this.precisaComprar())
      var playerAtual = document.querySelector(".turn").id;
      var cartaExcluir = this.deck.shift();
      this.buscaObjeto(playerAtual).hand.push(cartaExcluir);
      var remover = document.querySelector("#deck ul li");
      var inserir = document.querySelector("#".concat(playerAtual, " > div.hand > ul"));
      inserir.appendChild(remover).classList.remove("hidden");
    }
  }
  _createClass(Game, [{
    key: "comprarDeck",
    value: function comprarDeck() {
      // if (this.precisaComprar())
      {
        var playerAtual = document.querySelector(".turn").id;
        var cartaExcluir = this.deck.shift();
        this.buscaObjeto(playerAtual).hand.push(cartaExcluir);
        var remover = document.querySelector("#deck ul li");
        var inserir = document.querySelector("#".concat(playerAtual, " > div.hand > ul"));
        inserir.appendChild(remover).classList.remove("hidden");
      }
    }
  }, {
    key: "renderDeck",
    value: function renderDeck() {
      console.log("randomizar o deck ->> EMBARALHAR -> shufle");
      this.deck.sort(function () {
        return Math.random() - 0.5;
      });
    }
  }, {
    key: "buscaObjeto",
    value: function buscaObjeto(id) {
      var objeto;
      if (id == "player1") return this.role[0];
      if (id == "player2") return this.role[1];
      if (id == "player3") return this.role[2];
      if (id == "player4") return this.role[3];
      if (id == "player5") return this.role[4];
      if (id == "player6") return this.role[5];
      if (id == "player7") return this.role[6];
    }
  }, {
    key: "precisaComprar",
    value: function precisaComprar(event) {
      var textArea = document.getElementById("console");
      textArea.scrollTop = textArea.scrollHeight;
      if (document.getElementsByClassName("turn").deck) {
        document.getElementById("console").value += "Compre uma carta\n";
        return true;
      }
      return false;
    }
  }, {
    key: "beer",
    value: function beer(event) {
      if (!this.precisaComprar()) this.buscaObjeto(document.getElementsByClassName("turn")[0].id).setHP(+1);
    }
  }, {
    key: "bang",
    value: function bang(event) {
      var _this = this;
      // if (!this.precisaComprar()) {
      proxTurno.disabled = true;
      var atual = this.buscaObjeto(document.querySelector(".turn").id);
      document.querySelectorAll("#player".concat(atual.anterior, ",#player").concat(atual.proximo)).forEach(function (element) {
        return element.classList.add("target");
      });
      document.getElementById("console").value += "Selecione um alvo\n";
      var alvos = document.querySelectorAll(".target");
      alvos.forEach(function (alvos) {
        return alvos.addEventListener("click", function (event) {
          return _this.alvosAction(event);
        });
      });
      // }
    }
  }, {
    key: "trocaTurno",
    value: function trocaTurno() {
      var atual = document.querySelector(".turn");
      if (document.querySelector(".turn").nextElementSibling == null) ply1.classList.add("turn");else document.querySelector(".turn").nextElementSibling.classList.add("turn");
      atual.classList.remove("turn");
    }
  }, {
    key: "alvosAction",
    value: function alvosAction(event) {
      var _this2 = this;
      var alvos = document.querySelectorAll(".target");
      var id = event.currentTarget["id"];
      if (document.querySelector("#".concat(id, " .missed"))) document.getElementById("console").value += "Voce escapou por pouco\n";else {
        buscaObjeto(id).setHP(-1);
        document.getElementById("console").value += "Voce foi baleado\n";
      }
      alvos.forEach(function (alvos) {
        return alvos.removeEventListener("click", function (event) {
          return _this2.trocaTurno(event);
        });
      });
      document.querySelector(".target").classList.remove("target");
      proxTurno.disabled = false;
    }

    //nessa etapa iremos configurar os turnos de cada jogador
    //ncompra carta; usa carta; uso bang; descartas cartas acima[cemytery]; fim de turno;
  }]);
  return Game;
}();
function onMouseenterOrMouseleaveCard(e) {
  var _$this = $(this);
  if (windowWidth < 1000 || _$this.hasClass("reverse-clicked")) {
    return;
  }
  if (e.type === "mouseenter") {
    _$this.addClass("reverse");
    return;
  }
  _$this.removeClass("reverse");
}

// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var button = document.getElementsByClassName("fechar")[0];
// Porximo Turno

// When the user clicks on the button, open the modal
// MODIFICADO PARA JA ABRIR O MODAL

btn.onclick = function () {
  modal.style.display = "block";
};
var btnproxTurno = document.getElementById("proxTurno");
var totalPlayers = document.getElementsByClassName("player").length;
var tply = document.getElementById("players");
var ply1 = document.getElementById("player1");
var ply2 = document.getElementById("player2");
var ply3 = document.getElementById("player3");
var ply4 = document.getElementById("player4");
btnproxTurno.onclick = function () {
  var atual = document.querySelector(".turn");
  if (document.querySelector(".turn").nextElementSibling == null) ply1.classList.add("turn");else document.querySelector(".turn").nextElementSibling.classList.add("turn");
  atual.classList.remove("turn");
};

// When the user clicks on <span> (x), close the modal
button.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//APLAYER.JS
var Player = /*#__PURE__*/function (_Card) {
  _inherits(Player, _Card);
  var _super = _createSuper(Player);
  function Player(name, classe, id, rodada, pseudoname) {
    var _this3;
    var hp = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 5;
    var range = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
    var spot = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
    var anterior = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
    var proximo = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
    var compras = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
    var pos = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 0;
    _classCallCheck(this, Player);
    _this3 = _super.call(this, name, classe, id);
    _this3.rodada = rodada;
    _this3.pseudoname = pseudoname;
    _this3.hp = hp;
    _this3.range = range;
    _this3.spot = spot;
    _this3.anterior = anterior;
    _this3.proximo = proximo;
    _this3.hand = [];
    _this3.pos = pos;
    return _this3;
  }
  _createClass(Player, [{
    key: "setAnteriorProximo",
    value: function setAnteriorProximo() {
      var totalPlayers = document.getElementsByClassName("player").length;
      this.proximo = this.spot % totalPlayers + 1;
      this.spot == 1 ? this.anterior = totalPlayers : this.anterior = this.spot - 1;
    }
  }, {
    key: "setSpot",
    value: function setSpot(value) {
      this.spot = value;
    }
  }, {
    key: "getSpot",
    value: function getSpot() {
      return this.spot;
    }
  }, {
    key: "setHP",
    value: function setHP(value) {
      this.hp += value;
      var vida = document.querySelector(".turn .hp");
      if (value < 0) {
        vida.children[0].remove();
        document.getElementById("console").value += "Voce foi atingido\n";
      }
      if (value > 0) {
        var node = vida.children[0];
        var clone = node.cloneNode(true);
        vida.appendChild(clone);
        document.getElementById("console").value += "Voce ganhou vida\n";
      }
    }
  }]);
  return Player;
}(Card); //SELECTOR.JS
//capturando todos os elementos de html
var gameScreen = document.getElementById("gameScreen");
var gameScore = document.getElementById("gameScore");
var playerName = document.getElementById("name");
var board = document.getElementById("board");

//adicionar o event listener do submit
addEventListener("submit", function () {
  var game1 = new Game("game");
  game1.renderDeck();
  settingUpGame(game1);
});
function settingUpGame(game) {
  // capturar todas as cardsBack
  // adicionar a ela um eventlistener
  document.querySelectorAll(".name")[0].innerText += "|" + document.getElementById("inputName1").value.split(" ")[0];
  document.querySelectorAll(".name")[1].innerText += "|" + document.getElementById("inputName2").value.split(" ")[0];
  document.querySelectorAll(".name")[2].innerText += "|" + document.getElementById("inputName3").value.split(" ")[0];
  document.querySelectorAll(".name")[3].innerText += "|" + document.getElementById("inputName4").value.split(" ")[0];
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
  // card.forEach(card => card.addEventListener("click", event => game.turn(event)));
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