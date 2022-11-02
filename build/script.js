//OUTLAW.JS
// @ts-check
class Outlaw extends Player {
  constructor(name, pseudoname, id) {
    super(name, pseudoname, id);
  }
}

//RENEAGADE.JS
// @ts-check
class Renegade extends Player {
  constructor(name, pseudoname, id) {
    super(name, pseudoname, id); 
  }
}

//SHERIFF.JS
// @ts-check
class Sheriff extends Player {
  constructor(name, pseudoname, id) {
    super(name, pseudoname, id);
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
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
//ACARD.JS
// @ts-check
var Card = /*#__PURE__*/function () {
  function Card(name, classe, id, ataque, defesa, vida) {
    _classCallCheck(this, Card);
    this.name = name;
    this.classe = classe;
    this.id = id;
    this.ataque = ataque;
    this.defesa = defesa;
    this.vida = vida;
    this.frente = "./assets/bang/".concat(classe, "/").concat(name, ".png");
    //this.verso = `./assets/bang/${classe}/_back.png`;
    var board = document.getElementById("board");
    //const li = document.createElement("li"); 
    var imgFront = document.createElement("img"); // <img />
    imgFront.id = this.id;
    imgFront.src = this.frente;
    imgFront.className = "show cardFront";
    board.appendChild(imgFront);
    document.getElementById(this.id).classList.add(this.classe, "deck");
  }
  _createClass(Card, [{
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "selecionarAlvos",
    value: function selecionarAlvos(_ref) {
      var _ref2 = _toArray(_ref),
        array = _ref2.slice(0);
      var _iterator = _createForOfIteratorHelper(array),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;
          // @ts-ignore
          document.getElementById(i).classList.add("alvos");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);
  return Card;
}(); // CLASSE
// HEAD
// @ts-check
var Game = /*#__PURE__*/function () {
  function Game(name) {
    var _this = this;
    _classCallCheck(this, Game);
    this.name = name;
    var jogadores = [
    // @ts-ignore
    document.getElementById("nameplayer1").innerHTML = document.getElementById("inputName1").value, document.getElementById("nameplayer2").innerHTML = document.getElementById("inputName2").value, document.getElementById("nameplayer3").innerHTML = document.getElementById("inputName3").value, document.getElementById("nameplayer4").innerHTML = document.getElementById("inputName4").value];

    //renderDeck(jogadores);

    this.cemytery = []; //toda carta usada vai para o cemiterio
    //(name, pseudoname, id)

    var player1 = new Sheriff("sheriff", jogadores[0], "player1");
    var player2 = new Renegade("renegade", jogadores[1], "player2");
    var player3 = new Outlaw("outlaw", jogadores[2], "player3");
    var player4 = new Outlaw("outlaw", jogadores[3], "player4");
    this.deck = [player1, player2, player3, player4];
    //renderDeck(this.deck);
    this.deck.forEach(function (element, index) {
      return element.setSpot(index + 1);
    }); //.setSpot())

    this.role = [player1, player2, player3, player4];
    this.role.forEach(function (element) {
      element.ComprarCartas(_this.deck.shift(), 2);
    });
    this.deck = [];
    for (var i = 5; i <= 30; i = i + 3) {
      this.deck.push(new Bang("bang", i));
      this.deck.push(new Beer("beer", i + 1));
      this.deck.push(new Missed("missed", i + 2));
    }
    renderDeck(this.deck);
    //compra inicial de cartas

    this.role.forEach(function (element) {
      //element.ComprarCartas(this.roles.shift(),0)
      for (var _i = 0; _i < element.hp; _i++) {
        element.ComprarCartas(_this.deck.shift(), 0);
      }
    });
    console.log("Cartas Foram distribuidas");

    //iniciando a partida
    var inicio = this.role[0].id;
    console.log(this.role[0].pseudoname);
    console.log("Selecionado");
    document.getElementById(inicio).classList.add("turn");
  }
  _createClass(Game, [{
    key: "renderDeck",
    value: function renderDeck() {
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

    //nessa etapa iremos configurar os turnos de cada jogador
    //ncompra carta; usa carta; uso bang; descartas cartas acima[cemytery]; fim de turno;
  }, {
    key: "turn",
    value: function turn(event) {
      //const game1 = new Game("game");

      var idCarta = event.currentTarget["id"];
      alert(idCarta + "Selecionada");
      var objeto;
      if (idCarta == "player1") objeto = this.role[0];
      if (idCarta == "player2") objeto = this.role[1];
      if (idCarta == "player3") objeto = this.role[2];
      if (idCarta == "player4") objeto = this.role[3];
      if (idCarta == "player5") objeto = this.role[4];
      if (idCarta == "player6") objeto = this.role[5];
      if (idCarta == "player7") objeto = this.role[6];
      objeto.ComprarCartas(this.deck.shift(), 0);
      objeto.ComprarCartas(this.deck.shift(), 0);

      //const spot1 = this.role[0].getStpot(idCarta, this.role) //trocar para metodo estatico futuramente
      var spot = objeto.spot;
      var li = document.getElementById(idCarta).parentNode.parentNode.nextElementSibling.nextElementSibling;
      //buscando cartas da mão

      li.childNodes.forEach(function (element, index) {
        if (index != 0)
          //primeiro elemento é text, depois começa os li
          li.children[index - 1].classList.add("turn");
      });

      //selecionarAlvos(buscarAlvosProximos(spot))

      //const carta1 = this.deck.find(element => element.selecionado);
      //const carta2 = this.deck.findLast(element => element.selecionado);
      /*let cartasId = [...document.querySelectorAll(".selecionado")].map(
        (element) => element.id
      );
      const idCarta1 = cartasId[0];
      const idCarta2 = cartasId[1];
        if (
        this.deck.find((element) => element.id == idCarta1).tipo ===
        this.deck.findLast((element) => element.id == idCarta2).tipo
      ) {
        console.log("Cartas são iguais!!");
        // criar um indicador de que as cartas já foram viradas
        for (let i of cartasId) document.getElementById(i).classList.add("turn");
          // checar o status do jogo
        this.checkStatus();
      } else {
        console.log("Cartas são diferentes!");
        // remover ponto do jogador
        //this.points--;
        //points.innerText = this.points;
        // desvirar as duas cartas
        setTimeout(() => {
          console.log("Fechando as cartas selecionadas");
            for (let i of cartasId) {
            document
              .getElementById(i)
              .classList.remove("selecionado", "cardFront");
              //alterando o fundo para carta de verso
            document.getElementById(i).src = this.verso;
            //alterando o alt para carta de verso
            document.getElementById(i).alt = "carta virada";
              document.getElementById(i).classList.add("cardBack");
          }
          //checar o status do jogo
          this.checkStatus();
        }, 1500);
      }
      // setar todas cartas como não selecionadas
      //this.deck.forEach(element, index => element.selecionado = false)
      setTimeout((event) => {
        for (let i of cartasId)
          // @ts-ignore
          document.getElementById(i).classList.remove("selecionado");
      }, 1500);
      }
      //chacar jogadores se alguem morreu, se alguem morreu e definir vencedodr
      checkStatus() {
      // checar o status do jogo
      console.log(
        "checando se o jogador ainda tem pontos OU se ele venceu o jogo!!"
      );
      console.log(this.points);
      // se o jogador ainda tem pontos -> perdeu
      if (this.points === 0) {
        console.log("Você perdeu por pontos");
        alert(`${this.player}, você não tem mais pontos! Tente novamente`);
          const board = document.querySelector("#board");
        board.classList.add("hide");
      }
        // ainda existem cartas para serem viradas -> ganhou
      const cardsTurn = document.querySelectorAll(".turn");
      if (cardsTurn.length === this.deck.length) {
        console.log("Venceu!!");
        //    alert(`${this.player} você venceu!!`);
      }
      }
      }
      /*
      class Card2 {
        constructor(name, classe, id, verso = `../../static/assets/img/fe.svg `) {
          this.name = name;
          this.classe = classe;
          this.id = id;
          this.verso = verso;
          this.source = `../../static/assets/img/${name}.svg `;
        }
          buscarAlvosProximos() {
          const spot = document.querySelector(".selecionado").id;
          const proximo = (spot % 4) + 1;
          let anterior;
          spot == 1 ? (anterior = 4) : (anterior = spot - 1);
          return [anterior, proximo];
        }
          buscarAlvoSiProprio() {
          return document.querySelector(".selecionado").id;
        }
          buscarAlvoTodos() {
          const spot =
            document.getElementsByClassName("player selecionado")[0].id;
          return [...document.getElementsByClassName("player")]
            .map((element) => element.id)
            .filter((element) => element != spot);
        }
          selecionarAlvos([...array]) {
          for (let i of array) {
            document.getElementById(i).classList.add("alvos");
          }
        }
          atacar([array]) {}
      }
      class CardPlayer2 extends Card2 {
        constructor(name, hp, range, pseudoname, id) {
          super(name, "player", id);
          this.hp = hp;
          this.range = range;
          this.pseudoname = pseudoname;
        }
      }
      class Xerife2 extends CardPlayer2 {
        constructor(name, hp, range, pseudoname, id) {
          super(name, hp, range, pseudoname, id);
        }
      }
      class CardAction2 extends Card2 {
        constructor(name, id) {
          super(name, "action", id);
        }
          buscarAlvosProximos() {
          const spot = document.querySelector(".selecionado").id;
          const proximo = (spot % 4) + 1;
          let anterior;
          spot == 1 ? (anterior = 4) : (anterior = spot - 1);
          return [anterior, proximo];
        }
          buscarAlvoSiProprio() {
          return document.querySelector(".selecionado").id;
        }
          buscarAlvoTodos() {
          const spot =
            document.getElementsByClassName("player selecionado")[0].id;
          return [...document.getElementsByClassName("player")]
            .map((element) => element.id)
            .filter((element) => element != spot);
        }
          selecionarAlvos([...array]) {
          for (let i of array) {
            document.getElementById(i).classList.add("alvos");
          }
        }
          atacar([array]) {}
      }
        class Bang2 extends CardAction2 {
        constructor(name, id) {
          super(name, id);
        }
          buscarAlvos() {
          return super.buscarAlvosProximos();
        }*/
    }
  }]);
  return Game;
}();
function renderDeck(array) {
  console.log("randomizar o deck ->> EMBARALHAR -> shufle");
  array.sort(function () {
    return Math.random() - 0.5;
  });
}

//APLAYER.JS
// @ts-check
var Player = /*#__PURE__*/function (_Card) {
  _inherits(Player, _Card);
  var _super = _createSuper(Player);
  function Player(name, pseudoname, id) {
    var _this2;
    var hp = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;
    var range = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
    var spot = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
    _classCallCheck(this, Player);
    _this2 = _super.call(this, name, "roles", id);
    _this2.pseudoname = pseudoname;
    _this2.hp = hp;
    _this2.range = range;
    _this2.spot = spot;
    _this2.hand = [];
    return _this2;
  }
  _createClass(Player, [{
    key: "ComprarCartas",
    value: function ComprarCartas(carta, tipo) {
      this.hand.push(carta);
      console.log("".concat(this.pseudoname, " comprou uma carta"));
      if (tipo == 2) {
        //role

        document.getElementsByClassName(this.id)[0].children[0].appendChild(document.createElement("li"));
        document.getElementsByClassName(this.id)[0].children[0].lastElementChild.appendChild(document.getElementById(carta.id).cloneNode(true));
        document.getElementById(carta.id).remove();
      }
      if (tipo == 0) {
        // document.getElementById(carta.id).className = "apagar"
        document.getElementsByClassName(this.id)[0].children[2].appendChild(document.createElement("li"));
        document.getElementsByClassName(this.id)[0].children[2].lastElementChild.appendChild(document.getElementById(carta.id).cloneNode(true));
        //document.getElementsByClassName("apagar")[0].remove();
        document.getElementById(carta.id).remove();
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
    key: "setHP",
    value: function setHP(value) {
      this.hp = this.hp;
    }
  }]);
  return Player;
}(Card); //SELECTOR.JS
//capturando todos os elementos de html
// @ts-check
var gameScreen = document.getElementById("gameScreen");
var gameScore = document.getElementById("gameScore");
var playerName = document.getElementById("name");
var board = document.getElementById("board");

//adicionar o event listener do submit
addEventListener("submit", function () {
  var game1 = new Game("game");
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
  var turn = document.querySelectorAll(".turn");
  turn.forEach(function (turn) {
    return turn.addEventListener("click", function (event) {
      return game.turn(event);
    });
  });
}

//TARGET.JS
//recebe posicao,  analisar o range, ver posicao do alvos, usa carta
//buscar na mesa
// @ts-check
function buscarAlvosProximos(spot) {
  // @ts-ignore
  //const spot = (document.querySelector(".selecionado").id)*1;
  var total = document.getElementsByClassName("player").length;
  var proximo = spot % 4 + 1;
  var anterior;
  spot == 1 ? anterior = total : anterior = spot - 1;
  var anterior2 = document.getElementById("players").children[anterior - 1].children[0];
  var proximo2 = document.getElementById("players").children[proximo - 1].children[0];
  return [anterior2, proximo2];
}

// @ts-ignore
function buscarAlvoSiProprio(spot) {
  // @ts-ignore
  return spot;
}

//function buscarAlvoTodos(spot) {
// const spot = document.getElementsByClassName("player selecionado")[0].id;
// return [...document.getElementsByClassName("player")]
// .map((element) => element.id)
//.filter((element) => element != spot);
//}

function selecionarAlvos(pos) {
  //marcar anterior e proximo
  pos[0].childNodes.forEach(function (element, index) {
    if (index != 0)
      //primeiro elemento é text, depois começa os li
      pos[0].children[index - 1].classList.add("target turn");
  });
  pos[1].childNodes.forEach(function (element, index) {
    if (index != 0)
      //primeiro elemento é text, depois começa os li
      pos[1].children[index - 1].classList.add("target turn");
  });
}