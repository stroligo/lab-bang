//OUTLAW.JS

class Outlaw extends Player {
  constructor(name, classe,  id, pseudoname) {
    super(name, classe, id, pseudoname);
  }
}

//RENEAGADE.JS

class Renegade extends Player {
  constructor(name, classe,  id, pseudoname) {
    super(name, classe, id, pseudoname);
  }
  }

//SHERIFF.JS

class Sheriff extends Player {
  constructor(name, classe,  id, pseudoname) {
    super(name, classe, id, pseudoname);
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
//CARD.JS
var Card = /*#__PURE__*/function () {
  function Card(name, classe, id, ataque, defesa, vida) {
    _classCallCheck(this, Card);
    this.name = name;
    this.classe = classe;
    this.id = id;
    this.ataque = ataque;
    this.defesa = defesa;
    this.vida = vida;
    var li = document.createElement('li');
    li.id = this.id;
    li.classList.add("card-wrapper");
    var board = document.getElementById("deck");
    var row = "      \n    <div class=\"card\">\n    <div class=\"back\">\n    <img src=\"./assets/bang/".concat(name, "/").concat(classe, ".png\" />\n    </div>\n    <div class=\"front\">\n    <img src=\"./assets/bang/cards/_back.png\" />\n    </div>\n    </div>\n        ");
    li.innerHTML = row;
    board.appendChild(li);
    document.getElementById(this.id).classList.add(this.classe, this.name, "hidden");
  }
  _createClass(Card, [{
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }]);
  return Card;
}(); // CLASSE
// HEAD
var Game = /*#__PURE__*/function () {
  function Game(name) {
    var _this = this;
    _classCallCheck(this, Game);
    this.name = name;
    var jogadores = [document.getElementById("inputName1").value, document.getElementById("inputName2").value, document.getElementById("inputName3").value, document.getElementById("inputName4").value];

    //this.renderDeck();

    this.cemytery = []; //toda carta usada vai para o cemiterio
    //(name, pseudoname, id)

    var numero1 = new Sheriff("roles", "outlaw", "player1", jogadores[0]);
    var numero2 = new Renegade("roles", "renegade", "player2", jogadores[1]);
    var numero3 = new Outlaw("roles", "sheriff", "player3", jogadores[2]);
    var numero4 = new Outlaw("roles", "outlaw", "player4", jogadores[3]);
    this.role = [numero1, numero2, numero3, numero4];
    //renderDeck(this.roles);

    this.deck = [];
    this.role.forEach(function (element, index) {
      return element.setSpot(index + 1);
    }); //.setSpot())
    this.role.forEach(function (element) {
      return element.setAnteriorProximo();
    });
    this.deck = [numero1, numero2, numero3, numero4];
    this.deck.forEach(function (element, index) {
      return element.setSpot(index + 1);
    }); //.setSpot())

    this.role = [numero1, numero2, numero3, numero4];
    this.role.forEach(function (element) {
      element.ComprarCartas(_this.deck.shift(), 2);
    });
    this.deck = [];
    for (var i = 5; i <= 30; i = i + 3) {
      this.deck.push(new Bang("cards", "bang", i));
      this.deck.push(new Beer("cards", "beer", i + 1));
      this.deck.push(new Missed("cards", "missed", i + 2));
    }
    this.renderDeck(this.deck); //compra inicial de cartas

    this.role.forEach(function (element) {
      //element.ComprarCartas(this.roles.shift(),0)
      for (var _i = 0; _i < element.hp; _i++) {
        element.ComprarCartas(_this.deck.shift(), 0);
      }
    });
    document.getElementById("console").value += "Cartas Foram distribuidas\n";
    //iniciando a partida
    var inicio = this.role[2].id;
    console.log(this.role[1].id);
    console.log(this.role[1]);
    document.getElementById(inicio).classList.add("turn");
  }
  _createClass(Game, [{
    key: "renderDeck",
    value: function renderDeck(values) {
      console.log("randomizar o deck ->> EMBARALHAR -> shufle");
      this.deck.sort(function () {
        return Math.random() - 0.5;
      });
    }
  }, {
    key: "partida",
    value: function partida() {
      //const idCarta = event.currentTarget["id"];
      console.log(idCarta);
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
    key: "buscaObjeto",
    value: function buscaObjeto(id) {
      var objeto;
      if (id == "player1") return this.role[1];
      if (id == "player2") return this.role[1];
      if (id == "player3") return this.role[2];
      if (id == "player4") return this.role[3];
      if (id == "player5") return this.role[4];
      if (id == "player6") return this.role[5];
      if (id == "player7") return this.role[6];
    }
  }, {
    key: "beer",
    value: function beer(event) {
      this.buscaObjeto(document.getElementsByClassName("turn")[0].id).setHP(+1);
    }
  }, {
    key: "bang",
    value: function bang(event) {
      var _this2 = this;
      var atual = this.buscaObjeto(document.querySelector(".turn").id);
      document.querySelectorAll("#player".concat(atual.anterior, ",#player").concat(atual.proximo)).forEach(function (element) {
        return element.classList.add("target");
      });
      console.log("selecione um alvo");
      var alvos = document.querySelectorAll(".target");
      alvos.forEach(function (alvos) {
        return alvos.addEventListener("click", function (event) {
          return _this2.alvosAction(event);
        });
      });
      document.getElementById("console").value += "Selecione um alvo\n";
    }
  }, {
    key: "alvosAction",
    value: function alvosAction(event) {
      var id = event.currentTarget["id"];
      if (document.querySelector("#".concat(id, " .missed"))) document.getElementById("console").value += "Voce escapou por pouco\n";else {
        buscaObjeto(id).setHP(-1);
        document.getElementById("console").value += "Voce foi baleado\n";
      }
      document.querySelector(".target").classList.remove("target");
      document.querySelector(".target").classList.remove("target");
    }

    //nessa etapa iremos configurar os turnos de cada jogador
    //ncompra carta; usa carta; uso bang; descartas cartas acima[cemytery]; fim de turno;
  }, {
    key: "turn",
    value: function turn(event) {
      //const game1 = new Game("game");

      var playerAtual = document.getElementsByClassName("turn")[0].id;
      var objeto;
      if (playerAtual == "player1") objeto = this.role[0];
      if (playerAtual == "player2") objeto = this.role[1];
      if (playerAtual == "player3") objeto = this.role[2];
      if (playerAtual == "player4") objeto = this.role[3];
      if (playerAtual == "player5") objeto = this.role[4];
      if (playerAtual == "player6") objeto = this.role[5];
      if (playerAtual == "player7") objeto = this.role[6];

      //console.log("comprando");
      //objeto.ComprarCartas(this.deck.shift(), 0)
      //objeto.ComprarCartas(this.deck.shift(), 0)
    }
  }]);
  return Game;
}();
function onMouseenterOrMouseleaveCard(e) {
  var _$this = $(this);
  if (windowWidth < 1000 || _$this.hasClass('reverse-clicked')) {
    return;
  }
  if (e.type === 'mouseenter') {
    _$this.addClass('reverse');
    return;
  }
  _$this.removeClass('reverse');
}
//APLAYER.JS
var Player = /*#__PURE__*/function (_Card) {
  _inherits(Player, _Card);
  var _super = _createSuper(Player);
  function Player(name, classe, id, pseudoname) {
    var _this3;
    var hp = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5;
    var range = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
    var spot = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
    var anterior = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
    var proximo = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
    _classCallCheck(this, Player);
    _this3 = _super.call(this, name, classe, id);
    _this3.pseudoname = pseudoname;
    _this3.hp = hp;
    _this3.range = range;
    _this3.spot = spot;
    _this3.anterior = anterior;
    _this3.proximo = proximo;
    _this3.hand = [];
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
    key: "ComprarCartas",
    value: function ComprarCartas(carta, tipo) {
      var copia = carta;
      this.hand.push(carta);
      console.log("".concat(this.pseudoname, " comprou uma carta"));
      console.log("id da classe player" + this.id);
      console.log("name" + this.name);
      console.log("classe" + this.classe);
      if (tipo == 2) {
        //role  

        //document.getElementsByClassName(this.id)[0].children[0].appendChild(document.createElement("lia"))
        document.getElementById(this.id).children[0].lastElementChild.appendChild(document.getElementById(copia.id).cloneNode(true)).classList.remove("hidden");
        document.getElementById(copia.id).remove();
      }
      if (tipo == 0) {
        // document.getElementById(carta.id).className = "apagar"
        //document.getElementsByClassName(this.id)[0].children[1].children[0].appendChild(document.createElement("li"))
        document.getElementById(this.id).children[1].lastElementChild.appendChild(document.getElementById(copia.id).cloneNode(true)).classList.remove("hidden");
        //document.getElementsByClassName("apagar")[0].remove();
        document.getElementById(copia.id).remove();
      }
      if (tipo == 3) {
        // document.getElementById(carta.id).className = "apagar"
        //document.getElementsByClassName(this.id)[0].children[1].children[0].appendChild(document.createElement("li"))
        document.getElementById(this.id).children[1].lastElementChild.appendChild(document.getElementById(copia.id).cloneNode(true)).classList.remove("hidden");
        //document.getElementsByClassName("apagar")[0].remove();
        document.getElementById(copia.id).remove();
      }
    }

    //getStpot(id, role) {
    //return role.filter(element => element.id == id)[0].spot
    //}
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
  settingUpGame(game1);
});
function settingUpGame(game) {
  // capturar todas as cardsBack
  // adicionar a ela um eventlistener
  var card = document.querySelectorAll(".card");
  var beer = document.querySelectorAll(".beer");
  var bang = document.querySelectorAll(".bang");
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