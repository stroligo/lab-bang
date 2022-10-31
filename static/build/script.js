"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//_BASE.JS
//capturando todos os elementos de html
var gameScreen = document.getElementById("gameScreen");
var gameScore = document.getElementById("gameScore");
var playerName = document.getElementById("name");
var board = document.getElementById("board"); //adicionar o event listener do submit

addEventListener("submit", function () {
  var game = new Table("mesa1"); // startScreen desapareça

  startScreen.classList.add("hide"); // mostrar o gameScore

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
} // CLASSE
// HEAD


var MemoryGame = /*#__PURE__*/_createClass(function MemoryGame(player, points) {
  _classCallCheck(this, MemoryGame);

  this.player = player;
  this.points = points;
  var carta1 = new deck(1, 1, "./assets/img/harmonia.svg", "harmonia");
  var carta2 = new deck(2, 2, "./assets/img/poder.svg", "poder");
  var carta3 = new deck(3, 3, "./assets/img/projetar.svg", "projetar");
  var carta4 = new deck(4, 4, "./assets/img/refletir.svg", "refletir");
  var carta5 = new deck(5, 1, "./assets/img/harmonia.svg", "harmonia");
  var carta6 = new deck(6, 2, "./assets/img/poder.svg", "poder");
  var carta7 = new deck(7, 3, "./assets/img/projetar.svg", "projetar");
  var carta8 = new deck(8, 4, "./assets/img/refletir.svg", "refletir");
  this.deck = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];
  this.verso = "./assets/img/fe.svg";
  var pointsHTML = document.getElementById("points");
  pointsHTML.innerText = this.points; // setando o numero de tentativos no meu html

  playerName.innerText = this.player; // setando o nome do jogador no meu html

  var Table = /*#__PURE__*/function () {
    function Table(name) {
      _classCallCheck(this, Table);

      this.name = name;
      var jogadores = [document.getElementById("player1").innerHTML = document.getElementById("inputName1").value, document.getElementById("player2").innerHTML = document.getElementById("inputName2").value, document.getElementById("player3").innerHTML = document.getElementById("inputName3").value, document.getElementById("player4").innerHTML = document.getElementById("inputName4").value];
      renderDeck(jogadores);
      var carta1 = new Xerife2("xerife", 5, 1, jogadores[0], "carta1"); //const carta2 = new renegado("renegado", 5 ,1 , jogadores[1]);
      //const carta3 = new foradalei("foradalei", 5 ,1 , jogadores[2]);
      //const carta4 = new foradalei("foradalei", 5 ,1 , 4, jogadores[3]);

      this.player = [carta1, carta1, carta1, carta1];
      var carta5 = new Bang2("bang", "carta5");
      this.deck = [carta1, carta5, carta1, carta5];
    }

    _createClass(Table, [{
      key: "renderDeck",
      value: function renderDeck() {
        console.log("randomizar o deck ->> EMBARALHAR -> shufle");
        this.deck.sort(function () {
          return Math.random() - 0.5;
        }); //capturar o board

        var board = document.getElementById("board");
        console.log("iterar pela array do deck e criar as minhas cartas viradas para baixo");
        this.deck.forEach(function (element) {
          var imgBack = document.createElement("img"); // <img />

          imgBack.id = element.id;
          imgBack.src = element.verso;
          imgBack.alt = "carta virada";
          imgBack.className = "show cardBack";
          board.appendChild(imgBack);
          document.getElementById(element.id).classList.add(element.classe);
        });
      }
    }, {
      key: "flipCard",
      value: function flipCard(event) {
        var idCarta = event.currentTarget["id"];
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
      key: "checkPair",
      value: function checkPair() {
        var _this = this;

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
          console.log("Cartas são iguais!!"); // criar um indicador de que as cartas já foram viradas

          var _iterator = _createForOfIteratorHelper(cartasId),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var i = _step.value;
              document.getElementById(i).classList.add("turn");
            } // checar o status do jogo

          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this.checkStatus();
        } else {
          console.log("Cartas são diferentes!"); // remover ponto do jogador
          //this.points--;
          //points.innerText = this.points;
          // desvirar as duas cartas

          setTimeout(function () {
            console.log("Fechando as cartas selecionadas");

            var _iterator2 = _createForOfIteratorHelper(cartasId),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _i = _step2.value;
                document.getElementById(_i).classList.remove("selecionado", "cardFront"); //alterando o fundo para carta de verso

                document.getElementById(_i).src = _this.verso; //alterando o alt para carta de verso

                document.getElementById(_i).alt = "carta virada";
                document.getElementById(_i).classList.add("cardBack");
              } //checar o status do jogo

            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            _this.checkStatus();
          }, 1500);
        } // setar todas cartas como não selecionadas
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
        console.log("checando se o jogador ainda tem pontos OU se ele venceu o jogo!!");
        console.log(this.points); // se o jogador ainda tem pontos -> perdeu

        if (this.points === 0) {
          console.log("Você perdeu por pontos");
          alert("".concat(this.player, ", voc\xEA n\xE3o tem mais pontos! Tente novamente"));

          var _board = document.querySelector("#board");

          _board.classList.add("hide");
        } // ainda existem cartas para serem viradas -> ganhou


        var cardsTurn = document.querySelectorAll(".turn");

        if (cardsTurn.length === this.deck.length) {
          console.log("Venceu!!");
          alert("".concat(this.player, " voc\xEA venceu!!"));
        }
      }
    }]);

    return Table;
  }();

  var Card2 = /*#__PURE__*/function () {
    function Card2(name, classe, id) {
      var verso = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "../../static/assets/img/fe.svg ";

      _classCallCheck(this, Card2);

      this.name = name;
      this.classe = classe;
      this.id = id;
      this.verso = verso;
      this.source = "../../static/assets/img/".concat(name, ".svg ");
    }

    _createClass(Card2, [{
      key: "buscarAlvosProximos",
      value: function buscarAlvosProximos() {
        var spot = document.querySelector(".selecionado").id;
        var proximo = spot % 4 + 1;
        var anterior;
        spot == 1 ? anterior = 4 : anterior = spot - 1;
        return [anterior, proximo];
      }
    }, {
      key: "buscarAlvoSiProprio",
      value: function buscarAlvoSiProprio() {
        return document.querySelector(".selecionado").id;
      }
    }, {
      key: "buscarAlvoTodos",
      value: function buscarAlvoTodos() {
        var spot = document.getElementsByClassName("player selecionado")[0].id;
        return _toConsumableArray(document.getElementsByClassName("player")).map(function (element) {
          return element.id;
        }).filter(function (element) {
          return element != spot;
        });
      }
    }, {
      key: "selecionarAlvos",
      value: function selecionarAlvos(_ref) {
        var _ref2 = _toArray(_ref),
            array = _ref2.slice(0);

        var _iterator4 = _createForOfIteratorHelper(array),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var i = _step4.value;
            document.getElementById(i).classList.add("alvos");
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }, {
      key: "atacar",
      value: function atacar(_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
            array = _ref4[0];
      }
    }]);

    return Card2;
  }();

  var CardPlayer2 = /*#__PURE__*/function (_Card) {
    _inherits(CardPlayer2, _Card);

    var _super = _createSuper(CardPlayer2);

    function CardPlayer2(name, hp, range, pseudoname, id) {
      var _this2;

      _classCallCheck(this, CardPlayer2);

      _this2 = _super.call(this, name, "player", id);
      _this2.hp = hp;
      _this2.range = range;
      _this2.pseudoname = pseudoname;
      return _this2;
    }

    return _createClass(CardPlayer2);
  }(Card2);

  var Xerife2 = /*#__PURE__*/function (_CardPlayer) {
    _inherits(Xerife2, _CardPlayer);

    var _super2 = _createSuper(Xerife2);

    function Xerife2(name, hp, range, pseudoname, id) {
      _classCallCheck(this, Xerife2);

      return _super2.call(this, name, hp, range, pseudoname, id);
    }

    return _createClass(Xerife2);
  }(CardPlayer2);

  function renderDeck(array) {
    console.log("randomizar o deck ->> EMBARALHAR -> shufle");
    array.sort(function () {
      return Math.random() - 0.5;
    });
  }

  var CardAction2 = /*#__PURE__*/function (_Card2) {
    _inherits(CardAction2, _Card2);

    var _super3 = _createSuper(CardAction2);

    function CardAction2(name, id) {
      _classCallCheck(this, CardAction2);

      return _super3.call(this, name, "action", id);
    }

    _createClass(CardAction2, [{
      key: "buscarAlvosProximos",
      value: function buscarAlvosProximos() {
        var spot = document.querySelector(".selecionado").id;
        var proximo = spot % 4 + 1;
        var anterior;
        spot == 1 ? anterior = 4 : anterior = spot - 1;
        return [anterior, proximo];
      }
    }, {
      key: "buscarAlvoSiProprio",
      value: function buscarAlvoSiProprio() {
        return document.querySelector(".selecionado").id;
      }
    }, {
      key: "buscarAlvoTodos",
      value: function buscarAlvoTodos() {
        var spot = document.getElementsByClassName("player selecionado")[0].id;
        return _toConsumableArray(document.getElementsByClassName("player")).map(function (element) {
          return element.id;
        }).filter(function (element) {
          return element != spot;
        });
      }
    }, {
      key: "selecionarAlvos",
      value: function selecionarAlvos(_ref5) {
        var _ref6 = _toArray(_ref5),
            array = _ref6.slice(0);

        var _iterator5 = _createForOfIteratorHelper(array),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var i = _step5.value;
            document.getElementById(i).classList.add("alvos");
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    }, {
      key: "atacar",
      value: function atacar(_ref7) {
        var _ref8 = _slicedToArray(_ref7, 1),
            array = _ref8[0];
      }
    }]);

    return CardAction2;
  }(Card2);

  var Bang2 = /*#__PURE__*/function (_CardAction) {
    _inherits(Bang2, _CardAction);

    var _super4 = _createSuper(Bang2);

    function Bang2(name, id) {
      _classCallCheck(this, Bang2);

      return _super4.call(this, name, id);
    }

    _createClass(Bang2, [{
      key: "buscarAlvos",
      value: function buscarAlvos() {
        return _get(_getPrototypeOf(Bang2.prototype), "buscarAlvosProximos", this).call(this);
      }
    }]);

    return Bang2;
  }(CardAction2);
});